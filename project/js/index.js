
const allUsersDiv = document.getElementById('allUsers');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(users => users.json())
    .then(users => {
        users.forEach(user => {
            const userDiv = document.createElement('div');
            userDiv.classList.add('userDiv');

            const idNameUser = document.createElement('p');
            idNameUser.classList.add('idNameUser');
            idNameUser.innerText = `${user.id}. ${user.name}`;

            const buttonShowUser = document.createElement('button');
            buttonShowUser.innerText = 'show details';
            buttonShowUser.addEventListener('click', () => {
                location.href = `user-details.html?user=${JSON.stringify(user)}`;
            })

            allUsersDiv.appendChild(userDiv);
            userDiv.appendChild(idNameUser);
            userDiv.appendChild(buttonShowUser);
        })
    });