function loadPosts(){
  fetch('https://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(data => displayPosts(data))
}

/**
 * get the container element where you want to add the new elements
 * create child element
 * set innerText or innerHTML
 * appendChild
 */

function displayPosts(posts){
const postContainer = document.getElementById('posts-container');

    for(const post of posts){
 const postDiv = document.createElement('div');
 postDiv.classList.add('post')
 postDiv.innerHTML =`
 <h4>User-${post.userId}</h4>
 <h5>Post: ${post.title}</h5>
 <p>Post Description: ${post.body}</p>
 `
 postContainer.appendChild(postDiv);
}
}

loadPosts()