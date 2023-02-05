import React from 'react';
import Styles from './PhoneNumber.module.css';
import OtpInput from 'react-otp-input';
import usePhoneNumber from './usePhoneNumber'
export const ConfirmPhone = () => {
	const { otp, handleOtp } = usePhoneNumber()
	return (
		
		<div id={Styles.wrapper}>
			<h3 className={Styles.settingsTitle}>Confirm the verification code sent to +23400****0000</h3>
			<form className={Styles.settingsInputForm}>
				{otp}
				<OtpInput
					value={otp}
					onChange={handleOtp}
					numInputs={6}
					separator={<span>&nbsp;</span>}
					containerStyle={Styles.otpInputContainer}
					inputStyle={Styles.inputStyle}
				/>

				<div className={Styles.settingsBtn}>
					<button type="submit">CONFIRM</button>
				</div>
			</form>
		</div>
	);
};
