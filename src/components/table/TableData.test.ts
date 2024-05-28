import { experimental_AstroContainer as AstroContainer } from "astro/container";
import { expect, test } from "vitest";
import TableData from "./TableData.astro";

test("TableData", async () => {
  const container = await AstroContainer.create();

  const result = await container.renderToString(TableData, {
    slots: {
      default: "TD Data",
    },
  });

  expect(result).toContain("TD Data");
});
