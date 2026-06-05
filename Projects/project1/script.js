const button = document.querySelectorAll('.button')
const body = document.querySelector("body")


button.forEach((button)=>{
  button.addEventListener('click',(e)=>{
    console.log(e);
    console.log(e.target)
    body.style.backgroundColor = e.target.id
  })
})