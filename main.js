// Address Book



// create addressBook array
// use API: https://randomuser.me/api to fetch multiple random users & store them in addressBook array

const axios = require('axios').default;

const getRemoteData = () => {
    axios.get("https://randomuser.me/api")
    .then(response => response.json())
    .then(json => console.log(json))
    .catch(error => console.log(error))
}

getRemoteData();