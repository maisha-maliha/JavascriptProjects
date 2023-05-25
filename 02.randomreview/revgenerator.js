const next = document.getElementsByClassName("next")[0];
const preview = document.getElementsByClassName("preview")[0];
const randombtn = document.getElementsByClassName("random")[0];
const rev = document.getElementsByClassName("review")[0];

const data = [
    {
        "name": "book 1",
        "rev": "a very nice book"
    },
    {
        "name": "book 2",
        "rev": "okish book"
    },
    {
        "name": "book 3",
        "rev": "a very very avarage book"
    },
    {
        "name": "book 4",
        "rev": "a very bad book"
    },
    {
        "name": "book 5",
        "rev": "whatever book"
    },
    {
        "name": "book 6",
        "rev": "not bad but could be good book"
    }
];
let count = 0;
rev.innerText = `NAME: ${data[0].name}.\n REVIEW: ${data[0].rev}`;

next.addEventListener('click', ()=>{
    if(count < data.length-1){
        count++;
        rev.innerText = `NAME: ${data[count].name}.\n REVIEW: ${data[count].rev}`;
    } else{
        count = 0;
        rev.innerText = `NAME: ${data[count].name}.\n REVIEW: ${data[count].rev}`;
    }
});

preview.addEventListener('click', ()=>{
    if(count > 0){
        count--;
        rev.innerText = `NAME: ${data[count].name}.\n REVIEW: ${data[count].rev}`;
    } else{
        count = data.length - 1;
        rev.innerText = `NAME: ${data[count].name}.\n REVIEW: ${data[count].rev}`;
    }
});
// show rnadom book review
randombtn.addEventListener('click', ()=>{
    count = Math.floor(Math.random() * data.length);
    rev.innerText = `NAME: ${data[count].name}.\n REVIEW: ${data[count].rev}`;
});