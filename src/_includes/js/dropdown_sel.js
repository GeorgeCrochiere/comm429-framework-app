document.querySelectorAll(".optionSel").forEach((elem) => {
    elem.addEventListener("click", (event) => {
        event.preventDefault();

        if (elem.classList.contains("genSel")) {
            if (elem.innerHTML === " - Select - ") {
                document.querySelector("#genSel").innerHTML = "Generations";
            } else {
                document.querySelector("#genSel").innerHTML = elem.innerHTML;
            }
        } else if (elem.classList.contains("typeSel")) {
            if (elem.innerHTML === " - Select - ") {
                document.querySelector("#typeSel").innerHTML = "Types";
            } else {
                document.querySelector("#typeSel").innerHTML = elem.innerHTML;
            }
        }
    }, false);
});
