document.addEventListener('DOMContentLoaded', () => {   //listen to the document in the DOM
    document.getElementById('dogBtn').addEventListener('click', displayDoggo); //connection btwn JS and HTML

});

function displayDoggo() {
    //asynchronous communication send off our request, using the word fetch
    fetch('https://dog.ceo/api/breeds/image/random')
        //what is called the response
        .then((response) => {
            //console.log(response);
            let json = response.json();
            //console.log(json);
        })
        .then((data) => {
            console.log(data); //logs out the data
            const img = document.createElement('img'); //create an image tag
            img.src = data.message; // adds the msg from the data object 

            //create a connection 
            const dogImg = document.getElementById('dogImg'); //connect me to the imagedog tag in HTML
            dogImg.appendChild(img); //add the image constant as a child of the dog image div


        })

}

async function displayDoggAsync() {
    const API_URL = 'https://dog.ceo/api/breeds/image/random';

    let response = await fetch(API_URL);
    let json = await response.json();

    const img = document.createElement('img');
    img.src = await json.message;

    const dogImg = document
}