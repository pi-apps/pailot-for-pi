import React, { useEffect, useState } from 'react';

function useAlertModal(
	setCloseModal: React.Dispatch<React.SetStateAction<boolean>>,
	alertType: string
) {
	const [convertedAlertType, setConvertedAlertType] = useState(alertType);
	const handleClose = () => {
		setCloseModal(false);
	};
	useEffect(() => {
		setConvertedAlertType(
			convertedAlertType.charAt(0).toUpperCase() + convertedAlertType.slice(1).toLowerCase()
		);
	}, [convertedAlertType]);
	return { handleClose, convertedAlertType };
}

export default useAlertModal;
