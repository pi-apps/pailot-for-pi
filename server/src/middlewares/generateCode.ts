import cryptoRandomString from 'crypto-random-string';

export type UniqueCodeType =
	| 'hex'
	| 'base64'
	| 'url-safe'
	| 'numeric'
	| 'distinguishable'
	| 'ascii-printable'
	| 'alphanumeric';

export const generateUniqueCode = (length: number, type: UniqueCodeType) => {
	const code = cryptoRandomString({ length, type }).toUpperCase();
	return code;
};
