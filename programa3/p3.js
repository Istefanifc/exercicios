let vetor = []

for (let i = 0; i <= 99; i++) {
    vetor[i] = i * 2
    console.log(vetor);
}


for (let i = 1; i <= 99; i += 2) {
    let impar = (vetor[i] + 1) * 3
    console.log(impar);
}

