const galeria = document.querySelector('.galeriaFotos');
const botao = document.querySelector('.buttonFoto');

const imagens = [
    "assets/rectangle63.jpg",
    "assets/rectangle64.jpg",
    "assets/rectangle65.jpg",
    "assets/rectangle66.jpg"
];

let contador = 0;

botao.addEventListener("click", () => {
    const estaMostrando = botao.classList.contains('ativo');

    if (estaMostrando) {
        document.querySelectorAll('.imagemAdd').forEach(img => img.remove());
        contador = 0;
        botao.innerText = "Ver mais:";
        botao.classList.remove('ativo');
    } else {
        for (let i = 0; i < 2; i++) {
            const img = document.createElement("img");
            img.classList.add('imagemAdd');

            const indice = contador % imagens.length;
            img.src = imagens[indice];

            galeria.append(img);
            contador++;
        }

        if (contador >= 4) {
            botao.innerText = "Ver menos:";
            botao.classList.add('ativo');
        }
    }
});
