'use strict';

Object.defineProperty(exports, '__esModule', {
	value: true
});
exports.getPEMBits = exports.generateRSAKeyPair = void 0;

const { generateKeyPair } = require('crypto');

const pemtools = require('pemtools');

const generateRSAKeyPair = (length = 4096) => {
	return new Promise((resolve, reject) => {
		generateKeyPair(
			'rsa',
			{
				modulusLength: length,
				publicKeyEncoding: {
					type: 'spki',
					format: 'pem'
				},
				privateKeyEncoding: {
					type: 'pkcs1',
					format: 'pem'
				}
			},
			(err, publicKey, privateKey) => {
				if (err) {
					return reject(err);
				}

				return resolve({
					privateKey,
					publicKey
				});
			}
		);
	});
};

exports.generateRSAKeyPair = generateRSAKeyPair;

const getPEMBits = privateKey => {
	const pem = pemtools(privateKey);
	return pem.pubkey.bits;
};

exports.getPEMBits = getPEMBits;