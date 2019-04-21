<html>
<head>
	<meta charset="utf-8">
	<title>Test PhP</title>
</head>
<body>

	<h2>Nouveau message</h2>

	<?php

		$message = $_POST['message'];
		$clef = $_POST['clef'];

		echo "Le message : '$message' a été déchiffré avec la clé : '$clef' </br>";

		$decrypt = "";

		for($i = 0; $i < strlen($message); $i++) {
			$char = $message[$i];
			$numClef = $clef[$i%strlen($clef)];
      if($char == '0' || $char == '1' || $char == '2' || $char == '3' || $char == '4' || $char == '5' || $char == '6' || $char == '7' || $char == '8' || $char == '9') {
        // On teste si il s'agit d'un chiffre car sinon le modulo change (10 ou 26)
        $max = 10;
      }
      else {
        $max = 26;
      }
			for ($j = 0; $j < $max-$numClef; $j ++) {
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
			$decrypt .= "$char";
		}
		echo "</br>";
		echo "Message déchiffré : '$decrypt'";

	?>

</body>
</html>
