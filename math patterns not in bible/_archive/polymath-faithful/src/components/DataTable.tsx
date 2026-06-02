import styles from "./DataTable.module.css";

export type Cell = string | number;

export default function DataTable(props: {
  columns: string[];
  rows: Cell[][];
  caption?: string;
}) {
  return (
    <div class={styles.wrap}>
      <table class={styles.table}>
        {props.caption && <caption>{props.caption}</caption>}
        <thead>
          <tr>
            {props.columns.map((col) => (
              <th scope="col">{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {props.rows.map((row) => (
            <tr>
              {row.map((cell) => (
                <td>
                  {typeof cell === "number" ? <span class={styles.num}>{cell}</span> : cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
