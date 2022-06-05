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

  const token = jwt.sign(object, 'nuclearcodes', {
    ...(options && options),
    algorithm: 'RS256',
  });
  console.log({ token });
}

export function verfiyJwt(token: string) {
  try {
    const decoded = jwt.verify(token, publicKey);
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
