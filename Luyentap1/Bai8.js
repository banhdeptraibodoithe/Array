let numbers = [];
let range = +prompt("Nhập kích thước của mảng: ");
let count = 0;
for (let i = 0; i < range; i++)
{
    numbers.push(+prompt("Nhập phần tử thứ " + (i + 1)));
}
numbers.sort((a, b) => b - a);
console.log(numbers);