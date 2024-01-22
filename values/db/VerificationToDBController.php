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
$verifiedGameID = $_POST['verifiedGameID'];

// Aktualizuj tabele niezweryfikowane w bazie danych
//$sql1 = "DELETE FROM niezweryfikowane WHERE ID=$verifiedGameID";
//$result1 = $conn->query($sql1);

// Aktualizuj tabele nowosci w bazie danych
$sql = "UPDATE niezweryfikowane SET zweryfikowane = 1 WHERE ID = $verifiedGameID";
$result = $conn->query($sql);

// Zamknięcie połączenia z bazą danych
$conn->close();


