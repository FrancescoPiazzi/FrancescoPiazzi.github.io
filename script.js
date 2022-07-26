window.onload = (e) => {
    keyboard = document.getElementById("keyboard")
    letters = ["a", "B", "c", "d", "e", "F", "G", "h", "i", "j", "k", "L", "m", 
        "N", "O", "P", "Q", "r", "s", "t", "u", "V", "W", "x", "y", "Z"]

    letters.forEach(c => {
        element1 = document.createElement("input")
        element1.type="radio"
        element1.id=c
        element1.name="letter"
        element1.value=c

        element2  = document.createElement("label")
        element2.for="html"
        element2.innerHTML=c

        keyboard.appendChild(element1)
        keyboard.appendChild(element2)
        if(Math.random() > 0.73)
        keyboard.appendChild(document.createElement("br"))
    });
}
