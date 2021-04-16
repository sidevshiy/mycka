<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exceprion;

require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';

$mail = new PHPMailer(true);
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'phpmailer/language/');
$mail->IsHTML(true);

// from
$mail->setFrom('info@mycka.cz', 'Mycka ve Praze');

// where
$mail->addAddress('evgeni_lyax7@mail.ru');

// theme of letter

$mail->Subject = 'Привет! Это наше письмо !!!';

$body = '<h1>Встречайте супер письмо!!!</h1>';

if(trim(!empty($_POST['name']))) {
	$body .= '<p><strong>Имя:</strong>'.$_POST['name'].'</p>';
}

if(trim(!empty($_POST['email']))) {
	$body .= '<p><strong>email:</strong>'.$_POST['email'].'</p>';
}

if(trim(!empty($_POST['number']))) {
	$body .= '<p><strong>number:</strong>'.$_POST['number'].'</p>';
}

if(trim(!empty($_POST['service']))) {
	$body .= '<p><strong>service:</strong>'.$_POST['service'].'</p>';
}

if(trim(!empty($_POST['desc']))) {
	$body .= '<p><strong>desc:</strong>'.$_POST['desc'].'</p>';
}


$mail->Body = $body;

// send

if(!$mail->send()) {
	$message = 'Ошибка!';
} else {
	$message = 'Данные отправлены!';
}

$response = ['message' => $message];

header('Content-type: aplication/json');

echo json_encode($response);