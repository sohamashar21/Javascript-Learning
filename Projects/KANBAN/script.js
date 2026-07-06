let tasksData={}

const todoEl = document.querySelector('#todo')
const progressEl = document.querySelector('#progress')
const doneEl = document.querySelector('#done')
const column = [todoEl,progressEl,doneEl]
let draggedEl = null;

if(localStorage.getItem('tasks')){
  const data = JSON.parse(localStorage.getItem("tasks"))
  console.log(data)
  for(const col in data){
    console.log(col,data[col])
  }
}



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
   column.classList.remove("hover-over");

   [todoEl,progressEl,doneEl].forEach(col =>{
    const tasks = col.querySelectorAll('.task')
    const count = col.querySelector(".right")

    
    
    count.innerText = tasks.length; 
   })
 })
}

addDragEvenetsOnColumn(todoEl)
addDragEvenetsOnColumn(progressEl)
addDragEvenetsOnColumn(doneEl)




/* Modal related logic */ 

const toggleModal = document.querySelector("#toggle-modal")
const modalBg = document.querySelector('.bg')
const modal = document.querySelector('.modal')
const addTaskButton = document.querySelector("#add-new-task")

toggleModal.addEventListener('click',()=>{
   modal.classList.toggle('active')
})


modalBg.addEventListener('click',()=>{
  modal.classList.remove('active')
})

addTaskButton.addEventListener('click',()=>{
  const taskTitle = document.querySelector('#task-title-input').value
  const taskDesc = document.querySelector('#task-desc-input').value

 const div = document.createElement('div')

 div.classList.add('task')
 div.setAttribute("draggable","true")

 div.innerHTML = `
  <h2>${taskTitle}</h2>
  <p>${taskDesc}</p>
  <button>Delete</button>
 `
 todoEl.appendChild(div);

 

 column.forEach(col =>{
    const tasks = col.querySelectorAll('.task')
    const count = col.querySelector(".right")

    tasksData[col.id]  = Array.from(tasks).map(t => {
      return {
        title: t.querySelector('h2').innerText,
        desc: t.querySelector('p').innerText
      }
    })
   
    localStorage.setItem("tasks",JSON.stringify(tasksData))
    count.innerText = tasks.length; 
   })

 
 div.addEventListener("drag",()=>{
  draggedEl = div;
 })
 modal.classList.remove('active')
})