import React from 'react';
import styles from './Button.module.css';

interface Props {
	value: string;
}
export const Button = ({ value }: Props) => {
	return <button className={styles.button}>{value}</button>;
};
