let numbers = [7, 8, 9, 2, 1, 3, 15, 75, 6, 10];
let max = numbers[0], position = 0;
for (let i = 0; i < numbers.length; i++)
    {
        if (numbers[i] > max)
        {
            max = numbers[i];
            position = i;
        }
    }
alert("Phần tử có giá trị lớn nhất là " + max + " có vị trí thứ " + (position + 1)+ " trong mảng");
