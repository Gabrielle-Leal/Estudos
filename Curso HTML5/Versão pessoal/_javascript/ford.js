// Adicionando interatividade com JavaScript
document.addEventListener("DOMContentLoaded", function () {
    // Exemplo de interação: Mudar a cor do texto ao clicar
    const textoAnimado = document.getElementById("texto-animado");
    textoAnimado.addEventListener("click", function () {
        textoAnimado.style.color = "#ff0000"; // Muda a cor para vermelho
    });

    // Exemplo de interação: Pausar a animação do carro ao passar o mouse
    const carroAnimado = document.getElementById("carro-animado");
    carroAnimado.addEventListener("mouseover", function () {
        carroAnimado.style.animationPlayState = "paused";
    });
    carroAnimado.addEventListener("mouseout", function () {
        carroAnimado.style.animationPlayState = "running";
    });
});