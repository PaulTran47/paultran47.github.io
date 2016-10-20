<?php

	$emailTo = "email@sitename.com"; // Enter your email for feedbacks here 
	
	$headers = "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html; charset=utf-8\r\n";
	$headers .= "From: ".$_POST['rsEmail']."\r\n";
	
	if (!isset($_POST['rsSubject'])) {
		$subject = "Contact form message"; // Enter your subject here
	} else {
		$subject = $_POST['rsSubject'];
	}
	
	reset($_POST);
	
	$body = "";
	$body .= "<p><b>Name: </b>".$_POST['rsName']."</p>";
	$body .= "<p><b>Email: </b>".$_POST['rsEmail']."</p>";
	$body .= "<p><b>Subject: </b>".$subject."</p>";
	$body .= "<p><b>Message: </b>".$_POST['rsMessage']."</p>";	
	
	if( mail($emailTo, $subject, $body, $headers) ){
		$mail_sent = true;
	} else {
		$mail_sent = false;
	}	
	if(!isset($resp)){
		echo json_encode($mail_sent);
	}
?>