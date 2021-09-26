//GET https://icanhazdadjoke.com/

const joke = document.querySelector("#joke");
const jokeBtn = document.querySelector("#jokeBtn");

//Api Call using Promise [fetch returns a promise]
// const generateJokes = () => {
//     const setHeader = {
//         headers : {
//             Accept : "application/json"
//         }
//     }

//     fetch('https://icanhazdadjoke.com/', setHeader)
//     .then((response) => response.json())
//     .then((data) => joke.innerHTML = data.joke)
//     .catch((error) => console.log(error));
// }

//Api call using async await
const generateJokes = async () => {

    try {
        const setHeader = {
            headers: {
                Accept: "application/json"
            }
        }

        const response = await fetch('https://icanhazdadjoke.com/', setHeader);
        const data = await response.json();
        joke.innerHTML = data.joke;
    } catch(err) {
        console.log(err);
    }
}

jokeBtn.addEventListener('click', generateJokes);
generateJokes();