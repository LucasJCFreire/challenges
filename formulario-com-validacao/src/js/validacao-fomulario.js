const botaoEnviar = document.querySelector('#btEnviar')
const camposObrigatorios = document.querySelectorAll('.campoObrigatorio')
const textoCampoObrigatorio = document.querySelectorAll('.alertaCampoObrigatorio')

botaoEnviar.addEventListener('click', ()=>{
    verificarPreenchimento()
})

function verificarPreenchimento() {
    for (let i = 0; i < camposObrigatorios.length; i++) {
        console.log(camposObrigatorios[i])
        textoCampoObrigatorio[i].style.opacity = 0

        if (camposObrigatorios[i].value == "") {
            camposObrigatorios[i].classList.add('AlertaEsteCampoEhObrigatorio')
            camposObrigatorios[i].classList.remove('campoPreenchido')
            textoCampoObrigatorio[i].style.opacity = 1
            console.log('i')
        } else {
            camposObrigatorios[i].classList.add('campoPreenchido')
            camposObrigatorios[i].classList.remove('AlertaEsteCampoEhObrigatorio')
            textoCampoObrigatorio[i].style.opacity = 0
        }
    }
}