const {
  GOOGLE_SHEET_ID,
  GOOGLE_SERVICE_ACCOUNT_EMAIL,
  GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY,
  JWT_SECRET,
  RELEASE_DAY,
} = process.env;

export const releaseDay = new Date(RELEASE_DAY).getTime();

export const sheet = {
  id: GOOGLE_SHEET_ID,
  accountEmail: GOOGLE_SERVICE_ACCOUNT_EMAIL,
  privateKey: GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY,
};

export const jwtSecret = JWT_SECRET;
