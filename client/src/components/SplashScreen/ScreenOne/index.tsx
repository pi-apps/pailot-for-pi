import React from 'react';
import { logo } from '../../../assets/images';
import { motion } from 'framer-motion';
import { scaleRotate, fadeIn } from '../../../animations';
import styles from './ScreenOne.module.css';

type Props = {
	setNext_screen: React.Dispatch<React.SetStateAction<string>>;
};

export const ScreenOne = ({ setNext_screen }: Props) => {
	return (
		<div id={styles.wrapper}>
			<motion.div
				id={styles.logo_wrapper}
				animate={scaleRotate}
				onAnimationComplete={() => setNext_screen('progress_bar')}
			>
				<motion.div animate={fadeIn}>
					<img src={logo} />
				</motion.div>
			</motion.div>
		</div>
	);
};
