import { logo } from '../../../assets/images';
import styles from './ScreenTwo.module.css';
import { motion } from 'framer-motion';
import React from 'react';
type Props = {
	setNext_screen: React.Dispatch<React.SetStateAction<string>>;
};

export const ScreenTwo = ({ setNext_screen }: Props) => {
	return (
		<div id={styles.wrapper}>
			<img src={logo} />
			<div className={styles.progress_bar_background}>
				<motion.div
					initial={{ width: '0%' }}
					animate={{ width: '100%' }}
					transition={{ duration: 10 }}
					onAnimationComplete={() => setNext_screen('welcome')}
					className={styles.progress_bar}
				></motion.div>
			</div>
		</div>
	);
};
