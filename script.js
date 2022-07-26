window.onload = (e) => {
    keyboard = document.getElementById("keyboard")
    letters = ["a", "B", "c", "d", "e", "F", "G", "h", "i", "j", "k", "L", "m", 
        "N", "O", "P", "Q", "r", "s", "t", "u", "V", "W", "x", "y", "Z",
        "1", "2", "3", "4", "5", "6", "7", "8", "9"]

    letters = shuffle(letters)

    letters.forEach(c => {
        element1 = document.createElement("button")
        element1.id=c
        element1.name="letter"
        element1.value=c
        element1.innerHTML=c
        element1.setAttribute("onclick", "letterTyped('" + c + "')")

        keyboard.appendChild(element1)

        if(Math.random() > 0.73)
            keyboard.appendChild(document.createElement("br"))
    });
}

function shuffle(array) {
    let currentIndex = array.length, randomIndex;
  
    while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
  
    return array;
}

function letterTyped(letter){
    console.log(letter)
    document.getElementById("garbage2").value += letter
}