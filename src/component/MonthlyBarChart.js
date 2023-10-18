import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import Chart from 'chart.js/auto';

const MonthlyBarChart = () => {
  const [selectedOption, setSelectedOption] = useState("monthly");

  const dataMonthly = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    datasets: [
      {
        label: "Monthly Earnings",
        data: [10, 15, 20, 30, 25, 40, 35, 45, 50, 25, 30, 40],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "white",
        borderWidth: 3,
        borderRadius: 10,
      },
    ],
  };

  const dataQuarterly = {
    labels: ["Q1(Jan-Mar)", "Q2(Apr-Jun)", "Q3(Jul-Sep)", "Q4(Oct-Nov)"],
    datasets: [
      {
        label: "Quarterly Earnings",
        data: [45, 95, 120, 135],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "white",
        borderWidth: 3,
        borderRadius: 10,
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        type: 'category', // Correctly specify 'category' scale type
        beginAtZero: true,
        display: true,
        title: {
          display: true,
        },
        grid: {
          display: false,
        },
        ticks: {
          color: "white",
        },
      },
      y: {
        beginAtZero: true,
        display: false,
      },
    },
    
  };

  return (
    <div>
      <div className="chart-header">
        <div className="left-section">
          <h3>Overview</h3>
          <p>{selectedOption === "monthly" ? "Monthly Earnings" : "Quarterly Earnings"}</p>
        </div>
        <div className="right-section">
          <select onChange={(e) => setSelectedOption(e.target.value)}>
            <option value="monthly">Monthly</option>
            <option value="quarterly">Quarterly</option>
          </select>
        </div>
      </div>
      {selectedOption === "monthly" ? (
        <Bar data={dataMonthly} options={options} />
      ) : (
        <Bar data={dataQuarterly} options={options} />
      )}
    </div>
  );
};

export default MonthlyBarChart;
