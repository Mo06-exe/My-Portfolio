window.onload = function () {
    const messages = [
        "Computer Scientist",
        "Software Developer",
        "DevSecOps Engineer",
        "Red Teamer"
    ];

    let msgIndex = 0;
    let charIndex = 0;
    let reverseIdx = 0;
    let isComplete = false;
    let fullText = "";

    function type() {
        const box = document.getElementById("text");
        if (msgIndex < messages.length) {
            let currentMessage = messages[msgIndex];

            if (charIndex < currentMessage.length) {
                box.innerHTML += currentMessage.charAt(charIndex);
                fullText += currentMessage.charAt(charIndex);
                charIndex++;
                setTimeout(type, 65);
            } else {
                let idx = box.innerHTML.length;

                // 
                if (idx > 0) {
                    idx--;
                    reverseIdx++;
                    box.innerHTML = box.innerHTML.substring(0, charIndex - reverseIdx);
                    setTimeout(type, 75);
                }

                else {
                    //box.innerHTML += "<br><br>";
                    //fullText += "<br><br>";
                    msgIndex++;
                    charIndex = 0;
                    setTimeout(type, 500);
                }

            }

        } else {
            box.style.overflowY = "auto";
            box.innerHTML = fullText;
        }
    }

    type();
}