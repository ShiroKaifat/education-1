function searchString(obj) {
    return  Object.entries(obj).reduce((acc, cur) => {

        if (![null, undefined, ''].includes(cur[1])) {
            acc += `${cur[0]}=${cur[1]}&`;
        }
        return acc;
    }, '?').slice(0, -1);
}

window.searchString = searchString;

export default searchString;
