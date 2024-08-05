function habilitar_btn_enviar () {
    let nome = document.getElementById("basic-name-input").value;
    let idade = document.getElementById("basic-idade-input").value;
    // let quest2_sim = document.getElementById("quest2-radio-sim").checked;
    // let quest2_nao = document.getElementById("quest2-radio-nao").checked;
    let quest0 = document.getElementsByClassName("quest0-radio-input");
    let quest1 = document.getElementsByClassName("quest1-radio-input");

    let quest0chek = false;
    let quest1chek = false;
    // let quest2chek = false;

    let btn = document.getElementById("btn-enviar");
    
    for (var i = 0; i < quest0.length; i++) {
        let quest0_label = document.getElementById(`quest0-label-${10 - i}`)
        if (quest0[i].checked) {
            quest0_label.style.backgroundColor = "#EA0061";
            quest0_label.style.color = "#fff";
            quest0chek = true;

        } else {
            quest0_label.style.backgroundColor = "#fff";
            quest0_label.style.color = "#EA0061";
        }
    }

    for (var i = 0; i < quest1.length; i++) {
        let quest1_label = document.getElementById(`quest1-label-${10 - i}`)
        if (quest1[i].checked) {
            quest1_label.style.backgroundColor = "#EA0061";
            quest1_label.style.color = "#fff";
            quest1chek = true;
        } else {
            quest1_label.style.backgroundColor = "#fff";
            quest1_label.style.color = "#EA0061";
        }
    }

    // let quest2_sim_label = document.getElementById(`quest2-label-sim`)
    // let quest2_nao_label = document.getElementById(`quest2-label-nao`)

    // if(quest2_sim) {
    //     quest2_sim_label.style.backgroundColor = "#EA0061";
    //     quest2_sim_label.style.color = "#fff";

    //     quest2_nao_label.style.backgroundColor = "#fff";
    //     quest2_nao_label.style.color = "#EA0061";
    //     quest2chek = true;
    // } else if(quest2_nao) {
    //     quest2_nao_label.style.backgroundColor = "#EA0061";
    //     quest2_nao_label.style.color = "#fff";

    //     quest2_sim_label.style.backgroundColor = "#fff";
    //     quest2_sim_label.style.color = "#EA0061";
    //     quest2chek = true;
    // }

    if (nome != '' && 
        idade != '' &&
        quest0chek && quest1chek)
    {
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
    // document.getElementById("redirectTo").value = `pages/finalizar_pesquisa.html`;
}

onload = () => {
    preencher_info();

    document.getElementById("basic-name-input").oninput = habilitar_btn_enviar;
    document.getElementById("basic-idade-input").oninput = habilitar_btn_enviar;
    // document.getElementById("quest1-radio-sim").onchange = habilitar_btn_enviar;
    // document.getElementById("quest2-radio-sim").onchange = habilitar_btn_enviar;
    // document.getElementById("quest2-radio-nao").onchange = habilitar_btn_enviar;
}
