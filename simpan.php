<?php
include "koneksi.php";

$nama   = $_POST['nama'];
$alamat = $_POST['alamat'];
$no_hp  = $_POST['no_hp'];
$luas   = $_POST['luas_lahan'];

$stmt = $conn->prepare("INSERT INTO petani (nama, alamat, no_hp, luas_lahan) VALUES (?, ?, ?, ?)");
$stmt->bind_param("sssd", $nama, $alamat, $no_hp, $luas);
$stmt->execute();

header("Location: index.html");
?>