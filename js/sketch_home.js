function habilitar_btn_enviar () {
    let nome = document.getElementById("basic-name-input").value;
    let idade = document.getElementById("basic-idade-input").value;
    let quest1_sim = document.getElementById("quest1-radio-sim").checked;
    let quest1_nao = document.getElementById("quest1-radio-nao").checked;
    let quest2_sim = document.getElementById("quest2-radio-sim").checked;
    let quest2_nao = document.getElementById("quest2-radio-nao").checked;
    let btn = document.getElementById("btn-enviar");

    if (nome != '' && 
        idade != '' &&
        (quest1_sim == true || quest1_nao == true) &&
        (quest2_sim == true || quest2_nao == true)) {
            btn.style.background = "linear-gradient(90deg, #EB3600 0%, #EA0061 100%)";
        btn.disabled = false;
    } else {
        btn.style.background = "linear-gradient(90deg, #df896f 0%, #d083a3 100%)";
        btn.disabled = true;
    }
}

function preencher_info () {
    const urlParams = new URLSearchParams(location.search);
    let nome = urlParams.get('name').replace("%20", " ");
    let email_cripto = urlParams.get('e');

    let email = decrypt(email_cripto);

    document.getElementById("title-name").innerHTML = nome;
    document.getElementById("email").value = email;
    document.getElementById("redirectTo").value = `https://paulatalim.github.io/pesquisa-social/pages/finalizar_pesquisa.html?name=${nome}&e=${email_cripto}`;
}

onload = () => {
    preencher_info();

    document.getElementById("basic-name-input").oninput = habilitar_btn_enviar;
    document.getElementById("basic-idade-input").oninput = habilitar_btn_enviar;
    document.getElementById("quest1-radio-sim").onchange = habilitar_btn_enviar;
    document.getElementById("quest2-radio-sim").onchange = habilitar_btn_enviar;
    document.getElementById("quest2-radio-nao").onchange = habilitar_btn_enviar;
}
