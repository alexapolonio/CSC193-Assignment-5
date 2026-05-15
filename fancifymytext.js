function makeBigger() {
    document.getElementById("input").style.fontSize = "24pt";
}

function fancify() {
    let fancy = document.getElementById("fancy"); 

    if (fancy.checked) {
        document.getElementById("input").style.fontWeight = "bold";
        document.getElementById("input").style.color = "blue";
        document.getElementById("input").style.textDecoration = "underline";
    }
    else {
        document.getElementById("input").style.fontWeight = "normal";
        document.getElementById("input").style.color = "black";
        document.getElementById("input").style.textDecoration = "none";
    }
}

function mooText() {
    let textArea = document.getElementById("input");
    let text = textArea.value.toUpperCase();
    let sentences = text.split(".");

    for (let i = 0; i < sentences.length - 1; i++) {
        let words = sentences[i].split(" ");

        words[words.length - 1] = words[words.length - 1] + "-MOO";

        sentences[i] = words.join(" "); 
    }    

    textArea.value = sentences.join("."); 
}