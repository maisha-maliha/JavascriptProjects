const btn = document.getElementsByTagName("button")[0];
const body = document.getElementsByTagName("body")[0];
const clrname = document.getElementsByClassName("clrname")[0];
const hex = [1,2,3,4,5,6,7,8,9,0,'A','B','C','D','E', 'F'];
btn.addEventListener('click', ()=>{
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random()*hex.length)];
    }
    body.style.backgroundColor = color;
    clrname.innerText = color;
});