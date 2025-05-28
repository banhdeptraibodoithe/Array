let Elements = [];
function addElements() {
    let a = document.getElementById("txtValue").value;
    Elements.push(a);
    document.getElementById("txtValue").value = "";
}
function displayElements() {
    let list = "Số Element hiện tại " + Elements.length +"<br>";
    for (let i = 0; i < Elements.length; i++) {
        list += "Element " + i + " = " + Elements[i] + "<br>";
    }
    document.getElementById("result").innerHTML = list;
}
function hide() {
    document.getElementById("result").innerHTML = "";
}
function deleteLast() {
    Elements.pop();
    displayElements();
}
function editValue() {
    if (Elements.length > 0)
    {
        while (true) {
        let edit = +prompt("Chọn giá trị muốn sửa(" + 0 + " - " + (Elements.length - 1) + ")");
        if (edit >= 0 || edit < Elements.length) {
            Elements[edit] = prompt("Nhập giá trị mới cho Element " + edit);
            displayElements();
            break;
        }
        else
            alert("Element không hợp lệ");
    }
    }
    else
    {
        displayElements();
        alert("Không có phần tử nào để chỉnh sửa");
        hide();
    }

}