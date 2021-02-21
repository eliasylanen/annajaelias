import type { NowRequest, NowResponse } from '@vercel/node';
import { sign } from 'jsonwebtoken';
import { googleSheets } from '../src/util/googleSheets';
import { User } from '../types';

export default async (req: NowRequest, res: NowResponse) => {
  const { key } = req.body;

  if (!key) {
    res.send('Missing pwd');
  }

  try {
    const doc = await googleSheets();
    const rows = await doc.sheetsByIndex[0].getRows();
    const data = rows
      .filter(({ key }) => key === req.body.key)
      .map(
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

    if (!data.length) {
      res.status(204).end();
    }

    const jwt = sign(data[0], process.env.JWT_SECRET);

    return res.json(jwt).end();
  } catch (err) {
    console.error(err);
    res.end();
  }
};
