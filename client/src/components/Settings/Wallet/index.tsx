import { ClearIcon } from '../../../assets/icons';
import Styles from './Wallet.module.css';
import useWallet from './useWallet';
import { AlertModal } from '../../Common/AlertModal';
export const Wallet = () => {
	const { walletAddress, showAlert, setShowAlert, handleSubmit, handleClear, setWalletAddress } =
		useWallet();
	return (
		<div id={Styles.wrapper}>
			<h3 className={Styles.settingsTitle}>Copy and paste your Pi wallet address here</h3>
			<form className={Styles.settingsInputWrapper} onSubmit={handleSubmit}>
				<div className={Styles.settingsInput}>
					<input
						type="text"
						value={walletAddress}
						onChange={(e) => setWalletAddress(e.target.value)}
						placeholder="Example: GMAHN9830OIPRTYEUI5"
					/>
					<img src={ClearIcon} onClick={handleClear} />
				</div>

				<div className={`${!walletAddress ? Styles.settingsBtnDisabled : Styles.settingsBtn}`}>
					<button disabled={!walletAddress ? true : false} type="submit">
						SAVE
					</button>
				</div>
			</form>
			{showAlert && (
				<AlertModal
					title="Successful!"
					message="Phone Number Verified"
					alertType="success"
					setCloseModal={setShowAlert}
					duration={10}
				/>
			)}
		</div>
	);
};
