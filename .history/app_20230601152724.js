// ======================activeIconMenuBar=========================
function activeIconMenuBar(x) {
    x.classList.toggle("onClick");
}


// ======================charAnimation=========================
let list_string = document.querySelectorAll(".string");
list_string.forEach(string => {
    list_char = string.querySelectorAll(".char");
    console.log(list_char.length);
    let period = 2000; //mili seconds
    let onePartOfPeriod = period / list_char.length
    list_char.forEach(char => {
        
    })
});