class ImageForm {
    
    constructor(){
        this.addCreateForm = this.addCreateForm.bind(this)
        // bind methods to the class they are originally from
        this.handleDelete = this.handleDelete.bind(this)
    }
    
    static addCreateForm(){
        const formContainer = document.getElementById('form-container');
        const form = document.createElement('form')

        form.innerHTML = `<input id='image-input' placeholder='description' type='text'/>
        <input id='image-input' placeholder='image url' aria-describedby="addon-wrapping"type='text'/>
        <button class="btn btn-outline-primary"     id='image-submit' value='submit' type='submit' data-action="create"/>Create</button>`
        
        formContainer.append(form)
        form.addEventListener('submit', this.handleSubmit)
    }

    static handleSubmit(event){
        event.preventDefault()
        const input = event.target
        let obj = [...input.elements]
        let args = {image: {}}
        args.image.category = obj[0].value
        args.image.url = obj[1].value
        fetchAll.createImage(args) 
    }

   static listenDelete(){
       const imagesContainer = document.getElementById('images-container')
       imagesContainer.addEventListener('click', this.handleDelete)
   }

   static handleDelete(e){
        const li = e.target.parentElement
        if (e.target.dataset.action === 'delete'){
            fetchAll.deleteImage(li)
            li.remove()
    }
}

}