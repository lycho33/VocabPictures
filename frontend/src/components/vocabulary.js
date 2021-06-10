class Vocabulary {

    static all = []

    constructor({id, word, description, trigger, image_id}) {
        this.id = id;
        this.word = word;
        this.description = description;
        this.trigger = trigger;
        this.image_id = image_id;
        // this.render = this.render.bind(this)
        Vocabulary.all.push(this)
    }

    render = () => {
        return(`
            <li data-id=${this.id}><span>${this.word}</span> - <span>${this.description}</span></li>
            <h5>The Trigger: ${this.trigger}</h5>
        `)
    }

    static listenAdd(){
        const imagesContainer = document.getElementById('images-container');
        imagesContainer.addEventListener('click', this.handleAdd.bind(this))
    }

    static handleAdd(e){
        console.log(this)
        const li = e.target.parentElement
        const action = e.target.dataset.action
        if (action === 'add') {
            console.log(`Let's add some vocabulary`, li.dataset.id)
            const i = Image.all.find(i => i.id == li.dataset.id)
            console.log(i)
            Vocabulary.addVocabForm(i.id);
        }
    }

    static addVocabForm = (id) => {
        const image = document.getElementById(`image-${id}`)
        const form = document.createElement('form')

        form.dataset.id = id
        form.id = "form"

        form.innerHTML = `<input id='word' placeholder='word' type='text'/>
        <input id='definition' placeholder='definition' type='text'/>
        <input id='trigger' placeholder='trigger word' type='text'/>
        <input id='vocab-submit' value='submit' type='submit' data-action="create"/>`

        image.append(form)
        form.addEventListener('submit', this.handleSubmit)
    }

    static handleSubmit(e) {
        e.preventDefault() //prevents the browser from redirecting to a different page and auto-submitting 
        const input = e.target
        let args = {vocabularies: {}}

        fetchAll.createVocabulary(args)
     
    }
  
}