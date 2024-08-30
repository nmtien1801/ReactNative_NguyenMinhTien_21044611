// find trả về phần tử đầu thỏa

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Array.prototype.findFn = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            return this[i];
        }
    }
    return undefined;
}

let rs = arr.findFn((item) => item % 16 === 0);

console.log(rs);