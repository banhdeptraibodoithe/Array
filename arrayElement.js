let Elements = [];
function addElements()
{
    let a = document.getElementById("txtValue").value;
    Elements.push(a);
    document.getElementById("txtValue").value = "";
}
function displayElements()
{
    let list = "<br>";
    for (let i = 0; i < Elements.length; i++)
    {
        list += "Element " + i + " = " + Elements[i] + "<br>";
    }
    document.getElementById("result").innerHTML = list;
}
function hide()
{
    document.getElementById("result").innerHTML = "";
}
function deleteLast()
{
    Elements.pop();
}