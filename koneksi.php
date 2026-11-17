<?php
$conn = new mysqli("localhost", "root", "", "kopi");
if ($conn->connect_error) {
  die("Koneksi gagal: " . $conn->connect_error);
}
?>