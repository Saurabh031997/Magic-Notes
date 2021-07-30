shownotes();
let addbtn = document.getElementById("addbtn")
addbtn.addEventListener("click", function (e) {
    let addtxt = document.getElementById("addtext");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.push(addtxt.value);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    addtxt.value = "";
    //console.log(notesobj);
    shownotes();

})

function shownotes() {
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    let html = "";
    notesobj.forEach(function (element, index) {
        html += `
        <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
                <div class="card-body">
                  <h5 class="card-title">${index + 1}</h5>
                  <p class="card-text">${element}</p>
                  <button href="#" id="${index}" Onclick="deleteNotes(this.id)" class="btn btn-primary">Delete Note</button>
                </div>
            </div>

        `;
    });
    let notesElm = document.getElementById("notes");
    if (notesobj.length != null) {
        notesElm.innerHTML = html;
    }

}

//function to delete a note
function deleteNotes(index) {
   // console.log("ajsx");
    let notes = localStorage.getItem("notes");
    if (notes == null) {
        notesobj = [];
    }
    else {
        notesobj = JSON.parse(notes);
    }
    notesobj.splice(index,1);
    localStorage.setItem("notes", JSON.stringify(notesobj));
    shownotes(); 
}


//search field
let searchText = document.getElementById("searchtext");
searchText.addEventListener("input", function(){
    let inputval = searchText.value;
    let notecard = document.getElementsByClassName("noteCard");
    Array.from(notecard).forEach(function(element,index) {
        let cardtext = document.getElementsByTagName("p")[index].innerText;
        if(cardtext.includes(inputval)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
    })


})


  
