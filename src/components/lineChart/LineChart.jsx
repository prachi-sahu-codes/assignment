import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";
import { useSelector } from "react-redux";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: "Line Chart",
    },
  },
};

export function LineChart({ arrData }) {
  const { selectedBarValue } = useSelector((state) => state.data);

  const labels = arrData.map((obj) => obj?.Day);
  console.log(labels);
  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: arrData.map((obj) => obj[selectedBarValue]),
        borderColor: "rgb(53, 162, 235)",
        backgroundColor: "rgba(53, 162, 235, 0.5)",
      },
    ],
  };

  return <Line options={options} data={data} />;
}
