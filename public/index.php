<?php
require "../.env";
// For LocalServer in Visual Code, change to the following path:
// require "./.env";

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");
header("Access-Control-Allow-Methods: OPTIONS,GET,POST,PUT,DELETE");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// echo "Hello world";

// Runs local server!
// php -S 127.0.0.1:8000 -t public​

$servername = getenv("SERVERNAME");
$username = getenv("USERNAME");
$password = getenv("PASSWORD");

$uri = parse_url($_SERVER["REQUEST_URI"], PHP_URL_PATH);
$uri = explode( "/", $uri );
// echo $uri[1];

$requestType = $_SERVER["REQUEST_METHOD"];
// echo $requestType;

try {
  $conn = new PDO("mysql:host=$servername;dbname=pipper", $username, $password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  // echo "Connected successfully! ";

} catch(PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}

if ($requestType == "GET") {
  $statement = $conn->query("SELECT * FROM pipper.pip INNER JOIN pipper.users ON pipper.users.username = pipper.pip.userpip ORDER BY timepip DESC;");
  $result = $statement->fetchAll(\PDO::FETCH_ASSOC);

  echo json_encode($result);
} elseif($requestType == "POST") {
    $input = (array) json_decode(file_get_contents("php://input"), TRUE);
    //echo $input['textpip'];
    $statement = "INSERT INTO pipper.pip (idpip, textpip, userpip, timepip, likespip) VALUES (default, :textpip, :username, :timepip, '0')";

    try {
      $statement = $conn->prepare($statement);
      $statement->execute(array("textpip" => $input['textpip'], "username" =>  $input['username'], "timepip" =>  $input['timepip']));

      echo json_encode("The pip has been send!");


    } catch(PDOException $e) {
      echo json_encode("The Pip has not been received!") . $e->getMessage();
    }

} elseif($requestType == "PUT") {
  // Used for Like PIP
  $input = (array) json_decode(file_get_contents("php://input"), TRUE);
  $statement = "UPDATE pipper.pip SET likespip =:likespip WHERE idpip =:idpip";

  try {
    $statement = $conn->prepare($statement);
    $statement->execute(array("likespip" => $input['likespip'], "idpip" => $input['idpip']));

    echo json_encode("Your like as been received!");

  } catch(PDOException $e) {
    echo json_encode("Something went wrong!") . $e->getMessage();
  }
}

?>