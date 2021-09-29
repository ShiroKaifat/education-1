function stringToType(str) {
    try {
        return JSON.parse(str);
    } catch (err) {

        if (str === 'undefined') {
            return undefined;
        } else {
            return str;
        }
    }
}

window.stringToType = stringToType;

export default stringToType;
