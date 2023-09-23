let strCidade = "Brasília"
console.log(strCidade.charAt(1));

let strResposta = ""
for (x = 2; x < strCidade.length; x++) {
    strResposta += strCidade.charAt(x)
}
console.log(strResposta);