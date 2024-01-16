<?php
$servername = "localhost";
$username = "root";
$password = "root";
$dbname = "";
if (!isset($conn)) {
    // Połączenie z bazą danych
    $conn = new mysqli($servername, $username, $password, $dbname);

    // Sprawdzenie połączenia
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }
}

