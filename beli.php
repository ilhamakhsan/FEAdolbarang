<?php
session_start();
include_once("config.php");
//mendapat id produk
$id_produk = $_GET['id'];

//jika sudah ada produk itu, maka produk jumlahnya +1
if(isset($_SESSION['chart'][$id_produk]))
{
    $_SESSION['chart'][$id_produk]+=1;
}
//selain itu (belum ada di keranjang), maka produk dianggap dibeli 1
else
{
    $_SESSION['chart'][$id_produk]=1;
}


//menghitung berat
foreach($_SESSION['chart'] as $id_produk=>$jumlah): 
    //menampilkan produk berdasarkan id produk-->
    
    //$id_produkk='prd00e16d41d524dcd1d7544fcae0d49260';
    $ambil = $conn->query("SELECT * FROM `mk_products` WHERE `id` = '$id_produk';");
    $pecah = $ambil ->fetch_assoc();
    $weigth = $pecah["weigth"];
 endforeach ;

 if(isset($_SESSION['berat'][$weigth]))
 {
    $_SESSION['berat'][$weigth]+=1;
 }
//selain itu (belum ada di keranjang), maka produk dianggap dibeli 1
    else
      {
       $_SESSION['berat'][$weigth]=1;
      }

            


//larikan ke keranjang
echo "<script>alert('produk telah masuk ke keranjang belanja');</script>";
echo "<script>location ='keranjang.php';</script>";
?>
