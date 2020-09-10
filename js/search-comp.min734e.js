function appendBrandItemFilter(a, b, c) {
	var d = "";
	d += '<div class="brand-selected-item">', d += '<span class="brand-selected-item__name" cat_value="' + a + '" permalink="' + c + '">', d += b, d += "</span>", d += '<span class="brand-selected-item__clear">', d += "×", d += "</span>", d += '<div class="clearfix"></div>', d += "</div>", $("#brand-selected-list").append(d)
}

function hookClearBrand() {
	$("#brand-selected-list .brand-selected-item").click(function () {
		var a = $(this).children(".brand-selected-item__name").attr("permalink");
		urlQuery.brand = urlQuery.brand.replace("," + a, ""), urlQuery.brand = urlQuery.brand.replace(a + ",", ""), urlQuery.brand = urlQuery.brand.replace(a, ""), console.log(urlQuery.brand), arrayBrand = urlQuery.brand.split(","), $(this).remove(), $('#filter-actives .brand-selected-item__name[permalink="' + a + '"]').parent(".brand-selected-item").remove(), $("#filter-brand-form .btn").fadeIn(), $("#filter-actives .btn").fadeIn(), urlQuery.brand.length ? $("#merek-tab").children("i").show() : $("#merek-tab").children("i").hide()
	}), $("#filter-actives .brand-selected-item").click(function () {
		var a = $(this).children(".brand-selected-item__name").attr("permalink");
		urlQuery.brand = urlQuery.brand.replace("," + a, ""), urlQuery.brand = urlQuery.brand.replace(a + ",", ""), urlQuery.brand = urlQuery.brand.replace(a, ""), console.log(urlQuery.brand), $(this).remove(), $('#filter-actives .brand-selected-item__name[permalink="' + a + '"]').parent(".brand-selected-item").remove(), $("#filter-brand-form .btn").fadeIn(), $("#filter-actives .btn").fadeIn(), omniRedirect(urlQuery)
	})
}

function hookClearCategory() {
	$("#category_id").show(), $("#breadcrumbs-category-1").text(""), $("#breadcrumbs-category-2").text(""), $("#breadcrumbs-category-3").text(""), $("#select-category").hide(), category_permalink = "all", updateSize(), updateSegment(), $("#kategori-tab").children("i").hide(), $("#categories2-wrapper").removeClass("out-left").addClass("in"), $("#categories3-wrapper").removeClass("in"), $("#categories2-wrapper").addClass("out-right").removeClass("in"), $("#categories1-wrapper").removeClass("out")
}

function filterBrand() {
	hookClearBrand(), $("#brand-selected-list").fadeIn()
}

function responsiveBrandField() {
	console.log($(".easy-autocomplete").html()), $(".easy-autocomplete").attr("style", "")
}

function rebuildQueryOld(a, b) {
	console.log("rebuild");
	var c = "";
	b || a.page && (a.page = 1);
	var d = 0;
	for (var e in a) a.hasOwnProperty(e) && (a[e] || a[name]) && (c += 0 == d ? "?" + e + "=" + a[e] : "&" + e + "=" + a[e], d++);
	return c
}

function rebuildQuery(a, b) {
	console.log("rebuild");
	var c = "";
	b || a.page && (a.page = 1);
	var d = 0;
	for (var e in a) a.hasOwnProperty(e) && (a[e] || a[name]) && ("name" != e && "category" != e && (c += "&" + e + "=" + a[e]), d++);
	return c
}

function omniRedirect(a, b) {
	var c = "?search=" + a.name + rebuildQuery(a, b);
	if (is_location)
		if (a.region) {
			var d = $('#region-selector option[value="' + a.region + '"]').text();
			d = d.toLowerCase().replace("kab.", "kab").split(" ").join("-"), 0 != d.indexOf("kab") && (d = "kota-" + d);
			var e = location.pathname.split("/");
			!e[1] || 0 != e[1].indexOf("kota-") && 0 != e[1].indexOf("kab-") || (e[1] = d), category_permalink ? (e[3] = category_permalink, c = e.join("/") + c) : c = e.join("/") + c
		} else {
			var e = location.pathname.split("/");
			!e[1] || 0 != e[1].indexOf("kota-") && 0 != e[1].indexOf("kab-") || (e[1] = ""), "/" == e.join("/").replace("//", "/") ? c = "1" === a.listing ? "/sewa/all" + c : "/bekas/all" + c : category_permalink ? (e[3] = category_permalink, c = e.join("/").replace("//", "/") + c) : c = e.join("/").replace("//", "/") + c
		}
	else category_permalink ? c = "1" === a.listing ? "/sewa/" + category_permalink + c : "/bekas/" + category_permalink + c : window.location.pathname.startsWith("/merek/") && (c = "1" === a.listing ? "/sewa/all" + c : "/bekas/all" + c);
	window.location.href = c
}

function resetAll() {
	urlQuery.cond = "", urlQuery.brand = "", urlQuery.min = "", urlQuery.max = "", urlQuery.page = 1, urlQuery.limit = "", urlQuery.ongkir = "", urlQuery.sizes = "", urlQuery.province = "", urlQuery.region = "", urlQuery.listing = "", urlQuery.segments = "", urlQuery.shippings = "", is_mobile || omniRedirect(urlQuery)
}

function getCategoryFilterMobile() {
	function a(a) {
		if (provinces_regions = a._data.provinces_regions, "undefined" != typeof is_location && is_location || $("#region-selector").html(regionOptionFactory(urlQuery.province)), urlQuery.province) {
			if (urlQuery.region) {
				$("#region-selector").val(urlQuery.region);
				var b = $("#region-selector option:selected").text();
				$("#filter-actives").append(filterDashboardFactory(b, urlQuery.region, "region")), $(".region-selected-item").click(function (a) {
					urlQuery.region = "", omniRedirect(urlQuery)
				})
			}
			$("#region-title").show(), $("#region-selector").show()
		}
		var c = "";
		c += "<div class='one-category'>", c += "<div class='parent-category'>", c += "<a href='/bekas/all' category='55de6d4e9ffd40362ae310a7'>", c += "All", c += "</a>", c += "</div>", c += "</div>";
		for (var d = a._data.categories[0], e = 0; e < d.children.length; e++) {
			c += "<div class='one-category'>", c += "<div class='parent-category'>", c += "<i class='fa fa-caret-down'></i>", c += "<a href='/bekas/" + d.children[e].permalink + "' category='" + d.children[e]._id + "'>", c += d.children[e].name, c += "</a>", c += "</div>", c += "<div class='sub-category-wrapper'>";
			for (var f = 0; f < d.children[e].children.length; f++) c += "<a class='sub-category' href='/bekas/" + d.children[e].children[f].permalink + "' category='" + d.children[e].children[f]._id + "'>", c += d.children[e].children[f].name, c += "</a>";
			c += "</div>", c += "</div>"
		}
		$("#modal-body-category #loading").remove(), $("#kategori-mobile-wrapper").html(c), hookCategoryAccordion(), $("#search-page-wrapper").length && $("#kategori-mobile-wrapper a").click(function (a) {
			a.preventDefault(), hookCategoryWithRebuild($(this))
		}), $("#category-wrapper").length ? urlQuery.category = current_cat_id : urlQuery.category = current_cat_id, urlQuery.category && $('#kategori-mobile-wrapper [category="' + urlQuery.category + '"]') && ($('#kategori-mobile-wrapper [category="' + urlQuery.category + '"]').css("font-weight", "500").css("color", "#ccc"), $('#kategori-mobile-wrapper [category="' + urlQuery.category + '"]').parent(".sub-category-wrapper").slideDown());
		all_categories = a._data.categories[0].children, category_sizes = a._data.category_sizes, rent_categories = a._data.rent_categories[0].children, categories = "1" === urlQuery.listing ? rent_categories : all_categories, makeCategory()
	}

	function b(a, b, c) {
		getCategoryFilterMobile()
	}
	$.ajax({
		url: "/api/app/metadata",
		data: {
			category: 1,
			brands: 0,
			categories: 1,
			rent_categories: 1,
			category_sizes: 1,
			shippings: 0,
			product_conditions: 0,
			provinces_regions: 1
		},
		success: a,
		error: b
	})
}

function getChildrenCategory(a) {
	for (var b = 0; b < categories.length; b++) {
		if (categories[b]._id == a) return categories[b].children || [];
		if (categories[b].children && categories[b].children.length)
			for (var c = 0; c < categories[b].children.length; c++)
				if (categories[b].children[c]._id == a) return categories[b].children[c].children || []
	}
}

function makeCategory2(a) {
	var b = getChildrenCategory(a),
		c = "";
	c += '<div class="categories2-item" categories2value="back" categories1parent="' + a + '" edge="false">', c += '<span class="categories-image fa fa-angle-left"></span>', c += '<span class="categories-text">Back</span>', c += "</div>", b && b.length && (c += '<div class="categories2-item" categories2value="all" data-dismiss="modal">', c += '<span class="categories-image"></span>', c += '<span class="categories-text"> Semua ' + b[0].breadcrumb[1].name + " </span>", c += "</div>");
	for (var d = 0; d < b.length; d++) {
		var e = !b[d].children.length;
		c += '<div class="categories2-item" cat2permalink="' + b[d].permalink + '" categories2value="' + b[d]._id + '" categories1parent="' + a + '" edge="' + e + '" category_size_id="' + b[d].category_size_id + '">', c += '<span class="categories-image"></span>', c += '<span class="categories-text">' + b[d].name + "</span>", c += "</div>"
	}
	$("#categories2-wrapper").html(c), $(".categories2-item").click(function () {
		var a = $(this).attr("categories2value");
		"back" == a ? ($("#categories2-wrapper").addClass("out-right").removeClass("in"), $("#categories1-wrapper").removeClass("out")) : "all" == a ? ($("#breadcrumbs-category-2").text(""), $("#breadcrumbs-category-3").text(""), updateSize()) : (makeCategory3(a), $("#breadcrumbs-category-2").text($(this).children(".categories-text").text()), "true" === $(this).attr("edge") ? (category_permalink = $(this).attr("cat2permalink"), category_permalink.length ? $("#kategori-tab").children("i").show() : $("#kategori-tab").children("i").hide(), $("#breadcrumbs-category-3").text(""), setCategory2(a, $(this).text(), $(this).attr("category_size_id"))) : (updateSize($(this).attr("category_size_id")), $(".categories3-item").hide(), $('.categories3-item[categories2parent="' + a + '"]').show(), $("#categories2-wrapper").addClass("out-left").removeClass("in"), $("#categories3-wrapper").addClass("in")))
	})
}

function makeCategory3(a) {
	var b = getChildrenCategory(a),
		c = "";
	c += '<div class="categories3-item" categories3value="back" categories2parent="' + a + '">', c += '<span class="categories-image fa fa-angle-left"></span>', c += '<span class="categories-text">Back</span>', c += "</div>", b && b.length && (c += '<div class="categories3-item" categories3value="all" categories2parent="' + a + '" data-dismiss="modal">', c += '<span class="categories-image"></span>', c += '<span class="categories-text">Semua ' + b[0].breadcrumb[2].name + " </span>", c += "</div>");
	for (var d = 0; d < b.length; d++) {
		!b[d].children.length;
		c += '<div class="categories3-item" cat3permalink="' + b[d].permalink + '" categories3value="' + b[d]._id + '" categories2parent="' + a + '" category_size_id="' + b[d].category_size_id + '">', c += '<span class="categories-image"></span>', c += '<span class="categories-text">' + b[d].name + "</span>", c += "</div>"
	}
	$("#categories3-wrapper").html(c), $(".categories3-item").click(function () {
		var a = $(this).attr("categories3value");
		"back" == a ? ($("#categories2-wrapper").removeClass("out-left").addClass("in"), $("#categories3-wrapper").removeClass("in")) : "all" == a ? $("#breadcrumbs-category-3").text("") : (category_permalink = $(this).attr("cat3permalink"), category_permalink.length ? $("#kategori-tab").children("i").show() : $("#kategori-tab").children("i").hide(), $("#breadcrumbs-category-3").text($(this).children(".categories-text").text()), setCategory2(a, $(this).text(), $(this).attr("category_size_id")))
	})
}

function makeCategory() {
	var a = "";
	a += '<div class="categories1-item" categories1value="all" data-dismiss="modal">', a += '<img class="categories-image" src="https://s3-ap-southeast-1.amazonaws.com/prelo/images/categories/all2.png">', a += '<span class="categories-text"> All </span>', a += "</div>";
	for (var b = 0; b < categories.length; b++) {
		categories[b].children || [];
		a += '<div class="categories1-item" categories1permalink="' + categories[b].permalink + '" categories1value="' + categories[b]._id + '">', a += '<img class="categories-image" src="' + categories[b].image_name + '">', a += '<span class="categories-text">' + categories[b].name + "</span>", a += "</div>"
	}
	$("#categories1-wrapper").html(a), $(".categories1-item").click(function () {
		var a = $(this).attr("categories1value");
		"all" == a ? ($("#category_id").show(), $("#breadcrumbs-category-1").text(""), $("#breadcrumbs-category-2").text(""), $("#breadcrumbs-category-3").text(""), $("#select-category").hide(), category_permalink = "all", updateSize(), updateSegment(), $("#kategori-tab").children("i").hide()) : (category_permalink = $(this).attr("categories1permalink"), category_permalink.length ? $("#kategori-tab").children("i").show() : $("#kategori-tab").children("i").hide(), $("#breadcrumbs-category-1").text($(this).children(".categories-text").text()), $("#breadcrumbs-category-2").text(""), $("#breadcrumbs-category-3").text(""), $("#category_id").hide(), $("#select-category").show(), updateSegment(a), updateSize(), makeCategory2(a), $("#categories1-wrapper").addClass("out"), $("#categories2-wrapper").addClass("in").removeClass("out-right"), isCategoryLuxuryTemp = "men" == $(this).text().toLowerCase() || "women" == $(this).text().toLowerCase())
	})
}

function setCategory2(a, b, c) {
	updateSize(c), $("#category_id").val(b), $("#categories-modal").modal("hide"), isCategoryLuxury = isCategoryLuxuryTemp
}

function hookSize() {
	$("#filter-sizes-form input[type='checkbox']").change(function () {
		var a = urlQuery.sizes || [],
			b = $(this).val();
		if (1 == $(this).prop("checked")) a.push(b);
		else if (0 == $(this).prop("checked")) {
			var c = a.indexOf(b);
			c > -1 && a.splice(c, 1)
		}
		urlQuery.sizes = a, urlQuery.sizes.length ? $("#ukuran-tab").children("i").show() : $("#ukuran-tab").children("i").hide()
	})
}

function hookSegment() {
	$("#filter-segment-form input[type='checkbox']").change(function () {
		var a = urlQuery.segments || [];
		urlQuery.segments && "string" == typeof urlQuery.segments && (a = urlQuery.segments.split(",") || "");
		var b = $(this).val();
		if (1 == $(this).prop("checked")) a.push(b);
		else if (0 == $(this).prop("checked")) {
			var c = a.indexOf(b);
			c > -1 && a.splice(c, 1)
		}
		urlQuery.segments = a
	})
}

function updateSize(a) {
	if (urlQuery.sizes = "", $("#ukuran-tab").children("i").hide(), a && "null" != a) {
		var b = "";
		b += '<div class="one-sizes">';
		for (var c = 0; c < category_sizes.length; c++)
			if (category_sizes[c]._id == a) {
				b += '<div class="filter-subwrapper" style="display:block">';
				for (var d = 0; d < category_sizes[c].size_types[0].sizes.length; d++) {
					for (var e = "", f = "", g = 0; g < category_sizes[c].size_types.length; g++) 0 != g && (e += " | "), e += category_sizes[c].size_types[g].name + " ", e += category_sizes[c].size_types[g].sizes[d], 0 != g && (f += "/"), f += category_sizes[c].size_types[g].sizes[d];
					b += '<div class="filter-subwrapper-radio">', b += '<input type="checkbox" id="sizes_' + (d + 1) + '" name="sizes_' + (d + 1) + '" value="' + f + '"></input>', b += '<label style="font-weight: 400; margin: 0" for="sizes_' + (d + 1) + '">' + e + "</label></div>"
				}
				b += "</div></div>", $("#filter-sizes-form").html(b), $("#ukuran-tab").show(), hookSize();
				break
			}
	} else $("#ukuran-tab").hide()
}

function updateSegment(a) {
	if (urlQuery.segments = "", $("#segment-category").html(""), a && "null" != a) {
		for (var b = "", c = 0; c < categories.length; c++)
			if (categories[c]._id === a) {
				if (categories[c].segments.length > 0) {
					b += '<div class="filter-heading"> Pilih Segmen </div>', b += '<form id="filter-segment-form">';
					for (var d = 0; d < categories[c].segments.length; d++) b += '<div class="filter-subwrapper">', b += '<div class="filter-subwrapper-radio" style="padding-top: 5px; padding-bottom: 0; border-bottom: 0">', b += '<input type="checkbox" id="product_segment_' + d + '" name="product_segment" index="' + d + '" value="' + categories[c].segments[d].type + '" style = "margin: 0"></input>', b += '<label style="font-weight: 400" for="product_segment_' + d + '">' + categories[c].segments[d].name + "</label>", b += "</div></div>";
					b += "</form></div>"
				}
				break
			}
		$("#segment-category").html(b), hookSegment()
	}
}

function regionOptionFactory(a) {
	for (var b = "", c = 0; c < provinces_regions.length; c++)
		if (provinces_regions[c]._id == a) {
			b += "<option value=''>Semua Kota/Kabupaten</option>";
			for (var d = 0; d < provinces_regions[c].regions.length; d++) b += "<option value='" + provinces_regions[c].regions[d]._id + "'>" + provinces_regions[c].regions[d].name + "</option>"
		}
	return b
}

function hookCategoryAccordion() {
	$(".parent-category i").click(function () {
		console.log($(this).parent(".parent-category")), $(this).parents(".one-category").siblings(".one-category").children(".sub-category-wrapper").slideUp(), $(this).parent(".parent-category").siblings(".sub-category-wrapper").slideToggle()
	}), $("#kategori-mobile-wrapper a").click(function () {
		$("#filter-modal").modal("hide")
	})
}

function hookCategoryWithRebuild(a) {
	var b = (a.attr("category"), a.attr("href")),
		c = b + "?search=" + urlQuery.name + rebuildQuery(urlQuery);
	window.location.href = c
}

function updateStickyFilterMobile() {
	var a = $(window).scrollTop(),
		b = $("#filter-mobile").offset().top,
		c = $("#header-new").innerHeight();
	b < a + c ? $("#filter-mobile-fixed").slideDown() : $("#filter-mobile-fixed").slideUp()
}

function filterDashboardFactory(a, b, c) {
	var d = "";
	return b && a && c && (d += "<div class='" + c + "-selected-item'>", d += "<span class='" + c + "-selected-item__name' " + c + "_value='" + b + "'>", d += a, d += "</span>", d += "<span class='" + c + "-selected-item__clear'>", d += "×", d += "</span>", d += '<div class="clearfix"></div>', d += "</div>"), d
}

function flagDefaultValueMobile(a) {
	if (urlQuery.sortby) {
		var b = $('input[name="sort"][value="' + urlQuery.sortby + '"]').parent("label").text();
		$("#filter-sort .filter-value .value").text(b), $("#filter-sort-mobile .filter-value .value").text(b), $('input[name="sort"]').prop("checked", !1), $('input[name="sort"][value="' + urlQuery.sortby + '"]').prop("checked", !0)
	}
	var c = 0;
	if ((urlQuery.province || urlQuery.region) && ($("#dari-tab").children("i").show(), c++), urlQuery.brand) {
		var d = urlQuery.brand.split(",").filter(Boolean).length;
		$("#merek-tab").children("i").show(), c += d
	}
	if (urlQuery.cond) {
		var e = urlQuery.cond.split(",").filter(Boolean).length;
		$("#kondisi-tab").children("i").show(), c += e
	}
	if (urlQuery.ongkir && ($("#ongkir-tab").children("i").show(), c++), urlQuery.min && ($("#harga-tab").children("i").show(), c++), urlQuery.max && ($("#harga-tab").children("i").show(), c++), urlQuery.sizes) {
		console.log(urlQuery.sizes.split(","));
		var f = urlQuery.sizes.split(",").filter(Boolean).length;
		console.log(f), $("#ukuran-tab").children("i").show(), c += f
	}
	urlQuery.shippings && $("#kurir-tab").children("i").show()
}

function flagDefaultValue(a) {
	if (urlQuery.sortby && "hot" != urlQuery.sortby && ($("#sort-by").val(urlQuery.sortby), $("#sort-wrapper .filter-heading").css("border-color", "#ffa800")), urlQuery.cond)
		for (var b = urlQuery.cond.split(","), c = 0; c < b.length; c++) $("#product_condition_" + b[c]).prop("checked", "true"), $('.cond-selected-item__name[cond_value="' + b[c] + '"]').parent(".cond-selected-item").show(), $("#filter-label").show();
	"1" == urlQuery.ongkir && ($("#ongkir-wrapper #is_free_ongkir").prop("checked", "true"), $("#ongkir-checkbox").prop("checked", !0), $(".ongkir-selected-item").show(), $("#filter-label").show());
	var d = "";
	if (urlQuery.min && ($("#price-min").val(urlQuery.min), d = "Min " + toRupiah(urlQuery.min)), urlQuery.max && ($("#price-max").val(urlQuery.max), d = "Max " + toRupiah(urlQuery.max)), urlQuery.min && urlQuery.max && (d = toRupiah(urlQuery.min) + " - " + toRupiah(urlQuery.max)), (urlQuery.min || urlQuery.max) && ($(".price-selected-item__name").text(d), $(".price-selected-item").show(), $("#filter-label").show()), urlQuery.sizes) {
		for (var e = urlQuery.sizes.split(","), c = 0; c < e.length; c++) {
			$('#filter-sizes-form input[type="checkbox"][value="' + e[c] + '"]').prop("checked", "true").parents(".filter-subwrapper").slideDown();
			var f = $('#filter-sizes-form input[type="checkbox"][value="' + e[c] + '"]').siblings("label").text();
			$("#filter-actives").append(filterDashboardFactory(f, e[c], "size")), $("#filter-label").show()
		}
		hookClearSize()
	}
	if (urlQuery.segments) {
		for (var g = urlQuery.segments.split(","), c = 0; c < g.length; c++) {
			$('#filter-segment-form input[type="checkbox"][value="' + g[c] + '"]').prop("checked", "true");
			var f = $('#filter-segment-form input[type="checkbox"][value="' + g[c] + '"]').siblings("label").text();
			$("#filter-actives").append(filterDashboardFactory(f, g[c], "segment")), $("#filter-label").show()
		}
		hookClearSegment()
	}
	if (urlQuery.shippings) {
		for (var h = urlQuery.shippings.split(","), c = 0; c < h.length; c++) {
			$('#filter-shipping-form input[type="checkbox"][value="' + h[c] + '"]').prop("checked", "true");
			var f = $('#filter-shipping-form input[type="checkbox"][value="' + h[c] + '"]').siblings("label").text();
			$("#filter-actives").append(filterDashboardFactory(f, h[c], "shipping")), $("#filter-label").show()
		}
		hookClearShipping()
	}
	if (urlQuery.brand && (filterBrand(), $("#brand-selected-list").fadeIn(), $("#filter-label").show()), urlQuery.province) {
		$("#province-selector").val(urlQuery.province);
		var i = $("#province-selector option:selected").text();
		if ($("#filter-actives").append(filterDashboardFactory(i, urlQuery.province, "province")), urlQuery.region && provinces_regions.length > 0) {
			$("#region-selector").val(urlQuery.region);
			var j = $("#region-selector option:selected").text();
			$("#filter-actives").append(filterDashboardFactory(j, urlQuery.region, "region"))
		}
	}
	if (urlQuery.listing)
		for (var k = urlQuery.listing.split(","), c = 0; c < k.length; c++) $("#listing_" + k[c]).prop("checked", "true"), $('.listing-selected-item__name[listing_value="' + k[c] + '"]').parent(".listing-selected-item").show(), $("#filter-label").show()
}

function hookClearSize() {
	$(".size-selected-item").click(function () {
		var a = $(this).find(".size-selected-item__name").attr("size_value");
		console.log(a), $('input[value="' + a + '"]').prop("checked", !1);
		var b = urlQuery.sizes.split(",") || "",
			c = b.indexOf(a);
		c > -1 && b.splice(c, 1), urlQuery.sizes = b, console.log(urlQuery.sizes), omniRedirect(urlQuery), $(this).fadeOut()
	})
}

function hookClearSegment() {
	$(".segment-selected-item").click(function () {
		var a = $(this).find(".segment-selected-item__name").attr("segment_value");
		$('input[value="' + a + '"]').prop("checked", !1);
		var b = urlQuery.segments.split(",") || "",
			c = b.indexOf(a);
		c > -1 && b.splice(c, 1), urlQuery.segments = b, omniRedirect(urlQuery), $(this).fadeOut()
	})
}

function hookClearShipping() {
	$(".shipping-selected-item").click(function () {
		var a = $(this).find(".shipping-selected-item__name").attr("shipping_value");
		$('input[value="' + a + '"]').prop("checked", !1);
		var b = urlQuery.shippings.split(",") || "",
			c = b.indexOf(a);
		c > -1 && b.splice(c, 1), urlQuery.shippings = b, omniRedirect(urlQuery), $(this).fadeOut()
	})
}

function resetBrand() {
	urlQuery.brand = "", omniRedirect(urlQuery)
}

function makeBreadcrumbs(a) {
	function b(a) {
		for (var b = a._data, c = "", d = 0; d < b.length; d++) 0 == d && (c += "<span category='" + b[0]._id + "'>", c += "<i class='fa fa-search'></i>", c += "</span>"), c += "<a category='" + b[d]._id + "'>", c += b[d].name, c += "</a>", d != b.length - 1 && (c += "<i class='fa fa-caret-right'></i>");
		$("#breadcrumbs-wrapper").append(c), $("#breadcrumbs-wrapper a").click(function () {
			hookCategory($(this))
		}), $("#breadcrumbs-wrapper").fadeIn()
	}

	function c(a, b, c) {}
	$.ajax({
		url: "/api/breadcrumb/category/" + urlQuery.category,
		success: b,
		error: c
	})
}

function hookCategory(a) {
	var b = a.attr("category"),
		c = window.location.href,
		d = c.substring(0, c.indexOf("?"));
	if (c.indexOf("?") > -1) {
		for (var e, f = [], g = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&"), h = 0; h < g.length; h++) e = g[h].split("="), f.push(e[0]), f[e[0]] = e[1];
		for (var i = d + "?", j = 0; j < f.length; j++) i += f[j], i += "=", "category" == f[j] && (i += b), i += "page" == f[j] ? 1 : f[f[j]], j != f.length - 1 && (i += "&");
		window.location.href = i
	} else {
		var i = c + "?category=" + b;
		window.location.href = i
	}
}

function getCategoryFilter(a) {
	function b(b) {
		function c(b) {
			if (b.children.length > 0)
				if (b._id == a) {
					$("#cat-current").text(b.name), $("#cat-current-mobile").text(b.name);
					for (index in b.children) {
						var d = "";
						d += '<a class="cat-children" category="' + b.children[index]._id + '">', d += b.children[index].name, d += "</a>", $("#cat-children-wrapper").append(d), $("#cat-children-wrapper-mobile").append(d)
					}
					$("#kategori-wrapper").fadeIn(), $("#kategori-wrapper-mobile").fadeIn()
				} else
					for (index in b.children) c(b.children[index]);
			else if (b._id == a) {
				$("#cat-current").text(b.name), $("#cat-current-mobile").text(b.name);
				var d = "<div class='cat-children-none'>Tidak ada sub-kategori</div>";
				$("#cat-children-wrapper").append(d), $("#kategori-wrapper").fadeIn(), $("#kategori-wrapper-mobile").fadeIn()
			}
		}
		0 == b._data.length || (c(b._data[0]), $(".cat-children").click(function () {
			hook($(this))
		}))
	}

	function c(a, b, c) {
		$("#kategori-wrapper").fadeOut()
	}
	$.ajax({
		url: "/api/reference/categories",
		success: b,
		error: c
	})
}

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
		list: "search"
	}), ga("send", "event", "enhanced ecommerce", "Product clicks", f)
}
if ($("#search-page-wrapper").length || $("#category-wrapper").length) {
	var urlQuery = {};
	urlQuery.name = getUrlVars().name || getUrlVars().search || "", urlQuery.category = getUrlVars().category || "55de6d4e9ffd40362ae310a7", urlQuery.sortby = getUrlVars().sortby || "hot", urlQuery.cond = getUrlVars().cond || "", urlQuery.brand = getUrlVars().brand || "", "undefined" != typeof brand_permalink && (urlQuery.brand = brand_permalink), urlQuery.min = getUrlVars().min || "", urlQuery.max = getUrlVars().max || "", urlQuery.page = getUrlVars().page || 1, urlQuery.limit = getUrlVars().limit || "", urlQuery.ongkir = getUrlVars().ongkir || "", urlQuery.sizes = getUrlVars().sizes || "", urlQuery.province = getUrlVars().province || "", urlQuery.region = getUrlVars().region || "", urlQuery.listing = getUrlVars().listing || "", is_sewa_category && (urlQuery.listing = "1"), urlQuery.segments = getUrlVars().segments || "", urlQuery.shippings = getUrlVars().shippings || "";
	var provinces_regions = [],
		category_permalink, is_mobile = window.innerWidth < 768,
		arrayBrand = urlQuery.brand.split(",");
	window.innerWidth < 768 ? $(".widget:not(#kategori-wrapper)").remove() : ($("#dari").html(""), $("#ukuran").html(""), $("#kurir").html(""), $("#filter-modal").remove());
	var once = 1;
	$(window).on("resize", function () {
		1 === once && (responsiveBrandField(), once = 999)
	});
	var optionsAutoComplete = {
		url: function (a) {
			return "/api/frontend/brands/?query=" + a
		},
		getValue: "name",
		list: {
			onChooseEvent: function () {
				var a = $("#brand").getSelectedItemData()._id,
					b = $("#brand").getSelectedItemData().name,
					c = $("#brand").getSelectedItemData().permalink;
				arrayBrand.indexOf(c) == -1 && (appendBrandItemFilter(a, b, c), "" == urlQuery.brand ? urlQuery.brand = c : urlQuery.brand += "," + c, arrayBrand = urlQuery.brand.split(","), urlQuery.brand.length ? $("#merek-tab").children("i").show() : $("#merek-tab").children("i").hide(), $("#brand").val(""), filterBrand())
			}
		},
		listLocation: "_data"
	};
	$("#price-min").change(function () {
		urlQuery.min = $(this).val(), urlQuery.min.length || urlQuery.max.length ? $("#harga-tab").children("i").show() : $("#harga-tab").children("i").hide()
	}), $("#price-max").change(function () {
		urlQuery.max = $(this).val(), urlQuery.min.length || urlQuery.max.length ? $("#harga-tab").children("i").show() : $("#harga-tab").children("i").hide()
	}), $(".sizes-heading").click(function () {
		$(this).siblings(".filter-subwrapper").slideToggle().promise().done(function () {
			try {
				updateStickyFilter(), updateStickyFilter()
			} catch (a) {}
		}), $(this).find("i").toggleClass("fa-chevron-down").toggleClass("fa-chevron-up")
	}), $("#apply-filter").click(function () {
		1 == urlQuery.brand.split(",").length && "" != urlQuery.brand.split(",")[0] && "55de6d4e9ffd40362ae310a7" == urlQuery.category && "" == urlQuery.cond && "" == urlQuery.max && "" == urlQuery.min && "" == urlQuery.name && "" == urlQuery.ongkir && "" == urlQuery.province && "" == urlQuery.region && "" == urlQuery.sizes && "" == urlQuery.listing ? window.location.href = "/merek/" + urlQuery.brand.split(",")[0] : omniRedirect(urlQuery)
	});
	var categories = [],
		rent_categories, all_categories, category_sizes;
	getCategoryFilterMobile(), hookSegment(), $("#filter-shipping-form input[type='checkbox']").change(function () {
		var a = urlQuery.shippings || [];
		urlQuery.shippings && "string" == typeof urlQuery.shippings && (a = urlQuery.shippings.split(",") || "");
		var b = $(this).val();
		if (1 == $(this).prop("checked")) a.push(b);
		else if (0 == $(this).prop("checked")) {
			var c = a.indexOf(b);
			c > -1 && a.splice(c, 1)
		}
		urlQuery.shippings = a, !is_mobile && $("#search-page-wrapper").length && omniRedirect(urlQuery), urlQuery.shippings.length ? $("#kurir-tab").children("i").show() : $("#kurir-tab").children("i").hide()
	}), $("#category_id").click(function () {
		$("#categories-modal").modal("show")
	}), $("#breadcrumbs-category").click(function () {
		$("#categories-modal").modal("show")
	}), $("#category_id").focus(function () {
		$(this).blur(), $("#categories-modal").modal("show")
	}), $("#province-selector").change(function () {
		urlQuery.province = $(this).val(), urlQuery.region = "", urlQuery.province ? (console.log("masuk"), provinces_regions.length > 0 && ($("#region-selector").html(regionOptionFactory(urlQuery.province)), $("#region-selector").show(), $("#region-title").show())) : (console.log("else"), $("#region-selector").hide(), $("#region-title").hide()), urlQuery.province.length || urlQuery.region.length ? $("#dari-tab").children("i").show() : $("#dari-tab").children("i").hide(), $("#filter-location-form .btn").show()
	}), $("#region-selector").change(function () {
		urlQuery.region = $(this).val(), $("#filter-location-form .btn").show()
	}), $("#filter-location-form .btn").click(function (a) {
		omniRedirect(urlQuery)
	}), $(window).scroll(function () {
		window.innerWidth < 768 && updateStickyFilterMobile()
	}), window.innerWidth < 768 && updateStickyFilterMobile(), shrinkModalBody($("#segment-modal")), $("#filter-filter").click(function () {
		$(".body-filter").hide(), $("#apply-filter-mobile").show(), $("#modal-body-filter").show(), $("#modal-footer-wrapper").show(), $('.nav-tabs a[href="#merek"]').tab("show"), $("#filter-modal").modal("show")
	}), $("#filter-category").click(function () {
		$(".body-filter").hide(), $("#apply-filter-mobile").hide(), $("#modal-body-filter").show(), $("#modal-footer-wrapper").show(), $('.nav-tabs a[href="#kategori"]').tab("show"), $("#filter-modal").modal("show")
	}), $("#filter-sort").click(function () {
		$(".body-filter").hide(), $("#modal-body-sort").show(), $("#sort-modal").modal("show")
	}), $("#filter-all").click(function () {
		$(".body-filter").hide(), $("#apply-filter-mobile").show(), $("#modal-body-filter").show(), $("#modal-footer-wrapper").show(), $("#filter-modal").modal("show")
	}), $("#filter-filter-mobile").click(function () {
		$(".body-filter").hide(), $("#apply-filter-mobile").show(), $("#modal-body-filter").show(), $("#modal-footer-wrapper").show(), $('.nav-tabs a[href="#merek"]').tab("show"), $("#filter-modal").modal("show")
	}), $("#filter-category-mobile").click(function () {
		$(".body-filter").hide(), $("#apply-filter-mobile").hide(), $("#modal-body-filter").show(), $("#modal-footer-wrapper").show(), $('.nav-tabs a[href="#kategori"]').tab("show"), $("#filter-modal").modal("show")
	}), $("#filter-sort-mobile").click(function () {
		$(".body-filter").hide(), $("#modal-body-sort").show(), $("#sort-modal").modal("show")
	}), $("#filter-all-mobile").click(function () {
		$(".body-filter").hide(), $("#apply-filter-mobile").show(), $("#modal-body-filter").show(), $("#modal-footer-wrapper").show(), $("#filter-modal").modal("show")
	}), $("#brand").easyAutocomplete(optionsAutoComplete), $("#append-here .easy-autocomplete").css("width", "100%"), $("#apply-filter-mobile").click(function () {
		omniRedirect(urlQuery)
	}), $("#apply-button").click(function () {
		omniRedirect(urlQuery)
	}), $("#reset-button").click(function () {
		$("#modal-body-wrapper").find("form").trigger("reset"), $("#filter-tabs").find("i").hide(), $("#region-title").hide(), $("#region-selector").hide(), $("#category_id").show(), $("#breadcrumbs-category-1").text(""), $("#breadcrumbs-category-2").text(""), $("#breadcrumbs-category-3").text(""), $("#select-category").hide(), $("#ukuran-tab").children("i").hide(), $("#brand-selected-list").html(""), $("#segment-category").html(""), category_permalink = "all", resetAll()
	}), $('[name="sort"]').change(function () {
		$("#filter-modal").modal("hide"), urlQuery.sortby = $(this).val(), omniRedirect(urlQuery)
	})
}
if ($("#category-wrapper").length) urlQuery.category = current_cat_id, $("#sort-by").change(function () {
	urlQuery.sortby = $(this).val(), omniRedirect(urlQuery)
}), segment >= 0 && (urlQuery.segments = $("#product_segment_" + segment).val()), is_sewa && ($("#listing_1").prop("checked", "true"), urlQuery.listing = "1"), $("#filter-sizes-form input[type='checkbox']").change(function () {
	var a = urlQuery.sizes || [],
		b = $(this).val();
	if (1 == $(this).prop("checked")) a.push(b);
	else if (0 == $(this).prop("checked")) {
		var c = a.indexOf(b);
		c > -1 && a.splice(c, 1)
	}
	urlQuery.sizes = a, urlQuery.sizes.length ? $("#ukuran-tab").children("i").show() : $("#ukuran-tab").children("i").hide()
}), $("#filter-condition-form input[type='checkbox']").change(function () {
	1 == $(this).prop("checked") ? "" == urlQuery.cond ? urlQuery.cond = $(this).attr("index") : urlQuery.cond += "," + $(this).attr("index") : 0 == $(this).prop("checked") && (urlQuery.cond.length > 1 ? 0 == urlQuery.cond.indexOf($(this).attr("index")) ? urlQuery.cond = urlQuery.cond.replace($(this).attr("index") + ",", "") : urlQuery.cond = urlQuery.cond.replace("," + $(this).attr("index"), "") : urlQuery.cond = urlQuery.cond.replace($(this).attr("index"), "")), urlQuery.cond.length ? $("#kondisi-tab").children("i").show() : $("#kondisi-tab").children("i").hide()
}), $("#filter-ongkir-form input[type='checkbox']").change(function () {
	1 == $(this).prop("checked") ? (urlQuery.ongkir = "1", $(".ongkir-selected-item").fadeIn()) : (urlQuery.ongkir = "", $(".ongkir-selected-item").fadeOut()), urlQuery.ongkir.length ? $("#ongkir-tab").children("i").show() : $("#ongkir-tab").children("i").hide()
}), $("#ongkir-checkbox").change(function () {
	1 == $("#ongkir-checkbox").prop("checked") ? (urlQuery.ongkir = "1", $("#ongkir-checkbox").prop("checked", !0)) : (urlQuery.ongkir = "0", $("#ongkir-checkbox").prop("checked", !1)), omniRedirect(urlQuery)
}), $("#filter-listing-form input[type='checkbox']").change(function () {
	"1" === urlQuery.listing && hookClearCategory(), 1 == $(this).prop("checked") ? "" == urlQuery.listing ? urlQuery.listing = $(this).attr("index") : urlQuery.listing += "," + $(this).attr("index") : 0 == $(this).prop("checked") && (urlQuery.listing.length > 1 ? 0 == urlQuery.listing.indexOf($(this).attr("index")) ? urlQuery.listing = urlQuery.listing.replace($(this).attr("index") + ",", "") : urlQuery.listing = urlQuery.listing.replace("," + $(this).attr("index"), "") : urlQuery.listing = urlQuery.listing.replace($(this).attr("index"), "")),
		"1" === urlQuery.listing ? (categories = rent_categories, hookClearCategory(), makeCategory()) : (categories = all_categories, makeCategory())
});
else if ($("#search-page-wrapper").length) {
	var is_search_user = getUrlVars().user || "";
	"1" === is_search_user && ($(document).prop("title", "Cari Pengguna " + urlQuery.name), $("#tab-product").removeClass("tab-active"), $("#tab-user").addClass("tab-active"), $("#product-selector").hide(), $("#filter-selector").removeClass("width-full").addClass("width-zero"), $("#user-selector").show().removeClass("col-md-9").addClass("col-md-12"), $("#heading-selector").removeClass("col-md-9").addClass("col-md-12")), flagDefaultValueMobile(), $("#apply-filter-mobile").remove(), $(".filter-reset").click(function () {
		resetAll()
	}), $(document).ready(function () {
		"undefined" != typeof use_api && use_api ? $(function () {
			getSearchResult(name, urlQuery.category), getCategoryFilter(urlQuery.category), makeBreadcrumbs(category)
		}) : $(function () {
			function a() {
				rebuildQuery(urlQuery), $("#filter-price-form .btn").fadeIn()
			}
			$("#search-form").submit(function (a) {}), $("#breadcrumbs-wrapper a").click(function (a) {
				a.preventDefault(), hookCategoryWithRebuild($(this))
			}), flagDefaultValue(urlQuery), $("#brand-wrapper .filter-heading").click(function () {
				$("#brand").easyAutocomplete(optionsAutoComplete)
			}), $(".cat-parent").click(function (a) {
				a.preventDefault(), hookCategoryWithRebuild($(this))
			}), $(".cat-children").click(function (a) {
				a.preventDefault(), hookCategoryWithRebuild($(this))
			}), $("#sort-by").change(function () {
				urlQuery.sortby = $(this).val(), omniRedirect(urlQuery)
			}), $("#filter-sizes-form input[type='checkbox']").change(function () {
				var a = urlQuery.sizes || [];
				urlQuery.sizes && "string" == typeof urlQuery.sizes && (a = urlQuery.sizes.split(",") || "");
				var b = $(this).val();
				if ($('.size-selected-item__name[size_value="' + b + '"]').parent(".size-selected-item").fadeOut(), 1 == $(this).prop("checked")) a.push(b);
				else if (0 == $(this).prop("checked")) {
					var c = a.indexOf(b);
					c > -1 && a.splice(c, 1)
				}
				urlQuery.sizes = a, is_mobile || omniRedirect(urlQuery), urlQuery.sizes.length ? $("#ukuran-tab").children("i").show() : $("#ukuran-tab").children("i").hide()
			}), $("#filter-condition-form input[type='checkbox']").change(function () {
				1 == $(this).prop("checked") ? ("" == urlQuery.cond ? urlQuery.cond = $(this).attr("index") : urlQuery.cond += "," + $(this).attr("index"), $('.cond-selected-item__name[cond_value="' + $(this).attr("index") + '"]').parent().show()) : 0 == $(this).prop("checked") && (urlQuery.cond.length > 1 ? 0 == urlQuery.cond.indexOf($(this).attr("index")) ? urlQuery.cond = urlQuery.cond.replace($(this).attr("index") + ",", "") : urlQuery.cond = urlQuery.cond.replace("," + $(this).attr("index"), "") : urlQuery.cond = urlQuery.cond.replace($(this).attr("index"), ""), $('.cond-selected-item__name[cond_value="' + $(this).attr("index") + '"]').parent().hide());
				var a = urlQuery.cond.split(",").filter(function (a, b, c) {
					return c.indexOf(a) === b
				});
				urlQuery.cond = "";
				for (var b = 0; b < a.length; b++) urlQuery.cond += a[b], b < a.length - 1 && (urlQuery.cond += ",");
				is_mobile || omniRedirect(urlQuery), urlQuery.cond.length ? $("#kondisi-tab").children("i").show() : $("#kondisi-tab").children("i").hide()
			}), $(".cond-selected-item").click(function () {
				var a = $(this).children(".cond-selected-item__name").attr("cond_value");
				urlQuery.cond.length > 1 ? 0 == urlQuery.cond.indexOf(a) ? urlQuery.cond = urlQuery.cond.replace(a + ",", "") : urlQuery.cond = urlQuery.cond.replace("," + a, "") : urlQuery.cond = urlQuery.cond.replace(a, ""), $("#product_condition_" + a).prop("checked", !1), is_mobile || omniRedirect(urlQuery)
			}), $("#filter-ongkir-form input[type='checkbox']").change(function () {
				1 == $(this).prop("checked") ? (urlQuery.ongkir = "1", $(".ongkir-selected-item").fadeIn()) : (urlQuery.ongkir = "", $(".ongkir-selected-item").fadeOut()), is_mobile || omniRedirect(urlQuery), urlQuery.ongkir.length ? $("#ongkir-tab").children("i").show() : $("#ongkir-tab").children("i").hide()
			}), $("#ongkir-checkbox").change(function () {
				1 == $("#ongkir-checkbox").prop("checked") ? (urlQuery.ongkir = "1", $("#ongkir-checkbox").prop("checked", !0)) : (urlQuery.ongkir = "0", $("#ongkir-checkbox").prop("checked", !1)), is_mobile || omniRedirect(urlQuery), urlQuery.ongkir.length ? $("#ongkir-tab").children("i").show() : $("#ongkir-tab").children("i").hide()
			}), $("#price-min").change(function () {
				urlQuery.min = $(this).val(), urlQuery.min.length || urlQuery.max.length ? $("#harga-tab").children("i").show() : $("#harga-tab").children("i").hide(), a()
			}), $("#price-max").change(function () {
				urlQuery.max = $(this).val(), urlQuery.min.length || urlQuery.max.length ? $("#harga-tab").children("i").show() : $("#harga-tab").children("i").hide(), a()
			}), $("#price-min").focus(function () {
				urlQuery.min = $(this).val(), urlQuery.min.length || urlQuery.max.length ? $("#harga-tab").children("i").show() : $("#harga-tab").children("i").hide(), a()
			}), $("#price-max").focus(function () {
				urlQuery.max = $(this).val(), urlQuery.min.length || urlQuery.max.length ? $("#harga-tab").children("i").show() : $("#harga-tab").children("i").hide(), a()
			}), $("#filter-price-form .btn").click(function () {
				omniRedirect(urlQuery)
			}), $(".price-selected-item").click(function () {
				urlQuery.min = "", urlQuery.max = "", omniRedirect(urlQuery)
			}), $("#brand").focus(function () {
				$("#brand").prop("autocomplete", "off"), $("#filter-brand-form .btn").fadeIn()
			}), $("#filter-brand-form .btn").click(function () {
				1 == urlQuery.brand.split(",").length && "" != urlQuery.brand.split(",")[0] && "55de6d4e9ffd40362ae310a7" == urlQuery.category && "" == urlQuery.cond && "" == urlQuery.max && "" == urlQuery.min && "" == urlQuery.name && "" == urlQuery.ongkir && "" == urlQuery.province && "" == urlQuery.region && "" == urlQuery.sizes ? window.location.href = "/merek/" + urlQuery.brand.split(",")[0] : omniRedirect(urlQuery)
			}), $("#filter-actives .btn").click(function () {
				omniRedirect(urlQuery)
			}), $("#filter-active .btn").click(function () {
				omniRedirect(urlQuery)
			}), $("#filter-brand-form .clear-filter").click(function () {
				resetBrand()
			}), $("#search-box").val(decodeURIComponent(urlQuery.name)), $("#search-box-mobile").val(decodeURIComponent(urlQuery.name)), $("#name").val(urlQuery.name), $("#search-box").focus(function () {
				$(this).select()
			}), $("#search-box-mobile").focus(function () {
				$(this).select()
			}), $("#name").focus(function () {
				$(this).select()
			}), $("input:not([id='brand'])").keydown(function (a) {
				13 == a.keyCode && ("name" == $(this).attr("id") ? (urlQuery.name = $(this).val(), urlQuery.page = 1, is_mobile || omniRedirect(urlQuery)) : "price-min" == $(this).attr("id") ? (urlQuery.min = $(this).val(), is_mobile || omniRedirect(urlQuery)) : "price-max" == $(this).attr("id") && (urlQuery.max = $(this).val(), is_mobile || omniRedirect(urlQuery)))
			}), $(".province-selected-item").click(function (a) {
				urlQuery.province = "", urlQuery.region = "", omniRedirect(urlQuery)
			}), $("#name-button").click(function () {
				urlQuery.name = $("#name").val(), urlQuery.page = 1, omniRedirect(urlQuery)
			}), $("#filter-listing-form input[type='checkbox']").change(function () {
				"1" === urlQuery.listing && hookClearCategory(), 1 == $(this).prop("checked") ? ("" == urlQuery.listing ? urlQuery.listing = $(this).attr("index") : urlQuery.listing += "," + $(this).attr("index"), $('.listing-selected-item__name[listing_value="' + $(this).attr("index") + '"]').parent().show()) : 0 == $(this).prop("checked") && (urlQuery.listing.length > 1 ? 0 == urlQuery.listing.indexOf($(this).attr("index")) ? urlQuery.listing = urlQuery.listing.replace($(this).attr("index") + ",", "") : urlQuery.listing = urlQuery.listing.replace("," + $(this).attr("index"), "") : urlQuery.listing = urlQuery.listing.replace($(this).attr("index"), ""), $('.listing-selected-item__name[listing_value="' + $(this).attr("index") + '"]').parent().hide());
				var a = urlQuery.listing.split(",").filter(function (a, b, c) {
					return c.indexOf(a) === b
				});
				urlQuery.listing = "";
				for (var b = 0; b < a.length; b++) urlQuery.listing += a[b], b < a.length - 1 && (urlQuery.listing += ",");
				is_mobile || omniRedirect(urlQuery), "1" === urlQuery.listing ? (categories = rent_categories, hookClearCategory(), makeCategory()) : (categories = all_categories, makeCategory())
			}), $(".listing-selected-item").click(function () {
				var a = $(this).children(".listing-selected-item__name").attr("listing_value");
				urlQuery.listing.length > 1 ? 0 == urlQuery.listing.indexOf(a) ? urlQuery.listing = urlQuery.listing.replace(a + ",", "") : urlQuery.listing = urlQuery.listing.replace("," + a, "") : urlQuery.listing = urlQuery.listing.replace(a, ""), $("#listing_" + a).prop("checked", !1), is_mobile || omniRedirect(urlQuery)
			}), $(".shipping-selected-item").click(function () {
				var a = $(this).children(".listing-selected-item__name").attr("listing_value");
				urlQuery.listing.length > 1 ? 0 == urlQuery.listing.indexOf(a) ? urlQuery.listing = urlQuery.listing.replace(a + ",", "") : urlQuery.listing = urlQuery.listing.replace("," + a, "") : urlQuery.listing = urlQuery.listing.replace(a, ""), $("#listing_" + a).prop("checked", !1), is_mobile || omniRedirect(urlQuery)
			}), $(".page-prev").click(function () {
				--urlQuery.page, omniRedirect(urlQuery, !0)
			}), $(".page-next").click(function () {
				urlQuery.page++, omniRedirect(urlQuery, !0)
			})
		});
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
		a.preventDefault(), onProductClick($(this).parent(".product-wrapper")), window.location.href = $(this).attr("href")
	}), $(".tab-segment").click(function () {
		$(".tab-segment").removeClass("tab-active"), $(this).addClass("tab-active"), "tab-user" == $(this).attr("id") ? ($("#product-selector").hide(), $("#filter-selector").removeClass("width-full").addClass("width-zero"), $("#user-selector").show().removeClass("col-md-9").addClass("col-md-12"), $("#heading-selector").removeClass("col-md-9").addClass("col-md-12")) : ($("#user-selector").hide().removeClass("col-md-12").addClass("col-md-9"), $("#heading-selector").removeClass("col-md-12").addClass("col-md-9"), $("#filter-selector").removeClass("width-zero").addClass("width-full"), $("#product-selector").show())
	})
} else $("#search-buku-wrapper").length;
var token = Cookies.get("token");
$(".product-wrapper .love-button-icon").click(function (a) {
	function b(a) {
		console.log("suc"), f ? $("#product-" + e + " .love-button i").removeClass("fa-heart fa-2x").addClass("fa-heart-o fa-2x") : $("#product-" + e + " .love-button i").removeClass("fa-heart-o fa-2x").addClass("fa-heart fa-2x"), f = !f
	}

	function c(a, b, c) {
		console.log("err")
	}
	if (token) {
		var d = $(this).closest(".product-wrapper"),
			e = d.attr("product_id"),
			f = $(this).children(":first").hasClass("fa-heart"),
			g = "love";
		f && (g = "unlove"), $.ajax({
			url: "/api/product/" + e + "/" + g,
			method: "POST",
			beforeSend: function (a) {
				a.setRequestHeader("Authorization", "Token " + token)
			},
			success: b,
			error: c
		})
	} else $("#login-modal").modal("show")
});