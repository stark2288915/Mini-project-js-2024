const localUrl = new URL(location.href);
const user =  JSON.parse(localUrl.searchParams.get('user'));

const ul = document.getElementById('infoList');
const button = document.getElementById('userPosts');
const postsTitle = document.getElementById('postsTitle');
const forHide = document.getElementById('forHide');
forHide.classList.add('hide');

console.log(user);

function showUser (user) {

    for (const key in user) {

        if(typeof user[key] === 'object'){
            const h2 = document.createElement('h2');
            h2.innerText = key;
            ul.appendChild(h2);

            showUser(user[key]);

        }else{
            const li = document.createElement('li');
            li.innerHTML = `<span class="textPoint">${key}</span>: ${user[key]}`;
            ul.appendChild(li);
        }


    }
}

showUser(user);
fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
    .then(posts => posts.json())
    .then(posts => {
        console.log(posts);

        posts.forEach(post => {
            const oneTitle = document.createElement('div');
            const title = document.createElement('a');

            title.innerText = post.title;
            title.href = `post-details.html?post=${JSON.stringify(post)}`;

            postsTitle.appendChild(oneTitle);
            oneTitle.appendChild(title);

        })

    });


button.addEventListener('click', (ev) => {
    ev.preventDefault();
    forHide.classList.toggle('hide');




})