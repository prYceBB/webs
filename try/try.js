function yes() {
    let test = Math.floor(Math.random() * 2) + 1
    if (test == 1) {
        window.location.href = 'http://127.0.0.1:5500/tests/yes.html';
    } else {
        window.location.href = 'http://127.0.0.1:5500/tests/no.html';
    }   
}

function no() {
    alert('Ok, bye.')
    window.location.href = 'http://127.0.0.1:5500/index.html';
}