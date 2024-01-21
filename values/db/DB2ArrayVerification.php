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

$sql = "SELECT * FROM gry";
$result = $conn->query($sql);

$gamesData = array(); // Utwórz tablicę na dane

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $gamesData[] = $row; // Dodaj dane do tablicy
    }
}

$conn->close();

// Zapisz dane w pliku JavaScript
file_put_contents('../code/page_verification.js', 'const gamesData = ' . json_encode($gamesData) . ';');
?>
