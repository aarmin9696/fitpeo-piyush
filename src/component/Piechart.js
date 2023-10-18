import React from "react";
import { Doughnut } from "react-chartjs-2";

const PieChart = () => {
  const data = {
    labels: ["Completed", "Remaining"],
    datasets: [
      {
        data: [25, 40, 35],
        backgroundColor: ["#F43597","#36A2EB",  "rgba(75, 192, 192, 0.2)"],
        borderColor: ["#F43597","#36A2EB", "transparent"],
        borderWidth: [25, 15, 8],
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
    },
  };
// style={{ position: "relative",width: "300px",height: "300px",marginTop:'20%'}}
  return (
    <div>
      <h3>Customers</h3>
      <p className="gray">Customers that buy products</p>
      <div id="dough" >
        <Doughnut data={data} options={{ cutout: 75, plugins: { legend: { display: false } } }} />
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <p style={{ fontSize: "16px", fontWeight: "bold", textAlign: "center", color: "white" }}>
            65% total new customers
          </p>
        </div>
      </div>
    </div>
  );
};

export default PieChart;
