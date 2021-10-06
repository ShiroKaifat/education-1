function rowZero(str) {
    if (str.includes('0')) {
        let countZero = [];
        let count = 0;

        for (let i = 0; i < str.length; i++) {
            if (str[i] === '0') {
                count++;
            } else {
                count = 0;
            }
            countZero.push(count);
        }
        return Math.max.apply(null, countZero);
    }
    return 0;
}

window.rowZero = rowZero;

export default rowZero;
