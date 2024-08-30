// every -> tất cả phần tử thỏa thì true, ngược lại false

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Array.prototype.everyFn = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (!callback(this[i])) {
            return false;
        }
    }
    return true;
}

let rs = arr.everyFn((item) => item % 2 === 0);

console.log(rs);