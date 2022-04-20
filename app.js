function userName() {
    let userName = prompt("Create a username:");
    let cats = prompt("Welcome, " + userName + "! Answer for a chance to win a prize. - What is a group of cats called, CLOWDER or KINDLE?");
    if (cats === "CLOWDER") {
    document.write("Congratulations, " + userName + "!! You just won a free membership to the site for one year!!"); 
    } else
    document.write("Sorry, that is not the right answer, " + userName + ". Better luck next time!");
}


function feline() {
    let feline = prompt("Name a type of feline:");
    document.write(feline);
}