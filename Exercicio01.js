function numero() {
    n = parseInt (document.formulario.n.value)
    if (isNaN (n)) {
        alert ("Por favor, digite um número válido.");
        return;
    }
    if(n%2==0) {
        alert ("Seu número é par")
    } else {
        alert ("Seu número é impar")
    }
}
numero

