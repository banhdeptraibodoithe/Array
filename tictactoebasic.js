let caroBoard = [];
let cols = +prompt("Nhập số hàng: ");
let rows = +prompt("Nhập số cột: ");
let distable = "<table>";
for (let i = 0; i < cols; i++)
{
    let caroRow = [];
    distable += "<tr>"
    for (let j = 0; j < rows; j++)
    {
        caroRow.push("0");
        distable += "<td>"+ caroRow[j] + "</td>";
    }
    distable += "</tr>";
    caroBoard.push(caroRow);
}
distable += "</table>";
document.getElementById("table").innerHTML = distable;

function changeValue()
{
    let x = +prompt("Vị trí muốn thay đổi thuộc hàng: ");
    let y = +prompt("Vị trí muốn thay đổi thuộc cột: ");
    caroBoard[x][y] = "X";
    distable = "<table>";
    for (let i = 0; i < caroBoard.length; i++)
    {
        distable += "<tr>";
        for (let j = 0; j < caroBoard[i].length; j++)
        {
            distable += "<td>" + caroBoard[i][j] + "</td>"
        }
        distable += "</tr>";
    }
    distable += "</table>";
    document.getElementById("table").innerHTML = distable;
}