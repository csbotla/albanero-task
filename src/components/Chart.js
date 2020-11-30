import React from "react";
import { Line } from "react-chartjs-2";

function Chart() {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
    ],
    datasets: [
      {
        label: "Units Sold",
        data: [100, 150, 270, 180, 360, 640, 207, 450, 126, 392, 81, 252],
      },
    ],
  };

  return (
    <div className="chart">
      <Line
        data={data}
        options={{
          title: {
            display: true,
            text: "No of units sold",
            fontSize: 20,
          },
          responsive: true,
          maintainAspectRatio: false,
          legend: {
            display: true,
            position: "top",
          },
          scales: {
            xAxes: [
              {
                gridLines: {
                  display: true,
                  drawOnChartArea: false,
                  drawTicks: false,
                },
                ticks: {
                  display: true,
                },
              },
            ],
            yAxes: [
              {
                gridLines: {
                  display: true,
                  drawOnChartArea: false,
                  drawTicks: false,
                },
                ticks: {
                  display: true,
                },
              },
            ],
          },
        }}
      ></Line>
    </div>
  );
}

export default Chart;
