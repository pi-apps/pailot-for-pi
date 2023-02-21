import React from 'react';
import styles from './DeliveryWeightSize.module.css';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { AiOutlineEdit } from 'react-icons/ai';
import { GiCancel } from 'react-icons/gi';
import { motion } from 'framer-motion';

interface Props {
	// eslint-disable-next-line no-unused-vars
	setProgress: (value: number) => void;
}

export const DeliveryWeightSize: React.FC<Props> = ({ setProgress }) => {
	return (
		<div className={styles.container}>
			<div className={styles.top__bar}>
				<div>
					<IoMdArrowRoundBack
						className={styles.back}
						onClick={() => {
							setProgress(2);
						}}
					/>
				</div>
				<span>Active Request</span>
				<IoMdArrowRoundForward
					onClick={() => {
						setProgress(4);
					}}
				/>
			</div>
			<div className={styles.progress}>
				<div className={styles.inactive__progress}></div>
				<div className={styles.inactive__progress}></div>
				<div className={styles.active__progress}></div>
				<div className={styles.inactive__progress}></div>
				<div className={styles.inactive__progress}></div>
				<div className={styles.inactive__progress}></div>
			</div>
			<div className={styles.body}>
				<p className={styles.description}>
					Scaling your delivery for better delivery service experience{' '}
				</p>

				<h4 className={styles.header}>Weight and Size</h4>

				<label htmlFor="Weight" className={styles.label}>
					<p>Weight</p>
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
							<input type="number" name="Weight" id="" placeholder="Example: 2" />
							<GiCancel />
						</motion.div>
						<motion.select
							initial={{ x: '100vw', opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{
								delay: 0.1,
								duration: 0.5,
								type: 'tween',
							}}
							name="Weight"
							id=""
							className={styles.select}
						>
							<option value={1}>kilogram</option>
						</motion.select>
						<AiOutlineEdit className={styles.edit__icon} />
					</div>
					<span>Weight should be entered in digits</span>
				</label>
				<label htmlFor="Size" className={styles.label}>
					<p>Size</p>
					<div>
						<motion.div
							initial={{ x: '-100vw', opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{
								delay: 0.2,
								duration: 0.5,
								type: 'tween',
							}}
							className={styles.input__container}
						>
							<input type="number" name="Size" id="" placeholder="Example: 2" />
							<GiCancel />
						</motion.div>
						<motion.select
							initial={{ x: '100vw', opacity: 0 }}
							animate={{ x: 0, opacity: 1 }}
							transition={{
								delay: 0.2,
								duration: 0.5,
								type: 'tween',
							}}
							name="Size"
							id=""
							className={styles.select}
						>
							<option value={1}>inches</option>
						</motion.select>
						<AiOutlineEdit className={styles.edit__icon} />
					</div>
					<span>Size should be entered in digits</span>
				</label>
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
				<button type="button" className={styles.cta} onClick={() => setProgress(4)}>
					Next
				</button>
			</motion.div>
		</div>
	);
};
