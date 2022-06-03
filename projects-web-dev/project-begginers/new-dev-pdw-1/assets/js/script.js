const btn = document.getElementById('btn-submit');

btn.addEventListener('click',(event) => {
  event.preventDefault();
  const nameV = document.getElementById('name').value;
  const surnameV = document.getElementById('surname').value;
  const addressV = document.getElementById('address').value;
  const auxAdressV = document.getElementById('aux-adress').value;
  const cellV = document.getElementById('cell').value;
  const emailV = document.getElementById('email').value;

  const storage = localStorage;  

  storage.setItem(JSON.stringify(nameV));
})