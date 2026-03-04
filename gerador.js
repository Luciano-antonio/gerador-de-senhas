function gerarSenha(caracteres, tamanhoSenha) {
    let senha = ""
    for (let i = 0; i < parseInt(tamanhoSenha); i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length)
        const caractereAleatorio = caracteres[indiceAleatorio]
        senha += caractereAleatorio
    }
    return senha
}
module.exports = { gerarSenha

 }