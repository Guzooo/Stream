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
$tworcaID = $_POST['tworcaID'];
$gameName = $_POST['gameName'];

// Aktualizuj tabele niezweryfikowane w bazie danych
$sql1 = "DELETE FROM niezweryfikowane WHERE ID=$verifiedGameID";
$result1 = $conn->query($sql1);

// Aktualizuj tabele nowosci w bazie danych
$sql2 = "INSERT INTO nowosci(ID, tworcaID, gameName) VALUES ($verifiedGameID, $tworcaID, $gameName)";
$result2 = $conn->query($sql2);

// Zamknięcie połączenia z bazą danych
$conn->close();

?>
