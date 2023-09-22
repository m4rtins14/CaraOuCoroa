document.addEventListener("DOMContentLoaded", function() {
    const moeda = document.getElementById("moeda");
    const imagemMoeda = document.getElementById("imagemMoeda");
    const jogarBtn = document.getElementById("jogarBtn");
    const resultado = document.getElementById("resultado");
    const body = document.body; // Elemento <body> para alterar o fundo

    jogarBtn.addEventListener("click", function() {
        const ladoMoeda = Math.random() < 0.5 ? "cara" : "coroa"; // 50% de chance de cara ou coroa

        if (ladoMoeda === "cara") {
            imagemMoeda.src = "cara.png"; // Mostra a imagem de "Cara"
            resultado.textContent = "Caiu Cara!";
            body.style.backgroundColor = "#AA6548"; // Altera o fundo para verde (ganhou)
        } else {
            imagemMoeda.src = "coroa.png"; // Mostra a imagem de "Coroa"
            resultado.textContent = "Caiu Coroa!";
            body.style.backgroundColor = "#FF7689"; // Altera o fundo para vermelho (perdeu)
        }
    });
});
