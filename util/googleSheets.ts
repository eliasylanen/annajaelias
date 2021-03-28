import { GoogleSpreadsheet } from 'google-spreadsheet';
import { sheet } from '../config';
import { Present, Sheet } from '../types';

const { id, accountEmail, privateKey } = sheet;

export const getSheet = async (sheet: Sheet) => {
  const doc = new GoogleSpreadsheet(id);

  await doc.useServiceAccountAuth({
    client_email: accountEmail,
    private_key: privateKey.replace(/\\n/g, '\n'),
  });

  await doc.loadInfo();

  return doc.sheetsByIndex[sheet];
};

export const getRows = async (sheet: Sheet) => {
  return (await getSheet(sheet)).getRows();
};

export const getUserRowByKey = async (key: string) => {
  const rows = await getRows(Sheet.Login);
  return rows.filter(row => row.key === key.toUpperCase());
};

export const getUserRowByEmail = async (email: string) => {
  const rows = await getRows(Sheet.Login);
  return rows.filter(row => row.email === email);
};

export const getPresentData = async (): Promise<Present[]> => {
  const rows = await getRows(Sheet.Map);
  return rows.map(
    ({ itemFin, itemEng, countryFin, countryEng, priceShown, paid }): Present => ({
      itemFin,
      itemEng,
      countryFin,
      countryEng,
      priceShown: priceShown ? parseInt(priceShown) : null,
      paid: !!paid,
    }),
  );
};
