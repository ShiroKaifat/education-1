function isEqualAdvances(a, b) {

    try {
        let count = 0;

        Object.entries(a).map(value1 => {

            Object.entries(b).map(value2 => {

                if (value2[0] === value1[0] && JSON.stringify(value2[1]) === JSON.stringify(value1[1])) {
                    count++;
                }
            });
        });
        return (count === Object.values(a).length && count === Object.values(b).length);
    } catch (err) { return false; }
}

window.isEqualAdvances = isEqualAdvances;

export default isEqualAdvances;
