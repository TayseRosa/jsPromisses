const url = 'https://dog.ceo/api/breeds/image/random'
const dogImg = document.querySelector('[data-js="dog-img"]')

const ValidateHTTPStatus = url => {
    if(url.ok){
        throw new Error(`HTTP error, status code ${url.status}`)
    }
    document.querySelector('p').innerHTML = 'Error statusCode 200'
    return url.json();
}

const setDogImg = ({ message: url })=>{
    dogImg.setAttribute('src', url)
}

const handleRequestError = error => {
    console.log(error.message)
}

fetch(url)
    .then(ValidateHTTPStatus)
    .then(setDogImg)
    .catch(handleRequestError)
    