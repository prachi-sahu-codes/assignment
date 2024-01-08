import React, { useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, getElementAtEvent } from "react-chartjs-2";
import { useDispatch } from "react-redux";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
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
      text: "Bar Chart",
    },
  },
};

const labels = ["A", "B", "C", "D", "E", "F"];

export function BarChart({ arrData }) {
  const chartRef = useRef();
  const dispatch = useDispatch();

  const handleClick = (event) => {
    const finalData = getElementAtEvent(chartRef.current, event)[0].index;
    const data = labels[finalData];
    dispatch({ type: "BAR_VALUE_SELECTED", payload: data });
  };

  const totalTimeSpent = arrData.reduce(
    (acc, obj) => [
      acc[0] + obj["A"],
      acc[1] + obj["B"],
      acc[2] + obj["C"],
      acc[3] + obj["D"],
      acc[4] + obj["E"],
      acc[5] + obj["F"],
    ],
    [0, 0, 0, 0, 0, 0]
  );

  const data = {
    labels,
    datasets: [
      {
        label: "",
        data: totalTimeSpent,
        backgroundColor: "rgba(255, 99, 132, 0.5)",
      },
    ],
  };

  return (
    <Bar options={options} data={data} ref={chartRef} onClick={handleClick} />
  );
}
