<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = htmlspecialchars($_POST["name"]);
  $email = htmlspecialchars($_POST["email"]);
  $mobile = htmlspecialchars($_POST["mobile"]);
  $message = htmlspecialchars($_POST["message"]);

  echo "<h2>Thank you, $name!</h2>";
  echo "<p>Your details have been received successfully.</p>";
  echo "<p>Email: $email</p>";
  echo "<p>Mobile: $mobile</p>";
  echo "<p>Message: $message</p>";
}
?>
