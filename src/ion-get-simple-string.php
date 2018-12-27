<?php
header("Access-Control-Allow-Origin: *");

$result = (object)array('return_message' => 'See you later my friend!!!!'); //Associative array
echo json_encode($result);
?>
