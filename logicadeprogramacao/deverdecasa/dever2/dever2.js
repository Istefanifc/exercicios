let nome = ''

do {
    nome = prompt("Digite seu nome completo :")

    if (!nome) {
        break
    }

    nome = nome.toLowerCase();
    let palavras = nome.split(" ")// split separa as strings em uma lista


    for (let i = 0; i < palavras.length; i++) {
        palavras[i] = palavras[i].charAt(0).toUpperCase() + palavras[i].substring(1)
    }
    //join uni a lista de strings
    var palavraunida = palavras.join(" ")

    exibeData(palavraunida, new Date())

} while (nome.trim() != "");

function exibeData(nome, data) {
    console.log(nome);


    const numDia = data.getDate();
    const numMes = data.getMonth();

    const vetMeses = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"]
    const vetDiasSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]

    //Converter o dia e mês que são numéricos em String para 


    let strDia = numDia.toString();
    let strMes = numMes.toString();

    ////preenche a string original com um determinado caractere, ou conjunto de caracteres, (várias vezes, se necessário)
    strDia = strDia.padStart(2, "0");
    strMes = strMes.padStart(2, "0");

    console.log(`Data: ${vetDiasSemana[nome, data.getDay()]}, ${numDia}/${vetMeses[numMes]} ás ${data.getHours()}:${data.getMinutes()}:${data.getSeconds()}`);

}
