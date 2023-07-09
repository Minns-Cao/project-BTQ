// ========================
// var iframe = document.getElementById('myIframe');

// // Ngăn sự kiện cuộn trang web chính
// window.addEventListener('scroll', function(e) {
//   e.preventDefault();
//   window.scrollTo(0, 0);
// });

// // Cho phép cuộn bên trong iframe
// iframe.addEventListener('load', function() {
//   iframe.contentWindow.addEventListener('scroll', function(e) {
//     e.stopPropagation();
//   });
// });

    let myIframe = document.querySelector("#myIframe");
    let bodySubPage = null;
    window.addEventListener("load")
    console.log(bodySubPage);
    let iconBar = document.querySelector("header .navigationBar .iconBar");
    // ======================activeIconMenuBarCustomer=========================
    let list_boxCustomer = document.querySelectorAll(".boxCustomer");
    let CompanyPage_status = "close";
    list_boxCustomer.forEach((boxCustomer) => {
        boxCustomer.addEventListener("click", () => {
            bodySubPage.scrollTo(0, 0);
            myIframe.classList.remove("hide");
            myIframe.classList.add("show");
            CompanyPage_status = "open";
            iconBar.classList.add("onClick");
            logoNav.style.transform = `translate(0,0)`;
        });
    });

    // ======================activeIconMenuBar=========================
    let mainMenu = document.querySelector("header .menu .main-menu");
    let lang = document.querySelector(".navigationBar .lang");
    let bgMenu = document.querySelector("header .menu .color-bg-menu");
    function activeIconMenuBar(x) {
        if (CompanyPage_status === "close") {
            x.classList.toggle("onClick");

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
        } else if (CompanyPage_status === "open") {
            x.classList.remove("onClick");
            myIframe.classList.add("hide");
            myIframe.classList.remove("show");
            logoNav.style.transform = `translate(${-2 * 200}px,0)`;
            CompanyPage_status = "close";
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
    let objIcon = document.querySelector(".obj-icon");
    if (objIcon) {
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
    }
    // ======================ScrollAnimation=========================
    let logoNav = document.querySelector("header .navigation .logo");
    let targetPage = document.querySelector("header .navigation .targetPage");
    let bar = document.querySelector("header .navigation .iconBar");
    let bar_backGround = document.querySelector(
        "header .navigation .iconBar .background"
    );
    function moveNav(target) {
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

    window.addEventListener("scroll", (e) => {
        let heightOfFooter = document.querySelector("footer").offsetHeight;
        //Vị trí của scroll (không tính footer)
        let targetScroll =
            (window.pageYOffset /
                (document.body.offsetHeight -
                    heightOfFooter -
                    window.innerHeight)) *
            100;
        moveNav(targetScroll);
    });

    function ScrollAnimation(elm, distance, speed, trend, first) {
        window.addEventListener("scroll", function () {
            //khoảng di chuyển
            let x =
                (window.innerHeight - elm.getBoundingClientRect().top) * speed;

            //xử lý bug phần tử đầu tiên khi scroll
            if (first === "true") {
                x = x - window.innerHeight * speed;
            }

            //giới hạn di chuyển từ 0 tới distance
            let movePos = Math.max(0, Math.min(distance, x));

            //gán giá trị transform cho elm
            if (trend === "down" || trend === undefined) {
                elm.style.transform = `translateY(${movePos}px)`;
            } else if (trend === "up") {
                elm.style.transform = `translateY(${-(movePos - distance)}px)`;
            }
        });
    }

    let list_scrollElm = document.querySelectorAll(".scrollElm");

    list_scrollElm.forEach((scrollElm) => {
        let distance = scrollElm.dataset.distance;
        let speed = scrollElm.dataset.speed;
        let trend = scrollElm.dataset.trend;
        let first = scrollElm.dataset.first;
        ScrollAnimation(scrollElm, distance, speed, trend, first);
    });
