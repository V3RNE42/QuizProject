window.addEventListener('load', eventos);

let url;

let home     = document.getElementById('home');
let question = document.getElementById('question');
let results  = document.getElementById('results');
let option   = document.getElementById('option');

question.disabled=true;
results .disabled=true;

function eventos() {
    
}

//     https://opentdb.com/api.php?amount=10&category=22&type=multiple
url = `https://opentdb.com/api.php?amount=10&category=${}&type=multiple`