import React, { useState } from 'react';
function useWallet() {
	const [walletAddress, setWalletAddress] = useState('');
	const [showAlert, setShowAlert] = useState(false);
	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		setShowAlert(true);
	};
	const handleClear = () => {
		setWalletAddress('');
	};
	return {
		walletAddress,
		showAlert,
		setShowAlert,
		handleSubmit,
		setWalletAddress,
		handleClear,
	};
}
export default useWallet;
