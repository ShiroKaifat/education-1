function fullSum(...args) {
    return args.reduce((acc, cur) => {
        if (Number.isInteger(cur) || Number.isNaN(cur)) {
            acc += cur;
        } else {
            throw  new Error("Wrong Argument Type");
        }
        return acc;
    }, 0);
}

window.fullSum = fullSum;

export default fullSum;
