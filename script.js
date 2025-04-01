const commandInput = document.getElementById("commandInput");
const optionInput = document.getElementById("optionInput");
const comment = document.getElementById("comment");
const optionsDiv = document.getElementById("options");
const contentDiv = document.getElementById("content");

commandInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        let command = commandInput.value.trim().toLowerCase();
        commandInput.value = "";

        if (command === "start()") {
            start();
        } else if (command === "exit()") {
            exit();
        } else {
            showError(command);
        }
    }
});

optionInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        let option = optionInput.value.trim();
        optionInput.value = "";

        switch (option) {
            case "1":
                showContent('About Me');
                break;
            case "2":
                showContent('Skills');
                break;
            case "3":
                showContent('Projects');
                break;
            case "4":
                showContent('Contact');
                break;
            case "5":
                window.open("Ravi Ashray's Resume.pdf", "_blank");
                break;
            case "6":
                window.open(exit());
                break;
            default:
                showError(option);
                break;
        }
    }
});

function start() {
    optionsDiv.classList.remove("hidden");
    comment.innerHTML = "";
}

function exit() {
    contentDiv.innerHTML = `PS C:\\Users> Thanks for visiting my profile. Reload to start over`
}

function showContent(option) {
    comment.innerHTML = "";
    const content = {
        "About Me": "- Hi, I'm <a class='link' href='https://github.com/RaviAshray15' target='_blank'>Namuduru Venkata Ravi Ashray</a> <br>\n- I catch bugs in my web area<br>\n- Final Year Graduate from <a class='link' href='https://vitap.ac.in' target='_blank'>VIT AP University</a><br>\n- Loves a good challenge — whether it's coding or waking up from the morning sleep<br>\n- Keyboard player who occasionally creates actual music",
        "Skills": "- HTML\n<br>- CSS\n<br>- JavaScript\n<br>- React JS\n<br>- Java\n<br>- Python\n<br>- MongoDB\n",
        "Projects": "<a class='link' href='https://temp-conv-pink.vercel.app/' target='_blank'>[1] Temperature Converter</a>\n<br><a class='link' href='https://github.com/RaviAshray15/Calculator' target='_blank'>[2] Calculator</a>\n<br><a class='link' href='https://rrock-paper-scissors.netlify.app/' target='_blank'>[3] Rock Paper Scissors</a>\n<br><a class='link' href='https://github.com/RaviAshray15/Home-Security-System' target = '_blank'>[4] Home Security System</a>\n<br><a class='link' href='https://sentiment-analysis123.streamlit.app' target = '_blank'>[5] Sentiment Analysis</a>\n<br><a class='link' href='https://raviashray.netlify.app' target = '_blank'>[6] My Another Portfolio</a>",
        "Contact": "<a class='link' href='mailto:raviashray15@gmail.com' target='_blank'>[1] Email: raviashray15@gmail.com</a><br>\n<a class='link' href='https://github.com/RaviAshray15' target='_blank'>[2] Github: @RaviAshray15</a><br>\n<a class='link' href='https://linkedin.com/in/raviashray' target='_blank'>[3] Linked In: @raviashray</a><br>\n<a class='link' href='tel:+918341320528' target='_blank'>[4] Phone: +918341320528</a><br>\n<a class='link' href='https://instagram.com/raviashray' target='_blank'>[5] Instagram: @raviashray</a><br>\n"
    };
    contentDiv.innerHTML = `PS C:\\Users> ${option}\n \n${content[option]}`;
}

function showError(command) {
    comment.style.opacity = 1;
    comment.innerHTML = `<br><br>${command} : The term '${command}' is not recognized as the name of a cmdlet, function, script file, or operable program. Check the spelling of the name, or if a path was included, verify that the path is correct and try again. <br><br> At line:1 char:1 <br>+ asdas <br>+ ~~~~~ <br>&nbsp;&nbsp; &nbsp;+ CategoryInfo : ObjectNotFound: (asdas:String) [], CommandNotFoundException  <br>&nbsp;&nbsp; &nbsp;+ FullyQualifiedErrorId : CommandNotFoundException`;
}
