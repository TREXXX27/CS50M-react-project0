const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

let itemcount = 0
let uncheckeditem = 0
let itemnumber =0
const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')

function newTodo()
{
  const promptbox = prompt("What do you wish to add?","TASK " + (itemnumber +1))
  
  if(promptbox.length!=0)
  {
    itemcount++
    uncheckeditem++
    itemnumber++
    updateCounterFunction()
  
   const todoList = document.createElement("li")
   todoList.className = classNames.TODO_ITEM
   todoList.id = itemnumber
   list.appendChild(todoList)


   const todoCheck = document.createElement("input")
   todoCheck.className = classNames.TODO_CHECKBOX
   todoCheck.type = "checkbox"
   todoCheck.id = itemnumber + "thecheck"    
   todoCheck.setAttribute("onClick","checkTodo(this.id)")
   todoList.appendChild(todoCheck)

   const todoText = document.createTextNode(promptbox)
   todoList.appendChild(todoText)
  
   const todoDelete = document.createElement("button")
   todoDelete.className = "todo-delete btn"
   todoDelete.innerText = "Delete"
   todoDelete.id = "deletethis"
   todoDelete.value = itemnumber
   todoDelete.setAttribute("onClick","deleteTodo(this.value)")
   todoList.appendChild(todoDelete)
      
  }
  else
  {
    alert("No Input Found")
  }
}


function checkTodo(id)
{
  const checkBox = document.getElementById(id)

  if(checkBox.clicked == true || checkBox.checked == true)
  {uncheckeditem--
   updateCounterFunction()
  }
  if(checkBox.clicked == true || checkBox.checked == false)
  {
    uncheckeditem++
    updateCounterFunction()
  }
}

function updateCounterFunction()
{
  itemCountSpan.innerHTML = itemcount
  uncheckedCountSpan.innerHTML = uncheckeditem
}



function deleteTodo(value)
{
  const itemcheck =document.getElementById(value + "thecheck").checked
  const deletebutton = document.getElementById(value)
  deletebutton.parentNode.removeChild(deletebutton)
 if(itemcheck== false)
 {
   uncheckeditem--
   updateCounterFunction()
 }
 itemcount--
 updateCounterFunction()


}
  
  
  
  
  
  
  
  
  
  
  
  
  


 

