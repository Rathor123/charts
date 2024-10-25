// import data from "../data/dummydata";
import { Chart as ChartJ, plugins, Title } from "chart.js/auto";
import { Bar } from "react-chartjs-2";
import { performanceMetrics } from "../data/dummydata";
export default function Analytics() {
  return (
    <div className="m-20  w-9/12	h-3/4">
      <Bar
        data={{
          labels: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Sunday",
          ],
          datasets: [
            {
              label: "Daily Sales",
              data: performanceMetrics.dailySales,
              backgroundColor: "rgba(175, 192, 226)",
            },
            {
              label: "Lead Conversion",
              data: performanceMetrics.leadConversion,
              backgroundColor: "rgba(153, 102, 255)",
            },
          ],
        }}
        options={{
          plugins: {
            title: {
              display: true,
              text: "sales ",
              font: {
                size: 20,
              },
              padding: {
                top: 10,
                bottom: 30,
              },
            },
          },
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        }}
      />
    </div>
  );
}
