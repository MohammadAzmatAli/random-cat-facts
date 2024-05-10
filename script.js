const factURL = "https://catfact.ninja/fact?max_length=140";
const imgURL = "https://api.thecatapi.com/v1/images/search";
const factWrapper = document.querySelector('.fact-container');

const getFactBtn = document.querySelector("#fact-gen-btn");


const getFacts = async () => {
    try {
        getImages();

        getFactBtn.disabled = true;
        getFactBtn.textContent = "Loading..."

        let response = await fetch(factURL);
        let fact = await response.json();
        factWrapper.innerHTML = `<h1>Fact</h1> <br> <p> ${fact.fact} </p>`

        getFactBtn.textContent = "Generate Fact"
        getFactBtn.disabled = false;
    }
    catch (error) {
        alert(`Erroor due to ${error}`);
    }
};

const getImages = async () => {
    try {
        await fetch(imgURL).then(function (response) {
            return response.json();
        }).then(function (data) {
            document.querySelector('.img-container').innerHTML = `<img src="${data[0].url}" alt="img" id="cat-img">`
        })

    } catch (error) {
        alert(`Error due to ${error}`);
    }
};


getFactBtn.addEventListener("click", getFacts);