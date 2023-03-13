
const loginTextareas = [];
loginTextareas.push(document.getElementById('emailarea'), document.getElementById('usernamearea'))
defLoginTextareas = ['Enter a valid Email Address...', 'Enter a Username...']

loginTextareas.forEach((area, ind) => {
    area.onfocus = () => {
        area.innerText = ''
        area.style.color = 'black';
        area.style.fontStyle = 'normal';
    }

    area.onblur = () => {
        area.innerText = defLoginTextareas[ind]
        area.style.color = '#8a8a8a';
        area.style.fontStyle = 'italic';
    }
});