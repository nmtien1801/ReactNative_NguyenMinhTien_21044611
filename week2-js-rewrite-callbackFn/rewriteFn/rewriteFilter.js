const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Array.prototype.filterFn = function(callback) {
    let result = [];

    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            result.push(this[i]);
        }
    }
    return result;
}

let rs = arr.filterFn((item) => item % 2 === 0);

console.log(rs);