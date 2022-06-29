/* BUGS NAO TERMINADOS
Quando o usuário der f5 ele irá perder as tasks completas
*/

const inputTasks = document.getElementById('taskInput');
let userTasks = [];
const userTasksObj = JSON.parse(localStorage.getItem('userTasks'));

window.onload = () => {
  let taskKey = localStorage.getItem('userTasks');
  userTasks = taskKey ? JSON.parse(taskKey) : [];

  showList(userTasksObj); 
}

document.getElementById('btnTask').addEventListener('click', (event) => {
  event.preventDefault();

  let taskKey = localStorage.getItem('userTasks');
  userTasks = taskKey ? JSON.parse(taskKey) : [];

  userTasks.push(inputTasks.value)
  localStorage.setItem('userTasks', JSON.stringify(userTasks));

  showList(userTasksObj); 
  location.reload();
})

function showList(taskArray) { 
  const listArea = document.getElementById('listArea');
  let ul = document.querySelector('ul');
  if (ul) {
    ul.remove();
  }
  ul = document.createElement('ul');
  listArea.appendChild(ul);

  taskArray.forEach((task,index) => {
    const div = document.createElement('div');
    const li = document.createElement('li');
    const checkBox = document.createElement('input');
    const span = document.createElement('i');
    span.setAttribute('class', 'fa-solid fa-trash');
    span.setAttribute('style', 'margin-left: 5rem; cursor: pointer');
    span.setAttribute('onclick', `removeTask(${index})`);
    checkBox.setAttribute('type', 'checkbox');
    div.classList.add('li-container');

    li.innerHTML = `${task}`;
    li.setAttribute('id', index);
    div.appendChild(checkBox);
    div.appendChild(li);
    div.appendChild(span)
    ul.appendChild(div);

    checkBox.addEventListener('click', (event) => {
      div.children[1].classList.add('task-complete');
      div.children[2].classList.add('task-complete');
    })
  });
}

function removeTask(index) {
  userTasksObj.splice(index, 1);
  localStorage.setItem('userTasks', JSON.stringify(userTasksObj));
  showList(userTasksObj);
}





