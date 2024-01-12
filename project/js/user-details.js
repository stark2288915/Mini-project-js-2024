const localUrl = new URL(location.href);
const user =  JSON.parse(localUrl.searchParams.get('user'));

const ul = document.getElementById('infoList');
const button = document.getElementById('userPosts');
const postsTitle = document.getElementById('postsTitle');

console.log(user);

function showUser (user) {

    for (const key in user) {

        if(typeof user[key] === 'object'){
            const h3 = document.createElement('h3');
            h3.innerText = key;
            ul.appendChild(h3);

            showUser(user[key]);

        }else{
            const li = document.createElement('li');
            li.innerText = `${key}: ${user[key]}`;
            ul.appendChild(li);
        }


    }
}

showUser(user);

button.addEventListener('click', (ev) => {
    //location.href = `post-details.html?posts=${user.id}`;
    ev.preventDefault();
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



})