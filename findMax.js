let numbers = [];
let range = +prompt("Nhập kích thước của mảng: ");
let max, positionMax;
for (let i = 0; i < range; i++)
{
    let num = +prompt("Nhập phần tử thứ " + (i + 1));
    if (i == 0)
    {
        max = num;
        positionMax = i;
    }
    if (num > max)
    {
        max = num;
        positionMax = i;
    }
    numbers.push(num);
}
alert("Giá trị lớn nhất là: " + max + " tại vị trí " + positionMax);