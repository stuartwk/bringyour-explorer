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
  let yMin = Math.min(...yValues);
  let yMax = Math.max(...yValues);
  // Ensure yMin and yMax are not the same
  if (yMin === yMax) {
    yMax = yMin + 1;
  }

  if (yMin === 1) {
    yMin = 0;
  }

  const tickValues = Array.from(
    { length: yMax - yMin + 1 },
    (_, i) => yMin + i
  );

  // if the tick values range is too big, reduce the number of ticks
  if (tickValues.length > 10) {
    const reducedTickValues = tickValues.filter((_, index) => index % 2 === 0);
    tickValues.length = 0;
    tickValues.push(...reducedTickValues);
  }

  return (
    <div className="relative bg-blue-900 rounded pt-4 px-4 shadow">
      <p className="absolute top-2 left-6 text-sm text-gray-300">{label}</p>
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
          tickValues={tickValues}
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
