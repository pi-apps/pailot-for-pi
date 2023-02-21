import React from 'react';
import styles from './LocationModal.module.css';
import { MdOutlineClose } from 'react-icons/md';
import { AnimatePresence, motion } from 'framer-motion';

interface Props {
	closeModal: () => void;
	// eslint-disable-next-line no-unused-vars
	setProgress: (value: number) => void;
}

export const LocationModal: React.FC<Props> = ({ setProgress, closeModal }) => {
	return (
		<div className={styles.container}>
			<AnimatePresence>
				<motion.div
					initial={{ scale: 0, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					exit={{ scale: 0, opacity: 0 }}
					className={styles.modal}
				>
					<div className={styles.top__bar}>
						<MdOutlineClose onClick={() => closeModal()} />
					</div>
					<h4 className={styles.header}>Location Agreement</h4>
					<p className={styles.description}>
						Pailot do not have information of location you are about to provide for this delivery.
						<br />
						Location is only shared within the transaction parties.
					</p>
					<p className={styles.terms__and__conditions}>
						Read about our <span>Terms and Conditions, Policies</span> and <span>Privacy</span> in
						your profile settings
					</p>
					<div className={styles.cta__container}>
						<button
							type="button"
							className={styles.cta}
							onClick={() => {
								setProgress(6);
							}}
						>
							Ok
						</button>
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					exit={{ opacity: 0 }}
					className={styles.backdrop}
				></motion.div>
			</AnimatePresence>
		</div>
	);
};