//Define UI variables
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//Load all event Listeners
loadEventListeners();

//Load all event Listeners
function loadEventListeners()
{
  //Add Task event
  form.addEventListener('submit',addTask);
}

//Add Task Function
function addTask(e)
{ 
    if(taskInput.value === '')
    {
      alert('Add A Task');
    }
  //Create li element when add task is pressed
  const li = document.createElement('li');
  
  //Add a class to li
  li.className = 'collection-item';
  
  //Create a text node and to li
  li.appendChild(document.createTextNode(taskInput.value));
  
  //Create new link element
  const link = document.createElement('a');

  //Add class to li
  link.className = 'delete-item secondary-content';
  
  //Add icon Element
  link.innerHTML = '<i class="fa fa-remove"></i>';

  //Append the link to li
  li.appendChild(link);

  //Append li to ul
  taskList.appendChild(li);

  //Clear Input
  taskInput.value = '';

  e.preventDefault();
}