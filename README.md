# echolog

A tiny wrapper around console.log that returns the values passed to it

## Installation

```
> yarn add echolog
```

## Usage

```JavaScript
const log = require('echolog');

log(Math.abs(-10));
// Outputs: "10" on the terminal
// returns 10

log("hello", "👏");
// Outputs: "hello 👏" on the terminal
// returns ["hello", "👏"]
```
