//userInput is targeting the input bar
let userInput = document.getElementById('userInput');
let listID = document.getElementById('list');
const exportToExcel = document.getElementById('export');

function addListItem() {

    //initalize the HTML element UL, I initially used .addElementByTagName but it it not work.
    //Using querySelector works!
    let ul = document.querySelector('ul');
    //creating a li element
    let li = document.createElement('li');
    li.className = "border border-secondary rounded mt-1 p-1";
    li.appendChild(document.createTextNode(userInput.value));

    //append to the UI
    ul.appendChild(li);

    //delete
    let del = document.createElement('i');
    del.className = 'fas fa-trash float-right mt-1';
    li.appendChild(del);
    del.addEventListener('click', delEvent);

    function delEvent() {
        li.classList.add('delete');
    }

    //down
    let down = document.createElement('i');
    down.className = 'fas fa-arrow-down float-right mr-2 mt-1';
    li.appendChild(down);
    down.addEventListener('click',downEvent);

    function downEvent() {

        next = li.nextSibling;
        li.parentNode.insertBefore(next, li);

    }

     //up 
     let up = document.createElement('i');
     up.className = 'fas fa-arrow-up float-right mr-2 mt-1';
     li.appendChild(up);
     up.addEventListener('click', upEvent);
    
    function upEvent() {
        
      previous = li.previousSibling;
      li.parentNode.insertBefore(li, previous);
        
     }

    //check
    let check = document.createElement('i');
    check.className = 'far fa-check-circle float-right mr-2 mt-1';
    li.appendChild(check);
    check.addEventListener('click', checkEvent);

    function checkEvent() {

        //removing important element adjustments if any
        li.classList.remove('border-danger');
        important.classList.remove('danger');

        //this portion adds the green border color and green color to the check mark.
        li.classList.toggle('border-success');
        check.classList.toggle('success');
      
    }

    //important
    //makes the li border red and makes the icon also red.
    let important = document.createElement('i');
    important.className = 'fas fa-exclamation float-right mr-2 mt-1';
    li.appendChild(important);
    important.addEventListener('click', importantEvent);

    function importantEvent() {

        //removing success element adjustments if any
        li.classList.remove('border-success');
        check.classList.remove('success');


        li.classList.toggle('border-danger');
        important.classList.toggle('danger');
    }

    

    userInput.value = '';
}

//when this funciton is called, call the function that adds elements.
function enterKeypress(e) {
    if(userInput.value.length > 0 && e.which === 13) {
        addListItem();
    } 
}

function exportExcel() {
    console.log('help');
}


//when the input bar is selected and a keypress is 'heard' run the function enterKeypress
userInput.addEventListener('keypress', enterKeypress);
