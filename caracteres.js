 function caracteres(letrasMaiusculas, letrasMinusculas, numeros, simbolos) {
 let caractere = ""
    if (letrasMaiusculas === "y") {
        caractere += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    }
    if (letrasMinusculas === "y") {
       caractere += "abcdefghijklmnopqrstuvwxyz"
    }
    if (numeros === "y") {
        caractere += "0123456789"
    }
    if (simbolos === "y") {
      caractere += "!@#$%^&*()_+-=[]{}|;:,.<>?"  
    }
    return caractere
}
module.exports = {
    caracteres
}