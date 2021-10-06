function baseExpect(a) {
    const toBe = function (b) {
        return b === a;
    }
    toBe['not'] = function (c) {
        return c !== a;
    }
    return {toBe};
}

window.baseExpect = baseExpect;

export default baseExpect;
