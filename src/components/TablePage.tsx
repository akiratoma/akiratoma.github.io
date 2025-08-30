import styles from "./TablePage.module.css";
import { Fragment, useState } from "react";
import clsx from "clsx";
import Chart from "./Chart";
import type { Gene } from "../common/types";

function TablePage({ data }: { data: Gene[] }) {
  const [open, setOpen] = useState<Record<string, boolean>>({});

  const handleClick = (id: string) => {
    const clone = { ...open };
    clone[id] = !Boolean(clone[id]);
    setOpen(clone);
  };

  return (
    <div className="flex-table">
      <div>
        <h1>Genes associated with lung carcinoma</h1>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Approved Symbol</th>
              <th>Gene Name</th>
              <th>Overall Association Score</th>
            </tr>
          </thead>
          <tbody>
            {data.map((gene) => (
              <Fragment key={gene.target.id}>
                <tr>
                  <td className={styles.buttonCell} onClick={() => handleClick(gene.target.id)}>
                    <div>{open[gene.target.id] ? "−" : "+"}</div>
                  </td>
                  <td>
                    <a
                      href={`https://platform.opentargets.org/target/${gene.target.id}`}
                      target="_blank"
                    >
                      {gene.target.approvedSymbol}
                    </a>
                  </td>
                  <td>{gene.target.approvedName}</td>
                  <td>{gene.score.toFixed(3)}</td>
                </tr>
                <tr className={clsx(open[gene.target.id] ? styles.visible : styles.collapse)}>
                  <td colSpan={4}>
                    <div
                      className={clsx([
                        styles.row,
                        open[gene.target.id] ? styles.opened : styles.hidden,
                      ])}
                    >
                      <Chart symbol={gene.target.approvedSymbol} scores={gene.datatypeScores} />
                    </div>
                  </td>
                </tr>
              </Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default TablePage;
