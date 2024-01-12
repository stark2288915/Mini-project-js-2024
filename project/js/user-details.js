const localUrl = new URL(location.href);
const user =  JSON.parse(localUrl.searchParams.get('user'));

const ul = document.getElementById('infoList');

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