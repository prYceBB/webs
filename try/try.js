function yes() {
    let test = Math.floor(Math.random() * 2) + 1
    if (test == 1) {
        window.location.href = 'https://prycebb.github.io/webs/tests/yes.html';
    } else {
        window.location.href = 'https://prycebb.github.io/webs/tests/no.html';
    }   
}

function no() {
    alert('Ok, bye.')
    window.location.href = 'https://prycebb.github.io/webs';
}
