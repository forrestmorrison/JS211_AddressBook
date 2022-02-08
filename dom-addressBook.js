let addressBook = [];

const fetchUser = () => {
    fetch("https://randomuser.me/api")
    .then(response => response.json())
    .then(json => addressBook.push(json))
    .catch(error => console.log(error))
}

const insideArray = () => {
    console.log(addressBook);
}

const listUsers = (arr) => {
    let userList = document.getElementById("user-list");
    for (let i=0; i < arr.length; i++) {
        let newListItem = document.createElement('LI');
        newListItem.innerText = arr[0].results[0].name;
        userList.appendChild(newListItem);
    }
}

// console.log(userArray[0].results[0].name);