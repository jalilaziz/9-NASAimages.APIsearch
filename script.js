let search = document.getElementById("inputsearch");
let container = document.getElementById("container");
let btn = document.getElementById("btn")

let results = {};
btn.addEventListener("click", function () {
    container.innerHTML = "";
    if (search.value != "") {
        let api = `https://images-api.nasa.gov/search?q=${search.value}`
        fetch(api)
            .then(response => response.json())
            .then(data => results = { ...data })
            .then(end => results.collection.items.forEach(element => {
                container.innerHTML += `<div class="box">
                                        <img class="image" src=${element.links[0].href} alt="">
                                        <h1 class="title">${element.data[0].title}</h1>
                                        <p>${element.data[0].description}</p>
                                        </div>`
            }))
    } else {
        alert("Please Enter a word")
    }
})