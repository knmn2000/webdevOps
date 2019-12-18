// ##### ASYNC JS CRASH COURSE

// when something is going on but you dont want to 
// wait for it to finish for the next program to start
// sync means that one thing happens, and the next 
// only happens when the previous operation finishes

// async useful coz - requests from servers etc 
// callbacks were used till es6 was released and
// promises tookover callbacks 
// async await deals with promises in an elegant way 


// we will be mimicking getting stuff from a server
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

    setTimeout(() => {
        posts.push(post);

        callback();
    }, 2000);  // the third post didnt occur as it took 1000 ms to get data from the serfver
    // but it took 2000 ms to get to the third post. and 
    // by the time we got to the third post, the dom was already painted
    // this is why we require async programming which does not require one
    // thing to wait for another to finish

}

//getPosts();

createPost({title :'post three', body :'this is the third post'}, getPosts);