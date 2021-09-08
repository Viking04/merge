# @viking04/merge

## Description
@viking04/merge is a simple npm package to merge many sources to target.

## Installation
```
npm i @viking04/merge --save
```

## Usage
```
var merge = require("..")
var a = {"a":{"red":"apple"}}
var b = {"b":{"yellow":"mango"}}
var c = {"a":{"orange":"orange"}}
merge(a,b,c)
console.log(a)
```

```
OUTPUT:
{ a: { red: 'apple', orange: 'orange' }, b: { yellow: 'mango' } }
```
## Author

👤 **Thrivikram G**

* Twitter: [@thrivikram3301](https://twitter.com/thrivikram3301)
* Github: [@Viking04](https://github.com/Viking04)
