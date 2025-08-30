import { Radar } from "react-chartjs-2";
import formatId from "../utils/formatId";
import type { DataTypeScore } from "../common/types";

function RadarChart({ scores }: { scores: DataTypeScore[] }) {
  const data = {
    labels: scores.map(({ id }) => formatId(id)),
    datasets: [
      {
        data: scores.map(({ score }) => score),
        backgroundColor: "#3489ca",
        borderColor: "#3489ca",
      },
    ],
  };

  const options = {
    scales: {
      r: {
        grid: {
          circular: true,
        },
        min: -0.0001, // NOTE: Workaround to show 0.000 tick
        max: 1,
        ticks: {
          callback: (value: number | string) => Math.abs(Number(value)).toFixed(3),
          stepSize: 0.25,
        },
      },
    },
  };

  return <Radar data={data} options={options} />;
}

export default RadarChart;
