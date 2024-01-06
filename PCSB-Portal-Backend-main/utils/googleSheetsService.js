const { google } = require("googleapis");

const {
  GOOGLE_SHEET_ID,
  GOOGLE_SHEET_NAME,
  GOOGLE_CLIENT_EMAIL,
  GOOGLE_PRIVATE_KEY,
} = require("../config");

const sheets = google.sheets("v4");

const SCOPES = [
  "https://www.googleapis.com/auth/spreadsheets",
  "https://www.googleapis.com/auth/spreadsheets.readonly",
];

async function getAuthToken() {
  const auth = new google.auth.GoogleAuth({
    scopes: SCOPES,
    credentials: {
      client_email: GOOGLE_CLIENT_EMAIL,
      private_key: GOOGLE_PRIVATE_KEY,
    },
  });
  const authToken = await auth.getClient();
  return authToken;
}

async function getSpreadSheetValues() {
  const auth = await getAuthToken();
  const res = sheets.spreadsheets.values.get({
    auth,
    spreadsheetId: GOOGLE_SHEET_ID,
    range: GOOGLE_SHEET_NAME,
    majorDimension: "COLUMNS",
  });

  return res;
}

module.exports = {
  getSpreadSheetValues,
};
