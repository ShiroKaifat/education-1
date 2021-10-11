function rowZero(str) {
    if (!str.includes('0')) {
        return 0;
    }

    const countZero = [];
    let count = 0;

    for (let i = 0; i < str.length; i++) {
        if (str[i] === '0') {
            count++;
        } else {
            count = 0;
        }
        countZero.push(count);
    }
    return Math.max(...countZero);
}

window.rowZero = rowZero;

export default rowZero;
