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

let thisBox_list = document.querySelectorAll('.contentBlock1 .textBanner .thisBox');
thisBox_list.forEach((thisBox)=> {
    let widthContent = thisBox.offsetWidth/2;
    let thisBoxStyles = getComputedStyle(thisBox);
    thisBox.style.setProperty('--contentWidth', `${-widthContent + 9.5}px`);
});


// ======================EnterButton=========================
let btnEnter = document.querySelector(".contentBlock1 .obj-icon img");
btnEnter.addEventListener("mousemove", (e) => {
    let xValue = e.clientX;
    let yValue = e.clientY;
    let rectOfBtnEnter = btnEnter.getBoundingClientRect();
    let yValueBtn = rectOfBtnEnter.top + rectOfBtnEnter.height / 2;
    let xValueBtn = rectOfBtnEnter.left + rectOfBtnEnter.width / 2;
    let speed = 0.01;
    btnEnter.style.transform = `translate(${
        (xValue - xValueBtn) * speed 
    }%,${(yValue - yValueBtn) * speed}%) `;
    console.log(`translate(${
        (xValue - xValueBtn) * speed - 50
    }%,${(yValue - yValueBtn) * speed - 50}%)`)
});

btnEnter.addEventListener("mouseout", () => {
    // btnEnter.style.transform = `translate(-50%,-50%) scale(1)`;
    console.log('ra ngoài r')
});

