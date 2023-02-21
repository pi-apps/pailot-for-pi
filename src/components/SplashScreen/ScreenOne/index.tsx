import React from 'react';
import { logo } from '../../../assets/images';
import { motion } from 'framer-motion';
import { scaleRotate, fadeIn } from '../../../animations';
import styles from './ScreenOne.module.css';
import {SplashScreenState} from '../../../types/SplashScreenState'

type Props = {
	setNextScreen: React.Dispatch<React.SetStateAction<SplashScreenState>>;
};

export const ScreenOne = ({ setNextScreen }: Props) => {
	return (
		<div id={styles.wrapper}>
			<motion.div
				id={styles.logo_wrapper}
				animate={scaleRotate}
				onAnimationComplete={() => setNextScreen('progress_bar')}
			>
				<motion.div animate={fadeIn}>
					<img src={logo} />
				</motion.div>
			</motion.div>
		</div>
	);
};
