// ======================activeIconMenuBar=========================
function activeIconMenuBar(x) {
    x.classList.toggle("onClick");
}
// ======================charAnimation=========================

let first_slide = document.querySelector(".slideItem");
let list_string = first_slide.querySelectorAll(".string");
let stringPos = 0;
let charPos = 0;
let allChar = [[], []];
let period = 1000; //mili seconds
list_string.forEach((string) => {
    list_char = string.querySelectorAll(".char");
    
    let onePartOfPeriod = Math.round(period / (list_char.length + 1));
    let delay = 0;

    for (let i = list_char.length - 1; i >= 0; i--) {
        list_char[i].style.animationDelay = `${delay / 1000}s`;
        list_char[i].classList.add("charAnimation_toBottom");

        //nhét các ký tự vào mảng 2 chiều
        allChar[stringPos][charPos] = list_char[i];

        // tăng giá trị delay
        delay += onePartOfPeriod;
        // tăng giá trị charPos
        charPos++;
    }
    stringPos++;
    charPos = 0;
});

for (let stringPos = 0; stringPos < allChar.length; stringPos++) {
    for (let charPos = 0; charPos < allChar[stringPos].length; charPos++) {
        console.log(allChar[stringPos][charPos]);
        allChar[stringPos][charPos].addEventListener("animationstart", () => {
            allChar[stringPos][charPos].style.visibility = "visible";
            allChar[stringPos][charPos].style.opacity = 1;
        });
    }
}

// ======================PictureWrap=========================
setTimeout(() => {
    console.log(period);
}, period);
