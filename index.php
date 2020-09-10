<?php
include_once("config.php");
session_start();

?>
<!DOCTYPE html>
<html lang="id">
   <meta http-equiv="content-type" content="text/html;charset=utf-8" />
   <head>
      <script>var env = 'production';</script>
      <title>AdolBarang.Id</title>
      <link rel="shortcut icon" href="favicon.png" type="image/x-icon">
      <link rel="icon" sizes="192x192" href="assets/logo/adolbarang.png">
      <link rel="manifest" href="manifest.json">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes, maximum-scale=2.0">
      <meta name="theme-color" content="#00a090">
      <meta name="poptm" content="3261b257273bdd80ffc9104239481e97">
      <link rel="canonical" href="index.html">
      <meta name="google-site-verification" content="2MA-k2KbqFFWpGZ9S6jIvPh2RliBmQlneBbBeH1DwKA">
      <meta name="description" content="Temukan keuntungan, kemudahan, dan keamanan jual beli barang bekas berkualitas bersama AdolBarang AdolBarang - Jual beli barang bekas . Aman &amp; Mudah.">
      <meta property="og:site_name" content="AdolBarang">
      <meta property="og:title" content="AdolBarang.id -">
      <meta property="og:description" content="Temukan keuntungan, kemudahan, dan keamanan jual beli barang bekas berkualitas bersama AdolBarang.Adolbarang - Jual. Aman &amp; Mudah.">
      <meta property="og:url" content="https://AdolBarang.id/">
      <meta property="og:type" content="website">
      <meta property="og:image" content="assets/favicon.png">
      <meta property="fb:app_id" content="860723977338277">
      <meta property="og:image" content="assets/favicon.png">
      <meta name="robots" content="index,follow">
      <link rel="stylesheet" href="assets/css/main-comp.min734e.css?v=0.5.96693">
      <link rel="stylesheet" href="assets/css/home-comp.min734e.css?v=0.5.96693">
   </head>
   <body>
      <!--  --> 
      <div id="header-new-buffer" style="display: none; width: 100%; background: #00a79d"></div>
      <header id="header-new">
         <div id="before-header-top">
            <div class="container">
               <div class="row">
                  <div class="col-xs-12 hidden-xs">
                     <a target="_blank" rel="noopener" href="http:#" class="small-link"><span id="android-icon" style="margin-right: 7px" class="fa fa-play"></span>Android</a>
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
                     <div id="register-login-wrapper" style="float: right">
                        <a id="register-button" href="register.php" class="shadow-button">Register</a><a id="login-button" class="shadow-button">Login</a>
                        <div class="clearfix"></div>
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
                     <input type="text" name="inputan_pencarian" > <!--<i class="fa fa-search search-icon"></i>-->
                     <input type="submit" style="display: none" name="cari" value="cari">
                     </form>
                        <!--
                        <form  method="POST" action="" style="position: relative" class="search-form">
                           <input type="text"  name="inputan_pencarian" placeholder="Cari">
                           <i class="fa fa-search search-icon"></i> <input type="submit" name="cari" style="display: none" value="cari">
                           <div class="clearfix"></div>
                        </form>

                            -->
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
      <!--login-->
      <div id="login-modal" role="dialog" class="modal fade">
         <div class="modal-dialog">
            <div class="modal-content">
               <div class="clearfix">
                  <div class="modal-header">
                     <button type="button" data-dismiss="modal" style="" class="close">×</button>
                     <h3 style="margin: 0; font-size: 1.6rem">Login</h3>
                  </div>
                  <div style="position: relative" class="modal-body">
                     <div id="wrapper-gatau-apa">
                        <div style="margin: 0 0" class="row">
                           <form action="login_proses.php" method="post" style="padding-bottom: 0" class="form">
                              <div class="form-group"><label for="username_or_email">Username atau Email</label><input id="email" name="email" required placeholder="Masukan Username atau Email Kamu" autocapitalize="none" class="form-control"></div>
                              <div class="form-group"><label for="Password">Password</label><label id="forgot-password" data-toggle="modal" data-target="#forgot-password-modal">Lupa Password?</label><input  name="Password" type="password" required placeholder="Masukan Password Kamu" class="form-control"></div>
                              <button id="" type="submit" name="simpan" class="submit-login-button btn button button-primary">Login</button>
                              <div class="clearfix"></div>
                              <div>
                                 <div style="border-top: solid 1px #f5f5f5; height: 1px; margin: 7.5px 0"></div>
                                 <div style="border-top: solid 1px #f5f5f5; height: 1px; margin: 0 0 7.5px"></div>
                                 <div>
                                    <p style="text-align:center; margin-bottom: 0">Belum punya akun? <a href="register.php">Register</a></p>
                                 </div>
                              </div>
                           </form>
                           
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div id="forgot-password-modal" role="dialog" class="modal fade">
         <div class="modal-dialog">
            <div class="modal-content">
               <div class="clearfix">
                  <div style="font-size:" class="modal-body">
                     <button type="button" data-dismiss="modal" class="close">&times;</button>
                     <div class="clearfix"></div>
                     <div id="wrapper-gatau-apa">
                        <h3 style="margin-top: 20px" class="page-title">Lupa Password?</h3>
                        <h6>Kami akan mengirimkan instruksi pengubahan password ke email kamu</h6>
                        <form id="forgot-password-form" method="post" class="form">
                           <div class="form-group"><label for="email2">Email</label><input id="email2" name="email2" type="email" required placeholder="Masukkan Email Kamu" class="form-control"></div>
                           <button id="submit-forgot-password-button" type="submit" name="submit" class="btn button button-primary">Reset Password</button>
                           <div class="clearfix"></div>
                        </form>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
      <div id="shadow-layer"></div>
      <div id="mobile-nav" style="">
         <div id="nav-user-wrapper">
            <div id="nav-user-top">
               <a id="nav-login" data-toggle="modal" data-target="#login-modal">Login</a><a id="nav-register" href="register.php">Register</a>
               <div class="clearfix"></div>
            </div>
         </div>
         <div id="mobile-nav-items-outer" style="background: #fff">
            <div style="border-bottom: solid 1px #dadada; margin: 0 0 7px 0"></div>
            <ul id="mobile-nav-items">
               <li><a href="lacak-pesanan.html"><i class="fa fa-truck"></i>Lacak Pesanan</a></li>
               <li><a href="faq.html"><i class="pr-question-circle"></i>Bantuan</a></li>
            </ul>
            <div style="border-bottom: solid 1px #dadada; padding: 0 0 7px 0"></div>
         </div>
         <div id="nav-footer">
            <p>adolbarang.id</p>
         </div>
      </div>
      <div id="search-mobile-modal" role="dialog" class="modal fade from-right">
         <div style="margin: 0;" class="modal-dialog">
            <div style="height: 100vh; overflow: hidden" class="modal-content">
               <div class="clearfix">
                  <div style="position: relative; padding: 0; box-shadow: 0 1px 1px rgba(0,0,0,0.1); z-index: 1100" class="modal-header">
                     <i data-dismiss="modal" class="fa fa-chevron-left modal-close"></i>
                     <div id="mobile-search" class="modal-label">
                        <form id="search-mobile" method="POST" action=""><input id="search-box-mobile" name="name" placeholder="Cari Barang atau User" autofocus autocomplete="off"><input type="submit" style="display: none" autocomplete="off"><i class="pr-search search-icon"></i></form>
                     </div>
                  </div>
                  <div style="position: relative; padding: 0; overflow: auto; max-height: calc(100vh - 53px)" class="modal-body">
                     <div id="suggestion-mobile" style="display: none;" class="suggestion-wrapper">
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
      </div>
      <div id="header-bumper"></div>
      <div id="home-page-new">
         <section id="section-promo" data-anchor="promo" class="section">
            <div id="section-promo-wrapper" style="display:none">
               <div class="container">
                  <div class="row">
                     <div class="col-md-8">
                        <div class="promo-container">
                            <!--banner slide show 1-->
                            <?php $getbanner = $conn->query ("SELECT mk_products.name,mk_products.id, mk_products.unit_price, core_images.img_path
                              FROM mk_products INNER JOIN core_images ON mk_products.id = core_images.img_parent_id"); ?>
                            <?php while ($banner = $getbanner->fetch_assoc()){ ?>
                           <div class="col-promo-item">
                              <a href="#" style="background-image: url('../backend/admin/uploads/<?php echo $banner['img_path']; ?>'); border: solid 0px #f66a99; " name="Top Sellers Stuff" creative="banner1" class="promo-item">
                                 <div class="promo-item-overlay"></div>
                                 <div class="promo-item-wrapper">
                                    <div class="promo-title"><img src="../s3-ap-southeast-1.amazonaws.com/prelo/images/_assets/promo/Web-Header-Tematik-Top-Seller-June-Text.png" alt="Adolbarang.id"></div>
                                 </div>
                              </a>
                           </div>
                           <?php }?>

                        </div>
                     </div>
                     <!-- -->
                     <div style="padding: 0 0 0 10px" class="col-md-4 sqr-promo visible-lg visible-md">
                        <div class="row">
                           <div style="padding: 0 0 20px 0" class="col-xs-12 col-promo-item">
                              <a  href="#" style="background-image: url('../backend/admin/uploads/queen.png'); border: solid 0px #f66a99; background-size: contain; background-color: #e1e1e1" name="panduan pembeli" creative="banner1" class="promo-item">
                                 <div class="promo-item-overlay no-overlay"></div>
                              </a>
                           </div>
                        </div>
                        <div class="row">
                           <div style="padding: 0 0 20px 0" class="col-xs-12 col-promo-item">
                              <a href="#" style="background-image: url('../backend/admin/uploads/travelbag.png'); border: solid 0px #f66a99; background-size: contain; background-color: #e1e1e1" name="panduan pembeli" creative="banner1" class="promo-item">
                                 <div class="promo-item-overlay no-overlay"></div>
                              </a>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
        <!----------------Konten------------------->
		<section>
		<div class="col-sm-12">
			   <div class="row">
                           <div style="padding: 0 0 20px 0" class="col-xs-12 col">
			   </section>
         <section id="section-sewa" data-anchor="sewa" class="section">
            <div id="section-sewa-wrapper" class="outer-product-wrapper home">
               <div class="container">
                  <div class="row">
                     <div class="col-sm-12">               
         <section id="section-3" data-anchor="category" class="section">
            <div id="section-3-wrapper">
               <div class="container">
                  <div class="row">
                     <div class="col-sm-12">
                        <div class="section-heading">Barang Didol</div>
                     </div>
                  </div>
                  
                  <style>
                .imgku {
                    width: 300px;
                    height:200px;
                    padding: 5px;
                }
                </style>
                           <?php
                           $inputan_pencarian = @$_POST['inputan_pencarian'];
                           $cari = @$_POST['cari'];
                           if($cari){
                              if($inputan_pencarian != "") {
                                 $sql = $conn->query("SELECT  mk_products.name, mk_products.stock, mk_products.unit_price, mk_products.id, core_images.img_path 
                                             FROM mk_products INNER JOIN core_images ON mk_products.id = core_images.img_parent_id WHERE name LIKE '%$inputan_pencarian%'") or die (mysqli_error());
                              } else {
                                 $sql = $conn->query("SELECT  mk_products.name, mk_products.stock, mk_products.unit_price, mk_products.id, core_images.img_path
                                             FROM mk_products INNER JOIN core_images ON mk_products.id = core_images.img_parent_id") or die (mysql_error());
                              }
                           } else {
                              $sql = $conn->query("SELECT mk_products.name, mk_products.stock, mk_products.id, mk_products.unit_price, core_images.img_path
                                             FROM mk_products INNER JOIN core_images ON mk_products.id = core_images.img_parent_id") or die (mysql_error());
                           }                       

                           while($tampilproduk = $sql->fetch_assoc()){ ?>
                           <?php $stock_barang =$tampilproduk['stock'];
                           if($stock_barang>0){
                           ?>
                                    <div class="col-md-3">
                        <div class="thumbnail">
                        <a href="detail.php?id=<?php echo $tampilproduk['id'];?>"><img class="imgku" src="../backend/admin/uploads/<?php echo $tampilproduk['img_path']; ?>" alt=""></a>
                        <div class="caption">
                              <h3><?php echo $tampilproduk['name']; ?></h3>
                              <h5>Rp. <?php echo  number_format($tampilproduk['unit_price']); ?> -,</h5>
                              <a href="beli.php?id=<?php echo $tampilproduk['id'];?>" class="btn btn-primary">BELI</a>
                        </div>
                           </div>
                              </div>  
                  <?php  } } ?>

                     </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <section id="section-2" data-anchor="feature" class="section">
            <div id="section-2-wrapper">
               <div class="container">
                  <div class="row">
                     <div class="col-sm-4">
                        <div class="feature-wrapper">
                           <div id="feature-image-1" class="feature-image"><img src="assets/img/fitur/feature-1.png" alt="Fitur Aman"></div>
                           <h4 class="feature-title">Aman</h4>
                           <h5 class="feature-desc">Transaksi di Adolbarang dijamin aman 100% dengan sistem rekening bersama</h5>
                        </div>
                     </div>
                     <div class="col-sm-4">
                        <div class="feature-wrapper">
                           <div id="feature-image-2" class="feature-image"><img src="assets/img/fitur/feature-2.png" alt="Fitur Berkualitas No KW"></div>
                           <h4 class="feature-title">Berkualitas</h4>
                           <h5 class="feature-desc">Ribuan barang bekas berkualitas asli (no KW) ada di sini</h5>
                        </div>
                     </div>
                     <div class="col-sm-4">
                        <div class="feature-wrapper">
                           <div id="feature-image-3" class="feature-image"><img src="assets/img/fitur/feature-3.png" alt="Penuh Cerita"></div>
                           <h4 class="feature-title">Penuh Cerita</h4>
                           <h5 class="feature-desc">Selalu ada cerita khusus tersimpan dalam  setiap produk yang dijual di Adolbarang				</h5>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <!------------------------------------------->
         <!------------------------------------------->
         <section id="section-6" data-anchor="seo" class="section">
            <div id="section-6-wrapper">
               <div class="container">
                  <div class="row">
                     <div class="col-sm-12">
                        <h1 class="seo-title">Jual Beli Second Berkualitas.</h1>
                     </div>
                     <div class="col-sm-6">
                        <div class="seo-wrapper">
                           <p>Apakah kamu orang yang hobi berbelanja? Kamu begitu menyukai proses berbelanja sehingga banyak barang yang menumpuk di rumahmu? Kini kamu tidak perlu lagi khawatir dengan hobimu yang satu ini—khawatir akan kehabisan uang ataupun banyaknya tumpukan barang di rumah.</p>
                           <p>Jika kamu memiliki barang-barang second berkualitas yang tidak terpakai, kenapa tidak dijual di AdolBarang.Id saja? Bersama AdolBarang.Id kamu bisa membuat online shop second yang setiap harinya dapat dilihat oleh ribuan pembeli. Tumpukan barang belanjaanmu pun dapat disulap kembali menjadi uang. Banyak  sekali orang yang ingin beli barang second seperti milik kamu lho! Sayang bangetkan kalau barang-barang kamu yang tidak terpakai menjadi rusak seiring berjalannya waktu?</p>
                        </div>
                     </div>
                     <div class="col-sm-6">
                        <div class="seo-wrapper">
                           <p>Bukan hanya itu, bersama AdolBarang.Id kamu juga bisa lho membeli barang-barang branded berkualitas yang dipatok dengan harga murah, karena dijual bekas. Second murah bukan berarti jelek ya, tapi karena memang barang tersebut sudah tidak lagi terpakai oleh pemilik lamanya. Kalau ada yang lebih murah, original, dan berkualitas, kenapa pilih yang lain? Dijamin kamu tidak akan menyesal jika membelinya. </p>
                           <p>Bukan hanya kamu yang senang ketika menjual dan membeli barang bekas, tapi bumi juga senang lho. Bersama AdolBarang.Id kamu turut serta melakukan kampanye 3R (Reduce, Reuse, Recycle) demi mengurangi kerusakan bumi. Asik sekali, bukan? Tidak perlu ragu, ayo bergabung bersama AdolBarang.Id</p>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
         <!-- <iframe src="//asia.creativecdn.com/tags?id=pr_PLdUvqO56CLoOBZi7O7R_home" width="1" height="1" scrolling="no" frameBorder="0" style="display: none;"></iframe>-->
      </div>
      <div>
         <div class="fab-outer-wrapper">
            <a href="#" class="fab-wrapper">
               <div class="fab-icon"><i class="fa fa-camera"></i></div>
               <div class="fab-text">Jual</div>
            </a>

         </div>
      </div>
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
      <div id="footer-scripts">
         <script src="js/main-comp.min734e.js?v=0.5.96693"></script><script src="../cdn.onesignal.com/sdks/OneSignalSDK.js" async></script><script>var OneSignal = window.OneSignal || [];
            OneSignal.push(["init", {
            	appId: "7c52fd63-5d69-4a52-aafd-ca5682a41088",
            	autoRegister: false,
            	notifyButton: {	enable: false },
            	welcomeNotification: {
            		title: "Selamat datang di AdolBarang.Id!",
            		message: "Kamu telah mengaktifkan notifikasi promo dan diskon terbaru di AdolBArang Terima kasih :)"
            	}
            }]);
            
            OneSignal.push(["getNotificationPermission", function(permission) {
                logger.console("Site Notification Permission:", permission);
                // (Output) Site Notification Permission: default
                if (permission !== 'granted'){
            		OneSignal.registerForPushNotifications({
            			modalPrompt: false
            		});
                } else {
                	OneSignal.getUserId(function(id){
            			Cookies.set('OneSignal_player_id', id, { expires: 7 });
            			OneSignal_player_id = id;
            			logger.console(id);
            		});
                }
            }]);
            
            OneSignal.push(function() {
            	// Occurs when the user's subscription changes to a new value.
            	OneSignal.on('subscriptionChange', function (isSubscribed) {
            		logger.console("The user's subscription state is now:", isSubscribed);
            		OneSignal.getUserId(function(id){
            			Cookies.set('OneSignal_player_id', id, { expires: 7 });
            			OneSignal_player_id = id;
            			logger.console(id);
            		});
            	});
            });
         </script><script>(function(){
            $("#section-promo-wrapper").show();
            })();
         </script><!-- Criteo Homepage dataLayer --><script>var dataLayer = dataLayer || [];
            var email = "" || "";
            dataLayer.push({  
            	'event': 'crto_homepage',
            	crto: {             
            		'email': email //can be empty string if email not known
            	}
            });
         </script>
         <!-- END Criteo Homepage dataLayer -->
         <script src="assets/js/home-comp.min734e.js?v=0.5.96693"></script>
      </div>
   </body>
</html>