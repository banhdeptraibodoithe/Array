// Bài 1

// let a = [
//     [1, 2, 1, 24],
//     [8, 11, 9, 4],
//     [7, 0, 7, 27],
//     [7, 4, 28, 14],
//     [3, 10, 26, 7]
// ];

// for (let i = 0; i < a.length; i++)
// {
//     document.write("row" + i + "<br>");
//     for (let j = 0; j < a[i].length; j++)
//     {
//         document.write(a[i][j] + "<br>");
//     }
// }

// Bài 2

// let numbers = [];
// let a = +prompt("Nhập số phần tử của mảng: ");
// for (let i = 0; i < a; i++)
// {
//     numbers.push(prompt("Nhập phần tử thứ " + (i + 1)));
// }
// for (let i = 0; i < numbers.length / 2; i++)
// {
//     let temp = numbers[i];
//     numbers[i] = numbers[numbers.length - i - 1];
//     numbers[numbers.length - i - 1] = temp;
// }
// console.log(numbers);

// Bài 3

// let str = [];
// let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// let count = 0;
// let a = +prompt("Nhập số phần tử của mảng: ");
// for (let i = 0; i < a; i++)
// {
//     str.push(prompt("Nhập phần tử thứ " + (i + 1)));
//     for (let j = 0; j < numbers.length; j++)
//     {
//         if (str[i] == numbers[j])
//             count++;
//     }
// }
// console.log(str);
// console.log(count);

// Bài 4

// let str = prompt("Nhập vào chuỗi bất kỳ: ");
// let count = 0;
// if (str.length > 0)
//     count = 1;
// for (let i = 0; i < str.length; i++)
// {
//     if (str[i] == " ")
//         count++;
// }
// console.log(count);

// Bài 5

// let str1 = prompt("Nhập vào chuỗi bất kỳ 1: ");
// let str2 = prompt("Nhập vào chuỗi bất kỳ 2: ");
// if (str1 === str2)
//     console.log("Có");
// else
//     console.log("Không");

// Bài 6

// let char = [];
// let a = +prompt("Nhập số phần tử của mảng: ");
// for (let i = 0; i < a; i++)
// {
//     char.push(prompt("Nhập phần tử thứ " + (i + 1)));
//     if (char[i] == "-")
//         char[i] = "_";
// }  
// console.log(char);



