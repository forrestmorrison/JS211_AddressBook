let userArray = [];


const fetchUser = () => {
    fetch("https://randomuser.me/api")
    .then(response => response.json())
    .then(json => userArray.push(json))
    .catch(error => console.log(error))
}

const insideArray = () => {
    console.log(userArray[0].results[0].name);
}

