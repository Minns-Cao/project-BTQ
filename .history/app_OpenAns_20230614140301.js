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
    let rootElm = document.documentElement;
    let rootStyles = getComputedStyle(rootElm);
    rootElm.style.setProperty('--content-width', `-${widthContent}px`)
    console.log(rootStyles.getPropertyValue('--content-width'));
    thisBox.classList.add('active');
});

// Lấy danh sách các keyframes rules trong tài liệu CSS
const styleSheets = document.styleSheets;
let keyframesRule = null;

// Lặp qua từng stylesheet để tìm keyframes rule cần kiểm tra
for (let i = 0; i < styleSheets.length; i++) {
  const styleSheet = styleSheets[i];
  const rules = styleSheet.cssRules || styleSheet.rules;

  // Lặp qua từng rule để kiểm tra có phải keyframes rule không
  for (let j = 0; j < rules.length; j++) {
    const rule = rules[j];

    if (rule.type === CSSRule.KEYFRAMES_RULE && rule.name === 'myAnimation') {
      keyframesRule = rule;
      break;
    }
  }

  // Nếu đã tìm thấy keyframes rule, thoát khỏi vòng lặp
  if (keyframesRule) {
    break;
  }
}

// Kiểm tra và hiển thị giá trị trong mỗi keyframe
if (keyframesRule) {
  const keyframes = keyframesRule.cssRules;

  for (let k = 0; k < keyframes.length; k++) {
    const keyframe = keyframes[k];
    const keyframeValue = keyframe.style.getPropertyValue('opacity');

    console.log(keyframeValue);
  }
}

