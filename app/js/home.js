function colorScheme() {

    const html = document.getElementsByTagName("html")[0]
    if (html.classList.contains("dark-mode") == true) {
        html.classList.remove("dark-mode")
        html.classList.add("light-mode")
        document.getElementById("colorScheme").innerHTML = "<b>dark-mode</b>"

    }

    else {
        html.classList.remove("light-mode")
        html.classList.add("dark-mode")
        document.getElementById("colorScheme").innerHTML = "<b>light-mode</b>"
    }
}