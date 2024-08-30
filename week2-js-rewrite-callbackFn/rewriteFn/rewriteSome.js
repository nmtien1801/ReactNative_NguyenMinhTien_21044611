// hàm some trả về true nếu có ít nhất 1 phần tử thỏa

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

Array.prototype.somefn = function(callback) {
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i])) {
            return true;
        }
    }
    return false;
}

let rs = arr.somefn((item) => item % 2 === 0);

console.log(rs);