let images = document.querySelectorAll('.results img');
let modalImage = document.getElementById('img1');
let modal = document.getElementById('imgModal');
let close = document.getElementsByClassName('close')[0];
let captions = document.getElementById('caption');

/* images for the modal */
images.forEach(function(image){
    image.addEventListener('click', function(event){
        modal.style.display = 'block';
        modalImage.src = event.target.src;
        captions.innerHTML = this.alt;
    })
})


/* close button */
close.addEventListener('click', function(){
    modal.style.display = 'none';
})
