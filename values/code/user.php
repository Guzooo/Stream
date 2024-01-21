<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "stream";
// Pobierz dane z bazy danych
$conn = new mysqli($servername, $username, $password, $dbname);

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$userEmail = $_POST['email'];
$userPassword = $_POST['password'];

$sql = "SELECT * FROM users";
$result = $conn->query($sql);

$arr = array();
if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $arr[] = $row;
    }
}

file_put_contents('user_db.js', 'const arr = ' . json_encode($arr) . ';');

$conn->close();
