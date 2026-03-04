 const { fazerPergunta, fecharInterface } = require('./fazerPerguntas')
 const { caracteres } = require('./caracteres')
 const { gerarSenha } = require('./gerador')

 async function main() {
    const tamanhoSenha = await fazerPergunta("qual vai ser o tamanho da sua senha? ")
    const letrasMaiusculas = await fazerPergunta("quer letras maiuscolas? (y/n) ")
    const letrasMinusculas = await fazerPergunta("quer letras minusculas? (y/n) ")
    const numeros = await fazerPergunta("quer numeros? (y/n) ")
    const simbolos = await fazerPergunta("quer simbolos? (y/n) ")

    const bancoCaracteres = caracteres(letrasMaiusculas, letrasMinusculas, numeros, simbolos)
    const bancoGerarSenha = gerarSenha(bancoCaracteres, tamanhoSenha)

    console.log("sua senha é: ", bancoGerarSenha)

    fecharInterface()
 }
 main()
