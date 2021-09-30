function findPair(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr. length - arr.filter(test => test !== arr[i]).length === 2){
            return arr[i];
        }
    }
   return null;
}

window.findPair = findPair;

export default findPair;
