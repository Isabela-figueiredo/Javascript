function gerarTabuada() {
    const numero = parseInt (document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");

    if (isNaN (numero)) {
        resultado.textContent= "Por favor, digite um numero inteiro válido.";
        return;
    }
    let tabuada = "";
    for (let i=1; i<=10; i++) {
        tabuada += `${numero} x ${i} = ${numero * i}\n`;
    }
    resultado.textContent = tabuada;
}