// define ui vars

const form = document.querySelector("#task-form")
const taskInput = document.querySelector("#task")
const filter = document.querySelector("#filter")
const taskList = document.querySelector(".collection")
const clearBtn = document.querySelector(".clear-tasks")

loadEventListeners()

function loadEventListeners() {
  // add task event
  form.addEventListener("submit", addTask)
  // remove task event
  taskList.addEventListener("click", removeTask)
}
function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a task")
  }
  // whenever new task is added we create a
  // <li>
  //    text
  //    icon
  // </li>

  // crreate li element
  const li = document.createElement("li")
  li.className = "collection-item"
  // create text node
  li.appendChild(document.createTextNode(taskInput.value))
  // create new link del btn
  const link = document.createElement("a")
  link.className = "delete-item secondary-content"
  // add icon html
  link.innerHTML = '<i class="fas fa-minus-circle"></i>'
  //append icon
  li.appendChild(link)
  // append the created li to ul
  taskList.appendChild(li)
  // clear input
  taskInput.value = ""
  e.preventDefault()
}
function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure")) e.target.parentElement.parentElement.remove()
  }
}
