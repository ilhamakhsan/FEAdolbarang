<?php 
session_start();
$id_produk=$_GET["id"];
unset($_SESSION ["chart"][$id_produk]);

echo "<script>alert('produk telah terhapus'); </script>";
echo "<script>location = 'keranjang.php'; </script>";
?>