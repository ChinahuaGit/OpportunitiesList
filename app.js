//selectors
const opportunityNameInput = document.querySelector('.opportunity-name-input');
const opportunityNameButton = document.querySelector('.opportunity-name-button');
const opportunityList = document.querySelector('.opportunity-list');
const filterOption = document.querySelector('.filter-opportunity');
//events
opportunityNameButton.addEventListener('click',addOpportunity);
opportunityList.addEventListener('click',deleteCheckOpportunity);
filterOption.addEventListener('change',filterOpportunity);
//functions
function addOpportunity(event){
    //prevent form from submitting
    event.preventDefault();
    // opportunity DIV
    const opportunityDiv = document.createElement('div');
    opportunityDiv.classList.add('opportunity');
    //create list item
    const newOpportunity = document.createElement('li');
    newOpportunity.innerText = opportunityNameInput.value;
    newOpportunity.classList.add('opportunity-item');
    opportunityDiv.appendChild(newOpportunity);
// completed button
const completedButton = document.createElement('button');
completedButton.innerHTML = '<i class="fas fa-check"></i>';
completedButton.classList.add('completed-button');
opportunityDiv.appendChild(completedButton);
//delete button
const deletedButton = document.createElement('button');
deletedButton.innerHTML = '<i class="fas fa-trash"></i>';
deletedButton.classList.add('deleted-button');
opportunityDiv.appendChild(deletedButton);
//append to list
opportunityList.appendChild(opportunityDiv);
//clear input value
opportunityNameInput.value = '';
}

function deleteCheckOpportunity(event){
    const item = event.target;
    //delete opportunity
    if(item.classList[0]==='deleted-button'){
        const opportunity = item.parentElement;
        //transition
        opportunity.classList.add('fall')
            //wait for transition to complete
        opportunity.addEventListener('transitioned', function(){
            opportunity.remove();
        })
    }
    //check mark
    if(item.classList[0]==='completed-button'){
        const opportunity = item.parentElement;
        opportunity.classList.toggle('completed')
    }
}

function filterOpportunity(event) {
    const opportunities =  opportunityList.childNodes;
    opportunities.forEach(function(opportunity){
        switch(event.target.value){
            case "all":
                opportunity.style.display = 'flex';
            case 'completed':
                if(opportunity.classList.contains('completed')){
                    opportunity.style.display = 'flex';
                }else{
                    opportunity.style.display = 'none'
                }
            case 'uncompleted':
                if(opportunity.classList.contains('uncompleted')){
                    opportunity.stype.display = 'flex';
                }else{
                    opportunity.style.display = 'none'
                }
        }
    })
}













