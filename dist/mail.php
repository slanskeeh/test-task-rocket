<?php
    $to = "rbru-metrika@yandex.ru"; // емайл получателя данных из формы
    $tema = "Форма заявки тестового задания"; // тема полученного емайла
    $message = "ФИО: ".$_POST['name']."<br>";//присвоить переменной значение, полученное из формы name=name
    $message .= "E-mail: ".$_POST['email']."<br>"; //полученное из формы name=email
    $message .= "Сообщение: ".$_POST['letter']."<br>"; //полученное из формы name=message
    $headers = 'MIME-Version: 1.0' . "\r\n"; // заголовок соответствует формату плюс символ перевода строки
    $headers .= 'Content-type: text/html; charset=utf-8' . "\r\n"; // указывает на тип посылаемого контента
    mail($to, $tema, $message, $headers); //отправляет получателю на емайл значения переменных
?>