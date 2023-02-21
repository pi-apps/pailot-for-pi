import React from 'react';
import styles from './ShareLocation.module.css';
import { logo } from '../../assets/images/index';
import { WorldIcon } from '../../assets/icons';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export const ShareLocation = () => {
	const navigate = useNavigate();
	const shareLocationHandler = () => {
		navigate('/onboarding-completed');
	};
	return (
		<div className={styles.container}>
			<div className={styles.profile}>
				<motion.div initial={{ x: 32 }} animate={{ x: 0 }}>
					<img src={logo} alt="Profile Photo" className={styles.profile__photo} />
					<span>Pailot</span>
				</motion.div>
			</div>
			<p className={styles.intro}>Explore local stores, couriers, warehouse and logistics</p>
			<div className={styles.mid}>
				<img src={WorldIcon} alt="World Icon" className={styles.world__logo} />
				<p className={styles.description}>
					Help <span>Pailot</span> display your local delivery options by granting location
					permission
				</p>
			</div>
			<div className={styles.cta__container}>
				<button className={styles.share__location} onClick={shareLocationHandler}>
					Share Location
				</button>
				<button className={styles.not__now}>Not now</button>
			</div>
		</div>
	);
};
