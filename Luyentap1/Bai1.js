let numbers = [];
let range = +prompt("Nhập kích thước của mảng: ");
let count = 0;
for (let i = 0; i < range; i++)
{
    numbers.push(+prompt("Nhập phần tử thứ " + (i + 1)));
    if (numbers[i] >= 10)
    {
        count++;
    }
}
console.log(numbers);
alert("Có tất cả " + count + " số nguyên lớn hơn hoặc bằng 10");
