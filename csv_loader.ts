export default async function load_csv(
  filename: string,
  options?: any
): Promise<any> {
  let opt: any = Object.assign({
    decode: "utf-8",
    headers: true
  }, options || {});

  const csvData: Uint8Array = await Deno.readFile(filename);
  const decodedData: string = new TextDecoder(opt.decode).decode(csvData);
  const splitedData: Array<any> = map(
    decodedData.split("\n"),
    (data: any) => data.split(",")
  );

  if (opt.headers) {
    const headers: Array<any> | undefined = head(splitedData);
    const data: Array<any> = splitedData.slice(1);

    return { headers, data };
  }

  return { data: splitedData };
}

function map(array: Array<any>, iteratee: Function): Array<any> {
  let index: number = -1;
  const length: number = array == null ? 0 : array.length;
  const result: Array<any> = new Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

function head(array: any): Array<any> | undefined {
  return (array != null && array.length)
    ? array[0]
    : undefined;
}
