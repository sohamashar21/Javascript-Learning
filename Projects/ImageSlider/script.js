const nextELement = document.querySelector('.next')
const prevElement = document.querySelector('.prev')
const imgsElement = document.querySelectorAll('.image-container img');
const imageContainer = document.querySelector(".image-container")


let currentImage = 1;

let timeout;

nextELement.addEventListener('click',()=>{
  currentImage++;
  clearTimeout(timeout)
  updateImage();
})

prevElement.addEventListener('click',()=>{
  currentImage--;
  clearTimeout(timeout)
  updateImage();
});

updateImage();


function updateImage(){
 if(currentImage > imgsElement.length){
  currentImage = 1;
 }else if(currentImage<1){
  currentImage = imgsElement.length;
 }
 imageContainer.style.transform = `translateX(-${(currentImage - 1) * 800}px)`;
 timeout = setTimeout(()=>{
    currentImage++
    updateImage();
 },3000)
}