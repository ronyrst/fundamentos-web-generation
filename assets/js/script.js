/*
Como posso acessar?
Lembrando que o Js é case sensitive.

por Tag: getElementByTagName()
por Id: getElementById()
por Nome: getElementByName()
por Classe: getElementByClassName()
por Seletor (do CSS): querySelector()
*/

let nome = window.document.getElementById('nome')
// Aqui, por ser pelo id, faço #. Se fosse uma classe, colocaria .
let email = document.querySelector('input#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

function validaNome() {

    let txtNome = document.querySelector('#txtNome')

    if(nome.value.length < 3) {
        txtNome.innerHTML = 'Nome inválido'
        txtNome.style.color = 'red'
        nomeOk = false
    } else {
        txtNome.innerHTML = 'Nome válido'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = "E-mail inválido"
        txtEmail.style.color = 'red'
        emailOk = false
    } else {
        txtEmail.innerHTML = "E-mail válido"
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')

    if (assunto.value.length >= 100) {
        txtAssunto.style.display = 'inline';
        txtAssunto.innerHTML = 'Texto muito grande. Digite no máximo 100 caracteres.'
        txtAssunto.style.color = 'red'
        assuntoOk = false
    } else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert('Formulário enviado com sucesso!')
    } else {
        alert('Preencha o formulário corretamente!')
    }
}

/*
function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal() {
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}
*/