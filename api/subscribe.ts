import type { NowRequest, NowResponse } from '@vercel/node';
import { keyPattern } from '../config';
import { getUserRow } from '../util/googleSheets';

interface RequestBody {
  key: string;
  email: string;
}

export default async (req: NowRequest, res: NowResponse) => {
  const { key, email } = req.body as RequestBody;

  if (!key || !email || !key.match(keyPattern)) {
    return res.status(400).send('Invalid key or email');
  }

  try {
    const userData = await getUserRow(req);

    if (!userData.length) {
      return res.status(204).end();
    }

    const userRow = userData[0];
    userRow.email = encodeURI(email);
    await userRow.save();

    return res.status(200).end();
  } catch (err) {
    const { message: error } = err as Error;
    res.status(500).json({ error });
  }
};
