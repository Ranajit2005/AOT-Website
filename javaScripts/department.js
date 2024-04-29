//search funcitons
let search = document.querySelector('.search');
let para = document.querySelectorAll('p');
let a = document.querySelectorAll('a');
search.childNodes[3].addEventListener('click', e => {
    let val = search.childNodes[1].value;
    if (val == '') return;
    var encodedMessage = "";
    para.forEach(p => {
        if (p.innerHTML.toLowerCase().includes(val.toLowerCase())) {
            encodedMessage += (encodeURIComponent(p.outerHTML));
            encodedMessage += 'TEAM_BUG';
        }
    })
    a.forEach(p => {
        if (p.innerHTML.toLowerCase().includes(val.toLowerCase())) {
            encodedMessage += (encodeURIComponent(p.outerHTML));
            encodedMessage += 'TEAM_BUG';
        }
    })
    sessionStorage.setItem('res', encodedMessage);
    window.location.href = "../search.html";
})