require("dotenv").config();

PORT = process.env.PORT || 8080;
HTTPS_PORT = process.env.HTTPS_PORT || 9090;
NODE_ENV = process.env.NODE_ENV || "development";

if (NODE_ENV == "development") {
  require("dotenv").config({ path: ".env.development" });
} else {
  require("dotenv").config({ path: ".env.production" });
}

DB_URL = process.env.DB_URL;
JWT_PRIVATE_KEY = process.env.JWT_PRIVATE_KEY;
AUTH_REQUIRED = process.env.AUTH_REQUIRED == "true";

EMAIL_HOST = process.env.EMAIL_HOST;
EMAIL_PORT = process.env.EMAIL_PORT;
EMAIL_USER = process.env.EMAIL_USER;
EMAIL_PASSWORD = process.env.EMAIL_PASSWORD;

BUCKET_NAME = process.env.BUCKET_NAME;
BUCKET_REGION = process.env.BUCKET_REGION;
ACCESS_KEY = process.env.ACCESS_KEY;
SECRET_ACCESS_KEY = process.env.SECRET_ACCESS_KEY;

GOOGLE_SHEET_ID = process.env.GOOGLE_SHEET_ID;
GOOGLE_SHEET_NAME = process.env.GOOGLE_SHEET_NAME;
GOOGLE_CLIENT_EMAIL = process.env.GOOGLE_CLIENT_EMAIL;
GOOGLE_PRIVATE_KEY = process.env.GOOGLE_PRIVATE_KEY;

module.exports = {
  PORT,
  HTTPS_PORT,
  NODE_ENV,
  DB_URL,
  JWT_PRIVATE_KEY,
  AUTH_REQUIRED,
  EMAIL_HOST,
  EMAIL_PORT,
  EMAIL_USER,
  EMAIL_PASSWORD,
  BUCKET_NAME,
  BUCKET_REGION,
  ACCESS_KEY,
  SECRET_ACCESS_KEY,
  GOOGLE_SHEET_ID,
  GOOGLE_SHEET_NAME,
  GOOGLE_CLIENT_EMAIL,
  GOOGLE_PRIVATE_KEY,
};
