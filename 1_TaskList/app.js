// define ui vars
const form = document.querySelector("#task-form")
const taskInput = document.querySelector("#task")
const filter = document.querySelector("#filter")
const taskList = document.querySelector(".collection")
const clearBtn = document.querySelector(".clear-tasks")

loadEventListeners()
function loadEventListeners() {
  // dom load event
  document.addEventListener("DOMContentLoaded", getTasks)
  // add task event
  form.addEventListener("submit", addTask)
  // remove task event
  taskList.addEventListener("click", removeTask)
  // clear task
  clearBtn.addEventListener("click", clearTasks)
  // filter task events
  filter.addEventListener("keyup", filterTask)
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
  // store in localStorage
  storeInLocalStorage(taskInput.value)
  // clear input
  taskInput.value = ""
  e.preventDefault()
}
// store to local storage
function storeInLocalStorage(task) {
  let tasks
  if (localStorage.getItem("tasks") === null) {
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"))
  }
  tasks.push(task)
  localStorage.setItem("tasks", JSON.stringify(tasks))
}

// get tasks from local storage
function getTasks(e) {
  let tasks
  if (localStorage.getItem("tasks") === null) {
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"))
  }
  tasks.forEach(function (task) {
    const li = document.createElement("li")
    li.className = "collection-item"
    // create text node
    li.appendChild(document.createTextNode(task))
    // create new link del btn
    const link = document.createElement("a")
    link.className = "delete-item secondary-content"
    // add icon html
    link.innerHTML = '<i class="fas fa-minus-circle"></i>'
    //append icon
    li.appendChild(link)
    // append the created li to ul
    taskList.appendChild(li)
  })
}

function removeTask(e) {
  if (e.target.parentElement.classList.contains("delete-item")) {
    if (confirm("Are you sure")) {
      e.target.parentElement.parentElement.remove()
      // remove from local storage
      removeFromLocalStorage(e.target.parentElement.parentElement)
    }
  }
}

function removeFromLocalStorage(taskItem) {
  console.log(taskItem)
  let tasks
  if (localStorage.getItem("tasks") === null) {
    tasks = []
  } else {
    tasks = JSON.parse(localStorage.getItem("tasks"))
  }
  tasks.forEach(function (task, index) {
    if (taskItem.textContent === task) {
      tasks.splice(index, 1)
    }
  })
  localStorage.setItem("tasks", JSON.stringify(tasks))
}

function clearTasks() {
  // taskList.innerHTML = ''
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild)
  }
  // clear from localstorage
  clearFromLocalStorage()
}

function clearFromLocalStorage() {
  localStorage.clear()
}

function filterTask(e) {
  const text = e.target.value.toLowerCase()
  document.querySelectorAll(".collection-item").forEach(function (task) {
    const item = task.firstChild.textContent
    if (item.toLocaleLowerCase().indexOf(text) != -1) {
      task.style.display = "block"
    } else {
      task.style.display = "none"
    }
  })
}
