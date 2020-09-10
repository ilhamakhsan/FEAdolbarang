<?php
include_once("config.php")
?>

<?php
$username   = $_POST['email'];
$pass       = md5($_POST['Password']);



$user = mysqli_query($conn,"select * from core_users where user_email='$username' and user_password='$pass'");
$chek = mysqli_num_rows($user);
if($chek>0)
{
    header("location:index.php");
    session_start();
        $_SESSION['username'] = $username;
   
}else
{
    
    echo "<script>alert('password/username salah'); </script>";
    echo "<script>location='index.php'; </script>";
}
?>