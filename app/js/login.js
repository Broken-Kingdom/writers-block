
const loginTextareas = [];
loginTextareas.push(document.getElementById('emailarea'), document.getElementById('usernamearea'))
defLoginTextareas = ['Enter a valid Email Address...', 'Enter a Username...']

loginTextareas.forEach((area, ind) => {
    area.onfocus = () => {
        area.innerText = ''
    }

    area.onblur = () => {
        area.innerText = defLoginTextareas[ind]
    }
});