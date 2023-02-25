import styles from './DeliverySummary.module.css';
import React from 'react';
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io';
import { AiOutlineEdit } from 'react-icons/ai';
import { RiEBike2Line } from 'react-icons/ri';
import { FaBicycle } from 'react-icons/fa';
import { summaryImage } from '../../assets/images';
import { motion } from 'framer-motion';
import { GiCancel } from 'react-icons/gi';
import { logo } from '../../assets/images';

interface Props {
	// eslint-disable-next-line no-unused-vars
	setProgress: (value: number) => void;
}

export const DeliverySummary: React.FC<Props> = ({ setProgress }) => {
	return (
		<div className={styles.container}>
			<div className={styles.top__bar}>
				<div>
					<IoMdArrowRoundBack
						className={styles.back}
						onClick={() => {
							setProgress(5);
						}}
					/>
				</div>
				<span>Summary</span>
				<IoMdArrowRoundForward
					onClick={() => {
						setProgress(7);
					}}
				/>
			</div>
			<div className={styles.body}>
				<div className={styles.delivery__image}>
					<div>
						<img src={summaryImage} alt="Delivery Image" />
						<div className={styles.icon__container}>
							<AiOutlineEdit className={styles.icon} />
						</div>
					</div>
					<span>file name</span>
				</div>
				<div className={styles.delivery__details}>
					<p className={styles.title}>Product name:</p>
					<p className={styles.value}>Product name sample</p>
					<div className={styles.icon__container}>
						<AiOutlineEdit className={styles.icon} />
					</div>
				</div>
				<div className={styles.delivery__details}>
					<p className={styles.title}>Description:</p>
					<p className={styles.value}>Description details</p>
					<div className={styles.icon__container}>
						<AiOutlineEdit className={styles.icon} />
					</div>
				</div>
				<div className={styles.delivery__details}>
					<p className={styles.title}>Weight:</p>
					<p className={styles.value}>Weight Info</p>
					<div className={styles.icon__container}>
						<AiOutlineEdit className={styles.icon} />
					</div>
				</div>
				<div className={styles.delivery__details}>
					<p className={styles.title}>Size:</p>
					<p className={styles.value}>Size info</p>
					<div className={styles.icon__container}>
						<AiOutlineEdit className={styles.icon} />
					</div>
				</div>
				<div className={styles.delivery__details}>
					<p className={styles.title}>Mode of Delivery:</p>
					<div className={styles.modes__of__delivery}>
						<div className={styles.mod}>
							<RiEBike2Line />
							{/* <span>Motorbike</span> */}
							<GiCancel />
						</div>
						<div className={styles.mod}>
							<FaBicycle />
							{/* <span>Bicycle</span> */}
							<GiCancel />
						</div>
					</div>
					{/* <div className={styles.icon__container}>
						<AiOutlineEdit className={styles.icon} />
					</div> */}
				</div>
				<div className={styles.delivery__details}>
					<p className={styles.title}>Delivery Region:</p>
					<p className={styles.value}>Region</p>
					<div className={styles.icon__container}>
						<AiOutlineEdit className={styles.icon} />
					</div>
				</div>
				<div className={styles.delivery__details}>
					<p className={styles.title}>Receiver Username:</p>
					<div className={styles.receivers__username}>
						<img src={logo} alt="User's Profile Photo" />
						<p>@piusername</p>
					</div>
					<div className={styles.icon__container}>
						<AiOutlineEdit className={styles.icon} />
					</div>
				</div>
				<div className={styles.delivery__details}>
					<p className={styles.title}>Pickup Location:</p>
					<p className={styles.value}>Location Merchant</p>
					<div className={styles.icon__container}>
						<AiOutlineEdit className={styles.icon} />
					</div>
				</div>
				<div className={styles.delivery__details}>
					<p className={styles.title}>Drop Location:</p>
					<p className={styles.value}>Location Receiver</p>
					<div className={styles.icon__container}>
						<AiOutlineEdit className={styles.icon} />
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
						setProgress(7);
					}}
				>
					Confirm
				</button>
			</motion.div>
		</div>
	);
};
