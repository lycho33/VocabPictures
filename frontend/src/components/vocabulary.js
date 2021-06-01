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
        `)
    }
}