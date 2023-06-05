// ======================activeIconMenuBar=========================
function activeIconMenuBar(x) {
    x.classList.toggle("onClick");
}
// ======================charAnimation=========================
let list_string = document.querySelectorAll(".string");
list_string.forEach(string => {
    list_char = string.querySelectorAll(".char");
    let period = 2000; //mili seconds
    let onePartOfPeriod = Math.round(period / (list_char.length + 1));
    let delay = 0;
    let runningTime = onePartOfPeriod * 2;
    console.log(runningTime);
    list_char.forEach(char => {
        console.log(char);
        console.log("yes");
        char.style.transitionDelay = runningTime;
    });
});