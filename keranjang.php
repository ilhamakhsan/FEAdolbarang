<?php
include_once("config.php");
session_start();
//echo "<pre>";
//print_r($_SESSION['chart']);
//print_r($_SESSION['berat']);
//echo "</pre>";
    if (!isset($_SESSION['username'])){
      echo "<script>alert('silahkan login'); </script>";
        echo "<script>location='index.php'; </script>";
    }
if(empty($_SESSION['chart']) OR !isset($_SESSION['chart']))
{
    echo "<script>alert('silahkan belanja'); </script>";
    echo "<script>location='index.php'; </script>";
    
}

?>

<!DOCTYPE html>
<html >
<head>
    <title>Keranjang belanja</title>
    
    <link rel="stylesheet" href="css/main-comp.min734e.css?v=0.5.96693">
    <link rel="stylesheet" href="css/home-comp.min734e.css?v=0.5.96693">
</head>
<body>
    <!-- navbar-->
    <div id="header-new-buffer" style="display: none; width: 100%; background: #00a79d"></div>
      <header id="header-new">
         <div id="before-header-top">
            <div class="container">
               <div class="row">
                  <div class="col-xs-12 hidden-xs">
                     <a target="_blank" rel="noopener" href="http:#" class="small-link"><span id="android-icon" style="margin-right: 7px" class="fa fa-play"></span>Android</a>
                     <!--div class="pull-left"><a href="index.html" class="small-link">Jual Beli</a></div-->
                     <div class="clearfix"></div>
                  </div>
               </div>
            </div>
         </div>
         <div id="header-top" class="container">
            <div class="row">
               <div style="float: left; margin-left: 15px" class="visible-xs-block">
                  <div id="hamburger-wrapper"><i id="hamburger-button" class="pr-bars"></i></div>
               </div>
               <div id="logo-wrapper" class="col-sm-2 col-md-3 col-lg-3"><a href="index.php"><img id="logo" src="assets/img/logo/adolbarang.png" alt="Logo Prelo"></a></div>
               <div id="icon-wrapper-small" style="float: right; margin-right: 0px" class="visible-xs-block align-right">
                  <div id="header-cart-wrapper">
                     <i id="header-search-button" class="header-icon-small pr-search"></i>
                     <i id="header-notif-button" class="header-icon-small pr-bell">
                        <div class="notif-count small">0</div>
                     </i>
                     <a id="header-cart-button" href="keranjang.php" style="color: #fff" class="header-icon-small pr-shopping-cart">
                        <div class="notif-count small">0</div>
                     </a>
                  </div>
               </div>
               <div class="hidden-xs col-sm-10 col-md-9 col-lg-9 like-row no-padding-right">
                  <div id="nav-wrapper" style="position: relative">
                     <div id="logged-in" style="font-weight: 400; position: relative; padding: 0 10px; margin-left: 10px; width: 184.39px">
                        <div id="logged-in-text" class="new-logged-in"><img src="https://s3-ap-southeast-1.amazonaws.com/prelo/images/users/thumbnail/default.png"><span><?php echo $_SESSION['username'];  ?></span><i style="margin-left: 7px" class="fa fa-caret-down"></i></div>
                        <ul id="logged-in-floatee" style="text-align: left; line-height: initial; width: 184.39px">
                           <li><a href="logout.php"id="logout-header" class="logout"><i class="fa"></i>Logout</a></li>
                        </ul>
                     </div>
                        <div id="icon-wrapper" style="margin-left: 0; height: 30px;">
                        <div id="notif" style="float: left; height: 30px; padding-left: 1px">
                           <a style="font-size: 20px; padding: 0 5px 0 10px; display: block; box-sizing: content-box; position: relative" class="fa fa-bell">
                              <div class="notif-count">0</div>
                           </a>
                        </div>
                        <div id="cart" style="float: left; height: 30px; padding-left: 1px">
                           <a href="keranjang.php" style="font-size: 22px; padding: 0 5px 0 0; display: block; box-sizing: content-box; position: relative" class="fa fa-shopping-cart">
                              <div class="notif-count">0</div>
                           </a>
                        </div>
                        <div id="jualbar" style="float: left; height: 30px; padding-left: 1px"><a data-toggle="modal" data-target="#login-modal" style="font-size: 22px; padding: 0 0 0 10px; display: block; box-sizing: content-box; position: relative" class="fa fa-camera"></a></div>
                     </div>
                     <div id="search-wrapper">
                        
                     <form action="" method="post">
                     <input type="text" name="inputan_pencarian" > <i class="fa fa-search search-icon"></i>
                     <input type="submit" style="display: none" name="cari" value="cari">
                     </form>
                     </div>
                     <div id="suggestion" style="display: none;" class="suggestion-wrapper">
                        <div style="display: none;" class="suggestion-history">
                           <div class="suggestion-label">Riwayat Pencarian<span style="float: right; cursor: pointer;" class="remove-history">Hapus Riwayat</span></div>
                           <div class="suggestion-content"><i class="fa fa-circle-o-notch fa-spin"></i></div>
                        </div>
                        <div class="suggestion-popular">
                           <div class="suggestion-label">Pencarian Populer</div>
                           <div class="suggestion-content"><i class="fa fa-circle-o-notch fa-spin"></i></div>
                        </div>
                        <div class="suggestion-category">
                           <div class="suggestion-label">Kategori</div>
                           <div class="suggestion-content"><i class="fa fa-circle-o-notch fa-spin"></i></div>
                        </div>
                        <div class="suggestion-keyword">
                           <div class="suggestion-label">Kata Kunci</div>
                           <div class="suggestion-content"><i class="fa fa-circle-o-notch fa-spin"></i></div>
                        </div>
                        <div style="display: none" class="suggestion-brands">
                           <div class="suggestion-label">Merek</div>
                           <div class="suggestion-content"><i class="fa fa-circle-o-notch fa-spin"></i></div>
                        </div>
                        <div style="display: none" class="suggestion-user">
                           <div class="suggestion-label">Pengguna</div>
                           <div class="suggestion-content"><i class="fa fa-circle-o-notch fa-spin"></i></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div id="header-after-top" class="container">
            <div class="row">
               <div class="col-sm-12 hidden-xs">
                  <ul style="white-space: nowrap; overflow-x: visible;" class="category-nav">
                  <?php $getkategori = $conn->query ("SELECT * FROM mk_categories"); ?>
                        <?php while ($kategori = $getkategori->fetch_assoc()){ ?>
                     <li>
                        <a href="#"><?php echo $kategori['name']; ?></a>
                     </li>
                     <?php }?>
                         <!-- -->
                  </ul>
               </div>
            </div>
         </div>
      </header>
<section class="konten">
    <div class ="container">
    <h1>Keranjang Belanja</h1>
    <hr>
        <table class="table table-bordered">
         <thead>
            <tr>
            <th>NO</th>
            <th>Produk</th>
            <th>Harga</th>
            <th>Berat</th>
            <th>Jumlah</th>
            <th>Sub Harga</th>
            <th></th>
            </tr>
        </thead>
        <tbody>
            <?php $nomor=1; 
                  $i=0;
            ?>
            <?php foreach($_SESSION['chart'] as $id_produk=>$jumlah): ?>
            <!--menampilkan produk berdasarkan id produk-->
            <?php
            //$id_produkk='prd00e16d41d524dcd1d7544fcae0d49260';
            $ambil = $conn->query("SELECT * FROM `mk_products` WHERE `id` = '$id_produk';");
            $pecah = $ambil ->fetch_assoc();
            $subharga = $pecah["unit_price"]*$jumlah;
            $nama_produk =$pecah['name'];
            $stock = $pecah["stock"];
            $weigth = $pecah["weigth"];
            if($jumlah>$stock){
               $_SESSION['chart'][$id_produk]=$stock;
               echo "<script>alert('stok $nama_produk tersisa $stock');</script>";
               echo "<script>location.reload(); </script>";
            }
          
            ?>
            <tr>
                <td><?php echo $nomor; ?></td>
                <td><?php echo $nama_produk;?></td>
                <td>Rp. <?php echo number_format ($pecah["unit_price"]);?></td>
                <td><?php echo $weigth*$jumlah/1000?> KG</td>
                <td><?php echo $jumlah; ?></td>
                <td>Rp. <?php echo number_format ($subharga); ?></td>
                <td>
                    <a href="hapuskeranjang.php?id=<?php echo $id_produk ?>" class="btn btn-danger btn-xs">Hapus</a>
                </td>
            </tr>
            <?php $nomor++;

            
            ?>
            
            


            <?php endforeach ?>
                      
            
        </tbody>
        </table>
        <a href="index.php" class="btn btn-default">lanjutkan belanja</a>
        <a href="checkout.php" class="btn btn-primary">Checkout</a>
    </div>
</section>
</body>
</html>