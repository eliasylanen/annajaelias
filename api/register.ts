import type { NowRequest, NowResponse } from '@vercel/node';
import { sign } from 'jsonwebtoken';
import { getSheet, getUserRowByEmail } from '../util/googleSheets';
import { jwtSecret } from '../config';
import type { User } from '../types';

export default async (req: NowRequest, res: NowResponse) => {
  const { name, email, key } = req.body;

  if (!name || !email || !key) {
    return res.status(400).send('Missing data');
  }

  try {
    const userData = await getUserRowByEmail(email);

    if (userData.length) {
      return res.status(403).end();
    }

    const user: User = {
      name,
      key: key.toUpperCase(),
      email,
      sweden: false,
      day: false,
      evening: true,
      language: 'FI',
    };

    const sheet = await getSheet();

    await sheet.addRow(user as {});

    const token = sign(user, jwtSecret);

    return res.json({ token }).end();
  } catch (err) {
    console.error(err);
    res.end();
  }
};
