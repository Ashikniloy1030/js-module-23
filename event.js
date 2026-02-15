// console.log('hello kullu')
document.getElementById('btn-submit')
.addEventListener('click', function(){
  const input = document.getElementById('input-filed');
  // console.log('input');
  const name = input.value;
  const nameP = document.getElementById('name');
  nameP.innerText = name;
})

