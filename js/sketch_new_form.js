let link;

function habilitar_btn () {
    let name = document.getElementById("info-name").value;
    let email = document.getElementById("info-email").value;
    let btn = document.getElementById("info-btn");
    
    if (name != '' && email != '') {
        btn.style.background = "linear-gradient(90deg, #EB3600 0%, #EA0061 100%)";
        btn.disabled = false;
    } else {
        btn.style.background = "linear-gradient(90deg, #df896f 0%, #d083a3 100%)";
        btn.disabled = true;
    }
}

function criar_link () {
    let name = document.getElementById("info-name").value;
    let email = document.getElementById("info-email").value;
    email = encrypt(email);

    link = `https://paulatalim.github.io/pesquisa-social/?name=${name.replace(" ", "%20")}&e=${email}`;

    document.querySelector(".compartilhar").style.display = "flex";
}

function copiar_link() {
    // Copia o link para a area de transferencia
    navigator.clipboard.writeText(link);

    let btn = document.getElementById("compartilhar-btn");
    btn.innerHTML = "link copiado !";
    btn.style.border = "none";
    btn.style.color = "white";
    btn.style.background = "#EA0061";
}

onload = () => {
    document.getElementById("compartilhar-btn").onclick = copiar_link;
    document.getElementById("info-btn").onclick = criar_link;
    document.getElementById("info-name").onchange = habilitar_btn;
    document.getElementById("info-email").onchange = habilitar_btn;
}