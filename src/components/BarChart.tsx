import { Bar } from "react-chartjs-2";
import formatId from "../utils/formatId";
import type { DataTypeScore } from "../common/types";

function BarChart({ scores }: { scores: DataTypeScore[] }) {
  const data = {
    labels: scores.map(({ id }) => formatId(id)),
    datasets: [{ data: scores.map(({ score }) => score), backgroundColor: "#3489ca" }],
  };

  const options = {
    scales: {
      x: {
        grid: {
          drawOnChartArea: false,
        },
        title: {
          display: true,
          text: "Data Type",
        },
      },
      y: {
        min: 0,
        max: 1,
        ticks: {
          callback: (value: number | string) => Number(value).toFixed(3),
          stepSize: 0.25,
        },
        title: {
          display: true,
          text: "Association Score",
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
}

export default BarChart;
