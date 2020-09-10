<?php
 //kodingan generate id 
$permitted_chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
 
function generate_string($input, $strength = 16) {
    $input_length = strlen($input);
    $random_string = '';
    for($i = 0; $i < $strength; $i++) {
        $random_character = $input[mt_rand(0, $input_length - 1)];
        $random_string .= $random_character;
    }
 
    return $random_string;
}
 
// id transaction hdr header
$code_hdr = generate_string($permitted_chars, 32);
$id_hdr = $code_hdr; 

//id transaction det detail
$code_det =generate_string($permitted_chars, 32);
$id_det = $code_det;

//id transaction cut count
$code_cut =generate_string($permitted_chars, 32);
$id_cut = $code_cut;

?>

<?php
//inputan
$user_id="c4ca4238a0b923820dcc509a6f75849b";
$contact_name ="ilham";
$contact_phone ="089505833033";
$added_user_id ="c4ca4238a0b923820dcc509a6f75849b";
$payment_method ="COD";
$trans_status_id="1";
$billing_first_name ="ilham";
$billing_last_name="akhsani";
$billing_company="perusahaan";
$billing_address_1="semarang";
$billing_address_2="bsb";
$billing_country="indonesia";
$billing_state="jawa tengah";
$billing_city="semarang";
$billing_postal_code="52252";
$billing_email="ilham akhsan23@gmail.com";
$billing_phone="089505833033";
$shipping_first_name="";
$shipping_last_name="";
$shipping_company="";
$shipping_address_1="";
$shipping_address_2="";
$shipping_country="";
$shipping_state="";
$shipping_city="";
$shipping_postal_code="";
$shipping_email="";
$shipping_phone="";
$memo="harap hati hati";


$product_id="prdddc973afa1dc85d9823137bd7c82002b";
$product_name="Shopper 5";
$original_price="90";
$price="90";
$qty="1";


?>

<?php
// koneksi ke database
include_once("config.php");
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO `mk_transactions_header` (`id`, `user_id`, `sub_total_amount`, `discount_amount`, `coupon_discount_amount`, `tax_amount`, `tax_percent`, `shipping_amount`, `shipping_tax_percent`, `shipping_method_amount`, `shipping_method_name`, `balance_amount`, `total_item_amount`, `total_item_count`, `contact_name`, `contact_phone`, `payment_method`, `added_date`, `added_user_id`, `updated_date`, `updated_user_id`, `updated_flag`, `trans_status_id`, `currency_symbol`, `currency_short_form`, `trans_code`, `billing_first_name`, `billing_last_name`, `billing_company`, `billing_address_1`, `billing_address_2`, `billing_country`, `billing_state`, `billing_city`, `billing_postal_code`, `billing_email`, `billing_phone`, `shipping_first_name`, `shipping_last_name`, `shipping_company`, `shipping_address_1`, `shipping_address_2`, `shipping_country`, `shipping_state`, `shipping_city`, `shipping_postal_code`, `shipping_email`, `shipping_phone`, `memo`) VALUES ('$id_hdr', '$user_id', '', '', '', '', '', '', '', '', '', '', '', '', '$contact_name', '$contact_phone', '$payment_method', current_timestamp(), '$added_user_id', '0000-00-00 00:00:00.000000', '', '', '$trans_status_id', '', '', '', '$billing_first_name', '$billing_last_name', '$billing_company', '$billing_address_1', '$billing_address_2', '$billing_country', '$billing_state', '$billing_city', '$billing_postal_code', '$billing_email', '$billing_phone', '$shipping_first_name', '$shipping_last_name', '$shipping_company', '$shipping_address_1', '$shipping_address_2', '$shipping_country', '$shipping_state', '$shipping_city', '$shipping_postal_code', '$shipping_email', '$shipping_phone', '$memo') ";

if ($conn->query($sql) === TRUE) {
  echo "New record created successfully <br>";
} else {
  echo "Error: " . $sql . "<br>" . $conn->error;
}


?> 

<?php
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$sql1 = "INSERT INTO `mk_transactions_detail` (`id`, `transactions_header_id`, `shop_id`, `product_id`, `product_attribute_id`, `product_name`, `product_attribute_name`, `product_attribute_price`, `product_color_id`, `product_color_code`, `original_price`, `price`, `discount_amount`, `qty`, `discount_value`, `discount_percent`, `added_date`, `added_user_id`, `updated_date`, `updated_user_id`, `updated_flag`, `currency_symbol`, `currency_short_form`) VALUES ('$id_det', '$id_hdr', '', '$product_id', '', '$product_name', '', '0', '', '', '$original_price', '$price', '', '$qty', '', '', current_timestamp(), '', '0000-00-00 00:00:00.000000', '', '', '', '')";
if ($conn->query($sql1) === TRUE) {
    echo "New record created successfully <br>";
  } else {
    echo "Error: " . $sql1 . "<br>" . $conn->error;
  }


?>


<?php
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}
$sql2= "INSERT INTO `mk_transactions_counts` (`id`, `product_id`, `cat_id`, `sub_cat_id`, `user_id`, `added_date`) VALUES ('$id_cut', '$product_id', '', '', '$user_id', current_timestamp())"; 
if ($conn->query($sql2) === TRUE) {
    echo "New record created successfully <br>";
  } else {
    echo "Error: " . $sql2 . "<br>" . $conn->error;
  }


?>

<?php

$conn->close();

?>
