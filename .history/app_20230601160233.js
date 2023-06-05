// ======================activeIconMenuBar=========================
function activeIconMenuBar(x) {
    x.classList.toggle("onClick");
}
// ======================charAnimation=========================
let list_string = document.querySelectorAll(".string");
list_string.forEach(string => {
    list_char = string.querySelectorAll(".char");
    let period = 1000; //mili seconds
    let onePartOfPeriod = Math.round(period / (list_char.length + 1));
    let delay = 0;
    let runningTime = onePartOfPeriod * 2;
    console.log(runningTime);
    list_char.forEach(char => {
        char.style.animationDelay = `${delay / 1000}s`;
        char.classList.add("charAnimation_toBottom");
        delay += onePartOfPeriod;
    });
    for(let char = list_char.length - 1; char >= 0;)
});