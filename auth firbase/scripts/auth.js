// authentication js happens here
// SIGNUP



// //GETTING DATA
// db.collection('guide').get().then(snapshot =>{
//     //console.log(snapshot.docs);
//     setupGuides(snapshot.docs);
// }); // go to the collection, go to the guide, "get" stuff. 
//                                 // this is an async task and hence it returns a promise

// ^^^^^^^^^^^ WE REMOVED THIS FROM HERE AS WE WANTED TO HIDE THE DATA FROM THE USER WHEN THEY ARE NOT LOGGED IN
// BECAUSE OBVIO. ITD MAKE MORE SENSE IF WE ONLY SHOWED THEM THE DATA AFTER THEYVE CONFIRMED TO BE LOGGED IN.



//sign up modal has id of modal-signup and the form has id of signup-form
// auth.onAuthStateChanged(user =>{
//     console.log(user); // null if signed out. returns user details if signed in
//     if(user===null){
        
//         setupGuides([]); // empty . when they log out, everythings gonna be removed
// // go to the collection, go to the guide, "get" stuff. 
//                                  // this is an async task and hence it returns a promise
//      setupUI();

                         



//     }else{
//         console.log(`Logged in as ${user['email']}`)
   
        

//          //GETTING DATA
//  db.collection('guide').onSnapshot(snapshot => {//.get().then(snapshot =>{  instead of get and then, use snapshot to have data changed in realtime
//     //console.log(snapshot.docs);    // the snapshot sets up a listener. 
//     setupGuides(snapshot.docs);
//     setupUI(user);
    
// }, err => {
//     console.log(err.message);
// }); 

//     }
// });

//////////// THIS ONE WORKS , ABOVE MUST HAVE SOME ERROR
auth.onAuthStateChanged(user => {
    if (user) {
      db.collection('guide').onSnapshot(snapshot => {
        setupGuides(snapshot.docs);
        setupUI(user);
      }, err => console.log(err.message));
    } else {
      setupUI();
      setupGuides([]);
    }
  });
  
const createForm = document.querySelector('#create-form');
createForm.addEventListener('submit', (e) => {
  e.preventDefault();
  db.collection('guide').add({
    title: createForm['title'].value,
    content: createForm['content'].value
  }).then(() => {
    // close the create modal & reset form
    const modal = document.querySelector('#modal-create');
    M.Modal.getInstance(modal).close();
    createForm.reset();
  }).catch(err => {
    console.log(err.message);
  });
});



const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) =>{
    e.preventDefault(); // stops refreshing of the page when you click sign in

    // get user info

    const email = signupForm['signup-email'].value; // appears to be a hashmap? dictionary?
    const password = signupForm['signup-password'].value;

    console.log(email, password);

    // now to use these values -
    // here we can use the auth const which we defined in the html file
    // because we defined it before we init'd the auth.js file in the DOM.

    auth.createUserWithEmailAndPassword(email, password).then( cred => {
        //console.log(cred);
        return db.collection('users').doc(cred.user.uid).set({
            bio : signupForm['signup-bio'].value
        });
        
    }).then(()=>{

        const modal = document.querySelector('#modal-signup');
        M.Modal.getInstance(modal).close();
        signupForm.reset();

    }) // THIS IS AN ASYNC TASK
    // as this is async, it returns a 'promise' that this will be completed at some point. so we can append a .then method which will fire a callback function when the task completes
    // this callback fucntion will take the response from this task which will be user credentials. which we can take into an arrow function which will happen when the signup is complete

}); //syntax is whatToListenFor, functionToDo

//logout

const logout = document.querySelector("#logout");
logout.addEventListener('click', (e)=>{
    e.preventDefault();

     auth.signOut()//.then(() =>{ WE ARE NOT USING THE SIGN OUT WALA "THEN" BECAUSE WE CAN TRACK THE SIGN INS AND SIGN OUTS WITH THE AUTHSTATECHANGE METHOD PUT AT THE TOP OF THIS FILE
    //     console.log("used signed out")
    // }); // we dont need to pass in the cred because obviously
    // this is also an ASYNC task, and because of that, it returns a promise, so using a .then function
});


//login form 

const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) =>{
    e.preventDefault();
    const email = loginForm['login-email'].value;   // THE SCOPE OF EMAIL AND PASSWORD IS LOCAL. HENCE WE CAN USE THESE NAMES AGAIN
    const password = loginForm['login-password'].value;  

    auth.signInWithEmailAndPassword(email, password).then(cred =>{
        //console.log(cred);

        const modal = document.querySelector('#modal-login');
        M.Modal.getInstance(modal).close(); // M is the materialize lib
        loginForm.reset();
    }); 
    // ^ async , returns a promise



})