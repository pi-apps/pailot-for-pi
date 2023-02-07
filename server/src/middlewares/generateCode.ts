import cryptoRandomString from 'crypto-random-string';

export const generateUniqueCode = () => {
    const code = cryptoRandomString({ length: 10, type: 'alphanumeric' }).toUpperCase();
    return code;
}

