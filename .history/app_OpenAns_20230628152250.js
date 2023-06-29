// ======================activeIconMenuBar=========================
function activeIconMenuBar(x) {
    x.classList.toggle("onClick");
    let mainMenu = document.querySelector("header .menu .main-menu");
    let lang = document.querySelector(".navigationBar .lang");
    let bgMenu = document.querySelector("header .menu .color-bg-menu");
    if (x.classList.contains("onClick")) {
        mainMenu.classList.add("active");
        lang.classList.add("active");
        bgMenu.classList.add("active");
        bgMenu.classList.remove("noActive");
        changeBackroundMenu();
    } else {
        mainMenu.classList.remove("active");
        lang.classList.remove("active");
        bgMenu.classList.remove("active");
        bgMenu.classList.add("noActive");
    }
}

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

function changeBackroundMenu() {
    let first_elm = dataBackgroundMenu.shift();
    dataBackgroundMenu.push(first_elm);
    document
        .querySelector("header .menu .color-bg-menu")
        .style.setProperty("--color-bgMenu", dataBackgroundMenu[0]);
}

// ======================textRun=========================

let thisBox_list = document.querySelectorAll(
    ".contentBlock1 .textBanner .thisBox"
);
thisBox_list.forEach((thisBox) => {
    let widthContent = thisBox.offsetWidth / 2;
    let thisBoxStyles = getComputedStyle(thisBox);
    thisBox.style.setProperty("--contentWidth", `${-widthContent + 9.5}px`);
});

// ======================EnterButton=========================
let objIcon = document.querySelector(".contentBlock1 .obj-icon");
objIcon.addEventListener("mousemove", (e) => {
    let xValue = e.clientX;
    let yValue = e.clientY;
    let rectOfobjIcon = objIcon.getBoundingClientRect();
    let yValueBtn = rectOfobjIcon.top + rectOfobjIcon.height / 2;
    let xValueBtn = rectOfobjIcon.left + rectOfobjIcon.width / 2;
    let speed = 0.125;
    objIcon.style.transform = `translate(${-(xValue - xValueBtn) * speed}px,${
        -(yValue - yValueBtn) * speed
    }px) `;
});

objIcon.addEventListener("mouseout", () => {
    objIcon.style.transform = `translate(0,0)`;
});

// ======================ScrollAnimation=========================

//Hiệu ứng for nav
function moveNav(target) {
    let logoNav = document.querySelector("header .navigation .logo");
    let targetPage = document.querySelector("header .navigation .targetPage");
    let bar = document.querySelector("header .navigation .iconBar");
    let bar_backGround = document.querySelector(
        "header .navigation .iconBar .background"
    );
    if (target < 1) {
        logoNav.style.transform = `translate(0,0)`;
        targetPage.style.transform = `translate(0,0)`;
        bar.classList.remove("active");
        bar_backGround.style.visibility = "hidden";
    }
    if (target > 1 && target < 100) {
        logoNav.style.transform = `translate(${-target * 200}px,0)`;
        targetPage.style.transform = `translate(0,${-target * 200}px)`;
        bar.classList.add("active");
        bar_backGround.style.visibility = "visible";
    }
}
//hiệu ứng contentBlock1
function contentBlock1_Ani(target) {
    let contentBox = document.querySelector(".contentBlock1 .contentBox");
    if (target < 35) {
        contentBox.style.transform = `translate(0,${target * 5}px)`;
    }
}
//hiệu ứng contentBlock2
function contentBlock2_Ani(target, isNotRunning = false) {
    let contentBox = document.querySelector(".contentBlock2 .contentBox");
    //giá trị transform ban đầu
    let start = 8;
    let end = 60;

    // Nếu truyền tham số isNotRunning = true (targer bằng bất kì) thì sẽ chạy
    if (isNotRunning) {
        console.log(start * 5 - 170);
        contentBox.style.transform = `translate(0,${start * 5 - 170}px)`;
        isNotRunning = false;
    }

    if (target >= start && target < end) {
        contentBox.style.transform = `translate(0,${target * 5 - 170}px)`;
    }
}
//hiệu ứng contentBlock3
function contentBlock3_Ani(target, isNotRunning = false) {
    let contentBox = document.querySelector(".contentBlock3 .contentBox");
    //giá trị transform ban đầu
    let start = 40;
    let end = 84;

    // Nếu truyền tham số isNotRunning = true (targer bằng bất kì) thì sẽ chạy
    if (isNotRunning) {
        console.log(start * 4 - 230);
        contentBox.style.transform = `translate(0,${start * 4 - 230}px)`;
        isNotRunning = false;
    }

    if (target >= start && target <= end) {
        contentBox.style.transform = `translate(0,${target * 4 - 230}px)`;
    }
}
//hiệu ứng contentBlock4
function contentBlock4_Ani(target, isNotRunning = false) {
    let contentBox = document.querySelector(".contentBlock4 .contentBox");
    //giá trị transform ban đầu
    let start = 75.5;
    let end = 88;

    // Nếu truyền tham số isNotRunning = true (targer bằng bất kì) thì sẽ chạy
    if (isNotRunning) {
        contentBox.style.transform = `translate(0,${-(start * 15 - 1200)}px)`;
        isNotRunning = false;
    }

    if (target >= start && target <= end) {
        contentBox.style.transform = `translate(0,${-(target * 15 - 1200)}px)`;
    }
}
//hiệu ứng contentBlock5
function contentBlock5_Ani(target, isNotRunning = false) {
    let contentBox = document.querySelector(".contentBlock5 .contentBox");
    //giá trị transform ban đầu
    let start = 75;
    let end = 110;

    // Nếu truyền tham số isNotRunning = true (targer bằng bất kì) thì sẽ chạy
    if (isNotRunning) {
        contentBox.style.transform = `translate(-50%,${
            -90 + (start - 80) * 1.2
        }%)`;
        isNotRunning = false;
    }

    if (target >= start && target <= end) {
        contentBox.style.transform = `translate(-50%,${
            -90 + (target - 80) * 1.2
        }%)`;
    }
}
//hiệu ứng contentBlockFooter
function contentBlockFooter_Ani(target, isNotRunning = false) {
    let contentBox = document.querySelector(".contentBlockFooter .contentBox");
    //giá trị transform ban đầu
    let start = 96;
    let end = 120;

    // Nếu truyền tham số isNotRunning = true (targer bằng bất kì) thì sẽ chạy
    if (isNotRunning) {
        contentBox.style.transform = `translate(0,${-(start * 15 - 1600)}px)`;
        isNotRunning = false;
    }

    if (target >= start && target <= end) {
        contentBox.style.transform = `translate(0,${-(target * 15 - 1600)}px)`;
    }
}

//chạy hiệu ứng
// contentBlock2_Ani(0, true);
// contentBlock3_Ani(0, true);
contentBlock4_Ani(0, true);
contentBlock5_Ani(0, true);
contentBlockFooter_Ani(0, true);

window.addEventListener("scroll", (e) => {
    let heightOfFooter = document.querySelector("footer").offsetHeight;
    //Vị trí của scroll (không tính footer)
    let targetScroll =
        (window.pageYOffset /
            (document.body.offsetHeight -
                heightOfFooter -
                window.innerHeight)) *
        100;
    // console.log('Scroll: ' + targetScroll);

    //chạy hiệu ứng
    moveNav(targetScroll);
    contentBlock1_Ani(targetScroll);
    // contentBlock2_Ani(targetScroll);
    // contentBlock3_Ani(targetScroll);
    contentBlock4_Ani(targetScroll);
    contentBlock5_Ani(targetScroll);
    contentBlockFooter_Ani(targetScroll);
});

function ScrollAnimation(elm, distance, speed) {
    console.log(elm.getBoundingClientRect().top);
    let startingPosition = elm.getBoundingClientRect().top;
    let maxDistance = startingPosition + distance;

    // Thiết lập sự kiện scroll
    window.addEventListener("scroll", function () {
        
    });
}

let element = document.querySelector(".contentBlock2 .contentBox");
let distanceToMove = 280; // Khoảng đường di chuyển tối đa của phần tử
let animationSpeed = 0.2; // Tốc độ di chuyển của phần tử

ScrollAnimation(element, distanceToMove, animationSpeed);
ScrollAnimation(
    document.querySelector(".contentBlock3 .contentBox"),
    280,
    0.15
);
