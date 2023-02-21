import React from 'react';
import { BsCheckLg, BsInfoLg, GrStatusWarning, BiError, MdClose } from '../../../assets/icons';
import Styles from './AlertModal.module.css';
import { motion } from 'framer-motion';
import useAlertModal from './useAlertModal';
import { scale } from '../../../animations';

interface Props {
	title: string;
	alertType: string;
	message?: string;
	duration?: number;
	setCloseModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export const AlertModal = ({ title, alertType, message, duration, setCloseModal }: Props) => {
	const { handleClose, convertedAlertType } = useAlertModal(setCloseModal, alertType);
	return (
		<div className={Styles.modalOverlay}>
			<motion.div
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				exit={{ y: -100, opacity: 0 }}
				transition={{ type: 'spring', stiffness: 300, damping: 20 }}
				className={Styles.modalContainer}
			>
				<MdClose onClick={handleClose} className={Styles.modalClose} />
				<div className={Styles.modalInnerContainer}>
					{convertedAlertType == 'Success' && (
						<motion.div
							animate={scale(0, 0.5)}
							className={`${Styles.alertIconBg1} ${Styles.successAlert1}`}
						>
							<motion.div
								animate={scale(1, 0.5)}
								className={`${Styles.alertIconBg2} ${Styles.successAlert2}`}
							>
								<motion.div animate={scale(1.5, 0.5)} className={Styles.alertIconBg3}>
									<BsCheckLg />
								</motion.div>
							</motion.div>
						</motion.div>
					)}

					{convertedAlertType == 'Info' && (
						<motion.div
							animate={scale(0, 0.5)}
							className={`${Styles.alertIconBg1} ${Styles.infoAlert1}`}
						>
							<motion.div
								animate={scale(1, 0.5)}
								className={`${Styles.alertIconBg2} ${Styles.infoAlert2}`}
							>
								<motion.div animate={scale(1.5, 0.5)} className={Styles.alertIconBg3}>
									<BsInfoLg />
								</motion.div>
							</motion.div>
						</motion.div>
					)}

					{convertedAlertType == 'Warning' && (
						<motion.div
							animate={scale(0, 0.5)}
							className={`${Styles.alertIconBg1} ${Styles.warningAlert1}`}
						>
							<motion.div
								animate={scale(1, 0.5)}
								className={`${Styles.alertIconBg2} ${Styles.warningAlert2}`}
							>
								<motion.div animate={scale(1.5, 0.5)} className={Styles.alertIconBg3}>
									<GrStatusWarning />
								</motion.div>
							</motion.div>
						</motion.div>
					)}

					{convertedAlertType == 'Error' && (
						<motion.div
							animate={scale(1, 0.5)}
							className={`${Styles.alertIconBg1} ${Styles.errorAlert1}`}
						>
							<motion.div
								animate={scale(1.5, 0.5)}
								className={`${Styles.alertIconBg2} ${Styles.errorAlert2}`}
							>
								<motion.div animate={scale(2, 0.5)} className={Styles.alertIconBg3}>
									<BiError />
								</motion.div>
							</motion.div>
						</motion.div>
					)}
					<div className={Styles.messages}>
						<h3 className={Styles.title}>{title}</h3>
						<p className={Styles.message}>{message}</p>
					</div>
				</div>
				{duration && (
					<motion.div
						initial={{ width: '0%' }}
						animate={{ width: '100%' }}
						transition={{ duration }}
						onAnimationComplete={handleClose}
						className={Styles.progress_bar}
					></motion.div>
				)}
			</motion.div>
		</div>
	);
};
