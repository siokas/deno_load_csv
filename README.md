# deno_load_csv

It is a simple function that loads csv data from a given file to an array. It uses the __Deno.readFile__ method to read and parse the file with TextDecoder. [https://deno.land/std/fs/](https://deno.land/std/fs/)

## Installation

```javascript
import load_csv from "https://raw.githubusercontent.com/siokas/deno_load_csv/master/mod.ts";
```

## Usage example

Just call the load_csv() method passing the filename (in absolute path).
The method returns an object with the __headers__ and the __data__.

```javascript
let { headers, data } = await load_csv("./MY_FILE.csv");
```
You may also pass an object with options as __headers__ and __decode__. (By default it is set as headers:true, decode: 'utf-8')

```javascript
let { data } = await load_csv("./MY_FILE.csv", {
    headers:false,
    decode:'windows-1251'
});
```

## ToDo

- [ ] option to shaffle data
- [ ] extract certain columns

## Used

* [Deno](https://deno.land)

## Meta

Apostolos Siokas – [@siokas_](https://twitter.com/siokas_) – apostolossiokas@gmail.com

## Contributing

1. Fork it (<https://github.com/yourname/yourproject/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

## License

Distributed under the [MIT License](https://raw.githubusercontent.com/siokas/deno_load_csv/master/LICENSE). 
