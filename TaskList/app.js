// define ui vars

const form = document.querySelector("#task-form")
const taskInput = document.querySelector("#task")
const filter = document.querySelector("#filter")
const taskList = document.querySelector(".collection")
const clearBtn = document.querySelector(".clear-tasks")

loadEventListeners()

function loadEventListeners() {
  // add task eventj
  form.addEventListener("submit", addTask)
}
function addTask(e) {
  if (taskInput.value === "") {
    alert("Add a task")
  }
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

  li.appendChild(link)

  taskList.appendChild(li)

  console.log(li)
  // clear input
  taskInput.value = ""
  e.preventDefault()
}
taskInput.style.color = "red"
