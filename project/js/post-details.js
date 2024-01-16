const localUrl = new URL(location.href);
const post = JSON.parse(localUrl.searchParams.get('post'));
const infoPost = document.getElementById('infoPost');
const commentsBlock = document.getElementById('comments');
const aboutPost = document.getElementById('aboutPost');


for (const key in post) {
    const li = document.createElement('li');
    infoPost.appendChild(li);
    li.innerHTML = `<span class="textPoint">${key}</span>: ${post[key]}`;
}

fetch(`https://jsonplaceholder.typicode.com/posts/${post.id}/comments`)
    .then(comments => comments.json())
    .then(comments => {
        console.log(comments);
        comments.forEach(comment => {
            const commentBlock = document.createElement('div');
            const ulComments = document.createElement('ul');
            commentsBlock.appendChild(commentBlock);

            commentBlock.appendChild(ulComments);
            const separateComments = comment.body.split("\n");

            separateComments.forEach(comm => {
                const li = document.createElement('li');
                ulComments.appendChild(li);
                li.innerText = comm;
            })

        })
    });