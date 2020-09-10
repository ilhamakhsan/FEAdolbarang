<?php
include_once("config.php");
session_start();
$id_produk = $_GET['id'];
//echo $id_produk;
?>

<!DOCTYPE html>
<html >
<head>
    <title>Detail Produk</title>
    
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
      <div id="header-bumper"></div>
      <section id="main-section" class="section">
         <div class="container">
            <div id="product-wrapper">
               <div class="row">
                  <div class="col-md-6">
                     <div id="main-image-wrapper">
                     <style>
                .imgku {
                    width: 300px;
                    height:200px;
                    padding: 5px;
                }</style>

                <?php 
                  $sql = $conn->query("SELECT mk_products.name, mk_products.stock, mk_products.id, mk_products.unit_price, mk_products.description, mk_products.stock, mk_products.weigth,  core_images.img_path
                  FROM mk_products INNER JOIN core_images ON mk_products.id = core_images.img_parent_id WHERE mk_products.id='$id_produk'") or die (mysql_error());

               while($tampilproduk = $sql->fetch_assoc()){ ?>
                           <?php $stock_barang =$tampilproduk['stock'];
                           ?>
                     <img class="imgku" src="../backend/admin/uploads/<?php echo $tampilproduk['img_path']; ?>" alt="">
                     </div>
                  </div>
                  <div class="col-md-6 product-description">
				  <!-- deskripsi -->
                     <div class="card like-row no-margin-right">
                        <h1 class="product-title first-heading"><?php echo $tampilproduk['name']; ?></h1>
                        <h4><?php echo $tampilproduk['description']; ?>.</h4>
                        <h5> Stock = <?php echo $tampilproduk['stock']; ?>.</h5>
                        <h5>Weight = <?php echo $tampilproduk['weigth']; ?> gram.</h5>
                        <h3>Rp. <?php echo  number_format($tampilproduk['unit_price']); ?> -,</h3>
                       
                        <div id="action-primary-wrapper" class="clearfix">
                        <a href="beli.php?id=<?php echo $tampilproduk['id'];?>" class="btn btn-primary">BELI</a>
               <?php   }?>
					<!--	<button id="chat-button"  class="btn button"><i class="fa fa-comment-o"></i>Chat</button></div> -->
                      <!--  -->
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div id="review-modal" role="dialog" class="modal-multi modal fade">
               <div class="modal-dialog">
                  <div class="modal-content">
                     <div class="clearfix">
                        <div class="modal-header">
                           <button type="button" data-dismiss="modal" style="" class="close">×</button>
                           <h3 id="modal-title" style="margin: 0; font-size: 1.6rem">Review</h3>
                        </div>
                        <div class="modal-body">
                           <ul role="tablist" style="margin-bottom: 0" class="nav nav-tabs">
                              <li id="list-notif-seller-tab" style="width: 50%" class="active"><a href="#list-notif-seller" role="tab" data-toggle="tab">Sebagai Penjual</a></li>
                              <li id="list-notif-buyer-tab" style="width: 50%"><a href="#list-notif-buyer" role="tab" data-toggle="tab">Sebagai Pembeli</a></li>
                           </ul>
                           <div style="max-height: calc(100vh - 43px - 48px)" class="tab-content">
                              <div id="list-notif-seller" class="tab-pane active">
                                 <div style="padding: 20px; display: block; text-align: center" class="loading-wrapper"><i class="fa fa-circle-o-notch fa-spin"></i></div>
                              </div>
                              <div id="list-notif-buyer" class="tab-pane">
                                 <div style="padding: 20px; display: block; text-align: center" class="loading-wrapper"><i class="fa fa-circle-o-notch fa-spin"></i></div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div id="multi-fungsi-modal" role="dialog" class="modal-multi modal fade">
               <div class="modal-dialog">
                  <div class="modal-content">
                     <div class="clearfix">
                        <div class="modal-header">
                           <button type="button" data-dismiss="modal" class="close">&times;</button>
                           <h3 id="modal-title">Reviews</h3>
                        </div>
                        <div style="" class="modal-body">
                           <div id="modal-body-title"></div>
                           <div id="modal-body-inner"><i style="padding: 20px" class="fa fa-circle-o-notch fa-spin"></i></div>
                        </div>
                        <div id="modal-footer-wrapper"></div>
                     </div>
                  </div>
               </div>
            </div>
            <div id="image-zoom-modal" role="dialog" class="modal-multi modal fade">
               <div class="modal-dialog">
                  <div class="modal-content">
                     <div style="position: relative" class="clearfix">
                        <div style="position: absolute; z-index: 51; top: 0; left: 0; right: 0; border: none" class="modal-header">
                           <button type="button" data-dismiss="modal" style="color: #fff; opacity: 1" class="close">&times;</button>
                           <div id="image-title" style="color: #fff; margin: 0; font-size: 1.6rem; font-weight: 400;">Zoom</div>
                        </div>
                        <div class="modal-body">
                           <div id="image-image"></div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
            <div id="added-to-cart-modal" role="dialog" class="modal-multi modal fade">
               <div class="modal-dialog">
                  <div class="modal-content">
                     <div class="clearfix">
                        <div class="modal-header">
                           <button type="button" data-dismiss="modal" class="close">&times;</button>
                           <div style="font-weight: 500; font-size: 1.3rem" class="modal-title"><i style="margin-right: 7px" class="fa fa-shopping-cart"></i>Belanjaan Kamu <span id="cart-count"></span></div>
                        </div>
                        <div style="" class="modal-body">
                           <div class="product-success">Barang berhasil ditambahkan ke belanjaan kamu</div>
                           <div class="the-product">
                              <div style="background-image:url('https://s3-ap-southeast-1.amazonaws.com/prelo/images/resized/512x512/products/5ec7457d775f640149a4a640/sepeda-bayi-2c80ecbba946-9sBLdu-1-1590117757438.jpg')" alt="Sepeda Bayi" image="https://s3-ap-southeast-1.amazonaws.com/prelo/images/resized/base/products/5ec7457d775f640149a4a640/sepeda-bayi-2c80ecbba946-9sBLdu-1-1590117757438.jpg" class="product-image"></div>
                              <div class="product-details">
                                 <div class="product-name">Sepeda Bayi</div>
                                 <div class="price-wrapper"><span class="price-original">Rp 350.000</span><span class="price-now">Rp 175.000</span></div>
                              </div>
                           </div>
                        </div>
                        <div class="modal-action"><button id="shopping-button" type="button" data-dismiss="modal" style="width: 50%" class="btn button button-primary">Lihat Barang Lain</button><button id="checkout-button" type="submit" name="submit" style="width: 50%" class="btn button button-primary">Bayar Sekarang</button></div>
                     </div>
                  </div>
               </div>
            </div>
            <div style="display:none" class="rich-snippet">
            </div>
         </div>
      </section>
      <footer id="footer" class="default-footer">
         <div class="container">
            <div class="row">
               <div class="col-sm-12">
                  <div id="socmed-heading">Follow Us</div>
                  <div id="socmed-wrapper">
                     <div class="socmed-second-wrapper">
                        <div class="socmed-item"><a href="https://www.facebook.com/" target="_blank" rel="noopener"><span class="fa fa-facebook"></span></a></div>
                        <div class="socmed-item"><a href="https://twitter.com" target="_blank" rel="noopener"><span class="fa fa-twitter"></span></a></div>
                        <div class="socmed-item"><a href="https://plus.google.com/" target="_blank" rel="noopener"><span class="fa fa-google-plus"></span></a></div>
                     </div>
                     <div class="socmed-second-wrapper">
                        <div class="socmed-item"><a href="https://instagram.com/" target="_blank" rel="noopener"><span class="fa fa-instagram"></span></a></div>
                        <div class="socmed-item"><a href="https://www.youtube.com/" target="_blank" rel="noopener"><span class="fa fa-youtube-play"></span></a></div>
                        <div class="socmed-item"><a href="#" target="_blank" rel="noopener"><span class="fa fa-envelope"></span></a></div>
                     </div>
                  </div>
               </div>
            </div>
            <div class="row">
               <div class="col-sm-12">
                  <div style="margin-bottom: 8px" class="footer-text">
                     Made with  
                     <div class="fa fa-heart"></div>
                     from Semarang
                  </div>
                  <div class="footer-text">AdolBarang.Id</div>
               </div>
            </div>
         </div>
      </footer>
</body>
</html>