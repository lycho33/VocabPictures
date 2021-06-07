class Vocabulary {

    static all = []

    constructor({id, word, description, trigger, image_id}) {
        this.id = id;
        this.word = word;
        this.description = description;
        this.trigger = trigger;
        this.image_id = image_id;

        Vocabulary.all.push(this)
    }

    render(){
        return(`
            <li data-id=${this.id}><span>${this.word}</span> - <span>${this.description}</span></li>
            <h5>The Trigger: ${this.trigger}</h5>
        `)
    }

    static listenAdd(){
        const imagesContainer = document.getElementById('images-container');
        imagesContainer.addEventListener('click', this.handleAdd)
    }

    static handleAdd(e){
        const li = e.target.parentElement
        const action = e.target.dataset.action
        if (action === 'add') {
            console.log(`Let's add some vocabulary`, li.dataset.id)
            const i = Image.all.find(i => i.id == li.dataset.id)
            i.addVocabForm();
        }
    }

    addVocabForm(){
        const image = document.getElementById(`image-${this.id}`)
        const form = document.createElement('form')

        form.innerHTML = `<input id='vocab-input' placeholder='word' type='text'/>
        <input id='vocab-input' placeholder='definition' type='text'/>
        <input id='vocab-input' placeholder='trigger word' type='text'/>
        <input id='image-submit' value='submit' type='submit' data-action="create"/>`

        image.append(form)
        form.addEventListener('click', this.handleAdd)
    }

  
}