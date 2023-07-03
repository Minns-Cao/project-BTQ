// ======================activeIconMenuBarCustomer=========================
let list_boxCustomer = document.querySelectorAll(".boxCustomer");
console.log(list_boxCustomer);
let pageY_Top = 0;
let CompanyPage_status = close;
window.addEventListener("scroll",()=>{
    pageY_Top = window.pageYOffset;
    console.log(pageY_Top);
})
list_boxCustomer.forEach((boxCustomer)=>{
    boxCustomer.addEventListener("click", ()=>{
        let myIframe = document.querySelector("#myIframe");
        myIframe.classList.toggle('hide');
        myIframe.classList.toggle('show');
        
    })
})


