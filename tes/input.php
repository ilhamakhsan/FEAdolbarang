<!DOCTYPE html>
<html>
<head>
	<title>Membuat CRUD Dengan PHP Dan MySQL - Menampilkan data dari database</title>
	<link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
	<div class="judul">		
		<h1>Membuat CRUD Dengan PHP Dan MySQL</h1>
		<h2>Menampilkan data dari database</h2>
		<h3>www.malasngoding.com</h3>
	</div>
	
	<br/>
 
	<a href="index.php">Lihat Semua Data</a>
 
	<br/>
	<h3>Input data baru</h3>
	<form action="input-aksi.php" method="post">		
		<table>
			<tr>
				<td>id</td>
				<td><input type="text" name="id"></td>					
			</tr>	
			<tr>
				<td>transactions_header_id</td>
				<td><input type="text" name="transactions_header_id"></td>					
			</tr>	
			<tr>
				<td>shop_id</td>
				<td><input type="text" name="shop_id"></td>					
			</tr>	
            <tr>
				<td>product_id</td>
				<td><input type="text" name="product_id"></td>					
			</tr>
            <tr>
				<td>product_attribute_id</td>
				<td><input type="text" name="product_attribute_id"></td>					
			</tr>
            <tr>
				<td>product_name</td>
				<td><input type="text" name="product_name"></td>					
			</tr>
            <tr>
				<td>product_attribute_name</td>
				<td><input type="text" name="product_attribute_name"></td>					
			</tr>
            <tr>
				<td>product_attribute_price</td>
				<td><input type="text" name="product_attribute_price"></td>					
			</tr>
            <tr>
				<td>product_color_id</td>
				<td><input type="text" name="product_color_id"></td>					
			</tr>
            <tr>
				<td>product_color_code</td>
				<td><input type="text" name="product_color_code"></td>					
			</tr>
            <tr>
				<td>original_price</td>
				<td><input type="text" name="original_price"></td>					
			</tr>
            <tr>
				<td>price</td>
				<td><input type="text" name="price"></td>					
			</tr>
            <tr>
				<td>discount_amount</td>
				<td><input type="text" name="discount_amount"></td>					
			</tr>
            <tr>
				<td>qty</td>
				<td><input type="text" name="qty"></td>					
			</tr>
            <tr>
				<td>discount_value</td>
				<td><input type="text" name="discount_value"></td>					
			</tr>
            <tr>
				<td>discount_percent</td>
				<td><input type="text" name="discount_percent"></td>					
			</tr>
            <tr>
				<td>added_date</td>
				<td><input type="text" name="added_date"></td>					
			</tr>
            <tr>
				<td>added_user_id</td>
				<td><input type="text" name="added_user_id"></td>					
			</tr>
            <tr>
				<td>updated_date</td>
				<td><input type="text" name="updated_date"></td>					
			</tr>
            <tr>
				<td>updated_user_id</td>
				<td><input type="text" name="updated_user_id"></td>					
			</tr>
            <tr>
				<td>updated_flag</td>
				<td><input type="text" name="updated_flag"></td>					
			</tr>
            <tr>
				<td>currency_symbol</td>
				<td><input type="text" name="currency_symbol"></td>					
			</tr>
            <tr>
				<td>currency_short_form</td>
				<td><input type="text" name="currency_short_form"></td>					
			</tr>
            
			<tr>
				<td></td>
				<td><input type="submit" value="Simpan"></td>					
			</tr>				
		</table>
	</form>
</body>
</html>