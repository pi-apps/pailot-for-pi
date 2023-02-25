import React from 'react';
import styles from './OnlineDelivery.module.css';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { CgSearch } from 'react-icons/cg';
import { filter, nigerianFlag } from '../../assets/icons';
import { CourierCard } from '../Common/CourierCard/CourierCard';

interface Props {
	// eslint-disable-next-line no-unused-vars
	setProgress: (value: number) => void;
}

export const OnlineDelivery: React.FC<Props> = () => {
	const navigate = useNavigate();
	return (
		<div className={styles.container}>
			<div className={styles.top__bar}>
				<div>
					<IoMdArrowRoundBack
						className={styles.back}
						onClick={() => {
							navigate('/home');
						}}
					/>
				</div>
				<span>Customized Delivery</span>
				<div className={styles.progress}>
					<div className={styles.active__progress}></div>
					<div className={styles.inactive__progress}></div>
					<div className={styles.inactive__progress}></div>
					<div className={styles.inactive__progress}></div>
					<div className={styles.inactive__progress}></div>
					<div className={styles.inactive__progress}></div>
				</div>
			</div>
			<div className={styles.body}>
				<div className={styles.search__container}>
					<label className={styles.search}>
						<CgSearch className={styles.search__icon} />
						<input
							type="text"
							className={styles.input}
							placeholder="Search courier by username, region or location"
						/>
					</label>
					<img src={filter} alt="" className={styles.filter__icon} />
				</div>

				<header className={styles.header}>
					<h3>Available Couriers close to you</h3>
					<p>
						<img src={nigerianFlag} alt="Nigerian Flag" /> Yaba, LAG
					</p>
				</header>

				<CourierCard status="pending" online={true} />
				<CourierCard status="picked" online={true} />
				<CourierCard status="pick" online={false} />
				<CourierCard status="pick" online={true} />

				<header className={styles.header}>
					<h3>Dispatchers close to your region</h3>
				</header>
				<CourierCard status="pick" online={false} />
				<CourierCard status="pick" online={true} />
				<CourierCard status="pick" online={true} />
			</div>
		</div>
	);
};
