const cardForm = document.getElementById('cardForm');
const nameArr = ['Ворон', 'Булл', 'Тара', 'Поко', 'Брок', 'Мортис', 'Фрэнк', 'Джесси'];
const nameNode = document.createElement('h2');
cardForm.addEventListener('submit',(e) => {
  e.preventDefault();
  if(nameNode.innerText){
    return
  }
  nameNode.innerText = nameArr[Math.round(Math.random()*nameArr.length)];
  document.getElementById('name_container').appendChild(nameNode);
})