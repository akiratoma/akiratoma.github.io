import styles from "./Chart.module.css";
import { useState } from "react";
import clsx from "clsx";
import BarChart from "./BarChart";
import RadarChart from "./RadarChart";
import type { DataTypeScore } from "../common/types";

function Chart({ symbol, scores }: { symbol: string; scores: DataTypeScore[] }) {
  const [show, setShow] = useState<"bar" | "radar">("bar");

  return (
    <div className={styles.container}>
      <div className={styles.buttonContainer}>
        <div
          className={clsx(show === "bar" ? styles.selected : styles.notSelected)}
          onClick={() => setShow("bar")}
        >
          Bar chart
        </div>
        <div
          className={clsx(show === "radar" ? styles.selected : styles.notSelected)}
          onClick={() => setShow("radar")}
        >
          Radar chart
        </div>
      </div>
      <div className={styles.chartContainer}>
        <div className={styles.chartInnerContainer}>
          <div>{`Data Type Score: ${symbol} and lung carcinoma`}</div>
          <div className={styles.chartBox}>
            <div className={clsx([styles.barChartBox, show === "bar" ? styles.visible : styles.hidden])}>
              <BarChart scores={scores} />
            </div>
            <div
              className={clsx([styles.radarChartBox, show === "radar" ? styles.visible : styles.hidden])}
            >
              <RadarChart scores={scores} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chart;
