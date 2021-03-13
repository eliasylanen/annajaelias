import { GoogleSpreadsheet } from 'google-spreadsheet';
import { sheet } from '../config';

const { id, accountEmail, privateKey } = sheet;

export const getSheet = async () => {
  const doc = new GoogleSpreadsheet(id);

  await doc.useServiceAccountAuth({
    client_email: accountEmail,
    private_key: privateKey.replace(/\\n/g, '\n'),
  });

  await doc.loadInfo();

  return doc.sheetsByIndex[0];
};

export const getRows = async () => {
  return (await getSheet()).getRows();
};

export const getUserRowByKey = async (key: string) => {
  const rows = await getRows();
  return rows.filter(row => row.key === key.toUpperCase());
};

export const getUserRowByEmail = async (email: string) => {
  const rows = await getRows();
  return rows.filter(row => row.email === email);
};
