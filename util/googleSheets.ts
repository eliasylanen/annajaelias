import { GoogleSpreadsheet } from 'google-spreadsheet';
import { sheet } from '../config';

const { id, accountEmail, privateKey } = sheet;

export const googleSheets = async () => {
  const doc = new GoogleSpreadsheet(id);

  await doc.useServiceAccountAuth({
    client_email: accountEmail,
    private_key: privateKey.replace(/\\n/g, '\n'),
  });

  await doc.loadInfo();

  return doc;
};
