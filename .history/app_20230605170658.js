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

function showImgWrap() {
    setTimeout(() => {
        document.querySelector(".slide-img-1").classList.add("show_img1");
        document.querySelector(".slide-img-2").classList.add("show_img2");
        document.querySelector(".slide-img-3").classList.add("show_img3");
        document.querySelector(".slide-img-4").classList.add("show_img4");

        if (
            isAnimationRunning(
                document.querySelector(".slide-img-4"),
                "hide_img4"
            )
        ) {
            console.log("Animation is running.");
        } else {
            console.log("Animation is not running.");
        }
        isAnimationInProgress = false;
        console.log("hoàn thành animation");
    }, 3000);
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

animationChar();
showImgWrap();

function isAnimationRunning(elm, aniName) {
    const styles = window.getComputedStyle(elm);
    const currentAnimation = styles.animationName;

    return currentAnimation !== "none" && currentAnimation === aniName;
}

// ======================Slide=========================
let isAnimationInProgress = true;

document.querySelector(".next").addEventListener("click", () => {
    if (isAnimationInProgress) {
        console.log("đang xử lý");
        return;
    } else {
        console.log("okeee");
        isAnimationInProgress = true;
        delete_showImgWrap();
        hideImgWrap();
        setTimeout(() => {
            delete_hideImgWrap();
            let list_slideItem = document.querySelectorAll(".slideItem");
            document.querySelector(".slide").appendChild(list_slideItem[0]);

            animationChar();
            showImgWrap();
        }, 2000);
    }
});

document.querySelector(".prev").addEventListener("click", () => {
    let list_slideItem = document.querySelectorAll(".slideItem");
    document
        .querySelector(".slide")
        .prepend(list_slideItem[list_slideItem.length - 1]);

    animationChar();
    showImgWrap();
});
