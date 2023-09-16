<?php
    $fio = $_POST['name'];
    $email = $_POST['email'];
    $letter = $_POST['letter'];
    $fio = htmlspecialchars($fio);
    $email = htmlspecialchars($email);
    $letter = htmlspecialchars($letter);
    $fio = urldecode($fio);
    $email = urldecode($email);
    $letter = urldecode($letter);
    $fio = trim($fio);
    $email = trim($email);
    $letter = trim($letter);
    if (mail("rbru-metrika@yandex.ru", "Форма заявки с тестового задания", "ФИО:".$fio.". E-mail: ".$email."Текст письма: ".$letter ,"From: maximgerasimenko@bk.ru \r\n"))
    {     echo "сообщение успешно отправлено";
    } else {
        echo "при отправке сообщения возникли ошибки";
    }
?>