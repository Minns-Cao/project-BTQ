// ======================activeIconMenuBarCustomer=========================
let list_boxCustomer = document.querySelectorAll(".boxCustomer");
console.log(list_boxCustomer);
let pageY_Top = 0;
window.addEventListener("scroll",()=>{
    
})
list_boxCustomer.forEach((boxCustomer)=>{
    boxCustomer.addEventListener("click", ()=>{
        let myIframe = document.querySelector("#myIframe");
        myIframe.classList.toggle('hide');
        myIframe.classList.toggle('show');
    })
})


