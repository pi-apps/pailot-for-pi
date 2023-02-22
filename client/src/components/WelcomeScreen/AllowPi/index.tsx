import React from 'react';
import { useState } from 'react';
import styles from './AllowPi.module.css';
import { logo } from '../../../assets/images';
import { CreateUserDTO } from '../../../types/user';
import { PaymentDTO } from '../../../types/payment';
import { fetchWithCredentials } from '../../../hooks/useApi';
import { INCOMPLETE_PAYMENT_URL, SIGN_IN_URL } from '../../../constants/url.constants';
import { useNavigate } from 'react-router-dom';

type Props = {
	setCloseFingerPrint: React.Dispatch<React.SetStateAction<boolean>>;
};

// eslint-disable-next-line no-unused-vars
export const AllowPi = ({ setCloseFingerPrint }: Props) => {
	const [toggleActive, setToggleActive] = useState(false);
	const navigate = useNavigate();
	const handleCheckbox = () => {
		setToggleActive(!toggleActive);
	};

	const scopes = ['username', 'payments', 'platform'];
	const signIn = async () => {
		if (toggleActive == true) {
			const authResult: CreateUserDTO = await window.Pi.authenticate(
				scopes,
				onIncompletePaymentFound
			);
			console.log(authResult);
			const user = await signInUser(authResult);
			console.log(user);
			navigate('/home');
		}
	};

	const onIncompletePaymentFound = async (payment: PaymentDTO) => {
		console.log('onIncompletePaymentFound', payment);
		return await fetchWithCredentials(INCOMPLETE_PAYMENT_URL, {
			method: 'GET',
		});
	};

	const signInUser = async (authResult: CreateUserDTO) => {
		return await fetchWithCredentials(SIGN_IN_URL, {
			method: 'POST',
			data: { authResult },
		});
	};

	return (
		<div className={styles.allowPi}>
			<img src={logo} alt="Pailot Logo" />
			<h3>Welcome to Pailot!</h3>
			<p>Pailot connect your Pi Network account to experience the best web 3 delivery service</p>
			<div className={styles.tick}>
				<input type="checkbox" onChange={handleCheckbox} />
				<p>I agree to allow Pailot connect to my Pi account </p>
			</div>
			<button
				onClick={signIn}
				className={`${styles.allowBtn} ${
					toggleActive ? styles.allowBtnActive : styles.allowBtnInactive
				}`}
			>
				Allow Pi Network
			</button>
			<p className={styles.terms}>
				Learn more about Pailot <a href="#terms">terms and conditions</a>
			</p>
		</div>
	);
};
