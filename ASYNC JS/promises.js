const posts = [
    {title : "post one", body : "this is the first post"},
    {title : "post two", body : "this is the second post"}

];

function getPosts(){
    setTimeout(() => {

        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;


    }, 1000); // timeout as to mimick delay from a server


}

function createPost(post, callback){ //calling the second parameter callback is common practice
    return new Promise((resolve, reject) =>{
        setTimeout(() => { // 1 - it waits
            posts.push(post);

            const error = false;

            if(!error){ // 2 if no error
                resolve(); // 3 it resolves and *THEN* - - - - - - - *look down*
            } else{
                reject('error : something went wrong') // 5 else it rejects
            }
        },2000);
    });
}

                                                                //4 then it calls get posts. (if it resolves)
// createPost({title : 'post theee', body : ' this is ah baogead'}).then(getPosts) // .then syntax ?? 
// .catch(err => console.log(err)); // 6 try-catch error 

// Promise.all // if you have a lotta promises, and you dont want to keep using .then, .then, .then ... use ---


// const promise1 = Promise.resolve('Hello worjalf');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'bye')) ;
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()); // its a bit weird to use this as you need to use two .then's, first one will format the thing to json and the second one will actually get you the data

// Promise.all([promise1, promise2, promise3, promise4]).then((values) => console.log(values)); // this will take as much time as it takes for the longest promise to finish


async function init(){ // func has to be labled with async if we want to use await. await waits for an async process or action to complete
   await createPost({title : 'post theee', body : ' this is ah baogead'});

   getPosts();   

}

init();

 async function fetchUsers(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

     const data = await res.json();

     console.log(data);

 }

 fetchUsers();
