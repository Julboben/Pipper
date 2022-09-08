<?php
require "../.env";
// For LocalServer in Visual Code, change to the following path:
// require "./.env";

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

/* echo "Hello world"; */

// Runs local server!
// php -S 127.0.0.1:8000 -t public​

$servername = getenv("SERVERNAME");
$username = getenv("USERNAME");
$password = getenv("PASSWORD");

try {
  $conn = new PDO("mysql:host=$servername;dbname=pipper", $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  // echo "Connected successfully! ";

  $statement = $conn->query("SELECT * FROM pip;");
  $result = $statement->fetchAll(\PDO::FETCH_ASSOC);

  echo json_encode($result);  
} catch(PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}

?> 