<<<<<<< HEAD
const inputTasks = document.getElementById('taskInput');

document.getElementById('btnTask').addEventListener('click', (event) => {
  event.preventDefault();

  const div = document.createElement('liDiv');
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  const checkBox = document.createElement('input');
  checkBox.setAttribute('type', 'checkbox');
  div.classList.add('li-container');

  li.innerHTML = `${inputTasks.value}`;
  div.appendChild(checkBox);
  div.appendChild(li);
  ul.appendChild(div);

  inputTasks.value = '';
=======
const inputTasks = document.getElementById('taskInput');

document.getElementById('btnTask').addEventListener('click', (event) => {
  event.preventDefault();

  const div = document.createElement('liDiv');
  const ul = document.querySelector('ul');
  const li = document.createElement('li');
  const checkBox = document.createElement('input');
  checkBox.setAttribute('type', 'checkbox');
  div.classList.add('li-container');

  li.innerHTML = `${inputTasks.value}`;
  div.appendChild(checkBox);
  div.appendChild(li);
  ul.appendChild(div);

  inputTasks.value = '';
>>>>>>> 88b09d17b3601e63679abc572e0efbf3037f3ea7
})