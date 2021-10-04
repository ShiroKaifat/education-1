function asyncSum(a, b) {
    return  new Promise((resolve, reject) => {
        if (Number.isNaN(a) || Number.isNaN(b)) {
            resolve(NaN, 1e3);
        } else if (!(Number.isInteger(a) && Number.isInteger(b))){
            reject (Error, 1e3);
        } else {
            resolve(a + b, 1e3);
        }
    });
}

window.asyncSum = asyncSum;

export default asyncSum;
