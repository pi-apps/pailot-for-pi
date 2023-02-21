import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import styles from './Home.module.css';
import { logo } from '../../assets/images/index';
import { deliveryLady } from '../../assets/images/index';
import { deliveryMan } from '../../assets/images/index';
import { deliveryBikeMan } from '../../assets/images/index';
import { FooterNavBar, HomePlus } from '../../components';

export const Home = () => {
	const navigate = useNavigate();
	return (
		<div className={styles.container}>
			<div className={styles.profile}>
				<motion.div initial={{ x: 32 }} animate={{ x: 0 }}>
					<img
						src={logo}
						onClick={() => navigate('/settings')}
						alt="Profile Photo"
						className={styles.profile__photo}
					/>
					<span>Pailot</span>
				</motion.div>
			</div>
			<div className={styles.carousel__container}>
				<div className={styles.carousel}>
					<div className={styles.content}>
						<h3>Welcome to Pailot</h3>
						<p>
							Hub for <span>decentralized</span> delivery for all works of pioneers around the
							everyday ecosystem
						</p>

						<span>FAST. DECENTRALIZED. SAFE & SECURE</span>

						<button className={styles.cta}>Read More</button>
					</div>
					<img src={deliveryLady} alt="Delivery Lady" />
				</div>
				<div className={styles.navigate}>
					<div className={styles.active__div}></div>
					<div></div>
					<div></div>
				</div>
			</div>
			<div className={styles.delivery__and__courier}>
				<motion.div
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{
						duration: 0.5,
					}}
					className={styles.modal__container}
				>
					<h5 className={styles.header}>Create your first delivery</h5>
					<div className={styles.modal}>
						<div>
							<div className={styles.modal__content}>
								<p>Be in charge by creating</p>
								<span>Delivery</span>
								<p>that is safe, fast & conveniently pay with Pi coin</p>
							</div>
							<img src={deliveryMan} alt="Delivery Man" />
						</div>
						<div className={styles.cta__container}>
							<button type="button" className={styles.big__cta}>
								Make a delivery
							</button>
							<button type="button" className={styles.text__cta}>
								Learn more
							</button>
						</div>
					</div>
				</motion.div>
				<motion.div
					initial={{ y: 50, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{
						delay: 0.1,
						duration: 0.5,
					}}
					className={styles.modal__container}
				>
					<h5 className={styles.header}>Become a Courier</h5>
					<div className={styles.modal}>
						<div>
							<div className={styles.modal__content}>
								<p>Be a one time</p>
								<span>Courier</span>
								<p>and earn Pi for every delivery</p>
							</div>
							<img src={deliveryBikeMan} alt="Delivery Bike Man" />
						</div>
						<div className={styles.cta__container}>
							<button className={styles.big__cta}>Become a courier</button>
							<button className={styles.text__cta}>Learn more</button>
						</div>
					</div>
				</motion.div>
				<div className={styles.homeplus__container}>
					<HomePlus />
				</div>
			</div>
			<FooterNavBar />
		</div>
	);
};
