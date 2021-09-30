function findPair(arr) {
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr. length - arr.filter(test => test !== arr[i]).length === 2) {
    //         return arr[i];
    //     }
    // }
    return arr.find(value => {
        if (arr.length - arr.filter(test => test !== value).length === 2) {
            return value;
        }
    }) || null;
}

window.findPair = findPair;

export default findPair;
