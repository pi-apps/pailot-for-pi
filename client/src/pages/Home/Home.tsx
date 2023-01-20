import React from 'react';
import styles from './Home.module.css';
import { Button } from '../../components/Button';

export const Home = () => {
	return (
		<div className={styles.home}>
			<h1 className={styles.paragraph}>This is the Demo Home Page for the Pailot App</h1>
			<Button />
		</div>
	);
};
