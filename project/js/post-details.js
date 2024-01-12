const localUrl = new URL(location.href);
const post = JSON.parse(localUrl.searchParams.get('post'));
const infoPost = document.getElementById('infoPost');
const commentsBlock = document.getElementById('comments');
const aboutPost = document.getElementById('aboutPost');


console.log(post);

//https://jsonplaceholder.typicode.com/posts/POST_ID/co

for (const key in post) {
    const li = document.createElement('li');
    infoPost.appendChild(li);
    li.innerText = `${key}: ${post[key]}`;
}

fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(comments => comments.json())
    .then(comments => {
        console.log(comments)
        comments.forEach(comment => {
            const commentBlock = document.createElement('div');
            commentsBlock.appendChild(commentBlock);
            commentBlock.innerText = comment.body;
        })
    });