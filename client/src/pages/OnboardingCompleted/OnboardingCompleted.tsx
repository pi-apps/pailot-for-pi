import React from 'react';
import styles from './OnboardingCompleted.module.css';
import { logo } from '../../assets/images/index';
import { IoMdArrowRoundBack } from '../../assets/icons';
import { BsCheckLg } from '../../assets/icons';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

export const OnboardingCompleted = () => {
	const navigate = useNavigate();
	return (
		<div className={styles.container}>
			<div className={styles.profile}>
				<AnimatePresence>
					<motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
						<IoMdArrowRoundBack
							className={styles.back}
							onClick={() => {
								navigate(-1);
							}}
						/>
					</motion.div>
				</AnimatePresence>
				<motion.div initial={{ x: -32 }} animate={{ x: 0 }} className={styles.photo__and__name}>
					<img src={logo} alt="Profile Photo" className={styles.profile__photo} />
					<span>Pailot</span>
				</motion.div>
			</div>
			<div className={styles.page__content}>
				<h3>You are all set</h3>
				<p>Get ready to be Pailoted in your everyday delivery worldwide using your Pi coin</p>
				<div className={styles.cta__container}>
					<motion.button
						initial={{ y: 25, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{
							delay: 0.2,
							type: 'tween',
						}}
						className={styles.explore__cta}
						onClick={() => [navigate('/home')]}
					>
						Explore Pailot
					</motion.button>
					<motion.button
						initial={{ y: 25, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{
							delay: 0.3,
							type: 'tween',
						}}
						className={styles.go__to__profile__cta}
					>
						Take me to my profile
					</motion.button>
				</div>
				<motion.div
					initial={{ scale: 0 }}
					animate={{ scale: [0, 1.3, 1] }}
					transition={{
						delay: 0.4,
					}}
					className={styles.checkmark}
				>
					<BsCheckLg />
				</motion.div>
			</div>
		</div>
	);
};
