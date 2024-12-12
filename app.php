<?php
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
   
    $firstName = htmlspecialchars($_POST['firstName']);
    $lastName = htmlspecialchars($_POST['lastName']);
    $email = htmlspecialchars($_POST['email']);
    $password = htmlspecialchars($_POST['password']);

    /
    if (empty($firstName) || empty($lastName) || empty($email) || empty($password)) {
        echo 'Please fill in all fields.';
        exit;
    }

   
    echo "<strong>Thank you for registering, $firstName $lastName!</strong><br>";
    echo "Your email: $email<br>";
    echo "Your password: $password<br>";
}
?>
