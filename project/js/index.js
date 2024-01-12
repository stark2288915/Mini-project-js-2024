console.log("fsdh");

fetch('https://jsonplaceholder.typicode.com/users')
    .then(users => users.json())
    .then(users => console.log(users));