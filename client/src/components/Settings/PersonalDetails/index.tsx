import React from 'react';
import { clearIcon } from '../../../assets/icons';
import Styles from './PersonalDetails.module.css';
export const PersonalDetails = () => {
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};
	return (
		<div id={Styles.wrapper}>
			<h3 className={Styles.settingsTitle}>
				Please enter you names as it is on your Pi Netwok account
			</h3>
			<form className={Styles.settingsInputWrapper} onSubmit={handleSubmit}>
				<div className={Styles.settingsInput}>
					<label>
						<small>Firstname</small>
					</label>
					<input type="text" />
					<img src={clearIcon} />
				</div>

				<div className={Styles.settingsInput}>
					<label>
						<small>Lastname</small>
					</label>
					<input type="text" />
					<img src={clearIcon} />
				</div>

				<div className={Styles.settingsInput}>
					<label>
						<small>Othername</small>
					</label>
					<input type="text" />
					<img src={clearIcon} />
				</div>
				<div className={Styles.settingsBtn}>
					<button type="submit">SAVE</button>
				</div>
			</form>
		</div>
	);
};
