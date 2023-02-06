import Styles from './PhoneNumber.module.css';
import PhoneInput from 'react-phone-number-input';
import { clearIcon } from '../../../assets/icons';
import usePhoneNumber from './usePhoneNumber';
import { ConfirmPhone } from './ConfirmPhone';
export const PhoneNumber = () => {
	const { value, confirmPhoneNumber, handleSubmit, handlePhoneNumberChange } = usePhoneNumber();
	return (
		<>
			{!confirmPhoneNumber ? (
				<div id={Styles.wrapper}>
					<h3 className={Styles.settingsTitle}>Add or Change Phone Number</h3>
					<p className={Styles.settingsDescription}>
						We will send you an SMS with a verification code
					</p>
					<form className={Styles.settingsInputForm} onSubmit={handleSubmit}>
						<div className={Styles.settingsInputWrapper}>
							<PhoneInput
								international
								countryCallingCodeEditable={false}
								placeholder="Enter phone number"
								value={value}
								defaultCountry="NG"
								onChange={handlePhoneNumberChange}
								className={Styles.PhoneInput}
							/>
							<img src={clearIcon} className={Styles.clearIcon} />
						</div>
						<div className={`${!value ? Styles.settingsBtnDisabled : Styles.settingsBtn}`}>
							<button disabled={!value ? true : false} type="submit">NEXT</button>
						</div>
					</form>
				</div>
			) : (
				<ConfirmPhone />
			)}
		</>
	);
};
