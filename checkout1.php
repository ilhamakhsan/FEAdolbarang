<?php
include_once("config.php");
session_start();
    if (!isset($_SESSION['username'])){
      echo "<script>alert('silahkan login'); </script>";
       // header("Location: #login-modal");
        echo "<script>location='index.php'; </script>";
    }
if(empty($_SESSION['chart']) OR !isset($_SESSION['chart']))
{
    echo "<script>alert('silahkan belanja'); </script>";
    echo "<script>location='index.php'; </script>";
    
}

?>
<!DOCTYPE html>
<html>
   <head>
      <title>Checkout</title>
      <link rel="shortcut icon" href="/favicon.png" type="image/x-icon">
      <link rel="icon" sizes="192x192" href="/favicon-192.png">
      <link rel="manifest" href="/manifest.json">
      <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=yes, maximum-scale=2.0">
      <meta name="theme-color" content="#00a090">
      <meta property="og:image" content="https://s3-ap-southeast-1.amazonaws.com/prelo/images/_assets/meta-image.png">
      <link rel="stylesheet" href="css/main-comp.min734e.css">
      <link rel="stylesheet" href="css/transactions-comp.min734e.css">
      <div id="header-new-buffer" style="display: none; width: 100%; background: #fa8071"></div>
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
               <div id="logo-wrapper" class="col-sm-2 col-md-3 col-lg-3"><a href="index.php"><img id="logo" src="assets/img/logo/adolbarang.png" alt="Logo adolbarang"></a></div>
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
                        <div id="jualbar" style="float: left; height: 30px; padding-left: 1px"><a href="#" style="font-size: 22px; padding: 0 5px 0 5px; display: block; box-sizing: content-box; position: relative" class="fa fa-camera"></a></div>
                     </div>
                     <div id="search-wrapper">
                        <form id="search-form" method="" action="" style="position: relative" autocomplete="off" class="search-form">
                           <input id="search-box" name="name" placeholder="Cari Barang atau User"><i class="fa fa-search search-icon"></i><input id="search-submit" type="submit" style="display: none">
                           <div class="clearfix"></div>
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
        
      </header>
      <div id="notif-modal" role="dialog" class="modal fade from-right">
         <div style="margin: 0;" class="modal-dialog">
            <div style="height: 100vh; overflow: hidden" class="modal-content">
               <div class="clearfix">
                  <div class="modal-header">
                     <i data-dismiss="modal" class="fa fa-chevron-left modal-close"></i>
                     <h3 style="margin: 0; font-size: 1.6rem" class="modal-label">Notifikasi</h3>
                     <div id="dropdown-notif" style="position: absolute;right: 20px;top: 30%;" class="dropdown">
                        <a id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" style="color: #444" class="pr-ellipsis-v"></a>
                        <ul aria-labelledby="dropdownMenu1" class="dropdown-menu dropdown-menu-right">
                           <li><a id="edit-notif-btn" href="#edit">Hapus</a></li>
                        </ul>
                     </div>
                  </div>
                  <div style="position: relative; padding: 0" class="modal-body">
                     <ul role="tablist" style="margin-bottom: 0" class="nav nav-tabs">
                        <li id="list-notif-transaksi-tab" role="presentation" style="width: 50%" class="active">
                           <a href="#list-notif-transaksi" aria-controls="list-notif-transaksi" role="tab" data-toggle="tab">
                              Transaksi
                              <div class="notif-count small">0</div>
                           </a>
                        </li>
                        <li id="list-notif-percakapan-tab" role="presentation" style="width: 50%">
                           <a href="#list-notif-percakapan" aria-controls="list-notif-percakapan" role="tab" data-toggle="tab">
                              Percakapan
                              <div class="notif-count small">0</div>
                           </a>
                        </li>
                     </ul>
                     <div style="overflow: auto; max-height: calc(100vh - 43px - 48px)" class="tab-content">
                        <div id="list-notif-transaksi" role="tabpanel" class="section-wrapper tab-pane active">
                           <div style="padding: 20px; display: block; text-align: center" class="loading-wrapper"><i class="fa fa-circle-o-notch fa-spin"></i></div>
                        </div>
                        <div id="list-notif-percakapan" role="tabpanel" class="section-wrapper tab-pane">
                           <div style="padding: 20px; display: block; text-align: center" class="loading-wrapper"><i class="fa fa-circle-o-notch fa-spin"></i></div>
                        </div>
                     </div>
                  </div>
                  <div style="text-align: center;display: none;" class="modal-footer"><button id="cancel-notif-btn" style="width: 49%;" class="btn btn-primary">Batal</button><button id="total-delete" data-toggle="modal" data-target="#confirm-modal" style="width: 49%;" class="btn btn-primary">Hapus</button></div>
               </div>
            </div>
         </div>
      </div>
      <div id="confirm-modal" role="dialog" class="modal-multi modal fade">
         <div class="modal-dialog">
            <div style="border: 0" class="modal-content">
               <div class="clearfix">
                  <div style="padding: 15px; text-align: left; font-size: 1.4rem" class="modal-body">
                     <div id="modal-body-title"></div>
                     <div id="modal-body-inner">
                        <p> 
                           Notifikasi ini akan dihapus dari data kamu. Lanjutkan?
                        </p>
                     </div>
                  </div>
                  <div class="modal-action"><button type="button" data-dismiss="modal" style="width: 50%" class="btn button cancel-button button-primary">Batal</button><button id="delete-notif-btn" data-dismiss="modal" style="width: 50%" class="yes-button btn button button-primary">Hapus</button></div>
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
            <a id="nav-user-top" href="/sugio">
               <div id="nav-user">
                  <div id="nav-user-image" style="background-image:url('https://s3-ap-southeast-1.amazonaws.com/prelo/images/users/thumbnail/default.png')"></div>
                  <div id="nav-user-text">
                     <div id="nav-user-username"><?php echo $_SESSION['username'];  ?></div>
                     <div id="nav-user-fullname"><?php echo $_SESSION['username'];  ?></div>
                  </div>
               </div>
            </a>
            <div id="nav-user-options" style="background: #fff">
               <a id="nav-user-lovelist" href="/lovelist" class="nav-user-option">
                  <i class="pr-lovelist"></i>
                  <div>Lovelist<br></div>
               </a>
               <a id="nav-user-edit" href="/jualan-saya" style="border-left: solid 1px #f0f0f0;border-right: solid 1px #f0f0f0;" class="nav-user-option">
                  <i class="pr-goods-archive"></i>
                  <div>Jualan Saya</div>
               </a>
               <a id="nav-user-belanjaan" href="/transaksi-saya" class="nav-user-option">
                  <i class="pr-shopping-bag"></i>
                  <div>Transaksi Saya</div>
               </a>
               <div class="clearfix"></div>
            </div>
         </div>
         <div id="mobile-nav-items-outer" style="background: #fff">
            <div style="border-bottom: solid 1px #dadada; margin: 0 0 7px 0"></div>
            <ul id="mobile-nav-items">
               <li><a href="/edit-profil"><i class="pr-pencil"></i>Edit Profil</a></li>
               <li><a href="/chat"><i style="font-size: 1.6rem" class="pr-comment"></i>Chat</a></li>
               <li><a href="/tarik-uang"><i class="pr-withdraw"></i>Tarik Uang</a></li>
               <li><a href="/achievement"><i class="pr-tropy"></i>Achievement</a></li>
               <li><a href="/faq"><i class="pr-question-circle"></i>Bantuan</a></li>
            </ul>
            <div style="border-bottom: solid 1px #dadada; padding: 0 0 7px 0"></div>
         </div>
         <ul id="mobile-nav-infos" class="gray-nav">
            <li>
               <a data-toggle="collapse" data-target="#kategori-nav"><i class="fa fa-shopping-bag"></i>Jual Beli</a>
               <ul id="kategori-nav" class="gray-nav collapse">
                  <li><a href="/editors-pick" style="font-weight: 500; "><i style="font-size: 1.6rem" class="fa fa-star"></i>Editor's Pick</a></li>
                  <li><a href="/bekas/fashion-wanita"><i style="font-size: 1.6rem" class="pr-women"></i>Women</a></li>
                  <li><a href="/bekas/fashion-pria"><i style="font-size: 1.6rem" class="pr-man"></i>Men</a></li>
                  <li><a href="/bekas/kosmetik-wanita"><i class="pr-lipstick"></i>Beauty</a></li>
                  <li><a href="/bekas/buku"><i class="pr-book"></i>Book</a></li>
                  <li><a href="/bekas/gadget"><i class="pr-gadget"></i>Gadget</a></li>
                  <li><a href="/bekas/hobi"><i style="font-size: 1.6rem" class="pr-motorcycle"></i>Hobby</a></li>
                  <li><a href="/bekas/antik"><i class="pr-antique"></i>Antique</a></li>
                  <li><a href="/bekas/perlengkapan-bayi-anak"><i class="pr-baby-kid"></i>Baby & Kid</a></li>
                  <li><a href="/bekas/living"><i class="pr-living"></i>Home & Living</a></li>
               </ul>
            </li>
            <li>
               <a data-toggle="collapse" data-target="#kategori-sewa-nav"><i class="pr-sewa"></i>Sewa</a>
               <ul id="kategori-sewa-nav" class="gray-nav collapse">
                  <li><a href="/sewa/fashion"><i class="pr-sewa-fashion"></i>Fashion</a></li>
                  <li><a href="/sewa/baby-kid"><i class="pr-sewa-baby-kid"></i>Baby & Kid</a></li>
                  <li><a href="/sewa/transport"><i class="pr-sewa-transport"></i>Transport</a></li>
                  <li><a href="/sewa/book"><i class="pr-sewa-book"></i>Book</a></li>
                  <li><a href="/sewa/fotografi"><i class="pr-sewa-fotografi"></i>Fotografi</a></li>
                  <li><a href="/sewa/event"><i class="pr-sewa-event"></i>Event</a></li>
                  <li><a href="/sewa/elektronik"><i class="pr-sewa-elektronik"></i>Elektronik</a></li>
                  <li><a href="/sewa/sport-travel"><i class="pr-sewa-travel"></i>Sport & Travel</a></li>
                  <li><a href="/sewa/living"><i class="pr-sewa-living"></i>Living</a></li>
               </ul>
            </li>
            <li><a href="/titip"><i class="pr-titip-1"></i>Jastip</a></li>
            <li>
               <div style="border-bottom: solid 1px #dadada;"></div>
            </li>
            <li><a href="/about" class="no-icon">About</a></li>
            <li><a href="/produk-populer" class="no-icon">Produk Populer</a></li>
            <li><a href="/jual-buku-bekas" class="no-icon">Buku Bekas</a></li>
            <li><a href="/blog" class="no-icon">Blog</a></li>
            <li><a id="header-logout" class="logout no-icon">Logout</a></li>
         </ul>
         <div id="nav-footer">
            <p>Copyright©</p>
         </div>
      </div>
      <div id="search-mobile-modal" role="dialog" class="modal fade from-right">
         <div style="margin: 0;" class="modal-dialog">
            <div style="height: 100vh; overflow: hidden" class="modal-content">
               <div class="clearfix">
                  <div style="position: relative; padding: 0; box-shadow: 0 1px 1px rgba(0,0,0,0.1); z-index: 1100" class="modal-header">
                     <i data-dismiss="modal" class="fa fa-chevron-left modal-close"></i>
                     <div id="mobile-search" class="modal-label">
                        <form id="search-mobile" method="POST" action="/search"><input id="search-box-mobile" name="name" placeholder="Cari Barang atau User" autofocus autocomplete="off"><input type="submit" style="display: none" autocomplete="off"><i class="pr-search search-icon"></i></form>
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
      <div id="header"></div>
      <section id="main-section" class="section">
         <div class="container">
            <div id="checkout-wrapper" style="min-height: 100vh">
               <div class="row">
                  <div class="col-md-7 col-md-offset-3 white-wrapper">
                              <div class="page-section-title" align="center">Data Pengiriman</div>
                              <div class="page-section-title">Alamat Pengiriman</div>
                              <div class="form-group">
                                 <div id="address" class="address-detail"></div>
                                 <form action="checkout_proses.php" method="post">
                                 <div   style="text-align: left; padding-bottom: 0" class="add-address form">
                                    <div id="wrapper-ajah" style="padding:0;margin-top:10px">
                                       <div class="form-group"><label for="Nama Pertama">Nama Pertama</label><input id="address-firstname" name="shipping_first_name" type="text" required placeholder="" class="form-control"></div>
                                       <div class="form-group"><label for="Nama Akhir">Nama Akhir</label><input id="address-lastname" name="shipping_last_name" type="text" required placeholder="" class="form-control"></div>
                                       <div class="form-group"><label for="Email">Email</label><input id="address-email" name="shipping_email" type="tel" required placeholder="" class="form-control"></div>
                                       <div class="form-group"><label for="Phone">Phone</label><input id="address-phone" name="shipping_phone" type="text" required placeholder="" class="form-control"></div>
									            <div class="form-group"><label for="Perusahaan">Perusahaan</label><input id="address-company" name="shipping_company" type="text" required placeholder="" class="form-control"></div>
                                       <div class="form-group"><label for="Alamat">Alamat lengkap</label><input id="address" name="shipping_address_1" type="text" required placeholder="" class="form-control"></div>
									            <div class="form-group"><label for="Negara">Negara</label><input id="address-country" name="shipping_country" type="text" required placeholder="" class="form-control"></div>
									            <div class="form-group"><label for="Provinsi">Provinsi</label><input id="address-province" name="shipping_state" type="text" required placeholder="" class="form-control"></div>
									            <div class="form-group"><label for="Kota">Kota</label><input id="address-kota" name="shipping_city" type="text" required placeholder="" class="form-control"></div>
                                       <div class="form-group"><label for="Kode Pos">Kode Pos</label><input id="postal_code" name="shipping_postal_code" type="" required placeholder="" class="form-control"></div>
                                       <div class="form-group"><label for="memo">memo</label><input id="postal_code" name="memo" type="" required placeholder="" class="form-control"></div>
                                      <!-- <div style="text-align:right" class="form-group"><label for="save-address"><input type="checkbox" id="save-address" name="save-account" style="margin-right: 5px; margin-bottom: -2px">Simpan alamat</label></div>
                                       -->
                                    </div>
									         <button id="submit-checkout-button" type="submit" name="submit" class="btn button button-primary disabled" align="center">Checkout</button>
                                 </div>
                                 </form>
                              </div>
                           </div>
                           </div>
                        </div>
                     </div>
                    </section>
         </body>
</html>