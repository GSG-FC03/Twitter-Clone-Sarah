const addTweet = document.querySelector('.tweet-button');
addTweet.addEventListener('click', (e)=> {
    e.preventDefault();
    const inputValue= document.querySelector('.tweet').value
    console.log(inputValue)
    //save the posted tweet in the local storage
localStorage.setItem('postedTweet', JSON.stringify(inputValue))

    //create elements for tweet input 
const container = document.querySelector('.tweet-container');
const image = document.createElement('img');
const header = document.createElement('h2');
const post = document.createElement('p');
/*const retweetIcon = document.createElement('span');
const likeIcon = document.createElement('span');*/



//append these element to document
container.appendChild(image);
container.appendChild(header);
container.appendChild(post);
/*container.appendChild(retweetIcon);
container.appendChild(likeIcon);*/




//add content to the element


header.textContent= 'Sarah Albalawi';
image.innerHTML = `<img src="./img/hope.jpg" />`;
post.textContent = inputValue;


//give the element an attribute to style them
image.setAttribute('class', 'imgPost');
header.setAttribute('id', 'headerPost');

post.setAttribute('id', 'tweet-post');
retweetIcon.setAttribute('id', 'retweet-icon');
likeIcon.setAttribute('id', 'like-icon');

})
