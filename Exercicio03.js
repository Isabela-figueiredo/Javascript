let contador = 0;
function atualizarValor() {
    document.getElementById("valor").textContent = contador;
}
function aumentar() {
    contador++;
    atualizarValor()
}
function diminuir() {
    contador--;
    atualizarValor();
}