import { assert, expect, test } from "vitest";
import {
  formatKeysToLineChartDates,
  formatLineChartDate,
  getMostRecentDays,
  parseLineChartData,
  truncateId,
} from ".";

test("truncateId", () => {
  const id = "018c965a-c542-3101-8246-fe8babdec3b0";
  const result = truncateId(id);
  assert(result === "018c96...dec3b0");
});

test("getMostRecentDays", () => {
  const data = {
    "2024-05-20": 1,
    "2024-05-21": 2,
    "2024-05-22": 3,
    "2024-05-23": 4,
    "2024-05-24": 5,
  };
  const days = 3;
  const result = getMostRecentDays(data, days);
  expect(result).toEqual({
    "2024-05-22": 3,
    "2024-05-23": 4,
    "2024-05-24": 5,
  });
});

test("parseLineChartData", () => {
  const data = {
    "2024-05-20": 1,
    "2024-05-21": 2,
    "2024-05-22": 3,
    "2024-05-23": 4,
    "2024-05-24": 5,
  };
  const result = parseLineChartData(data);
  expect(result).toEqual([
    { x: "2024-05-20", y: 1 },
    { x: "2024-05-21", y: 2 },
    { x: "2024-05-22", y: 3 },
    { x: "2024-05-23", y: 4 },
    { x: "2024-05-24", y: 5 },
  ]);
});

test("formatLineChartDate", () => {
  const date = "2024-05-20";
  const result = formatLineChartDate(date);
  assert(result === "5/20");
});

test("formatKeysToLineChartDates", () => {
  const data = {
    "2024-05-20": 1,
    "2024-05-21": 2,
    "2024-05-22": 3,
    "2024-05-23": 4,
    "2024-05-24": 5,
  };
  const result = formatKeysToLineChartDates(data);
  expect(result).toEqual({
    "5/20": 1,
    "5/21": 2,
    "5/22": 3,
    "5/23": 4,
    "5/24": 5,
  });
});
