<?php
//Get Vars from Login Page
$email = $_POST['sEmail'];
$password = $_POST['sPass'];

//BD - Verificar si el usuario existe en BD
if($email == 'prueba@prueba.com' && $password == '123123') {
    echo $email.' - '.$password;
} else {
    echo "notFound";
}
?>