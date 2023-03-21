function my_Dictionary() { //Creating a dictionary
    var Animal ={
        Species:"Cat",
        Color:"Gray and White",
        Breed:"Unkown",
        Age:"1",
        Sound:"Meow"
    };
    delete Animal.Sound; //Deleting a value
    document.getElementById("Dictionary").innerHTML = Animal.Sound; //Displaying value in the browser
}