import { isValidAddress } from 'ethereumjs-util';
import { parse } from '../parse';

const generateDocument = (did, address) => ({
	'@context': 'https://www.w3.org/2019/did/v1',
	id: did,
	publicKey: [
		{
			id: `${did}#keys-1`,
			type: 'Secp256k1VerificationKey2018',
			controller: did,
			ethereumAddress: address
		}
	],
	authentication: [`${did}#keys-1`]
});

export const resolve = async did => {
	const { method, idString } = parse(did);
	if (method !== 'eth' || !isValidAddress(idString)) {
		return Promise.reject(new Error('Not a valid eth DID'));
	}
	return Promise.resolve(generateDocument(did, idString));
};
