function factorial(n) {
    let k = 1;

    for (let i = 1; i <= n; i++) {
        k *= i;
    }
    return k;
}

window.factorial = factorial;

export default factorial;
