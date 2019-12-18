/*


//console.log(window);
// alert and window.alert mean the same thing as window is the top level, so we dont need to do window.abc for anything thats in the window

// selectors --

// ######single element

//document is what you use to select things from the document

//console.log(document.getElementById('my-form')); //id of the form
const form = document.getElementById('my-form');
console.log(form);

console.log(document.querySelector('.container')); //useful for selecting many things like classes etc
console.log(document.querySelector('h1'));// its a single element selector so it only selects the first one it finds 

// ######multiple element
// to be able to select multiple elements

console.log(document.querySelectorAll('.item')); // returns a NodeList which is very similar to an array and you can run array methods on it 
// selector all can select anything. 

//select by class name narrows the search down
console.log(document.getElementsByClassName('item')); // only classes
// it returns an html collection, not a nodelist. CANT use array methods here. will have to convert it to an array to be able to run array methods on it. 

//query selector is preffered to be used as it returns a nodelist which can be handled like an array 
 
for (let item of document.querySelectorAll('.item')){
    console.log(item);
 }

 console.log('++++++++++++')

 const items = document.querySelectorAll('.item');

 items.forEach((item) => console.log(item));

 */

/*
  

 const ul = document.querySelector('.items');

 //ul.remove(); // removed the items wali list

 //ul.lastElementChild.remove(); // last item in the list disappeared
 ul.firstElementChild.textContent = 'Hello'; // changed the name of the first list element 

 ul.children[1].innerText = 'bruh';

 ul.lastElementChild.innerHTML = '<h1> barea </h1>'

 const btn = document.querySelector('.btn');
 //btn.style.background = 'red';

 btn.addEventListener('click', (e) => {
    e.preventDefault();
     console.log('click');
     console.log(e);
     console.log(e.target.id);

     document.querySelector('#my-form').style.background = '#ccc';
     // with the even listener we added an arrow function that does stuff we tell it when the event happens

     document.querySelector('body').classList.add('bg-dark');
     ul.lastElementChild.innerHTML = '<h1>Hello</h1>';
 
 
    });


    btn.addEventListener('mouseout', (e) => {
        e.preventDefault();
         console.log('click');
         console.log(e);
         console.log(e.target.id);
    
         document.querySelector('#my-form').style.background = '#ccc';
         // with the even listener we added an arrow function that does stuff we tell it when the event happens
    
         document.querySelector('body').classList.add('bg-dark');
         ul.lastElementChild.innerHTML = '<h1>Hello</h1>';
     
     
        });

btn.addEventListener('mouseover', (e) => { // MDN pe look up different events and stuff
    e.preventDefault();
     console.log('click');
     console.log(e);
     console.log(e.target.id);

     document.querySelector('#my-form').style.background = '#bbc';
     // with the even listener we added an arrow function that does stuff we tell it when the event happens

     document.querySelector('body').classList.add('bg-rnd');
     ul.lastElementChild.innerHTML = '<h1>Hello</h1>';
 
 
    });
    // make an event listener where the color changes only when the cursor is on the button 
*/

const myForm = document.querySelector('#my-form');

const nameInput = document.querySelector('#name');

const emailInput = document.querySelector('#email');

const msg = document.querySelector('.msg');

const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();

    if(nameInput.value === '' || emailInput === ''){ // say the form was not filled and a submission attempt was made  
        msg.classList.add('error');
        msg.innerHTML = 'Please enter all fields';

        setTimeout( () => msg.remove(), 300); // removes the error wala display ^^ after 3 secs
    } else{
        const li = document.createElement('li'); //create list element wala tag
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`)); //appending to it
    
    userList.appendChild(li); 

    //clear fields
    nameInput.value = '';
    emailInput.value = '';
    console.log(nameInput.value);
}}

/*  TRAVERSY's FUNCTION for REFERENCE

function onSubmit(e) {
    e.preventDefault();
    
    if(nameInput.value === '' || emailInput.value === '') {
      // alert('Please enter all fields');
      msg.classList.add('error');
      msg.innerHTML = 'Please enter all fields';
  
      // Remove error after 3 seconds
      setTimeout(() => msg.remove(), 3000);
    } else {
      // Create new list item with user
      const li = document.createElement('li');
  
      // Add text node with input values
      li.appendChild(document.createTextNode(`${nameInput.value}: ${emailInput.value}`));
  
      // Add HTML
      // li.innerHTML = `<strong>${nameInput.value}</strong>e: ${emailInput.value}`;
  
      // Append to ul
      userList.appendChild(li);
  
      // Clear fields
      nameInput.value = '';
      emailInput.value = '';
    }
  }*/