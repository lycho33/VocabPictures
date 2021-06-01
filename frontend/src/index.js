let currentVocabularies = false;

document.addEventListener("DOMContentLoaded", () => {
    FetchAll.fetchImages();
    Image.listenDisplay()
})

// function fetchImages(){
//     const imagesContainer = document.getElementById("images-container")

//     fetch('http://localhost:3000/api/v1/images')
//     .then(r => r.json())
//     .then(data => {
//         data.forEach(function(image){
//             // const i = new Image(image)
//             imagesContainer.innerHTML += `
//                 <h2>${image.category}</h2>
//                 <img src="${image.url}" alt="" /><br>
//                 <button type="submit">Display Vocabularies</button><br><br>`
//         }) 
//     })
//     .catch(err => console.warn(err))
// }