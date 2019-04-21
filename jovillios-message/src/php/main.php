<html>
<head>
	<meta charset="utf-8">
	<title>Test PhP</title>
</head>
<body>

	<h2>Message envoyé</h2>

	<?php

		$message = $_POST['message'];
		$clef = $_POST['clef'];

		echo "Le message : '$message' a été chiffré avec la clé : '$clef' </br>";

		$crypt = "";

		for($i = 0; $i < strlen($message); $i++) {
			$char = $message[$i];

			$numClef = $clef[$i%strlen($clef)];
			for ($j = 0; $j < $numClef; $j ++) {
				if($char == 'z') {
					$char = 'a';
				}
				elseif($char == 'Z') {
					$char = 'A';
				}
				elseif($char == ' ') {
					$char = ' ';
				}
				elseif($char == '9') {
					$char = '0';
				}
				else {
					++$char;
				}
			}
			$crypt .= "$char";
		}
		echo "</br>";
		echo "Message crypté : '$crypt'";

		//echo ++$message[0]+;

		/*
		$usersName = $_POST['username'];
		$streetAddress = $_POST['streetaddress'];
		$cityAddress = $_POST['cityaddress'];

		define('PI',3.1415925);

		$bestFriends = array('Joy', 'Willow', 'Ivy');

		$bestFriends[4] = 'Steve';

		$customer = array('Name'=>$usersName, 'Street'=>$streetAddress, 'City'=>$cityAddress);

		$randString = "   Random String            ";

		echo "The randomString is $randString </br>";
		printf("The randomString is %s </br>", $randString);

		$bestFriends = $bestFriends + $customer;



		echo "</br>";

		echo $usersName . "</br>";
		echo $streetAddress . "</br>";
		echo $cityAddress . "</br>";

		$str = <<<EOD
		The customers name is
		$usersName and they
		live at $streetAddress in $cityAddress.</br>
		EOD;

		echo $str;
		*/
	?>

</body>
</html>
