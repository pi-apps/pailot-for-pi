import styles from './DeliveryPayment.module.css';
import React from 'react';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { motion } from 'framer-motion';

interface Props {
	// eslint-disable-next-line no-unused-vars
	setProgress: (value: number) => void;
}

export const DeliveryPayment: React.FC<Props> = ({ setProgress }) => {
	return (
		<div className={styles.container}>
			<div className={styles.top__bar}>
				<div>
					<IoMdArrowRoundBack
						className={styles.back}
						onClick={() => {
							setProgress(6);
						}}
					/>
				</div>
				<span>Payment</span>
			</div>
			<div className={styles.body}>
				<p className={styles.description}>
					Final stop! Tell Pailot how much Pi you are willing to pay
				</p>
				<h4 className={styles.header}>Pay with Pi</h4>

				<label htmlFor="Amount" className={styles.label}>
					<p>Amount</p>
					<div>
						<motion.div
							initial={{ x: '-100vw', opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{
								delay: 0.1,
								duration: 0.5,
								type: 'tween',
							}}
							className={styles.input__container}
						>
							<input type="number" name="Amount" placeholder="0.00000" />
						</motion.div>
					</div>
					<span>Amount should not be less than 0.006</span>
				</label>
				<div className={styles.charges}>
					<div className={styles.fees}>
						<div>
							<p>Network fee:</p>
							<span>0.003</span>
						</div>
						<div>
							<p>Transaction fee:</p>
							<span>0.001</span>
						</div>
					</div>
					<div className={styles.total}>
						<p>Total</p>
						<span>0.004</span>
					</div>
				</div>
			</div>
			<motion.div
				initial={{ y: 100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{
					delay: 0.5,
					duration: 0.3,
				}}
				className={styles.cta__container}
			>
				<button
					type="button"
					className={styles.cta}
					onClick={() => {
						setProgress(8);
					}}
				>
					Pay with Pi
				</button>
			</motion.div>
		</div>
	);
};
