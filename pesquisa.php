<?php

// $nome = addslashes($_POST['name']);
// $email = addslashes($_POST['email']);
// $mensagem = addslashes($_POST['message']);

$to = "paulactalim@gmail.com";
$subject = "Email teste";
$body = "Nome: Paula \n".
        "Mensagem email test";
$header = "From:paulactalim@gmail.com"."\r\n".
        "Reply-To: paulcatalim@gmail.com\r\n".
        "X=Mailer:PHP/".phpversion();

if(mail($to,$subject,$body,$header)) {
    echo("email enviado com sucesso");
} else {
    echo("falha ao envia email");
}

?>