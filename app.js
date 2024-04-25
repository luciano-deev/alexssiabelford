function fuja(){
    var botaoNao = document.getElementById("nao");

    var larguraJanela = window.innerWidth;
    var alturaJanela = window.innerHeight;

    // Definindo o limite máximo de altura como 80% da altura da janela
    var limiteMaximoAltura = 0.8 * alturaJanela;

    // Calculando o maxY com base no limite máximo de altura
    var maxY = limiteMaximoAltura - botaoNao.offsetHeight;

    var maxX = larguraJanela - botaoNao.offsetWidth;

    var aleatorioX = Math.floor(Math.random() * maxX);
    var aleatorioY = Math.floor(Math.random() * maxY);

    botaoNao.style.left = aleatorioX + "px";
    botaoNao.style.top = aleatorioY + "px"; // Corrigido para aleatorioY
}
