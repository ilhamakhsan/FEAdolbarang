var hash = window.location.hash;
"#notif" == hash && $("#notif-modal").modal("show"), $(document).ready(function () {
	function a() {
		function a(a) {
			for (var b = 0; b < a.length; b++) {
				var c = "https://s3-ap-southeast-1.amazonaws.com/prelo/images/_assets/meta-image.jpg";
				c = a[b].featured_image_thumbnail_url;
				var d = a[b].title.rendered || "",
					e = a[b].link,
					f = a[b].excerpt.rendered || "";
				$("#story-" + (b + 1) + "-wrapper img").attr("src", c).attr("alt", d), $("#story-" + (b + 1) + "-wrapper .story-title").html(d), $("#story-" + (b + 1) + "-wrapper .story-text-wrapper").html(f), $("#story-" + (b + 1) + "-wrapper .go-shop").attr("href", e).text("Read More...")
			}
			$("#section-5").slideDown(), $("#owl-example").slick({
				slidesToShow: 1,
				autoplay: !0,
				autoplaySpeed: 5e3,
				dots: !0,
				arrows: !1
			})
		}

		function b(a, b, c) {}
		$.ajax({
			url: "https://prelo.co.id/blog/wp-json/wp/v2/posts/?categories=10&per_page=3",
			success: a,
			error: b
		})
	}

	function b(a, b) {
		ga("ec:addPromo", {
			id: "homeBanner",
			name: a,
			creative: b,
			position: "home top promo"
		}), ga("ec:setAction", "promo_click"), ga("send", "event", "enhanced ecommerce", "Internal Promotion Click", "name")
	}

	function c(a) {
		var b = a.name.indexOf("]"),
			c = a.name;
		c = a.name.substring(b + 1, a.name.length);
		var d = "Tanpa Merek";
		a.brand_name && (d = a.brand_name);
		var e = a.display_picts[0];
		e && (e = e.replace("http://localhost:5000", image_server + ""));
		var f = "";
		if (f += '<div class="col-xs-6 col-sm-6 col-md-2 column-product" style="display: none;">', f += '<div id="product-' + a._id + '" class="product-wrapper">', f += '<a href="/' + a.permalink + '.html?ref=editor" class="product-wrapper-link">', 4 == a.status && (f += '<div class="product-badge"><div class="product-sold">Sold</div><div class="clearfix"></div></div>'), f += "<div style=\"background-image:url('" + e + '\');" class="product-image"></div>', f += "tanpa merek" === d.toLowerCase() ? '<div class="product-description"><div style="color: #1f1f1f; text-overflow: ellipsis; overflow: hidden; white-space: nowrap;" class="product-description__brand">' : '<div class="product-description"><div style="font-weight: 700; color: #1f1f1f; text-overflow: ellipsis; overflow: hidden; white-space: nowrap;" class="product-description__brand">', f += d, f += '</div><div class="product-description__name">', f += c, f += '</div><div class="product-description-price__new" style="max-width: 100%">', a.affiliate_data && a.affiliate_data.rent_prices) f += toRupiah(a.affiliate_data.rent_prices[0].price), f += "<span style='color: #999; font-weight: 400;'> / " + a.affiliate_data.rent_prices[0].period_text + "</span>";
		else if (1 == a.listing_type) {
			var g = ["hari", "minggu", "bulan"];
			f += toRupiah(a.rent.price), f += "<span style='color: #999; font-weight: 400;'> / " + g[a.rent.period_type] + "</span>"
		} else f += toRupiah(a.price);
		return f += "</div></div></div>", f += "</a></div></div>"
	}

	function d(a) {
		var b = a.name.indexOf("]"),
			c = a.name;
		c = a.name.substring(b + 1, a.name.length);
		var d = "Tanpa Merek";
		a.brand_name && (d = a.brand_name);
		var e = a.display_picts[0];
		e && (e = e.replace("http://localhost:5000", image_server + ""));
		var f = "";
		if (f += '<div class="col-xs-6 col-sm-6 col-md-4 column-product" style="display: none;">', f += '<div id="product-' + a._id + '" class="product-wrapper">', f += '<a href="/' + a.permalink + '.html?ref=editor" class="product-wrapper-link">', 4 == a.status && (f += '<div class="product-badge"><div class="product-sold">Sold</div><div class="clearfix"></div></div>'), f += "<div style=\"background-image:url('" + e + '\');" class="product-image"></div>', f += "tanpa merek" === d.toLowerCase() ? '<div class="product-description"><div style="color: #1f1f1f; text-overflow: ellipsis; overflow: hidden; white-space: nowrap;" class="product-description__brand">' : '<div class="product-description"><div style="font-weight: 700; color: #1f1f1f; text-overflow: ellipsis; overflow: hidden; white-space: nowrap;" class="product-description__brand">', f += d, f += '</div><div class="product-description__name">', f += c, f += '</div><div class="product-description-price__new" style="max-width: 100%">', a.affiliate_data && a.affiliate_data.rent_prices) f += toRupiah(a.affiliate_data.rent_prices[0].price), f += "<span style='color: #999; font-weight: 400;'> / " + a.affiliate_data.rent_prices[0].period_text + "</span>";
		else if (1 == a.listing_type) {
			var g = ["hari", "minggu", "bulan"];
			f += toRupiah(a.rent.price), f += "<span style='color: #999; font-weight: 400;'> / " + g[a.rent.period_type] + "</span>"
		} else f += toRupiah(a.price);
		return f += "</div></div></div>", f += "</a></div></div>"
	}

	function e(a) {
		var b = "";
		return b += '<div class="col-xs-6 col-sm-6 col-md-3 column-product">', b += '<div id="product-' + a._id + '" class="product-wrapper">', b += '<a href="/titip/search/trip/' + a.search_keywords + '" class="product-wrapper-link">', b += "<div style=\"background-image:url('" + a.image + '\');" class="product-image"></div>', b += '<div class="trip-text">' + a.country + "</div>", b += "</a></div></div>"
	}

	function f(a) {
		function b(a) {
			0 == e && $("#editor-row").html("");
			for (var b = 0; b < a._data.length; b++) $("#editor-row").append(c(a._data[b])), $("#editor-row").find("#product-" + a._data[b]._id).parent(".column-product").fadeIn();
			e += f
		}

		function d(a, b, c) {
			$("#editor-load-more").text("Try again").fadeIn()
		}
		var e = 0,
			f = a || 12,
			g = Cookies.get("token") || "";
		$.ajax({
			url: "/api/product/catalogue/" + e + "/" + a,
			success: b,
			error: d,
			beforeSend: function (a) {
				g && a.setRequestHeader("Authorization", "Token " + g)
			}
		})
	}

	function g(a) {
		function b(a) {
			if (a._data.length < 1) {
				var b = '<div class="section-lokasi-sewa">Barang disewakan di ' + g + " belum tersedia</div>";
				$("#sewa-row").html(b), $("#sewa-all-load-more").remove()
			} else $("#sewa-row").html("");
			for (var d = 0; d < a._data.length; d++) $("#sewa-row").append(c(a._data[d])), $("#sewa-row").find("#product-" + a._data[d]._id).parent(".column-product").fadeIn()
		}

		function d(a, b, c) {
			$("#sewa-load-more").text("Try again").fadeIn()
		}
		var e = Cookies.get("token") || "",
			f = "",
			g = "Semua Kota",
			h = "/api/search/products?category_id=55de6d4e9ffd40362ae310a7&listing_type=1&limit=";
		if ($("#cities-selector").val(""), e && l) {
			var i = Cookies.get("default_address") || "";
			i.length && (i = JSON.parse(i) || "", i.region_id && i.region_id.length && (f = i.region_id, g = i.region_name, $("#cities-selector").val("000000000000000000000000"), h = "/api/search/products?category_id=55de6d4e9ffd40362ae310a7&listing_type=1&region_id=" + f + "&limit=", $("#cities-selector option[value=" + f + "]").length && ($("#cities-selector").val(f), $("#sewa-all-load-more").attr("href", "/sewa/all?search=&listing=1&region=" + f)))), l = !1
		}
		$.ajax({
			url: h + a,
			success: b,
			error: d,
			beforeSend: function (a) {
				e && a.setRequestHeader("Authorization", "Token " + e)
			}
		})
	}

	function h(a) {
		function b(b) {
			var c = b._data.trips;
			$("#titip-row").html("");
			for (var d = 0; d < a; d++) $("#titip-row").append(e(c[d])), $("#titip-row").find("#product-" + c[d]._id).parent(".column-product").fadeIn()
		}

		function c(a, b, c) {
			$("#editor-load-more-2").text("Try again").fadeIn()
		}
		var d = Cookies.get("token") || "";
		$.ajax({
			url: "/api/v3/search/popular_trip?limit=" + a,
			success: b,
			error: c,
			beforeSend: function (a) {
				d && a.setRequestHeader("Authorization", "Token " + d)
			}
		})
	}

	function i(a) {
		function b(a) {
			if ($("#lovelist-row").html(""), $("#lovelist-foryou-row").html(""), a._data.length < 3) {
				var b = "";
				b += '<div class="col-sm-12" id="empty-lovelist" style="text-align: center">', b += '<span> <i class="fa fa-heart-o fa-2x"> </i>', b += "<br/> Love untuk mendapatkan update barang favorit kamu </span>", $("#lovelist-row").append(b), $("#lovelist-load-more").remove(), $("#lovelist-foryou-row").append(b), $("#lovelist-foryou-more").remove()
			} else {
				for (var e = 0; e < 3; e++) $("#lovelist-foryou-row").append(d(a._data[e])), $("#lovelist-foryou-row").find("#product-" + a._data[e]._id).parent(".column-product").fadeIn();
				for (var e = 0; e < a._data.length; e++) $("#lovelist-row").append(c(a._data[e])), $("#lovelist-row").find("#product-" + a._data[e]._id).parent(".column-product").fadeIn()
			}
		}

		function e(a, b, c) {
			$("#lovelist-load-more").text("Try again").fadeIn()
		}
		var f = Cookies.get("token") || "";
		$.ajax({
			url: "/api/me/lovelist/0?on_homepage=1&limit=" + a,
			success: b,
			error: e,
			beforeSend: function (a) {
				f && a.setRequestHeader("Authorization", "Token " + f)
			}
		})
	}

	function j(a) {
		function b(a) {
			if ($("#last-product-row").html(""), $("#last-foryou-row").html(""), a._data.length > 0) {
				$("#section-foryou").fadeIn(), $("#section-lovelist").fadeOut();
				for (var b = 0; b < a._data.length; b++) $("#last-foryou-row").append(d(a._data[b])), $("#last-foryou-row").find("#product-" + a._data[b]._id).parent(".column-product").fadeIn();
				for (var b = 0; b < 2; b++) $("#last-product-row").append(c(a._data[b])), $("#last-product-row").find("#product-" + a._data[b]._id).parent(".column-product").fadeIn()
			} else $("#section-lovelist").removeClass("visible-xs visible-sm"), $("#section-foryou").remove(), $("#section-last-product").remove()
		}

		function e(a, b, c) {
			$("#sewa-load-more").text("Try again").fadeIn()
		}
		var f = Cookies.get("token") || "";
		$.ajax({
			url: "/api/me/last_viewed_products?current=0&limit=" + a,
			success: b,
			error: e,
			beforeSend: function (a) {
				f && a.setRequestHeader("Authorization", "Token " + f)
			}
		})
	}

	function k(a) {
		function b(a) {
			$("#merek-col").html("");
			for (var b = 0; b < a._data.length; b++) e = "<a href='/merek/" + a._data[b].permalink + "'>", e += "<span class='badge merek-badge'>" + a._data[b].name + "</span>", e += "</a>", $("#merek-col").append(e)
		}

		function c(a, b, c) {
			$("#sewa-load-more").text("Try again").fadeIn()
		}
		var d = Cookies.get("token") || "",
			e = "";
		$.ajax({
			url: "/api/search/brands/top?limit=" + a,
			success: b,
			error: c,
			beforeSend: function (a) {
				d && a.setRequestHeader("Authorization", "Token " + d)
			}
		})
	}
	a(), $(".promo-container").slick({
		lazyLoad: "progressive",
		autoplay: !0,
		autoplaySpeed: 5e3,
		pauseOnHover: !0,
		dots: !1,
		infinite: !0,
		slidesToShow: 1,
		prevArrow: '<button type="button" class="slick-prev" value="Prev" aria-label="Prev"><i class="header-icon-small fa fa-angle-left"></i> </button>',
		nextArrow: '<button type="button" class="slick-next" value="Next" aria-label="Next"><i class="header-icon-small fa fa-angle-right"></i></button>',
		centerMode: !0,
		variableWidth: !0,
		mobileFirst: !0
	}), $(".promo-item").click(function () {
		var a = $(this).attr("name"),
			c = $(this).attr("creative");
		b(a, c)
	}), $("#editor-row .empty-product").length > 0 && f(12);
	var l = !1;
	$("#section-sewa-wrapper #sewa-row .empty-product").length > 0 && g(6), $("#section-sewa-all-wrapper #sewa-row .empty-product").length > 0 && (l = !0, g(24)), $("#titip-row .empty-product").length > 0 && h(4), $("#lovelist-row .empty-product").length > 0 && i(6), $("#last-product-row .empty-product").length > 0 && j(3), $("#section-merek-wrapper .loading").length && k(10), $("#cities-selector").change(function () {
		var a = $("#cities-selector").val();
		window.location.href = "/sewa/all?search=&listing=1&region=" + a
	})
});