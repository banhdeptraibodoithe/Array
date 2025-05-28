let numbers = [7, 8, 9, 2, 1, 3, 15, 75, 6, 10];
for (let i = 0; i < numbers.length / 2; i++)
{
    let temp = numbers[i];
    numbers[i] = numbers[numbers.length - i - 1];
    numbers[numbers.length - i - 1] = temp;
}
console.log(numbers);