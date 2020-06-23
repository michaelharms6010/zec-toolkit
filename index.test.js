const ZEC = require("./index.js");

console.log(ZEC.zatToZec(10000))
console.log(ZEC.zecToZat(.0001))
ZEC.price().then(r => console.log(r))
ZEC.price("gbp").then(r => console.log(r))