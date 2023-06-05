// ======================activeIconMenuBar=========================
function activeIconMenuBar(x) {
    x.classList.toggle("onClick");
}
// ======================charAnimation=========================
function animationChar() {
    let first_slide = document.querySelector(".slideItem");
    let list_string = first_slide.querySelectorAll(".string");
    let stringPos = 0;
    let charPos = 0;
    let allChar = [[], []];
    let period = 1000; //mili seconds (time of char animation running)

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
            allChar[stringPos][charPos].addEventListener(
                "animationstart",
                () => {
                    allChar[stringPos][charPos].style.visibility = "visible";
                    allChar[stringPos][charPos].style.opacity = 1;
                }
            );
        }
    }
}

animationChar();

setTimeout(() => {
    document.querySelector(".slide-img-1").classList.add("show_img1");
    document.querySelector(".slide-img-2").classList.add("show_img2");
    document.querySelector(".slide-img-3").classList.add("show_img3");
    document.querySelector(".slide-img-4").classList.add("show_img4");
}, 3000);

// ======================Slide=========================
document.querySelector(".prev").addEventListener("click", () => {
    let list_slideItem = document.querySelectorAll(".slideItem");
    document
        .querySelector(".slide")
        .prepend(list_slideItem[list_slideItem.length - 1]);
    setTimeout(() => {
        document.querySelector(".slide-img-1").classList.add("show_img1");
        document.querySelector(".slide-img-2").classList.add("show_img2");
        document.querySelector(".slide-img-3").classList.add("show_img3");
        document.querySelector(".slide-img-4").classList.add("show_img4");
    }, 3000);
});
document.querySelector(".next").addEventListener("click", () => {
    let list_slideItem = document.querySelectorAll(".slideItem");
    document.querySelector(".slide").appendChild(list_slideItem[0]);

    animationChar();

    setTimeout(() => {
        document.querySelector(".slide-img-1").classList.add("show_img1");
        document.querySelector(".slide-img-2").classList.add("show_img2");
        document.querySelector(".slide-img-3").classList.add("show_img3");
        document.querySelector(".slide-img-4").classList.add("show_img4");
    }, 3000);
});
