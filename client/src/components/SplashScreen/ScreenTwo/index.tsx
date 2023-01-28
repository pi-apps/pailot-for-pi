import React from 'react';
import { logo } from '../../../assets/images';
import styles from './ScreenTwo.module.css';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

export const ScreenTwo = () => {
	const navigate = useNavigate();
	return (
		<div id={styles.wrapper}>
			<img src={logo} />
			<div className={styles.progress_bar_background}>
				<motion.div
					initial={{ width: '0%' }}
					animate={{ width: '100%' }}
					transition={{ duration: 10 }}
					onAnimationComplete={() => navigate('/welcome')}
					className={styles.progress_bar}
				></motion.div>
			</div>
		</div>
	);
};
