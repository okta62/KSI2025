<?php
$koneksi = mysqli_connect('localhost', 'root', '', 'db_ksi2025');
if(!$koneksi){
    die('Koneksi gagal: ' . mysqli_connect_error());
}
echo 'Koneksi Berhasil!';
?>
