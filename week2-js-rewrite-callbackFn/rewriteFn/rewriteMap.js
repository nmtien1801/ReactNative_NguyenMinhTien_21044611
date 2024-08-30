// 1. viết lại hàm map

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

Array.prototype.mapFn = function(callback) {
    let result = [];

    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i]));
    }
    return result;
}

let rs1 = arr1.mapFn((item) => item * 2);

console.log(rs1);