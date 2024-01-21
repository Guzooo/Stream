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

if (isset($_POST['action'])) {
    $action = $_POST['action'];

    // Wywołaj odpowiednią funkcję na podstawie parametru "action"
    switch ($action) {
        case 'getId':
            getId($conn);
            break;
        default:
            echo -1;
            break;
    }
}

$conn->close();
function getId($conn) {
    $userEmail = $_POST['email'];
    $userPassword = $_POST['password'];



    $sql = "SELECT id, user_type FROM users WHERE email == '$userEmail' AND password == '$userPassword'";
    $result = $conn->query($sql);
    $id = -1;
    $userType = -1;

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $id = $row['id'];
            $userType = $row['$user_type'];
        }
    }
    $arr = array('id' => $id, 'userType' => $userType);


    echo json_encode($arr);
}