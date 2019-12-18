// setting up materialize components

document.addEventListener("DOMContentLoaded", function(){
    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);

    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
});

//function to set up the guides
// we need a refernce to the dom , so that we have somethign to append to

const guideList = document.querySelector('.guides');
const loggedOutLink = document.querySelector('.logged-out');
const loggedInLink = document.querySelector('.logged-in');    // these are a collection of links and not individual links so you will need to cycle through them 
console.log(Array.from(loggedInLink).length);

const setupUI = (user) => {
    if (user){
        //loggedInLink.forEach(item => item.style.display = 'block');
        Array.from(loggedInLink).forEach(item => item.style.display = 'block');
        //loggedOutLink.forEach(item => item.style.display = 'none');
        Array.from(loggedOutLink).forEach(item => item.style.display = 'none');
    }else{
        Array.from(loggedOutLink).forEach(item => item.style.display = 'block');       // DOESNT WORK WHY !!??!!?
        Array.from(loggedOutLink).forEach(item => item.style.display = 'none');
        // loggedInLink.forEach(item => item.style.display = 'none');
        // loggedOutLink.forEach(item => item.style.display = 'block');
    }
};
 
//setup guides

const setupGuides = (data) =>{

    if(data.length){

    let html = '';

    data.forEach(doc => {

        const guide = doc.data();
        // console.log(guide);
        const li = `
        <li>
        <div class="collapsible-header grey lighten-4">${guide.title}</div>
        <div class="collapsible-body white">${guide.content}</div>
        </li>`;

        html+= li;
    })


    guideList.innerHTML = html;


}

else{
    guideList.innerHTML = '<h5 class = "center-align"> Login to view guides </h5>'
}
}
