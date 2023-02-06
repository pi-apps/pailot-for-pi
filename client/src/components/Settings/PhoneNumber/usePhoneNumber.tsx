import React, { useState } from 'react';

function usePhoneNumber() {
	const [confirmPhoneNumber, setConfirmPhoneNumber] = useState(true);
	const [otp, setOtp] = useState<string>('');
	const [value, setValue] = useState('');
	const [successIcon, setSuccessIcon] = useState<boolean>(false);

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};
	const handlePhoneNumberChange = (value: string) => {
		setValue(value);
	};

	const handleOtp = (otp: string) => {
		setOtp(otp);
	};

	const handleConfirmOtp = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		setSuccessIcon(true)
	}

	return {
		handleSubmit,
		handlePhoneNumberChange,
		setConfirmPhoneNumber,
		handleOtp,
		setSuccessIcon,
		handleConfirmOtp,
		successIcon,
		otp,
		confirmPhoneNumber,
		value,
	};
}
export default usePhoneNumber;
