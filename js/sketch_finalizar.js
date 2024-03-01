function copiar_link() {
    const urlParams = new URLSearchParams(location.search);
    let nome = urlParams.get('name');
    let email = urlParams.get('e');

    let link = `https://paulatalim.github.io/pesquisa-social/?name=${nome}&e=${email}`;

    // Copia o link para a area de transferencia
    navigator.clipboard.writeText(link);

    let btn = document.getElementById("copiar-link");
    btn.innerHTML = "link copiado !";
    btn.style.border = "none";
    btn.style.color = "white";
    btn.style.background = "#EA0061";
}

onload = () => {
    document.getElementById("copiar-link").onclick = copiar_link;
}