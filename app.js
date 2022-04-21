function userName() {
    let userName = prompt("Create a username:")
    let answer =false;
    while (!answer) {
        let response = prompt("Welcome, " + userName + "! Answer correctly to continue: - How do you call a group of cats, CLOWDER or KINDLE?")
        if (response === "CLOWDER") {
            alert("That is correct! Press OK to continue")
            {break;}
        } else {
            alert("That is not the right answer. -Hint: Did you try all CAPS?")
        }
    }
}

function loopImg(){
    let number = prompt("Pick a number between 1 & 10 for a surprise:")
    for (let i = 1; i <= number; i++){
        if (i === 10) {break;}
        document.write("<img src='cat_moon.jpeg' alt='cat_moon' width='250' height='150'>")
    }
}
