import React from 'react';
import { worldLogo } from '../../../assets/icons';
import styles from './SelectLanguage.module.css';
export const SelectLanguage = () => {
	return (
		<div className={styles.language}>
			<div>
				<img src={worldLogo} />
				<select>
					<option value="english">English</option>
					<option value="english">French</option>
					<option value="english">Spanish</option>
				</select>
			</div>
		</div>
	);
};
