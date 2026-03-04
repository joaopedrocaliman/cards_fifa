const modal = document.getElementById("modalStats");
const btns = document.querySelectorAll(".btn-stats");
const span = document.querySelector(".close");

// Elementos das imagens dentro do modal
const imgBandeira = document.getElementById("modal-bandeira");
const imgLiga = document.getElementById("modal-liga");
const imgClube = document.getElementById("modal-clube");

// Abre o modal ao clicar em qualquer botão de estatística
btns.forEach(btn => {
    btn.onclick = function() {
        // Pega os caminhos das imagens dos atributos data-
        imgBandeira.src = this.getAttribute("data-bandeira");
        imgLiga.src = this.getAttribute("data-liga");
        imgClube.src = this.getAttribute("data-clube");
        
        modal.style.display = "block";
    }
});

// Fecha no 'X'
span.onclick = () => modal.style.display = "none";

// Fecha se clicar fora da caixa
window.onclick = (event) => {
    if (event.target == modal) modal.style.display = "none";
}