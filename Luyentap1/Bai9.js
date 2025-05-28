let a = [];
let b = [];
for (let i = 0; i < 10; i++)
{
    a.push(+prompt("Nhập phần tử thứ " + (i + 1) + " cho a"));
    b.push(+prompt("Nhập phần tử thứ " + (i + 1) + " cho b"));
}
let c = a.concat(b);
console.log(c);