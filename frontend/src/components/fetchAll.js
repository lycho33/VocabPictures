class FetchAll {

    constructor(url){
        this.url = 'http://localhost:3000/api/v1/images'
    }

    getImages(){
        fetch(this.url)
        .then(r => r.json())
        .then(images => {
            images.forEach(image => {
                const i = new Image(image)
                i.addToDom()
            })
        })
        .catch(err => console.warn(err))
    }

    createImage(input){
        fetch(this.url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(
                input
            )
        })
        .then(r => r.json())
        .then(data => {
            console.log(`Let's create that image`, data)
            if (data.status === 201) {
                const i = new Image(data.image)
                i.addToDom()
            } else {
                alert(data.errors)
            }
           input.image.valueOf = ''
        })
        .catch(err => console.error(`I'm in the catch!`, err))
    }
    
    deleteImage(li) {
        fetch(`${this.url}/${li.dataset.id}`, {
            method: "DELETE"
        })
        .then(r => r.json())
        .then(data => {
            if (data.message === "Successfully deleted"){
                li.remove()
            } else {
                alert(data.message)
            }
        })
        .catch(err => console.error(err))
    }

    createVocabulary(i){
        fetch(this.url, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(
                i
            )
        })
        .then(r => r.json())
        .then(data => {
            console.log(`Let's create that voacab`, data)
            debugger
            const v = new Vocabulary(data.vocabularies)
            v.addVocab();
        })
        .catch(err => console.error(err))
    }
}