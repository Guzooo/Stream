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

$sql3 = "
    UPDATE user
    SET downloaded_games = (
        SELECT COUNT(*)
        FROM gry
        WHERE gry.userID = user.user_id AND gry.downloaded = 1
    )
";
$result3 = $conn->query($sql3);



$userData = array(); // Utwórz tablicę na dane

if ($result3->num_rows > 0) {
    while ($row = $result3->fetch_assoc()) {
        $userData[] = $row; // Dodaj dane do tablicy
    }
}

$sql2 = "
    UPDATE user
    SET games_count = (
        SELECT COUNT(*)
        FROM gry
        WHERE gry.userID = user.user_id
    )
";
$result2 = $conn->query($sql2);



$userData = array(); // Utwórz tablicę na dane

if ($result2->num_rows > 0) {
    while ($row = $result2->fetch_assoc()) {
        $userData[] = $row; // Dodaj dane do tablicy
    }
}

$sql = "SELECT * FROM user";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    while ($row = $result->fetch_assoc()) {
        $userData[] = $row; // Dodaj dane do tablicy
    }
}

// Zamknięcie połączenia z bazą danych
$conn->close();

// Wyślij dane do JavaScript w formie JSON
file_put_contents('../code/page_profile.js', 'const userData = ' . json_encode($userData) . ';');

?>
