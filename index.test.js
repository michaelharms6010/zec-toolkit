// This needs to be refactored to use a proper testing framework

const ZEC = require("./index.js");

console.log(ZEC.zatToZec(10000))
console.log(ZEC.zecToZat(.0001))

ZEC.price().then(r => {
    console.log(r)
    ZEC.price("gbp").then(r => {
        console.log(r)
        ZEC.price("GBP").then(r => {
            console.log(r)
        })
    })
})