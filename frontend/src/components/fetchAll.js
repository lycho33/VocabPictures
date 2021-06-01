class FetchAll {

    static baseImageURL = 'http://localhost:3000/api/v1/images'

    static fetchImages(){
        fetch(this.baseImageURL)
        .then(r => r.json())
        .then(images => {
            images.forEach(image => {
                const i = new Image(image)
                i.addToDom()
            })
        })
        .catch(err => console.warn(err))
    }
}