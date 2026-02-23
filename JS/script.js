let interviewList = [];
let rejectedList = [];

let total = document.getElementById('total');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');


const allCards = document.getElementById('all-cards')

function calculateCount() {
    total.innerText = allCards.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}
calculateCount();


function toggleStyle(id) {
    console.log(id);

    allFilterBtn.classList.add('bg-white', 'text-[#64748B]');       
    interviewFilterBtn.classList.add('bg-white', 'text-[#64748B]');       
    rejectedFilterBtn.classList.add('bg-white', 'text-[#64748B]');    

    allFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white');       
    interviewFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white');       
    rejectedFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white'); 
    
    const selected = document.getElementById(id);

    selected.classList.remove('bg-white', 'text-[#64748B]');
    selected.classList.add('bg-[#3B82F6]', 'text-white');
    
    
}