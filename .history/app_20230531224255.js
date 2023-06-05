// ======================activeIconMenuBar=========================
function activeIconMenuBar(x) {
    x.classList.toggle("onClick");
}


// ======================charAnimation=========================
let list_string = document.querySelectorAll(".string");
list_string.forEach(string => {
    list_char = string.querySelectorAll(".char");
    list_char.forEach(char => {
        console.log(char);
    })
});