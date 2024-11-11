<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Database connection credentials
$servername = "localhost";
$username = "root";
$password = "aggarwal";
$dbname = "bookingmeals_db";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Process form submission
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];
    $booking_date = $_POST['date'];
    $meal_plan = $_POST['meal-plan'];
    $dietary_preferences = $_POST['diet'];

    // Insert into database
    $sql = "INSERT INTO bookings (name, email, phone, booking_date, meal_plan, dietary_preferences)
            VALUES ('$name', '$email', '$phone', '$booking_date', '$meal_plan', '$dietary_preferences')";

    if ($conn->query($sql) === TRUE) {
        echo "New record created successfully";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
}

// Close connection
$conn->close();
?>
