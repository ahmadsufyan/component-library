import './style.scss';

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
  const styles:string[] = [`table--${size}`]
  if(bordered) styles.push("table--bordered")
  return (
    <table
      className={styles.join(' ')}
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
