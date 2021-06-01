class Image {
    static all = []

    constructor({id, category, url, vocabularies}) {
        this.id = id
        this.category = category;
        this.url = url;
        this.vocabularies = vocabularies.map(v => new Vocabulary(v));

        Image.all.push(this)
    }

    render(){
        return(`<h2><li id="image-${this.id}" data-id="${this.id}">${this.category}<br>
                <img src="${this.url}" alt="" /><br>
                <button type="submit">Display Vocabularies</button>
            </li></h2><br><br>`)
    }

    addToDom(){
        const imagesContainer = document.getElementById("images-container")
        imagesContainer.innerHTML += this.render()
    }

    renderVocabularies(){
        const li = document.getElementById(`image-${this.id}`)
        const ul = document.createElement(`ul`)
        this.vocabularies.forEach(v => ul.innerHTML += v.render())
        li.append(ul)
        currentVocabularies = ul
    }

    static listenDisplay(){
        const imagesContainer = document.getElementById('images-container');
        imagesContainer.addEventListener('click', this.handleDisplay)
    }

    static handleDisplay(e){
        if (currentVocabularies) currentVocabularies.remove() //empty out the bin everytime you click the button 
        const li = e.target.parentElement
        console.log('Displaying Vocabularies', li.dataset.id)
        const i = Image.all.find(i => i.id == li.dataset.id)
        i.renderVocabularies();
    }

    
}