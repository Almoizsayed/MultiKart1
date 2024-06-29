// src/components/TotalUsersChart.jsx
import React from "react";
import { Bar } from "react-chartjs-2";
import useUserStore from "./useUserStore";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const TotalUsersChart = () => {
  const getActiveUsersByMonth = useUserStore(
    (state) => state.getActiveUsersByMonth
  );
  const activeUsersByMonth = getActiveUsersByMonth();

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const data = {
    labels: months,
    datasets: [
      {
        label: "Active Users",
        data: months.map((_, index) => activeUsersByMonth[index] || 0),
        backgroundColor: "#641cc0",
        borderColor: "#641cc0",
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Total Active Users",
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default TotalUsersChart;
