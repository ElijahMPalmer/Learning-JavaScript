function sortArray(arr) {
    let last = arr.length - 1;
    for (var i = 0; i < last; i++) {
        [arr[i], arr[last]] = [arr[last], arr[i]];
        last -= 1;
    }
    return arr;
}
//Practice reversing array element
console.log(sortArray(['a', 'b', 'c', 'd', 'e']));