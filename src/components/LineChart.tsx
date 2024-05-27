import type React from "react";
import {
  VictoryAxis,
  VictoryChart,
  VictoryLine,
  VictoryVoronoiContainer,
  VictoryTooltip,
} from "victory";
import { parseLineChartData } from "../utils";

interface LineChartProps {
  label: string;
  data: Record<string, number>;
}

const LineChart: React.FC<LineChartProps> = ({ label, data }) => {
  const chartData = parseLineChartData(data);

  // get the lowest and highest values of the y-axis for the VictoryChart domain
  const yValues = chartData.map(({ y }) => y);
  const yMin = Math.min(...yValues);
  let yMax = Math.max(...yValues);
  // Ensure yMin and yMax are not the same
  if (yMin === yMax) {
    yMax = yMin + 1;
  }

  return (
    <div className="relative bg-blue-900 rounded pt-4 px-4">
      <p className="absolute top-2 left-6 text-sm">{label}</p>
      <VictoryChart
        padding={{ top: 50, bottom: 50, left: 60, right: 50 }}
        domain={{ y: [yMin, yMax] }}
        containerComponent={
          <VictoryVoronoiContainer
            voronoiDimension="x"
            labels={({ datum }) => `${datum.y}`}
            labelComponent={<VictoryTooltip style={{ fontSize: 15 }} />}
          />
        }
      >
        <VictoryAxis
          tickValues={chartData.map((_, index) =>
            index % 2 === 0 ? index : null
          )}
          style={{
            axis: { stroke: "#397CC9" },
            ticks: { stroke: "#397CC9" },
            tickLabels: { fill: "#397CC9" },
          }}
        />
        <VictoryAxis
          dependentAxis
          style={{
            axis: { stroke: "#397CC9" },
            ticks: { stroke: "#397CC9" },
            tickLabels: { fill: "#397CC9" },
          }}
        />
        <VictoryLine
          style={{
            data: { stroke: "#397CC9" },
            parent: { border: "1px solid #397CC9" },
          }}
          data={chartData}
        />
      </VictoryChart>
    </div>
  );
};

export default LineChart;
