<?php

require 'vender/autoload.php';

$mail = new PHPMailer(true);

$name = $_POST['name'];
$email = $_POST['email'];
$comment = $_POST['comment'];

$response = [
    'status' => 'warning',
    'message' => 'Sorry, we are unable to send your comment at this moment, please comment again later!'
];

header('content-type: application/json');

try {
    //Server settings
    $mail->SMTPDebug = 2;                      //Enable verbose debug output
    $mail->isSMTP();                                            //Send using SMTP
    $mail->Host       = 'smtp-relay.sendinblue.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'ghliarsassoc@gmail.com';                     //SMTP username
    $mail->Password   = 'hIfprM6FWAjDTcCy';                               //SMTP password
    $mail->SMTPSecure = 'tls';            //Enable implicit TLS encryption
    $mail->Port       = 587;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('ghliarsassoc@gmail.com','Malik Mustapha');
    $mail->addAddress('maliksagely@gmail.com');

    //Content
    $mail->isHTML(true);  
    
    
    //Set email format to HTML
    $mail->Subject = "A comment from $name";
    $mail->Body    = '<div style="background-color:#f2f2f2;padding:20px;">
    <h3 style="color:#333;"> name:  '.$name . ', email: ' . $email .' ,</h3>
    <p>'. $comment .'</p>
    <p>Thanks,</p>

  </div>';


    if($mail->send());
        $response = [
            'status' => 'success',
            'message' => 'Comment sent successfully, your opinion is valued.'
        ];

} catch (Exception $e) {
    $msg = "< div class='alert alert-danger'>Message could not be sent. Mailer Error: {$mail->ErrorInfo}</div>";
    echo json_encode($response);
   
}


echo json_encode($response);
