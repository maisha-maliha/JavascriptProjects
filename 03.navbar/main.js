const nav = document.getElementsByTagName('nav')[0];
const span = document.getElementsByTagName("span")[0];
const spanli = document.querySelectorAll("span li");
let on = true;
span.addEventListener('click', ()=>{
    if(on){
        spanli.forEach(element => {
            element.style.backgroundColor = "white";
        });
        nav.style = "display:block";
        on = false;
    } else{
        spanli.forEach(element => {
            element.style.backgroundColor = "black";
        });
        nav.style = "display:none";
        on = true;
    }
});