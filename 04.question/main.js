const card = document.querySelectorAll('.card');
// console.log(card);
card.forEach(element => {
    let span = element.querySelectorAll('.header span')[0];
    let body = element.querySelectorAll('.body')[0];
    span.addEventListener('click', ()=>{
        if(span.style.backgroundColor == 'black'){
            span.style = "background-color: none";
            body.style = "display:none";
        } else{
            remove();
            span.style = "background-color: black";
            body.style = "display:block";
        }
    }); 
});
function remove(){
    card.forEach(el => {
        let span = el.querySelectorAll('.header span')[0];
        let body = el.querySelectorAll('.body')[0];
        span.style = "background-color: none";
        body.style = "display: none";
    });
}