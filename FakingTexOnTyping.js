let text = ["I love you sooo much <3", "I want merry you <3", "Do you love me"];
let count = 0, countTex = 0;
function confessText()
{
    if (text[count] == " ")
    {
        document.getElementById("text").value += text[countTex][count];
        count++;
    }
    document.getElementById("text").value += text[countTex][count];
    
    count++;
    if (count > text[countTex].length)
    {
        switch (countTex) {
            case 0:
                document.getElementById("mes").innerHTML = "Yeahhh, you so cuteee LMAO <3";
                count = 0;
                countTex++;
                document.getElementById("text").value = "";
                break;
            case 1:
                document.getElementById("mes").innerHTML = "Ohhh, for real XD";
                count = 0;
                countTex++;
                document.getElementById("text").value = "";
                break;
            case 2:
                document.getElementById("mes").innerHTML = "But, i don't like you LOL";
                count = 0;
                countTex++;
                document.getElementById("text").value = "";
                break;
        }
        if (countTex > 2)
        {
            alert("I'm leaving");
            location.reload();
        }
    }
}