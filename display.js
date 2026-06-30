// document.body.innerHTML = "Hello"
// document.body.innerText = "Hello"
// document.body.textContent = "<h1>Hello Content</h1>"
// document.body.innerText
// = "<h1>Hello Content</h1>"
// console.log()
// window.alert()
// console.log(document.body.textContent)
document.write(11) // for testing only
// document.getElementById('p').onclick = window.print();
// document.getElementById('p').onclick = ()=> window.print();
let btn = document.querySelector('button');
let modal = document.querySelector('.modal');
btn.onclick = ()=> {
    modal.classList.toggle('hide');
}