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
let objIcon = document.querySelector(".contentBlock1 .obj-icon");
objIcon.addEventListener("mousemove", (e) => {
    let xValue = e.clientX;
    let yValue = e.clientY;
    let rectOfobjIcon = objIcon.getBoundingClientRect();
    let yValueBtn = rectOfobjIcon.top + rectOfobjIcon.height / 2;
    let xValueBtn = rectOfobjIcon.left + rectOfobjIcon.width / 2;
    let speed = 0.125;
    objIcon.style.transform = `translate(${
        -(xValue - xValueBtn) * speed 
    }px,${-(yValue - yValueBtn) * speed}px) `;
   
});

objIcon.addEventListener("mouseout", () => {
    objIcon.style.transform = `translate(0,0)`;

});


// ======================ScrollAnimation=========================

//Hiệu ứng for nav 
function moveNav(target) {
    let logoNav = document.querySelector("header .navigation .logo")
    let targetPage = document.querySelector("header .navigation .targetPage")
    let bar = document.querySelector("header .navigation .iconBar")
    let barBackGround = document.querySelector("header .navigation .iconBar .background");
    if (target < 1) {
        logoNav.style.transform = `translate(0,0)`;
        targetPage.style.transform = `translate(0,0)`;
    }
    if (target < 4) {
        logoNav.style.transform = `translate(${-target * 200}px,0)`;
        targetPage.style.transform = `translate(0,${-target * 200}px)`;
    }

}

window.addEventListener('scroll', (e)=> {
    //Vị trí của scroll
    let targetScroll = (window.pageYOffset / (document.body.offsetHeight - window.innerHeight) * 100);
    console.log(targetScroll);

    //chạy hiệu ứng
    moveNav(targetScroll)
})

