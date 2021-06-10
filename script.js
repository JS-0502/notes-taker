const createNote = document.querySelector("#createBtn")
const notes = document.querySelector("#notes-li")
const noteTitle = document.querySelector('#note-title')
const noteBody = document.querySelector("#note-body")
const chooseColor = document.querySelector("#color")

createNote.addEventListener("click", function(){

    if(document.querySelector("#title").value == '' ){
        document.querySelector("#title").classList.add('error-style')
        document.querySelector(".textarea").classList.add('error-style')
        chooseColor.classList.add('error-style')
        document.querySelector("#error").textContent = "Enter a title dum dum"
        document.querySelector("#error").style.color = "red"
         
    } else {
        document.querySelector("#title").classList.remove('error-style')
        document.querySelector(".textarea").classList.remove('error-style')
        chooseColor.classList.remove('error-style')
        document.querySelector("#error").textContent = ""
        document.querySelector("#error").style.color = "red"

    const li = document.createElement('li')
    const div = document.createElement('div')
    const title = document.createElement('p')
    const body = document.createElement('p')
    const edit = document.createElement('button')
    const deletebtn = document.createElement('button')


    let choice = chooseColor.value
     
 
        if(choice == 'red'){
            title.style.backgroundColor = "red"
            edit.style.backgroundColor = "red"
            deletebtn.style.backgroundColor = "red"
        }

        
        if(choice == 'Green'){
            title.style.backgroundColor = "green"
            edit.style.backgroundColor = "green"
            deletebtn.style.backgroundColor = "green"
        }

        
        if(choice == 'Blue'){
            title.style.backgroundColor = "blue"
            edit.style.backgroundColor = "blue"
            deletebtn.style.backgroundColor = "blue"
        }
           
     
   
    notes.appendChild(div);
    notes.appendChild(title);
    notes.appendChild(body);
    // notes.appendChild(edit);
    notes.appendChild(deletebtn);

    div.appendChild(title);
    div.appendChild(body);
    // div.appendChild(edit);
    div.appendChild(deletebtn);
     
        div.classList.add("notes-border");
    title.textContent = document.querySelector("#title").value;
    body.textContent = document.querySelector(".textarea").value;
    edit.textContent = "Edit";
    deletebtn.textContent = "Delete"
    deletebtn.classList.add("deletebtn")

    title.classList.add("note-title")
    body.classList.add("note-body")
    edit.classList.add("edit-btn")
    li.classList.add("li-notes")

    console.log(title.textContent);
    console.log(body.textContent);

    localStorage.setItem("title", title.textContent)
    deletebtn.addEventListener("click", function(){
       
        this.parentNode.parentNode.removeChild(this.parentNode)
        
    })
    
    edit.addEventListener("click", function(){
         let editHeading = document.createElement("h2")
         let editTitleLb = document.createElement("label")
         let editTitle = document.createElement("input")
         let editBodyLb = document.createElement("label")
         let editBody = document.createElement("input")
         let editSelect = document.createElement("select")
         let editColorsRed = document.createElement("option")
         let editColorsGreen = document.createElement("option")
         let editColorsBlue = document.createElement("option")
        let editBtn = document.createElement("button")


         alert(title.textContent)
    })

}})

