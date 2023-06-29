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
        console.log(-(start * 15 - 1200));
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
        console.log(-90 + (start - 80) * 1.2);
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
        console.log(-(start * 15 - 1200));
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
        ((window.pageYOffset) /
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
    // Lấy vị trí ban đầu của phần tử
    let startingPosition = elm.offsetTop;
    
    // Xác định khoảng cách tối đa để di chuyển
    let maxDistance = startingPosition + distance;
  
    // Xác định tốc độ di chuyển (pixels/giây)
    let pixelsPerSecond = speed;
  
    // Thiết lập sự kiện scroll
    window.addEventListener('scroll', function () {
      // Tính toán khoảng cách phần tử đã được scroll
      let scrollDistance = window.pageYOffset;
        
      // Tính toán vị trí mới của phần tử
      let newPosition = startingPosition + (scrollDistance * pixelsPerSecond);
  
      // Giới hạn vị trí mới trong khoảng từ startingPosition đến maxDistance
      let clampedPosition = Math.min(maxDistance, Math.max(startingPosition, newPosition));
  
      // Áp dụng transform: translateY() cho phần tử
      elm.style.transform = `translateY(${clampedPosition - startingPosition}px)`;
      console.log(`translateY(${clampedPosition - startingPosition}px)`);

    });
}

function ScrollAnimation(elm, distance, speed) {
  const startingPosition = elm.offsetTop;
  const maxDistance = startingPosition + distance;
  const pixelsPerSecond = speed * 1000;
  let isVisible = false;

  // Tạo một instance của Intersection Observer
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        // Khi phần tử vào trong view
        if (entry.isIntersecting && !isVisible) {
          isVisible = true;

          // Thiết lập sự kiện scroll
          window.addEventListener('scroll', function () {
            const scrollDistance = window.pageYOffset;
            const newPosition = startingPosition + (scrollDistance * pixelsPerSecond);
            const clampedPosition = Math.min(maxDistance, Math.max(startingPosition, newPosition));
            elm.style.transform = `translateY(${clampedPosition - startingPosition}px)`;
          });
        }
      });
    },
    { threshold: 0.5 } // Ngưỡng để xác định khi phần tử được coi là nhìn thấy
  );

  // Theo dõi phần tử
  observer.observe(elm);
}
Cách sử dụng và truyền tham số cho hàm này tương tự như phiên bản trước:

javascript
Copy code
const element = document.getElementById('yourElementId');
const distanceToMove = 200;
const animationSpeed = 0.5;

ScrollAnimation(element, distanceToMove, animationSpeed);
Khi phần tử element được nhìn thấy trên màn hình (ít nhất 50% nằm trong view), hiệu ứng transform sẽ được áp dụng khi người dùng cuộn trang.





User
Chương trình trên được diễn ra như thế nào bạn có thể giải thích cho tôi tuần tự của nó không
ChatGPT
Tất nhiên! Dưới đây là một giải thích tuần tự về cách chương trình hoạt động:

Bước 1: Chương trình nhận các tham số đầu vào là elm (phần tử cần thực hiện animation), distance (khoảng cách di chuyển tối đa của phần tử theo trục Y) và speed (tốc độ di chuyển của phần tử).

Bước 2: Chương trình lấy vị trí ban đầu của phần tử (startingPosition) bằng cách sử dụng thuộc tính offsetTop. Điều này sẽ cho biết phần tử được đặt ở vị trí nào ban đầu trên trang.

Bước 3: Chương trình tính toán khoảng cách tối đa để di chuyển (maxDistance) bằng cách cộng startingPosition với distance. Điều này xác định khoảng cách tối đa mà phần tử có thể di chuyển.

Bước 4: Chương trình tính toán tốc độ di chuyển của phần tử trong pixels/giây (pixelsPerSecond) bằng cách nhân speed với 1000. Điều này chuyển đổi tốc độ thành số pixels mà phần tử di chuyển mỗi giây.

Bước 5: Chương trình tạo một biến isVisible với giá trị ban đầu là false. Biến này sẽ được sử dụng để theo dõi trạng thái hiển thị của phần tử.

Bước 6: Chương trình tạo một instance của Intersection Observer, một API cung cấp các cơ chế để theo dõi sự tương tác giữa các phần tử trên trang và viewport (khu vực nhìn thấy trên màn hình).

Bước 7: Chương trình định nghĩa một callback cho Intersection Observer. Callback này được gọi mỗi khi sự tương tác giữa các phần tử xảy ra. Trong callback này, chúng ta kiểm tra xem phần tử có nằm trong view không (được xem là hiển thị) và biến isVisible đang là false. Nếu điều kiện này được đáp ứng, chúng ta thực hiện bước 8.

Bước 8: Chương trình thiết lập một sự kiện scroll bằng cách sử dụng addEventListener. Mỗi khi người dùng cuộn trang, callback của sự kiện này được gọi. Trong callback này, chúng ta tính toán khoảng cách người dùng đã cuộn (scrollDistance) và tính toán vị





User
vậy nếu phần tử đang nằm trong view, và sau đó đi ra khỏi view thì biến isVisible nó có biến lại thành False không ?
ChatGPT
Đúng, nếu phần tử ban đầu nằm trong view và sau đó đi ra khỏi view, biến isVisible sẽ trở lại giá trị false.

Trong mã hiện tại, khi phần tử đầu tiên vào view, callback của Intersection Observer sẽ được gọi và biến isVisible sẽ được đặt thành true. Tuy nhiên, nếu phần tử đi ra khỏi view sau đó, callback sẽ không được gọi nữa và giá trị của isVisible vẫn giữ nguyên là true.

Để theo dõi trạng thái của phần tử khi nó đi vào và ra khỏi view, bạn có thể sử dụng một cơ chế khác. Ví dụ, bạn có thể sử dụng sự kiện scroll để kiểm tra xem phần tử có nằm trong view hay không. Khi phần tử đi ra khỏi view, bạn có thể đặt lại giá trị của biến isVisible thành false để phần tử được coi là không nhìn thấy.

Dưới đây là một phiên bản cập nhật của hàm ScrollAnimation() để cập nhật trạng thái của isVisible khi phần tử đi ra khỏi view:

javascript
Copy code
function ScrollAnimation(elm, distance, speed) {
  const startingPosition = elm.offsetTop;
  const maxDistance = startingPosition + distance;
  const pixelsPerSecond = speed * 1000;
  let isVisible = false;

  function updateVisibility() {
    isVisible = isElementInView(elm);
  }

  function isElementInView(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  window.addEventListener('scroll', function () {
    updateVisibility();

    if (isVisible) {
      const scrollDistance = window.pageYOffset;
      const newPosition = startingPosition + (scrollDistance * pixelsPerSecond);
      const clampedPosition = Math.min(maxDistance, Math.max(startingPosition, newPosition));
      elm.style.transform = `translateY(${clampedPosition - startingPosition}px)`;
    }
  });

  // Kiểm tra trạng thái ban đầu
  updateVisibility();
}
Trong phiên bản này, chúng ta đã thêm một hàm isElementInView() để kiểm tra xem phần tử có nằm trong view không dựa trên các giá trị bounding rectangle của phần tử. Mỗi khi sự kiện scroll được kích hoạt, chúng ta gọi updateVisibility() để cập nhật trạng thái của isVisible. Nếu isVisible là true, chúng ta áp dụng animation scroll như bình thường.









let element = document.querySelector('.contentBlock2 .contentBox'); 
let distanceToMove = 280; // Khoảng đường di chuyển tối đa của phần tử
let animationSpeed = 0.2; // Tốc độ di chuyển của phần tử

ScrollAnimation(element, distanceToMove, animationSpeed);
ScrollAnimation(document.querySelector('.contentBlock3 .contentBox'), 280, 0.15);
