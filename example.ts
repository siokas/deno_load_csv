import load_csv from "./mod.ts";

let { headers, data } = await load_csv("./example.csv");

console.log(headers, data);
