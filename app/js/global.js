// default dark mode colorScheme
if (localStorage.getItem('colorScheme')) {
    let savedColorScheme = localStorage.getItem('colorScheme');
    document.getElementsByTagName('html')[0].classList.add(savedColorScheme);
    document.getElementById("colorScheme").innerHTML = `<b>${savedColorScheme == 'dark-mode' ?  'Light Mode' : 'Dark Mode'}</b>`
} else {
    let savedColorScheme = 'dark-mode';
    localStorage.setItem('colorScheme', 'dark-mode');
    document.getElementsByTagName('html')[0].classList.add('dark-mode');
}

function colorScheme() {

    const html = document.getElementsByTagName("html")[0]
    if (html.classList.contains("dark-mode") == true) {
        html.classList.remove("dark-mode")
        html.classList.add("light-mode")
        document.getElementById("colorScheme").innerHTML = "<b>Dark Mode</b>"
        localStorage.setItem('colorScheme', 'light-mode');
    }

    else {
        html.classList.remove("light-mode")
        html.classList.add("dark-mode")
        document.getElementById("colorScheme").innerHTML = "<b>Light Mode</b>"
        localStorage.setItem('colorScheme', 'dark-mode');
    }
}