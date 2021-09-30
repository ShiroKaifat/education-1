function arraysSort(arr) {
    return [...arr.sort((a, b) => Math.max(...a) - Math.max(...b))];
}

window.arraysSort = arraysSort;

export default arraysSort;
