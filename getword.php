<?php

  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "hangman";

  try {

    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    $statement = $conn->prepare("SELECT word FROM wordbank ORDER BY RAND() DESC LIMIT 1");
    $statement->execute();

    $rows = $statement->fetchAll();

    foreach ($rows as $row) {
      echo $row["word"];
    }

  } catch(PDOException $e) {
    echo "<p>" . $e->getMessage() . "</p>";
  }

?>
