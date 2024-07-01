import { GoogleSpreadSheet } from '@components';
import { getGoogleSpreadSheetData } from '@utils';

export default async function Home() {
  const data = await getGoogleSpreadSheetData();
  if (!data) return null;

  const tableData = data.map(row => {
    return {
      time: row.get('time'),
      todo: row.get('todo'),
      goal: row.get('goal'),
      feeling: row.get('feeling'),
      isCompleted: row.get('isCompleted'),
    };
  });

  return <GoogleSpreadSheet tableData={tableData} />;
}
