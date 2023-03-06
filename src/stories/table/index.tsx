import styles from './style.module.scss';

export interface TableProps {
  bordered?: boolean,
  data: any[],
  column: any[],
  size: "small" | "middle" | "large",
}

export const Table = ({
  bordered = true,
  size = "middle",
  column = [],
  data = [],
  ...props
}: TableProps) => {
  const newStyle:string[] = [styles[`table--${size}`]]
  if(bordered) newStyle.push(styles["table--bordered"])
  return (
    <table
      className={newStyle.join(' ')}
      {...props}
    >
      <thead>
        <tr>
          {column.map((col, i) => ( <th key={i}>{col.title}</th>))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, i) => (
          <tr key={i}>
          {
            (column.map((col, j) => (
              <td key={j}>{row[col.keyIndex]}</td>
            )))
          }
          </tr>
        ))}
      </tbody>
    </table>
  );
};
