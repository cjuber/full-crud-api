const axios = require('axios')


const getSwapiCharacters = (req, res) => {
    let swapiPromise = axios.get('https://swapi.co/api/people')

    swapiPromise.then(response => {

        console.log(response)
    })


}

module.exports = {

    getSwapiCharacters
}