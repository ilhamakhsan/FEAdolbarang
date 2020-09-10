<?php
 $koneksi = new mysqli("localhost","root","","backend");
?>
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
 
	<?php 
	if(isset($_GET['pesan'])){
		$pesan = $_GET['pesan'];
		if($pesan == "input"){
			echo "Data berhasil di input.";
		}else if($pesan == "update"){
			echo "Data berhasil di update.";
		}else if($pesan == "hapus"){
			echo "Data berhasil di hapus.";
		}
	}
	?>
	<br/>
	<a class="tombol" href="input.php">+ Tambah Data Baru</a>
 
	<h3>Data user</h3>
	<table border="1" class="table">
		<tr>
			<th>No</th>
			<th>Nama</th>
			<th>Alamat</th>
			<th>Pekerjaan</th>
			<th>Opsi</th>		
		</tr>
		<?php 
		
		$query = mysqli_query($koneksi,"SELECT * FROM mk_transactions_detail")or die(mysql_error());
		$nomor = 1;
		while($data = mysqli_fetch_array($query)){
		?>
		<tr>
			<td><?php echo $nomor++; ?></td>
			<td><?php echo $data['id']; ?></td>
			<td><?php echo $data['transactions_header_id']; ?></td>
			<td><?php echo $data['shop_id']; ?></td>
            <td><?php echo $data['product_id']; ?></td>
            <td><?php echo $data['product_attribute_id']; ?></td>
            <td><?php echo $data['product_name']; ?></td>
            <td><?php echo $data['product_attribute_name']; ?></td>
            <td><?php echo $data['product_attribute_price']; ?></td>
            <td><?php echo $data['product_color_id']; ?></td>
            <td><?php echo $data['product_color_code']; ?></td>
            <td><?php echo $data['original_price']; ?></td>
            <td><?php echo $data['price']; ?></td>
            <td><?php echo $data['discount_amount']; ?></td>
            <td><?php echo $data['qty']; ?></td>
            <td><?php echo $data['discount_value']; ?></td>
            <td><?php echo $data['discount_percent']; ?></td>
            <td><?php echo $data['added_date']; ?></td>
            <td><?php echo $data['added_user_id']; ?></td>
            <td><?php echo $data['updated_date']; ?></td>
            <td><?php echo $data['updated_user_id']; ?></td>
            <td><?php echo $data['updated_flag']; ?></td>
            <td><?php echo $data['currency_symbol']; ?></td>
            <td><?php echo $data['currency_short_form']; ?></td>
			<td>
				<a class="edit" href="edit.php?id=<?php echo $data['id']; ?>">Edit</a> |
				<a class="hapus" href="hapus.php?id=<?php echo $data['id']; ?>">Hapus</a>					
			</td>
		</tr>
		<?php } ?>
	</table>
</body>
</html>