import type { NowRequest, NowResponse } from '@vercel/node';
import { GoogleSpreadsheet } from 'google-spreadsheet';

export default async (req: NowRequest, res: NowResponse) => {
  if (!req?.body?.pwd) {
    res.send('Missing pwd');
  }
  try {
    const doc = new GoogleSpreadsheet(process.env.GOOGLE_SHEET_ID);

    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY.replace(/\\n/g, '\n'),
    });

    await doc.loadInfo();
    const rows = await doc.sheetsByIndex[0].getRows();
    const data = rows
      .map(({ name, pwd, registrations_available, registrations_made }) => ({
        name,
        pwd,
        registrations_available,
        registrations_made,
      }))
      .filter(({ pwd }) => pwd === req.body.pwd);

    return res.json(data).end();
  } catch (err) {
    console.error(err);
    res.end();
  }
};
