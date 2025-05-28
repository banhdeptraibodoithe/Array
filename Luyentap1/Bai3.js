let numbers = [7, 8, 9, 2, 1, 3, 15, 75, 6, 10];
let max = numbers[0], sum = 0;
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
    sum += numbers[i];
}
alert("Số lớn nhất trong mảng là " + max + " và trung bình của các phần tử trong mảng là " + (sum/ numbers.length));