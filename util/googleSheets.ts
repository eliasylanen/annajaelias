import type { NowRequest } from '@vercel/node';
import { GoogleSpreadsheet } from 'google-spreadsheet';
import { sheet } from '../config';

const { id, accountEmail, privateKey } = sheet;

export const getRows = async () => {
  const doc = new GoogleSpreadsheet(id);

  await doc.useServiceAccountAuth({
    client_email: accountEmail,
    private_key: privateKey.replace(/\\n/g, '\n'),
  });

  await doc.loadInfo();

  return doc.sheetsByIndex[0].getRows();
};

export const getUserRow = async (req: NowRequest) => {
  const rows = await getRows();
  return rows.filter(({ key }) => key === (req.body.key as string).toUpperCase());
};
