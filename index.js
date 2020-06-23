const { default: Axios } = require("axios");

const zaddrRegex = /^zs[a-z0-9]{76}$/;
const taddrRegex = /^t1[AC-HJ-NP-Zac-hj-np-z02-9]{33}$/;
const axios = require("axios")


exports.isValidZaddr = function(zaddr) {
    return zaddrRegex.test(zaddr)
}

exports.isValidTaddr = function(taddr) {
    return taddrRegex.test(taddr)
}

exports.isValidAddress = function(address) {
    return taddrRegex.test(address) || zaddrRegex.test(address)
}

exports.zatToZec = function(i) {
    return +(i / 100000000).toFixed(8)
}

exports.zecToZat = function(f) {
    return f * 100000000
}

exports.price = async function(currency = "usd") {
    try {
        res = await axios.get("https://api.coingecko.com/api/v3/coins/zcash")
        return +res.data.market_data.current_price[currency.toLowerCase()].toFixed(2)
    } catch {
        console.log("Error accessing price info")
    }
    // Should this return a string or a float?
}



// the three above functions are untested

// TODO: 
// sendmany generator
// Lite wallet CLI send generator
// Burner address generator
// Memo splitter
// Price query
// Block info grabber
// Zatoshi to ZEC
// ZEC to Zatoshi