import React from 'react';
import styles from './Upload.module.css';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import { RiUploadCloud2Line } from 'react-icons/ri';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';

interface Props {
	// eslint-disable-next-line no-unused-vars
	setProgress: (value: number) => void;
}

export const Upload: React.FC<Props> = ({ setProgress }) => {
	const [uploadedImage, setUploadedImage] = useState<string>('xyzfile.extension');

	const navigate = useNavigate();
	const inputRef = useRef<any>();
	const onChangeHandler = () => {
		if (inputRef.current.files && inputRef.current.files.length > 0) {
			setUploadedImage(inputRef.current.files[0].name);
		}
	};
	return (
		<div className={styles.container}>
			<div className={styles.top__bar}>
				<div>
					<IoMdArrowRoundBack
						className={styles.back}
						onClick={() => {
							navigate('/home');
						}}
					/>
				</div>
				<span>Customized Delivery</span>
				<div className={styles.progress}>
					<div className={styles.active__progress}></div>
					<div className={styles.inactive__progress}></div>
					<div className={styles.inactive__progress}></div>
					<div className={styles.inactive__progress}></div>
					<div className={styles.inactive__progress}></div>
					<div className={styles.inactive__progress}></div>
				</div>
			</div>

			<div className={styles.body}>
				<p className={styles.description}>
					What item will you want <br /> to deliver?
				</p>
				<label htmlFor="avatar" className={styles.label}>
					Upload an Image
				</label>

				<motion.div
					initial={{ scale: 0, opacity: 0 }}
					animate={{ scale: 1, opacity: 1 }}
					transition={{
						delay: 0.1,
						duration: 0.4,
					}}
					className={styles.input__container}
				>
					<RiUploadCloud2Line className={styles.upload__icon} />
					<span>Tap the Icon to Upload</span>
					<input
						type="file"
						name="avatar"
						accept="image/png, image/jpeg, image/jpg"
						placeholder="None"
						onChange={onChangeHandler}
						ref={inputRef}
					/>
				</motion.div>
				<span className={styles.file__name}>{uploadedImage}</span>
			</div>
			<motion.div
				initial={{ y: 100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{
					delay: 0.3,
					duration: 0.3,
				}}
				className={styles.cta__container}
			>
				<button type="button" className={styles.cta} onClick={() => setProgress(2)}>
					Next
				</button>
			</motion.div>
		</div>
	);
};
