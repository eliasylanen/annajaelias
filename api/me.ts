import type { NowRequest, NowResponse } from '@vercel/node';
import { JsonWebTokenError, verify } from 'jsonwebtoken';
import { jwtSecret } from '../config';

export default async (req: NowRequest, res: NowResponse) => {
  const { token } = req.body;

  if (!token) {
    return res.status(401).send('No token given');
  }

  try {
    const user = verify(token, jwtSecret);
    res.json(user).end();
  } catch (err) {
    console.error({ err });
    res.status(401).end();
  }
};
