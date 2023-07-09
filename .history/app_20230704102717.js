// ======================activeIconMenuBar=========================
function activeIconMenuBar(x) {
    x.classList.toggle("onClick");
    let mainMenu = document.querySelector("header .menu .main-menu");
    let lang = document.querySelector(".navigationBar .lang");
    let bgMenu = document.querySelector("header .menu .color-bg-menu");
    if (x.classList.contains("onClick")) {
        console.log(mainMenu);
        mainMenu.classList.add("active");
        lang.classList.add("active");
        bgMenu.classList.add("active");
        bgMenu.classList.remove("noActive");
        changeBackroundMenu();
    } else {
        console.log("No");
        mainMenu.classList.remove("active");
        lang.classList.remove("active");
        bgMenu.classList.remove("active");
        bgMenu.classList.add("noActive");
    }
}

// ======================charAnimation=========================
function animationChar() {
    let first_slide = document.querySelector(".slideItem");
    let list_string = first_slide.querySelectorAll(".string");
    let stringPos = 0;
    let charPos = 0;
    let allChar = [[], []];
    let period = 600; //mili seconds (time of char animation running)

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

function animationChar_hide() {
    let first_slide = document.querySelector(".slideItem");
    let list_char = first_slide.querySelectorAll(".char");
    list_char.forEach((char) => {
        char.style.opacity = 0;
        char.style.visibility = "hidden";
        char.classList.remove("charAnimation_toBottom");
        char.classList.remove("charAnimation_toTop");
        char.classList.add("hide_char");
    });
}

function remove_animationChar_hide() {
    let first_slide = document.querySelector(".slideItem");
    let list_firstSlideChar = first_slide.querySelectorAll(".char");
    let array_firstSlideChar = Array.from(list_firstSlideChar);
    let list_allChar = document.querySelectorAll(".char");
    let array_allChar = Array.from(list_allChar);
    let array_notfirstSlideChar = array_allChar.filter(
        (elm) => !array_firstSlideChar.includes(elm)
    );
    array_notfirstSlideChar.forEach((char) => {
        char.style.visibility = "hidden";
        char.style.opacity = 0;
        char.classList.remove("hide_char");
    });
}

let timeAnimationShowImgWrap_Finish = 0;
function showImgWrap(choose = 0) {
    delayShow = 2500;
    setTimeout(() => {
        document.querySelector(".slide-img-1").classList.add("show_img1");
        document.querySelector(".slide-img-2").classList.add("show_img2");
        document.querySelector(".slide-img-3").classList.add("show_img3");
        document.querySelector(".slide-img-4").classList.add("show_img4");
        let last_animationElm = document.querySelector(".slide-img-4");
        let stylesOfLastAnimationElm =
            window.getComputedStyle(last_animationElm);

        timeAnimationShowImgWrap_Finish =
            (Number(
                stylesOfLastAnimationElm.animationDuration.replace("s", "")
            ) +
                Number(
                    stylesOfLastAnimationElm.animationDelay.replace("s", "")
                )) *
            1000;
    }, delayShow);

    setTimeout(() => {
        changeBackround(choose);
        animationChar_hide();
        document.querySelector(".slide-img-wrap").classList.add("pic-img-show");
    }, delayShow + timeAnimationShowImgWrap_Finish + 500);

    setTimeout(() => {
        isAnimationInProgress = false;
    }, delayShow + timeAnimationShowImgWrap_Finish + 2500);
}

function delete_showImgWrap() {
    document.querySelector(".slide-img-1").classList.remove("show_img1");
    document.querySelector(".slide-img-2").classList.remove("show_img2");
    document.querySelector(".slide-img-3").classList.remove("show_img3");
    document.querySelector(".slide-img-4").classList.remove("show_img4");
}
function hideImgWrap() {
    document.querySelector(".slide-img-1").classList.add("hide_img1");
    document.querySelector(".slide-img-2").classList.add("hide_img2");
    document.querySelector(".slide-img-3").classList.add("hide_img3");
    document.querySelector(".slide-img-4").classList.add("hide_img4");
}
function delete_hideImgWrap() {
    document.querySelector(".slide-img-1").classList.remove("hide_img1");
    document.querySelector(".slide-img-2").classList.remove("hide_img2");
    document.querySelector(".slide-img-3").classList.remove("hide_img3");
    document.querySelector(".slide-img-4").classList.remove("hide_img4");
}
let dataBackground = [
    "--color-bg8",
    "--color-bg1",
    "--color-bg2",
    "--color-bg3",
    "--color-bg4",
    "--color-bg5",
    "--color-bg6",
    "--color-bg7",
];
let dataBackgroundMenu = [
    "#24547f",
    "#463b75",
    "#d9996b",
    "#86506c",
    "#206a54",
    "#779273",
    "#e48f92",
    "#6dbcc5",
];

function changeBackround(choose = 0) {
    // 1: lùi
    // other: tiến
    if (choose === 1) {
        let last_elm = dataBackground.pop();
        dataBackground.unshift(last_elm);

        document.querySelector(
            ".background"
        ).style.backgroundColor = `var(${dataBackground[0]})`;
        document.querySelector(
            ".enterbutton"
        ).style.backgroundColor = `var(${dataBackground[0]})`;
    } else {
        let first_elm = dataBackground.shift();
        dataBackground.push(first_elm);

        document.querySelector(
            ".background"
        ).style.backgroundColor = `var(${dataBackground[0]})`;
        document.querySelector(
            ".enterbutton"
        ).style.backgroundColor = `var(${dataBackground[0]})`;
    }
}
function changeBackroundMenu() {
    let first_elm = dataBackgroundMenu.shift();
    dataBackgroundMenu.push(first_elm);
    document
        .querySelector("header .menu .color-bg-menu")
        .style.setProperty("--color-bgMenu", dataBackgroundMenu[0]);
}

animationChar();
showImgWrap();

// ======================Slide=========================
let isAnimationInProgress = true;

document.querySelector(".next").addEventListener("click", () => {
    if (isAnimationInProgress) {
        return;
    } else {
        isAnimationInProgress = true;

        document
            .querySelector(".slide-img-wrap")
            .classList.remove("pic-img-show");
        remove_animationChar_hide();
        delete_showImgWrap();
        hideImgWrap();
        setTimeout(() => {
            delete_hideImgWrap();
            let list_slideItem = document.querySelectorAll(".slideItem");
            document.querySelector(".slide").appendChild(list_slideItem[0]);

            animationChar();
            showImgWrap();
        }, 1000);
    }
});

document.querySelector(".prev").addEventListener("click", () => {
    if (isAnimationInProgress) {
        return;
    } else {
        isAnimationInProgress = true;

        document
            .querySelector(".slide-img-wrap")
            .classList.remove("pic-img-show");
        remove_animationChar_hide();
        delete_showImgWrap();
        hideImgWrap();
        setTimeout(() => {
            delete_hideImgWrap();
            let list_slideItem = document.querySelectorAll(".slideItem");
            document
                .querySelector(".slide")
                .prepend(list_slideItem[list_slideItem.length - 1]);

            animationChar();
            showImgWrap(1);
        }, 1000);
    }
});

setInterval(() => {
    document.querySelector(".next").click();
}, 12000);

// ======================EnterButton=========================
let btnEnter = document.querySelector(".enterbutton");
let textBtnEnter = btnEnter.querySelector(".text");
btnEnter.addEventListener("mousemove", (e) => {
    let xValue = e.clientX;
    let yValue = e.clientY;
    let rectOfBtnEnter = btnEnter.getBoundingClientRect();
    let yValueBtn = rectOfBtnEnter.top + rectOfBtnEnter.height / 2;
    let xValueBtn = rectOfBtnEnter.left + rectOfBtnEnter.width / 2;
    let speed = 0.25;
    btnEnter.style.transform = `translate(${
        (xValue - xValueBtn) * speed - 50
    }%,${(yValue - yValueBtn) * speed - 50}%) scale(1.3)`;

    textBtnEnter.style.fontSize = `1.5vw`;
    textBtnEnter.style.letterSpacing = `1px`;
});

btnEnter.addEventListener("mouseout", () => {
    btnEnter.style.transform = `translate(-50%,-50%) scale(1)`;
    textBtnEnter.style.fontSize = `1.3vw`;
    textBtnEnter.style.letterSpacing = `0px`;
});

// ======================POINTER=========================
let pointer = document.querySelector(".pointer");

window.addEventListener("mousemove", (e)=>{
    let top = e.pageY;
    let left = e.pageX;
    console.log(top, left)
    pointer.style.top = `${top}px`;
    pointer.style.left = `${left}px`;
})



