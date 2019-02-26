let modal = document.getElementById('imgModal');
let img = document.getElementById('modalImg');
let imgFloat = document.getElementById('img1');
let text = document.getElementById('caption');
let addingText = document.getElementById('textAdd');

img.addEventListener('onclick', function(){
    modal.style.display = 'block';
    imgFloat.src = this.src;
    text.innerHtml = addingText;
})

let close = document.getElementsByClassName('close')[0];
close.addEventListener('onclick', function(){
    modal.style.display = 'none';
})