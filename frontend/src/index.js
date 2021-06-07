let currentVocabularies = false;
const fetchAll = new FetchAll('http://localhost:3000/api/v1/images')

document.addEventListener("DOMContentLoaded", () => {
    ImageForm.addCreateForm();
    fetchAll.getImages();
    Image.listenDisplay();
    ImageForm.listenDelete();
    Vocabulary.listenAdd();
})

