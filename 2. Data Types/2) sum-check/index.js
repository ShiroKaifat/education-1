function sumCheck(a, b) {
    if (Number.isNaN(a) || Number.isNaN(b)) {
        return NaN;
    } else if (!(Number.isInteger(a) && Number.isInteger(b))){
        throw new Error('Wrong arguments type!');
    } else {
        return a + b;
    }
}

window.sumCheck = sumCheck;

export default sumCheck;
