// ======================activeIconMenuBar=========================
function activeIconMenuBar(x) {
    x.classList.toggle("onClick");
}


// ======================charAnimation=========================
let list_string = document.querySelectorAll(".string");
list_string.forEach(string => {
    list_char = string.querySelectorAll(".char");
    let period = 2000; //mili seconds
    let onePartOfPeriod = Math.round() period / (list_char.length + 1);
    console.log(onePartOfPeriod);
    list_char.forEach(char => {
        
    })
});