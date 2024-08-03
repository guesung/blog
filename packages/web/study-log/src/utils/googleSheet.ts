import { GoogleSpreadsheet } from 'google-spreadsheet';
import { JWT } from 'google-auth-library';
import googleSheetData from '@constants/googleSheet.json';

export const getGoogleSpreadSheetAuth = async () =>
  new JWT({
    email: googleSheetData.client_email,
    key: googleSheetData.private_key.replace(/\\n/g, '\n'),
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });

export const getGoogleSpreadSheet = async () => {
  const auth = await getGoogleSpreadSheetAuth();
  const googleSpreadSheet = new GoogleSpreadsheet(
    '133vEGA2okO3S5wk_0ajDye9emRYtWD4ewVicjnMrCHs',
    auth
  );
  await googleSpreadSheet.loadInfo();
  return googleSpreadSheet;
};

export const getGoogleSpreadSheetData = async () => {
  try {
    const googleSpreadSheet = await getGoogleSpreadSheet();
    const sheet = googleSpreadSheet.sheetsByIndex[0];

    const rows = await sheet?.getRows();
    return rows;
  } catch (e) {
    throw new Error('Failed to get Google SpreadSheet data');
  }
};

export const setGoogleSpreadSheet = async ({
  rowIndex,
  key,
  value,
}: {
  rowIndex: number;
  key: string;
  value: string;
}) => {
  const googleSpreadSheet = await getGoogleSpreadSheet();
  const sheet = googleSpreadSheet.sheetsByIndex[0];

  try {
    const rows = await sheet?.getRows();
    const row = rows?.[rowIndex];
    row?.set(key, value);
    row?.save();
  } catch (e) {
    throw new Error('Failed to set Google SpreadSheet data');
  }
  return { success: true };
};
