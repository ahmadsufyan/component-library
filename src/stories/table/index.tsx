import { State } from 'lib/store';
import React from 'react';
import { useSelector } from 'react-redux';
import './style.scss';

interface TableProps {
  bordered?: boolean,
  size: "small" | "middle" | "large",
}

export const Table = ({
  bordered = true,
  size = "middle",
  ...props
}: TableProps) => {
  const data = useSelector((state:State) => state.table.data)
  const styles:string[] = [`table--${size}`]
  if(bordered) styles.push("table--bordered")
  
  return (
    <table
      className={styles.join(' ')}
      {...props}
    >
      <tr>
        {data.column.map((col) => ( <th>{col.title}</th>))}
      </tr>
      {data.row.map((row) => (
        <tr>
        {
          (data.column.map((col) => (
            <td>{row[col.keyIndex]}</td>
          )))
        }
        </tr>
      ))}
    </table>
  );
};
