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

    // notes.appendChild(li);
    notes.appendChild(div);
    notes.appendChild(title);
    notes.appendChild(body);
    notes.appendChild(edit);
    notes.appendChild(deletebtn);

    // li.appendChild(div);
    div.appendChild(title);
    div.appendChild(body);
    div.appendChild(edit);
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

 
    deletebtn.addEventListener("click", function(){
        
        this.parentNode.parentNode.removeChild(this.parentNode)
        
    })
    
    edit.addEventListener("click", function(){
         
    })

}})

