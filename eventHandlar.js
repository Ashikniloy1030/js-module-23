// console.log('added event handler');
// প্রথমে গেট ইলিমেন্ট দিয়ে বাটন খুজে পরে ফাংশন এর মধ্যে যে ট্যাগের টেক্সট চেঞ্জ করা হবে সেই ট্যাগকে গেট ইলিমেন্ট দিয়ে খুজে সেই ভ্যারিয়েবল এর নামে ইনার টেক্সট চেঞ্জ করা হয়েছে।

// Event handler/ button e click korle uporer headline er text change kora 
//practice-1
const eventHandlerclick = document.getElementById('btn-click-for-change').addEventListener('click', function(){
  // console.log(eventHandlerclick);
  const pageTitle = document.getElementById('page-heading')
  // console.log(pageTitle);
  pageTitle.innerText = 'click korar por change hoye gelo'
})

// practice-2
const changePractice2 = document.getElementById('click-for-change-2').addEventListener('click', function changeButton(){
// console.log('click korle ei text show korbe');
const pTage = document.getElementById('pragraph-text');
pTage.innerText = 'Hello Niloy'
})










