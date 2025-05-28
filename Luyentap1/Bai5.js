let numbers = [7, 8, -1.8, 2, 1, 3, 15, 75, 6, 10];
let count = 0;
for (let i = 0; i < numbers.length; i++)
{
    if (numbers[i] < 0 && numbers[i] - Math.floor(numbers[i]) == 0)
        count++;
}
console.log("Số nguyên âm trong chuỗi là: " + count);