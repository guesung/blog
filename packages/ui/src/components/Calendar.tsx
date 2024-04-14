import { DayList } from '@guesung/constants';
import { cn } from '@guesung/utils';

const MOCK_DATE = [
  new Date('2024-04-01'),
  new Date('2024-04-02'),
  new Date('2024-04-03'),
  new Date('2024-04-04'),
  new Date('2024-04-05'),
  new Date('2024-04-06'),
  new Date('2024-04-07'),
  new Date('2024-04-08'),
  new Date('2024-04-09'),
  new Date('2024-04-10'),
  new Date('2024-04-11'),
  new Date('2024-04-12'),
  new Date('2024-04-13'),
  new Date('2024-04-14'),
  new Date('2024-04-15'),
  new Date('2024-04-16'),
  new Date('2024-04-17'),
  new Date('2024-04-18'),
  new Date('2024-04-19'),
  new Date('2024-04-20'),
  new Date('2024-04-21'),
  new Date('2024-04-22'),
  new Date('2024-04-23'),
  new Date('2024-04-24'),
  new Date('2024-04-25'),
  new Date('2024-04-26'),
  new Date('2024-04-27'),
  new Date('2024-04-28'),
  new Date('2024-04-29'),
  new Date('2024-04-30'),
];

const getCalendarDateList = (dateList: Date[]) => {
  const calendarDateList: Date[][] = [];
  let tempDateList: Date[] = [];

  dateList.forEach(date => {
    tempDateList.push(date);
    if (date.getDay() !== 0) return;
    calendarDateList.push(tempDateList);
    tempDateList = [];
  });

  return calendarDateList;
};

export default function Calendar() {
  console.log(getCalendarDateList(MOCK_DATE));
  return (
    <div>
      <Row>
        {DayList.map(day => (
          <Day key={day} className="h-28">
            {day}
          </Day>
        ))}
      </Row>
      {getCalendarDateList(MOCK_DATE).map((week, index) => (
        <Row key={index}>
          {week.map(date => (
            <Day key={date.toString()}>{String(date.getDate())}</Day>
          ))}
        </Row>
      ))}
    </div>
  );
}

interface RowProps {
  children: React.ReactNode;
}

function Row({ children }: RowProps) {
  return <div className="flex">{children}</div>;
}

interface DayProps {
  children: string;
  className?: string;
}

function Day({ children, className }: DayProps) {
  return (
    <div
      className={cn('border text-center justify-center h-100 w-100', className)}
    >
      {children}
    </div>
  );
}
