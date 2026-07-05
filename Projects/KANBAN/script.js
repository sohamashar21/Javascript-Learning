const todoEl = document.querySelector('#todo')
const progressEl = document.querySelector('#progress')
const doneEl = document.querySelector('#done')
const modal = document.querySelector('.modal')
const toggleModal = document.querySelector("#toggle-modal")
const modalBg = document.querySelector('.bg')
let draggedEl = null;

console.log(todoEl,progressEl,done)


const tasks = document.querySelectorAll('.task')

tasks.forEach(task=>{
  task.addEventListener('drag',(e)=>{
    // console.log('dragging',e)
    draggedEl = task
  })
})

function addDragEvenetsOnColumn(column){
 column.addEventListener('dragenter',(e)=>{
  e.preventDefault();
  column.classList.add('hover-over')
 })

 column.addEventListener('dragleave',(e)=>{
  e.preventDefault();
  column.classList.remove('hover-over')
 })

 column.addEventListener('dragover',(e)=>{
  e.preventDefault();
 })

 column.addEventListener('drop',(e)=>{
   e.preventDefault();
   console.log("dropped",draggedEl,column);

   column.appendChild(draggedEl)
   column.classList.remove("hover-over")
 })
}

addDragEvenetsOnColumn(todoEl)
addDragEvenetsOnColumn(progressEl)
addDragEvenetsOnColumn(doneEl)


toggleModal.addEventListener('click',()=>{
   modal.classList.toggle('active')
})


modalBg.addEventListener('click',()=>{
  modal.classList.remove('active')
})