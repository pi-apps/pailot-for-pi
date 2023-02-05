import React, { useState } from 'react';

function usePhoneNumber() {
    const [confirmPhoneNumber, setConfirmPhoneNumber] = useState(true)
    const [otp, setOtp] = useState<string>('')
    const [value, setValue] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
    };
    const handlePhoneNumberChange = (value: string) => {
        setValue(value);
    };

    const handleOtp = (otp:string) =>{
        setOtp(otp)
    

    }

    return { handleSubmit, handlePhoneNumberChange, setConfirmPhoneNumber, handleOtp, otp,confirmPhoneNumber, value };
}
export default usePhoneNumber;
