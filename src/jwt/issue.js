import { promisify } from 'util';
import jwt from 'jsonwebtoken';
import { JWT_ALGORITHMS } from './const';
const signJWT = promisify(jwt.sign);

export const issueJWT = (
	subject,
	requestedAlgorithm,
	secret,
	typ = 'JWT',
	expiresIn = '1h',
	additionalClaims = {}
) => {
	const payload = {
		...additionalClaims,
		typ
	};

	delete payload.exp;
	delete payload.iat;
	delete payload.sub;

	const algorithm = JWT_ALGORITHMS[(requestedAlgorithm || '').toUpperCase()];

	if (!algorithm) {
		throw new Error(`Unknown algorithm ${requestedAlgorithm}`);
	}

	const options = {
		algorithm,
		subject,
		expiresIn
	};
	return signJWT(payload, secret, options);
};

export default issueJWT;
