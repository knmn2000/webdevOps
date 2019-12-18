/* MERA WALA CODE
console.dir(document); //props and methods attached to the document object
console.dir(document.domain); // can use the . to access individual components
console.dir(document.URL);
console.dir(document.title);
//document.title = 123; //changed the title of the page
console.log(document.doctype);
console.dir(document.head);
console.dir(document.body);
console.dir(document.all);
console.log(document.all[10]);

//document.all[10].textContent = 'Hello'; // changed stuff on the page 
// but this is now how we should change things
// should add <span> in the DOM and use that to add things

console.log(document.forms);
console.log(document.links); // returns an html collection
console.log(document.forms[0]);

console.log(document.images);


// SELECTING ELEMENTS BY ID
console.log(document.getElementById('header-title'));
var headerTitle = document.getElementById('header-title');
console.log(headerTitle);

//headerTitle.textContent = 'Hello';
//headerTitle.innerText = 'goodbye'; // theres a difference between these two
// one of these pays attention to the styling.

//inner text pays attention to styling
// ?? ^ use??

headerTitle.innerHTML = '<h3> hello </h3>' // this h3 is put inside of the h1 tag that the title was previously inside of. this is what inner html does

headerTitle.style.borderBottom = 'solid 3px #ccc'; // even thought the actual css property is border-bottom, we cannot use this for some reason and hence we need to camel case it 
// as shown             ^^
var header = document.getElementById('main-header');
header.style.borderBottom = 'solid 3px #000'


// GET ELEMENTS BY CLASS NAME 


/*########################################
var items = document.getElementsByClassName('list-group-item');
console.log(items); // html collection returned


items[1].textContent = 'changed text';
items[1].style.fontWeight = 'bold';
//items[1].style.backgroundColor = 'blue';

//items.style.backgrounColor = '#f4f4f4'; //doesnt work

for (var i = 0; i < items.length ; i ++){
    items[i].style.backgroundColor = '#f4f4f4';
}


########################################*/

// GET ELEMENTS BY TAG NAME
// say if i make another list element, then using selection by tag name would automatically apply any mods
// i applied to the li to the new element. 
// this wouldnt have had happened with class selection as i did not specify the class while making the new list element

/*
var li = document.getElementsByTagName('li');
console.log('li');
li[0].textContent = 'changed texeetttt';
li[0].style.fontWeight = 'bold';
li[0].style.backgroundColor = '#a2a2a2';




// QUERY SELECTOR

// works like jquery. 

var header = document.querySelector('#main-header');
header.style.borderBottom = 'solid 4px #ccc'

var input = document.querySelector('input');
input.value = 'helllllalooo';

var submit = document.querySelector('input[type = "submit"]');
submit.value = "SENDD";

var item = document.querySelector('.list-group-item');
item.style.color = 'red';


var Lastitem = document.querySelector('.list-group-item:last-child');
Lastitem.style.color = 'blue';

var secItem = document.querySelector('.list-group-item:nth-child(2)');
secItem.style.color = 'coral';

// QUERY SELECTOR ALL 
// grabs >1 thing

var titles = document.querySelectorAll('.title');
console.log(titles); //node list returned. can run array functions here
titles[1].textContent = 'Helkajlo';

var odd = document.querySelectorAll('li:nth-child(odd)'); // called a pseudoselector as its a selector from css(?)

for (var i = 0; i < odd.length; i++){
    odd[i].style.backgroundColor = '#f4f4f4'; //alternate list items are now gray   
} // works for (even) too 

 END OF MERA wALA CODE*/

//########TRAVERSY WALA CODE

// EXAMINE THE DOCUMENT OBJECT //

// console.dir(document);
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// //document.title =  123;
// console.log(document.doctype);
// console.log(document.head);
// console.log(document.body);
// console.log(document.all);
// console.log(document.all[10]);
// // document.all[10].textContent = 'Hello';
// console.log(document.forms[0]);
// console.log(document.links);
// console.log(document.images);

// GETELEMENTBYID //
// console.log(document.getElementById('header-title'));
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);
// headerTitle.textContent = 'Hello';
// headerTitle.innerText = 'Goodbye';
// console.log(headerTitle.innerText);
// headerTitle.innerHTML = '<h3>Hello</h3>';
// header.style.borderBottom = 'solid 3px #000';

// GETELEMENTSBYCLASSNAME //
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);
// console.log(items[1]);
// items[1].textContent = 'Hello 2';
// items[1].style.fontWeight = 'bold';
// items[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < items.length; i++){
//   items[i].style.backgroundColor = '#f4f4f4';
// }

// GETELEMENTSBYTAGNAME //
// var li = document.getElementsByTagName('li');
// console.log(li);
// console.log(li[1]);
// li[1].textContent = 'Hello 2';
// li[1].style.fontWeight = 'bold';
// li[1].style.backgroundColor = 'yellow';

// // Gives error
// //items.style.backgroundColor = '#f4f4f4';

// for(var i = 0; i < li.length; i++){
//   li[i].style.backgroundColor = '#f4f4f4';
// }

// QUERYSELECTOR //
// var header = document.querySelector('#main-header');
// header.style.borderBottom = 'solid 4px #ccc';

// var input = document.querySelector('input');
// input.value = 'Hello World'

// var submit = document.querySelector('input[type="submit"]');
// submit.value="SEND"

// var item = document.querySelector('.list-group-item');
// item.style.color = 'red';

// var lastItem = document.querySelector('.list-group-item:last-child');
// lastItem.style.color = 'blue';

// var secondItem = document.querySelector('.list-group-item:nth-child(2)');
// secondItem.style.color = 'coral';

// QUERYSELECTORALL //
// var titles = document.querySelectorAll('.title');

// console.log(titles);
// titles[0].textContent = 'Hello';

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even= document.querySelectorAll('li:nth-child(even)');

// for(var i = 0; i < odd.length; i++){
//   odd[i].style.backgroundColor = '#f4f4f4';
//   even[i].style.backgroundColor = '#ccc';
// }



// #####DOM CRASH COURSE PART 2######

// TRAVERSING THE DOM 

/* comment start 

var itemList = document.querySelector('#items');
 // to select the parent node of element with id "element" we do - 
 console.log(itemList.parentNode);
 itemList.parentNode.style.backgroundColor = '#f4f4f4'
 console.log(itemList.parentNode.parentNode);
 itemList.parentNode.parentNode.style.backgroundColor = '#ccc'
// parentNode and parentElement difference?????
// for the most part, they are interchangable

// childNodes 
console.log(itemList.childNodes); // has some funky props that makes it hard to work with. it includes white spaces in its search too.
// so use children nodes instead

console.log(itemList.children);

itemList.children[1].style.backgroundColor = '#ccc';
// first child
console.log(itemList.firstChild); // what was expected was item1, but we got the text node because it included the line break too. this is not desirable
// so use firstElementchild 

console.log(itemList.firstElementChild);

itemList.firstElementChild.textContent = 'Hello 1';

// last child would stil return the text node which is due to the line break

// use last element child 

console.log(itemList.lastElementChild);

itemList.lastElementChild.textContent = 'Hello 4';

//nextSibling 

console.log(itemList.nextSibling); // returns the text node but not the next item 

// nextElementSibling 
console.log(itemList.nextElementSibling);

//previousSibling 

console.log(itemList.previousSibling);
//previousElementSibling

console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color = 'green';

// ### CREATING ELEMENTS AND INSERTING THEM 

//createElement 
// creating a div

var newDiv = document.createElement('div');
// ADD CLASS
newDiv.className = 'SOS';
// ADD ID
newDiv.id = 'SOS1';

// ADD ATTRIBUTE 
newDiv.setAttribute('title', 'CGPA NAHI AA RAHI');

// Create TEXT NODES 
var newDivText = document.createTextNode('HELLO WORLD');
// ADDING TEXT TO OUR CREATED ELEMENT - DIV

newDiv.appendChild(newDivText);

console.log(newDiv)
// this is currently not inside the DOM

// INSERTION 

var container = document.querySelector('header .container');
var h1 = document.querySelector('header h1');

container.insertBefore(newDiv, h1);// (WHAT WE ARE INSERTING, WHAT WE ARE INSERTING BEFORE)

newDiv.style.fontSize = '30px'; 

comment end */

// ### DOM PART 3 
// EVENTS

/*
var button = document.getElementById('button').addEventListener('click', btnClick); //function(){console.log('1243');});

function btnClick(e){
  //  console.log('clicked');
    //document.getElementById('header-title').textContent = 'Changed';
    //document.querySelector('#main').getElementsByClassName.backgroundColor = '#f4f4f4'
    console.log(e);
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.classList); // returns of array of the things in the classes 
    //var output = document.getElementById('output');
    //output.innerHTML = '<h3>'+e.target.id+'</h3>';
        // ^^ DOESNT WORK ??? y?
    //console.log(e.type);
    console.log(e.clientX); // e.PROPS SEEN FROM THE MOUSE CLICK EVENTS 
    console.log(e.clientY); // distance from the window

    console.log(e.offsetX); // distance from the actual element itself
    console.log(e.offsetY);

    console.log(e.altKey); // to check if we are holding the alt key etc. ctrlKey, shiftKey and others are available

    


}
*/




/* 



var button = document.getElementById('button');//.addEventListener('click', runEvent);
var box = document.getElementById('box');
//button.addEventListener('click', runEvent);
//button.addEventListener('dblclick', runEvent);; //doesnt work ? why??? // sol - close the console and then trigger events. 
//button.addEventListener('mousedown', runEvent);
//button.addEventListener('mouseup', runEvent); // DIFF BETWEEN MOUSEDOWN AND MOUSEUP??
// box.addEventListener('mouseenter', runEvent);
// box.addEventListener('mouseout', runEvent);

// box.addEventListener('mouseover', runEvent); // diff between this and mouseeneter is that, this one will fire off again for any other elements that reside inside of the box 
// box.addEventListener('mouseout', runEvent); // same for mouse leave and mouse out. mouse out also fires off when leaving the vicinity of any elements inside of the box
var form = document.querySelector('form');
var itemInput = document.querySelector('input[type = "text"]')
var select = document.querySelector('select');


// itemInput.addEventListener('keydown', runEvent);

// itemInput.addEventListener('keyup', runEvent);//when you release keys
// box.addEventListener('mousemove', runEvent);

// itemInput.addEventListener('focus', runEvent); // when you click on the element, here - the text enter field. its active, alive, focused
// itemInput.addEventListener('blue', runEvent); // when we go out of focus. leaving the field in active


// itemInput.addEventListener('cut', runEvent);
// itemInput.addEventListener('paste', runEvent);


// itemInput.addEventListener('input', runEvent); // you type cut paste or do anyting, it will register as an input.
// // input triggers even when we select values in the drop down menu

// select.addEventListener('change', runEvent);// any change in the form will trigger this.

form.addEventListener('submit', runEvent);

function runEvent(e){
    e.preventDefault();
    console.log('EVENT TYPE : ' + e.type); // to get the type of event
    // document.body.style.display = 'none'; // kills the page when the even fires
    console.log(e.target.value);

  //  document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>'; // THIS WONT WOKRKK!K!K!K!K
    //  output.innerHTML = '<h3>MouseX: '+e.offsetX+' </h3><h3>MouseY: '+e.offsetY+'</h3>'; // WHY DOES THIS NOT WORK:!?!?!?
//box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",90)";
//document.body.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",90)";
}

*/

/*

// DOM CRASHCOURSE VIDEO 4 

var form = document.getElementById('addForm');
var itemList = document.getElementById('items');
var filter = document.getElementById('filter')

// form submit event

form.addEventListener('submit', addItem);

itemList.addEventListener('click', removeItem);

filter.addEventListener('keyup', filterItems); // search when we stop typing
// addItem

function addItem(e){
    e.preventDefault();

    console.log(1);

    //get input value

    var newItem  = document.getElementById('item').value; // put its value into the variable of newItem

    // create new li element

    var li  = document.createElement('li'); //created an li element 
    // add class 
    li.className = 'list-group-item'; // class for the li element

    // add text node with input value
    li.appendChild(document.createTextNode(newItem));


    // creating del button for our new li 

    var deleteBtn = document.createElement('button');

    // add classes to del button 

    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    // append text node

    deleteBtn.appendChild(document.createTextNode('X'));
    //append button to li
    li.appendChild(deleteBtn);

    //append li to list

    li.appendChild(deleteBtn);

    itemList.appendChild(li);


}

function removeItem(e){

    //console.log(1); // we only want this to happend when we click on the button so

    if(e.target.classList.contains('delete')){ // if what we are clicking has the class of 'delete'
    if(confirm('are you sure?')){
        var li = e.target.parentElement; // our target is the delete button, the tags of which reside inside the li tag. 
        //this means that the li tag is the parent of the delete button 
        
        itemList.removeChild(li); // ?? confusion. ??
    }
  }
}

function filterItems(e){

    var text = e.target.value.toLowerCase();
    // get list
    var items = itemList.getElementsByTagName('li');

    console.log(items);
    // convert to an array 
    Array.from(items).forEach(function(item){ // items is the collection. item is our identifier which we pass into the function
        var itemName = item.firstChild.textContent;
        //console.log(itemName);

        // we need to compare to be able to filter

        if(itemName.toLowerCase().indexOf(text) != -1){
            item.style.display = 'block';// this apparently shows the item idk why

        }else{
            item.style.display = 'none';
        }
    })

}

*/


