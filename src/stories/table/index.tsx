import { State } from 'lib/store';
import { useSelector } from 'react-redux';
import './style.scss';

export interface TableProps {
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
      <thead>
        <tr>
          {data.column.map((col, i) => ( <th key={i}>{col.title}</th>))}
        </tr>
      </thead>
      <tbody>
        {data.row.map((row, i) => (
          <tr key={i}>
          {
            (data.column.map((col, j) => (
              <td key={j}>{row[col.keyIndex]}</td>
            )))
          }
          </tr>
        ))}
      </tbody>
    </table>
  );
};
