// mark class : repr the bookmark


class WebMark{
    constructor(title, source, type){

        let linkNumber = 0;

        this.title = title;
        this.source = source;
        this.type = type;

    }
}
// ui class : handle UI Task

class UI {
    
    static displayLinks(){
         const StoredMarks = Store.getMarks(); // now we dont need dummy data
         //[
        //     {
        //         title: 'Colab text-gen',
        //         source: 'https://colab.research.google.com/github/tensorflow/docs/blob/master/site/en/tutorials/text/text_generation.ipynb#scrollTo=JIPcXllKjkdr',
        //         type : 'edu',
        //     },

        //     {
        //         title: 'DS playlist',
        //         source: 'https://www.youtube.com/playlist?list=PLsFENPUZBqipuTJXgm7xAOR0UnY_8OY07',
        //         type : 'edu',
        //     },



        // ];

        const marks = StoredMarks;

        marks.forEach((mark) => UI.addMarkToList(mark));

    }

    static addMarkToList(mark){
        const list = document.querySelector('#mark-list');

        const row = document.createElement('tr'); // creating a new table row to be able to insert a new link

        row.innerHTML = `
        <td> ${mark.title} </td>
        <td> <a href = "${mark.source}">Link</a> </td>
        <td> ${mark.type} </td>
        <td> <a href="#" class="btn btn-danger btn-sm delete">X</a></td>
        `;

        list.appendChild(row);
    }

    static deleteLink(e){
        if(e.classList.contains('delete')){ // if it has a class that contains the given keyword, then we want its parent to be deleted.
            e.parentElement.parentElement.remove();
            //console.log(e.classList);
        }
    }

    static showAlert(message, className){ // because we dont want that default browser alert
        const div = document.createElement('div'); // <div class = "alert alert-success"> message </div> is what we will create here
        div.className = `alert alert-${className}`; //multiple ways to do this thing
        div.appendChild(document.createTextNode(message)); //putting soemthign in the div
        const container = document.querySelector('.container');
        const form = document.querySelector('#website-form');
        container.insertBefore(div, form); //insert div, before the form (?)
        // look at the html to get a better idea

        // vanish in 
        setTimeout(() => document.querySelector('.alert').remove(), 2400); // what do we want to remove, time in ms

    }
    static clearFields(){
        document.querySelector('#title').value = '';
        document.querySelector('#source').value = '';
        document.querySelector('#type').value = '';
    }
}

// store class : handles storage
class Store{           // UNDERSTAND THIS SHIT 
    static getMarks(){

        let marks;
        if(localStorage.getItem('marks') === null) {

            marks = [];
        }else{
             marks = JSON.parse(localStorage.getItem('marks')); // reason?
        }

        return marks;

    }

    static addMark(mark){

        const marks = Store.getMarks();

        marks.push(mark);

        localStorage.setItem('marks', JSON.stringify(marks)); // local storage is a string but marks is an array of objects. so we need to stringify

    }

    static removeMark(title){

        const marks = Store.getMarks();

        marks.forEach((mark, index) => {
            if(" " +mark.title+ " " == title)
            {
                console.log(marks+ " before splice");
                marks.splice(index, 1);
                console.log(marks + " after splice");
            }
        });

        localStorage.setItem('marks', JSON.stringify(marks));

    }
}


// event : display links 

document.addEventListener('DOMContentLoaded', UI.displayLinks); // as soon as the dom loads, we will call the displayLinks method

// event : add a webMark
document.querySelector("#website-form").addEventListener("submit", (e) =>{
    //prevent actual submission

    e.preventDefault();
    
    
    // get the form values

    

    const title = document.querySelector('#title').value;
    const source = document.querySelector('#source').value;
    const type = document.querySelector('#type').value;


    //validate. confirming that all the fields are filled in
    if(title ==='' || source === '' || type === ''){
       // alert('please fill in all the fields');
       UI.showAlert('Please fill in all the fields', 'danger'); // we did alert-${className} so it becomes, alert-danger. 
    } else{


    // instantiating webMark

    const mark = new WebMark(title, source, type);

//    console.log(mark);


//showing success message
    UI.showAlert('WebMark Added', 'success');   

  // adding the mark to the UI
  
  UI.addMarkToList(mark);

  // adding mark to the storage

  Store.addMark(mark);


  //clearing fields
  UI.clearFields();


}}); 

//listening for submit

// event : remove a webMark 
document.querySelector("#mark-list").addEventListener("click", (e) => { // what we are doing here is called event propagation. if we had put in the search for delete in here,
    UI.showAlert('WebMark removed', 'success');                                           // then pressing the delete at any position would have only deleted the first occurence of the row with delete.

    // removing book from storage
    
    Store.removeMark(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent);
   // console.log(e.target.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.textContent);
    UI.deleteLink(e.target);
});
