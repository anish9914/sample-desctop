document.getElementById("textChanger").onclick = function () {

    var textEntered = "";
    debugger;
    textEntered = document.getElementById("textInput").value;
    console.log(textEntered);

    document.getElementById("text").innerHTML = textEntered;

}