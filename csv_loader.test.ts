import { assertEquals, test } from "./test_deps.ts";
import load_csv from "./mod.ts";

test(async function loadCsv() {
  let { headers, data } = await load_csv("./example.csv");

  assertEquals(headers[0], "Index");
  assertEquals(headers[1], "Girth(in)");
  assertEquals(headers[2], "Height(ft)");
  assertEquals(headers[3], "Volume(ft^3)");

  assertEquals(data[2][0], "3");
  assertEquals(data[2][1], "8.8");
  assertEquals(data[2][2], "63");
  assertEquals(data[2][3], "10.2");
});
