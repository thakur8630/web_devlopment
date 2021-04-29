//constructor
function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}


//display contructor
function Display() {

}





//add methods to display prototype
display.prototype.add = function () {
    console.log("adding to ui");
}



display.prototype.clear = function () {
    let libraryform = document.getElementById("libraryform");
    libraryform.reset();
}





//add submit: event listioner to libraryform/
let libraryform = document.getElementById('libraryform');
libraryform.addEventListener('submit', libraryformsubmit);
//this function libraryform ke submit par call hoga 
function libraryformsubmit(e) {
    console.log("you have submitted library form");
    let name = document.getElementById('bookname').value;
    let author = document.getElementById('author').value;
    let type;
    let devlopment = document.getElementById('devlopment');
    let programming = document.getElementById('programming');
    let cooking = document.getElementById('cooking');
    if (devlopment.checked) {
        type = devlopment.value;
    }
    else if (programming.checked) {
        type = programming.value;
    }
    else if (cooking.checked) {
        type = cooking.value;
    }


    let book = new Book(name, author, type);
    console.log(book);



    let display = new display();
    display.add(book);
    display.clear();




    e.preventDefault();
}

