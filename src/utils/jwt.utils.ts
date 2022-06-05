import jwt from 'jsonwebtoken';
import config from 'config';
import { ObjectId } from 'mongoose';
const privateKey = config.get<string>('accessTokenPrivateKey');
const publicKey = config.get<string>('accessTokenPublicKey');

export function signJwt(
  object: Object,
  keyName: 'accessTokenPrivateKey' | 'refreshTokenPrivateKey',
  options?: jwt.SignOptions | undefined,
) {
  const signingKey = Buffer.from(
    config.get<string>(keyName),
    'base64',
  ).toString('ascii');

  //TODO: use RSA hashing algorithm instead
  //   const token = jwt.sign(object, 'nuclearcodes', {
  //     ...(options && options),
  //     algorithm: 'RS256',
  //   });
  const token = jwt.sign(object, config.get('jwtSecret'), {
    ...(options && options),
  });
  return token;
}

interface verifyJwtInterface {
  decoded: any;
  valid: boolean;
  expired: boolean;
}

export function verfiyJwt(token: string): verifyJwtInterface {
  try {
    // TODO: use this one when using the rs256 hasing
    // const decoded = jwt.verify(token, publicKey);

    const decoded = jwt.decode(token, config.get('jwtSecret'));

    return {
      valid: true,
      expired: false,
      decoded,
    };
  } catch (err: any) {
    return {
      valid: false,
      expired: err.message === 'jwt expired',
      decoded: null,
    };
  }
}
