// reduce -> tính toán trả mảng đó về 1 giá trị đơn

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


const initialValue = 0;
Array.prototype.reduceFn = function(callback, initialValue) {
    let accumulator = initialValue;

    for (let i = 0; i < this.length; i++) {
        accumulator = callback(accumulator, this[i]);
    }
    return accumulator;
}

let rs = arr.reduceFn((accumulator, currentValue) => {
    return accumulator + currentValue;
}, initialValue);

console.log(rs); // 55