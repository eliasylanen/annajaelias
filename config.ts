const {
  GOOGLE_SHEET_ID,
  GOOGLE_SERVICE_ACCOUNT_EMAIL,
  GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY,
  JWT_SECRET,
  IS_READY,
} = process.env;

export const sheet = {
  id: GOOGLE_SHEET_ID,
  accountEmail: GOOGLE_SERVICE_ACCOUNT_EMAIL,
  privateKey: GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY,
};

export const jwtSecret = JWT_SECRET;

export const isReady = IS_READY === 'true';
