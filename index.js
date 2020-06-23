const zaddrRegex = /^zs[a-z0-9]{76}$/;
const taddrRegex = /^t1[AC-HJ-NP-Zac-hj-np-z02-9]{33}$/;


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