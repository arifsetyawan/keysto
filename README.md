# keysto

is a humble library to transform javascript object `key`. 

currently supported transformation 
- snake case <--> camel case
- camel case <--> snake case

### Instalation :
```
npm install keysto
```

### Available Function :
- `.toSnakeCase()`
- `.toCamelCase()`

### Usage :
```
const keysTo = require('keysto');

let targetObj = { firstName: "Jhon", lastName: "Doe" };
let newObj = keysTo.setKey(targetObj).toSnakeCase();

console.log(newObj); 
// expected : 
// { first_name: "Jhon", last_name: "Doe" }

```

this keysto also work for array of object and deep nested object. example

```
let targetArrayOfObj = [
  { firstName: "Jhon", lastName: "Doe" },
  { firstName: "Jane", lastName: "Doe" };
];
let newObj = keysTo.setKey(targetArrayOfObj).toSnakeCase();

console.log(newObj); 
// expected: 
// [
//     { first_name: "Jhon", last_name: "Doe" },
//     { first_name: "Jane", last_name: "Doe" }
// ]

```
