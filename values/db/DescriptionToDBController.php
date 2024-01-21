<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "stream";

// Połączenie z bazą danych
$conn = new mysqli($servername, $username, $password, $dbname);

// Sprawdzenie połączenia
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Pobierz dane przesłane za pomocą AJAX
$newDescription = $_POST['description'];
$userId = $_POST['user_id'];

// Aktualizuj opis w bazie danych
$sql = "UPDATE user SET description='$newDescription' WHERE user_id=$userId";
$result = $conn->query($sql);

// Zamknięcie połączenia z bazą danych
$conn->close();

?>
