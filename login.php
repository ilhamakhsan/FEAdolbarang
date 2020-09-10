<?php
// jk ada tombol simpan (tombol simpan ditekan)
if (isset($_POST["simpan"]))
{
    $email = $_POST["email"];
    $Password = $_POST["password"];
    // lakukan query ngecek akun di tabel pelanggan di db
    $ambil = $koneksi->query("SELECT FROM pelanggan
    WHERE email pelanggan= $email' AND password pelanggan=' $password ");
    // ngitung akun yg terambil

    $akunyangcocok = $ambil->num_rows;

    //jika 1 akun yang cocok, maka digunakan

if ($akunyangcocok==1) 
{

//anda sukses login
//mendapatkan akun dalam bentuk array
$akun = $ambil->fetch_assoc();
//simpan di session pelanggan
$_SESSION["pelanggan"] = $akun;
echo "<script>alert('anda sukses login');</script>"; 
echo "<script>location='chekout.php';</script>";

}
else{
// anda gagal login

echo "<script>alert('anda gagal login, periksa akun Anda');</script>"; 
echo "<script>location='login.php';</script>";

    }
}





?>