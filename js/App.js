let form = document.forms[0]
let nome = form.nome
let email = form.email
let tel = form.tel
let enviar = form.enviar

enviar.addEventListener('click', (e)=>{
    e.preventDefault()
    localStorage.setItem('nome', nome.value)
    localStorage.setItem('email', email.value)
    localStorage.setItem('tel', tel.value)
    form.submit()
})


let keys = Object.keys(localStorage)

keys.forEach((e)=>{
    form[e].value = localStorage.getItem(e)
})