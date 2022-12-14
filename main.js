'use strict'

let form = document.getElementById('form');
let input = document.getElementById('input');
let errorMsg = document.getElementById('error-Msg')
let posts = document.getElementById('posts');

//creating an object to store user input value
let data = {};

//create post using template literals to get the same template every time user posts someting 
let createPost = () =>{
    posts.innerHTML += `
    <div>
    <p>${data.text}</p>
    <span class="options">
    <i onClick="editPost(this)" class="fa-solid fa-pen-to-square"></i>
    <i onClick="deletePost(this)" class="fa-solid fa-trash"></i>
    </span>
    </div>
    `;
    input.value = "";
}

//grabbing user input value
let acceptData = () =>{
    data['text'] = input.value;
    createPost();
}

//validating post's success or failure
let formValidation = () =>{
    if(input.value === ''){
        errorMsg.innerHTML = "🛑Post cannot be blank!";
    }else{
        acceptData();
    }
}

//post button functionality
form.addEventListener('submit', function(e){
    e.preventDefault();

    formValidation();
    //after 2 secs error msg will disappear because of setTimeout()
    setTimeout(()=>{
        errorMsg.innerHTML = "";
    }, 2000)
});

//delete button functionality by targetting its parent element
let deletePost = (e) =>{
    e.parentElement.parentElement.remove();
}

//edit button functionality by targetting its previous element sibling 
let editPost = (e) =>{
    input.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
}
