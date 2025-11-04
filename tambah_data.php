<?php
include('koneksi.php');
if(isset($_POST['submit'])){
    $nama = $_POST['nama'];
    $query = "INSERT INTO mahasiswa (nama) VALUES ('$nama')";
    if(mysqli_query($koneksi, $query)){
        echo 'Data berhasil ditambahkan';
    } else {
        echo 'Gagal menambah data';
    }
}
?>
