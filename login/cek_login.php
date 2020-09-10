<?php
// mengaktifkan session php
session_start();
 
// menghubungkan dengan koneksi
include "config.php";
 
// menangkap data yang dikirim dari form
//$username = $_POST['username'];
//$password = md5($_POST['password']);
$username = "admin@ps.com";
$password = "21232f297a57a5a743894a0e4a801fc3";

 
// menyeleksi data admin dengan username dan password yang sesuai
$data = mysqli_query($conn,"SELECT FROM `core_users` WHERE `user_email`='$username' AND `user_password`='$password'");
 
 
// menghitung jumlah data yang ditemukan
$cek = mysqli_num_rows($data);
 
if($cek > 0){
	$_SESSION['username'] = $username;
	$_SESSION['status'] = "login";
	header("location:login.php");
}else{
	header("location:index.php?pesan=gagal");
}
?>