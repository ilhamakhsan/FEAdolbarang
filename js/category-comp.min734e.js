function onProductClick(a) {
	var b = a.attr("product_id"),
		c = a.attr("category_id"),
		d = a.attr("brand_id"),
		e = (a.attr("price"), a.attr("position")),
		f = a.find(".product-description__name").text();
	ga("ec:addProduct", {
		id: b,
		name: f,
		category: c,
		brand: d,
		position: e
	}), ga("ec:setAction", "click", {
		list: "category_list"
	}), ga("send", "event", "enhanced ecommerce", "Product clicks", f)
}

function compileTemplate() {
	$("#product-selector #product-selector-search").html("");
	for (var a = 0; a < searchProducts.length; a++) searchProducts[a].referral = "?ref=buku_bekas", $("#product-selector #product-selector-search").append(buildTemplate(searchProducts[a], 2))
}

function success(a) {
	a._message.length ? (searchProducts = a._message, compileTemplate(), $("#product-selector").removeClass("col-md-12").addClass("col-md-9").promise().done(function () {
		$("#filter-selector").fadeIn(function () {
			$("#filter-selector").removeClass("width-zero").addClass("width-full")
		})
	})) : ($("#product-selector #product-selector-search").html("<h3>Barang '" + query + "' tidak ditemukan</h3>"), $("#breadcrumbs-wrapper").css("text-align", "center"))
}

function error(a, b, c) {
	alert("Terjadi Kesalahan. Silahkan coba lagi")
}

function getPalasariSearchResultByTitle(a, b, c) {
	b = b || 0, c = c || 96, $.ajax({
		url: "/api/search/buku-bekas/bytitle",
		data: {
			title: a,
			limit: c,
			current: b
		},
		success: success,
		error: error
	})
}

function getPalasariSearchResultByBrand(a, b, c) {
	b = b || 0, c = c || 96, $.ajax({
		url: "/api/search/buku-bekas/bybrand",
		data: {
			brand: a,
			limit: c,
			current: b
		},
		success: success,
		error: error
	})
}
if ($("#category-wrapper").length) {
	var cookie_segment = Cookies.get("segment");
	!cookie_segment && show_segment && $("#segment-modal").modal({
		backdrop: "static",
		keyboard: !1
	}), $(".one-segment").click(function () {
		var a = $(this).attr("segment-id");
		Cookies.set("segment", a), location.reload()
	}), $("#segment-selector").change(function () {
		var a = $(this).val();
		Cookies.set("segment", a), location.reload()
	}), $(document).ready(function () {
		var a = 0;
		$("#category-product-wrapper").find(".product-wrapper").each(function (b) {
			var c = $(this).attr("product_id"),
				d = $(this).attr("category_id"),
				e = $(this).attr("brand_id"),
				f = ($(this).attr("price"), $(this).find(".product-description__name").text());
			$(this).attr("love");
			ga("ec:addImpression", {
				id: c,
				name: f,
				category: d,
				brand: e,
				list: "category_list",
				position: a
			}), a++
		}), $(".product-wrapper-link").click(function (a) {
			onProductClick($(this).parent(".product-wrapper"))
		})
	}), $(window).scroll(function () {
		updateStickyFilter()
	}), updateStickyFilter(), updateStickyFilter(), $("#load-more-subcategory").click(function () {
		$(".subcategory-hidden").slideToggle(), $(this).find("i").toggleClass("fa-angle-down").toggleClass("fa-angle-up")
	})
} else $("#buku-bekas-wrapper").length || $("#search-buku-wrapper").length ? ($("#search-by-placeholder-wrapper .search-by-title").text(by), $("#search-by-wrapper").hover(function () {
	$("#search-by-dropdown-wrapper").fadeIn()
}, function () {
	$("#search-by-dropdown-wrapper").fadeOut()
}), $(".search-by-dropdown").click(function () {
	by = $(this).attr("by"), text = $(this).text(), $("#search-by-placeholder-wrapper .search-by-title").text(text), $("#search-by-dropdown-wrapper").fadeOut()
}), $("#search-form").submit(function (a) {
	a.preventDefault();
	var b = $("#search-box").val();
	window.location.href = "/search-buku/" + by + "/" + b
}), $("#search-buku-wrapper").length && ("penerbit" == by ? getPalasariSearchResultByBrand(query) : getPalasariSearchResultByTitle(query))) : $("#category-luxury-wrapper").length && ($(document).ready(function () {
	var a = 0;
	$("#category-product-wrapper").find(".product-wrapper").each(function (b) {
		var c = $(this).attr("product_id"),
			d = $(this).attr("category_id"),
			e = $(this).attr("brand_id"),
			f = ($(this).attr("price"), $(this).find(".product-description__name").text());
		ga("ec:addImpression", {
			id: c,
			name: f,
			category: d,
			brand: e,
			list: "tunggadewi_list",
			position: a
		}), a++
	})
}), $(".product-wrapper-link").click(function (a) {
	onProductClick($(this).parent(".product-wrapper"))
}));