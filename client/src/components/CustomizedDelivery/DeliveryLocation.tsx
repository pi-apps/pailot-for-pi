import styles from './DeliveryLocation.module.css';
import React, { useState } from 'react';
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io';
// import { RiEBike2Line } from 'react-icons/ri';
import { GiCancel } from 'react-icons/gi';
import { MdOutlineClose } from 'react-icons/md';
import { BsCheckLg } from 'react-icons/bs';
// import { TbSpeedboat } from 'react-icons/tb';
// import { SlPlane } from 'react-icons/sl';
import { motion } from 'framer-motion';
import { LocationModal } from './LocationModal';
// import { useRef } from 'react';

interface Props {
	// eslint-disable-next-line no-unused-vars
	setProgress: (value: number) => void;
}

export const DeliveryLocation: React.FC<Props> = ({ setProgress }) => {
	const [loadingState, setLoadingState] = useState<string>('error');
	const [showModal, setShowModal] = useState<boolean>(false);
	const closeModal = () => {
		setShowModal(false);
	};
	return (
		<div className={styles.container}>
			<div className={styles.top__bar}>
				<div>
					<IoMdArrowRoundBack
						className={styles.back}
						onClick={() => {
							setProgress(4);
						}}
					/>
				</div>
				<span>Customized Request</span>
				<IoMdArrowRoundForward
					onClick={() => {
						setProgress(5);
					}}
				/>
			</div>
			<div className={styles.progress}>
				<div className={styles.inactive__progress}></div>
				<div className={styles.inactive__progress}></div>
				<div className={styles.inactive__progress}></div>
				<div className={styles.inactive__progress}></div>
				<div className={styles.active__progress}></div>
				<div className={styles.inactive__progress}></div>
			</div>
			<div className={styles.body}>
				<p className={styles.description}>
					Scaling your delivery for better delivery service experience{' '}
				</p>
				<h4 className={styles.header}>Give a Location</h4>

				<label htmlFor="Pickup Location" className={styles.label}>
					<p>Pickup Location</p>
					<div className={styles.input__container}>
						<input type="text" name="Pickup Location" placeholder="Your Location" />
					</div>
					<span>Sender or Merchant Location</span>
				</label>
				<label htmlFor="Receiver Location" className={styles.label}>
					<p>Drop Location</p>
					<div className={styles.input__container}>
						<input type="text" name="Receiver Location" placeholder="Receiver Location" />
					</div>
					<span>Person(s) to receive delivery</span>
				</label>

				<h4 className={styles.header}>Confirm Reciever</h4>

				<label htmlFor="Receiver Pi Username" className={styles.label}>
					<p>Receiver Pi Username</p>
					<div className={styles.div}>
						<div className={styles.input__container}>
							<input
								type="text"
								name="Receiver Pi Username"
								placeholder="Receiver Pi Username"
								onChange={() => {
									setLoadingState('loading');
								}}
							/>
							<GiCancel />
						</div>
						<div className={styles.loading__state__container}>
							{loadingState === 'loading' && <div className={styles.loading__spinner}></div>}
							{loadingState === 'error' && <MdOutlineClose color="rgba(255, 5, 5, 1)" />}
							{loadingState === 'success' && <BsCheckLg color="rgba(2, 205, 22, 1)" />}
						</div>
					</div>
					<span>Person to receive delivery</span>
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
				<button
					type="button"
					className={styles.cta}
					onClick={() => {
						setShowModal(true);
					}}
				>
					Next
				</button>
			</motion.div>
			{showModal && <LocationModal setProgress={setProgress} closeModal={closeModal} />}
		</div>
	);
};
