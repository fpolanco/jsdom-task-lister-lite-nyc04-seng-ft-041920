document.addEventListener("DOMContentLoaded", () => {
  // const time = document.createElement("input")
  // time.id = "taskTime"
  // time.type = "text"
  // time.name = "taskTime"
  const form = document.querySelector("#create-task-form")
  form.innerHTML = form.innerHTML + `<input type="text" id="taskTime" name="taskTime" placeholder="time">`
  
  form.addEventListener("submit", function(event){
    event.preventDefault()
    console.log("Form Submitted")
    //  grab the value that was typed in
    const Task = event.target["new-task-description"].value
    const TaskTime = event.target["taskTime"].value
    console.log(Task)
    renderSubmittedTasks(Task, TaskTime)
    const allListItems = document.querySelectorAll("li")
      console.log(allListItems)
      allListItems.forEach(function (oneLi){
        oneLi.addEventListener("click", function(event){
          oneLi.remove()
        })
      })
  }) 
});
function renderSubmittedTasks(newTaskDesc, newTaskTime){
  // get the element with id 'tasks'
  const submittedTasks = document.querySelector("#tasks")
  // create an li element
  const listItem = document.createElement("li")
  listItem.classList.add("task")
  // set innerHTML to be the value that was typed in
  listItem.innerHTML = `${newTaskDesc}
   ${newTaskTime}
    <button data-description=${newTaskDesc}>X</button>`
  // append the li element to the ul element
  submittedTasks.append(listItem)
}