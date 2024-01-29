// let search = document.getElementById("inputsearch");
// let container = document.getElementById("container");
// let btn = document.getElementById("btn")

// let results = {};
// btn.addEventListener("click", function () {
//     container.innerHTML = "";
//     if (search.value != "") {
//         let api = `https://images-api.nasa.gov/search?q=${search.value}`
//         fetch(api)
//             .then(response => response.json())
//             .then(data => results = { ...data })
//             .then(end => results.collection.items.forEach(element => {
//                 container.innerHTML += `<div class="box">
//                                         <img class="image" src=${element.links[0].href} alt="">
//                                         <h1 class="title">${element.data[0].title}</h1>
//                                         <p>${element.data[0].description}</p>
//                                         </div>`
//             }))
//     } else {
//         alert("Please Enter a word")
//     }
// })

//******************************

let input = document.getElementById("inputsearch");
let search = input;
let container = document.getElementById("container");
let x = 0;

window.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        searching();
    }
});

function searching() {
    if (input.value != "") {
        container.innerHTML = "";
        x += 1;
        fetch(`https://images-api.nasa.gov/search?q=${search.value}`)
            .then((response) => response.json())
            .then((data) => {
                for (let i = 0; i < 100; i++) {
                    let title = data.collection.items[i].data[0].title;
                    let image = data.collection.items[i].links[0].href;
                    let description = data.collection.items[i].data[0].description;

                    let box = document.createElement("div");
                    box.id = "box";
                    container.appendChild(box);

                    let testImage = document.createElement("img");
                    testImage.id = "testImage";
                    box.appendChild(testImage);

                    let titles = document.createElement("p");
                    titles.id = "title";
                    box.appendChild(titles);

                    let descriptions = document.createElement("p");
                    descriptions.id = "description";
                    box.appendChild(descriptions);

                    testImage.src = image;
                    titles.innerHTML = title;
                    descriptions.innerHTML = description;
                }
            });
    }
}
