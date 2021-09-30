function fullSum(...args) {
    return args.reduce((acc, cur) => {
        if (Number.isInteger(cur) || Number.isNaN(cur)) {
            return acc + cur;
        } else {
            throw  new Error("Wrong Argument Type");
        }
    }, 0);
}

window.fullSum = fullSum;

export default fullSum;
