// ======================activeIconMenuBarCustomer=========================
let list_boxCustomer = document.querySelectorAll(".boxCustomer");
console.log(list_boxCustomer);
let pageY
list_boxCustomer.forEach((boxCustomer)=>{
    boxCustomer.addEventListener("click", ()=>{
        let myIframe = document.querySelector("#myIframe");
        myIframe.classList.toggle('hide');
        myIframe.classList.toggle('show');
    })
})


