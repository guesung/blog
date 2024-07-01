import {
  Children,
  HTMLAttributes,
  ReactElement,
  ReactNode,
  cloneElement,
  isValidElement,
} from 'react';

interface TableProps<T extends string> {
  columnList: T[];
  children: ReactElement<typeof TableHeader | typeof TableBody>[];
}
const isTableValidChild = (child: ReactNode): child is ReactElement => {
  return (
    isValidElement(child) &&
    (child.type === TableHeader || child.type === TableBody)
  );
};
export default function Table<T extends string>({
  columnList,
  children,
}: TableProps<T>) {
  const isValidChildren = Children.toArray(children).every(isTableValidChild);
  if (!isValidChildren) {
    throw new Error('Table component must have Table.Header and Table.Body');
  }

  const childrenWithProps = Children.map(children, child =>
    cloneElement(child as ReactElement, { columnList })
  );

  return <table>{childrenWithProps}</table>;
}

//
//
//

interface TableHeaderProps<T extends string>
  extends Partial<Pick<TableProps<T>, 'columnList'>> {
  headerList: { [key in T]: string | boolean };
}

function TableHeader<T extends string>({
  columnList,
  headerList,
}: TableHeaderProps<T>) {
  if (!columnList) return null;
  return (
    <thead>
      <tr>
        {columnList.map(column => (
          <th className="px-30" key={column}>
            {headerList[column]}
          </th>
        ))}
      </tr>
    </thead>
  );
}

//
//
//

interface TableBodyProps<T extends string>
  extends HTMLAttributes<HTMLTableCellElement>,
    Partial<Pick<TableProps<T>, 'columnList'>> {
  dataList: { [key in T]: string | boolean }[];
}

function TableBody<T extends string>({
  dataList,
  columnList,
  ...props
}: TableBodyProps<T>) {
  if (!columnList) return null;
  return (
    <tbody>
      {dataList.map((dataRow, rowIndex) => (
        <tr key={rowIndex} data-row-index={rowIndex}>
          {columnList.map(column => (
            <td
              key={column}
              data-row-index={rowIndex}
              data-column={column}
              {...props}
            >
              {dataRow[column]}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
}

Table.Header = TableHeader;
Table.Body = TableBody;
