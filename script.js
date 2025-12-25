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

    const sleep = (ms) => new Promise(resolve => setTimeout(resolve, ms));

   async function type() {
        const box = document.getElementById("text");
        if (msgIndex < messages.length) {
            let currentMessage = messages[msgIndex];

            if (charIndex < currentMessage.length) {
                box.innerHTML += currentMessage.charAt(charIndex);
                charIndex++;
                setTimeout(type, 65);
                if(charIndex >= currentMessage.length) {
                    isComplete = true;
                }
            } else {
                if(isComplete) {
                    await sleep(1000);
                    isComplete = false;
                }
                let idx = box.innerHTML.length;

                if (idx > 0) {
                    idx--;
                    reverseIdx++;
                    box.innerHTML = box.innerHTML.substring(0, charIndex - reverseIdx);
                    setTimeout(type, 55);
                }

                else {
                    reverseIdx = 0;
                    msgIndex++;
                    charIndex = 0;
                    setTimeout(type, 500);
                }

            }

        } 
        else {
            msgIndex = 0;
            charIndex = 0;
            reverseIdx = 0;
            setTimeout(type, 500);
        }
    }

    type();
}