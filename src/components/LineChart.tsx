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

  let tickValues = Array.from({ length: yMax - yMin + 1 }, (_, i) => yMin + i);

  if (tickValues.length > 2) {
    const newTickValues = [];

    // Round the first tick down to the nearest multiple of 10
    const firstTick = Math.floor(tickValues[0] / 10) * 10;
    newTickValues.push(firstTick);

    // Calculate the step size based on the range of y-values
    const range = tickValues[tickValues.length - 1] - firstTick;
    let step = Math.ceil(range / 10);

    // Ensure the step size is a multiple of 10
    step = Math.ceil(step / 10) * 10;

    // Add ticks that are multiples of the step size
    for (
      let i = firstTick + step;
      i < tickValues[tickValues.length - 1];
      i += step
    ) {
      newTickValues.push(i);
    }

    // Round the last tick up to the nearest multiple of 10
    const lastTick = Math.ceil(tickValues[tickValues.length - 1] / 10) * 10;
    newTickValues.push(lastTick);

    tickValues = newTickValues;
  }

  return (
    <div className="relative bg-blue-900 rounded pt-4 px-4 shadow">
      <p className="absolute top-2 left-6 text-sm text-gray-300">{label}</p>
      <VictoryChart
        padding={{ top: 50, bottom: 50, left: 60, right: 50 }}
        domain={{ y: [tickValues[0], tickValues[tickValues.length - 1]] }}
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
