// ======================activeIconMenuBar=========================
function activeIconMenuBar(x) {
    x.classList.toggle("onClick");
}
// ======================charAnimation=========================
window.onload = () => {
    let list_string = document.querySelectorAll(".string");
    let stringPos = 0;
    let charPos = 0;
    let allChar = [[], []];

    list_string.forEach((string) => {
        list_char = string.querySelectorAll(".char");
        let period = 1000; //mili seconds
        let onePartOfPeriod = Math.round(period / (list_char.length + 1));
        let delay = 0;

        for (let i = list_char.length - 1; i >= 0; i--) {
            list_char[i].style.animationDelay = `${delay / 1000}s`;
            list_char[i].classList.add("charAnimation_toBottom");

            // list_char[i].addEventListener("animationstart", () => {
            //     list_char[i].style.visibility = "visible";
            //     list_char[i].style.opacity = 1;
            // });

            //nhét các ký tự vào mảng 2 chiều
            allChar[stringPos][charPos] = list_char[i];

            delay += onePartOfPeriod;
            charPos++;
        }
        stringPos++;
        charPos = 0;
    });

    for (let stringPos = 0; stringPos < allChar.length; stringPos++) {
        for (let charPos = 0; charPos < allChar[stringPos].length; charPos++) {
            console.log(allChar[stringPos][charPos]);
        }
    }
};
