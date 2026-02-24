let interviewList = [];
let rejectedList = [];
let currentStatus = 'all';

let total = document.getElementById('total');
let interviewCount = document.getElementById('interviewCount');
let rejectedCount = document.getElementById('rejectedCount');

const allFilterBtn = document.getElementById('all-filter-btn');
const interviewFilterBtn = document.getElementById('interview-filter-btn');
const rejectedFilterBtn = document.getElementById('rejected-filter-btn');


const allCards = document.getElementById('all-cards');
const mainContainer = document.querySelector('main');
const filterSection = document.getElementById('filter-section');

function calculateCount() {
    total.innerText = allCards.children.length;
    interviewCount.innerText = interviewList.length;
    rejectedCount.innerText = rejectedList.length;
}
calculateCount();


function toggleStyle(id) {
    

    allFilterBtn.classList.add('bg-white', 'text-[#64748B]');       
    interviewFilterBtn.classList.add('bg-white', 'text-[#64748B]');       
    rejectedFilterBtn.classList.add('bg-white', 'text-[#64748B]');    

    allFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white');       
    interviewFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white');       
    rejectedFilterBtn.classList.remove('bg-[#3B82F6]', 'text-white'); 
    
    const selected = document.getElementById(id);
    currentStatus = id;

    selected.classList.remove('bg-white', 'text-[#64748B]');
    selected.classList.add('bg-[#3B82F6]', 'text-white');

    if(id == 'interview-filter-btn'){
        allCards.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderInterview();
    }
    else if(id == 'all-filter-btn'){
        allCards.classList.remove('hidden');
        filterSection.classList.add('hidden');
    }
    else if(id == 'rejected-filter-btn'){
        allCards.classList.add('hidden');
        filterSection.classList.remove('hidden');
        renderRejected();
    }
    
    
}


mainContainer.addEventListener('click', function(event) {
        

    if(event.target.classList.contains('btn-interview')){
    const parentNode = event.target.parentNode.parentNode;
    const companyName = parentNode.querySelector('.companyName').innerText;
    const postName = parentNode.querySelector('.postName').innerText;
    const jobDescription = parentNode.querySelector('.jobDescription').innerText;
    const status = parentNode.querySelector('.status').innerText;
    const notes = parentNode.querySelector('.notes').innerText;

    const statusBtn = parentNode.querySelector('.status');
    statusBtn.innerText = 'Interview';
    statusBtn.classList.remove('bg-[#EEF4FF]', 'text-[#002C5C]', 'shadow-sm','border-[#EF4444]','text-[#EF4444]');
    statusBtn.classList.add('text-[#10B981]','font-semibold','border','border-[#10B981]','rounded-sm');

    const cardInfo = {
        companyName,
        postName,
        jobDescription,
        status: 'Interview',
        notes
    }

    const jobExist = interviewList.find(item=> item.companyName == cardInfo.companyName);

    if(!jobExist){
        interviewList.push(cardInfo);
    }

    rejectedList = rejectedList.filter(item=> item.companyName != cardInfo.companyName);

    if (currentStatus == 'rejected-filter-btn') {
            renderRejected();
        }

    calculateCount();
    
    } else if(event.target.classList.contains('btn-rejected')){
    const parentNode = event.target.parentNode.parentNode;
    const companyName = parentNode.querySelector('.companyName').innerText;
    const postName = parentNode.querySelector('.postName').innerText;
    const jobDescription = parentNode.querySelector('.jobDescription').innerText;
    const status = parentNode.querySelector('.status').innerText;
    const notes = parentNode.querySelector('.notes').innerText;

    
    const statusBtn = parentNode.querySelector('.status');
    statusBtn.innerText = 'Rejected';
    statusBtn.classList.remove('bg-[#EEF4FF]', 'text-[#002C5C]', 'shadow-sm','text-[#10B981]','border-[#10B981]');
    statusBtn.classList.add('text-[#EF4444]','font-semibold','border','border-[#EF4444]','rounded-sm');

    
    const cardInfo = {
        companyName,
        postName,
        jobDescription,
        status: 'Rejected',
        notes
    }

    const jobExist = rejectedList.find(item=> item.companyName == cardInfo.companyName);

    if(!jobExist){
        rejectedList.push(cardInfo);
    }

    interviewList = interviewList.filter(item=> item.companyName != cardInfo.companyName);

    if (currentStatus == 'interview-filter-btn') {
            renderInterview();
        }

    calculateCount();
    
    } else if(event.target.closest('.btn-delete')){
    
    const deleteBtn = event.target.closest('.btn-delete');
    const parentNode = deleteBtn.closest('.card');
    const companyName = parentNode.querySelector('.companyName').innerText;

    parentNode.remove();

    interviewList = interviewList.filter(item => item.companyName !== companyName);
    rejectedList = rejectedList.filter(item => item.companyName !== companyName);

    if(currentStatus == 'interview-filter-btn'){
        renderInterview();
    }
    else if(currentStatus == 'rejected-filter-btn'){
        renderRejected();
    }

    calculateCount();
}

})



function renderInterview() {
    filterSection.innerHTML = '';

    if (interviewList.length === 0) {
        filterSection.innerHTML = `
        <div class="text-center  p-6 bg-white shadow-md rounded-sm py-20">
                    <img src="./images/jobs.png" alt="" class="mx-auto">
                    <p class="font-semibold text-2xl text-[#002C5C] mt-5">No jobs available</p>
                    <p class="text-[#64748B]">Check back soon for new job opportunities</p>
                </div>
    `;
    }

    for(let interview of interviewList){
        
        let div = document.createElement('div');
        div.className = 'card flex justify-between p-6 bg-white shadow-md rounded-sm';
        div.innerHTML = `
         <div class="space-y-5">
                    <div>
                        <p class="companyName font-semibold text-[#002C5C]">${interview.companyName}</p>
                        <p class="postName text-[#64748B]">${interview.postName}</p>
                    </div>
                    <div>
                        <p class="jobDescription text-[#64748B]">${interview.jobDescription}</p>
                    </div>
                    <div>
                        <button class="status text-[#10B981] font-semibold px-4 py-2 border border-[#10B981] rounded-sm mb-2">${interview.status}</button>
                        <p class="notes text-[#323B49]">${interview.notes}</p>
                    </div>
                    <div class="flex gap-2">
                        <button class="btn-interview text-[#10B981] font-semibold px-4 py-2 border border-[#10B981] rounded-sm">interview</button>
                        <button class="btn-rejected text-[#EF4444] font-semibold px-4 py-2 border border-[#EF4444] rounded-sm">Rejected</button>
                    </div>
                </div>
                <!-- card part 2 -->
                <div>
                    <button class="btn-delete px-4 py-2">
                        <img src="./images/Group 1.png" alt="">
                    </button>
                </div>
        `
        filterSection.appendChild(div);
    }
}

function renderRejected() {
    filterSection.innerHTML = '';

     if (rejectedList.length === 0) {
        filterSection.innerHTML = `
        <div class="text-center  p-6 bg-white shadow-md rounded-sm py-20">
                    <img src="./images/jobs.png" alt="" class="mx-auto">
                    <p class="font-semibold text-2xl text-[#002C5C] mt-5">No jobs available</p>
                    <p class="text-[#64748B]">Check back soon for new job opportunities</p>
                </div>
    `;
    }

    for(let rejected of rejectedList){
        
        let div = document.createElement('div');
        div.className = 'card flex justify-between p-6 bg-white shadow-md rounded-sm';
        div.innerHTML = `
         <div class="space-y-5">
                    <div>
                        <p class="companyName font-semibold text-[#002C5C]">${rejected.companyName}</p>
                        <p class="postName text-[#64748B]">${rejected.postName}</p>
                    </div>
                    <div>
                        <p class="jobDescription text-[#64748B]">${rejected.jobDescription}</p>
                    </div>
                    <div>
                        <button class="status text-[#EF4444] font-semibold px-4 py-2 border border-[#EF4444] rounded-sm mb-2">${rejected.status}</button>
                        <p class="notes text-[#323B49]">${rejected.notes}</p>
                    </div>
                    <div class="flex gap-2">
                        <button class="btn-interview text-[#10B981] font-semibold px-4 py-2 border border-[#10B981] rounded-sm">interview</button>
                        <button class="btn-rejected text-[#EF4444] font-semibold px-4 py-2 border border-[#EF4444] rounded-sm">Rejected</button>
                    </div>
                </div>
                <!-- card part 2 -->
                <div>
                    <button class="btn-delete px-4 py-2">
                        <img src="./images/Group 1.png" alt="">
                    </button>
                </div>
        `
        filterSection.appendChild(div);
    }
}