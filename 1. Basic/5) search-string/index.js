function searchString(obj) {
    let str = '?';
    const newArr = Object.entries(obj);

    newArr.forEach(value => {

        if (value[1] !== null && value[1] !== undefined && value[1] !== '') {
            str += `${value[0]}=${value[1]}&`;
        }
    });
    str = str.slice(0, -1);
    return str;
}

window.searchString = searchString;

export default searchString;
