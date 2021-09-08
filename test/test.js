var merge = require("..")
var a = {"a":{"red":"apple"}}
var b = {"b":{"yellow":"mango"}}
var c = {"a":{"orange":"orange"}}
merge(a,b,c)
console.log(a)

//Test case for prototype pollution fix
var prototype_pollution_test = JSON.parse('{"__proto__":{"polluted":true}}')
merge(a,prototype_pollution_test)
console.log({}.polluted)
