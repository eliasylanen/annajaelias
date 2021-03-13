import type { NowRequest, NowResponse } from '@vercel/node';
import { sign } from 'jsonwebtoken';
import { getUserRowByKey } from '../util/googleSheets';
import { jwtSecret } from '../config';
import type { User } from '../types';

export default async (req: NowRequest, res: NowResponse) => {
  const { key } = req.body;

  if (!key) {
    return res.status(400).send('Missing key');
  }

  try {
    const userData = (await getUserRowByKey(key)).map(
      ({
        name,
        key,
        email,
        sweden,
        day,
        evening,
        registrations_available,
        registrations_made,
        language,
      }): User => ({
        name,
        key,
        email,
        sweden: sweden === 'TRUE',
        day: day === 'TRUE',
        evening: evening === 'TRUE',
        registrations_available: parseInt(registrations_available, 10),
        registrations_made: parseInt(registrations_made, 10),
        language,
      }),
    );

    if (!userData.length) {
      return res.status(204).end();
    }

    const user = userData[0];

    const token = sign(user, jwtSecret);

    return res.json({ token }).end();
  } catch (err) {
    console.error(err);
    res.end();
  }
};
