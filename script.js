function gerarCores(){
    const caracteres = '0123456789ABCDEF'
    let cor = '#'

    for(let i = 0; i < 6; i++) {
        cor += caracteres.charAt(Math.floor(Math.random() * caracteres.length))
    }

    return cor;

}

document.getElementById('btn-acao').addEventListener('click', () => {

    for(let i = 0; i < 6; i++) {
        let guardarCores = gerarCores()
        let div_cor = document.getElementById(`cor-${i+1}`)
        div_cor.style.backgroundColor = guardarCores
        let txt_cor = document.getElementById(`txt-cor-${i+1}`)
        txt_cor.textContent = `${guardarCores}`
    }

});