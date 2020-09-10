<?php 
$koneksi = new mysqli("localhost","root","","backend");

include(input.php);
$id = $_POST['id'];
$transactions_header_id = $_POST['transactions_header_id'];
$shop_id = $_POST['shop_id'];
$product_id = $_POST['product_id'];
$product_attribute_id = $_POST['product_attribute_id'];
$product_name = $_POST['product_name'];
$product_attribute_name = $_POST['product_attribute_name'];
$product_attribute_price = $_POST['product_attribute_price'];
$product_color_id = $_POST['product_color_id'];
$product_color_code = $_POST['product_color_code'];
$original_price = $_POST['original_price'];
$price = $_POST['price'];
$discount_amount = $_POST['discount_amount'];
$qty = $_POST['qty'];
$discount_value = $_POST['discount_value'];
$discount_percent = $_POST['discount_percent'];
$added_date = $_POST['added_date'];
$added_user_id = $_POST['added_user_id'];
$updated_date= $_POST['updated_date'];
$updated_user_id = $_POST['updated_user_id'];
$updated_flag = $_POST['updated_flag'];
$currency_symbol = $_POST['currency_symbol'];
$currency_short_form = $_POST['currency_short_form'];

 
mysqli_query($koneksi,"INSERT INTO mk_transactions_detail (`id`, `transactions_header_id`, `shop_id`, `product_id`, `product_attribute_id`, `product_name`, `product_attribute_name`, `product_attribute_price`, `product_color_id`, `product_color_code`, `original_price`, `price`, `discount_amount`, `qty`, `discount_value`, `discount_percent`, `added_date`, `added_user_id`, `updated_date`, `updated_user_id`, `updated_flag`, `currency_symbol`, `currency_short_form`)  VALUES('$id', '$transactions_header_id', '$shop_id', $product_id', '$product_attribute_id', '$product_name', '$product_attribute_name', '$product_attribute_price', '$product_color_id', '$product_color_code', '$original_price', '$price', '$discount_amount', '$qty', '$discount_value', '$discount_percent', '$added_date', '$added_user_id', '$updated_date', '$updated_user_id', '$updated_flag', '$currency_symbol', '$currency_short_form')");
 
header("location:index.php?pesan=input");
?>