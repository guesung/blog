'use client';

import { ChangeEvent } from 'react';
import Table from './Table';

interface GoogleSpreadSheetProps {
  tableData: ColumnType[];
}
type ColumnType = {
  time: string;
  todo: string;
  goal: string;
  feeling: string;
  isCompleted: boolean;
};
const columnList = ['time', 'todo', 'goal', 'feeling', 'isCompleted'];
const HEADER_LIST: ColumnType = {
  time: '시간',
  todo: '할 것',
  goal: '목표를 이루기 위해 신경써야 할 것,',
  feeling: '느낀 점',
  isCompleted: false,
};

export default function GoogleSpreadSheet({
  tableData,
}: GoogleSpreadSheetProps) {
  const handleCellChanged = async (e: ChangeEvent<HTMLTableCellElement>) => {
    const rowIndex = e.target.dataset.rowIndex;
    const column = e.target.dataset.column;
    const value = e.target.textContent;
    const res = await fetch('/api/google-sheet', {
      method: 'POST',
      body: JSON.stringify({ rowIndex, key: column, value }),
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
      <Table columnList={columnList}>
        <Table.Header headerList={HEADER_LIST} />
        <Table.Body
          dataList={tableData}
          contentEditable
          suppressContentEditableWarning
          onInput={handleCellChanged}
        />
      </Table>
      <div>+t</div>
    </div>
  );
}
