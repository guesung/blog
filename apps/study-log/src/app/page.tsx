import { Table } from '../components';


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
const DATA_LIST: ColumnType[] = [
  {
    time: '21:00',
    todo: '스터디 로그 작성',
    goal: '초집중하자.',
    feeling: '너무 수고했다.',
    isCompleted: false,
  },
  {
    time: '21:00',
    todo: '스터디 로그 작성',
    goal: '초집중하자.',
    feeling: '너무 수고했다.',
    isCompleted: false,
  },
  {
    time: '21:00',
    todo: '스터디 로그 작성',
    goal: '초집중하자.',
    feeling: '너무 수고했다.',
    isCompleted: false,
  },
];

export default function Home() {
  return (
    <div className="flex justify-center">
      <Table columnList={columnList}>
        <Table.Header headerList={HEADER_LIST} />
        <Table.Body dataList={DATA_LIST} contentEditable />
      </Table>
    </div>
  );
}
