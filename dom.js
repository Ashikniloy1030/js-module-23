// console.log(hello js);

document.getElementById('btn-make-yellow');

//  option 3: get Element by Id an  set onclick, এটা আলাদা ফাইলে করা হয়েছে js file e
const btnMakeGold = document.getElementById('btn-make-gold');
btnMakeGold.onclick = function makeGold (){
  document.body.style.backgroundColor = 'gold'
}

// option 4: document.getElementById().addEventListener('even type', handler) 
/* <button id="btn-make-purple">Make Purple</button> */
// এই পদ্ধতি সবথেকে বেশি ব্যবহার করা হবে।

document.getElementById('btn-make-purple').addEventListener('click', function(){
  document.body.style.backgroundColor = 'purple'
})

document.getElementById('btn-make-cyan')
.addEventListener('click', function makeCyan(){
  document.body.style.backgroundColor = 'cyan'
})    //function er name dile o hoy na dile o hoy. Function readable rakhar jonno just inter mere ak dhap niche namiye dewa hoyeche.