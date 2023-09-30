<?php 

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    
    $someField = $_POST["phone"];

    echo json_encode(["status" => "success", "message" => "Success"]);
} else {
    echo json_encode(["status" => "error", "message" => "Method not allowed."]);
    http_response_code(405);
}
?>


<!-- echo $_SERVER[‘REMOTE_ADDR‘]; -->