import React from 'react';
import Styles from './PhoneNumber.module.css';
import OtpInput from 'react-otp-input';
import usePhoneNumber from './usePhoneNumber';
import { AiOutlineArrowLeft } from '../../../assets/icons';
import { AlertModal } from '../../../components';
import { Link } from 'react-router-dom';

export const ConfirmPhone = () => {
	const { otp, handleOtp, setSuccessIcon, handleConfirmOtp, successIcon } = usePhoneNumber();
	return (
		<div id={Styles.wrapper}>
			<div>
				<h3 className={Styles.settingsTitle}>
					Confirm the verification code sent to +23400****0000
				</h3>
				<form className={Styles.settingsInputForm} onSubmit={handleConfirmOtp}>
					<OtpInput
						value={otp}
						onChange={handleOtp}
						numInputs={6}
						separator={<span>&nbsp;</span>}
						containerStyle={Styles.otpInputContainer}
						inputStyle={{
							boxSizing: 'border-box',
							width: '2.5rem',
							padding: '14px',
							margin: '10px 0',
							border: '1px solid #d9d9d9',
							outline: 'none',
							color: 'black',
							background: '#E2E8FF',
							borderRadius: '4px',
						}}
					/>

					<div className={`${otp.length < 6 ? Styles.settingsBtnDisabled : Styles.settingsBtn}`} >
						<button type="submit" disabled={otp.length < 6 ? true : false}>CONFIRM</button>
					</div>
				</form>
				<div className={Styles.settingFooter}>
					<p>
						Didn&lsquo;t get code? <span style={{ color: '#30007E' }}>Resend code</span>
					</p>
					<div className={Styles.settingGoBack}>
						<Link to="/settings">
							<AiOutlineArrowLeft className={Styles.settingIcon} />
							go back to profile
						</Link>
					</div>
				</div>

				{successIcon && <AlertModal
					title="Successful!"
					message="Phone Number Verified"
					alertType="success"
					setCloseModal={setSuccessIcon}
					duration={10}
				/>}
			</div>
		</div>
	);
};
