function findPair(arr) {
    return arr.find(value => {
        if (arr.length - arr.filter(test => test !== value).length === 2) {
            return value;
        }
    }) || null;
}

window.findPair = findPair;

export default findPair;
