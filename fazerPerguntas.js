const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
function fazerPergunta(texto) {
    return new Promise((resolve) => {
        rl.question(texto, (resposta) => {

        resolve(resposta)

        })
    })
}
function fecharInterface() {
    rl.close()
}
module.exports = {
    fazerPergunta,
    fecharInterface
}