let numbers = [];
let range = +prompt("Nhập kích thước của mảng: ");
let count = 0;
for (let i = 0; i < range; i++)
{
    numbers.push(+prompt("Nhập phần tử thứ " + (i + 1)));
}
let v = +prompt("Nhập v: ");
for (let i = 0; i < numbers.length; i++)
{
    if (v == numbers[i])
    {
        numbers.splice(i, 1);
        numbers.push(0);
    }
}
console.log(numbers);