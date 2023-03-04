import React from 'react';
import { logo } from '../../../assets/images';
import styles from './ScreenTwo.module.css';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export const ScreenTwo = () => {
	const navigate = useNavigate();

	const handleAnimationComplete = () => {
		const userData = sessionStorage.getItem('user');
		if (userData) {
			console.log(JSON.parse(userData));
			navigate('/home');
		} else {
			navigate('/welcome');
		}
	};

	return (
		<div id={styles.wrapper}>
			<img src={logo} alt="Pailot's Logo" />
			<div className={styles.progress_bar_background}>
				<motion.div
					initial={{ width: '0%' }}
					animate={{ width: '100%' }}
					transition={{ duration: 5 }}
					onAnimationComplete={handleAnimationComplete}
					className={styles.progress_bar}
				></motion.div>
			</div>
		</div>
	);
};
