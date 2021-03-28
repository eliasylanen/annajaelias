import type { NowRequest, NowResponse } from '@vercel/node';
import { verify } from 'jsonwebtoken';
import { jwtSecret } from '../config';
import type { PresentData } from '../types';
import { getPresentData } from '../util/googleSheets';

export default async (req: NowRequest, res: NowResponse) => {
  const { token } = req.body;

  if (!token) {
    return res.status(401).send('No token given');
  }

  try {
    verify(token, jwtSecret);
  } catch (jwtError) {
    console.error(jwtError);
    res.status(401).end();
  }

  try {
    const presentData = (await getPresentData())
      .reduce(
        (acc, row) => {
          const { countryFin, priceShown, paid } = row;
          const dataEntry = acc.find(({ key }) => key === countryFin);
          if (dataEntry) {
            dataEntry.data.push(row);
            dataEntry.totalPrice += priceShown;
            paid && (dataEntry.totalPaid += priceShown);
          }
          return acc;
        },
        [
          { id: 1, key: 'Suomi', data: [], totalPrice: 0, totalPaid: 0 },
          { id: 2, key: 'Ruotsi', data: [], totalPrice: 0, totalPaid: 0 },
          { id: 3, key: 'Tanska', data: [], totalPrice: 0, totalPaid: 0 },
          { id: 4, key: 'Saksa', data: [], totalPrice: 0, totalPaid: 0 },
          { id: 5, key: 'Tanska_paluu', data: [], totalPrice: 0, totalPaid: 0 },
          { id: 6, key: 'Ruotsi_paluu', data: [], totalPrice: 0, totalPaid: 0 },
        ] as PresentData[],
      )
      .sort(({ id }) => id);

    return res.status(200).json({ presentData }).end();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error });
  }
};
