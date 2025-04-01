const comment = document.getElementById("comment")
document.addEventListener("keydown", function (event) {
    if (event.key.length === 1) {
        document.getElementById("userInput").textContent += event.key;
    } else if (event.key === "Backspace") {
        let input = document.getElementById("userInput");
        input.textContent = input.textContent.slice(0, -1);
    }
    else if (event.key === 'Enter') {
        comment.style.opacity = 1;
    }
});

function showContent(option) {
    const content = {
        "About Me": "- Hi, I'm <a class='link' href='https://github.com/RaviAshray15' target='_blank'>Namuduru Venkata Ravi Ashray</a> <br>\n- I catch bugs in my web area<br>\n- Final Year Graduate from <a class='link' href='https://vitap.ac.in' target='_blank'>VIT AP University</a><br>\n- Loves a good challenge — whether it's coding or waking up from the morning sleep<br>\n→ Keyboard player who occasionally creates actual music",
        "Skills": "- HTML\n<br>- CSS\n<br>- JavaScript\n<br>- React JS\n<br>- Java\n<br>- Python\n<br>- MongoDB\n",
        "Projects": "<a class='link' href='https://temp-conv-pink.vercel.app/' target='_blank'>[1] Temperature Converter</a>\n<br><a class='link' href='https://github.com/RaviAshray15/Calculator' target='_blank'>[2] Calculator</a>\n<br><a class='link' href='https://rrock-paper-scissors.netlify.app/' target='_blank'>[3] Rock Paper Scissors</a>\n<br><a class='link' href='https://github.com/RaviAshray15/Home-Security-System' target = '_blank'>[4] Home Security System</a>\n<br><a class='link' href='https://sentiment-analysis123.streamlit.app' target = '_blank'>[5] Sentiment Analysis</a>\n<br><a class='link' href='https://raviashray.netlify.app' target = '_blank'>[6] My Another Portfolio</a>",
        "Contact": "<a class='link' href='mailto:raviashray15@gmail.com' target='_blank'>[1] Email: raviashray15@gmail.com</a><br>\n<a class='link' href='https://github.com/RaviAshray15' target='_blank'>[2] Github: @RaviAshray15</a><br>\n<a class='link' href='https://linkedin.com/in/raviashray' target='_blank'>[3] Linked In: @raviashray</a><br>\n<a class='link' href='tel:+918341320528' target='_blank'>[4] Phone: +918341320528</a><br>\n<a class='link' href='https://instagram.com/raviashray' target='_blank'>[5] Instagram: @raviashray</a><br>\n"
    };
    let contentDiv = document.getElementById("content");

    contentDiv.innerHTML = `PS C:\\Users> ${option}\n \n${content[option]}`;
    contentDiv.classList.remove("hidden");

}
