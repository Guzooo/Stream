<?php
include 'db_conn.php'; // Załaduj plik z połączeniem do bazy danych
global $conn;
// TODO
// Tutaj powinno być wpisywanie do $userId wartości z ciasteczek

// Zapytanie do bazy danych
$result = $conn->query("SELECT * FROM gry WHERE userId = $userId");

// TODO
// Tutaj powinno być przetwarzanie wyników (może wpisywanie do tabeli właśnie idk)

$conn->close(); // Zamknij połączenie z bazą danych
