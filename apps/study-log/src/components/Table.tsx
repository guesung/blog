import { InputHTMLAttributes, PropsWithChildren } from 'react';

interface TableProps {}

const headList = [
  '시간',
  '할 것',
  '목표를 이루기 위해 신경써야 할 것,',
  '느낀 점',
  '완료 여부',
];

const DUMMY_DATA = [
  {
    id: 1,
    time: '21:00',
    todo: '스터디 로그 작성',
    goal: '초집중하자.',
    feeling: '너무 수고했다.',
    isCompleted: false,
  },
  {
    id: 1,
    time: '21:00',
    todo: '스터디 로그 작성',
    goal: '초집중하자.',
    feeling: '너무 수고했다.',
    isCompleted: false,
  },
  {
    id: 1,
    time: '21:00',
    todo: '스터디 로그 작성',
    goal: '초집중하자.',
    feeling: '너무 수고했다.',
    isCompleted: false,
  },
];

export default function Table() {
  return (
    <div>
      <table>
        <thead>
          <tr>
            {headList.map(head => (
              <th className="px-30 border-1">{head}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {DUMMY_DATA.map(data => (
            <tr className="border-1 ">
              <td className="border-r-1">
                <EditableBox>{data.time}</EditableBox>
              </td>
              <td className="border-r-1">
                <EditableBox>{data.todo}</EditableBox>
              </td>
              <td className="border-r-1">
                <EditableBox>{data.goal}</EditableBox>
              </td>
              <td className="border-r-1">
                <EditableBox>{data.feeling}</EditableBox>
              </td>
              <td className="border-r-1">
                {data.isCompleted ? '완료' : '미완료'}
              </td>
            </tr>
          ))}
          <tr>
            <td>
              <EditableBox />
            </td>
            <td>
              <EditableBox />
            </td>
            <td>
              <EditableBox />
            </td>
            <td>
              <EditableBox />
            </td>
            <td>
              <EditableBox />
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex justify-center">+</div>
    </div>
  );
}

//
//
//

interface SheetInputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    PropsWithChildren {}

function EditableBox({ children, ...props }: SheetInputProps) {
  return (
    <div contentEditable className="w-full" {...props}>
      {children}
    </div>
  );
}
