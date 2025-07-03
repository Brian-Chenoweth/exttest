<?php

session_start();
$formerrors = true;

if (($_SERVER['REQUEST_METHOD'] == 'POST') && (!empty($_POST['action']))):
	//if (!empty($_POST["website"])) die();
	if (isset($_POST['fname'])) { $fname = $_POST['fname']; }
	if (isset($_POST['lname'])) { $lname = $_POST['lname']; }
	if (isset($_POST['email'])) { $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL); }
	if (isset($_POST['ccomment'])) {
			$ccomment = filter_var($_POST['ccomment'], FILTER_SANITIZE_STRING, FILTER_FLAG_NO_ENCODE_QUOTES); 
	}
	
if (isset($_POST['captcha_challenge']) && $_POST['captcha_challenge'] == $_SESSION['captcha_text']) {
	
	//var_dump($_SESSION['captcha_text']);
	//exit();
	
if (isset($_POST['ajaxrequest'])) { $ajaxrequest = $_POST['ajaxrequest']; }

if ($ajaxrequest == 1)	{
	
	$formerrors = false;
	if(!empty($_POST['website'])) die(); // for honeypot

	//$date = date("Y-m-d H:i:s");
	
	$id = '';
	$sanifname = preg_replace('@[^0-9a-z\.\,]+@i', ' ', $fname);
	$sanilname = preg_replace('@[^0-9a-z\.\,]+@i', ' ', $lname);
	$saniname = $sanifname.' '.$sanilname;
	$sanimsg = $ccomment;
    
  	$formdata = array (
    'Name: ' => $saniname,
    'email: ' => $email,
    'Comments: ' => $sanimsg
  	);
	
// send routines
	
	if (!($formerrors)) :	

	// Send confirmation to customer if customer info was given.
	$cemail		=	 	$email;
	$csubject	=		"Copy of your contact form for Cal Poly EPaCE";
	$cbody = stripslashes (
		"Name: ".$saniname."\r\n" .
		"Email: ".$email."\r\n" .
		"Message: ".$sanimsg."\n");
	$creplyto 	= 	"From: extended@calpoly.edu \r\n";	
	if (!mail($cemail, $csubject, $cbody, $creplyto)) {
		$msg = "Problem occurred!";
	}
	

	// Send email to Office
	$to = "extended@calpoly.edu"; // Production
	//$to = "brbowers@calpoly.edu"; // Testing
	$subject = stripslashes("EPaCE Web Contact Form");

	// use wordwrap() if lines are longer than 70 characters
	$emsg = wordwrap($sanimsg,70);
	$body = "You have received a message from the web contact form.</br>";
	$body .= "This message comes from <strong>".$saniname. "</strong>.</br>".
		"Their information is below. </br>".
		"</br>" . 
		"Name: ".$saniname. "</br>".
		"Email: ".$email."</br>".
		"Message: ".$emsg."\n";

	$body = stripslashes($body);
	// Always set content-type when sending HTML email
	$headers = "MIME-Version: 1.0" . "\r\n";
	$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
	//$headers .= "From: igeeweb@calpoly.edu" . "\r\n";
	$headers .= "From: ".$cemail." \r\n"; // comes from customer
	// More headers
	if (mail($to, $subject, $body, $headers)) :
		$msg = "Thank you for contacting Cal Poly EPaCE. We will be in touch shortly.";
		if ( $ajaxrequest ) :
			echo "<script>$('#cform').before('<div id=\"formmessage\"><p>Thank you for contacting Cal Poly EPaCE. We will be in touch shortly.</p></div>'); $('#cform').hide();</script>";
		endif;		

	else:
		$msg = "Problem sending the message";
	endif; // mail form data
	
endif; // no form errors as jQuery validation is doing this
	
} else {
		$formerrors = true;
		echo '<p>There was a problem with your form submission.</p>';
	}
	
	
} else {
        echo '<p>You entered an incorrect Captcha.</p>';
    }
	
endif; //form submitted
?>