let caroBoard = [];
let rows = +prompt("Nhập số hàng: ");
let cols = +prompt("Nhập số cột: ");
let turn = true;
let distable = "<table>";
for (let i = 0; i < rows; i++)
{
    let caroRow = [];
    distable += "<tr>"
    for (let j = 0; j < cols; j++)
    {
        caroRow.push("(.)");
        distable += "<td>"+ caroRow[j] + "</td>";
    }
    distable += "</tr>";
    caroBoard.push(caroRow);
}
distable += "</table>";
document.getElementById("table").innerHTML = distable;

function changeValue()
{
    let x, y;
    while(true)
    {
        x = +prompt("Vị trí muốn thay đổi thuộc hàng: ");
        y = +prompt("Vị trí muốn thay đổi thuộc cột: ");
        if ((x < rows && x >= 0) || (y < cols && y >= 0))
        {
            if (caroBoard[x][y] != "X" && caroBoard[x][y] != "O")
                break;
        }
        alert("Vị trí không hợp lệ hoặc đã từng thay đổi");
    }
    if (turn == true)
    {
        caroBoard[x][y] = "X";
        turn = false;
    }
    else
    {
        caroBoard[x][y] = "O";
        turn = true;
    }
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
    let count = 0;
    for (let i = 0; i < rows; i++)
    {
        if (caroBoard[i][y] == caroBoard[x][y])
        {
            count++;
            if (count == 3)
            {
                alert("Người chiến thắng là " + caroBoard[x][y]);
                location.reload();
            }
        }
        else
            count = 0;
    }
    for (let i = 0; i < cols; i++)
    {
        if (caroBoard[x][i] == caroBoard[x][y])
        {
            count++;
            if (count == 3)
            {
                alert("Người chiến thắng là " + caroBoard[x][y]);
                location.reload();
            }
        }
        else
            count = 0;
    }
}

