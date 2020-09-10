function newWindow(a, b, c, d) {
	var e = screen.height / 2 - d / 2,
		f = screen.width / 2 - c / 2;
	window.open(a, b, "left=" + f + ",top=" + e + ",height=" + d + ",width=" + c)
}

function showSideNavigation() {
	hideSearchMobile(), $("#hamburger-button").removeClass("pr-bars"), $("#hamburger-button").addClass("pr-close"), $("#shadow-layer").addClass("is-visible"), $("#mobile-nav").addClass("speed-in"), $("body").addClass("overflow-hidden"), sideNavShowing = !0
}

function hideSideNavigation() {
	$("#hamburger-button").addClass("pr-bars"), $("#hamburger-button").removeClass("pr-close"), $("#shadow-layer").removeClass("is-visible"), $("#mobile-nav").removeClass("speed-in"), $("body").removeClass("overflow-hidden"), sideNavShowing = !1
}

function showSearchMobile() {
	hideSideNavigation(), $("#header-search-button").removeClass("pr-search"), $("#header-search-button").addClass("pr-close"), $("#shadow-layer").addClass("is-visible"), $("#mobile-search").addClass("speed-in"), searchMobileShowing = !0
}

function hideSearchMobile() {
	$("#header-search-button").addClass("pr-search"), $("#header-search-button").removeClass("pr-close"), $("#shadow-layer").removeClass("is-visible"), $("#mobile-search").removeClass("speed-in"), searchMobileShowing = !1
}

function reposition() {
	var a = $(this),
		b = a.find(".modal-dialog");
	a.css("display", "block"), b.css("margin-top", Math.max(0, ($(window).height() - b.height()) / 2))
}

function smoothScroll(a) {
	if (location.pathname.replace(/^\//, "") == a.pathname.replace(/^\//, "") && location.hostname == a.hostname) {
		var b = $(a.hash);
		if (b = b.length ? b : $("[name=" + a.hash.slice(1) + "]"), b.length) return $("html,body").animate({
			scrollTop: b.offset().top - 60
		}, 300), !1
	}
}

function toRupiah(a, b) {
	var c = "";
	parseInt(a) < 0 && (c = "-", a = a.toString().substr(1, a.length)), b = void 0 === b;
	for (var d = parseInt(a, 10).toString().split("").reverse().join(""), e = "", f = 0; f < d.length; f++) e += d[f], (f + 1) % 3 === 0 && f !== d.length - 1 && (e += ".");
	return b ? c + "Rp " + e.split("").reverse().join("") : c + e.split("").reverse().join("")
}

function getUrlVars() {
	for (var a, b = [], c = window.location.href.slice(window.location.href.indexOf("?") + 1).split("&"), d = 0; d < c.length; d++) a = c[d].split("="), b.push(a[0]), b[a[0]] = a[1];
	return b
}

function setInitOverflow() {
	$("#section-0").css("overflow", "initial"), $("#header").css("overflow", "hidden")
}

function setHiddenOverflow() {
	$("#section-0").css("overflow", "hidden")
}

function closeGuide(a) {
	$("#section-0").css("visibility", "hidden"), $("#section-0").css("overflow", "hidden"), $("#section-0").css("height", "0").on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function () {
		setHiddenOverflow()
	}), guideDisplayed = !1
}

function openGuide(a) {
	$("#section-0").css("height", "700").on("transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd", function () {
		setInitOverflow()
	}), $("#section-0").css("visibility", "visible"), $("#header").css("overflow", "hidden"), guideDisplayed = !0
}

function showSeller() {
	$("#seller-wrapper").fadeIn(), $("#buyer-wrapper").css("display", "none"), $("#control-seller").addClass("control-active"), $("#control-buyer").removeClass("control-active"), buyerDisplayed = !1
}

function showBuyer() {
	$("#seller-wrapper").css("display", "none"), $("#buyer-wrapper").fadeIn(), $("#control-buyer").addClass("control-active"), $("#control-seller").removeClass("control-active"), buyerDisplayed = !0
}

function buildTemplate(a, b) {
	var c = a.name,
		d = "Tanpa Merek";
	if (1 == b) {
		var e = a.name.indexOf("]");
		c = a.name.substring(e + 1, a.name.length), a.brand_name && (d = a.brand_name)
	}
	var f = a.display_picts[0];
	f && (f = f.replace("http://localhost:5000", image_server + ""));
	var g = "";
	return g += '<div class="col-xs-6 col-sm-6 col-md-3 column-product">', g += '<div id="product-' + a._id + '" class="product-wrapper">', g += '<a href="/' + a.permalink + ".html" + a.referral + '" class="product-wrapper-link">', 1 != a.status && (g += '<div class="product-badge"><div class="product-sold">Sold</div><div class="clearfix"></div></div>'), g += "<div style=\"background-image:url('" + f + '\');" class="product-image"></div>', g += '<div class="product-description">', 1 == b && (g += '<div style="font-weight: 700; color: #1f1f1f; text-overflow: ellipsis; overflow: hidden; white-space: nowrap;" class="product-description__brand">', g += d, g += "</div>"), g += '<div class="product-description__name">', g += c, g += '</div><div class="product-description-price-wrapper clearfix"><div class="product-description-price__old">', g += toRupiah(a.price_original), g += '</div><div class="product-description-price__new">', g += toRupiah(a.price), g += "</div></div></div>", g += "</a></div></div>"
}

function submitLogin(a) {
	function b(b) {
		var c = b._data.token || "",
			d = b._data.email || "",
			e = b._data.fullname || "",
			f = b._data.profile || {},
			g = b._data._id || "",
			h = b._data.username || "",
			i = b._data.default_address && !$.isEmptyObject(b._data.default_address) ? b._data.default_address : "";
		delete f.description, delete i._id, delete i.is_default, delete i.update_time, delete i.create_time, Cookies.set("token", c, {
			expires: 7
		}), Cookies.set("email", d, {
			expires: 7
		}), Cookies.set("fullname", e, {
			expires: 7
		}), Cookies.set("profile", f, {
			expires: 7
		}), Cookies.set("user_id", g, {
			expires: 7
		}), Cookies.set("username", h, {
			expires: 7
		}), !b._data.rent || 2 !== b._data.rent.status && 0 !== b._data.rent.status || Cookies.set("rent_verified", !0, {
			expires: 7
		}), i && Cookies.set("default_address", i, {
			expires: 7
		}), $(".submit-login-button").text("Login Berhasil"), OneSignal_player_id ? setOneSignalPlayerId() : gotoSomewhere(), a.LoadingOverlay("hide", {})
	}

	function c(b, c, d) {
		var e, f = "Mohon maaf, terjadi kesalahan pada server";
		try {
			e = JSON.parse(b.responseText), f = e._message
		} catch (a) {}
		a.LoadingOverlay("hide", {}), $(".login-callout").html("<h4>" + f + "</h4>").fadeIn(), $(".submit-login-button").text("Login")
	}
	var d = a.serialize();
	$(".login-callout").fadeOut(), a.LoadingOverlay("show", {
		resizeInterval: 20
	}), d.platform_sent_from = "web", $.ajax({
		url: "/api/auth/login",
		method: "POST",
		data: d,
		success: b,
		error: c
	})
}

function gotoSomewhere() {
	if (getUrlVars().goto) {
		var a = getUrlVars().goto;
		window.history.replaceState(null, "Redirecting...", a), window.location.href = a
	} else if (Cookies.get("goto")) {
		var b = Cookies.get("goto");
		Cookies.remove("goto"), window.location.href = b
	} else Cookies.get("products_shipping") && JSON.parse(Cookies.get("products_shipping")).length ? window.location.href = "/checkout" : window.location.reload(!0)
}

function setOneSignalPlayerId() {
	function a(a) {
		gotoSomewhere()
	}
	var b = Cookies.get("token");
	$.ajax({
		url: "/api/me/set_device_registration_id",
		method: "POST",
		beforeSend: function (a) {
			a.setRequestHeader("Authorization", "Token " + b)
		},
		data: {
			device_type: "OneSignal",
			registered_device_id: OneSignal_player_id,
			platform_sent_from: "web"
		},
		dataType: "json",
		complete: a
	})
}

function logout() {
	window.location.href = "/logout?url=" + window.location.pathname
}

function submitForgotPassword() {
	function a(a) {
		1 == a._data && (alert("E-mail untuk reset password sudah dikirimkan ke " + c + ". Mohon cek inbox atau folder SPAM."), $("#forgot-password-modal").modal("hide"), $("#submit-forgot-password-button").text("Reset Password Berhasil"))
	}

	function b(a, b, c) {
		var d, e = "Mohon maaf, terjadi kesalahan pada server";
		try {
			d = JSON.parse(a.responseText), e = d._message
		} catch (a) {}
		alert(e), $("#submit-forgot-password-button").text("Reset Password")
	}
	var c = $("#forgot-password-form #email2").val();
	JSON.stringify({
		email: c
	});
	$.ajax({
		url: "/api/auth/forgot_password",
		method: "POST",
		data: {
			email: c,
			platform_sent_from: "web"
		},
		dataType: "json",
		success: a,
		error: b
	})
}

function reposition2(a) {
	var b = a,
		c = b.find(".modal-dialog");
	c.css("margin-top", Math.max(0, ($(window).height() - c.height()) / 2))
}

function updateStickyFilter() {
	var a = $(window).scrollTop() + $(window).innerHeight(),
		b = a - $("#filter-selector").offset().top,
		c = $("#apply-filter-wrapper").outerHeight(),
		d = $("#brand-wrapper").offset().top;
	$("#sticky-flag").offset().top > a - c && d < b ? ($("#apply-filter-wrapper").addClass("sticky"), $("#apply-shade").show(), $("#apply-filter-wrapper").css("top", b - c)) : ($("#apply-filter-wrapper").removeClass("sticky"), $("#apply-shade").hide())
}

function updateSuggestionWidth() {
	var a = $("#search-box").innerWidth();
	$("#suggestion").css("width", a)
}

function shrinkModalBody(a) {
	var b = a,
		c = b.find(".modal-body"),
		d = window.innerHeight,
		e = d - 100;
	c.css("max-height", e - 20 + "px").css("overflow", "auto")
}

function cartCount() {
	var a = 0;
	if (Cookies)
		for (var b = Cookies.get("products_shipping"), c = b ? JSON.parse(b) : [], d = 0; d < c.length; d++) a += c[d].product_ids.length || 0;
	return a
}

function updateCartCount() {
	if (Cookies) {
		var a = cartCount();
		a > 0 ? ($("#cart .notif-count").text(a), $("#header-cart-button .notif-count").text(a), $("#cart .notif-count").fadeIn(), $("#header-cart-button .notif-count").fadeIn()) : ($("#cart .notif-count").fadeOut(), $("#header-cart-button .notif-count").fadeOut())
	}
}

function loginWithFB(a, b) {
	function c(a) {
		var b = a._data.token,
			c = a._data.email,
			d = a._data.fullname,
			e = a._data.profile,
			f = a._data._id,
			g = a._data.username,
			h = a._data.default_address ? JSON.stringify(a._data.default_address) : "";
		if (Cookies.set("token", b, {
				expires: 7
			}), Cookies.set("email", c, {
				expires: 7
			}), Cookies.set("fullname", d, {
				expires: 7
			}), Cookies.set("profile", e, {
				expires: 7
			}), Cookies.set("user_id", f, {
				expires: 7
			}), Cookies.set("username", g, {
				expires: 7
			}), Cookies.set("default_address", h, {
				expires: 7
			}), c && g && d && e && null !== e.gender && void 0 !== e.gender && e.province_id && e.region_id && e.phone && e.address)
			if (getUrlVars().goto) window.location.href = getUrlVars().goto;
			else if (Cookies.get("goto")) {
			var i = Cookies.get("goto");
			Cookies.remove("goto"), window.location.href = i
		} else Cookies.get("products_shipping") && JSON.parse(Cookies.get("products_shipping")).length ? window.location.href = "/checkout" : window.location.reload(!0);
		else if (Cookies) {
			var j = Cookies.get("products_shipping"),
				k = j ? JSON.parse(j) : [],
				l = k.length;
			l > 0 ? window.location.href = "/checkout" : window.location.href = "/edit-profil"
		} else window.location.href = "/edit-profil";
		$("#login-form").LoadingOverlay("hide", {})
	}

	function d(a, b, c) {
		var d, e = "Mohon maaf, terjadi kesalahan pada server";
		try {
			d = JSON.parse(a.responseText), e = d._message
		} catch (a) {}
		$("#login-form").LoadingOverlay("hide", {}), $("#login-callout").html("<h4>" + e + "</h4>").fadeIn()
	}
	$.ajax({
		url: "/api/auth/login/facebook",
		method: "POST",
		data: {
			email: a.email,
			fullname: a.name,
			fb_id: a.id,
			fb_access_token: b,
			platform_sent_from: "web"
		},
		success: c,
		error: d
	})
}

function getFBProfile(a) {
	function b(b) {
		loginWithFB(b, a)
	}

	function c(a, b, c) {
		var d, e = "Mohon maaf, terjadi kesalahan pada server";
		try {
			d = JSON.parse(a.responseText), e = d.error.message
		} catch (a) {}
		alert(e)
	}
	$.ajax({
		url: "https://graph.facebook.com/v2.8/me?access_token=" + a + "&fields=id,name,email,picture.type(large)",
		method: "GET",
		beforeSend: function (a) {
			a.setRequestHeader("content-type", "application/x-www-form-urlencoded")
		},
		success: b,
		error: c
	})
}

function getUnreadNotifCount(a) {
	function b(a) {
		if (a._data) {
			var b = {};
			b.total = a._data.total, b.tp_notif = a._data.tp_notif, b.conversation = a._data.conversation, Cookies.set("notif", b), updateNotifFromCookies()
		}
	}

	function c(a, b, c) {
		getUnreadNotifCountRetry > 0 && (--getUnreadNotifCountRetry, getUnreadNotifCount())
	}
	var d = Cookies.get("token");
	$.ajax({
		url: "/api/notification/new/count?from_web=true",
		method: "GET",
		beforeSend: function (a) {
			a.setRequestHeader("Authorization", "Token " + d)
		},
		success: b,
		error: c
	})
}

function updateNotifFromCookies() {
	var a = JSON.parse(Cookies.get("notif"));
	a ? (a.total > 0 ? ($("#header-notif-button .notif-count").text(a.total).fadeIn(200), $("#notif .notif-count").text(a.total).fadeIn(200)) : ($("#header-notif-button .notif-count").text(a.total).fadeOut(), $("#notif .notif-count").text(a.total).fadeOut()), a.tp_notif > 0 ? $("#list-notif-transaksi-tab .notif-count").text(a.tp_notif).fadeIn(200) : $("#list-notif-transaksi-tab .notif-count").text(a.tp_notif).fadeOut(), a.conversation > 0 ? $("#list-notif-percakapan-tab .notif-count").text(a.conversation).fadeIn(200) : $("#list-notif-percakapan-tab .notif-count").text(a.conversation).fadeOut()) : getUnreadNotifCount()
}

function getNotifTransaksi(a) {
	function b(b) {
		for (var c = "", d = b._data, e = 0; e < d.length; e++) c += getTemplateRowTransaksi(d[e]);
		d.length >= 10 ? (c += "<div class='load-more'>", c += "Load More", c += "</div>") : (c += "<div class='end-page'>", c += "Akhir Halaman", c += "</div>"), $("#list-notif-transaksi .load-more").remove(), $("#list-notif-transaksi .loading-wrapper").remove(), 1 == a ? $("#list-notif-transaksi").html(c) : $("#list-notif-transaksi").append(c), a++, isEditNotif ? hookRemoveNotif() : hookNotifRead(), $("#list-notif-transaksi .load-more").click(function (b) {
			$(this).hide(), $("#list-notif-transaksi").append(spinnerHTMLPadding), getNotifTransaksi(a)
		})
	}

	function c(a, b, c) {}
	var d = Cookies.get("token");
	$.ajax({
		url: "/api/notification/new/transaction/" + a,
		method: "GET",
		beforeSend: function (a) {
			a.setRequestHeader("Authorization", "Token " + d)
		},
		success: b,
		error: c
	})
}

function getNotifPercakapan(a) {
	function b(b) {
		for (var c = "", d = b._data, e = 0; e < d.length; e++) {
			d[e].product_images && d[e].product_images[0] ? d[e].product_images[0] = d[e].product_images[0].replace("http://localhost:5050", "https://s3-ap-southeast-1.amazonaws.com/prelo") : d[e].product_images[0] = "https://s3-ap-southeast-1.amazonaws.com/prelo/images/product/default.png";
			var f = "",
				g = d[e].short_preview;
			2e3 == d[e].type ? (f = "/chat/" + d[e].object_id, d[e].is_prelo_message || (g = '"' + g + '"')) : 3e3 == d[e].type ? (f = "/k/" + d[e].object_id, g = '"' + g + '"') : 4e3 == d[e].type ? f = "/l/" + d[e].object_id : 4001 == d[e].type && (f = "/l/" + d[e].object_id + "?action=price-down");
			var h, i = d[e].read ? "one-jualan-read" : "one-jualan-unread";
			1e3 == d[e].type || 3e3 == d[e].type || 4e3 == d[e].type || 4001 == d[e].type ? h = d[e].object_id : 2e3 == d[e].type && (h = d[e]._id), c += "<label style='width: 100%; margin: 0'>", c += 4e3 == d[e].type ? "<div class='one-jualan " + i + "' data-object_id='" + h + "' data-type='" + d[e].type + "' data-tab='conversation' onclick='doSomething($(this), " + a + ", " + e + ")'>" : "<a class='one-jualan " + i + "' href='" + f + "' data-object_id='" + h + "' data-type='" + d[e].type + "' data-tab='conversation' target='_blank'>";
			var j = isEditNotif ? "block" : "none",
				k = isEditNotif ? "none" : "block";
			c += '<input type="checkbox" style="display: ' + j + ';position: relative; float:left; margin-right: 10px; top: 30px" data-id="' + d[e]._id + '" data-tab="conversation"></input>', c += '<div class="unread-circle" style="display: ' + k + ';position: relative; float:left; margin-right: 10px; top: 30px"><i class="fa fa-circle"></i></div>', c += '<div class="jualan-image" style="background-image: url(\'' + d[e].product_images[0] + "')\">", c += "</div>", c += "<div class='jualan-text'>", c += "<div class='jualan-text-sender'>", c += d[e].user_username_from, c += "</div>", c += 0 == d[e].status || 2 == d[e].status ? "<div class='jualan-text-progress gray'>" : d[e].status < 0 || 3 == d[e].status || 5 == d[e].status ? "<div class='jualan-text-progress red'>" : 4 == d[e].status ? "<div class='jualan-text-progress orange'>" : "<div class='jualan-text-progress'>", c += d[e].status_text, c += "</div>", c += "<div class='clearfix'></div>", c += "<div class='jualan-text-title'>", c += d[e].object_name, c += "</div>", c += "<div class='jualan-text-preview'>", c += g, c += "</div>", 4001 == d[e].type && (c += "<div class='btn button beli-sekarang-from-notif' product_id='" + h + "'>", c += "<i style='margin-right: 5px;' class='fa fa-shopping-cart'></i> Beli Sekarang", c += "</div>"), c += "<div class='jualan-text-time'>", c += d[e].time, c += "</div>", c += "</div>", c += "<div class='clearfix'>", c += "</div>", c += 4e3 == d[e].type ? "</div>" : "</a>", c += "</label>"
		}
		d.length >= 10 ? (c += "<div class='load-more'>", c += "Load More", c += "</div>") : (c += "<div class='end-page'>", c += "Akhir Halaman", c += "</div>"), $("#list-notif-percakapan .load-more").remove(), $("#list-notif-percakapan .loading-wrapper").remove(), 1 == a ? $("#list-notif-percakapan").html(c) : $("#list-notif-percakapan").append(c), $(".beli-sekarang-button").click(function () {
			function a(a) {
				function b(a) {
					console.log(a)
				}

				function c() {}
				var d, e, f, g, h = Cookies.get("token");
				return $.ajax({
					url: "/api/product/" + a,
					method: "GET",
					beforeSend: function (a) {
						a.setRequestHeader("Authorization", "Token " + h)
					},
					data: {
						inedit: 0,
						img_width: 100,
						img_height: 100
					},
					success: b,
					error: c,
					async: !1
				}), [d, e, f, g]
			}

			function b() {
				var a = Cookies.getJSON("products_shipping") ? Cookies.getJSON("products_shipping").length : 0;
				a && $("#added-to-cart-modal #cart-count").text("(" + a + " Barang)"), $("#added-to-cart-modal").modal("show"), updateCartCount()
			}
			var c = h;
			a(c);
			if (console.log(c), c && "undefined" != c) {
				setCookieProductID(c);
				var d = !0;
				d && b()
			}
		}), a++, isEditNotif ? hookRemoveNotif() : hookNotifRead(), $("#list-notif-percakapan .load-more").click(function (b) {
			$(this).hide(), $("#list-notif-percakapan").append(spinnerHTMLPadding), getNotifPercakapan(a)
		})
	}

	function c(a, b, c) {}
	var d = Cookies.get("token");
	$.ajax({
		url: "/api/notification/new/conversation/" + a,
		method: "GET",
		beforeSend: function (a) {
			a.setRequestHeader("Authorization", "Token " + d)
		},
		success: b,
		error: c
	})
}

function hookNotifRead() {
	4e3 != $(this).attr("data-type") && ($("#notif-modal .one-jualan").off("click"), $("#notif-modal .one-jualan").click(function (a) {
		4e3 == $(this).attr("data-type") && a.preventDefault(), $(this).removeClass("one-jualan-unread"), readNotif($(this).attr("href"), $(this).attr("data-tab"), $(this).attr("data-object_id"), $(this).attr("data-type"))
	}))
}

function hookRemoveNotif() {
	$("#notif-modal .one-jualan").off("click"), $(".one-jualan[href]").each(function () {
		var a = $(this);
		a.attr("link", a.attr("href")).removeAttr("href")
	}), $("#cancel-notif-btn").off("click"), $("#delete-notif-btn").off("click"), $("#notif-modal input[type='checkbox']").off("change"), $("#notif-modal input[type='checkbox']").change(function () {
		selectNotif($(this).attr("data-id"), $(this).prop("checked"), $(this).attr("data-tab"))
	}), $("#cancel-notif-btn").click(function (a) {
		isEditNotif = !1, selectedNotifConversation = [], selectedNotifTransaction = [], $("#notif-modal .one-jualan").children("input").prop("checked", !1), $(".one-jualan[link]").each(function () {
			var a = $(this);
			a.attr("href", a.attr("link")).removeAttr("link")
		}), $("#total-notif").text("Hapus"), $("#notif-modal .modal-footer").hide(), $("#notif-modal .tab-content").css("max-height", "calc(100vh - 43px - 48px)"), $("#cancel-notif-btn").off("click"), $("#delete-notif-btn").off("click"), $("#notif-modal input[type='checkbox']").off("change"), $(".one-jualan").children("input").hide(), $(".unread-circle").fadeIn(), $("#dropdown-notif").show(), hookNotifRead(), $(".one-jualan .jualan-text-time").css("left", "")
	}), $("#delete-notif-btn").click(function (a) {
		a.preventDefault(), isEditNotif = !1, $("#delete-notif-btn").text("Hapus"), $("#notif-modal .modal-footer").hide(), $(".one-jualan .jualan-text-time").css("left", ""), $("#notif-modal .tab-content").css("max-height", "calc(100vh - 43px - 48px)"), $("#cancel-notif-btn").off("click"), $("#delete-notif-btn").off("click"), $("#notif-modal input[type='checkbox']").off("change");
		var b = '<div class="loading-wrapper" style="padding: 20px; display: block; text-align: center">';
		b += '<i class="fa fa-circle-o-notch fa-spin"></i></div>', $("#list-notif-transaksi").html(b), $("#list-notif-percakapan").html(b), selectedNotifTransaction.length && deleteNotif(selectedNotifTransaction, "transaction"), selectedNotifConversation.length && deleteNotif(selectedNotifConversation, "conversation"), $("#dropdown-notif").show()
	})
}

function selectNotif(a, b, c) {
	if ("transaction" === c)
		if (b) selectedNotifTransaction.push(a);
		else {
			var d = selectedNotifTransaction.indexOf(a);
			d > -1 && selectedNotifTransaction.splice(d, 1)
		}
	else if ("conversation" === c)
		if (b) selectedNotifConversation.push(a);
		else {
			var d = selectedNotifConversation.indexOf(a);
			d > -1 && selectedNotifConversation.splice(d, 1)
		}
	var e = selectedNotifConversation.length + selectedNotifTransaction.length;
	$("#total-notif").text(e > 0 ? "Hapus (" + e + ")" : "Hapus")
}

function deleteNotif(a, b) {
	function c(a) {
		$(".one-jualan").children("input").fadeOut(), "transaction" === b ? selectedNotifTransaction = [] : "conversation" === b && (selectedNotifConversation = []), getNotifTransaksi(1), getNotifPercakapan(1)
	}

	function d() {}
	var e = Cookies.get("token");
	$.ajax({
		url: "/api/notification/new/" + b + "/delete",
		method: "POST",
		beforeSend: function (a) {
			a.setRequestHeader("Authorization", "Token " + e)
		},
		data: {
			notif_ids: JSON.stringify(a)
		},
		success: c,
		error: d
	})
}

function readNotif(a, b, c, d) {
	function e(b) {
		getUnreadNotifCount(a)
	}

	function f(b, c, d) {
		window.location.href = a
	}
	var g = Cookies.get("token");
	$.ajax({
		url: "/api/notification/new/" + b + "/read",
		method: "POST",
		beforeSend: function (a) {
			a.setRequestHeader("Authorization", "Token " + g)
		},
		data: {
			object_id: c,
			type: d
		},
		success: e,
		error: f
	})
}

function getProductLovelist(a) {
	function b(a) {
		d = a
	}

	function c() {}
	var d, e = Cookies.get("token");
	return $.ajax({
		url: "/api/product/" + a + "/lovelist",
		method: "GET",
		beforeSend: function (a) {
			a.setRequestHeader("Authorization", "Token " + e)
		},
		success: b,
		error: c,
		async: !1
	}), d
}

function getUserNotification(a) {
	function b(a) {
		d = a
	}

	function c() {}
	var d, e = Cookies.get("token");
	return $.ajax({
		url: "/api/notification/new/conversation/" + a,
		method: "GET",
		beforeSend: function (a) {
			a.setRequestHeader("Authorization", "Token " + e)
		},
		success: b,
		error: c,
		async: !1
	}), d
}

function makeNewThread(a, b) {
	function c(a) {
		e = a._data._id
	}

	function d() {}
	var e;
	return $.ajax({
		url: "/api/inbox/empty/" + a,
		method: "POST",
		beforeSend: function (a) {
			a.setRequestHeader("Authorization", "Token " + Cookies.get("token"))
		},
		success: c,
		error: d,
		async: !1
	}), e
}

function makeNewThreadBuyer(a, b) {
	function c(a) {
		e = a._data._id
	}

	function d() {}
	var e;
	return $.ajax({
		url: "/api/inbox/empty/" + a,
		method: "POST",
		beforeSend: function (a) {
			a.setRequestHeader("Authorization", "Token " + Cookies.get("token"))
		},
		data: {
			to: b
		},
		success: c,
		error: d,
		async: !1
	}), e
}

function getChatId(a) {
	function b(b) {
		console.log(b), d = null != b._data._id ? b._data._id : makeNewThread(a, buyer_id)
	}

	function c() {}
	var d;
	return $.ajax({
		url: "/api/inbox/product/" + a,
		beforeSend: function (a) {
			a.setRequestHeader("Authorization", "Token " + Cookies.get("token"))
		},
		success: b,
		error: c,
		async: !1
	}), d
}

function getChatIdBuyer(a, b) {
	function c(c) {
		console.log(c), e = null != c._data._id ? c._data._id : makeNewThreadBuyer(a, b)
	}

	function d() {}
	var e;
	return $.ajax({
		url: "/api/inbox/product/buyer/" + a,
		beforeSend: function (a) {
			a.setRequestHeader("Authorization", "Token " + Cookies.get("token"))
		},
		data: {
			buyer_id: b
		},
		success: c,
		error: d,
		async: !1
	}), e
}

function doSomething(a, b, c) {
	if (!isEditNotif) {
		var d = "",
			e = getUserNotification(b),
			f = e._data[c].object_id,
			g = getProductLovelist(f),
			h = g._data.lovers;
		if ($(".one-jualan-open").length) $(".one-jualan-open").remove();
		else {
			for (var i = 0; i < h.length; i++) d += "<div class='one-jualan one-jualan-open'>", d += "<div class='jualan-image-wrapper'>", d += "<div class='jualan-image' style='background-image: url(\"" + h[i].pict + "\"); height: 40px; width: 40px; float: right; margin-right: 0'></div>", d += "</div>", d += "<div class='jualan-text' style='min-height: 0 !important;'>", d += "<div class='jualan-text-sender' style='padding: 0; line-height: 40px;'>" + h[i].username + "</div>", d += "<a class='jualan-tawarkan' style='background: #ff951d; color: #fff; padding: 10px; display: inline-block; max-width: 49%; white-space: nowrap;' href='/chat/" + getChatIdBuyer(f, h[i]._id) + "'><i style='margin-right: 5px' class='fa fa-tag'></i>Tawarkan</a>", d += "</div>", d += "</div>";
			a.after(d)
		}
	}
}

function setCookieProductID(a, b) {
	var c = cartCount();
	if (c < 10) {
		c += 1;
		var d = [];
		if (Cookies.get("products_shipping")) {
			d = JSON.parse(Cookies.get("products_shipping"));
			for (var e = !0, f = 0; e && f < d.length;) d[f].seller_id == a ? e = !1 : f += 1;
			if (e) d.push({
				seller_id: a,
				product_ids: [b],
				shipping_package_id: "JNE-CTC"
			});
			else {
				for (var g = d[f].product_ids, h = !0, i = 0; h && i < g.length;) g[i] == b ? h = !1 : i += 1;
				h && d[f].product_ids.push(b)
			}
		} else d.push({
			seller_id: a,
			product_ids: [b],
			shipping_package_id: "JNE-CTC"
		});
		Cookies.set("products_shipping", d), "undefined" != typeof showmodalcart && showmodalcart || (window.location.href = "/checkout")
	}
	c >= 10 && (alert("Jumlah produk di cart kamu sudah mencapai maksimum. Silahkan checkout terlebih dahulu."), window.location.href = "/checkout")
}

function updateHeader() {
	if (window.innerWidth > 768) {
		var a = $(window).scrollTop();
		$("body").offset().top + 25 < a ? ($("#header-new-buffer").show(), $("#before-header-top").hide(), $("#header-after-top").hide(), $("#header-new").css("position", "fixed").css("top", "0"), $("#search-box").addClass("subtle"), isHeaderStick = !0) : ($("#header-new-buffer").hide(), $("#before-header-top").show(), $("#header-after-top").show(), $("#header-new").css("position", "static"), $("#search-box").removeClass("subtle"), isHeaderStick = !1)
	}
}

function createFunctionWithTimeout(a, b) {
	function c() {
		d || (d = !0, a())
	}
	var d = !1;
	return setTimeout(c, b || 1e3), c
}

function getTemplateRowTransaksi(a) {
	var b = "";
	a.product_images && a.product_images[0] ? a.product_images[0] = a.product_images[0].replace("http://localhost:5050", "https://s3-ap-southeast-1.amazonaws.com/prelo") : a.product_images[0] = "https://s3-ap-southeast-1.amazonaws.com/prelo/images/product/default.png";
	var c = a.read ? "one-jualan-read" : "one-jualan-unread",
		d = "";
	"jual" != a.caption.toLowerCase() && "disewa" != a.caption.toLowerCase() && "titipan" != a.caption.toLowerCase() || (d = " orange");
	var e;
	1e3 == a.type || 3e3 == a.type ? e = a.object_id : 2e3 != a.type && 4e3 != a.type && 4001 != a.type || (e = a._id);
	var f = "/transaction/" + a.object_id;
	if (2 == a.transaction_type) var f = "/titip/transaction/" + a.object_id;
	var g = isEditNotif ? "block" : "none",
		h = isEditNotif ? "none" : "block";
	return b += "<label style='width: 100%; margin: 0'>", b += "<a class='one-jualan " + c + d + "' href='" + f + "' data-object_id='" + e + "' data-type='" + a.type + "' data-tab='transaction' target='_blank'>", b += '<input type="checkbox" style="display: ' + g + ';position: relative; float:left; margin-right: 10px; top: 30px" data-id="' + a._id + '" data-tab="transaction"></input>', b += '<div class="unread-circle" style="display: ' + h + ';position: relative; float:left; margin-right: 10px; top: 30px"><i class="fa fa-circle"></i></div>', b += '<div class="jualan-image" style="background-image: url(\'' + a.product_images[0] + "')\">", b += "<div class='jualan-image-caption'>", b += a.caption, b += "</div>", b += "</div>", b += "<div class='jualan-text'>", b += "<div class='jualan-text-title'>", b += a.object_name, b += "</div>", b += 6 == a.progress || 53 == a.progress ? "<div class='jualan-text-progress gray'>" : a.progress < 0 || a.progress >= 30 && a.progress <= 34 || a.progress >= 54 ? "<div class='jualan-text-progress red'>" : "<div class='jualan-text-progress'>", b += a.status_text, b += "</div>", b += getTemplateProgressBadge(a.progress, a.transaction_type), b += "<div class='jualan-text-time'>", b += a.time, b += "</div>", b += "</div>", b += "<div class='clearfix'>", b += "</div>", b += "</a></label>"
}

function postSubcription(a) {
	function b(a) {
		$("#subscription-result").html("Silakan cek email anda.")
	}

	function c(a) {
		$("#subscription-result").html("Invalid email address.")
	}
	var d = "true" === $("#subscription-env").text() ? "https://analytics.prelo.id" : "https://analytics.dev.prelo.id";
	$.ajax({
		url: d + "/api/subscriber/email",
		method: "POST",
		data: {
			email_address: a
		},
		success: b,
		error: c
	})
}

function generalError(a, b, c) {
	var d, e = "Mohon maaf, terjadi kesalahan pada server";
	try {
		d = JSON.parse(a.responseText), e = d._message
	} catch (a) {}
	alert(e)
}

function buildCalendar(a) {
	2 == product_rent_period_type && (date_range_picker_conf.endDate = moment().add(60, "days")), date_range_picker_conf.container = a.selector, $("#cal-sewa").dateRangePicker(date_range_picker_conf).bind("datepicker-change", function (a, b) {
		var c = 864e5,
			d = Math.round(Math.abs(b.date1.getTime() - b.date2.getTime()) / c);
		if (0 == product_rent_period_type) {
			d = d < 1 ? 1 : d;
			var e = d + " hari",
				f = new Date(b.date1);
			f = moment(b.date1).add(d, "days"), $("#cal-sewa").data("dateRangePicker").setEnd(moment(f).format(date_range_picker_conf.format), !0)
		} else if (1 == product_rent_period_type) {
			d = 7 * Math.ceil(d / 7) - 1, d = d < 6 ? 6 : d, e = Math.ceil(d / 7) + " minggu";
			var f = new Date(b.date1);
			f = moment(b.date1).add(d, "days"), $("#cal-sewa").data("dateRangePicker").setEnd(moment(f).format(date_range_picker_conf.format), !0)
		} else if (2 == product_rent_period_type) {
			d = 30 * Math.ceil(d / 30) - 1, d = d < 29 ? 29 : d, e = Math.ceil(d / 30) + " bulan";
			var f;
			f = moment(b.date1).add(d, "days"), $("#cal-sewa").data("dateRangePicker").setEnd(moment(f).format(date_range_picker_conf.format), !0)
		}
		date_start = moment(b.date1).format("YYYY-MM-DD"), date_end = moment(f).format("YYYY-MM-DD"), $("#date-start").text(moment(b.date1).format("ddd, D MMM")), $("#date-end").text(moment(f).format("ddd, D MMM")), $("#date-duration").text(e)
	})
}

function addYourLocationButton(a) {
	var b = document.createElement("div"),
		c = document.createElement("button");
	c.style.backgroundColor = "#fff", c.style.border = "none", c.style.outline = "none", c.style.width = "28px", c.style.height = "28px", c.style.borderRadius = "2px", c.style.boxShadow = "0 1px 4px rgba(0,0,0,0.3)", c.style.cursor = "pointer", c.style.marginRight = "10px", c.style.padding = "0px", c.title = "Your Location", b.appendChild(c);
	var d = document.createElement("div");
	d.style.margin = "5px", d.style.width = "18px", d.style.height = "18px", d.style.backgroundImage = "url(https://maps.gstatic.com/tactile/mylocation/mylocation-sprite-1x.png)", d.style.backgroundSize = "180px 18px", d.style.backgroundPosition = "0px 0px", d.style.backgroundRepeat = "no-repeat", d.id = "you_location_img", c.appendChild(d), google.maps.event.addListener(a, "dragend", function () {
		$("#you_location_img").css("background-position", "0px 0px")
	}), c.addEventListener("click", function () {
		var b = "0",
			c = setInterval(function () {
				b = "-18" == b ? "0" : "-18", $("#you_location_img").css("background-position", b + "px 0px")
			}, 500);
		navigator.geolocation ? navigator.geolocation.getCurrentPosition(function (b) {
			var d = new google.maps.LatLng(b.coords.latitude, b.coords.longitude);
			a.setCenter(d), clearInterval(c), $("#you_location_img").css("background-position", "-144px 0px")
		}) : (clearInterval(c), $("#you_location_img").css("background-position", "0px 0px"))
	}), b.index = 1, a.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(b)
}

function addAutocomplete(a, b) {
	var c = document.getElementById("map-autocomplete"),
		d = new google.maps.places.Autocomplete(c);
	d.bindTo("bounds", a), d.addListener("place_changed", function () {
		var b = d.getPlace();
		if (b.geometry) {
			b.geometry.viewport ? (a.setCenter(b.geometry.location), a.setZoom(17)) : (a.setCenter(b.geometry.location), a.setZoom(17));
			var c = "";
			b.address_components && (c = [b.address_components[0] && b.address_components[0].short_name || "", b.address_components[1] && b.address_components[1].short_name || "", b.address_components[2] && b.address_components[2].short_name || ""].join(" "))
		}
	})
}

function initMap(a, b, c) {
	var d = {
		lat: -6.175392,
		lng: 106.827153
	};
	if (b) {
		var e = b.split(",");
		d.lat = parseFloat(e[0]), d.lng = parseFloat(e[1])
	} else navigator.geolocation && navigator.geolocation.getCurrentPosition(function (a) {
		d.lat = a.coords.latitude, d.lng = a.coords.longitude
	});
	currentMarkerPosition = new google.maps.LatLng(d.lat, d.lng), map = new google.maps.Map(document.getElementById(a), {
		zoom: 17,
		center: currentMarkerPosition,
		disableDefaultUI: !0,
		clickableIcons: !1
	});
	var f = document.createElement("div");
	f.classList.add("centerMarker");
	var g = document.getElementById(a);
	g.appendChild(f), map.addListener("center_changed", function () {
		currentMarkerPosition = map.center
	}), addYourLocationButton(map), c && (addAutocomplete(map, a), $("#map-autocomplete").val(""))
}
if (! function (a, b) {
		"object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
			if (!a.document) throw new Error("jQuery requires a window with a document");
			return b(a)
		} : b(a)
	}("undefined" != typeof window ? window : this, function (a, b) {
		function c(a) {
			var b = "length" in a && a.length,
				c = ea.type(a);
			return "function" !== c && !ea.isWindow(a) && (!(1 !== a.nodeType || !b) || ("array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a))
		}

		function d(a, b, c) {
			if (ea.isFunction(b)) return ea.grep(a, function (a, d) {
				return !!b.call(a, d, a) !== c
			});
			if (b.nodeType) return ea.grep(a, function (a) {
				return a === b !== c
			});
			if ("string" == typeof b) {
				if (ma.test(b)) return ea.filter(b, a, c);
				b = ea.filter(b, a)
			}
			return ea.grep(a, function (a) {
				return ea.inArray(a, b) >= 0 !== c
			})
		}

		function e(a, b) {
			do a = a[b]; while (a && 1 !== a.nodeType);
			return a
		}

		function f(a) {
			var b = ua[a] = {};
			return ea.each(a.match(ta) || [], function (a, c) {
				b[c] = !0
			}), b
		}

		function g() {
			oa.addEventListener ? (oa.removeEventListener("DOMContentLoaded", h, !1), a.removeEventListener("load", h, !1)) : (oa.detachEvent("onreadystatechange", h), a.detachEvent("onload", h))
		}

		function h() {
			(oa.addEventListener || "load" === event.type || "complete" === oa.readyState) && (g(), ea.ready())
		}

		function i(a, b, c) {
			if (void 0 === c && 1 === a.nodeType) {
				var d = "data-" + b.replace(za, "-$1").toLowerCase();
				if (c = a.getAttribute(d), "string" == typeof c) {
					try {
						c = "true" === c || "false" !== c && ("null" === c ? null : +c + "" === c ? +c : ya.test(c) ? ea.parseJSON(c) : c)
					} catch (a) {}
					ea.data(a, b, c)
				} else c = void 0
			}
			return c
		}

		function j(a) {
			var b;
			for (b in a)
				if (("data" !== b || !ea.isEmptyObject(a[b])) && "toJSON" !== b) return !1;
			return !0
		}

		function k(a, b, c, d) {
			if (ea.acceptData(a)) {
				var e, f, g = ea.expando,
					h = a.nodeType,
					i = h ? ea.cache : a,
					j = h ? a[g] : a[g] && g;
				if (j && i[j] && (d || i[j].data) || void 0 !== c || "string" != typeof b) return j || (j = h ? a[g] = W.pop() || ea.guid++ : g),
					i[j] || (i[j] = h ? {} : {
						toJSON: ea.noop
					}), ("object" == typeof b || "function" == typeof b) && (d ? i[j] = ea.extend(i[j], b) : i[j].data = ea.extend(i[j].data, b)), f = i[j], d || (f.data || (f.data = {}), f = f.data), void 0 !== c && (f[ea.camelCase(b)] = c), "string" == typeof b ? (e = f[b], null == e && (e = f[ea.camelCase(b)])) : e = f, e
			}
		}

		function l(a, b, c) {
			if (ea.acceptData(a)) {
				var d, e, f = a.nodeType,
					g = f ? ea.cache : a,
					h = f ? a[ea.expando] : ea.expando;
				if (g[h]) {
					if (b && (d = c ? g[h] : g[h].data)) {
						ea.isArray(b) ? b = b.concat(ea.map(b, ea.camelCase)) : b in d ? b = [b] : (b = ea.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
						for (; e--;) delete d[b[e]];
						if (c ? !j(d) : !ea.isEmptyObject(d)) return
					}(c || (delete g[h].data, j(g[h]))) && (f ? ea.cleanData([a], !0) : ca.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
				}
			}
		}

		function m() {
			return !0
		}

		function n() {
			return !1
		}

		function o() {
			try {
				return oa.activeElement
			} catch (a) {}
		}

		function p(a) {
			var b = Ka.split("|"),
				c = a.createDocumentFragment();
			if (c.createElement)
				for (; b.length;) c.createElement(b.pop());
			return c
		}

		function q(a, b) {
			var c, d, e = 0,
				f = typeof a.getElementsByTagName !== xa ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== xa ? a.querySelectorAll(b || "*") : void 0;
			if (!f)
				for (f = [], c = a.childNodes || a; null != (d = c[e]); e++) !b || ea.nodeName(d, b) ? f.push(d) : ea.merge(f, q(d, b));
			return void 0 === b || b && ea.nodeName(a, b) ? ea.merge([a], f) : f
		}

		function r(a) {
			Ea.test(a.type) && (a.defaultChecked = a.checked)
		}

		function s(a, b) {
			return ea.nodeName(a, "table") && ea.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
		}

		function t(a) {
			return a.type = (null !== ea.find.attr(a, "type")) + "/" + a.type, a
		}

		function u(a) {
			var b = Va.exec(a.type);
			return b ? a.type = b[1] : a.removeAttribute("type"), a
		}

		function v(a, b) {
			for (var c, d = 0; null != (c = a[d]); d++) ea._data(c, "globalEval", !b || ea._data(b[d], "globalEval"))
		}

		function w(a, b) {
			if (1 === b.nodeType && ea.hasData(a)) {
				var c, d, e, f = ea._data(a),
					g = ea._data(b, f),
					h = f.events;
				if (h) {
					delete g.handle, g.events = {};
					for (c in h)
						for (d = 0, e = h[c].length; e > d; d++) ea.event.add(b, c, h[c][d])
				}
				g.data && (g.data = ea.extend({}, g.data))
			}
		}

		function x(a, b) {
			var c, d, e;
			if (1 === b.nodeType) {
				if (c = b.nodeName.toLowerCase(), !ca.noCloneEvent && b[ea.expando]) {
					e = ea._data(b);
					for (d in e.events) ea.removeEvent(b, d, e.handle);
					b.removeAttribute(ea.expando)
				}
				"script" === c && b.text !== a.text ? (t(b).text = a.text, u(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), ca.html5Clone && a.innerHTML && !ea.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && Ea.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
			}
		}

		function y(b, c) {
			var d, e = ea(c.createElement(b)).appendTo(c.body),
				f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : ea.css(e[0], "display");
			return e.detach(), f
		}

		function z(a) {
			var b = oa,
				c = _a[a];
			return c || (c = y(a, b), "none" !== c && c || ($a = ($a || ea("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = ($a[0].contentWindow || $a[0].contentDocument).document, b.write(), b.close(), c = y(a, b), $a.detach()), _a[a] = c), c
		}

		function A(a, b) {
			return {
				get: function () {
					var c = a();
					if (null != c) return c ? void delete this.get : (this.get = b).apply(this, arguments)
				}
			}
		}

		function B(a, b) {
			if (b in a) return b;
			for (var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = mb.length; e--;)
				if (b = mb[e] + c, b in a) return b;
			return d
		}

		function C(a, b) {
			for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++) d = a[g], d.style && (f[g] = ea._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && Ca(d) && (f[g] = ea._data(d, "olddisplay", z(d.nodeName)))) : (e = Ca(d), (c && "none" !== c || !e) && ea._data(d, "olddisplay", e ? c : ea.css(d, "display"))));
			for (g = 0; h > g; g++) d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
			return a
		}

		function D(a, b, c) {
			var d = ib.exec(b);
			return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
		}

		function E(a, b, c, d, e) {
			for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2) "margin" === c && (g += ea.css(a, c + Ba[f], !0, e)), d ? ("content" === c && (g -= ea.css(a, "padding" + Ba[f], !0, e)), "margin" !== c && (g -= ea.css(a, "border" + Ba[f] + "Width", !0, e))) : (g += ea.css(a, "padding" + Ba[f], !0, e), "padding" !== c && (g += ea.css(a, "border" + Ba[f] + "Width", !0, e)));
			return g
		}

		function F(a, b, c) {
			var d = !0,
				e = "width" === b ? a.offsetWidth : a.offsetHeight,
				f = ab(a),
				g = ca.boxSizing && "border-box" === ea.css(a, "boxSizing", !1, f);
			if (0 >= e || null == e) {
				if (e = bb(a, b, f), (0 > e || null == e) && (e = a.style[b]), db.test(e)) return e;
				d = g && (ca.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
			}
			return e + E(a, b, c || (g ? "border" : "content"), d, f) + "px"
		}

		function G(a, b, c, d, e) {
			return new G.prototype.init(a, b, c, d, e)
		}

		function H() {
			return setTimeout(function () {
				nb = void 0
			}), nb = ea.now()
		}

		function I(a, b) {
			var c, d = {
					height: a
				},
				e = 0;
			for (b = b ? 1 : 0; 4 > e; e += 2 - b) c = Ba[e], d["margin" + c] = d["padding" + c] = a;
			return b && (d.opacity = d.width = a), d
		}

		function J(a, b, c) {
			for (var d, e = (tb[b] || []).concat(tb["*"]), f = 0, g = e.length; g > f; f++)
				if (d = e[f].call(c, b, a)) return d
		}

		function K(a, b, c) {
			var d, e, f, g, h, i, j, k, l = this,
				m = {},
				n = a.style,
				o = a.nodeType && Ca(a),
				p = ea._data(a, "fxshow");
			c.queue || (h = ea._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
				h.unqueued || i()
			}), h.unqueued++, l.always(function () {
				l.always(function () {
					h.unqueued--, ea.queue(a, "fx").length || h.empty.fire()
				})
			})), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [n.overflow, n.overflowX, n.overflowY], j = ea.css(a, "display"), k = "none" === j ? ea._data(a, "olddisplay") || z(a.nodeName) : j, "inline" === k && "none" === ea.css(a, "float") && (ca.inlineBlockNeedsLayout && "inline" !== z(a.nodeName) ? n.zoom = 1 : n.display = "inline-block")), c.overflow && (n.overflow = "hidden", ca.shrinkWrapBlocks() || l.always(function () {
				n.overflow = c.overflow[0], n.overflowX = c.overflow[1], n.overflowY = c.overflow[2]
			}));
			for (d in b)
				if (e = b[d], pb.exec(e)) {
					if (delete b[d], f = f || "toggle" === e, e === (o ? "hide" : "show")) {
						if ("show" !== e || !p || void 0 === p[d]) continue;
						o = !0
					}
					m[d] = p && p[d] || ea.style(a, d)
				} else j = void 0;
			if (ea.isEmptyObject(m)) "inline" === ("none" === j ? z(a.nodeName) : j) && (n.display = j);
			else {
				p ? "hidden" in p && (o = p.hidden) : p = ea._data(a, "fxshow", {}), f && (p.hidden = !o), o ? ea(a).show() : l.done(function () {
					ea(a).hide()
				}), l.done(function () {
					var b;
					ea._removeData(a, "fxshow");
					for (b in m) ea.style(a, b, m[b])
				});
				for (d in m) g = J(o ? p[d] : 0, d, l), d in p || (p[d] = g.start, o && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
			}
		}

		function L(a, b) {
			var c, d, e, f, g;
			for (c in a)
				if (d = ea.camelCase(c), e = b[d], f = a[c], ea.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = ea.cssHooks[d], g && "expand" in g) {
					f = g.expand(f), delete a[d];
					for (c in f) c in a || (a[c] = f[c], b[c] = e)
				} else b[d] = e
		}

		function M(a, b, c) {
			var d, e, f = 0,
				g = sb.length,
				h = ea.Deferred().always(function () {
					delete i.elem
				}),
				i = function () {
					if (e) return !1;
					for (var b = nb || H(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++) j.tweens[g].run(f);
					return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
				},
				j = h.promise({
					elem: a,
					props: ea.extend({}, b),
					opts: ea.extend(!0, {
						specialEasing: {}
					}, c),
					originalProperties: b,
					originalOptions: c,
					startTime: nb || H(),
					duration: c.duration,
					tweens: [],
					createTween: function (b, c) {
						var d = ea.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
						return j.tweens.push(d), d
					},
					stop: function (b) {
						var c = 0,
							d = b ? j.tweens.length : 0;
						if (e) return this;
						for (e = !0; d > c; c++) j.tweens[c].run(1);
						return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
					}
				}),
				k = j.props;
			for (L(k, j.opts.specialEasing); g > f; f++)
				if (d = sb[f].call(j, a, k, j.opts)) return d;
			return ea.map(k, J, j), ea.isFunction(j.opts.start) && j.opts.start.call(a, j), ea.fx.timer(ea.extend(i, {
				elem: a,
				anim: j,
				queue: j.opts.queue
			})), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
		}

		function N(a) {
			return function (b, c) {
				"string" != typeof b && (c = b, b = "*");
				var d, e = 0,
					f = b.toLowerCase().match(ta) || [];
				if (ea.isFunction(c))
					for (; d = f[e++];) "+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
			}
		}

		function O(a, b, c, d) {
			function e(h) {
				var i;
				return f[h] = !0, ea.each(a[h] || [], function (a, h) {
					var j = h(b, c, d);
					return "string" != typeof j || g || f[j] ? g ? !(i = j) : void 0 : (b.dataTypes.unshift(j), e(j), !1)
				}), i
			}
			var f = {},
				g = a === Rb;
			return e(b.dataTypes[0]) || !f["*"] && e("*")
		}

		function P(a, b) {
			var c, d, e = ea.ajaxSettings.flatOptions || {};
			for (d in b) void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
			return c && ea.extend(!0, a, c), a
		}

		function Q(a, b, c) {
			for (var d, e, f, g, h = a.contents, i = a.dataTypes;
				"*" === i[0];) i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
			if (e)
				for (g in h)
					if (h[g] && h[g].test(e)) {
						i.unshift(g);
						break
					}
			if (i[0] in c) f = i[0];
			else {
				for (g in c) {
					if (!i[0] || a.converters[g + " " + i[0]]) {
						f = g;
						break
					}
					d || (d = g)
				}
				f = f || d
			}
			return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
		}

		function R(a, b, c, d) {
			var e, f, g, h, i, j = {},
				k = a.dataTypes.slice();
			if (k[1])
				for (g in a.converters) j[g.toLowerCase()] = a.converters[g];
			for (f = k.shift(); f;)
				if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())
					if ("*" === f) f = i;
					else if ("*" !== i && i !== f) {
				if (g = j[i + " " + f] || j["* " + f], !g)
					for (e in j)
						if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
							g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
							break
						}
				if (g !== !0)
					if (g && a.throws) b = g(b);
					else try {
						b = g(b)
					} catch (a) {
						return {
							state: "parsererror",
							error: g ? a : "No conversion from " + i + " to " + f
						}
					}
			}
			return {
				state: "success",
				data: b
			}
		}

		function S(a, b, c, d) {
			var e;
			if (ea.isArray(b)) ea.each(b, function (b, e) {
				c || Ub.test(a) ? d(a, e) : S(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
			});
			else if (c || "object" !== ea.type(b)) d(a, b);
			else
				for (e in b) S(a + "[" + e + "]", b[e], c, d)
		}

		function T() {
			try {
				return new a.XMLHttpRequest
			} catch (a) {}
		}

		function U() {
			try {
				return new a.ActiveXObject("Microsoft.XMLHTTP")
			} catch (a) {}
		}

		function V(a) {
			return ea.isWindow(a) ? a : 9 === a.nodeType && (a.defaultView || a.parentWindow)
		}
		var W = [],
			X = W.slice,
			Y = W.concat,
			Z = W.push,
			$ = W.indexOf,
			_ = {},
			aa = _.toString,
			ba = _.hasOwnProperty,
			ca = {},
			da = "1.11.3",
			ea = function (a, b) {
				return new ea.fn.init(a, b)
			},
			fa = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
			ga = /^-ms-/,
			ha = /-([\da-z])/gi,
			ia = function (a, b) {
				return b.toUpperCase()
			};
		ea.fn = ea.prototype = {
			jquery: da,
			constructor: ea,
			selector: "",
			length: 0,
			toArray: function () {
				return X.call(this)
			},
			get: function (a) {
				return null != a ? 0 > a ? this[a + this.length] : this[a] : X.call(this)
			},
			pushStack: function (a) {
				var b = ea.merge(this.constructor(), a);
				return b.prevObject = this, b.context = this.context, b
			},
			each: function (a, b) {
				return ea.each(this, a, b)
			},
			map: function (a) {
				return this.pushStack(ea.map(this, function (b, c) {
					return a.call(b, c, b)
				}))
			},
			slice: function () {
				return this.pushStack(X.apply(this, arguments))
			},
			first: function () {
				return this.eq(0)
			},
			last: function () {
				return this.eq(-1)
			},
			eq: function (a) {
				var b = this.length,
					c = +a + (0 > a ? b : 0);
				return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
			},
			end: function () {
				return this.prevObject || this.constructor(null)
			},
			push: Z,
			sort: W.sort,
			splice: W.splice
		}, ea.extend = ea.fn.extend = function () {
			var a, b, c, d, e, f, g = arguments[0] || {},
				h = 1,
				i = arguments.length,
				j = !1;
			for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || ea.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)
				if (null != (e = arguments[h]))
					for (d in e) a = g[d], c = e[d], g !== c && (j && c && (ea.isPlainObject(c) || (b = ea.isArray(c))) ? (b ? (b = !1, f = a && ea.isArray(a) ? a : []) : f = a && ea.isPlainObject(a) ? a : {}, g[d] = ea.extend(j, f, c)) : void 0 !== c && (g[d] = c));
			return g
		}, ea.extend({
			expando: "jQuery" + (da + Math.random()).replace(/\D/g, ""),
			isReady: !0,
			error: function (a) {
				throw new Error(a)
			},
			noop: function () {},
			isFunction: function (a) {
				return "function" === ea.type(a)
			},
			isArray: Array.isArray || function (a) {
				return "array" === ea.type(a)
			},
			isWindow: function (a) {
				return null != a && a == a.window
			},
			isNumeric: function (a) {
				return !ea.isArray(a) && a - parseFloat(a) + 1 >= 0
			},
			isEmptyObject: function (a) {
				var b;
				for (b in a) return !1;
				return !0
			},
			isPlainObject: function (a) {
				var b;
				if (!a || "object" !== ea.type(a) || a.nodeType || ea.isWindow(a)) return !1;
				try {
					if (a.constructor && !ba.call(a, "constructor") && !ba.call(a.constructor.prototype, "isPrototypeOf")) return !1
				} catch (a) {
					return !1
				}
				if (ca.ownLast)
					for (b in a) return ba.call(a, b);
				for (b in a);
				return void 0 === b || ba.call(a, b)
			},
			type: function (a) {
				return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? _[aa.call(a)] || "object" : typeof a
			},
			globalEval: function (b) {
				b && ea.trim(b) && (a.execScript || function (b) {
					a.eval.call(a, b)
				})(b)
			},
			camelCase: function (a) {
				return a.replace(ga, "ms-").replace(ha, ia)
			},
			nodeName: function (a, b) {
				return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
			},
			each: function (a, b, d) {
				var e, f = 0,
					g = a.length,
					h = c(a);
				if (d) {
					if (h)
						for (; g > f && (e = b.apply(a[f], d), e !== !1); f++);
					else
						for (f in a)
							if (e = b.apply(a[f], d), e === !1) break
				} else if (h)
					for (; g > f && (e = b.call(a[f], f, a[f]), e !== !1); f++);
				else
					for (f in a)
						if (e = b.call(a[f], f, a[f]), e === !1) break;
				return a
			},
			trim: function (a) {
				return null == a ? "" : (a + "").replace(fa, "")
			},
			makeArray: function (a, b) {
				var d = b || [];
				return null != a && (c(Object(a)) ? ea.merge(d, "string" == typeof a ? [a] : a) : Z.call(d, a)), d
			},
			inArray: function (a, b, c) {
				var d;
				if (b) {
					if ($) return $.call(b, a, c);
					for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)
						if (c in b && b[c] === a) return c
				}
				return -1
			},
			merge: function (a, b) {
				for (var c = +b.length, d = 0, e = a.length; c > d;) a[e++] = b[d++];
				if (c !== c)
					for (; void 0 !== b[d];) a[e++] = b[d++];
				return a.length = e, a
			},
			grep: function (a, b, c) {
				for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++) d = !b(a[f], f), d !== h && e.push(a[f]);
				return e
			},
			map: function (a, b, d) {
				var e, f = 0,
					g = a.length,
					h = c(a),
					i = [];
				if (h)
					for (; g > f; f++) e = b(a[f], f, d), null != e && i.push(e);
				else
					for (f in a) e = b(a[f], f, d), null != e && i.push(e);
				return Y.apply([], i)
			},
			guid: 1,
			proxy: function (a, b) {
				var c, d, e;
				return "string" == typeof b && (e = a[b], b = a, a = e), ea.isFunction(a) ? (c = X.call(arguments, 2), d = function () {
					return a.apply(b || this, c.concat(X.call(arguments)))
				}, d.guid = a.guid = a.guid || ea.guid++, d) : void 0
			},
			now: function () {
				return +new Date
			},
			support: ca
		}), ea.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
			_["[object " + b + "]"] = b.toLowerCase()
		});
		var ja = function (a) {
			function b(a, b, c, d) {
				var e, f, g, h, i, j, l, n, o, p;
				if ((b ? b.ownerDocument || b : O) !== G && F(b), b = b || G, c = c || [], h = b.nodeType, "string" != typeof a || !a || 1 !== h && 9 !== h && 11 !== h) return c;
				if (!d && I) {
					if (11 !== h && (e = sa.exec(a)))
						if (g = e[1]) {
							if (9 === h) {
								if (f = b.getElementById(g), !f || !f.parentNode) return c;
								if (f.id === g) return c.push(f), c
							} else if (b.ownerDocument && (f = b.ownerDocument.getElementById(g)) && M(b, f) && f.id === g) return c.push(f), c
						} else {
							if (e[2]) return $.apply(c, b.getElementsByTagName(a)), c;
							if ((g = e[3]) && v.getElementsByClassName) return $.apply(c, b.getElementsByClassName(g)), c
						}
					if (v.qsa && (!J || !J.test(a))) {
						if (n = l = N, o = b, p = 1 !== h && a, 1 === h && "object" !== b.nodeName.toLowerCase()) {
							for (j = z(a), (l = b.getAttribute("id")) ? n = l.replace(ua, "\\$&") : b.setAttribute("id", n), n = "[id='" + n + "'] ", i = j.length; i--;) j[i] = n + m(j[i]);
							o = ta.test(a) && k(b.parentNode) || b, p = j.join(",")
						}
						if (p) try {
							return $.apply(c, o.querySelectorAll(p)), c
						} catch (a) {} finally {
							l || b.removeAttribute("id")
						}
					}
				}
				return B(a.replace(ia, "$1"), b, c, d)
			}

			function c() {
				function a(c, d) {
					return b.push(c + " ") > w.cacheLength && delete a[b.shift()], a[c + " "] = d
				}
				var b = [];
				return a
			}

			function d(a) {
				return a[N] = !0, a
			}

			function e(a) {
				var b = G.createElement("div");
				try {
					return !!a(b)
				} catch (a) {
					return !1
				} finally {
					b.parentNode && b.parentNode.removeChild(b), b = null
				}
			}

			function f(a, b) {
				for (var c = a.split("|"), d = a.length; d--;) w.attrHandle[c[d]] = b
			}

			function g(a, b) {
				var c = b && a,
					d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || V) - (~a.sourceIndex || V);
				if (d) return d;
				if (c)
					for (; c = c.nextSibling;)
						if (c === b) return -1;
				return a ? 1 : -1
			}

			function h(a) {
				return function (b) {
					var c = b.nodeName.toLowerCase();
					return "input" === c && b.type === a
				}
			}

			function i(a) {
				return function (b) {
					var c = b.nodeName.toLowerCase();
					return ("input" === c || "button" === c) && b.type === a
				}
			}

			function j(a) {
				return d(function (b) {
					return b = +b, d(function (c, d) {
						for (var e, f = a([], c.length, b), g = f.length; g--;) c[e = f[g]] && (c[e] = !(d[e] = c[e]))
					})
				})
			}

			function k(a) {
				return a && "undefined" != typeof a.getElementsByTagName && a
			}

			function l() {}

			function m(a) {
				for (var b = 0, c = a.length, d = ""; c > b; b++) d += a[b].value;
				return d
			}

			function n(a, b, c) {
				var d = b.dir,
					e = c && "parentNode" === d,
					f = Q++;
				return b.first ? function (b, c, f) {
					for (; b = b[d];)
						if (1 === b.nodeType || e) return a(b, c, f)
				} : function (b, c, g) {
					var h, i, j = [P, f];
					if (g) {
						for (; b = b[d];)
							if ((1 === b.nodeType || e) && a(b, c, g)) return !0
					} else
						for (; b = b[d];)
							if (1 === b.nodeType || e) {
								if (i = b[N] || (b[N] = {}), (h = i[d]) && h[0] === P && h[1] === f) return j[2] = h[2];
								if (i[d] = j, j[2] = a(b, c, g)) return !0
							}
				}
			}

			function o(a) {
				return a.length > 1 ? function (b, c, d) {
					for (var e = a.length; e--;)
						if (!a[e](b, c, d)) return !1;
					return !0
				} : a[0]
			}

			function p(a, c, d) {
				for (var e = 0, f = c.length; f > e; e++) b(a, c[e], d);
				return d
			}

			function q(a, b, c, d, e) {
				for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
				return g
			}

			function r(a, b, c, e, f, g) {
				return e && !e[N] && (e = r(e)), f && !f[N] && (f = r(f, g)), d(function (d, g, h, i) {
					var j, k, l, m = [],
						n = [],
						o = g.length,
						r = d || p(b || "*", h.nodeType ? [h] : h, []),
						s = !a || !d && b ? r : q(r, m, a, h, i),
						t = c ? f || (d ? a : o || e) ? [] : g : s;
					if (c && c(s, t, h, i), e)
						for (j = q(t, n), e(j, [], h, i), k = j.length; k--;)(l = j[k]) && (t[n[k]] = !(s[n[k]] = l));
					if (d) {
						if (f || a) {
							if (f) {
								for (j = [], k = t.length; k--;)(l = t[k]) && j.push(s[k] = l);
								f(null, t = [], j, i)
							}
							for (k = t.length; k--;)(l = t[k]) && (j = f ? aa(d, l) : m[k]) > -1 && (d[j] = !(g[j] = l))
						}
					} else t = q(t === g ? t.splice(o, t.length) : t), f ? f(null, g, t, i) : $.apply(g, t)
				})
			}

			function s(a) {
				for (var b, c, d, e = a.length, f = w.relative[a[0].type], g = f || w.relative[" "], h = f ? 1 : 0, i = n(function (a) {
						return a === b
					}, g, !0), j = n(function (a) {
						return aa(b, a) > -1
					}, g, !0), k = [function (a, c, d) {
						var e = !f && (d || c !== C) || ((b = c).nodeType ? i(a, c, d) : j(a, c, d));
						return b = null, e
					}]; e > h; h++)
					if (c = w.relative[a[h].type]) k = [n(o(k), c)];
					else {
						if (c = w.filter[a[h].type].apply(null, a[h].matches), c[N]) {
							for (d = ++h; e > d && !w.relative[a[d].type]; d++);
							return r(h > 1 && o(k), h > 1 && m(a.slice(0, h - 1).concat({
								value: " " === a[h - 2].type ? "*" : ""
							})).replace(ia, "$1"), c, d > h && s(a.slice(h, d)), e > d && s(a = a.slice(d)), e > d && m(a))
						}
						k.push(c)
					}
				return o(k)
			}

			function t(a, c) {
				var e = c.length > 0,
					f = a.length > 0,
					g = function (d, g, h, i, j) {
						var k, l, m, n = 0,
							o = "0",
							p = d && [],
							r = [],
							s = C,
							t = d || f && w.find.TAG("*", j),
							u = P += null == s ? 1 : Math.random() || .1,
							v = t.length;
						for (j && (C = g !== G && g); o !== v && null != (k = t[o]); o++) {
							if (f && k) {
								for (l = 0; m = a[l++];)
									if (m(k, g, h)) {
										i.push(k);
										break
									}
								j && (P = u)
							}
							e && ((k = !m && k) && n--, d && p.push(k))
						}
						if (n += o, e && o !== n) {
							for (l = 0; m = c[l++];) m(p, r, g, h);
							if (d) {
								if (n > 0)
									for (; o--;) p[o] || r[o] || (r[o] = Y.call(i));
								r = q(r)
							}
							$.apply(i, r), j && !d && r.length > 0 && n + c.length > 1 && b.uniqueSort(i)
						}
						return j && (P = u, C = s), p
					};
				return e ? d(g) : g
			}
			var u, v, w, x, y, z, A, B, C, D, E, F, G, H, I, J, K, L, M, N = "sizzle" + 1 * new Date,
				O = a.document,
				P = 0,
				Q = 0,
				R = c(),
				S = c(),
				T = c(),
				U = function (a, b) {
					return a === b && (E = !0), 0
				},
				V = 1 << 31,
				W = {}.hasOwnProperty,
				X = [],
				Y = X.pop,
				Z = X.push,
				$ = X.push,
				_ = X.slice,
				aa = function (a, b) {
					for (var c = 0, d = a.length; d > c; c++)
						if (a[c] === b) return c;
					return -1
				},
				ba = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
				ca = "[\\x20\\t\\r\\n\\f]",
				da = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
				ea = da.replace("w", "w#"),
				fa = "\\[" + ca + "*(" + da + ")(?:" + ca + "*([*^$|!~]?=)" + ca + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + ea + "))|)" + ca + "*\\]",
				ga = ":(" + da + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + fa + ")*)|.*)\\)|)",
				ha = new RegExp(ca + "+", "g"),
				ia = new RegExp("^" + ca + "+|((?:^|[^\\\\])(?:\\\\.)*)" + ca + "+$", "g"),
				ja = new RegExp("^" + ca + "*," + ca + "*"),
				ka = new RegExp("^" + ca + "*([>+~]|" + ca + ")" + ca + "*"),
				la = new RegExp("=" + ca + "*([^\\]'\"]*?)" + ca + "*\\]", "g"),
				ma = new RegExp(ga),
				na = new RegExp("^" + ea + "$"),
				oa = {
					ID: new RegExp("^#(" + da + ")"),
					CLASS: new RegExp("^\\.(" + da + ")"),
					TAG: new RegExp("^(" + da.replace("w", "w*") + ")"),
					ATTR: new RegExp("^" + fa),
					PSEUDO: new RegExp("^" + ga),
					CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + ca + "*(even|odd|(([+-]|)(\\d*)n|)" + ca + "*(?:([+-]|)" + ca + "*(\\d+)|))" + ca + "*\\)|)", "i"),
					bool: new RegExp("^(?:" + ba + ")$", "i"),
					needsContext: new RegExp("^" + ca + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + ca + "*((?:-\\d)?\\d*)" + ca + "*\\)|)(?=[^-]|$)", "i")
				},
				pa = /^(?:input|select|textarea|button)$/i,
				qa = /^h\d$/i,
				ra = /^[^{]+\{\s*\[native \w/,
				sa = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
				ta = /[+~]/,
				ua = /'|\\/g,
				va = new RegExp("\\\\([\\da-f]{1,6}" + ca + "?|(" + ca + ")|.)", "ig"),
				wa = function (a, b, c) {
					var d = "0x" + b - 65536;
					return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
				},
				xa = function () {
					F()
				};
			try {
				$.apply(X = _.call(O.childNodes), O.childNodes), X[O.childNodes.length].nodeType
			} catch (a) {
				$ = {
					apply: X.length ? function (a, b) {
						Z.apply(a, _.call(b))
					} : function (a, b) {
						for (var c = a.length, d = 0; a[c++] = b[d++];);
						a.length = c - 1
					}
				}
			}
			v = b.support = {}, y = b.isXML = function (a) {
				var b = a && (a.ownerDocument || a).documentElement;
				return !!b && "HTML" !== b.nodeName
			}, F = b.setDocument = function (a) {
				var b, c, d = a ? a.ownerDocument || a : O;
				return d !== G && 9 === d.nodeType && d.documentElement ? (G = d, H = d.documentElement, c = d.defaultView, c && c !== c.top && (c.addEventListener ? c.addEventListener("unload", xa, !1) : c.attachEvent && c.attachEvent("onunload", xa)), I = !y(d), v.attributes = e(function (a) {
					return a.className = "i", !a.getAttribute("className")
				}), v.getElementsByTagName = e(function (a) {
					return a.appendChild(d.createComment("")), !a.getElementsByTagName("*").length
				}), v.getElementsByClassName = ra.test(d.getElementsByClassName), v.getById = e(function (a) {
					return H.appendChild(a).id = N, !d.getElementsByName || !d.getElementsByName(N).length
				}), v.getById ? (w.find.ID = function (a, b) {
					if ("undefined" != typeof b.getElementById && I) {
						var c = b.getElementById(a);
						return c && c.parentNode ? [c] : []
					}
				}, w.filter.ID = function (a) {
					var b = a.replace(va, wa);
					return function (a) {
						return a.getAttribute("id") === b
					}
				}) : (delete w.find.ID, w.filter.ID = function (a) {
					var b = a.replace(va, wa);
					return function (a) {
						var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
						return c && c.value === b
					}
				}), w.find.TAG = v.getElementsByTagName ? function (a, b) {
					return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : v.qsa ? b.querySelectorAll(a) : void 0
				} : function (a, b) {
					var c, d = [],
						e = 0,
						f = b.getElementsByTagName(a);
					if ("*" === a) {
						for (; c = f[e++];) 1 === c.nodeType && d.push(c);
						return d
					}
					return f
				}, w.find.CLASS = v.getElementsByClassName && function (a, b) {
					return I ? b.getElementsByClassName(a) : void 0
				}, K = [], J = [], (v.qsa = ra.test(d.querySelectorAll)) && (e(function (a) {
					H.appendChild(a).innerHTML = "<a id='" + N + "'></a><select id='" + N + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && J.push("[*^$]=" + ca + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || J.push("\\[" + ca + "*(?:value|" + ba + ")"), a.querySelectorAll("[id~=" + N + "-]").length || J.push("~="), a.querySelectorAll(":checked").length || J.push(":checked"), a.querySelectorAll("a#" + N + "+*").length || J.push(".#.+[+~]")
				}), e(function (a) {
					var b = d.createElement("input");
					b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && J.push("name" + ca + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || J.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), J.push(",.*:")
				})), (v.matchesSelector = ra.test(L = H.matches || H.webkitMatchesSelector || H.mozMatchesSelector || H.oMatchesSelector || H.msMatchesSelector)) && e(function (a) {
					v.disconnectedMatch = L.call(a, "div"), L.call(a, "[s!='']:x"), K.push("!=", ga)
				}), J = J.length && new RegExp(J.join("|")), K = K.length && new RegExp(K.join("|")), b = ra.test(H.compareDocumentPosition), M = b || ra.test(H.contains) ? function (a, b) {
					var c = 9 === a.nodeType ? a.documentElement : a,
						d = b && b.parentNode;
					return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
				} : function (a, b) {
					if (b)
						for (; b = b.parentNode;)
							if (b === a) return !0;
					return !1
				}, U = b ? function (a, b) {
					if (a === b) return E = !0, 0;
					var c = !a.compareDocumentPosition - !b.compareDocumentPosition;
					return c ? c : (c = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & c || !v.sortDetached && b.compareDocumentPosition(a) === c ? a === d || a.ownerDocument === O && M(O, a) ? -1 : b === d || b.ownerDocument === O && M(O, b) ? 1 : D ? aa(D, a) - aa(D, b) : 0 : 4 & c ? -1 : 1)
				} : function (a, b) {
					if (a === b) return E = !0, 0;
					var c, e = 0,
						f = a.parentNode,
						h = b.parentNode,
						i = [a],
						j = [b];
					if (!f || !h) return a === d ? -1 : b === d ? 1 : f ? -1 : h ? 1 : D ? aa(D, a) - aa(D, b) : 0;
					if (f === h) return g(a, b);
					for (c = a; c = c.parentNode;) i.unshift(c);
					for (c = b; c = c.parentNode;) j.unshift(c);
					for (; i[e] === j[e];) e++;
					return e ? g(i[e], j[e]) : i[e] === O ? -1 : j[e] === O ? 1 : 0
				}, d) : G
			}, b.matches = function (a, c) {
				return b(a, null, null, c)
			}, b.matchesSelector = function (a, c) {
				if ((a.ownerDocument || a) !== G && F(a), c = c.replace(la, "='$1']"), !(!v.matchesSelector || !I || K && K.test(c) || J && J.test(c))) try {
					var d = L.call(a, c);
					if (d || v.disconnectedMatch || a.document && 11 !== a.document.nodeType) return d
				} catch (a) {}
				return b(c, G, null, [a]).length > 0
			}, b.contains = function (a, b) {
				return (a.ownerDocument || a) !== G && F(a), M(a, b)
			}, b.attr = function (a, b) {
				(a.ownerDocument || a) !== G && F(a);
				var c = w.attrHandle[b.toLowerCase()],
					d = c && W.call(w.attrHandle, b.toLowerCase()) ? c(a, b, !I) : void 0;
				return void 0 !== d ? d : v.attributes || !I ? a.getAttribute(b) : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
			}, b.error = function (a) {
				throw new Error("Syntax error, unrecognized expression: " + a)
			}, b.uniqueSort = function (a) {
				var b, c = [],
					d = 0,
					e = 0;
				if (E = !v.detectDuplicates, D = !v.sortStable && a.slice(0), a.sort(U), E) {
					for (; b = a[e++];) b === a[e] && (d = c.push(e));
					for (; d--;) a.splice(c[d], 1)
				}
				return D = null, a
			}, x = b.getText = function (a) {
				var b, c = "",
					d = 0,
					e = a.nodeType;
				if (e) {
					if (1 === e || 9 === e || 11 === e) {
						if ("string" == typeof a.textContent) return a.textContent;
						for (a = a.firstChild; a; a = a.nextSibling) c += x(a)
					} else if (3 === e || 4 === e) return a.nodeValue
				} else
					for (; b = a[d++];) c += x(b);
				return c
			}, w = b.selectors = {
				cacheLength: 50,
				createPseudo: d,
				match: oa,
				attrHandle: {},
				find: {},
				relative: {
					">": {
						dir: "parentNode",
						first: !0
					},
					" ": {
						dir: "parentNode"
					},
					"+": {
						dir: "previousSibling",
						first: !0
					},
					"~": {
						dir: "previousSibling"
					}
				},
				preFilter: {
					ATTR: function (a) {
						return a[1] = a[1].replace(va, wa), a[3] = (a[3] || a[4] || a[5] || "").replace(va, wa), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
					},
					CHILD: function (a) {
						return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || b.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && b.error(a[0]), a
					},
					PSEUDO: function (a) {
						var b, c = !a[6] && a[2];
						return oa.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && ma.test(c) && (b = z(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
					}
				},
				filter: {
					TAG: function (a) {
						var b = a.replace(va, wa).toLowerCase();
						return "*" === a ? function () {
							return !0
						} : function (a) {
							return a.nodeName && a.nodeName.toLowerCase() === b
						}
					},
					CLASS: function (a) {
						var b = R[a + " "];
						return b || (b = new RegExp("(^|" + ca + ")" + a + "(" + ca + "|$)")) && R(a, function (a) {
							return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
						})
					},
					ATTR: function (a, c, d) {
						return function (e) {
							var f = b.attr(e, a);
							return null == f ? "!=" === c : !c || (f += "", "=" === c ? f === d : "!=" === c ? f !== d : "^=" === c ? d && 0 === f.indexOf(d) : "*=" === c ? d && f.indexOf(d) > -1 : "$=" === c ? d && f.slice(-d.length) === d : "~=" === c ? (" " + f.replace(ha, " ") + " ").indexOf(d) > -1 : "|=" === c && (f === d || f.slice(0, d.length + 1) === d + "-"))
						}
					},
					CHILD: function (a, b, c, d, e) {
						var f = "nth" !== a.slice(0, 3),
							g = "last" !== a.slice(-4),
							h = "of-type" === b;
						return 1 === d && 0 === e ? function (a) {
							return !!a.parentNode
						} : function (b, c, i) {
							var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling",
								q = b.parentNode,
								r = h && b.nodeName.toLowerCase(),
								s = !i && !h;
							if (q) {
								if (f) {
									for (; p;) {
										for (l = b; l = l[p];)
											if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) return !1;
										o = p = "only" === a && !o && "nextSibling"
									}
									return !0
								}
								if (o = [g ? q.firstChild : q.lastChild], g && s) {
									for (k = q[N] || (q[N] = {}), j = k[a] || [], n = j[0] === P && j[1], m = j[0] === P && j[2], l = n && q.childNodes[n]; l = ++n && l && l[p] || (m = n = 0) || o.pop();)
										if (1 === l.nodeType && ++m && l === b) {
											k[a] = [P, n, m];
											break
										}
								} else if (s && (j = (b[N] || (b[N] = {}))[a]) && j[0] === P) m = j[1];
								else
									for (;
										(l = ++n && l && l[p] || (m = n = 0) || o.pop()) && ((h ? l.nodeName.toLowerCase() !== r : 1 !== l.nodeType) || !++m || (s && ((l[N] || (l[N] = {}))[a] = [P, m]), l !== b)););
								return m -= e, m === d || m % d === 0 && m / d >= 0
							}
						}
					},
					PSEUDO: function (a, c) {
						var e, f = w.pseudos[a] || w.setFilters[a.toLowerCase()] || b.error("unsupported pseudo: " + a);
						return f[N] ? f(c) : f.length > 1 ? (e = [a, a, "", c], w.setFilters.hasOwnProperty(a.toLowerCase()) ? d(function (a, b) {
							for (var d, e = f(a, c), g = e.length; g--;) d = aa(a, e[g]), a[d] = !(b[d] = e[g])
						}) : function (a) {
							return f(a, 0, e)
						}) : f
					}
				},
				pseudos: {
					not: d(function (a) {
						var b = [],
							c = [],
							e = A(a.replace(ia, "$1"));
						return e[N] ? d(function (a, b, c, d) {
							for (var f, g = e(a, null, d, []), h = a.length; h--;)(f = g[h]) && (a[h] = !(b[h] = f))
						}) : function (a, d, f) {
							return b[0] = a, e(b, null, f, c), b[0] = null, !c.pop()
						}
					}),
					has: d(function (a) {
						return function (c) {
							return b(a, c).length > 0
						}
					}),
					contains: d(function (a) {
						return a = a.replace(va, wa),
							function (b) {
								return (b.textContent || b.innerText || x(b)).indexOf(a) > -1
							}
					}),
					lang: d(function (a) {
						return na.test(a || "") || b.error("unsupported lang: " + a), a = a.replace(va, wa).toLowerCase(),
							function (b) {
								var c;
								do
									if (c = I ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang")) return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
								return !1
							}
					}),
					target: function (b) {
						var c = a.location && a.location.hash;
						return c && c.slice(1) === b.id
					},
					root: function (a) {
						return a === H
					},
					focus: function (a) {
						return a === G.activeElement && (!G.hasFocus || G.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
					},
					enabled: function (a) {
						return a.disabled === !1
					},
					disabled: function (a) {
						return a.disabled === !0
					},
					checked: function (a) {
						var b = a.nodeName.toLowerCase();
						return "input" === b && !!a.checked || "option" === b && !!a.selected
					},
					selected: function (a) {
						return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
					},
					empty: function (a) {
						for (a = a.firstChild; a; a = a.nextSibling)
							if (a.nodeType < 6) return !1;
						return !0
					},
					parent: function (a) {
						return !w.pseudos.empty(a)
					},
					header: function (a) {
						return qa.test(a.nodeName)
					},
					input: function (a) {
						return pa.test(a.nodeName)
					},
					button: function (a) {
						var b = a.nodeName.toLowerCase();
						return "input" === b && "button" === a.type || "button" === b
					},
					text: function (a) {
						var b;
						return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
					},
					first: j(function () {
						return [0]
					}),
					last: j(function (a, b) {
						return [b - 1]
					}),
					eq: j(function (a, b, c) {
						return [0 > c ? c + b : c]
					}),
					even: j(function (a, b) {
						for (var c = 0; b > c; c += 2) a.push(c);
						return a
					}),
					odd: j(function (a, b) {
						for (var c = 1; b > c; c += 2) a.push(c);
						return a
					}),
					lt: j(function (a, b, c) {
						for (var d = 0 > c ? c + b : c; --d >= 0;) a.push(d);
						return a
					}),
					gt: j(function (a, b, c) {
						for (var d = 0 > c ? c + b : c; ++d < b;) a.push(d);
						return a
					})
				}
			}, w.pseudos.nth = w.pseudos.eq;
			for (u in {
					radio: !0,
					checkbox: !0,
					file: !0,
					password: !0,
					image: !0
				}) w.pseudos[u] = h(u);
			for (u in {
					submit: !0,
					reset: !0
				}) w.pseudos[u] = i(u);
			return l.prototype = w.filters = w.pseudos, w.setFilters = new l, z = b.tokenize = function (a, c) {
				var d, e, f, g, h, i, j, k = S[a + " "];
				if (k) return c ? 0 : k.slice(0);
				for (h = a, i = [], j = w.preFilter; h;) {
					(!d || (e = ja.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), d = !1, (e = ka.exec(h)) && (d = e.shift(), f.push({
						value: d,
						type: e[0].replace(ia, " ")
					}), h = h.slice(d.length));
					for (g in w.filter) !(e = oa[g].exec(h)) || j[g] && !(e = j[g](e)) || (d = e.shift(), f.push({
						value: d,
						type: g,
						matches: e
					}), h = h.slice(d.length));
					if (!d) break
				}
				return c ? h.length : h ? b.error(a) : S(a, i).slice(0)
			}, A = b.compile = function (a, b) {
				var c, d = [],
					e = [],
					f = T[a + " "];
				if (!f) {
					for (b || (b = z(a)), c = b.length; c--;) f = s(b[c]), f[N] ? d.push(f) : e.push(f);
					f = T(a, t(e, d)), f.selector = a
				}
				return f
			}, B = b.select = function (a, b, c, d) {
				var e, f, g, h, i, j = "function" == typeof a && a,
					l = !d && z(a = j.selector || a);
				if (c = c || [], 1 === l.length) {
					if (f = l[0] = l[0].slice(0), f.length > 2 && "ID" === (g = f[0]).type && v.getById && 9 === b.nodeType && I && w.relative[f[1].type]) {
						if (b = (w.find.ID(g.matches[0].replace(va, wa), b) || [])[0], !b) return c;
						j && (b = b.parentNode), a = a.slice(f.shift().value.length)
					}
					for (e = oa.needsContext.test(a) ? 0 : f.length; e-- && (g = f[e], !w.relative[h = g.type]);)
						if ((i = w.find[h]) && (d = i(g.matches[0].replace(va, wa), ta.test(f[0].type) && k(b.parentNode) || b))) {
							if (f.splice(e, 1), a = d.length && m(f), !a) return $.apply(c, d), c;
							break
						}
				}
				return (j || A(a, l))(d, b, !I, c, ta.test(a) && k(b.parentNode) || b), c
			}, v.sortStable = N.split("").sort(U).join("") === N, v.detectDuplicates = !!E, F(), v.sortDetached = e(function (a) {
				return 1 & a.compareDocumentPosition(G.createElement("div"))
			}), e(function (a) {
				return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
			}) || f("type|href|height|width", function (a, b, c) {
				return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
			}), v.attributes && e(function (a) {
				return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
			}) || f("value", function (a, b, c) {
				return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
			}), e(function (a) {
				return null == a.getAttribute("disabled")
			}) || f(ba, function (a, b, c) {
				var d;
				return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
			}), b
		}(a);
		ea.find = ja, ea.expr = ja.selectors,
			ea.expr[":"] = ea.expr.pseudos, ea.unique = ja.uniqueSort, ea.text = ja.getText, ea.isXMLDoc = ja.isXML, ea.contains = ja.contains;
		var ka = ea.expr.match.needsContext,
			la = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
			ma = /^.[^:#\[\.,]*$/;
		ea.filter = function (a, b, c) {
			var d = b[0];
			return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? ea.find.matchesSelector(d, a) ? [d] : [] : ea.find.matches(a, ea.grep(b, function (a) {
				return 1 === a.nodeType
			}))
		}, ea.fn.extend({
			find: function (a) {
				var b, c = [],
					d = this,
					e = d.length;
				if ("string" != typeof a) return this.pushStack(ea(a).filter(function () {
					for (b = 0; e > b; b++)
						if (ea.contains(d[b], this)) return !0
				}));
				for (b = 0; e > b; b++) ea.find(a, d[b], c);
				return c = this.pushStack(e > 1 ? ea.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
			},
			filter: function (a) {
				return this.pushStack(d(this, a || [], !1))
			},
			not: function (a) {
				return this.pushStack(d(this, a || [], !0))
			},
			is: function (a) {
				return !!d(this, "string" == typeof a && ka.test(a) ? ea(a) : a || [], !1).length
			}
		});
		var na, oa = a.document,
			pa = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
			qa = ea.fn.init = function (a, b) {
				var c, d;
				if (!a) return this;
				if ("string" == typeof a) {
					if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : pa.exec(a), !c || !c[1] && b) return !b || b.jquery ? (b || na).find(a) : this.constructor(b).find(a);
					if (c[1]) {
						if (b = b instanceof ea ? b[0] : b, ea.merge(this, ea.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : oa, !0)), la.test(c[1]) && ea.isPlainObject(b))
							for (c in b) ea.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
						return this
					}
					if (d = oa.getElementById(c[2]), d && d.parentNode) {
						if (d.id !== c[2]) return na.find(a);
						this.length = 1, this[0] = d
					}
					return this.context = oa, this.selector = a, this
				}
				return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : ea.isFunction(a) ? "undefined" != typeof na.ready ? na.ready(a) : a(ea) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), ea.makeArray(a, this))
			};
		qa.prototype = ea.fn, na = ea(oa);
		var ra = /^(?:parents|prev(?:Until|All))/,
			sa = {
				children: !0,
				contents: !0,
				next: !0,
				prev: !0
			};
		ea.extend({
			dir: function (a, b, c) {
				for (var d = [], e = a[b]; e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !ea(e).is(c));) 1 === e.nodeType && d.push(e), e = e[b];
				return d
			},
			sibling: function (a, b) {
				for (var c = []; a; a = a.nextSibling) 1 === a.nodeType && a !== b && c.push(a);
				return c
			}
		}), ea.fn.extend({
			has: function (a) {
				var b, c = ea(a, this),
					d = c.length;
				return this.filter(function () {
					for (b = 0; d > b; b++)
						if (ea.contains(this, c[b])) return !0
				})
			},
			closest: function (a, b) {
				for (var c, d = 0, e = this.length, f = [], g = ka.test(a) || "string" != typeof a ? ea(a, b || this.context) : 0; e > d; d++)
					for (c = this[d]; c && c !== b; c = c.parentNode)
						if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && ea.find.matchesSelector(c, a))) {
							f.push(c);
							break
						}
				return this.pushStack(f.length > 1 ? ea.unique(f) : f)
			},
			index: function (a) {
				return a ? "string" == typeof a ? ea.inArray(this[0], ea(a)) : ea.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
			},
			add: function (a, b) {
				return this.pushStack(ea.unique(ea.merge(this.get(), ea(a, b))))
			},
			addBack: function (a) {
				return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
			}
		}), ea.each({
			parent: function (a) {
				var b = a.parentNode;
				return b && 11 !== b.nodeType ? b : null
			},
			parents: function (a) {
				return ea.dir(a, "parentNode")
			},
			parentsUntil: function (a, b, c) {
				return ea.dir(a, "parentNode", c)
			},
			next: function (a) {
				return e(a, "nextSibling")
			},
			prev: function (a) {
				return e(a, "previousSibling")
			},
			nextAll: function (a) {
				return ea.dir(a, "nextSibling")
			},
			prevAll: function (a) {
				return ea.dir(a, "previousSibling")
			},
			nextUntil: function (a, b, c) {
				return ea.dir(a, "nextSibling", c)
			},
			prevUntil: function (a, b, c) {
				return ea.dir(a, "previousSibling", c)
			},
			siblings: function (a) {
				return ea.sibling((a.parentNode || {}).firstChild, a)
			},
			children: function (a) {
				return ea.sibling(a.firstChild)
			},
			contents: function (a) {
				return ea.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : ea.merge([], a.childNodes)
			}
		}, function (a, b) {
			ea.fn[a] = function (c, d) {
				var e = ea.map(this, b, c);
				return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = ea.filter(d, e)), this.length > 1 && (sa[a] || (e = ea.unique(e)), ra.test(a) && (e = e.reverse())), this.pushStack(e)
			}
		});
		var ta = /\S+/g,
			ua = {};
		ea.Callbacks = function (a) {
			a = "string" == typeof a ? ua[a] || f(a) : ea.extend({}, a);
			var b, c, d, e, g, h, i = [],
				j = !a.once && [],
				k = function (f) {
					for (c = a.memory && f, d = !0, g = h || 0, h = 0, e = i.length, b = !0; i && e > g; g++)
						if (i[g].apply(f[0], f[1]) === !1 && a.stopOnFalse) {
							c = !1;
							break
						}
					b = !1, i && (j ? j.length && k(j.shift()) : c ? i = [] : l.disable())
				},
				l = {
					add: function () {
						if (i) {
							var d = i.length;
							! function b(c) {
								ea.each(c, function (c, d) {
									var e = ea.type(d);
									"function" === e ? a.unique && l.has(d) || i.push(d) : d && d.length && "string" !== e && b(d)
								})
							}(arguments), b ? e = i.length : c && (h = d, k(c))
						}
						return this
					},
					remove: function () {
						return i && ea.each(arguments, function (a, c) {
							for (var d;
								(d = ea.inArray(c, i, d)) > -1;) i.splice(d, 1), b && (e >= d && e--, g >= d && g--)
						}), this
					},
					has: function (a) {
						return a ? ea.inArray(a, i) > -1 : !(!i || !i.length)
					},
					empty: function () {
						return i = [], e = 0, this
					},
					disable: function () {
						return i = j = c = void 0, this
					},
					disabled: function () {
						return !i
					},
					lock: function () {
						return j = void 0, c || l.disable(), this
					},
					locked: function () {
						return !j
					},
					fireWith: function (a, c) {
						return !i || d && !j || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? j.push(c) : k(c)), this
					},
					fire: function () {
						return l.fireWith(this, arguments), this
					},
					fired: function () {
						return !!d
					}
				};
			return l
		}, ea.extend({
			Deferred: function (a) {
				var b = [
						["resolve", "done", ea.Callbacks("once memory"), "resolved"],
						["reject", "fail", ea.Callbacks("once memory"), "rejected"],
						["notify", "progress", ea.Callbacks("memory")]
					],
					c = "pending",
					d = {
						state: function () {
							return c
						},
						always: function () {
							return e.done(arguments).fail(arguments), this
						},
						then: function () {
							var a = arguments;
							return ea.Deferred(function (c) {
								ea.each(b, function (b, f) {
									var g = ea.isFunction(a[b]) && a[b];
									e[f[1]](function () {
										var a = g && g.apply(this, arguments);
										a && ea.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
									})
								}), a = null
							}).promise()
						},
						promise: function (a) {
							return null != a ? ea.extend(a, d) : d
						}
					},
					e = {};
				return d.pipe = d.then, ea.each(b, function (a, f) {
					var g = f[2],
						h = f[3];
					d[f[1]] = g.add, h && g.add(function () {
						c = h
					}, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
						return e[f[0] + "With"](this === e ? d : this, arguments), this
					}, e[f[0] + "With"] = g.fireWith
				}), d.promise(e), a && a.call(e, e), e
			},
			when: function (a) {
				var b, c, d, e = 0,
					f = X.call(arguments),
					g = f.length,
					h = 1 !== g || a && ea.isFunction(a.promise) ? g : 0,
					i = 1 === h ? a : ea.Deferred(),
					j = function (a, c, d) {
						return function (e) {
							c[a] = this, d[a] = arguments.length > 1 ? X.call(arguments) : e, d === b ? i.notifyWith(c, d) : --h || i.resolveWith(c, d)
						}
					};
				if (g > 1)
					for (b = new Array(g), c = new Array(g), d = new Array(g); g > e; e++) f[e] && ea.isFunction(f[e].promise) ? f[e].promise().done(j(e, d, f)).fail(i.reject).progress(j(e, c, b)) : --h;
				return h || i.resolveWith(d, f), i.promise()
			}
		});
		var va;
		ea.fn.ready = function (a) {
			return ea.ready.promise().done(a), this
		}, ea.extend({
			isReady: !1,
			readyWait: 1,
			holdReady: function (a) {
				a ? ea.readyWait++ : ea.ready(!0)
			},
			ready: function (a) {
				if (a === !0 ? !--ea.readyWait : !ea.isReady) {
					if (!oa.body) return setTimeout(ea.ready);
					ea.isReady = !0, a !== !0 && --ea.readyWait > 0 || (va.resolveWith(oa, [ea]), ea.fn.triggerHandler && (ea(oa).triggerHandler("ready"), ea(oa).off("ready")))
				}
			}
		}), ea.ready.promise = function (b) {
			if (!va)
				if (va = ea.Deferred(), "complete" === oa.readyState) setTimeout(ea.ready);
				else if (oa.addEventListener) oa.addEventListener("DOMContentLoaded", h, !1), a.addEventListener("load", h, !1);
			else {
				oa.attachEvent("onreadystatechange", h), a.attachEvent("onload", h);
				var c = !1;
				try {
					c = null == a.frameElement && oa.documentElement
				} catch (a) {}
				c && c.doScroll && ! function a() {
					if (!ea.isReady) {
						try {
							c.doScroll("left")
						} catch (b) {
							return setTimeout(a, 50)
						}
						g(), ea.ready()
					}
				}()
			}
			return va.promise(b)
		};
		var wa, xa = "undefined";
		for (wa in ea(ca)) break;
		ca.ownLast = "0" !== wa, ca.inlineBlockNeedsLayout = !1, ea(function () {
				var a, b, c, d;
				c = oa.getElementsByTagName("body")[0], c && c.style && (b = oa.createElement("div"), d = oa.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== xa && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", ca.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d))
			}),
			function () {
				var a = oa.createElement("div");
				if (null == ca.deleteExpando) {
					ca.deleteExpando = !0;
					try {
						delete a.test
					} catch (a) {
						ca.deleteExpando = !1
					}
				}
				a = null
			}(), ea.acceptData = function (a) {
				var b = ea.noData[(a.nodeName + " ").toLowerCase()],
					c = +a.nodeType || 1;
				return (1 === c || 9 === c) && (!b || b !== !0 && a.getAttribute("classid") === b)
			};
		var ya = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
			za = /([A-Z])/g;
		ea.extend({
			cache: {},
			noData: {
				"applet ": !0,
				"embed ": !0,
				"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
			},
			hasData: function (a) {
				return a = a.nodeType ? ea.cache[a[ea.expando]] : a[ea.expando], !!a && !j(a)
			},
			data: function (a, b, c) {
				return k(a, b, c)
			},
			removeData: function (a, b) {
				return l(a, b)
			},
			_data: function (a, b, c) {
				return k(a, b, c, !0)
			},
			_removeData: function (a, b) {
				return l(a, b, !0)
			}
		}), ea.fn.extend({
			data: function (a, b) {
				var c, d, e, f = this[0],
					g = f && f.attributes;
				if (void 0 === a) {
					if (this.length && (e = ea.data(f), 1 === f.nodeType && !ea._data(f, "parsedAttrs"))) {
						for (c = g.length; c--;) g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = ea.camelCase(d.slice(5)), i(f, d, e[d])));
						ea._data(f, "parsedAttrs", !0)
					}
					return e
				}
				return "object" == typeof a ? this.each(function () {
					ea.data(this, a)
				}) : arguments.length > 1 ? this.each(function () {
					ea.data(this, a, b)
				}) : f ? i(f, a, ea.data(f, a)) : void 0
			},
			removeData: function (a) {
				return this.each(function () {
					ea.removeData(this, a)
				})
			}
		}), ea.extend({
			queue: function (a, b, c) {
				var d;
				return a ? (b = (b || "fx") + "queue", d = ea._data(a, b), c && (!d || ea.isArray(c) ? d = ea._data(a, b, ea.makeArray(c)) : d.push(c)), d || []) : void 0
			},
			dequeue: function (a, b) {
				b = b || "fx";
				var c = ea.queue(a, b),
					d = c.length,
					e = c.shift(),
					f = ea._queueHooks(a, b),
					g = function () {
						ea.dequeue(a, b)
					};
				"inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
			},
			_queueHooks: function (a, b) {
				var c = b + "queueHooks";
				return ea._data(a, c) || ea._data(a, c, {
					empty: ea.Callbacks("once memory").add(function () {
						ea._removeData(a, b + "queue"), ea._removeData(a, c)
					})
				})
			}
		}), ea.fn.extend({
			queue: function (a, b) {
				var c = 2;
				return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? ea.queue(this[0], a) : void 0 === b ? this : this.each(function () {
					var c = ea.queue(this, a, b);
					ea._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && ea.dequeue(this, a)
				})
			},
			dequeue: function (a) {
				return this.each(function () {
					ea.dequeue(this, a)
				})
			},
			clearQueue: function (a) {
				return this.queue(a || "fx", [])
			},
			promise: function (a, b) {
				var c, d = 1,
					e = ea.Deferred(),
					f = this,
					g = this.length,
					h = function () {
						--d || e.resolveWith(f, [f])
					};
				for ("string" != typeof a && (b = a, a = void 0), a = a || "fx"; g--;) c = ea._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
				return h(), e.promise(b)
			}
		});
		var Aa = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
			Ba = ["Top", "Right", "Bottom", "Left"],
			Ca = function (a, b) {
				return a = b || a, "none" === ea.css(a, "display") || !ea.contains(a.ownerDocument, a)
			},
			Da = ea.access = function (a, b, c, d, e, f, g) {
				var h = 0,
					i = a.length,
					j = null == c;
				if ("object" === ea.type(c)) {
					e = !0;
					for (h in c) ea.access(a, b, h, c[h], !0, f, g)
				} else if (void 0 !== d && (e = !0, ea.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
						return j.call(ea(a), c)
					})), b))
					for (; i > h; h++) b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
				return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
			},
			Ea = /^(?:checkbox|radio)$/i;
		! function () {
			var a = oa.createElement("input"),
				b = oa.createElement("div"),
				c = oa.createDocumentFragment();
			if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", ca.leadingWhitespace = 3 === b.firstChild.nodeType, ca.tbody = !b.getElementsByTagName("tbody").length, ca.htmlSerialize = !!b.getElementsByTagName("link").length, ca.html5Clone = "<:nav></:nav>" !== oa.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), ca.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", ca.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", ca.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, ca.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function () {
					ca.noCloneEvent = !1
				}), b.cloneNode(!0).click()), null == ca.deleteExpando) {
				ca.deleteExpando = !0;
				try {
					delete b.test
				} catch (a) {
					ca.deleteExpando = !1
				}
			}
		}(),
		function () {
			var b, c, d = oa.createElement("div");
			for (b in {
					submit: !0,
					change: !0,
					focusin: !0
				}) c = "on" + b, (ca[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), ca[b + "Bubbles"] = d.attributes[c].expando === !1);
			d = null
		}();
		var Fa = /^(?:input|select|textarea)$/i,
			Ga = /^key/,
			Ha = /^(?:mouse|pointer|contextmenu)|click/,
			Ia = /^(?:focusinfocus|focusoutblur)$/,
			Ja = /^([^.]*)(?:\.(.+)|)$/;
		ea.event = {
			global: {},
			add: function (a, b, c, d, e) {
				var f, g, h, i, j, k, l, m, n, o, p, q = ea._data(a);
				if (q) {
					for (c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = ea.guid++), (g = q.events) || (g = q.events = {}), (k = q.handle) || (k = q.handle = function (a) {
							return typeof ea === xa || a && ea.event.triggered === a.type ? void 0 : ea.event.dispatch.apply(k.elem, arguments)
						}, k.elem = a), b = (b || "").match(ta) || [""], h = b.length; h--;) f = Ja.exec(b[h]) || [], n = p = f[1], o = (f[2] || "").split(".").sort(), n && (j = ea.event.special[n] || {}, n = (e ? j.delegateType : j.bindType) || n, j = ea.event.special[n] || {}, l = ea.extend({
						type: n,
						origType: p,
						data: d,
						handler: c,
						guid: c.guid,
						selector: e,
						needsContext: e && ea.expr.match.needsContext.test(e),
						namespace: o.join(".")
					}, i), (m = g[n]) || (m = g[n] = [], m.delegateCount = 0, j.setup && j.setup.call(a, d, o, k) !== !1 || (a.addEventListener ? a.addEventListener(n, k, !1) : a.attachEvent && a.attachEvent("on" + n, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? m.splice(m.delegateCount++, 0, l) : m.push(l), ea.event.global[n] = !0);
					a = null
				}
			},
			remove: function (a, b, c, d, e) {
				var f, g, h, i, j, k, l, m, n, o, p, q = ea.hasData(a) && ea._data(a);
				if (q && (k = q.events)) {
					for (b = (b || "").match(ta) || [""], j = b.length; j--;)
						if (h = Ja.exec(b[j]) || [], n = p = h[1], o = (h[2] || "").split(".").sort(), n) {
							for (l = ea.event.special[n] || {}, n = (d ? l.delegateType : l.bindType) || n, m = k[n] || [], h = h[2] && new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = m.length; f--;) g = m[f], !e && p !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (m.splice(f, 1), g.selector && m.delegateCount--, l.remove && l.remove.call(a, g));
							i && !m.length && (l.teardown && l.teardown.call(a, o, q.handle) !== !1 || ea.removeEvent(a, n, q.handle), delete k[n])
						} else
							for (n in k) ea.event.remove(a, n + b[j], c, d, !0);
					ea.isEmptyObject(k) && (delete q.handle, ea._removeData(a, "events"))
				}
			},
			trigger: function (b, c, d, e) {
				var f, g, h, i, j, k, l, m = [d || oa],
					n = ba.call(b, "type") ? b.type : b,
					o = ba.call(b, "namespace") ? b.namespace.split(".") : [];
				if (h = k = d = d || oa, 3 !== d.nodeType && 8 !== d.nodeType && !Ia.test(n + ea.event.triggered) && (n.indexOf(".") >= 0 && (o = n.split("."), n = o.shift(), o.sort()), g = n.indexOf(":") < 0 && "on" + n, b = b[ea.expando] ? b : new ea.Event(n, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = o.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + o.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : ea.makeArray(c, [b]), j = ea.event.special[n] || {}, e || !j.trigger || j.trigger.apply(d, c) !== !1)) {
					if (!e && !j.noBubble && !ea.isWindow(d)) {
						for (i = j.delegateType || n, Ia.test(i + n) || (h = h.parentNode); h; h = h.parentNode) m.push(h), k = h;
						k === (d.ownerDocument || oa) && m.push(k.defaultView || k.parentWindow || a)
					}
					for (l = 0;
						(h = m[l++]) && !b.isPropagationStopped();) b.type = l > 1 ? i : j.bindType || n, f = (ea._data(h, "events") || {})[b.type] && ea._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && ea.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
					if (b.type = n, !e && !b.isDefaultPrevented() && (!j._default || j._default.apply(m.pop(), c) === !1) && ea.acceptData(d) && g && d[n] && !ea.isWindow(d)) {
						k = d[g], k && (d[g] = null), ea.event.triggered = n;
						try {
							d[n]()
						} catch (a) {}
						ea.event.triggered = void 0, k && (d[g] = k)
					}
					return b.result
				}
			},
			dispatch: function (a) {
				a = ea.event.fix(a);
				var b, c, d, e, f, g = [],
					h = X.call(arguments),
					i = (ea._data(this, "events") || {})[a.type] || [],
					j = ea.event.special[a.type] || {};
				if (h[0] = a, a.delegateTarget = this, !j.preDispatch || j.preDispatch.call(this, a) !== !1) {
					for (g = ea.event.handlers.call(this, a, i), b = 0;
						(e = g[b++]) && !a.isPropagationStopped();)
						for (a.currentTarget = e.elem, f = 0;
							(d = e.handlers[f++]) && !a.isImmediatePropagationStopped();)(!a.namespace_re || a.namespace_re.test(d.namespace)) && (a.handleObj = d, a.data = d.data, c = ((ea.event.special[d.origType] || {}).handle || d.handler).apply(e.elem, h), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()));
					return j.postDispatch && j.postDispatch.call(this, a), a.result
				}
			},
			handlers: function (a, b) {
				var c, d, e, f, g = [],
					h = b.delegateCount,
					i = a.target;
				if (h && i.nodeType && (!a.button || "click" !== a.type))
					for (; i != this; i = i.parentNode || this)
						if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
							for (e = [], f = 0; h > f; f++) d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? ea(c, this).index(i) >= 0 : ea.find(c, this, null, [i]).length), e[c] && e.push(d);
							e.length && g.push({
								elem: i,
								handlers: e
							})
						}
				return h < b.length && g.push({
					elem: this,
					handlers: b.slice(h)
				}), g
			},
			fix: function (a) {
				if (a[ea.expando]) return a;
				var b, c, d, e = a.type,
					f = a,
					g = this.fixHooks[e];
				for (g || (this.fixHooks[e] = g = Ha.test(e) ? this.mouseHooks : Ga.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new ea.Event(f), b = d.length; b--;) c = d[b], a[c] = f[c];
				return a.target || (a.target = f.srcElement || oa), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
			},
			props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
			fixHooks: {},
			keyHooks: {
				props: "char charCode key keyCode".split(" "),
				filter: function (a, b) {
					return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
				}
			},
			mouseHooks: {
				props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
				filter: function (a, b) {
					var c, d, e, f = b.button,
						g = b.fromElement;
					return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || oa, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
				}
			},
			special: {
				load: {
					noBubble: !0
				},
				focus: {
					trigger: function () {
						if (this !== o() && this.focus) try {
							return this.focus(), !1
						} catch (a) {}
					},
					delegateType: "focusin"
				},
				blur: {
					trigger: function () {
						return this === o() && this.blur ? (this.blur(), !1) : void 0
					},
					delegateType: "focusout"
				},
				click: {
					trigger: function () {
						return ea.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
					},
					_default: function (a) {
						return ea.nodeName(a.target, "a")
					}
				},
				beforeunload: {
					postDispatch: function (a) {
						void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
					}
				}
			},
			simulate: function (a, b, c, d) {
				var e = ea.extend(new ea.Event, c, {
					type: a,
					isSimulated: !0,
					originalEvent: {}
				});
				d ? ea.event.trigger(e, null, b) : ea.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
			}
		}, ea.removeEvent = oa.removeEventListener ? function (a, b, c) {
			a.removeEventListener && a.removeEventListener(b, c, !1)
		} : function (a, b, c) {
			var d = "on" + b;
			a.detachEvent && (typeof a[d] === xa && (a[d] = null), a.detachEvent(d, c))
		}, ea.Event = function (a, b) {
			return this instanceof ea.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? m : n) : this.type = a, b && ea.extend(this, b), this.timeStamp = a && a.timeStamp || ea.now(), void(this[ea.expando] = !0)) : new ea.Event(a, b)
		}, ea.Event.prototype = {
			isDefaultPrevented: n,
			isPropagationStopped: n,
			isImmediatePropagationStopped: n,
			preventDefault: function () {
				var a = this.originalEvent;
				this.isDefaultPrevented = m, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
			},
			stopPropagation: function () {
				var a = this.originalEvent;
				this.isPropagationStopped = m, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
			},
			stopImmediatePropagation: function () {
				var a = this.originalEvent;
				this.isImmediatePropagationStopped = m, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
			}
		}, ea.each({
			mouseenter: "mouseover",
			mouseleave: "mouseout",
			pointerenter: "pointerover",
			pointerleave: "pointerout"
		}, function (a, b) {
			ea.event.special[a] = {
				delegateType: b,
				bindType: b,
				handle: function (a) {
					var c, d = this,
						e = a.relatedTarget,
						f = a.handleObj;
					return (!e || e !== d && !ea.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
				}
			}
		}), ca.submitBubbles || (ea.event.special.submit = {
			setup: function () {
				return !ea.nodeName(this, "form") && void ea.event.add(this, "click._submit keypress._submit", function (a) {
					var b = a.target,
						c = ea.nodeName(b, "input") || ea.nodeName(b, "button") ? b.form : void 0;
					c && !ea._data(c, "submitBubbles") && (ea.event.add(c, "submit._submit", function (a) {
						a._submit_bubble = !0
					}), ea._data(c, "submitBubbles", !0))
				})
			},
			postDispatch: function (a) {
				a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && ea.event.simulate("submit", this.parentNode, a, !0))
			},
			teardown: function () {
				return !ea.nodeName(this, "form") && void ea.event.remove(this, "._submit")
			}
		}), ca.changeBubbles || (ea.event.special.change = {
			setup: function () {
				return Fa.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ea.event.add(this, "propertychange._change", function (a) {
					"checked" === a.originalEvent.propertyName && (this._just_changed = !0)
				}), ea.event.add(this, "click._change", function (a) {
					this._just_changed && !a.isTrigger && (this._just_changed = !1), ea.event.simulate("change", this, a, !0)
				})), !1) : void ea.event.add(this, "beforeactivate._change", function (a) {
					var b = a.target;
					Fa.test(b.nodeName) && !ea._data(b, "changeBubbles") && (ea.event.add(b, "change._change", function (a) {
						!this.parentNode || a.isSimulated || a.isTrigger || ea.event.simulate("change", this.parentNode, a, !0)
					}), ea._data(b, "changeBubbles", !0))
				})
			},
			handle: function (a) {
				var b = a.target;
				return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
			},
			teardown: function () {
				return ea.event.remove(this, "._change"), !Fa.test(this.nodeName)
			}
		}), ca.focusinBubbles || ea.each({
			focus: "focusin",
			blur: "focusout"
		}, function (a, b) {
			var c = function (a) {
				ea.event.simulate(b, a.target, ea.event.fix(a), !0)
			};
			ea.event.special[b] = {
				setup: function () {
					var d = this.ownerDocument || this,
						e = ea._data(d, b);
					e || d.addEventListener(a, c, !0), ea._data(d, b, (e || 0) + 1)
				},
				teardown: function () {
					var d = this.ownerDocument || this,
						e = ea._data(d, b) - 1;
					e ? ea._data(d, b, e) : (d.removeEventListener(a, c, !0), ea._removeData(d, b))
				}
			}
		}), ea.fn.extend({
			on: function (a, b, c, d, e) {
				var f, g;
				if ("object" == typeof a) {
					"string" != typeof b && (c = c || b, b = void 0);
					for (f in a) this.on(f, b, c, a[f], e);
					return this
				}
				if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = n;
				else if (!d) return this;
				return 1 === e && (g = d, d = function (a) {
					return ea().off(a), g.apply(this, arguments)
				}, d.guid = g.guid || (g.guid = ea.guid++)), this.each(function () {
					ea.event.add(this, a, d, c, b)
				})
			},
			one: function (a, b, c, d) {
				return this.on(a, b, c, d, 1)
			},
			off: function (a, b, c) {
				var d, e;
				if (a && a.preventDefault && a.handleObj) return d = a.handleObj, ea(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
				if ("object" == typeof a) {
					for (e in a) this.off(e, b, a[e]);
					return this
				}
				return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = n), this.each(function () {
					ea.event.remove(this, a, c, b)
				})
			},
			trigger: function (a, b) {
				return this.each(function () {
					ea.event.trigger(a, b, this)
				})
			},
			triggerHandler: function (a, b) {
				var c = this[0];
				return c ? ea.event.trigger(a, b, c, !0) : void 0
			}
		});
		var Ka = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
			La = / jQuery\d+="(?:null|\d+)"/g,
			Ma = new RegExp("<(?:" + Ka + ")[\\s/>]", "i"),
			Na = /^\s+/,
			Oa = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
			Pa = /<([\w:]+)/,
			Qa = /<tbody/i,
			Ra = /<|&#?\w+;/,
			Sa = /<(?:script|style|link)/i,
			Ta = /checked\s*(?:[^=]|=\s*.checked.)/i,
			Ua = /^$|\/(?:java|ecma)script/i,
			Va = /^true\/(.*)/,
			Wa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
			Xa = {
				option: [1, "<select multiple='multiple'>", "</select>"],
				legend: [1, "<fieldset>", "</fieldset>"],
				area: [1, "<map>", "</map>"],
				param: [1, "<object>", "</object>"],
				thead: [1, "<table>", "</table>"],
				tr: [2, "<table><tbody>", "</tbody></table>"],
				col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
				td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
				_default: ca.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
			},
			Ya = p(oa),
			Za = Ya.appendChild(oa.createElement("div"));
		Xa.optgroup = Xa.option, Xa.tbody = Xa.tfoot = Xa.colgroup = Xa.caption = Xa.thead, Xa.th = Xa.td, ea.extend({
			clone: function (a, b, c) {
				var d, e, f, g, h, i = ea.contains(a.ownerDocument, a);
				if (ca.html5Clone || ea.isXMLDoc(a) || !Ma.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (Za.innerHTML = a.outerHTML, Za.removeChild(f = Za.firstChild)), !(ca.noCloneEvent && ca.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || ea.isXMLDoc(a)))
					for (d = q(f), h = q(a), g = 0; null != (e = h[g]); ++g) d[g] && x(e, d[g]);
				if (b)
					if (c)
						for (h = h || q(a), d = d || q(f), g = 0; null != (e = h[g]); g++) w(e, d[g]);
					else w(a, f);
				return d = q(f, "script"), d.length > 0 && v(d, !i && q(a, "script")), d = h = e = null, f
			},
			buildFragment: function (a, b, c, d) {
				for (var e, f, g, h, i, j, k, l = a.length, m = p(b), n = [], o = 0; l > o; o++)
					if (f = a[o], f || 0 === f)
						if ("object" === ea.type(f)) ea.merge(n, f.nodeType ? [f] : f);
						else if (Ra.test(f)) {
					for (h = h || m.appendChild(b.createElement("div")), i = (Pa.exec(f) || ["", ""])[1].toLowerCase(), k = Xa[i] || Xa._default, h.innerHTML = k[1] + f.replace(Oa, "<$1></$2>") + k[2], e = k[0]; e--;) h = h.lastChild;
					if (!ca.leadingWhitespace && Na.test(f) && n.push(b.createTextNode(Na.exec(f)[0])), !ca.tbody)
						for (f = "table" !== i || Qa.test(f) ? "<table>" !== k[1] || Qa.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length; e--;) ea.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j);
					for (ea.merge(n, h.childNodes), h.textContent = ""; h.firstChild;) h.removeChild(h.firstChild);
					h = m.lastChild
				} else n.push(b.createTextNode(f));
				for (h && m.removeChild(h), ca.appendChecked || ea.grep(q(n, "input"), r), o = 0; f = n[o++];)
					if ((!d || -1 === ea.inArray(f, d)) && (g = ea.contains(f.ownerDocument, f), h = q(m.appendChild(f), "script"), g && v(h), c))
						for (e = 0; f = h[e++];) Ua.test(f.type || "") && c.push(f);
				return h = null, m
			},
			cleanData: function (a, b) {
				for (var c, d, e, f, g = 0, h = ea.expando, i = ea.cache, j = ca.deleteExpando, k = ea.event.special; null != (c = a[g]); g++)
					if ((b || ea.acceptData(c)) && (e = c[h], f = e && i[e])) {
						if (f.events)
							for (d in f.events) k[d] ? ea.event.remove(c, d) : ea.removeEvent(c, d, f.handle);
						i[e] && (delete i[e], j ? delete c[h] : typeof c.removeAttribute !== xa ? c.removeAttribute(h) : c[h] = null, W.push(e))
					}
			}
		}), ea.fn.extend({
			text: function (a) {
				return Da(this, function (a) {
					return void 0 === a ? ea.text(this) : this.empty().append((this[0] && this[0].ownerDocument || oa).createTextNode(a))
				}, null, a, arguments.length)
			},
			append: function () {
				return this.domManip(arguments, function (a) {
					if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
						var b = s(this, a);
						b.appendChild(a)
					}
				})
			},
			prepend: function () {
				return this.domManip(arguments, function (a) {
					if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
						var b = s(this, a);
						b.insertBefore(a, b.firstChild)
					}
				})
			},
			before: function () {
				return this.domManip(arguments, function (a) {
					this.parentNode && this.parentNode.insertBefore(a, this)
				})
			},
			after: function () {
				return this.domManip(arguments, function (a) {
					this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
				})
			},
			remove: function (a, b) {
				for (var c, d = a ? ea.filter(a, this) : this, e = 0; null != (c = d[e]); e++) b || 1 !== c.nodeType || ea.cleanData(q(c)), c.parentNode && (b && ea.contains(c.ownerDocument, c) && v(q(c, "script")), c.parentNode.removeChild(c));
				return this
			},
			empty: function () {
				for (var a, b = 0; null != (a = this[b]); b++) {
					for (1 === a.nodeType && ea.cleanData(q(a, !1)); a.firstChild;) a.removeChild(a.firstChild);
					a.options && ea.nodeName(a, "select") && (a.options.length = 0)
				}
				return this
			},
			clone: function (a, b) {
				return a = null != a && a, b = null == b ? a : b, this.map(function () {
					return ea.clone(this, a, b)
				})
			},
			html: function (a) {
				return Da(this, function (a) {
					var b = this[0] || {},
						c = 0,
						d = this.length;
					if (void 0 === a) return 1 === b.nodeType ? b.innerHTML.replace(La, "") : void 0;
					if (!("string" != typeof a || Sa.test(a) || !ca.htmlSerialize && Ma.test(a) || !ca.leadingWhitespace && Na.test(a) || Xa[(Pa.exec(a) || ["", ""])[1].toLowerCase()])) {
						a = a.replace(Oa, "<$1></$2>");
						try {
							for (; d > c; c++) b = this[c] || {}, 1 === b.nodeType && (ea.cleanData(q(b, !1)), b.innerHTML = a);
							b = 0
						} catch (a) {}
					}
					b && this.empty().append(a)
				}, null, a, arguments.length)
			},
			replaceWith: function () {
				var a = arguments[0];
				return this.domManip(arguments, function (b) {
					a = this.parentNode, ea.cleanData(q(this)), a && a.replaceChild(b, this)
				}), a && (a.length || a.nodeType) ? this : this.remove()
			},
			detach: function (a) {
				return this.remove(a, !0)
			},
			domManip: function (a, b) {
				a = Y.apply([], a);
				var c, d, e, f, g, h, i = 0,
					j = this.length,
					k = this,
					l = j - 1,
					m = a[0],
					n = ea.isFunction(m);
				if (n || j > 1 && "string" == typeof m && !ca.checkClone && Ta.test(m)) return this.each(function (c) {
					var d = k.eq(c);
					n && (a[0] = m.call(this, c, d.html())), d.domManip(a, b)
				});
				if (j && (h = ea.buildFragment(a, this[0].ownerDocument, !1, this), c = h.firstChild, 1 === h.childNodes.length && (h = c), c)) {
					for (f = ea.map(q(h, "script"), t), e = f.length; j > i; i++) d = h, i !== l && (d = ea.clone(d, !0, !0), e && ea.merge(f, q(d, "script"))), b.call(this[i], d, i);
					if (e)
						for (g = f[f.length - 1].ownerDocument, ea.map(f, u), i = 0; e > i; i++) d = f[i], Ua.test(d.type || "") && !ea._data(d, "globalEval") && ea.contains(g, d) && (d.src ? ea._evalUrl && ea._evalUrl(d.src) : ea.globalEval((d.text || d.textContent || d.innerHTML || "").replace(Wa, "")));
					h = c = null
				}
				return this
			}
		}), ea.each({
			appendTo: "append",
			prependTo: "prepend",
			insertBefore: "before",
			insertAfter: "after",
			replaceAll: "replaceWith"
		}, function (a, b) {
			ea.fn[a] = function (a) {
				for (var c, d = 0, e = [], f = ea(a), g = f.length - 1; g >= d; d++) c = d === g ? this : this.clone(!0), ea(f[d])[b](c), Z.apply(e, c.get());
				return this.pushStack(e)
			}
		});
		var $a, _a = {};
		! function () {
			var a;
			ca.shrinkWrapBlocks = function () {
				if (null != a) return a;
				a = !1;
				var b, c, d;
				return c = oa.getElementsByTagName("body")[0], c && c.style ? (b = oa.createElement("div"), d = oa.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== xa && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(oa.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0
			}
		}();
		var ab, bb, cb = /^margin/,
			db = new RegExp("^(" + Aa + ")(?!px)[a-z%]+$", "i"),
			eb = /^(top|right|bottom|left)$/;
		a.getComputedStyle ? (ab = function (b) {
			return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
		}, bb = function (a, b, c) {
			var d, e, f, g, h = a.style;
			return c = c || ab(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || ea.contains(a.ownerDocument, a) || (g = ea.style(a, b)), db.test(g) && cb.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
		}) : oa.documentElement.currentStyle && (ab = function (a) {
			return a.currentStyle
		}, bb = function (a, b, c) {
			var d, e, f, g, h = a.style;
			return c = c || ab(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), db.test(g) && !eb.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
		}), ! function () {
			function b() {
				var b, c, d, e;
				c = oa.getElementsByTagName("body")[0], c && c.style && (b = oa.createElement("div"), d = oa.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", f = g = !1, i = !0, a.getComputedStyle && (f = "1%" !== (a.getComputedStyle(b, null) || {}).top, g = "4px" === (a.getComputedStyle(b, null) || {
					width: "4px"
				}).width, e = b.appendChild(oa.createElement("div")), e.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", b.style.width = "1px", i = !parseFloat((a.getComputedStyle(e, null) || {}).marginRight), b.removeChild(e)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", e = b.getElementsByTagName("td"), e[0].style.cssText = "margin:0;border:0;padding:0;display:none", h = 0 === e[0].offsetHeight, h && (e[0].style.display = "", e[1].style.display = "none", h = 0 === e[0].offsetHeight), c.removeChild(d))
			}
			var c, d, e, f, g, h, i;
			c = oa.createElement("div"), c.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>",
				e = c.getElementsByTagName("a")[0], (d = e && e.style) && (d.cssText = "float:left;opacity:.5", ca.opacity = "0.5" === d.opacity, ca.cssFloat = !!d.cssFloat, c.style.backgroundClip = "content-box", c.cloneNode(!0).style.backgroundClip = "", ca.clearCloneStyle = "content-box" === c.style.backgroundClip, ca.boxSizing = "" === d.boxSizing || "" === d.MozBoxSizing || "" === d.WebkitBoxSizing, ea.extend(ca, {
					reliableHiddenOffsets: function () {
						return null == h && b(), h
					},
					boxSizingReliable: function () {
						return null == g && b(), g
					},
					pixelPosition: function () {
						return null == f && b(), f
					},
					reliableMarginRight: function () {
						return null == i && b(), i
					}
				}))
		}(), ea.swap = function (a, b, c, d) {
			var e, f, g = {};
			for (f in b) g[f] = a.style[f], a.style[f] = b[f];
			e = c.apply(a, d || []);
			for (f in b) a.style[f] = g[f];
			return e
		};
		var fb = /alpha\([^)]*\)/i,
			gb = /opacity\s*=\s*([^)]*)/,
			hb = /^(none|table(?!-c[ea]).+)/,
			ib = new RegExp("^(" + Aa + ")(.*)$", "i"),
			jb = new RegExp("^([+-])=(" + Aa + ")", "i"),
			kb = {
				position: "absolute",
				visibility: "hidden",
				display: "block"
			},
			lb = {
				letterSpacing: "0",
				fontWeight: "400"
			},
			mb = ["Webkit", "O", "Moz", "ms"];
		ea.extend({
			cssHooks: {
				opacity: {
					get: function (a, b) {
						if (b) {
							var c = bb(a, "opacity");
							return "" === c ? "1" : c
						}
					}
				}
			},
			cssNumber: {
				columnCount: !0,
				fillOpacity: !0,
				flexGrow: !0,
				flexShrink: !0,
				fontWeight: !0,
				lineHeight: !0,
				opacity: !0,
				order: !0,
				orphans: !0,
				widows: !0,
				zIndex: !0,
				zoom: !0
			},
			cssProps: {
				float: ca.cssFloat ? "cssFloat" : "styleFloat"
			},
			style: function (a, b, c, d) {
				if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
					var e, f, g, h = ea.camelCase(b),
						i = a.style;
					if (b = ea.cssProps[h] || (ea.cssProps[h] = B(i, h)), g = ea.cssHooks[b] || ea.cssHooks[h], void 0 === c) return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
					if (f = typeof c, "string" === f && (e = jb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(ea.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || ea.cssNumber[h] || (c += "px"), ca.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d))))) try {
						i[b] = c
					} catch (a) {}
				}
			},
			css: function (a, b, c, d) {
				var e, f, g, h = ea.camelCase(b);
				return b = ea.cssProps[h] || (ea.cssProps[h] = B(a.style, h)), g = ea.cssHooks[b] || ea.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = bb(a, b, d)), "normal" === f && b in lb && (f = lb[b]), "" === c || c ? (e = parseFloat(f), c === !0 || ea.isNumeric(e) ? e || 0 : f) : f
			}
		}), ea.each(["height", "width"], function (a, b) {
			ea.cssHooks[b] = {
				get: function (a, c, d) {
					return c ? hb.test(ea.css(a, "display")) && 0 === a.offsetWidth ? ea.swap(a, kb, function () {
						return F(a, b, d)
					}) : F(a, b, d) : void 0
				},
				set: function (a, c, d) {
					var e = d && ab(a);
					return D(a, c, d ? E(a, b, d, ca.boxSizing && "border-box" === ea.css(a, "boxSizing", !1, e), e) : 0)
				}
			}
		}), ca.opacity || (ea.cssHooks.opacity = {
			get: function (a, b) {
				return gb.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
			},
			set: function (a, b) {
				var c = a.style,
					d = a.currentStyle,
					e = ea.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "",
					f = d && d.filter || c.filter || "";
				c.zoom = 1, (b >= 1 || "" === b) && "" === ea.trim(f.replace(fb, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = fb.test(f) ? f.replace(fb, e) : f + " " + e)
			}
		}), ea.cssHooks.marginRight = A(ca.reliableMarginRight, function (a, b) {
			return b ? ea.swap(a, {
				display: "inline-block"
			}, bb, [a, "marginRight"]) : void 0
		}), ea.each({
			margin: "",
			padding: "",
			border: "Width"
		}, function (a, b) {
			ea.cssHooks[a + b] = {
				expand: function (c) {
					for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++) e[a + Ba[d] + b] = f[d] || f[d - 2] || f[0];
					return e
				}
			}, cb.test(a) || (ea.cssHooks[a + b].set = D)
		}), ea.fn.extend({
			css: function (a, b) {
				return Da(this, function (a, b, c) {
					var d, e, f = {},
						g = 0;
					if (ea.isArray(b)) {
						for (d = ab(a), e = b.length; e > g; g++) f[b[g]] = ea.css(a, b[g], !1, d);
						return f
					}
					return void 0 !== c ? ea.style(a, b, c) : ea.css(a, b)
				}, a, b, arguments.length > 1)
			},
			show: function () {
				return C(this, !0)
			},
			hide: function () {
				return C(this)
			},
			toggle: function (a) {
				return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
					Ca(this) ? ea(this).show() : ea(this).hide()
				})
			}
		}), ea.Tween = G, G.prototype = {
			constructor: G,
			init: function (a, b, c, d, e, f) {
				this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (ea.cssNumber[c] ? "" : "px")
			},
			cur: function () {
				var a = G.propHooks[this.prop];
				return a && a.get ? a.get(this) : G.propHooks._default.get(this)
			},
			run: function (a) {
				var b, c = G.propHooks[this.prop];
				return this.options.duration ? this.pos = b = ea.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : G.propHooks._default.set(this), this
			}
		}, G.prototype.init.prototype = G.prototype, G.propHooks = {
			_default: {
				get: function (a) {
					var b;
					return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = ea.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
				},
				set: function (a) {
					ea.fx.step[a.prop] ? ea.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[ea.cssProps[a.prop]] || ea.cssHooks[a.prop]) ? ea.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
				}
			}
		}, G.propHooks.scrollTop = G.propHooks.scrollLeft = {
			set: function (a) {
				a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
			}
		}, ea.easing = {
			linear: function (a) {
				return a
			},
			swing: function (a) {
				return .5 - Math.cos(a * Math.PI) / 2
			}
		}, ea.fx = G.prototype.init, ea.fx.step = {};
		var nb, ob, pb = /^(?:toggle|show|hide)$/,
			qb = new RegExp("^(?:([+-])=|)(" + Aa + ")([a-z%]*)$", "i"),
			rb = /queueHooks$/,
			sb = [K],
			tb = {
				"*": [function (a, b) {
					var c = this.createTween(a, b),
						d = c.cur(),
						e = qb.exec(b),
						f = e && e[3] || (ea.cssNumber[a] ? "" : "px"),
						g = (ea.cssNumber[a] || "px" !== f && +d) && qb.exec(ea.css(c.elem, a)),
						h = 1,
						i = 20;
					if (g && g[3] !== f) {
						f = f || g[3], e = e || [], g = +d || 1;
						do h = h || ".5", g /= h, ea.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
					}
					return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
				}]
			};
		ea.Animation = ea.extend(M, {
				tweener: function (a, b) {
					ea.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
					for (var c, d = 0, e = a.length; e > d; d++) c = a[d], tb[c] = tb[c] || [], tb[c].unshift(b)
				},
				prefilter: function (a, b) {
					b ? sb.unshift(a) : sb.push(a)
				}
			}), ea.speed = function (a, b, c) {
				var d = a && "object" == typeof a ? ea.extend({}, a) : {
					complete: c || !c && b || ea.isFunction(a) && a,
					duration: a,
					easing: c && b || b && !ea.isFunction(b) && b
				};
				return d.duration = ea.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in ea.fx.speeds ? ea.fx.speeds[d.duration] : ea.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
					ea.isFunction(d.old) && d.old.call(this), d.queue && ea.dequeue(this, d.queue)
				}, d
			}, ea.fn.extend({
				fadeTo: function (a, b, c, d) {
					return this.filter(Ca).css("opacity", 0).show().end().animate({
						opacity: b
					}, a, c, d)
				},
				animate: function (a, b, c, d) {
					var e = ea.isEmptyObject(a),
						f = ea.speed(b, c, d),
						g = function () {
							var b = M(this, ea.extend({}, a), f);
							(e || ea._data(this, "finish")) && b.stop(!0)
						};
					return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
				},
				stop: function (a, b, c) {
					var d = function (a) {
						var b = a.stop;
						delete a.stop, b(c)
					};
					return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
						var b = !0,
							e = null != a && a + "queueHooks",
							f = ea.timers,
							g = ea._data(this);
						if (e) g[e] && g[e].stop && d(g[e]);
						else
							for (e in g) g[e] && g[e].stop && rb.test(e) && d(g[e]);
						for (e = f.length; e--;) f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
						(b || !c) && ea.dequeue(this, a)
					})
				},
				finish: function (a) {
					return a !== !1 && (a = a || "fx"), this.each(function () {
						var b, c = ea._data(this),
							d = c[a + "queue"],
							e = c[a + "queueHooks"],
							f = ea.timers,
							g = d ? d.length : 0;
						for (c.finish = !0, ea.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;) f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
						for (b = 0; g > b; b++) d[b] && d[b].finish && d[b].finish.call(this);
						delete c.finish
					})
				}
			}), ea.each(["toggle", "show", "hide"], function (a, b) {
				var c = ea.fn[b];
				ea.fn[b] = function (a, d, e) {
					return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(I(b, !0), a, d, e)
				}
			}), ea.each({
				slideDown: I("show"),
				slideUp: I("hide"),
				slideToggle: I("toggle"),
				fadeIn: {
					opacity: "show"
				},
				fadeOut: {
					opacity: "hide"
				},
				fadeToggle: {
					opacity: "toggle"
				}
			}, function (a, b) {
				ea.fn[a] = function (a, c, d) {
					return this.animate(b, a, c, d)
				}
			}), ea.timers = [], ea.fx.tick = function () {
				var a, b = ea.timers,
					c = 0;
				for (nb = ea.now(); c < b.length; c++) a = b[c], a() || b[c] !== a || b.splice(c--, 1);
				b.length || ea.fx.stop(), nb = void 0
			}, ea.fx.timer = function (a) {
				ea.timers.push(a), a() ? ea.fx.start() : ea.timers.pop()
			}, ea.fx.interval = 13, ea.fx.start = function () {
				ob || (ob = setInterval(ea.fx.tick, ea.fx.interval))
			}, ea.fx.stop = function () {
				clearInterval(ob), ob = null
			}, ea.fx.speeds = {
				slow: 600,
				fast: 200,
				_default: 400
			}, ea.fn.delay = function (a, b) {
				return a = ea.fx ? ea.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
					var d = setTimeout(b, a);
					c.stop = function () {
						clearTimeout(d)
					}
				})
			},
			function () {
				var a, b, c, d, e;
				b = oa.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = oa.createElement("select"), e = c.appendChild(oa.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", ca.getSetAttribute = "t" !== b.className, ca.style = /top/.test(d.getAttribute("style")), ca.hrefNormalized = "/a" === d.getAttribute("href"), ca.checkOn = !!a.value, ca.optSelected = e.selected, ca.enctype = !!oa.createElement("form").enctype, c.disabled = !0, ca.optDisabled = !e.disabled, a = oa.createElement("input"), a.setAttribute("value", ""), ca.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), ca.radioValue = "t" === a.value
			}();
		var ub = /\r/g;
		ea.fn.extend({
			val: function (a) {
				var b, c, d, e = this[0];
				return arguments.length ? (d = ea.isFunction(a), this.each(function (c) {
					var e;
					1 === this.nodeType && (e = d ? a.call(this, c, ea(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : ea.isArray(e) && (e = ea.map(e, function (a) {
						return null == a ? "" : a + ""
					})), b = ea.valHooks[this.type] || ea.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
				})) : e ? (b = ea.valHooks[e.type] || ea.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(ub, "") : null == c ? "" : c)) : void 0
			}
		}), ea.extend({
			valHooks: {
				option: {
					get: function (a) {
						var b = ea.find.attr(a, "value");
						return null != b ? b : ea.trim(ea.text(a))
					}
				},
				select: {
					get: function (a) {
						for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
							if (c = d[i], !(!c.selected && i !== e || (ca.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && ea.nodeName(c.parentNode, "optgroup"))) {
								if (b = ea(c).val(), f) return b;
								g.push(b)
							}
						return g
					},
					set: function (a, b) {
						for (var c, d, e = a.options, f = ea.makeArray(b), g = e.length; g--;)
							if (d = e[g], ea.inArray(ea.valHooks.option.get(d), f) >= 0) try {
								d.selected = c = !0
							} catch (a) {
								d.scrollHeight
							} else d.selected = !1;
						return c || (a.selectedIndex = -1), e
					}
				}
			}
		}), ea.each(["radio", "checkbox"], function () {
			ea.valHooks[this] = {
				set: function (a, b) {
					return ea.isArray(b) ? a.checked = ea.inArray(ea(a).val(), b) >= 0 : void 0
				}
			}, ca.checkOn || (ea.valHooks[this].get = function (a) {
				return null === a.getAttribute("value") ? "on" : a.value
			})
		});
		var vb, wb, xb = ea.expr.attrHandle,
			yb = /^(?:checked|selected)$/i,
			zb = ca.getSetAttribute,
			Ab = ca.input;
		ea.fn.extend({
			attr: function (a, b) {
				return Da(this, ea.attr, a, b, arguments.length > 1)
			},
			removeAttr: function (a) {
				return this.each(function () {
					ea.removeAttr(this, a)
				})
			}
		}), ea.extend({
			attr: function (a, b, c) {
				var d, e, f = a.nodeType;
				if (a && 3 !== f && 8 !== f && 2 !== f) return typeof a.getAttribute === xa ? ea.prop(a, b, c) : (1 === f && ea.isXMLDoc(a) || (b = b.toLowerCase(), d = ea.attrHooks[b] || (ea.expr.match.bool.test(b) ? wb : vb)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = ea.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void ea.removeAttr(a, b))
			},
			removeAttr: function (a, b) {
				var c, d, e = 0,
					f = b && b.match(ta);
				if (f && 1 === a.nodeType)
					for (; c = f[e++];) d = ea.propFix[c] || c, ea.expr.match.bool.test(c) ? Ab && zb || !yb.test(c) ? a[d] = !1 : a[ea.camelCase("default-" + c)] = a[d] = !1 : ea.attr(a, c, ""), a.removeAttribute(zb ? c : d)
			},
			attrHooks: {
				type: {
					set: function (a, b) {
						if (!ca.radioValue && "radio" === b && ea.nodeName(a, "input")) {
							var c = a.value;
							return a.setAttribute("type", b), c && (a.value = c), b
						}
					}
				}
			}
		}), wb = {
			set: function (a, b, c) {
				return b === !1 ? ea.removeAttr(a, c) : Ab && zb || !yb.test(c) ? a.setAttribute(!zb && ea.propFix[c] || c, c) : a[ea.camelCase("default-" + c)] = a[c] = !0, c
			}
		}, ea.each(ea.expr.match.bool.source.match(/\w+/g), function (a, b) {
			var c = xb[b] || ea.find.attr;
			xb[b] = Ab && zb || !yb.test(b) ? function (a, b, d) {
				var e, f;
				return d || (f = xb[b], xb[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, xb[b] = f), e
			} : function (a, b, c) {
				return c ? void 0 : a[ea.camelCase("default-" + b)] ? b.toLowerCase() : null
			}
		}), Ab && zb || (ea.attrHooks.value = {
			set: function (a, b, c) {
				return ea.nodeName(a, "input") ? void(a.defaultValue = b) : vb && vb.set(a, b, c)
			}
		}), zb || (vb = {
			set: function (a, b, c) {
				var d = a.getAttributeNode(c);
				return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
			}
		}, xb.id = xb.name = xb.coords = function (a, b, c) {
			var d;
			return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
		}, ea.valHooks.button = {
			get: function (a, b) {
				var c = a.getAttributeNode(b);
				return c && c.specified ? c.value : void 0
			},
			set: vb.set
		}, ea.attrHooks.contenteditable = {
			set: function (a, b, c) {
				vb.set(a, "" !== b && b, c)
			}
		}, ea.each(["width", "height"], function (a, b) {
			ea.attrHooks[b] = {
				set: function (a, c) {
					return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
				}
			}
		})), ca.style || (ea.attrHooks.style = {
			get: function (a) {
				return a.style.cssText || void 0
			},
			set: function (a, b) {
				return a.style.cssText = b + ""
			}
		});
		var Bb = /^(?:input|select|textarea|button|object)$/i,
			Cb = /^(?:a|area)$/i;
		ea.fn.extend({
			prop: function (a, b) {
				return Da(this, ea.prop, a, b, arguments.length > 1)
			},
			removeProp: function (a) {
				return a = ea.propFix[a] || a, this.each(function () {
					try {
						this[a] = void 0, delete this[a]
					} catch (a) {}
				})
			}
		}), ea.extend({
			propFix: {
				for: "htmlFor",
				class: "className"
			},
			prop: function (a, b, c) {
				var d, e, f, g = a.nodeType;
				if (a && 3 !== g && 8 !== g && 2 !== g) return f = 1 !== g || !ea.isXMLDoc(a), f && (b = ea.propFix[b] || b, e = ea.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
			},
			propHooks: {
				tabIndex: {
					get: function (a) {
						var b = ea.find.attr(a, "tabindex");
						return b ? parseInt(b, 10) : Bb.test(a.nodeName) || Cb.test(a.nodeName) && a.href ? 0 : -1
					}
				}
			}
		}), ca.hrefNormalized || ea.each(["href", "src"], function (a, b) {
			ea.propHooks[b] = {
				get: function (a) {
					return a.getAttribute(b, 4)
				}
			}
		}), ca.optSelected || (ea.propHooks.selected = {
			get: function (a) {
				var b = a.parentNode;
				return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
			}
		}), ea.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
			ea.propFix[this.toLowerCase()] = this
		}), ca.enctype || (ea.propFix.enctype = "encoding");
		var Db = /[\t\r\n\f]/g;
		ea.fn.extend({
			addClass: function (a) {
				var b, c, d, e, f, g, h = 0,
					i = this.length,
					j = "string" == typeof a && a;
				if (ea.isFunction(a)) return this.each(function (b) {
					ea(this).addClass(a.call(this, b, this.className))
				});
				if (j)
					for (b = (a || "").match(ta) || []; i > h; h++)
						if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Db, " ") : " ")) {
							for (f = 0; e = b[f++];) d.indexOf(" " + e + " ") < 0 && (d += e + " ");
							g = ea.trim(d), c.className !== g && (c.className = g)
						}
				return this
			},
			removeClass: function (a) {
				var b, c, d, e, f, g, h = 0,
					i = this.length,
					j = 0 === arguments.length || "string" == typeof a && a;
				if (ea.isFunction(a)) return this.each(function (b) {
					ea(this).removeClass(a.call(this, b, this.className))
				});
				if (j)
					for (b = (a || "").match(ta) || []; i > h; h++)
						if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(Db, " ") : "")) {
							for (f = 0; e = b[f++];)
								for (; d.indexOf(" " + e + " ") >= 0;) d = d.replace(" " + e + " ", " ");
							g = a ? ea.trim(d) : "", c.className !== g && (c.className = g)
						}
				return this
			},
			toggleClass: function (a, b) {
				var c = typeof a;
				return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(ea.isFunction(a) ? function (c) {
					ea(this).toggleClass(a.call(this, c, this.className, b), b)
				} : function () {
					if ("string" === c)
						for (var b, d = 0, e = ea(this), f = a.match(ta) || []; b = f[d++];) e.hasClass(b) ? e.removeClass(b) : e.addClass(b);
					else(c === xa || "boolean" === c) && (this.className && ea._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : ea._data(this, "__className__") || "")
				})
			},
			hasClass: function (a) {
				for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
					if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(Db, " ").indexOf(b) >= 0) return !0;
				return !1
			}
		}), ea.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
			ea.fn[b] = function (a, c) {
				return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
			}
		}), ea.fn.extend({
			hover: function (a, b) {
				return this.mouseenter(a).mouseleave(b || a)
			},
			bind: function (a, b, c) {
				return this.on(a, null, b, c)
			},
			unbind: function (a, b) {
				return this.off(a, null, b)
			},
			delegate: function (a, b, c, d) {
				return this.on(b, a, c, d)
			},
			undelegate: function (a, b, c) {
				return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
			}
		});
		var Eb = ea.now(),
			Fb = /\?/,
			Gb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
		ea.parseJSON = function (b) {
			if (a.JSON && a.JSON.parse) return a.JSON.parse(b + "");
			var c, d = null,
				e = ea.trim(b + "");
			return e && !ea.trim(e.replace(Gb, function (a, b, e, f) {
				return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
			})) ? Function("return " + e)() : ea.error("Invalid JSON: " + b)
		}, ea.parseXML = function (b) {
			var c, d;
			if (!b || "string" != typeof b) return null;
			try {
				a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
			} catch (a) {
				c = void 0
			}
			return c && c.documentElement && !c.getElementsByTagName("parsererror").length || ea.error("Invalid XML: " + b), c
		};
		var Hb, Ib, Jb = /#.*$/,
			Kb = /([?&])_=[^&]*/,
			Lb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
			Mb = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
			Nb = /^(?:GET|HEAD)$/,
			Ob = /^\/\//,
			Pb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
			Qb = {},
			Rb = {},
			Sb = "*/".concat("*");
		try {
			Ib = location.href
		} catch (a) {
			Ib = oa.createElement("a"), Ib.href = "", Ib = Ib.href
		}
		Hb = Pb.exec(Ib.toLowerCase()) || [], ea.extend({
			active: 0,
			lastModified: {},
			etag: {},
			ajaxSettings: {
				url: Ib,
				type: "GET",
				isLocal: Mb.test(Hb[1]),
				global: !0,
				processData: !0,
				async: !0,
				contentType: "application/x-www-form-urlencoded; charset=UTF-8",
				accepts: {
					"*": Sb,
					text: "text/plain",
					html: "text/html",
					xml: "application/xml, text/xml",
					json: "application/json, text/javascript"
				},
				contents: {
					xml: /xml/,
					html: /html/,
					json: /json/
				},
				responseFields: {
					xml: "responseXML",
					text: "responseText",
					json: "responseJSON"
				},
				converters: {
					"* text": String,
					"text html": !0,
					"text json": ea.parseJSON,
					"text xml": ea.parseXML
				},
				flatOptions: {
					url: !0,
					context: !0
				}
			},
			ajaxSetup: function (a, b) {
				return b ? P(P(a, ea.ajaxSettings), b) : P(ea.ajaxSettings, a)
			},
			ajaxPrefilter: N(Qb),
			ajaxTransport: N(Rb),
			ajax: function (a, b) {
				function c(a, b, c, d) {
					var e, k, r, s, u, w = b;
					2 !== t && (t = 2, h && clearTimeout(h), j = void 0, g = d || "", v.readyState = a > 0 ? 4 : 0, e = a >= 200 && 300 > a || 304 === a, c && (s = Q(l, v, c)), s = R(l, s, v, e), e ? (l.ifModified && (u = v.getResponseHeader("Last-Modified"), u && (ea.lastModified[f] = u), u = v.getResponseHeader("etag"), u && (ea.etag[f] = u)), 204 === a || "HEAD" === l.type ? w = "nocontent" : 304 === a ? w = "notmodified" : (w = s.state, k = s.data, r = s.error, e = !r)) : (r = w, (a || !w) && (w = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || w) + "", e ? o.resolveWith(m, [k, w, v]) : o.rejectWith(m, [v, w, r]), v.statusCode(q), q = void 0, i && n.trigger(e ? "ajaxSuccess" : "ajaxError", [v, l, e ? k : r]), p.fireWith(m, [v, w]), i && (n.trigger("ajaxComplete", [v, l]), --ea.active || ea.event.trigger("ajaxStop")))
				}
				"object" == typeof a && (b = a, a = void 0), b = b || {};
				var d, e, f, g, h, i, j, k, l = ea.ajaxSetup({}, b),
					m = l.context || l,
					n = l.context && (m.nodeType || m.jquery) ? ea(m) : ea.event,
					o = ea.Deferred(),
					p = ea.Callbacks("once memory"),
					q = l.statusCode || {},
					r = {},
					s = {},
					t = 0,
					u = "canceled",
					v = {
						readyState: 0,
						getResponseHeader: function (a) {
							var b;
							if (2 === t) {
								if (!k)
									for (k = {}; b = Lb.exec(g);) k[b[1].toLowerCase()] = b[2];
								b = k[a.toLowerCase()]
							}
							return null == b ? null : b
						},
						getAllResponseHeaders: function () {
							return 2 === t ? g : null
						},
						setRequestHeader: function (a, b) {
							var c = a.toLowerCase();
							return t || (a = s[c] = s[c] || a, r[a] = b), this
						},
						overrideMimeType: function (a) {
							return t || (l.mimeType = a), this
						},
						statusCode: function (a) {
							var b;
							if (a)
								if (2 > t)
									for (b in a) q[b] = [q[b], a[b]];
								else v.always(a[v.status]);
							return this
						},
						abort: function (a) {
							var b = a || u;
							return j && j.abort(b), c(0, b), this
						}
					};
				if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, l.url = ((a || l.url || Ib) + "").replace(Jb, "").replace(Ob, Hb[1] + "//"), l.type = b.method || b.type || l.method || l.type, l.dataTypes = ea.trim(l.dataType || "*").toLowerCase().match(ta) || [""], null == l.crossDomain && (d = Pb.exec(l.url.toLowerCase()), l.crossDomain = !(!d || d[1] === Hb[1] && d[2] === Hb[2] && (d[3] || ("http:" === d[1] ? "80" : "443")) === (Hb[3] || ("http:" === Hb[1] ? "80" : "443")))), l.data && l.processData && "string" != typeof l.data && (l.data = ea.param(l.data, l.traditional)), O(Qb, l, b, v), 2 === t) return v;
				i = ea.event && l.global, i && 0 === ea.active++ && ea.event.trigger("ajaxStart"), l.type = l.type.toUpperCase(), l.hasContent = !Nb.test(l.type), f = l.url, l.hasContent || (l.data && (f = l.url += (Fb.test(f) ? "&" : "?") + l.data, delete l.data), l.cache === !1 && (l.url = Kb.test(f) ? f.replace(Kb, "$1_=" + Eb++) : f + (Fb.test(f) ? "&" : "?") + "_=" + Eb++)), l.ifModified && (ea.lastModified[f] && v.setRequestHeader("If-Modified-Since", ea.lastModified[f]), ea.etag[f] && v.setRequestHeader("If-None-Match", ea.etag[f])), (l.data && l.hasContent && l.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", l.contentType), v.setRequestHeader("Accept", l.dataTypes[0] && l.accepts[l.dataTypes[0]] ? l.accepts[l.dataTypes[0]] + ("*" !== l.dataTypes[0] ? ", " + Sb + "; q=0.01" : "") : l.accepts["*"]);
				for (e in l.headers) v.setRequestHeader(e, l.headers[e]);
				if (l.beforeSend && (l.beforeSend.call(m, v, l) === !1 || 2 === t)) return v.abort();
				u = "abort";
				for (e in {
						success: 1,
						error: 1,
						complete: 1
					}) v[e](l[e]);
				if (j = O(Rb, l, b, v)) {
					v.readyState = 1, i && n.trigger("ajaxSend", [v, l]), l.async && l.timeout > 0 && (h = setTimeout(function () {
						v.abort("timeout")
					}, l.timeout));
					try {
						t = 1, j.send(r, c)
					} catch (a) {
						if (!(2 > t)) throw a;
						c(-1, a)
					}
				} else c(-1, "No Transport");
				return v
			},
			getJSON: function (a, b, c) {
				return ea.get(a, b, c, "json")
			},
			getScript: function (a, b) {
				return ea.get(a, void 0, b, "script")
			}
		}), ea.each(["get", "post"], function (a, b) {
			ea[b] = function (a, c, d, e) {
				return ea.isFunction(c) && (e = e || d, d = c, c = void 0), ea.ajax({
					url: a,
					type: b,
					dataType: e,
					data: c,
					success: d
				})
			}
		}), ea._evalUrl = function (a) {
			return ea.ajax({
				url: a,
				type: "GET",
				dataType: "script",
				async: !1,
				global: !1,
				throws: !0
			})
		}, ea.fn.extend({
			wrapAll: function (a) {
				if (ea.isFunction(a)) return this.each(function (b) {
					ea(this).wrapAll(a.call(this, b))
				});
				if (this[0]) {
					var b = ea(a, this[0].ownerDocument).eq(0).clone(!0);
					this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
						for (var a = this; a.firstChild && 1 === a.firstChild.nodeType;) a = a.firstChild;
						return a
					}).append(this)
				}
				return this
			},
			wrapInner: function (a) {
				return this.each(ea.isFunction(a) ? function (b) {
					ea(this).wrapInner(a.call(this, b))
				} : function () {
					var b = ea(this),
						c = b.contents();
					c.length ? c.wrapAll(a) : b.append(a)
				})
			},
			wrap: function (a) {
				var b = ea.isFunction(a);
				return this.each(function (c) {
					ea(this).wrapAll(b ? a.call(this, c) : a)
				})
			},
			unwrap: function () {
				return this.parent().each(function () {
					ea.nodeName(this, "body") || ea(this).replaceWith(this.childNodes)
				}).end()
			}
		}), ea.expr.filters.hidden = function (a) {
			return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !ca.reliableHiddenOffsets() && "none" === (a.style && a.style.display || ea.css(a, "display"))
		}, ea.expr.filters.visible = function (a) {
			return !ea.expr.filters.hidden(a)
		};
		var Tb = /%20/g,
			Ub = /\[\]$/,
			Vb = /\r?\n/g,
			Wb = /^(?:submit|button|image|reset|file)$/i,
			Xb = /^(?:input|select|textarea|keygen)/i;
		ea.param = function (a, b) {
			var c, d = [],
				e = function (a, b) {
					b = ea.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
				};
			if (void 0 === b && (b = ea.ajaxSettings && ea.ajaxSettings.traditional), ea.isArray(a) || a.jquery && !ea.isPlainObject(a)) ea.each(a, function () {
				e(this.name, this.value)
			});
			else
				for (c in a) S(c, a[c], b, e);
			return d.join("&").replace(Tb, "+")
		}, ea.fn.extend({
			serialize: function () {
				return ea.param(this.serializeArray())
			},
			serializeArray: function () {
				return this.map(function () {
					var a = ea.prop(this, "elements");
					return a ? ea.makeArray(a) : this
				}).filter(function () {
					var a = this.type;
					return this.name && !ea(this).is(":disabled") && Xb.test(this.nodeName) && !Wb.test(a) && (this.checked || !Ea.test(a))
				}).map(function (a, b) {
					var c = ea(this).val();
					return null == c ? null : ea.isArray(c) ? ea.map(c, function (a) {
						return {
							name: b.name,
							value: a.replace(Vb, "\r\n")
						}
					}) : {
						name: b.name,
						value: c.replace(Vb, "\r\n")
					}
				}).get()
			}
		}), ea.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () {
			return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && T() || U()
		} : T;
		var Yb = 0,
			Zb = {},
			$b = ea.ajaxSettings.xhr();
		a.attachEvent && a.attachEvent("onunload", function () {
			for (var a in Zb) Zb[a](void 0, !0)
		}), ca.cors = !!$b && "withCredentials" in $b, $b = ca.ajax = !!$b, $b && ea.ajaxTransport(function (a) {
			if (!a.crossDomain || ca.cors) {
				var b;
				return {
					send: function (c, d) {
						var e, f = a.xhr(),
							g = ++Yb;
						if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)
							for (e in a.xhrFields) f[e] = a.xhrFields[e];
						a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
						for (e in c) void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
						f.send(a.hasContent && a.data || null), b = function (c, e) {
							var h, i, j;
							if (b && (e || 4 === f.readyState))
								if (delete Zb[g], b = void 0, f.onreadystatechange = ea.noop, e) 4 !== f.readyState && f.abort();
								else {
									j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
									try {
										i = f.statusText
									} catch (a) {
										i = ""
									}
									h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
								}
							j && d(h, i, j, f.getAllResponseHeaders())
						}, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Zb[g] = b : b()
					},
					abort: function () {
						b && b(void 0, !0)
					}
				}
			}
		}), ea.ajaxSetup({
			accepts: {
				script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
			},
			contents: {
				script: /(?:java|ecma)script/
			},
			converters: {
				"text script": function (a) {
					return ea.globalEval(a), a
				}
			}
		}), ea.ajaxPrefilter("script", function (a) {
			void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
		}), ea.ajaxTransport("script", function (a) {
			if (a.crossDomain) {
				var b, c = oa.head || ea("head")[0] || oa.documentElement;
				return {
					send: function (d, e) {
						b = oa.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) {
							(c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
						}, c.insertBefore(b, c.firstChild)
					},
					abort: function () {
						b && b.onload(void 0, !0)
					}
				}
			}
		});
		var _b = [],
			ac = /(=)\?(?=&|$)|\?\?/;
		ea.ajaxSetup({
			jsonp: "callback",
			jsonpCallback: function () {
				var a = _b.pop() || ea.expando + "_" + Eb++;
				return this[a] = !0, a
			}
		}), ea.ajaxPrefilter("json jsonp", function (b, c, d) {
			var e, f, g, h = b.jsonp !== !1 && (ac.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ac.test(b.data) && "data");
			return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = ea.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(ac, "$1" + e) : b.jsonp !== !1 && (b.url += (Fb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
				return g || ea.error(e + " was not called"), g[0]
			}, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
				g = arguments
			}, d.always(function () {
				a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _b.push(e)), g && ea.isFunction(f) && f(g[0]), g = f = void 0
			}), "script") : void 0
		}), ea.parseHTML = function (a, b, c) {
			if (!a || "string" != typeof a) return null;
			"boolean" == typeof b && (c = b, b = !1), b = b || oa;
			var d = la.exec(a),
				e = !c && [];
			return d ? [b.createElement(d[1])] : (d = ea.buildFragment([a], b, e), e && e.length && ea(e).remove(), ea.merge([], d.childNodes))
		};
		var bc = ea.fn.load;
		ea.fn.load = function (a, b, c) {
			if ("string" != typeof a && bc) return bc.apply(this, arguments);
			var d, e, f, g = this,
				h = a.indexOf(" ");
			return h >= 0 && (d = ea.trim(a.slice(h, a.length)), a = a.slice(0, h)), ea.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && ea.ajax({
				url: a,
				type: f,
				dataType: "html",
				data: b
			}).done(function (a) {
				e = arguments, g.html(d ? ea("<div>").append(ea.parseHTML(a)).find(d) : a)
			}).complete(c && function (a, b) {
				g.each(c, e || [a.responseText, b, a])
			}), this
		}, ea.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
			ea.fn[b] = function (a) {
				return this.on(b, a)
			}
		}), ea.expr.filters.animated = function (a) {
			return ea.grep(ea.timers, function (b) {
				return a === b.elem
			}).length
		};
		var cc = a.document.documentElement;
		ea.offset = {
			setOffset: function (a, b, c) {
				var d, e, f, g, h, i, j, k = ea.css(a, "position"),
					l = ea(a),
					m = {};
				"static" === k && (a.style.position = "relative"), h = l.offset(), f = ea.css(a, "top"), i = ea.css(a, "left"), j = ("absolute" === k || "fixed" === k) && ea.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), ea.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (m.top = b.top - h.top + g), null != b.left && (m.left = b.left - h.left + e), "using" in b ? b.using.call(a, m) : l.css(m)
			}
		}, ea.fn.extend({
			offset: function (a) {
				if (arguments.length) return void 0 === a ? this : this.each(function (b) {
					ea.offset.setOffset(this, a, b)
				});
				var b, c, d = {
						top: 0,
						left: 0
					},
					e = this[0],
					f = e && e.ownerDocument;
				return f ? (b = f.documentElement, ea.contains(b, e) ? (typeof e.getBoundingClientRect !== xa && (d = e.getBoundingClientRect()), c = V(f), {
					top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
					left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
				}) : d) : void 0
			},
			position: function () {
				if (this[0]) {
					var a, b, c = {
							top: 0,
							left: 0
						},
						d = this[0];
					return "fixed" === ea.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), ea.nodeName(a[0], "html") || (c = a.offset()), c.top += ea.css(a[0], "borderTopWidth", !0), c.left += ea.css(a[0], "borderLeftWidth", !0)), {
						top: b.top - c.top - ea.css(d, "marginTop", !0),
						left: b.left - c.left - ea.css(d, "marginLeft", !0)
					}
				}
			},
			offsetParent: function () {
				return this.map(function () {
					for (var a = this.offsetParent || cc; a && !ea.nodeName(a, "html") && "static" === ea.css(a, "position");) a = a.offsetParent;
					return a || cc
				})
			}
		}), ea.each({
			scrollLeft: "pageXOffset",
			scrollTop: "pageYOffset"
		}, function (a, b) {
			var c = /Y/.test(b);
			ea.fn[a] = function (d) {
				return Da(this, function (a, d, e) {
					var f = V(a);
					return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? ea(f).scrollLeft() : e, c ? e : ea(f).scrollTop()) : a[d] = e)
				}, a, d, arguments.length, null)
			}
		}), ea.each(["top", "left"], function (a, b) {
			ea.cssHooks[b] = A(ca.pixelPosition, function (a, c) {
				return c ? (c = bb(a, b), db.test(c) ? ea(a).position()[b] + "px" : c) : void 0
			})
		}), ea.each({
			Height: "height",
			Width: "width"
		}, function (a, b) {
			ea.each({
				padding: "inner" + a,
				content: b,
				"": "outer" + a
			}, function (c, d) {
				ea.fn[d] = function (d, e) {
					var f = arguments.length && (c || "boolean" != typeof d),
						g = c || (d === !0 || e === !0 ? "margin" : "border");
					return Da(this, function (b, c, d) {
						var e;
						return ea.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? ea.css(b, c, g) : ea.style(b, c, d, g)
					}, b, f ? d : void 0, f, null)
				}
			})
		}), ea.fn.size = function () {
			return this.length
		}, ea.fn.andSelf = ea.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
			return ea
		});
		var dc = a.jQuery,
			ec = a.$;
		return ea.noConflict = function (b) {
			return a.$ === ea && (a.$ = ec), b && a.jQuery === ea && (a.jQuery = dc), ea
		}, typeof b === xa && (a.jQuery = a.$ = ea), ea
	}), "undefined" == typeof jQuery) throw new Error("Bootstrap's JavaScript requires jQuery"); + function (a) {
	"use strict";
	var b = a.fn.jquery.split(" ")[0].split(".");
	if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 3) throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
}(jQuery), + function (a) {
	"use strict";

	function b(b) {
		return this.each(function () {
			var c = a(this),
				e = c.data("bs.alert");
			e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
		})
	}
	var c = '[data-dismiss="alert"]',
		d = function (b) {
			a(b).on("click", c, this.close)
		};
	d.VERSION = "3.3.7", d.TRANSITION_DURATION = 150, d.prototype.close = function (b) {
		function c() {
			g.detach().trigger("closed.bs.alert").remove()
		}
		var e = a(this),
			f = e.attr("data-target");
		f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
		var g = a("#" === f ? [] : f);
		b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
	};
	var e = a.fn.alert;
	a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function () {
		return a.fn.alert = e, this
	}, a(document).on("click.bs.alert.data-api", c, d.prototype.close);
}(jQuery), + function (a) {
	"use strict";

	function b(b) {
		return this.each(function () {
			var d = a(this),
				e = d.data("bs.button"),
				f = "object" == typeof b && b;
			e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
		})
	}
	var c = function (b, d) {
		this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
	};
	c.VERSION = "3.3.7", c.DEFAULTS = {
		loadingText: "loading..."
	}, c.prototype.setState = function (b) {
		var c = "disabled",
			d = this.$element,
			e = d.is("input") ? "val" : "html",
			f = d.data();
		b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function () {
			d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c).prop(c, !0)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c).prop(c, !1))
		}, this), 0)
	}, c.prototype.toggle = function () {
		var a = !0,
			b = this.$element.closest('[data-toggle="buttons"]');
		if (b.length) {
			var c = this.$element.find("input");
			"radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change")
		} else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
	};
	var d = a.fn.button;
	a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function () {
		return a.fn.button = d, this
	}, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (c) {
		var d = a(c.target).closest(".btn");
		b.call(d, "toggle"), a(c.target).is('input[type="radio"], input[type="checkbox"]') || (c.preventDefault(), d.is("input,button") ? d.trigger("focus") : d.find("input:visible,button:visible").first().trigger("focus"))
	}).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (b) {
		a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
	})
}(jQuery), + function (a) {
	"use strict";

	function b(b) {
		var c = b.attr("data-target");
		c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
		var d = c && a(c);
		return d && d.length ? d : b.parent()
	}

	function c(c) {
		c && 3 === c.which || (a(e).remove(), a(f).each(function () {
			var d = a(this),
				e = b(d),
				f = {
					relatedTarget: this
				};
			e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))))
		}))
	}

	function d(b) {
		return this.each(function () {
			var c = a(this),
				d = c.data("bs.dropdown");
			d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
		})
	}
	var e = ".dropdown-backdrop",
		f = '[data-toggle="dropdown"]',
		g = function (b) {
			a(b).on("click.bs.dropdown", this.toggle)
		};
	g.VERSION = "3.3.7", g.prototype.toggle = function (d) {
		var e = a(this);
		if (!e.is(".disabled, :disabled")) {
			var f = b(e),
				g = f.hasClass("open");
			if (c(), !g) {
				"ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
				var h = {
					relatedTarget: this
				};
				if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented()) return;
				e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h))
			}
			return !1
		}
	}, g.prototype.keydown = function (c) {
		if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
			var d = a(this);
			if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
				var e = b(d),
					g = e.hasClass("open");
				if (!g && 27 != c.which || g && 27 == c.which) return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");
				var h = " li:not(.disabled):visible a",
					i = e.find(".dropdown-menu" + h);
				if (i.length) {
					var j = i.index(c.target);
					38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
				}
			}
		}
	};
	var h = a.fn.dropdown;
	a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function () {
		return a.fn.dropdown = h, this
	}, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
		a.stopPropagation()
	}).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
}(jQuery), + function (a) {
	"use strict";

	function b(b, d) {
		return this.each(function () {
			var e = a(this),
				f = e.data("bs.modal"),
				g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
			f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
		})
	}
	var c = function (b, c) {
		this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
			this.$element.trigger("loaded.bs.modal")
		}, this))
	};
	c.VERSION = "3.3.7", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
		backdrop: !0,
		keyboard: !0,
		show: !0
	}, c.prototype.toggle = function (a) {
		return this.isShown ? this.hide() : this.show(a)
	}, c.prototype.show = function (b) {
		var d = this,
			e = a.Event("show.bs.modal", {
				relatedTarget: b
			});
		this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
			d.$element.one("mouseup.dismiss.bs.modal", function (b) {
				a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
			})
		}), this.backdrop(function () {
			var e = a.support.transition && d.$element.hasClass("fade");
			d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
			var f = a.Event("shown.bs.modal", {
				relatedTarget: b
			});
			e ? d.$dialog.one("bsTransitionEnd", function () {
				d.$element.trigger("focus").trigger(f)
			}).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
		}))
	}, c.prototype.hide = function (b) {
		b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
	}, c.prototype.enforceFocus = function () {
		a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
			document === a.target || this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
		}, this))
	}, c.prototype.escape = function () {
		this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function (a) {
			27 == a.which && this.hide()
		}, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
	}, c.prototype.resize = function () {
		this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
	}, c.prototype.hideModal = function () {
		var a = this;
		this.$element.hide(), this.backdrop(function () {
			a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
		})
	}, c.prototype.removeBackdrop = function () {
		this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
	}, c.prototype.backdrop = function (b) {
		var d = this,
			e = this.$element.hasClass("fade") ? "fade" : "";
		if (this.isShown && this.options.backdrop) {
			var f = a.support.transition && e;
			if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function (a) {
					return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
				}, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b) return;
			f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
		} else if (!this.isShown && this.$backdrop) {
			this.$backdrop.removeClass("in");
			var g = function () {
				d.removeBackdrop(), b && b()
			};
			a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
		} else b && b()
	}, c.prototype.handleUpdate = function () {
		this.adjustDialog()
	}, c.prototype.adjustDialog = function () {
		var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
		this.$element.css({
			paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
			paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
		})
	}, c.prototype.resetAdjustments = function () {
		this.$element.css({
			paddingLeft: "",
			paddingRight: ""
		})
	}, c.prototype.checkScrollbar = function () {
		var a = window.innerWidth;
		if (!a) {
			var b = document.documentElement.getBoundingClientRect();
			a = b.right - Math.abs(b.left)
		}
		this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar()
	}, c.prototype.setScrollbar = function () {
		var a = parseInt(this.$body.css("padding-right") || 0, 10);
		this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
	}, c.prototype.resetScrollbar = function () {
		this.$body.css("padding-right", this.originalBodyPad)
	}, c.prototype.measureScrollbar = function () {
		var a = document.createElement("div");
		a.className = "modal-scrollbar-measure", this.$body.append(a);
		var b = a.offsetWidth - a.clientWidth;
		return this.$body[0].removeChild(a), b
	};
	var d = a.fn.modal;
	a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function () {
		return a.fn.modal = d, this
	}, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (c) {
		var d = a(this),
			e = d.attr("href"),
			f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")),
			g = f.data("bs.modal") ? "toggle" : a.extend({
				remote: !/#/.test(e) && e
			}, f.data(), d.data());
		d.is("a") && c.preventDefault(), f.one("show.bs.modal", function (a) {
			a.isDefaultPrevented() || f.one("hidden.bs.modal", function () {
				d.is(":visible") && d.trigger("focus")
			})
		}), b.call(f, g, this)
	})
}(jQuery), + function (a) {
	"use strict";

	function b(b) {
		return this.each(function () {
			var d = a(this),
				e = d.data("bs.tooltip"),
				f = "object" == typeof b && b;
			!e && /destroy|hide/.test(b) || (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
		})
	}
	var c = function (a, b) {
		this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b)
	};
	c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
		animation: !0,
		placement: "top",
		selector: !1,
		template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
		trigger: "hover focus",
		title: "",
		delay: 0,
		html: !1,
		container: !1,
		viewport: {
			selector: "body",
			padding: 0
		}
	}, c.prototype.init = function (b, c, d) {
		if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
				click: !1,
				hover: !1,
				focus: !1
			}, this.$element[0] instanceof document.constructor && !this.options.selector) throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
		for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
			var g = e[f];
			if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
			else if ("manual" != g) {
				var h = "hover" == g ? "mouseenter" : "focusin",
					i = "hover" == g ? "mouseleave" : "focusout";
				this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
			}
		}
		this.options.selector ? this._options = a.extend({}, this.options, {
			trigger: "manual",
			selector: ""
		}) : this.fixTitle()
	}, c.prototype.getDefaults = function () {
		return c.DEFAULTS
	}, c.prototype.getOptions = function (b) {
		return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
			show: b.delay,
			hide: b.delay
		}), b
	}, c.prototype.getDelegateOptions = function () {
		var b = {},
			c = this.getDefaults();
		return this._options && a.each(this._options, function (a, d) {
			c[a] != d && (b[a] = d)
		}), b
	}, c.prototype.enter = function (b) {
		var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
		return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void(c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function () {
			"in" == c.hoverState && c.show()
		}, c.options.delay.show)) : c.show())
	}, c.prototype.isInStateTrue = function () {
		for (var a in this.inState)
			if (this.inState[a]) return !0;
		return !1
	}, c.prototype.leave = function (b) {
		var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
		if (c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), !c.isInStateTrue()) return clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function () {
			"out" == c.hoverState && c.hide()
		}, c.options.delay.hide)) : c.hide()
	}, c.prototype.show = function () {
		var b = a.Event("show.bs." + this.type);
		if (this.hasContent() && this.enabled) {
			this.$element.trigger(b);
			var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
			if (b.isDefaultPrevented() || !d) return;
			var e = this,
				f = this.tip(),
				g = this.getUID(this.type);
			this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
			var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement,
				i = /\s?auto?\s?/i,
				j = i.test(h);
			j && (h = h.replace(i, "") || "top"), f.detach().css({
				top: 0,
				left: 0,
				display: "block"
			}).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
			var k = this.getPosition(),
				l = f[0].offsetWidth,
				m = f[0].offsetHeight;
			if (j) {
				var n = h,
					o = this.getPosition(this.$viewport);
				h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h)
			}
			var p = this.getCalculatedOffset(h, k, l, m);
			this.applyPlacement(p, h);
			var q = function () {
				var a = e.hoverState;
				e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
			};
			a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q()
		}
	}, c.prototype.applyPlacement = function (b, c) {
		var d = this.tip(),
			e = d[0].offsetWidth,
			f = d[0].offsetHeight,
			g = parseInt(d.css("margin-top"), 10),
			h = parseInt(d.css("margin-left"), 10);
		isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({
			using: function (a) {
				d.css({
					top: Math.round(a.top),
					left: Math.round(a.left)
				})
			}
		}, b), 0), d.addClass("in");
		var i = d[0].offsetWidth,
			j = d[0].offsetHeight;
		"top" == c && j != f && (b.top = b.top + f - j);
		var k = this.getViewportAdjustedDelta(c, b, i, j);
		k.left ? b.left += k.left : b.top += k.top;
		var l = /top|bottom/.test(c),
			m = l ? 2 * k.left - e + i : 2 * k.top - f + j,
			n = l ? "offsetWidth" : "offsetHeight";
		d.offset(b), this.replaceArrow(m, d[0][n], l)
	}, c.prototype.replaceArrow = function (a, b, c) {
		this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
	}, c.prototype.setContent = function () {
		var a = this.tip(),
			b = this.getTitle();
		a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
	}, c.prototype.hide = function (b) {
		function d() {
			"in" != e.hoverState && f.detach(), e.$element && e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
		}
		var e = this,
			f = a(this.$tip),
			g = a.Event("hide.bs." + this.type);
		if (this.$element.trigger(g), !g.isDefaultPrevented()) return f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this
	}, c.prototype.fixTitle = function () {
		var a = this.$element;
		(a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
	}, c.prototype.hasContent = function () {
		return this.getTitle()
	}, c.prototype.getPosition = function (b) {
		b = b || this.$element;
		var c = b[0],
			d = "BODY" == c.tagName,
			e = c.getBoundingClientRect();
		null == e.width && (e = a.extend({}, e, {
			width: e.right - e.left,
			height: e.bottom - e.top
		}));
		var f = window.SVGElement && c instanceof window.SVGElement,
			g = d ? {
				top: 0,
				left: 0
			} : f ? null : b.offset(),
			h = {
				scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
			},
			i = d ? {
				width: a(window).width(),
				height: a(window).height()
			} : null;
		return a.extend({}, e, h, i, g)
	}, c.prototype.getCalculatedOffset = function (a, b, c, d) {
		return "bottom" == a ? {
			top: b.top + b.height,
			left: b.left + b.width / 2 - c / 2
		} : "top" == a ? {
			top: b.top - d,
			left: b.left + b.width / 2 - c / 2
		} : "left" == a ? {
			top: b.top + b.height / 2 - d / 2,
			left: b.left - c
		} : {
			top: b.top + b.height / 2 - d / 2,
			left: b.left + b.width
		}
	}, c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
		var e = {
			top: 0,
			left: 0
		};
		if (!this.$viewport) return e;
		var f = this.options.viewport && this.options.viewport.padding || 0,
			g = this.getPosition(this.$viewport);
		if (/right|left/.test(a)) {
			var h = b.top - f - g.scroll,
				i = b.top + f - g.scroll + d;
			h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
		} else {
			var j = b.left - f,
				k = b.left + f + c;
			j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k)
		}
		return e
	}, c.prototype.getTitle = function () {
		var a, b = this.$element,
			c = this.options;
		return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
	}, c.prototype.getUID = function (a) {
		do a += ~~(1e6 * Math.random()); while (document.getElementById(a));
		return a
	}, c.prototype.tip = function () {
		if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length)) throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
		return this.$tip
	}, c.prototype.arrow = function () {
		return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
	}, c.prototype.enable = function () {
		this.enabled = !0
	}, c.prototype.disable = function () {
		this.enabled = !1
	}, c.prototype.toggleEnabled = function () {
		this.enabled = !this.enabled
	}, c.prototype.toggle = function (b) {
		var c = this;
		b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
	}, c.prototype.destroy = function () {
		var a = this;
		clearTimeout(this.timeout), this.hide(function () {
			a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null, a.$element = null
		})
	};
	var d = a.fn.tooltip;
	a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function () {
		return a.fn.tooltip = d, this
	}
}(jQuery), + function (a) {
	"use strict";

	function b(b) {
		return this.each(function () {
			var d = a(this),
				e = d.data("bs.popover"),
				f = "object" == typeof b && b;
			!e && /destroy|hide/.test(b) || (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
		})
	}
	var c = function (a, b) {
		this.init("popover", a, b)
	};
	if (!a.fn.tooltip) throw new Error("Popover requires tooltip.js");
	c.VERSION = "3.3.7", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
		placement: "right",
		trigger: "click",
		content: "",
		template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
	}), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function () {
		return c.DEFAULTS
	}, c.prototype.setContent = function () {
		var a = this.tip(),
			b = this.getTitle(),
			c = this.getContent();
		a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
	}, c.prototype.hasContent = function () {
		return this.getTitle() || this.getContent()
	}, c.prototype.getContent = function () {
		var a = this.$element,
			b = this.options;
		return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
	}, c.prototype.arrow = function () {
		return this.$arrow = this.$arrow || this.tip().find(".arrow")
	};
	var d = a.fn.popover;
	a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function () {
		return a.fn.popover = d, this
	}
}(jQuery), + function (a) {
	"use strict";

	function b(b) {
		return this.each(function () {
			var d = a(this),
				e = d.data("bs.tab");
			e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
		})
	}
	var c = function (b) {
		this.element = a(b)
	};
	c.VERSION = "3.3.7", c.TRANSITION_DURATION = 150, c.prototype.show = function () {
		var b = this.element,
			c = b.closest("ul:not(.dropdown-menu)"),
			d = b.data("target");
		if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
			var e = c.find(".active:last a"),
				f = a.Event("hide.bs.tab", {
					relatedTarget: b[0]
				}),
				g = a.Event("show.bs.tab", {
					relatedTarget: e[0]
				});
			if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
				var h = a(d);
				this.activate(b.closest("li"), c), this.activate(h, h.parent(), function () {
					e.trigger({
						type: "hidden.bs.tab",
						relatedTarget: b[0]
					}), b.trigger({
						type: "shown.bs.tab",
						relatedTarget: e[0]
					})
				})
			}
		}
	}, c.prototype.activate = function (b, d, e) {
		function f() {
			g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e()
		}
		var g = d.find("> .active"),
			h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
		g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
	};
	var d = a.fn.tab;
	a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function () {
		return a.fn.tab = d, this
	};
	var e = function (c) {
		c.preventDefault(), b.call(a(this), "show")
	};
	a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery), + function (a) {
	"use strict";

	function b(b) {
		var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
		return a(d)
	}

	function c(b) {
		return this.each(function () {
			var c = a(this),
				e = c.data("bs.collapse"),
				f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
			!e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
		})
	}
	var d = function (b, c) {
		this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
	};
	d.VERSION = "3.3.7", d.TRANSITION_DURATION = 350, d.DEFAULTS = {
		toggle: !0
	}, d.prototype.dimension = function () {
		var a = this.$element.hasClass("width");
		return a ? "width" : "height"
	}, d.prototype.show = function () {
		if (!this.transitioning && !this.$element.hasClass("in")) {
			var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
			if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
				var f = a.Event("show.bs.collapse");
				if (this.$element.trigger(f), !f.isDefaultPrevented()) {
					e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
					var g = this.dimension();
					this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
					var h = function () {
						this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
					};
					if (!a.support.transition) return h.call(this);
					var i = a.camelCase(["scroll", g].join("-"));
					this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
				}
			}
		}
	}, d.prototype.hide = function () {
		if (!this.transitioning && this.$element.hasClass("in")) {
			var b = a.Event("hide.bs.collapse");
			if (this.$element.trigger(b), !b.isDefaultPrevented()) {
				var c = this.dimension();
				this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
				var e = function () {
					this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
				};
				return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
			}
		}
	}, d.prototype.toggle = function () {
		this[this.$element.hasClass("in") ? "hide" : "show"]()
	}, d.prototype.getParent = function () {
		return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function (c, d) {
			var e = a(d);
			this.addAriaAndCollapsedClass(b(e), e)
		}, this)).end()
	}, d.prototype.addAriaAndCollapsedClass = function (a, b) {
		var c = a.hasClass("in");
		a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
	};
	var e = a.fn.collapse;
	a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function () {
		return a.fn.collapse = e, this
	}, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (d) {
		var e = a(this);
		e.attr("data-target") || d.preventDefault();
		var f = b(e),
			g = f.data("bs.collapse"),
			h = g ? "toggle" : e.data();
		c.call(f, h)
	})
}(jQuery), + function (a) {
	"use strict";

	function b(c, d) {
		this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process()
	}

	function c(c) {
		return this.each(function () {
			var d = a(this),
				e = d.data("bs.scrollspy"),
				f = "object" == typeof c && c;
			e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
		})
	}
	b.VERSION = "3.3.7", b.DEFAULTS = {
		offset: 10
	}, b.prototype.getScrollHeight = function () {
		return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
	}, b.prototype.refresh = function () {
		var b = this,
			c = "offset",
			d = 0;
		this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
			var b = a(this),
				e = b.data("target") || b.attr("href"),
				f = /^#./.test(e) && a(e);
			return f && f.length && f.is(":visible") && [
				[f[c]().top + d, e]
			] || null
		}).sort(function (a, b) {
			return a[0] - b[0]
		}).each(function () {
			b.offsets.push(this[0]), b.targets.push(this[1])
		})
	}, b.prototype.process = function () {
		var a, b = this.$scrollElement.scrollTop() + this.options.offset,
			c = this.getScrollHeight(),
			d = this.options.offset + c - this.$scrollElement.height(),
			e = this.offsets,
			f = this.targets,
			g = this.activeTarget;
		if (this.scrollHeight != c && this.refresh(), b >= d) return g != (a = f[f.length - 1]) && this.activate(a);
		if (g && b < e[0]) return this.activeTarget = null, this.clear();
		for (a = e.length; a--;) g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
	}, b.prototype.activate = function (b) {
		this.activeTarget = b, this.clear();
		var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]',
			d = a(c).parents("li").addClass("active");
		d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
	}, b.prototype.clear = function () {
		a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
	};
	var d = a.fn.scrollspy;
	a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
		return a.fn.scrollspy = d, this
	}, a(window).on("load.bs.scrollspy.data-api", function () {
		a('[data-spy="scroll"]').each(function () {
			var b = a(this);
			c.call(b, b.data())
		})
	})
}(jQuery), + function (a) {
	"use strict";

	function b() {
		var a = document.createElement("bootstrap"),
			b = {
				WebkitTransition: "webkitTransitionEnd",
				MozTransition: "transitionend",
				OTransition: "oTransitionEnd otransitionend",
				transition: "transitionend"
			};
		for (var c in b)
			if (void 0 !== a.style[c]) return {
				end: b[c]
			};
		return !1
	}
	a.fn.emulateTransitionEnd = function (b) {
		var c = !1,
			d = this;
		a(this).one("bsTransitionEnd", function () {
			c = !0
		});
		var e = function () {
			c || a(d).trigger(a.support.transition.end)
		};
		return setTimeout(e, b), this
	}, a(function () {
		a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
			bindType: a.support.transition.end,
			delegateType: a.support.transition.end,
			handle: function (b) {
				if (a(b.target).is(this)) return b.handleObj.handler.apply(this, arguments)
			}
		})
	})
}(jQuery),
function (a) {
	if ("function" == typeof define && define.amd) define(a);
	else if ("object" == typeof exports) module.exports = a();
	else {
		var b = window.Cookies,
			c = window.Cookies = a();
		c.noConflict = function () {
			return window.Cookies = b, c
		}
	}
}(function () {
	function a() {
		for (var a = 0, b = {}; a < arguments.length; a++) {
			var c = arguments[a];
			for (var d in c) b[d] = c[d]
		}
		return b
	}

	function b(c) {
		function d(b, e, f) {
			var g;
			if ("undefined" != typeof document) {
				if (arguments.length > 1) {
					if (f = a({
							path: "/"
						}, d.defaults, f), "number" == typeof f.expires) {
						var h = new Date;
						h.setMilliseconds(h.getMilliseconds() + 864e5 * f.expires), f.expires = h
					}
					try {
						g = JSON.stringify(e), /^[\{\[]/.test(g) && (e = g)
					} catch (a) {}
					return e = c.write ? c.write(e, b) : encodeURIComponent(String(e)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), b = encodeURIComponent(String(b)), b = b.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), b = b.replace(/[\(\)]/g, escape), document.cookie = [b, "=", e, f.expires && "; expires=" + f.expires.toUTCString(), f.path && "; path=" + f.path, f.domain && "; domain=" + f.domain, f.secure ? "; secure" : ""].join("")
				}
				b || (g = {});
				for (var i = document.cookie ? document.cookie.split("; ") : [], j = /(%[0-9A-Z]{2})+/g, k = 0; k < i.length; k++) {
					var l = i[k].split("="),
						m = l[0].replace(j, decodeURIComponent),
						n = l.slice(1).join("=");
					'"' === n.charAt(0) && (n = n.slice(1, -1));
					try {
						if (n = c.read ? c.read(n, m) : c(n, m) || n.replace(j, decodeURIComponent), this.json) try {
							n = JSON.parse(n)
						} catch (a) {}
						if (b === m) {
							g = n;
							break
						}
						b || (g[m] = n)
					} catch (a) {}
				}
				return g
			}
		}
		return d.set = d, d.get = function (a) {
			return d(a)
		}, d.getJSON = function () {
			return d.apply({
				json: !0
			}, [].slice.call(arguments))
		}, d.defaults = {}, d.remove = function (b, c) {
			d(b, "", a(c, {
				expires: -1
			}))
		}, d.withConverter = b, d
	}
	return b(function () {})
}),
function (a) {
	"function" == typeof define && define.amd ? define(["jquery"], a) : "object" == typeof module && module.exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function (a) {
	a.extend(a.fn, {
		validate: function (b) {
			if (!this.length) return void(b && b.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
			var c = a.data(this[0], "validator");
			return c ? c : (this.attr("novalidate", "novalidate"), c = new a.validator(b, this[0]), a.data(this[0], "validator", c), c.settings.onsubmit && (this.on("click.validate", ":submit", function (b) {
				c.settings.submitHandler && (c.submitButton = b.target), a(this).hasClass("cancel") && (c.cancelSubmit = !0), void 0 !== a(this).attr("formnovalidate") && (c.cancelSubmit = !0)
			}), this.on("submit.validate", function (b) {
				function d() {
					var d, e;
					return !c.settings.submitHandler || (c.submitButton && (d = a("<input type='hidden'/>").attr("name", c.submitButton.name).val(a(c.submitButton).val()).appendTo(c.currentForm)), e = c.settings.submitHandler.call(c, c.currentForm, b), c.submitButton && d.remove(), void 0 !== e && e)
				}
				return c.settings.debug && b.preventDefault(), c.cancelSubmit ? (c.cancelSubmit = !1, d()) : c.form() ? c.pendingRequest ? (c.formSubmitted = !0, !1) : d() : (c.focusInvalid(), !1)
			})), c)
		},
		valid: function () {
			var b, c, d;
			return a(this[0]).is("form") ? b = this.validate().form() : (d = [], b = !0, c = a(this[0].form).validate(), this.each(function () {
				b = c.element(this) && b, b || (d = d.concat(c.errorList))
			}), c.errorList = d), b
		},
		rules: function (b, c) {
			if (this.length) {
				var d, e, f, g, h, i, j = this[0];
				if (b) switch (d = a.data(j.form, "validator").settings, e = d.rules, f = a.validator.staticRules(j), b) {
					case "add":
						a.extend(f, a.validator.normalizeRule(c)), delete f.messages, e[j.name] = f, c.messages && (d.messages[j.name] = a.extend(d.messages[j.name], c.messages));
						break;
					case "remove":
						return c ? (i = {}, a.each(c.split(/\s/), function (b, c) {
							i[c] = f[c], delete f[c], "required" === c && a(j).removeAttr("aria-required")
						}), i) : (delete e[j.name], f)
				}
				return g = a.validator.normalizeRules(a.extend({}, a.validator.classRules(j), a.validator.attributeRules(j), a.validator.dataRules(j), a.validator.staticRules(j)), j), g.required && (h = g.required, delete g.required, g = a.extend({
					required: h
				}, g), a(j).attr("aria-required", "true")), g.remote && (h = g.remote, delete g.remote, g = a.extend(g, {
					remote: h
				})), g
			}
		}
	}), a.extend(a.expr[":"], {
		blank: function (b) {
			return !a.trim("" + a(b).val())
		},
		filled: function (b) {
			var c = a(b).val();
			return null !== c && !!a.trim("" + c)
		},
		unchecked: function (b) {
			return !a(b).prop("checked")
		}
	}), a.validator = function (b, c) {
		this.settings = a.extend(!0, {}, a.validator.defaults, b), this.currentForm = c, this.init()
	}, a.validator.format = function (b, c) {
		return 1 === arguments.length ? function () {
			var c = a.makeArray(arguments);
			return c.unshift(b), a.validator.format.apply(this, c)
		} : void 0 === c ? b : (arguments.length > 2 && c.constructor !== Array && (c = a.makeArray(arguments).slice(1)), c.constructor !== Array && (c = [c]), a.each(c, function (a, c) {
			b = b.replace(new RegExp("\\{" + a + "\\}", "g"), function () {
				return c
			})
		}), b)
	}, a.extend(a.validator, {
		defaults: {
			messages: {},
			groups: {},
			rules: {},
			errorClass: "error",
			pendingClass: "pending",
			validClass: "valid",
			errorElement: "label",
			focusCleanup: !1,
			focusInvalid: !0,
			errorContainer: a([]),
			errorLabelContainer: a([]),
			onsubmit: !0,
			ignore: ":hidden",
			ignoreTitle: !1,
			onfocusin: function (a) {
				this.lastActive = a, this.settings.focusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, a, this.settings.errorClass, this.settings.validClass), this.hideThese(this.errorsFor(a)))
			},
			onfocusout: function (a) {
				this.checkable(a) || !(a.name in this.submitted) && this.optional(a) || this.element(a)
			},
			onkeyup: function (b, c) {
				var d = [16, 17, 18, 20, 35, 36, 37, 38, 39, 40, 45, 144, 225];
				9 === c.which && "" === this.elementValue(b) || a.inArray(c.keyCode, d) !== -1 || (b.name in this.submitted || b.name in this.invalid) && this.element(b)
			},
			onclick: function (a) {
				a.name in this.submitted ? this.element(a) : a.parentNode.name in this.submitted && this.element(a.parentNode)
			},
			highlight: function (b, c, d) {
				"radio" === b.type ? this.findByName(b.name).addClass(c).removeClass(d) : a(b).addClass(c).removeClass(d)
			},
			unhighlight: function (b, c, d) {
				"radio" === b.type ? this.findByName(b.name).removeClass(c).addClass(d) : a(b).removeClass(c).addClass(d)
			}
		},
		setDefaults: function (b) {
			a.extend(a.validator.defaults, b)
		},
		messages: {
			required: "This field is required.",
			remote: "Please fix this field.",
			email: "Please enter a valid email address.",
			url: "Please enter a valid URL.",
			date: "Please enter a valid date.",
			dateISO: "Please enter a valid date ( ISO ).",
			number: "Please enter a valid number.",
			digits: "Please enter only digits.",
			equalTo: "Please enter the same value again.",
			maxlength: a.validator.format("Please enter no more than {0} characters."),
			minlength: a.validator.format("Please enter at least {0} characters."),
			rangelength: a.validator.format("Please enter a value between {0} and {1} characters long."),
			range: a.validator.format("Please enter a value between {0} and {1}."),
			max: a.validator.format("Please enter a value less than or equal to {0}."),
			min: a.validator.format("Please enter a value greater than or equal to {0}."),
			step: a.validator.format("Please enter a multiple of {0}.")
		},
		autoCreateRanges: !1,
		prototype: {
			init: function () {
				function b(b) {
					var c = a.data(this.form, "validator"),
						d = "on" + b.type.replace(/^validate/, ""),
						e = c.settings;
					e[d] && !a(this).is(e.ignore) && e[d].call(c, this, b)
				}
				this.labelContainer = a(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || a(this.currentForm), this.containers = a(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
				var c, d = this.groups = {};
				a.each(this.settings.groups, function (b, c) {
					"string" == typeof c && (c = c.split(/\s/)), a.each(c, function (a, c) {
						d[c] = b
					})
				}), c = this.settings.rules, a.each(c, function (b, d) {
					c[b] = a.validator.normalizeRule(d)
				}), a(this.currentForm).on("focusin.validate focusout.validate keyup.validate", ":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'], [type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'], [type='radio'], [type='checkbox'], [contenteditable]", b).on("click.validate", "select, option, [type='radio'], [type='checkbox']", b), this.settings.invalidHandler && a(this.currentForm).on("invalid-form.validate", this.settings.invalidHandler), a(this.currentForm).find("[required], [data-rule-required], .required").attr("aria-required", "true")
			},
			form: function () {
				return this.checkForm(), a.extend(this.submitted, this.errorMap), this.invalid = a.extend({}, this.errorMap), this.valid() || a(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
			},
			checkForm: function () {
				this.prepareForm();
				for (var a = 0, b = this.currentElements = this.elements(); b[a]; a++) this.check(b[a]);
				return this.valid()
			},
			element: function (b) {
				var c, d, e = this.clean(b),
					f = this.validationTargetFor(e),
					g = this,
					h = !0;
				return void 0 === f ? delete this.invalid[e.name] : (this.prepareElement(f), this.currentElements = a(f), d = this.groups[f.name], d && a.each(this.groups, function (a, b) {
					b === d && a !== f.name && (e = g.validationTargetFor(g.clean(g.findByName(a))), e && e.name in g.invalid && (g.currentElements.push(e), h = h && g.check(e)))
				}), c = this.check(f) !== !1, h = h && c, c ? this.invalid[f.name] = !1 : this.invalid[f.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), a(b).attr("aria-invalid", !c)), h
			},
			showErrors: function (b) {
				if (b) {
					var c = this;
					a.extend(this.errorMap, b), this.errorList = a.map(this.errorMap, function (a, b) {
						return {
							message: a,
							element: c.findByName(b)[0]
						}
					}), this.successList = a.grep(this.successList, function (a) {
						return !(a.name in b)
					})
				}
				this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
			},
			resetForm: function () {
				a.fn.resetForm && a(this.currentForm).resetForm(), this.invalid = {}, this.submitted = {}, this.prepareForm(), this.hideErrors();
				var b = this.elements().removeData("previousValue").removeAttr("aria-invalid");
				this.resetElements(b)
			},
			resetElements: function (a) {
				var b;
				if (this.settings.unhighlight)
					for (b = 0; a[b]; b++) this.settings.unhighlight.call(this, a[b], this.settings.errorClass, ""), this.findByName(a[b].name).removeClass(this.settings.validClass);
				else a.removeClass(this.settings.errorClass).removeClass(this.settings.validClass)
			},
			numberOfInvalids: function () {
				return this.objectLength(this.invalid)
			},
			objectLength: function (a) {
				var b, c = 0;
				for (b in a) a[b] && c++;
				return c
			},
			hideErrors: function () {
				this.hideThese(this.toHide)
			},
			hideThese: function (a) {
				a.not(this.containers).text(""), this.addWrapper(a).hide()
			},
			valid: function () {
				return 0 === this.size()
			},
			size: function () {
				return this.errorList.length
			},
			focusInvalid: function () {
				if (this.settings.focusInvalid) try {
					a(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
				} catch (a) {}
			},
			findLastActive: function () {
				var b = this.lastActive;
				return b && 1 === a.grep(this.errorList, function (a) {
					return a.element.name === b.name
				}).length && b
			},
			elements: function () {
				var b = this,
					c = {};
				return a(this.currentForm).find("input, select, textarea, [contenteditable]").not(":submit, :reset, :image, :disabled").not(this.settings.ignore).filter(function () {
					var d = this.name || a(this).attr("name");
					return !d && b.settings.debug && window.console && console.error("%o has no name assigned", this), this.hasAttribute("contenteditable") && (this.form = a(this).closest("form")[0]), !(d in c || !b.objectLength(a(this).rules())) && (c[d] = !0, !0)
				})
			},
			clean: function (b) {
				return a(b)[0]
			},
			errors: function () {
				var b = this.settings.errorClass.split(" ").join(".");
				return a(this.settings.errorElement + "." + b, this.errorContext)
			},
			resetInternals: function () {
				this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = a([]), this.toHide = a([])
			},
			reset: function () {
				this.resetInternals(), this.currentElements = a([])
			},
			prepareForm: function () {
				this.reset(), this.toHide = this.errors().add(this.containers)
			},
			prepareElement: function (a) {
				this.reset(), this.toHide = this.errorsFor(a)
			},
			elementValue: function (b) {
				var c, d, e = a(b),
					f = b.type;
				return "radio" === f || "checkbox" === f ? this.findByName(b.name).filter(":checked").val() : "number" === f && "undefined" != typeof b.validity ? b.validity.badInput ? "NaN" : e.val() : (c = b.hasAttribute("contenteditable") ? e.text() : e.val(), "file" === f ? "C:\\fakepath\\" === c.substr(0, 12) ? c.substr(12) : (d = c.lastIndexOf("/"), d >= 0 ? c.substr(d + 1) : (d = c.lastIndexOf("\\"), d >= 0 ? c.substr(d + 1) : c)) : "string" == typeof c ? c.replace(/\r/g, "") : c)
			},
			check: function (b) {
				b = this.validationTargetFor(this.clean(b));
				var c, d, e, f = a(b).rules(),
					g = a.map(f, function (a, b) {
						return b
					}).length,
					h = !1,
					i = this.elementValue(b);
				if ("function" == typeof f.normalizer) {
					if (i = f.normalizer.call(b, i), "string" != typeof i) throw new TypeError("The normalizer should return a string value.");
					delete f.normalizer
				}
				for (d in f) {
					e = {
						method: d,
						parameters: f[d]
					};
					try {
						if (c = a.validator.methods[d].call(this, i, b, e.parameters), "dependency-mismatch" === c && 1 === g) {
							h = !0;
							continue
						}
						if (h = !1, "pending" === c) return void(this.toHide = this.toHide.not(this.errorsFor(b)));
						if (!c) return this.formatAndAdd(b, e), !1
					} catch (a) {
						throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method.", a), a instanceof TypeError && (a.message += ".  Exception occurred when checking element " + b.id + ", check the '" + e.method + "' method."), a
					}
				}
				if (!h) return this.objectLength(f) && this.successList.push(b), !0
			},
			customDataMessage: function (b, c) {
				return a(b).data("msg" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()) || a(b).data("msg")
			},
			customMessage: function (a, b) {
				var c = this.settings.messages[a];
				return c && (c.constructor === String ? c : c[b])
			},
			findDefined: function () {
				for (var a = 0; a < arguments.length; a++)
					if (void 0 !== arguments[a]) return arguments[a]
			},
			defaultMessage: function (b, c) {
				var d = this.findDefined(this.customMessage(b.name, c.method), this.customDataMessage(b, c.method), !this.settings.ignoreTitle && b.title || void 0, a.validator.messages[c.method], "<strong>Warning: No message defined for " + b.name + "</strong>"),
					e = /\$?\{(\d+)\}/g;
				return "function" == typeof d ? d = d.call(this, c.parameters, b) : e.test(d) && (d = a.validator.format(d.replace(e, "{$1}"), c.parameters)), d
			},
			formatAndAdd: function (a, b) {
				var c = this.defaultMessage(a, b);
				this.errorList.push({
					message: c,
					element: a,
					method: b.method
				}), this.errorMap[a.name] = c, this.submitted[a.name] = c
			},
			addWrapper: function (a) {
				return this.settings.wrapper && (a = a.add(a.parent(this.settings.wrapper))), a
			},
			defaultShowErrors: function () {
				var a, b, c;
				for (a = 0; this.errorList[a]; a++) c = this.errorList[a], this.settings.highlight && this.settings.highlight.call(this, c.element, this.settings.errorClass, this.settings.validClass), this.showLabel(c.element, c.message);
				if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)
					for (a = 0; this.successList[a]; a++) this.showLabel(this.successList[a]);
				if (this.settings.unhighlight)
					for (a = 0, b = this.validElements(); b[a]; a++) this.settings.unhighlight.call(this, b[a], this.settings.errorClass, this.settings.validClass);
				this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
			},
			validElements: function () {
				return this.currentElements.not(this.invalidElements())
			},
			invalidElements: function () {
				return a(this.errorList).map(function () {
					return this.element
				})
			},
			showLabel: function (b, c) {
				var d, e, f, g, h = this.errorsFor(b),
					i = this.idOrName(b),
					j = a(b).attr("aria-describedby");
				h.length ? (h.removeClass(this.settings.validClass).addClass(this.settings.errorClass), h.html(c)) : (h = a("<" + this.settings.errorElement + ">").attr("id", i + "-error").addClass(this.settings.errorClass).html(c || ""), d = h, this.settings.wrapper && (d = h.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.length ? this.labelContainer.append(d) : this.settings.errorPlacement ? this.settings.errorPlacement(d, a(b)) : d.insertAfter(b), h.is("label") ? h.attr("for", i) : 0 === h.parents("label[for='" + this.escapeCssMeta(i) + "']").length && (f = h.attr("id"), j ? j.match(new RegExp("\\b" + this.escapeCssMeta(f) + "\\b")) || (j += " " + f) : j = f, a(b).attr("aria-describedby", j), e = this.groups[b.name], e && (g = this, a.each(g.groups, function (b, c) {
					c === e && a("[name='" + g.escapeCssMeta(b) + "']", g.currentForm).attr("aria-describedby", h.attr("id"))
				})))), !c && this.settings.success && (h.text(""), "string" == typeof this.settings.success ? h.addClass(this.settings.success) : this.settings.success(h, b)), this.toShow = this.toShow.add(h)
			},
			errorsFor: function (b) {
				var c = this.escapeCssMeta(this.idOrName(b)),
					d = a(b).attr("aria-describedby"),
					e = "label[for='" + c + "'], label[for='" + c + "'] *";
				return d && (e = e + ", #" + this.escapeCssMeta(d).replace(/\s+/g, ", #")), this.errors().filter(e)
			},
			escapeCssMeta: function (a) {
				return a.replace(/([\\!"#$%&'()*+,.\/:;<=>?@\[\]^`{|}~])/g, "\\$1")
			},
			idOrName: function (a) {
				return this.groups[a.name] || (this.checkable(a) ? a.name : a.id || a.name)
			},
			validationTargetFor: function (b) {
				return this.checkable(b) && (b = this.findByName(b.name)), a(b).not(this.settings.ignore)[0]
			},
			checkable: function (a) {
				return /radio|checkbox/i.test(a.type)
			},
			findByName: function (b) {
				return a(this.currentForm).find("[name='" + this.escapeCssMeta(b) + "']")
			},
			getLength: function (b, c) {
				switch (c.nodeName.toLowerCase()) {
					case "select":
						return a("option:selected", c).length;
					case "input":
						if (this.checkable(c)) return this.findByName(c.name).filter(":checked").length
				}
				return b.length
			},
			depend: function (a, b) {
				return !this.dependTypes[typeof a] || this.dependTypes[typeof a](a, b)
			},
			dependTypes: {
				boolean: function (a) {
					return a
				},
				string: function (b, c) {
					return !!a(b, c.form).length
				},
				function: function (a, b) {
					return a(b)
				}
			},
			optional: function (b) {
				var c = this.elementValue(b);
				return !a.validator.methods.required.call(this, c, b) && "dependency-mismatch"
			},
			startRequest: function (b) {
				this.pending[b.name] || (this.pendingRequest++, a(b).addClass(this.settings.pendingClass), this.pending[b.name] = !0)
			},
			stopRequest: function (b, c) {
				this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[b.name], a(b).removeClass(this.settings.pendingClass), c && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (a(this.currentForm).submit(), this.formSubmitted = !1) : !c && 0 === this.pendingRequest && this.formSubmitted && (a(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
			},
			previousValue: function (b, c) {
				return a.data(b, "previousValue") || a.data(b, "previousValue", {
					old: null,
					valid: !0,
					message: this.defaultMessage(b, {
						method: c
					})
				})
			},
			destroy: function () {
				this.resetForm(), a(this.currentForm).off(".validate").removeData("validator").find(".validate-equalTo-blur").off(".validate-equalTo").removeClass("validate-equalTo-blur")
			}
		},
		classRuleSettings: {
			required: {
				required: !0
			},
			email: {
				email: !0
			},
			url: {
				url: !0
			},
			date: {
				date: !0
			},
			dateISO: {
				dateISO: !0
			},
			number: {
				number: !0
			},
			digits: {
				digits: !0
			},
			creditcard: {
				creditcard: !0
			}
		},
		addClassRules: function (b, c) {
			b.constructor === String ? this.classRuleSettings[b] = c : a.extend(this.classRuleSettings, b)
		},
		classRules: function (b) {
			var c = {},
				d = a(b).attr("class");
			return d && a.each(d.split(" "), function () {
				this in a.validator.classRuleSettings && a.extend(c, a.validator.classRuleSettings[this])
			}), c
		},
		normalizeAttributeRule: function (a, b, c, d) {
			/min|max|step/.test(c) && (null === b || /number|range|text/.test(b)) && (d = Number(d), isNaN(d) && (d = void 0)), d || 0 === d ? a[c] = d : b === c && "range" !== b && (a[c] = !0)
		},
		attributeRules: function (b) {
			var c, d, e = {},
				f = a(b),
				g = b.getAttribute("type");
			for (c in a.validator.methods) "required" === c ? (d = b.getAttribute(c), "" === d && (d = !0), d = !!d) : d = f.attr(c), this.normalizeAttributeRule(e, g, c, d);
			return e.maxlength && /-1|2147483647|524288/.test(e.maxlength) && delete e.maxlength, e
		},
		dataRules: function (b) {
			var c, d, e = {},
				f = a(b),
				g = b.getAttribute("type");
			for (c in a.validator.methods) d = f.data("rule" + c.charAt(0).toUpperCase() + c.substring(1).toLowerCase()), this.normalizeAttributeRule(e, g, c, d);
			return e
		},
		staticRules: function (b) {
			var c = {},
				d = a.data(b.form, "validator");
			return d.settings.rules && (c = a.validator.normalizeRule(d.settings.rules[b.name]) || {}), c
		},
		normalizeRules: function (b, c) {
			return a.each(b, function (d, e) {
				if (e === !1) return void delete b[d];
				if (e.param || e.depends) {
					var f = !0;
					switch (typeof e.depends) {
						case "string":
							f = !!a(e.depends, c.form).length;
							break;
						case "function":
							f = e.depends.call(c, c)
					}
					f ? b[d] = void 0 === e.param || e.param : (a.data(c.form, "validator").resetElements(a(c)), delete b[d])
				}
			}), a.each(b, function (d, e) {
				b[d] = a.isFunction(e) && "normalizer" !== d ? e(c) : e
			}), a.each(["minlength", "maxlength"], function () {
				b[this] && (b[this] = Number(b[this]))
			}), a.each(["rangelength", "range"], function () {
				var c;
				b[this] && (a.isArray(b[this]) ? b[this] = [Number(b[this][0]), Number(b[this][1])] : "string" == typeof b[this] && (c = b[this].replace(/[\[\]]/g, "").split(/[\s,]+/), b[this] = [Number(c[0]), Number(c[1])]))
			}), a.validator.autoCreateRanges && (null != b.min && null != b.max && (b.range = [b.min, b.max], delete b.min, delete b.max), null != b.minlength && null != b.maxlength && (b.rangelength = [b.minlength, b.maxlength], delete b.minlength, delete b.maxlength)), b
		},
		normalizeRule: function (b) {
			if ("string" == typeof b) {
				var c = {};
				a.each(b.split(/\s/), function () {
					c[this] = !0
				}), b = c
			}
			return b
		},
		addMethod: function (b, c, d) {
			a.validator.methods[b] = c, a.validator.messages[b] = void 0 !== d ? d : a.validator.messages[b], c.length < 3 && a.validator.addClassRules(b, a.validator.normalizeRule(b))
		},
		methods: {
			required: function (b, c, d) {
				if (!this.depend(d, c)) return "dependency-mismatch";
				if ("select" === c.nodeName.toLowerCase()) {
					var e = a(c).val();
					return e && e.length > 0
				}
				return this.checkable(c) ? this.getLength(b, c) > 0 : b.length > 0
			},
			email: function (a, b) {
				return this.optional(b) || /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(a)
			},
			url: function (a, b) {
				return this.optional(b) || /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[\/?#]\S*)?$/i.test(a)
			},
			date: function (a, b) {
				return this.optional(b) || !/Invalid|NaN/.test(new Date(a).toString())
			},
			dateISO: function (a, b) {
				return this.optional(b) || /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(a)
			},
			number: function (a, b) {
				return this.optional(b) || /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(a)
			},
			digits: function (a, b) {
				return this.optional(b) || /^\d+$/.test(a)
			},
			minlength: function (b, c, d) {
				var e = a.isArray(b) ? b.length : this.getLength(b, c);
				return this.optional(c) || e >= d
			},
			maxlength: function (b, c, d) {
				var e = a.isArray(b) ? b.length : this.getLength(b, c);
				return this.optional(c) || e <= d
			},
			rangelength: function (b, c, d) {
				var e = a.isArray(b) ? b.length : this.getLength(b, c);
				return this.optional(c) || e >= d[0] && e <= d[1]
			},
			min: function (a, b, c) {
				return this.optional(b) || a >= c
			},
			max: function (a, b, c) {
				return this.optional(b) || a <= c
			},
			range: function (a, b, c) {
				return this.optional(b) || a >= c[0] && a <= c[1]
			},
			step: function (b, c, d) {
				var e = a(c).attr("type"),
					f = "Step attribute on input type " + e + " is not supported.",
					g = ["text", "number", "range"],
					h = new RegExp("\\b" + e + "\\b"),
					i = e && !h.test(g.join());
				if (i) throw new Error(f);
				return this.optional(c) || b % d === 0
			},
			equalTo: function (b, c, d) {
				var e = a(d);
				return this.settings.onfocusout && e.not(".validate-equalTo-blur").length && e.addClass("validate-equalTo-blur").on("blur.validate-equalTo", function () {
					a(c).valid()
				}), b === e.val()
			},
			remote: function (b, c, d, e) {
				if (this.optional(c)) return "dependency-mismatch";
				e = "string" == typeof e && e || "remote";
				var f, g, h, i = this.previousValue(c, e);
				return this.settings.messages[c.name] || (this.settings.messages[c.name] = {}), i.originalMessage = i.originalMessage || this.settings.messages[c.name][e], this.settings.messages[c.name][e] = i.message, d = "string" == typeof d && {
					url: d
				} || d, h = a.param(a.extend({
					data: b
				}, d.data)), i.old === h ? i.valid : (i.old = h, f = this, this.startRequest(c), g = {}, g[c.name] = b, a.ajax(a.extend(!0, {
					mode: "abort",
					port: "validate" + c.name,
					dataType: "json",
					data: g,
					context: f.currentForm,
					success: function (a) {
						var d, g, h, j = a === !0 || "true" === a;
						f.settings.messages[c.name][e] = i.originalMessage, j ? (h = f.formSubmitted, f.resetInternals(), f.toHide = f.errorsFor(c), f.formSubmitted = h, f.successList.push(c), f.invalid[c.name] = !1, f.showErrors()) : (d = {}, g = a || f.defaultMessage(c, {
							method: e,
							parameters: b
						}), d[c.name] = i.message = g, f.invalid[c.name] = !0, f.showErrors(d)), i.valid = j, f.stopRequest(c, j)
					}
				}, d)), "pending")
			}
		}
	});
	var b, c = {};
	a.ajaxPrefilter ? a.ajaxPrefilter(function (a, b, d) {
		var e = a.port;
		"abort" === a.mode && (c[e] && c[e].abort(), c[e] = d)
	}) : (b = a.ajax, a.ajax = function (d) {
		var e = ("mode" in d ? d : a.ajaxSettings).mode,
			f = ("port" in d ? d : a.ajaxSettings).port;
		return "abort" === e ? (c[f] && c[f].abort(), c[f] = b.apply(this, arguments), c[f]) : b.apply(this, arguments)
	})
}), ! function (a, b) {
	"object" == typeof exports && "object" == typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define([], b) : "object" == typeof exports ? exports.io = b() : a.io = b()
}(this, function () {
	return function (a) {
		function b(d) {
			if (c[d]) return c[d].exports;
			var e = c[d] = {
				exports: {},
				id: d,
				loaded: !1
			};
			return a[d].call(e.exports, e, e.exports, b), e.loaded = !0, e.exports
		}
		var c = {};
		return b.m = a, b.c = c, b.p = "", b(0)
	}([function (a, b, c) {
		"use strict";

		function d(a, b) {
			"object" === ("undefined" == typeof a ? "undefined" : f(a)) && (b = a, a = void 0), b = b || {};
			var c, d = g(a),
				h = d.source,
				l = d.id,
				m = d.path,
				n = k[l] && m in k[l].nsps,
				o = b.forceNew || b["force new connection"] || !1 === b.multiplex || n;
			return o ? (j("ignoring socket cache for %s", h), c = i(h, b)) : (k[l] || (j("new io instance for %s", h), k[l] = i(h, b)), c = k[l]), d.query && !b.query ? b.query = d.query : b && "object" === f(b.query) && (b.query = e(b.query)), c.socket(d.path, b)
		}

		function e(a) {
			var b = [];
			for (var c in a) a.hasOwnProperty(c) && b.push(encodeURIComponent(c) + "=" + encodeURIComponent(a[c]));
			return b.join("&")
		}
		var f = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a) {
				return typeof a
			} : function (a) {
				return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
			},
			g = c(1),
			h = c(7),
			i = c(17),
			j = c(3)("socket.io-client");
		a.exports = b = d;
		var k = b.managers = {};
		b.protocol = h.protocol, b.connect = d, b.Manager = c(17), b.Socket = c(44)
	}, function (a, b, c) {
		(function (b) {
			"use strict";

			function d(a, c) {
				var d = a;
				c = c || b.location, null == a && (a = c.protocol + "//" + c.host), "string" == typeof a && ("/" === a.charAt(0) && (a = "/" === a.charAt(1) ? c.protocol + a : c.host + a), /^(https?|wss?):\/\//.test(a) || (f("protocol-less url %s", a), a = "undefined" != typeof c ? c.protocol + "//" + a : "https://" + a), f("parse %s", a), d = e(a)), d.port || (/^(http|ws)$/.test(d.protocol) ? d.port = "80" : /^(http|ws)s$/.test(d.protocol) && (d.port = "443")), d.path = d.path || "/";
				var g = d.host.indexOf(":") !== -1,
					h = g ? "[" + d.host + "]" : d.host;
				return d.id = d.protocol + "://" + h + ":" + d.port, d.href = d.protocol + "://" + h + (c && c.port === d.port ? "" : ":" + d.port), d
			}
			var e = c(2),
				f = c(3)("socket.io-client:url");
			a.exports = d
		}).call(b, function () {
			return this
		}())
	}, function (a, b) {
		var c = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/,
			d = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"];
		a.exports = function (a) {
			var b = a,
				e = a.indexOf("["),
				f = a.indexOf("]");
			e != -1 && f != -1 && (a = a.substring(0, e) + a.substring(e, f).replace(/:/g, ";") + a.substring(f, a.length));
			for (var g = c.exec(a || ""), h = {}, i = 14; i--;) h[d[i]] = g[i] || "";
			return e != -1 && f != -1 && (h.source = b, h.host = h.host.substring(1, h.host.length - 1).replace(/;/g, ":"), h.authority = h.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), h.ipv6uri = !0), h
		}
	}, function (a, b, c) {
		(function (d) {
			function e() {
				return "undefined" != typeof document && "WebkitAppearance" in document.documentElement.style || window.console && (console.firebug || console.exception && console.table) || navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31
			}

			function f() {
				var a = arguments,
					c = this.useColors;
				if (a[0] = (c ? "%c" : "") + this.namespace + (c ? " %c" : " ") + a[0] + (c ? "%c " : " ") + "+" + b.humanize(this.diff), !c) return a;
				var d = "color: " + this.color;
				a = [a[0], d, "color: inherit"].concat(Array.prototype.slice.call(a, 1));
				var e = 0,
					f = 0;
				return a[0].replace(/%[a-z%]/g, function (a) {
					"%%" !== a && (e++, "%c" === a && (f = e))
				}), a.splice(f, 0, d), a
			}

			function g() {
				return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
			}

			function h(a) {
				try {
					null == a ? b.storage.removeItem("debug") : b.storage.debug = a
				} catch (a) {}
			}

			function i() {
				try {
					return b.storage.debug
				} catch (a) {}
				if ("undefined" != typeof d && "env" in d) return d.env.DEBUG
			}

			function j() {
				try {
					return window.localStorage
				} catch (a) {}
			}
			b = a.exports = c(5), b.log = g, b.formatArgs = f, b.save = h, b.load = i, b.useColors = e, b.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : j(), b.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], b.formatters.j = function (a) {
				try {
					return JSON.stringify(a)
				} catch (a) {
					return "[UnexpectedJSONParseError]: " + a.message
				}
			}, b.enable(i())
		}).call(b, c(4))
	}, function (a, b) {
		function c() {
			throw new Error("setTimeout has not been defined")
		}

		function d() {
			throw new Error("clearTimeout has not been defined")
		}

		function e(a) {
			if (k === setTimeout) return setTimeout(a, 0);
			if ((k === c || !k) && setTimeout) return k = setTimeout, setTimeout(a, 0);
			try {
				return k(a, 0)
			} catch (b) {
				try {
					return k.call(null, a, 0)
				} catch (b) {
					return k.call(this, a, 0)
				}
			}
		}

		function f(a) {
			if (l === clearTimeout) return clearTimeout(a);
			if ((l === d || !l) && clearTimeout) return l = clearTimeout, clearTimeout(a);
			try {
				return l(a)
			} catch (b) {
				try {
					return l.call(null, a)
				} catch (b) {
					return l.call(this, a)
				}
			}
		}

		function g() {
			p && n && (p = !1, n.length ? o = n.concat(o) : q = -1, o.length && h())
		}

		function h() {
			if (!p) {
				var a = e(g);
				p = !0;
				for (var b = o.length; b;) {
					for (n = o, o = []; ++q < b;) n && n[q].run();
					q = -1, b = o.length
				}
				n = null, p = !1, f(a)
			}
		}

		function i(a, b) {
			this.fun = a, this.array = b
		}

		function j() {}
		var k, l, m = a.exports = {};
		! function () {
			try {
				k = "function" == typeof setTimeout ? setTimeout : c
			} catch (a) {
				k = c
			}
			try {
				l = "function" == typeof clearTimeout ? clearTimeout : d
			} catch (a) {
				l = d
			}
		}();
		var n, o = [],
			p = !1,
			q = -1;
		m.nextTick = function (a) {
			var b = new Array(arguments.length - 1);
			if (arguments.length > 1)
				for (var c = 1; c < arguments.length; c++) b[c - 1] = arguments[c];
			o.push(new i(a, b)), 1 !== o.length || p || e(h)
		}, i.prototype.run = function () {
			this.fun.apply(null, this.array)
		}, m.title = "browser", m.browser = !0, m.env = {}, m.argv = [], m.version = "", m.versions = {}, m.on = j, m.addListener = j, m.once = j, m.off = j, m.removeListener = j, m.removeAllListeners = j, m.emit = j, m.binding = function (a) {
			throw new Error("process.binding is not supported")
		}, m.cwd = function () {
			return "/"
		}, m.chdir = function (a) {
			throw new Error("process.chdir is not supported")
		}, m.umask = function () {
			return 0
		}
	}, function (a, b, c) {
		function d() {
			return b.colors[k++ % b.colors.length]
		}

		function e(a) {
			function c() {}

			function e() {
				var a = e,
					c = +new Date,
					f = c - (j || c);
				a.diff = f, a.prev = j, a.curr = c, j = c, null == a.useColors && (a.useColors = b.useColors()), null == a.color && a.useColors && (a.color = d());
				for (var g = new Array(arguments.length), h = 0; h < g.length; h++) g[h] = arguments[h];
				g[0] = b.coerce(g[0]), "string" != typeof g[0] && (g = ["%o"].concat(g));
				var i = 0;
				g[0] = g[0].replace(/%([a-z%])/g, function (c, d) {
					if ("%%" === c) return c;
					i++;
					var e = b.formatters[d];
					if ("function" == typeof e) {
						var f = g[i];
						c = e.call(a, f), g.splice(i, 1), i--
					}
					return c
				}), g = b.formatArgs.apply(a, g);
				var k = e.log || b.log || console.log.bind(console);
				k.apply(a, g)
			}
			c.enabled = !1, e.enabled = !0;
			var f = b.enabled(a) ? e : c;
			return f.namespace = a, f
		}

		function f(a) {
			b.save(a);
			for (var c = (a || "").split(/[\s,]+/), d = c.length, e = 0; e < d; e++) c[e] && (a = c[e].replace(/[\\^$+?.()|[\]{}]/g, "\\$&").replace(/\*/g, ".*?"), "-" === a[0] ? b.skips.push(new RegExp("^" + a.substr(1) + "$")) : b.names.push(new RegExp("^" + a + "$")))
		}

		function g() {
			b.enable("")
		}

		function h(a) {
			var c, d;
			for (c = 0, d = b.skips.length; c < d; c++)
				if (b.skips[c].test(a)) return !1;
			for (c = 0, d = b.names.length; c < d; c++)
				if (b.names[c].test(a)) return !0;
			return !1
		}

		function i(a) {
			return a instanceof Error ? a.stack || a.message : a
		}
		b = a.exports = e.debug = e, b.coerce = i, b.disable = g, b.enable = f, b.enabled = h, b.humanize = c(6), b.names = [], b.skips = [], b.formatters = {};
		var j, k = 0
	}, function (a, b) {
		function c(a) {
			if (a = String(a), !(a.length > 1e4)) {
				var b = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(a);
				if (b) {
					var c = parseFloat(b[1]),
						d = (b[2] || "ms").toLowerCase();
					switch (d) {
						case "years":
						case "year":
						case "yrs":
						case "yr":
						case "y":
							return c * k;
						case "days":
						case "day":
						case "d":
							return c * j;
						case "hours":
						case "hour":
						case "hrs":
						case "hr":
						case "h":
							return c * i;
						case "minutes":
						case "minute":
						case "mins":
						case "min":
						case "m":
							return c * h;
						case "seconds":
						case "second":
						case "secs":
						case "sec":
						case "s":
							return c * g;
						case "milliseconds":
						case "millisecond":
						case "msecs":
						case "msec":
						case "ms":
							return c;
						default:
							return
					}
				}
			}
		}

		function d(a) {
			return a >= j ? Math.round(a / j) + "d" : a >= i ? Math.round(a / i) + "h" : a >= h ? Math.round(a / h) + "m" : a >= g ? Math.round(a / g) + "s" : a + "ms"
		}

		function e(a) {
			return f(a, j, "day") || f(a, i, "hour") || f(a, h, "minute") || f(a, g, "second") || a + " ms"
		}

		function f(a, b, c) {
			if (!(a < b)) return a < 1.5 * b ? Math.floor(a / b) + " " + c : Math.ceil(a / b) + " " + c + "s"
		}
		var g = 1e3,
			h = 60 * g,
			i = 60 * h,
			j = 24 * i,
			k = 365.25 * j;
		a.exports = function (a, b) {
			b = b || {};
			var f = typeof a;
			if ("string" === f && a.length > 0) return c(a);
			if ("number" === f && isNaN(a) === !1) return b.long ? e(a) : d(a);
			throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(a))
		}
	}, function (a, b, c) {
		function d() {}

		function e(a) {
			var c = "",
				d = !1;
			return c += a.type, b.BINARY_EVENT != a.type && b.BINARY_ACK != a.type || (c += a.attachments, c += "-"), a.nsp && "/" != a.nsp && (d = !0, c += a.nsp), null != a.id && (d && (c += ",", d = !1), c += a.id), null != a.data && (d && (c += ","), c += m.stringify(a.data)), l("encoded %j as %s", a, c), c
		}

		function f(a, b) {
			function c(a) {
				var c = o.deconstructPacket(a),
					d = e(c.packet),
					f = c.buffers;
				f.unshift(d), b(f)
			}
			o.removeBlobs(a, c)
		}

		function g() {
			this.reconstructor = null
		}

		function h(a) {
			var c = {},
				d = 0;
			if (c.type = Number(a.charAt(0)), null == b.types[c.type]) return k();
			if (b.BINARY_EVENT == c.type || b.BINARY_ACK == c.type) {
				for (var e = "";
					"-" != a.charAt(++d) && (e += a.charAt(d), d != a.length););
				if (e != Number(e) || "-" != a.charAt(d)) throw new Error("Illegal attachments");
				c.attachments = Number(e)
			}
			if ("/" == a.charAt(d + 1))
				for (c.nsp = ""; ++d;) {
					var f = a.charAt(d);
					if ("," == f) break;
					if (c.nsp += f, d == a.length) break
				} else c.nsp = "/";
			var g = a.charAt(d + 1);
			if ("" !== g && Number(g) == g) {
				for (c.id = ""; ++d;) {
					var f = a.charAt(d);
					if (null == f || Number(f) != f) {
						--d;
						break
					}
					if (c.id += a.charAt(d), d == a.length) break
				}
				c.id = Number(c.id)
			}
			return a.charAt(++d) && (c = i(c, a.substr(d))), l("decoded %s as %j", a, c), c
		}

		function i(a, b) {
			try {
				a.data = m.parse(b)
			} catch (a) {
				return k()
			}
			return a
		}

		function j(a) {
			this.reconPack = a, this.buffers = []
		}

		function k(a) {
			return {
				type: b.ERROR,
				data: "parser error"
			}
		}
		var l = c(8)("socket.io-parser"),
			m = c(11),
			n = c(13),
			o = c(14),
			p = c(16);
		b.protocol = 4, b.types = ["CONNECT", "DISCONNECT", "EVENT", "ACK", "ERROR", "BINARY_EVENT", "BINARY_ACK"], b.CONNECT = 0, b.DISCONNECT = 1, b.EVENT = 2, b.ACK = 3, b.ERROR = 4, b.BINARY_EVENT = 5, b.BINARY_ACK = 6, b.Encoder = d, b.Decoder = g, d.prototype.encode = function (a, c) {
			if (l("encoding packet %j", a), b.BINARY_EVENT == a.type || b.BINARY_ACK == a.type) f(a, c);
			else {
				var d = e(a);
				c([d])
			}
		}, n(g.prototype), g.prototype.add = function (a) {
			var c;
			if ("string" == typeof a) c = h(a), b.BINARY_EVENT == c.type || b.BINARY_ACK == c.type ? (this.reconstructor = new j(c), 0 === this.reconstructor.reconPack.attachments && this.emit("decoded", c)) : this.emit("decoded", c);
			else {
				if (!p(a) && !a.base64) throw new Error("Unknown type: " + a);
				if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet");
				c = this.reconstructor.takeBinaryData(a), c && (this.reconstructor = null,
					this.emit("decoded", c))
			}
		}, g.prototype.destroy = function () {
			this.reconstructor && this.reconstructor.finishedReconstruction()
		}, j.prototype.takeBinaryData = function (a) {
			if (this.buffers.push(a), this.buffers.length == this.reconPack.attachments) {
				var b = o.reconstructPacket(this.reconPack, this.buffers);
				return this.finishedReconstruction(), b
			}
			return null
		}, j.prototype.finishedReconstruction = function () {
			this.reconPack = null, this.buffers = []
		}
	}, function (a, b, c) {
		function d() {
			return "WebkitAppearance" in document.documentElement.style || window.console && (console.firebug || console.exception && console.table) || navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31
		}

		function e() {
			var a = arguments,
				c = this.useColors;
			if (a[0] = (c ? "%c" : "") + this.namespace + (c ? " %c" : " ") + a[0] + (c ? "%c " : " ") + "+" + b.humanize(this.diff), !c) return a;
			var d = "color: " + this.color;
			a = [a[0], d, "color: inherit"].concat(Array.prototype.slice.call(a, 1));
			var e = 0,
				f = 0;
			return a[0].replace(/%[a-z%]/g, function (a) {
				"%%" !== a && (e++, "%c" === a && (f = e))
			}), a.splice(f, 0, d), a
		}

		function f() {
			return "object" == typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments)
		}

		function g(a) {
			try {
				null == a ? b.storage.removeItem("debug") : b.storage.debug = a
			} catch (a) {}
		}

		function h() {
			var a;
			try {
				a = b.storage.debug
			} catch (a) {}
			return a
		}

		function i() {
			try {
				return window.localStorage
			} catch (a) {}
		}
		b = a.exports = c(9), b.log = f, b.formatArgs = e, b.save = g, b.load = h, b.useColors = d, b.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : i(), b.colors = ["lightseagreen", "forestgreen", "goldenrod", "dodgerblue", "darkorchid", "crimson"], b.formatters.j = function (a) {
			return JSON.stringify(a)
		}, b.enable(h())
	}, function (a, b, c) {
		function d() {
			return b.colors[k++ % b.colors.length]
		}

		function e(a) {
			function c() {}

			function e() {
				var a = e,
					c = +new Date,
					f = c - (j || c);
				a.diff = f, a.prev = j, a.curr = c, j = c, null == a.useColors && (a.useColors = b.useColors()), null == a.color && a.useColors && (a.color = d());
				var g = Array.prototype.slice.call(arguments);
				g[0] = b.coerce(g[0]), "string" != typeof g[0] && (g = ["%o"].concat(g));
				var h = 0;
				g[0] = g[0].replace(/%([a-z%])/g, function (c, d) {
					if ("%%" === c) return c;
					h++;
					var e = b.formatters[d];
					if ("function" == typeof e) {
						var f = g[h];
						c = e.call(a, f), g.splice(h, 1), h--
					}
					return c
				}), "function" == typeof b.formatArgs && (g = b.formatArgs.apply(a, g));
				var i = e.log || b.log || console.log.bind(console);
				i.apply(a, g)
			}
			c.enabled = !1, e.enabled = !0;
			var f = b.enabled(a) ? e : c;
			return f.namespace = a, f
		}

		function f(a) {
			b.save(a);
			for (var c = (a || "").split(/[\s,]+/), d = c.length, e = 0; e < d; e++) c[e] && (a = c[e].replace(/\*/g, ".*?"), "-" === a[0] ? b.skips.push(new RegExp("^" + a.substr(1) + "$")) : b.names.push(new RegExp("^" + a + "$")))
		}

		function g() {
			b.enable("")
		}

		function h(a) {
			var c, d;
			for (c = 0, d = b.skips.length; c < d; c++)
				if (b.skips[c].test(a)) return !1;
			for (c = 0, d = b.names.length; c < d; c++)
				if (b.names[c].test(a)) return !0;
			return !1
		}

		function i(a) {
			return a instanceof Error ? a.stack || a.message : a
		}
		b = a.exports = e, b.coerce = i, b.disable = g, b.enable = f, b.enabled = h, b.humanize = c(10), b.names = [], b.skips = [], b.formatters = {};
		var j, k = 0
	}, function (a, b) {
		function c(a) {
			if (a = "" + a, !(a.length > 1e4)) {
				var b = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(a);
				if (b) {
					var c = parseFloat(b[1]),
						d = (b[2] || "ms").toLowerCase();
					switch (d) {
						case "years":
						case "year":
						case "yrs":
						case "yr":
						case "y":
							return c * k;
						case "days":
						case "day":
						case "d":
							return c * j;
						case "hours":
						case "hour":
						case "hrs":
						case "hr":
						case "h":
							return c * i;
						case "minutes":
						case "minute":
						case "mins":
						case "min":
						case "m":
							return c * h;
						case "seconds":
						case "second":
						case "secs":
						case "sec":
						case "s":
							return c * g;
						case "milliseconds":
						case "millisecond":
						case "msecs":
						case "msec":
						case "ms":
							return c
					}
				}
			}
		}

		function d(a) {
			return a >= j ? Math.round(a / j) + "d" : a >= i ? Math.round(a / i) + "h" : a >= h ? Math.round(a / h) + "m" : a >= g ? Math.round(a / g) + "s" : a + "ms"
		}

		function e(a) {
			return f(a, j, "day") || f(a, i, "hour") || f(a, h, "minute") || f(a, g, "second") || a + " ms"
		}

		function f(a, b, c) {
			if (!(a < b)) return a < 1.5 * b ? Math.floor(a / b) + " " + c : Math.ceil(a / b) + " " + c + "s"
		}
		var g = 1e3,
			h = 60 * g,
			i = 60 * h,
			j = 24 * i,
			k = 365.25 * j;
		a.exports = function (a, b) {
			return b = b || {}, "string" == typeof a ? c(a) : b.long ? e(a) : d(a)
		}
	}, function (a, b, c) {
		(function (a, c) {
			var d = !1;
			(function () {
				function e(a, b) {
					function c(a) {
						if (c[a] !== q) return c[a];
						var e;
						if ("bug-string-char-index" == a) e = "a" != "a" [0];
						else if ("json" == a) e = c("json-stringify") && c("json-parse");
						else {
							var g, h = '{"a":[1,true,false,null,"\\u0000\\b\\n\\f\\r\\t"]}';
							if ("json-stringify" == a) {
								var i = b.stringify,
									k = "function" == typeof i && t;
								if (k) {
									(g = function () {
										return 1
									}).toJSON = g;
									try {
										k = "0" === i(0) && "0" === i(new d) && '""' == i(new f) && i(s) === q && i(q) === q && i() === q && "1" === i(g) && "[1]" == i([g]) && "[null]" == i([q]) && "null" == i(null) && "[null,null,null]" == i([q, s, null]) && i({
											a: [g, !0, !1, null, "\0\b\n\f\r\t"]
										}) == h && "1" === i(null, g) && "[\n 1,\n 2\n]" == i([1, 2], null, 1) && '"-271821-04-20T00:00:00.000Z"' == i(new j(-864e13)) && '"+275760-09-13T00:00:00.000Z"' == i(new j(864e13)) && '"-000001-01-01T00:00:00.000Z"' == i(new j(-621987552e5)) && '"1969-12-31T23:59:59.999Z"' == i(new j(-1))
									} catch (a) {
										k = !1
									}
								}
								e = k
							}
							if ("json-parse" == a) {
								var l = b.parse;
								if ("function" == typeof l) try {
									if (0 === l("0") && !l(!1)) {
										g = l(h);
										var m = 5 == g.a.length && 1 === g.a[0];
										if (m) {
											try {
												m = !l('"\t"')
											} catch (a) {}
											if (m) try {
												m = 1 !== l("01")
											} catch (a) {}
											if (m) try {
												m = 1 !== l("1.")
											} catch (a) {}
										}
									}
								} catch (a) {
									m = !1
								}
								e = m
							}
						}
						return c[a] = !!e
					}
					a || (a = i.Object()), b || (b = i.Object());
					var d = a.Number || i.Number,
						f = a.String || i.String,
						h = a.Object || i.Object,
						j = a.Date || i.Date,
						k = a.SyntaxError || i.SyntaxError,
						l = a.TypeError || i.TypeError,
						m = a.Math || i.Math,
						n = a.JSON || i.JSON;
					"object" == typeof n && n && (b.stringify = n.stringify, b.parse = n.parse);
					var o, p, q, r = h.prototype,
						s = r.toString,
						t = new j(-0xc782b5b800cec);
					try {
						t = t.getUTCFullYear() == -109252 && 0 === t.getUTCMonth() && 1 === t.getUTCDate() && 10 == t.getUTCHours() && 37 == t.getUTCMinutes() && 6 == t.getUTCSeconds() && 708 == t.getUTCMilliseconds()
					} catch (a) {}
					if (!c("json")) {
						var u = "[object Function]",
							v = "[object Date]",
							w = "[object Number]",
							x = "[object String]",
							y = "[object Array]",
							z = "[object Boolean]",
							A = c("bug-string-char-index");
						if (!t) var B = m.floor,
							C = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],
							D = function (a, b) {
								return C[b] + 365 * (a - 1970) + B((a - 1969 + (b = +(b > 1))) / 4) - B((a - 1901 + b) / 100) + B((a - 1601 + b) / 400)
							};
						if ((o = r.hasOwnProperty) || (o = function (a) {
								var b, c = {};
								return (c.__proto__ = null, c.__proto__ = {
									toString: 1
								}, c).toString != s ? o = function (a) {
									var b = this.__proto__,
										c = a in (this.__proto__ = null, this);
									return this.__proto__ = b, c
								} : (b = c.constructor, o = function (a) {
									var c = (this.constructor || b).prototype;
									return a in this && !(a in c && this[a] === c[a])
								}), c = null, o.call(this, a)
							}), p = function (a, b) {
								var c, d, e, f = 0;
								(c = function () {
									this.valueOf = 0
								}).prototype.valueOf = 0, d = new c;
								for (e in d) o.call(d, e) && f++;
								return c = d = null, f ? p = 2 == f ? function (a, b) {
									var c, d = {},
										e = s.call(a) == u;
									for (c in a) e && "prototype" == c || o.call(d, c) || !(d[c] = 1) || !o.call(a, c) || b(c)
								} : function (a, b) {
									var c, d, e = s.call(a) == u;
									for (c in a) e && "prototype" == c || !o.call(a, c) || (d = "constructor" === c) || b(c);
									(d || o.call(a, c = "constructor")) && b(c)
								} : (d = ["valueOf", "toString", "toLocaleString", "propertyIsEnumerable", "isPrototypeOf", "hasOwnProperty", "constructor"], p = function (a, b) {
									var c, e, f = s.call(a) == u,
										h = !f && "function" != typeof a.constructor && g[typeof a.hasOwnProperty] && a.hasOwnProperty || o;
									for (c in a) f && "prototype" == c || !h.call(a, c) || b(c);
									for (e = d.length; c = d[--e]; h.call(a, c) && b(c));
								}), p(a, b)
							}, !c("json-stringify")) {
							var E = {
									92: "\\\\",
									34: '\\"',
									8: "\\b",
									12: "\\f",
									10: "\\n",
									13: "\\r",
									9: "\\t"
								},
								F = "000000",
								G = function (a, b) {
									return (F + (b || 0)).slice(-a)
								},
								H = "\\u00",
								I = function (a) {
									for (var b = '"', c = 0, d = a.length, e = !A || d > 10, f = e && (A ? a.split("") : a); c < d; c++) {
										var g = a.charCodeAt(c);
										switch (g) {
											case 8:
											case 9:
											case 10:
											case 12:
											case 13:
											case 34:
											case 92:
												b += E[g];
												break;
											default:
												if (g < 32) {
													b += H + G(2, g.toString(16));
													break
												}
												b += e ? f[c] : a.charAt(c)
										}
									}
									return b + '"'
								},
								J = function (a, b, c, d, e, f, g) {
									var h, i, j, k, m, n, r, t, u, A, C, E, F, H, K, L;
									try {
										h = b[a]
									} catch (a) {}
									if ("object" == typeof h && h)
										if (i = s.call(h), i != v || o.call(h, "toJSON")) "function" == typeof h.toJSON && (i != w && i != x && i != y || o.call(h, "toJSON")) && (h = h.toJSON(a));
										else if (h > -1 / 0 && h < 1 / 0) {
										if (D) {
											for (m = B(h / 864e5), j = B(m / 365.2425) + 1970 - 1; D(j + 1, 0) <= m; j++);
											for (k = B((m - D(j, 0)) / 30.42); D(j, k + 1) <= m; k++);
											m = 1 + m - D(j, k), n = (h % 864e5 + 864e5) % 864e5, r = B(n / 36e5) % 24, t = B(n / 6e4) % 60, u = B(n / 1e3) % 60, A = n % 1e3
										} else j = h.getUTCFullYear(), k = h.getUTCMonth(), m = h.getUTCDate(), r = h.getUTCHours(), t = h.getUTCMinutes(), u = h.getUTCSeconds(), A = h.getUTCMilliseconds();
										h = (j <= 0 || j >= 1e4 ? (j < 0 ? "-" : "+") + G(6, j < 0 ? -j : j) : G(4, j)) + "-" + G(2, k + 1) + "-" + G(2, m) + "T" + G(2, r) + ":" + G(2, t) + ":" + G(2, u) + "." + G(3, A) + "Z"
									} else h = null;
									if (c && (h = c.call(b, a, h)), null === h) return "null";
									if (i = s.call(h), i == z) return "" + h;
									if (i == w) return h > -1 / 0 && h < 1 / 0 ? "" + h : "null";
									if (i == x) return I("" + h);
									if ("object" == typeof h) {
										for (H = g.length; H--;)
											if (g[H] === h) throw l();
										if (g.push(h), C = [], K = f, f += e, i == y) {
											for (F = 0, H = h.length; F < H; F++) E = J(F, h, c, d, e, f, g), C.push(E === q ? "null" : E);
											L = C.length ? e ? "[\n" + f + C.join(",\n" + f) + "\n" + K + "]" : "[" + C.join(",") + "]" : "[]"
										} else p(d || h, function (a) {
											var b = J(a, h, c, d, e, f, g);
											b !== q && C.push(I(a) + ":" + (e ? " " : "") + b)
										}), L = C.length ? e ? "{\n" + f + C.join(",\n" + f) + "\n" + K + "}" : "{" + C.join(",") + "}" : "{}";
										return g.pop(), L
									}
								};
							b.stringify = function (a, b, c) {
								var d, e, f, h;
								if (g[typeof b] && b)
									if ((h = s.call(b)) == u) e = b;
									else if (h == y) {
									f = {};
									for (var i, j = 0, k = b.length; j < k; i = b[j++], h = s.call(i), (h == x || h == w) && (f[i] = 1));
								}
								if (c)
									if ((h = s.call(c)) == w) {
										if ((c -= c % 1) > 0)
											for (d = "", c > 10 && (c = 10); d.length < c; d += " ");
									} else h == x && (d = c.length <= 10 ? c : c.slice(0, 10));
								return J("", (i = {}, i[""] = a, i), e, f, d, "", [])
							}
						}
						if (!c("json-parse")) {
							var K, L, M = f.fromCharCode,
								N = {
									92: "\\",
									34: '"',
									47: "/",
									98: "\b",
									116: "\t",
									110: "\n",
									102: "\f",
									114: "\r"
								},
								O = function () {
									throw K = L = null, k()
								},
								P = function () {
									for (var a, b, c, d, e, f = L, g = f.length; K < g;) switch (e = f.charCodeAt(K)) {
										case 9:
										case 10:
										case 13:
										case 32:
											K++;
											break;
										case 123:
										case 125:
										case 91:
										case 93:
										case 58:
										case 44:
											return a = A ? f.charAt(K) : f[K], K++, a;
										case 34:
											for (a = "@", K++; K < g;)
												if (e = f.charCodeAt(K), e < 32) O();
												else if (92 == e) switch (e = f.charCodeAt(++K)) {
												case 92:
												case 34:
												case 47:
												case 98:
												case 116:
												case 110:
												case 102:
												case 114:
													a += N[e], K++;
													break;
												case 117:
													for (b = ++K, c = K + 4; K < c; K++) e = f.charCodeAt(K), e >= 48 && e <= 57 || e >= 97 && e <= 102 || e >= 65 && e <= 70 || O();
													a += M("0x" + f.slice(b, K));
													break;
												default:
													O()
											} else {
												if (34 == e) break;
												for (e = f.charCodeAt(K), b = K; e >= 32 && 92 != e && 34 != e;) e = f.charCodeAt(++K);
												a += f.slice(b, K)
											}
											if (34 == f.charCodeAt(K)) return K++, a;
											O();
										default:
											if (b = K, 45 == e && (d = !0, e = f.charCodeAt(++K)), e >= 48 && e <= 57) {
												for (48 == e && (e = f.charCodeAt(K + 1), e >= 48 && e <= 57) && O(), d = !1; K < g && (e = f.charCodeAt(K), e >= 48 && e <= 57); K++);
												if (46 == f.charCodeAt(K)) {
													for (c = ++K; c < g && (e = f.charCodeAt(c), e >= 48 && e <= 57); c++);
													c == K && O(), K = c
												}
												if (e = f.charCodeAt(K), 101 == e || 69 == e) {
													for (e = f.charCodeAt(++K), 43 != e && 45 != e || K++, c = K; c < g && (e = f.charCodeAt(c), e >= 48 && e <= 57); c++);
													c == K && O(), K = c
												}
												return +f.slice(b, K)
											}
											if (d && O(), "true" == f.slice(K, K + 4)) return K += 4, !0;
											if ("false" == f.slice(K, K + 5)) return K += 5, !1;
											if ("null" == f.slice(K, K + 4)) return K += 4, null;
											O()
									}
									return "$"
								},
								Q = function (a) {
									var b, c;
									if ("$" == a && O(), "string" == typeof a) {
										if ("@" == (A ? a.charAt(0) : a[0])) return a.slice(1);
										if ("[" == a) {
											for (b = []; a = P(), "]" != a; c || (c = !0)) c && ("," == a ? (a = P(), "]" == a && O()) : O()), "," == a && O(), b.push(Q(a));
											return b
										}
										if ("{" == a) {
											for (b = {}; a = P(), "}" != a; c || (c = !0)) c && ("," == a ? (a = P(), "}" == a && O()) : O()), "," != a && "string" == typeof a && "@" == (A ? a.charAt(0) : a[0]) && ":" == P() || O(), b[a.slice(1)] = Q(P());
											return b
										}
										O()
									}
									return a
								},
								R = function (a, b, c) {
									var d = S(a, b, c);
									d === q ? delete a[b] : a[b] = d
								},
								S = function (a, b, c) {
									var d, e = a[b];
									if ("object" == typeof e && e)
										if (s.call(e) == y)
											for (d = e.length; d--;) R(e, d, c);
										else p(e, function (a) {
											R(e, a, c)
										});
									return c.call(a, b, e)
								};
							b.parse = function (a, b) {
								var c, d;
								return K = 0, L = "" + a, c = Q(P()), "$" != P() && O(), K = L = null, b && s.call(b) == u ? S((d = {}, d[""] = c, d), "", b) : c
							}
						}
					}
					return b.runInContext = e, b
				}
				var f = "function" == typeof d && d.amd,
					g = {
						function: !0,
						object: !0
					},
					h = g[typeof b] && b && !b.nodeType && b,
					i = g[typeof window] && window || this,
					j = h && g[typeof a] && a && !a.nodeType && "object" == typeof c && c;
				if (!j || j.global !== j && j.window !== j && j.self !== j || (i = j), h && !f) e(i, h);
				else {
					var k = i.JSON,
						l = i.JSON3,
						m = !1,
						n = e(i, i.JSON3 = {
							noConflict: function () {
								return m || (m = !0, i.JSON = k, i.JSON3 = l, k = l = null), n
							}
						});
					i.JSON = {
						parse: n.parse,
						stringify: n.stringify
					}
				}
				f && d(function () {
					return n
				})
			}).call(this)
		}).call(b, c(12)(a), function () {
			return this
		}())
	}, function (a, b) {
		a.exports = function (a) {
			return a.webpackPolyfill || (a.deprecate = function () {}, a.paths = [], a.children = [], a.webpackPolyfill = 1), a
		}
	}, function (a, b) {
		function c(a) {
			if (a) return d(a)
		}

		function d(a) {
			for (var b in c.prototype) a[b] = c.prototype[b];
			return a
		}
		a.exports = c, c.prototype.on = c.prototype.addEventListener = function (a, b) {
			return this._callbacks = this._callbacks || {}, (this._callbacks[a] = this._callbacks[a] || []).push(b), this
		}, c.prototype.once = function (a, b) {
			function c() {
				d.off(a, c), b.apply(this, arguments)
			}
			var d = this;
			return this._callbacks = this._callbacks || {}, c.fn = b, this.on(a, c), this
		}, c.prototype.off = c.prototype.removeListener = c.prototype.removeAllListeners = c.prototype.removeEventListener = function (a, b) {
			if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
			var c = this._callbacks[a];
			if (!c) return this;
			if (1 == arguments.length) return delete this._callbacks[a], this;
			for (var d, e = 0; e < c.length; e++)
				if (d = c[e], d === b || d.fn === b) {
					c.splice(e, 1);
					break
				}
			return this
		}, c.prototype.emit = function (a) {
			this._callbacks = this._callbacks || {};
			var b = [].slice.call(arguments, 1),
				c = this._callbacks[a];
			if (c) {
				c = c.slice(0);
				for (var d = 0, e = c.length; d < e; ++d) c[d].apply(this, b)
			}
			return this
		}, c.prototype.listeners = function (a) {
			return this._callbacks = this._callbacks || {}, this._callbacks[a] || []
		}, c.prototype.hasListeners = function (a) {
			return !!this.listeners(a).length
		}
	}, function (a, b, c) {
		(function (a) {
			var d = c(15),
				e = c(16);
			b.deconstructPacket = function (a) {
				function b(a) {
					if (!a) return a;
					if (e(a)) {
						var f = {
							_placeholder: !0,
							num: c.length
						};
						return c.push(a), f
					}
					if (d(a)) {
						for (var g = new Array(a.length), h = 0; h < a.length; h++) g[h] = b(a[h]);
						return g
					}
					if ("object" == typeof a && !(a instanceof Date)) {
						var g = {};
						for (var i in a) g[i] = b(a[i]);
						return g
					}
					return a
				}
				var c = [],
					f = a.data,
					g = a;
				return g.data = b(f), g.attachments = c.length, {
					packet: g,
					buffers: c
				}
			}, b.reconstructPacket = function (a, b) {
				function c(a) {
					if (a && a._placeholder) {
						var e = b[a.num];
						return e
					}
					if (d(a)) {
						for (var f = 0; f < a.length; f++) a[f] = c(a[f]);
						return a
					}
					if (a && "object" == typeof a) {
						for (var g in a) a[g] = c(a[g]);
						return a
					}
					return a
				}
				return a.data = c(a.data), a.attachments = void 0, a
			}, b.removeBlobs = function (b, c) {
				function f(b, i, j) {
					if (!b) return b;
					if (a.Blob && b instanceof Blob || a.File && b instanceof File) {
						g++;
						var k = new FileReader;
						k.onload = function () {
							j ? j[i] = this.result : h = this.result, --g || c(h)
						}, k.readAsArrayBuffer(b)
					} else if (d(b))
						for (var l = 0; l < b.length; l++) f(b[l], l, b);
					else if (b && "object" == typeof b && !e(b))
						for (var m in b) f(b[m], m, b)
				}
				var g = 0,
					h = b;
				f(h), g || c(h)
			}
		}).call(b, function () {
			return this
		}())
	}, function (a, b) {
		a.exports = Array.isArray || function (a) {
			return "[object Array]" == Object.prototype.toString.call(a)
		}
	}, function (a, b) {
		(function (b) {
			function c(a) {
				return b.Buffer && b.Buffer.isBuffer(a) || b.ArrayBuffer && a instanceof ArrayBuffer
			}
			a.exports = c
		}).call(b, function () {
			return this
		}())
	}, function (a, b, c) {
		"use strict";

		function d(a, b) {
			return this instanceof d ? (a && "object" === ("undefined" == typeof a ? "undefined" : e(a)) && (b = a, a = void 0), b = b || {}, b.path = b.path || "/socket.io", this.nsps = {}, this.subs = [], this.opts = b, this.reconnection(b.reconnection !== !1), this.reconnectionAttempts(b.reconnectionAttempts || 1 / 0), this.reconnectionDelay(b.reconnectionDelay || 1e3), this.reconnectionDelayMax(b.reconnectionDelayMax || 5e3), this.randomizationFactor(b.randomizationFactor || .5), this.backoff = new n({
				min: this.reconnectionDelay(),
				max: this.reconnectionDelayMax(),
				jitter: this.randomizationFactor()
			}), this.timeout(null == b.timeout ? 2e4 : b.timeout), this.readyState = "closed", this.uri = a, this.connecting = [], this.lastPing = null, this.encoding = !1, this.packetBuffer = [], this.encoder = new i.Encoder, this.decoder = new i.Decoder, this.autoConnect = b.autoConnect !== !1, void(this.autoConnect && this.open())) : new d(a, b)
		}
		var e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (a) {
				return typeof a
			} : function (a) {
				return a && "function" == typeof Symbol && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a
			},
			f = c(18),
			g = c(44),
			h = c(35),
			i = c(7),
			j = c(46),
			k = c(47),
			l = c(3)("socket.io-client:manager"),
			m = c(42),
			n = c(48),
			o = Object.prototype.hasOwnProperty;
		a.exports = d, d.prototype.emitAll = function () {
			this.emit.apply(this, arguments);
			for (var a in this.nsps) o.call(this.nsps, a) && this.nsps[a].emit.apply(this.nsps[a], arguments)
		}, d.prototype.updateSocketIds = function () {
			for (var a in this.nsps) o.call(this.nsps, a) && (this.nsps[a].id = this.engine.id)
		}, h(d.prototype), d.prototype.reconnection = function (a) {
			return arguments.length ? (this._reconnection = !!a, this) : this._reconnection
		}, d.prototype.reconnectionAttempts = function (a) {
			return arguments.length ? (this._reconnectionAttempts = a, this) : this._reconnectionAttempts
		}, d.prototype.reconnectionDelay = function (a) {
			return arguments.length ? (this._reconnectionDelay = a, this.backoff && this.backoff.setMin(a), this) : this._reconnectionDelay
		}, d.prototype.randomizationFactor = function (a) {
			return arguments.length ? (this._randomizationFactor = a, this.backoff && this.backoff.setJitter(a), this) : this._randomizationFactor
		}, d.prototype.reconnectionDelayMax = function (a) {
			return arguments.length ? (this._reconnectionDelayMax = a, this.backoff && this.backoff.setMax(a), this) : this._reconnectionDelayMax
		}, d.prototype.timeout = function (a) {
			return arguments.length ? (this._timeout = a, this) : this._timeout
		}, d.prototype.maybeReconnectOnOpen = function () {
			!this.reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect()
		}, d.prototype.open = d.prototype.connect = function (a, b) {
			if (l("readyState %s", this.readyState), ~this.readyState.indexOf("open")) return this;
			l("opening %s", this.uri), this.engine = f(this.uri, this.opts);
			var c = this.engine,
				d = this;
			this.readyState = "opening", this.skipReconnect = !1;
			var e = j(c, "open", function () {
					d.onopen(), a && a()
				}),
				g = j(c, "error", function (b) {
					if (l("connect_error"), d.cleanup(), d.readyState = "closed", d.emitAll("connect_error", b), a) {
						var c = new Error("Connection error");
						c.data = b, a(c)
					} else d.maybeReconnectOnOpen()
				});
			if (!1 !== this._timeout) {
				var h = this._timeout;
				l("connect attempt will timeout after %d", h);
				var i = setTimeout(function () {
					l("connect attempt timed out after %d", h), e.destroy(), c.close(), c.emit("error", "timeout"), d.emitAll("connect_timeout", h)
				}, h);
				this.subs.push({
					destroy: function () {
						clearTimeout(i)
					}
				})
			}
			return this.subs.push(e), this.subs.push(g), this
		}, d.prototype.onopen = function () {
			l("open"), this.cleanup(), this.readyState = "open", this.emit("open");
			var a = this.engine;
			this.subs.push(j(a, "data", k(this, "ondata"))), this.subs.push(j(a, "ping", k(this, "onping"))), this.subs.push(j(a, "pong", k(this, "onpong"))), this.subs.push(j(a, "error", k(this, "onerror"))), this.subs.push(j(a, "close", k(this, "onclose"))), this.subs.push(j(this.decoder, "decoded", k(this, "ondecoded")))
		}, d.prototype.onping = function () {
			this.lastPing = new Date, this.emitAll("ping")
		}, d.prototype.onpong = function () {
			this.emitAll("pong", new Date - this.lastPing)
		}, d.prototype.ondata = function (a) {
			this.decoder.add(a)
		}, d.prototype.ondecoded = function (a) {
			this.emit("packet", a)
		}, d.prototype.onerror = function (a) {
			l("error", a), this.emitAll("error", a)
		}, d.prototype.socket = function (a, b) {
			function c() {
				~m(e.connecting, d) || e.connecting.push(d)
			}
			var d = this.nsps[a];
			if (!d) {
				d = new g(this, a, b), this.nsps[a] = d;
				var e = this;
				d.on("connecting", c), d.on("connect", function () {
					d.id = e.engine.id
				}), this.autoConnect && c()
			}
			return d
		}, d.prototype.destroy = function (a) {
			var b = m(this.connecting, a);
			~b && this.connecting.splice(b, 1), this.connecting.length || this.close()
		}, d.prototype.packet = function (a) {
			l("writing packet %j", a);
			var b = this;
			a.query && 0 === a.type && (a.nsp += "?" + a.query), b.encoding ? b.packetBuffer.push(a) : (b.encoding = !0, this.encoder.encode(a, function (c) {
				for (var d = 0; d < c.length; d++) b.engine.write(c[d], a.options);
				b.encoding = !1, b.processPacketQueue()
			}))
		}, d.prototype.processPacketQueue = function () {
			if (this.packetBuffer.length > 0 && !this.encoding) {
				var a = this.packetBuffer.shift();
				this.packet(a)
			}
		}, d.prototype.cleanup = function () {
			l("cleanup");
			for (var a = this.subs.length, b = 0; b < a; b++) {
				var c = this.subs.shift();
				c.destroy()
			}
			this.packetBuffer = [], this.encoding = !1, this.lastPing = null, this.decoder.destroy()
		}, d.prototype.close = d.prototype.disconnect = function () {
			l("disconnect"), this.skipReconnect = !0, this.reconnecting = !1, "opening" === this.readyState && this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.engine && this.engine.close()
		}, d.prototype.onclose = function (a) {
			l("onclose"), this.cleanup(), this.backoff.reset(), this.readyState = "closed", this.emit("close", a), this._reconnection && !this.skipReconnect && this.reconnect()
		}, d.prototype.reconnect = function () {
			if (this.reconnecting || this.skipReconnect) return this;
			var a = this;
			if (this.backoff.attempts >= this._reconnectionAttempts) l("reconnect failed"), this.backoff.reset(), this.emitAll("reconnect_failed"), this.reconnecting = !1;
			else {
				var b = this.backoff.duration();
				l("will wait %dms before reconnect attempt", b), this.reconnecting = !0;
				var c = setTimeout(function () {
					a.skipReconnect || (l("attempting reconnect"), a.emitAll("reconnect_attempt", a.backoff.attempts), a.emitAll("reconnecting", a.backoff.attempts), a.skipReconnect || a.open(function (b) {
						b ? (l("reconnect attempt error"), a.reconnecting = !1, a.reconnect(), a.emitAll("reconnect_error", b.data)) : (l("reconnect success"), a.onreconnect())
					}))
				}, b);
				this.subs.push({
					destroy: function () {
						clearTimeout(c)
					}
				})
			}
		}, d.prototype.onreconnect = function () {
			var a = this.backoff.attempts;
			this.reconnecting = !1, this.backoff.reset(), this.updateSocketIds(), this.emitAll("reconnect", a)
		}
	}, function (a, b, c) {
		a.exports = c(19)
	}, function (a, b, c) {
		a.exports = c(20), a.exports.parser = c(27)
	}, function (a, b, c) {
		(function (b) {
			function d(a, c) {
				if (!(this instanceof d)) return new d(a, c);
				c = c || {}, a && "object" == typeof a && (c = a, a = null), a ? (a = k(a), c.hostname = a.host, c.secure = "https" === a.protocol || "wss" === a.protocol, c.port = a.port, a.query && (c.query = a.query)) : c.host && (c.hostname = k(c.host).host), this.secure = null != c.secure ? c.secure : b.location && "https:" === location.protocol, c.hostname && !c.port && (c.port = this.secure ? "443" : "80"), this.agent = c.agent || !1, this.hostname = c.hostname || (b.location ? location.hostname : "localhost"), this.port = c.port || (b.location && location.port ? location.port : this.secure ? 443 : 80), this.query = c.query || {}, "string" == typeof this.query && (this.query = m.decode(this.query)), this.upgrade = !1 !== c.upgrade, this.path = (c.path || "/engine.io").replace(/\/$/, "") + "/", this.forceJSONP = !!c.forceJSONP, this.jsonp = !1 !== c.jsonp, this.forceBase64 = !!c.forceBase64, this.enablesXDR = !!c.enablesXDR, this.timestampParam = c.timestampParam || "t", this.timestampRequests = c.timestampRequests, this.transports = c.transports || ["polling", "websocket"], this.readyState = "", this.writeBuffer = [], this.prevBufferLen = 0, this.policyPort = c.policyPort || 843, this.rememberUpgrade = c.rememberUpgrade || !1, this.binaryType = null, this.onlyBinaryUpgrades = c.onlyBinaryUpgrades, this.perMessageDeflate = !1 !== c.perMessageDeflate && (c.perMessageDeflate || {}), !0 === this.perMessageDeflate && (this.perMessageDeflate = {}), this.perMessageDeflate && null == this.perMessageDeflate.threshold && (this.perMessageDeflate.threshold = 1024), this.pfx = c.pfx || null, this.key = c.key || null, this.passphrase = c.passphrase || null, this.cert = c.cert || null, this.ca = c.ca || null, this.ciphers = c.ciphers || null, this.rejectUnauthorized = void 0 === c.rejectUnauthorized ? null : c.rejectUnauthorized, this.forceNode = !!c.forceNode;
				var e = "object" == typeof b && b;
				e.global === e && (c.extraHeaders && Object.keys(c.extraHeaders).length > 0 && (this.extraHeaders = c.extraHeaders), c.localAddress && (this.localAddress = c.localAddress)), this.id = null, this.upgrades = null, this.pingInterval = null, this.pingTimeout = null, this.pingIntervalTimer = null, this.pingTimeoutTimer = null, this.open()
			}

			function e(a) {
				var b = {};
				for (var c in a) a.hasOwnProperty(c) && (b[c] = a[c]);
				return b
			}
			var f = c(21),
				g = c(35),
				h = c(3)("engine.io-client:socket"),
				i = c(42),
				j = c(27),
				k = c(2),
				l = c(43),
				m = c(36);
			a.exports = d, d.priorWebsocketSuccess = !1, g(d.prototype), d.protocol = j.protocol, d.Socket = d, d.Transport = c(26), d.transports = c(21), d.parser = c(27), d.prototype.createTransport = function (a) {
				h('creating transport "%s"', a);
				var b = e(this.query);
				b.EIO = j.protocol, b.transport = a, this.id && (b.sid = this.id);
				var c = new f[a]({
					agent: this.agent,
					hostname: this.hostname,
					port: this.port,
					secure: this.secure,
					path: this.path,
					query: b,
					forceJSONP: this.forceJSONP,
					jsonp: this.jsonp,
					forceBase64: this.forceBase64,
					enablesXDR: this.enablesXDR,
					timestampRequests: this.timestampRequests,
					timestampParam: this.timestampParam,
					policyPort: this.policyPort,
					socket: this,
					pfx: this.pfx,
					key: this.key,
					passphrase: this.passphrase,
					cert: this.cert,
					ca: this.ca,
					ciphers: this.ciphers,
					rejectUnauthorized: this.rejectUnauthorized,
					perMessageDeflate: this.perMessageDeflate,
					extraHeaders: this.extraHeaders,
					forceNode: this.forceNode,
					localAddress: this.localAddress
				});
				return c
			}, d.prototype.open = function () {
				var a;
				if (this.rememberUpgrade && d.priorWebsocketSuccess && this.transports.indexOf("websocket") !== -1) a = "websocket";
				else {
					if (0 === this.transports.length) {
						var b = this;
						return void setTimeout(function () {
							b.emit("error", "No transports available")
						}, 0)
					}
					a = this.transports[0]
				}
				this.readyState = "opening";
				try {
					a = this.createTransport(a)
				} catch (a) {
					return this.transports.shift(), void this.open()
				}
				a.open(), this.setTransport(a)
			}, d.prototype.setTransport = function (a) {
				h("setting transport %s", a.name);
				var b = this;
				this.transport && (h("clearing existing transport %s", this.transport.name), this.transport.removeAllListeners()), this.transport = a, a.on("drain", function () {
					b.onDrain()
				}).on("packet", function (a) {
					b.onPacket(a)
				}).on("error", function (a) {
					b.onError(a)
				}).on("close", function () {
					b.onClose("transport close")
				})
			}, d.prototype.probe = function (a) {
				function b() {
					if (m.onlyBinaryUpgrades) {
						var b = !this.supportsBinary && m.transport.supportsBinary;
						l = l || b
					}
					l || (h('probe transport "%s" opened', a), k.send([{
						type: "ping",
						data: "probe"
					}]), k.once("packet", function (b) {
						if (!l)
							if ("pong" === b.type && "probe" === b.data) {
								if (h('probe transport "%s" pong', a), m.upgrading = !0, m.emit("upgrading", k), !k) return;
								d.priorWebsocketSuccess = "websocket" === k.name, h('pausing current transport "%s"', m.transport.name), m.transport.pause(function () {
									l || "closed" !== m.readyState && (h("changing transport and sending upgrade packet"), j(), m.setTransport(k), k.send([{
										type: "upgrade"
									}]), m.emit("upgrade", k), k = null, m.upgrading = !1, m.flush())
								})
							} else {
								h('probe transport "%s" failed', a);
								var c = new Error("probe error");
								c.transport = k.name, m.emit("upgradeError", c)
							}
					}))
				}

				function c() {
					l || (l = !0, j(), k.close(), k = null)
				}

				function e(b) {
					var d = new Error("probe error: " + b);
					d.transport = k.name, c(), h('probe transport "%s" failed because of error: %s', a, b), m.emit("upgradeError", d)
				}

				function f() {
					e("transport closed")
				}

				function g() {
					e("socket closed")
				}

				function i(a) {
					k && a.name !== k.name && (h('"%s" works - aborting "%s"', a.name, k.name), c())
				}

				function j() {
					k.removeListener("open", b), k.removeListener("error", e), k.removeListener("close", f), m.removeListener("close", g), m.removeListener("upgrading", i)
				}
				h('probing transport "%s"', a);
				var k = this.createTransport(a, {
						probe: 1
					}),
					l = !1,
					m = this;
				d.priorWebsocketSuccess = !1, k.once("open", b), k.once("error", e), k.once("close", f), this.once("close", g), this.once("upgrading", i), k.open()
			}, d.prototype.onOpen = function () {
				if (h("socket open"), this.readyState = "open", d.priorWebsocketSuccess = "websocket" === this.transport.name, this.emit("open"), this.flush(), "open" === this.readyState && this.upgrade && this.transport.pause) {
					h("starting upgrade probes");
					for (var a = 0, b = this.upgrades.length; a < b; a++) this.probe(this.upgrades[a])
				}
			}, d.prototype.onPacket = function (a) {
				if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) switch (h('socket receive: type "%s", data "%s"', a.type, a.data), this.emit("packet", a), this.emit("heartbeat"), a.type) {
					case "open":
						this.onHandshake(l(a.data));
						break;
					case "pong":
						this.setPing(), this.emit("pong");
						break;
					case "error":
						var b = new Error("server error");
						b.code = a.data, this.onError(b);
						break;
					case "message":
						this.emit("data", a.data), this.emit("message", a.data)
				} else h('packet received with socket readyState "%s"', this.readyState)
			}, d.prototype.onHandshake = function (a) {
				this.emit("handshake", a), this.id = a.sid, this.transport.query.sid = a.sid, this.upgrades = this.filterUpgrades(a.upgrades), this.pingInterval = a.pingInterval, this.pingTimeout = a.pingTimeout, this.onOpen(), "closed" !== this.readyState && (this.setPing(), this.removeListener("heartbeat", this.onHeartbeat), this.on("heartbeat", this.onHeartbeat))
			}, d.prototype.onHeartbeat = function (a) {
				clearTimeout(this.pingTimeoutTimer);
				var b = this;
				b.pingTimeoutTimer = setTimeout(function () {
					"closed" !== b.readyState && b.onClose("ping timeout")
				}, a || b.pingInterval + b.pingTimeout)
			}, d.prototype.setPing = function () {
				var a = this;
				clearTimeout(a.pingIntervalTimer), a.pingIntervalTimer = setTimeout(function () {
					h("writing ping packet - expecting pong within %sms", a.pingTimeout), a.ping(), a.onHeartbeat(a.pingTimeout)
				}, a.pingInterval)
			}, d.prototype.ping = function () {
				var a = this;
				this.sendPacket("ping", function () {
					a.emit("ping")
				})
			}, d.prototype.onDrain = function () {
				this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emit("drain") : this.flush()
			}, d.prototype.flush = function () {
				"closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length && (h("flushing %d packets in socket", this.writeBuffer.length), this.transport.send(this.writeBuffer), this.prevBufferLen = this.writeBuffer.length, this.emit("flush"))
			}, d.prototype.write = d.prototype.send = function (a, b, c) {
				return this.sendPacket("message", a, b, c), this
			}, d.prototype.sendPacket = function (a, b, c, d) {
				if ("function" == typeof b && (d = b, b = void 0), "function" == typeof c && (d = c, c = null), "closing" !== this.readyState && "closed" !== this.readyState) {
					c = c || {}, c.compress = !1 !== c.compress;
					var e = {
						type: a,
						data: b,
						options: c
					};
					this.emit("packetCreate", e), this.writeBuffer.push(e), d && this.once("flush", d), this.flush()
				}
			}, d.prototype.close = function () {
				function a() {
					d.onClose("forced close"), h("socket closing - telling transport to close"), d.transport.close()
				}

				function b() {
					d.removeListener("upgrade", b), d.removeListener("upgradeError", b), a()
				}

				function c() {
					d.once("upgrade", b), d.once("upgradeError", b)
				}
				if ("opening" === this.readyState || "open" === this.readyState) {
					this.readyState = "closing";
					var d = this;
					this.writeBuffer.length ? this.once("drain", function () {
						this.upgrading ? c() : a()
					}) : this.upgrading ? c() : a()
				}
				return this
			}, d.prototype.onError = function (a) {
				h("socket error %j", a), d.priorWebsocketSuccess = !1, this.emit("error", a), this.onClose("transport error", a)
			}, d.prototype.onClose = function (a, b) {
				if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) {
					h('socket close with reason: "%s"', a);
					var c = this;
					clearTimeout(this.pingIntervalTimer), clearTimeout(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), this.readyState = "closed", this.id = null, this.emit("close", a, b), c.writeBuffer = [], c.prevBufferLen = 0
				}
			}, d.prototype.filterUpgrades = function (a) {
				for (var b = [], c = 0, d = a.length; c < d; c++) ~i(this.transports, a[c]) && b.push(a[c]);
				return b
			}
		}).call(b, function () {
			return this
		}())
	}, function (a, b, c) {
		(function (a) {
			function d(b) {
				var c, d = !1,
					h = !1,
					i = !1 !== b.jsonp;
				if (a.location) {
					var j = "https:" === location.protocol,
						k = location.port;
					k || (k = j ? 443 : 80), d = b.hostname !== location.hostname || k !== b.port, h = b.secure !== j
				}
				if (b.xdomain = d, b.xscheme = h, c = new e(b), "open" in c && !b.forceJSONP) return new f(b);
				if (!i) throw new Error("JSONP disabled");
				return new g(b)
			}
			var e = c(22),
				f = c(24),
				g = c(39),
				h = c(40);
			b.polling = d, b.websocket = h
		}).call(b, function () {
			return this
		}())
	}, function (a, b, c) {
		(function (b) {
			var d = c(23);
			a.exports = function (a) {
				var c = a.xdomain,
					e = a.xscheme,
					f = a.enablesXDR;
				try {
					if ("undefined" != typeof XMLHttpRequest && (!c || d)) return new XMLHttpRequest
				} catch (a) {}
				try {
					if ("undefined" != typeof XDomainRequest && !e && f) return new XDomainRequest
				} catch (a) {}
				if (!c) try {
					return new(b[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP")
				} catch (a) {}
			}
		}).call(b, function () {
			return this
		}())
	}, function (a, b) {
		try {
			a.exports = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest
		} catch (b) {
			a.exports = !1
		}
	}, function (a, b, c) {
		(function (b) {
			function d() {}

			function e(a) {
				if (i.call(this, a), this.requestTimeout = a.requestTimeout, b.location) {
					var c = "https:" === location.protocol,
						d = location.port;
					d || (d = c ? 443 : 80), this.xd = a.hostname !== b.location.hostname || d !== a.port, this.xs = a.secure !== c
				} else this.extraHeaders = a.extraHeaders
			}

			function f(a) {
				this.method = a.method || "GET", this.uri = a.uri, this.xd = !!a.xd, this.xs = !!a.xs, this.async = !1 !== a.async, this.data = void 0 !== a.data ? a.data : null, this.agent = a.agent, this.isBinary = a.isBinary, this.supportsBinary = a.supportsBinary, this.enablesXDR = a.enablesXDR,
					this.requestTimeout = a.requestTimeout, this.pfx = a.pfx, this.key = a.key, this.passphrase = a.passphrase, this.cert = a.cert, this.ca = a.ca, this.ciphers = a.ciphers, this.rejectUnauthorized = a.rejectUnauthorized, this.extraHeaders = a.extraHeaders, this.create()
			}

			function g() {
				for (var a in f.requests) f.requests.hasOwnProperty(a) && f.requests[a].abort()
			}
			var h = c(22),
				i = c(25),
				j = c(35),
				k = c(37),
				l = c(3)("engine.io-client:polling-xhr");
			a.exports = e, a.exports.Request = f, k(e, i), e.prototype.supportsBinary = !0, e.prototype.request = function (a) {
				return a = a || {}, a.uri = this.uri(), a.xd = this.xd, a.xs = this.xs, a.agent = this.agent || !1, a.supportsBinary = this.supportsBinary, a.enablesXDR = this.enablesXDR, a.pfx = this.pfx, a.key = this.key, a.passphrase = this.passphrase, a.cert = this.cert, a.ca = this.ca, a.ciphers = this.ciphers, a.rejectUnauthorized = this.rejectUnauthorized, a.requestTimeout = this.requestTimeout, a.extraHeaders = this.extraHeaders, new f(a)
			}, e.prototype.doWrite = function (a, b) {
				var c = "string" != typeof a && void 0 !== a,
					d = this.request({
						method: "POST",
						data: a,
						isBinary: c
					}),
					e = this;
				d.on("success", b), d.on("error", function (a) {
					e.onError("xhr post error", a)
				}), this.sendXhr = d
			}, e.prototype.doPoll = function () {
				l("xhr poll");
				var a = this.request(),
					b = this;
				a.on("data", function (a) {
					b.onData(a)
				}), a.on("error", function (a) {
					b.onError("xhr poll error", a)
				}), this.pollXhr = a
			}, j(f.prototype), f.prototype.create = function () {
				var a = {
					agent: this.agent,
					xdomain: this.xd,
					xscheme: this.xs,
					enablesXDR: this.enablesXDR
				};
				a.pfx = this.pfx, a.key = this.key, a.passphrase = this.passphrase, a.cert = this.cert, a.ca = this.ca, a.ciphers = this.ciphers, a.rejectUnauthorized = this.rejectUnauthorized;
				var c = this.xhr = new h(a),
					d = this;
				try {
					l("xhr open %s: %s", this.method, this.uri), c.open(this.method, this.uri, this.async);
					try {
						if (this.extraHeaders) {
							c.setDisableHeaderCheck(!0);
							for (var e in this.extraHeaders) this.extraHeaders.hasOwnProperty(e) && c.setRequestHeader(e, this.extraHeaders[e])
						}
					} catch (a) {}
					if (this.supportsBinary && (c.responseType = "arraybuffer"), "POST" === this.method) try {
						this.isBinary ? c.setRequestHeader("Content-type", "application/octet-stream") : c.setRequestHeader("Content-type", "text/plain;charset=UTF-8")
					} catch (a) {}
					try {
						c.setRequestHeader("Accept", "*/*")
					} catch (a) {}
					"withCredentials" in c && (c.withCredentials = !0), this.requestTimeout && (c.timeout = this.requestTimeout), this.hasXDR() ? (c.onload = function () {
						d.onLoad()
					}, c.onerror = function () {
						d.onError(c.responseText)
					}) : c.onreadystatechange = function () {
						4 === c.readyState && (200 === c.status || 1223 === c.status ? d.onLoad() : setTimeout(function () {
							d.onError(c.status)
						}, 0))
					}, l("xhr data %s", this.data), c.send(this.data)
				} catch (a) {
					return void setTimeout(function () {
						d.onError(a)
					}, 0)
				}
				b.document && (this.index = f.requestsCount++, f.requests[this.index] = this)
			}, f.prototype.onSuccess = function () {
				this.emit("success"), this.cleanup()
			}, f.prototype.onData = function (a) {
				this.emit("data", a), this.onSuccess()
			}, f.prototype.onError = function (a) {
				this.emit("error", a), this.cleanup(!0)
			}, f.prototype.cleanup = function (a) {
				if ("undefined" != typeof this.xhr && null !== this.xhr) {
					if (this.hasXDR() ? this.xhr.onload = this.xhr.onerror = d : this.xhr.onreadystatechange = d, a) try {
						this.xhr.abort()
					} catch (a) {}
					b.document && delete f.requests[this.index], this.xhr = null
				}
			}, f.prototype.onLoad = function () {
				var a;
				try {
					var b;
					try {
						b = this.xhr.getResponseHeader("Content-Type").split(";")[0]
					} catch (a) {}
					if ("application/octet-stream" === b) a = this.xhr.response || this.xhr.responseText;
					else if (this.supportsBinary) try {
						a = String.fromCharCode.apply(null, new Uint8Array(this.xhr.response))
					} catch (b) {
						for (var c = new Uint8Array(this.xhr.response), d = [], e = 0, f = c.length; e < f; e++) d.push(c[e]);
						a = String.fromCharCode.apply(null, d)
					} else a = this.xhr.responseText
				} catch (a) {
					this.onError(a)
				}
				null != a && this.onData(a)
			}, f.prototype.hasXDR = function () {
				return "undefined" != typeof b.XDomainRequest && !this.xs && this.enablesXDR
			}, f.prototype.abort = function () {
				this.cleanup()
			}, f.requestsCount = 0, f.requests = {}, b.document && (b.attachEvent ? b.attachEvent("onunload", g) : b.addEventListener && b.addEventListener("beforeunload", g, !1))
		}).call(b, function () {
			return this
		}())
	}, function (a, b, c) {
		function d(a) {
			var b = a && a.forceBase64;
			k && !b || (this.supportsBinary = !1), e.call(this, a)
		}
		var e = c(26),
			f = c(36),
			g = c(27),
			h = c(37),
			i = c(38),
			j = c(3)("engine.io-client:polling");
		a.exports = d;
		var k = function () {
			var a = c(22),
				b = new a({
					xdomain: !1
				});
			return null != b.responseType
		}();
		h(d, e), d.prototype.name = "polling", d.prototype.doOpen = function () {
			this.poll()
		}, d.prototype.pause = function (a) {
			function b() {
				j("paused"), c.readyState = "paused", a()
			}
			var c = this;
			if (this.readyState = "pausing", this.polling || !this.writable) {
				var d = 0;
				this.polling && (j("we are currently polling - waiting to pause"), d++, this.once("pollComplete", function () {
					j("pre-pause polling complete"), --d || b()
				})), this.writable || (j("we are currently writing - waiting to pause"), d++, this.once("drain", function () {
					j("pre-pause writing complete"), --d || b()
				}))
			} else b()
		}, d.prototype.poll = function () {
			j("polling"), this.polling = !0, this.doPoll(), this.emit("poll")
		}, d.prototype.onData = function (a) {
			var b = this;
			j("polling got data %s", a);
			var c = function (a, c, d) {
				return "opening" === b.readyState && b.onOpen(), "close" === a.type ? (b.onClose(), !1) : void b.onPacket(a)
			};
			g.decodePayload(a, this.socket.binaryType, c), "closed" !== this.readyState && (this.polling = !1, this.emit("pollComplete"), "open" === this.readyState ? this.poll() : j('ignoring poll - transport state "%s"', this.readyState))
		}, d.prototype.doClose = function () {
			function a() {
				j("writing close packet"), b.write([{
					type: "close"
				}])
			}
			var b = this;
			"open" === this.readyState ? (j("transport open - closing"), a()) : (j("transport not open - deferring close"), this.once("open", a))
		}, d.prototype.write = function (a) {
			var b = this;
			this.writable = !1;
			var c = function () {
				b.writable = !0, b.emit("drain")
			};
			g.encodePayload(a, this.supportsBinary, function (a) {
				b.doWrite(a, c)
			})
		}, d.prototype.uri = function () {
			var a = this.query || {},
				b = this.secure ? "https" : "http",
				c = "";
			!1 !== this.timestampRequests && (a[this.timestampParam] = i()), this.supportsBinary || a.sid || (a.b64 = 1), a = f.encode(a), this.port && ("https" === b && 443 !== Number(this.port) || "http" === b && 80 !== Number(this.port)) && (c = ":" + this.port), a.length && (a = "?" + a);
			var d = this.hostname.indexOf(":") !== -1;
			return b + "://" + (d ? "[" + this.hostname + "]" : this.hostname) + c + this.path + a
		}
	}, function (a, b, c) {
		function d(a) {
			this.path = a.path, this.hostname = a.hostname, this.port = a.port, this.secure = a.secure, this.query = a.query, this.timestampParam = a.timestampParam, this.timestampRequests = a.timestampRequests, this.readyState = "", this.agent = a.agent || !1, this.socket = a.socket, this.enablesXDR = a.enablesXDR, this.pfx = a.pfx, this.key = a.key, this.passphrase = a.passphrase, this.cert = a.cert, this.ca = a.ca, this.ciphers = a.ciphers, this.rejectUnauthorized = a.rejectUnauthorized, this.forceNode = a.forceNode, this.extraHeaders = a.extraHeaders, this.localAddress = a.localAddress
		}
		var e = c(27),
			f = c(35);
		a.exports = d, f(d.prototype), d.prototype.onError = function (a, b) {
			var c = new Error(a);
			return c.type = "TransportError", c.description = b, this.emit("error", c), this
		}, d.prototype.open = function () {
			return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening", this.doOpen()), this
		}, d.prototype.close = function () {
			return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), this.onClose()), this
		}, d.prototype.send = function (a) {
			if ("open" !== this.readyState) throw new Error("Transport not open");
			this.write(a)
		}, d.prototype.onOpen = function () {
			this.readyState = "open", this.writable = !0, this.emit("open")
		}, d.prototype.onData = function (a) {
			var b = e.decodePacket(a, this.socket.binaryType);
			this.onPacket(b)
		}, d.prototype.onPacket = function (a) {
			this.emit("packet", a)
		}, d.prototype.onClose = function () {
			this.readyState = "closed", this.emit("close")
		}
	}, function (a, b, c) {
		(function (a) {
			function d(a, c) {
				var d = "b" + b.packets[a.type] + a.data.data;
				return c(d)
			}

			function e(a, c, d) {
				if (!c) return b.encodeBase64Packet(a, d);
				var e = a.data,
					f = new Uint8Array(e),
					g = new Uint8Array(1 + e.byteLength);
				g[0] = s[a.type];
				for (var h = 0; h < f.length; h++) g[h + 1] = f[h];
				return d(g.buffer)
			}

			function f(a, c, d) {
				if (!c) return b.encodeBase64Packet(a, d);
				var e = new FileReader;
				return e.onload = function () {
					a.data = e.result, b.encodePacket(a, c, !0, d)
				}, e.readAsArrayBuffer(a.data)
			}

			function g(a, c, d) {
				if (!c) return b.encodeBase64Packet(a, d);
				if (r) return f(a, c, d);
				var e = new Uint8Array(1);
				e[0] = s[a.type];
				var g = new v([e.buffer, a.data]);
				return d(g)
			}

			function h(a) {
				try {
					a = o.decode(a)
				} catch (a) {
					return !1
				}
				return a
			}

			function i(a, b, c) {
				for (var d = new Array(a.length), e = n(a.length, c), f = function (a, c, e) {
						b(c, function (b, c) {
							d[a] = c, e(b, d)
						})
					}, g = 0; g < a.length; g++) f(g, a[g], e)
			}
			var j, k = c(28),
				l = c(29),
				m = c(30),
				n = c(31),
				o = c(32);
			a && a.ArrayBuffer && (j = c(33));
			var p = "undefined" != typeof navigator && /Android/i.test(navigator.userAgent),
				q = "undefined" != typeof navigator && /PhantomJS/i.test(navigator.userAgent),
				r = p || q;
			b.protocol = 3;
			var s = b.packets = {
					open: 0,
					close: 1,
					ping: 2,
					pong: 3,
					message: 4,
					upgrade: 5,
					noop: 6
				},
				t = k(s),
				u = {
					type: "error",
					data: "parser error"
				},
				v = c(34);
			b.encodePacket = function (b, c, f, h) {
				"function" == typeof c && (h = c, c = !1), "function" == typeof f && (h = f, f = null);
				var i = void 0 === b.data ? void 0 : b.data.buffer || b.data;
				if (a.ArrayBuffer && i instanceof ArrayBuffer) return e(b, c, h);
				if (v && i instanceof a.Blob) return g(b, c, h);
				if (i && i.base64) return d(b, h);
				var j = s[b.type];
				return void 0 !== b.data && (j += f ? o.encode(String(b.data)) : String(b.data)), h("" + j)
			}, b.encodeBase64Packet = function (c, d) {
				var e = "b" + b.packets[c.type];
				if (v && c.data instanceof a.Blob) {
					var f = new FileReader;
					return f.onload = function () {
						var a = f.result.split(",")[1];
						d(e + a)
					}, f.readAsDataURL(c.data)
				}
				var g;
				try {
					g = String.fromCharCode.apply(null, new Uint8Array(c.data))
				} catch (a) {
					for (var h = new Uint8Array(c.data), i = new Array(h.length), j = 0; j < h.length; j++) i[j] = h[j];
					g = String.fromCharCode.apply(null, i)
				}
				return e += a.btoa(g), d(e)
			}, b.decodePacket = function (a, c, d) {
				if (void 0 === a) return u;
				if ("string" == typeof a) {
					if ("b" == a.charAt(0)) return b.decodeBase64Packet(a.substr(1), c);
					if (d && (a = h(a), a === !1)) return u;
					var e = a.charAt(0);
					return Number(e) == e && t[e] ? a.length > 1 ? {
						type: t[e],
						data: a.substring(1)
					} : {
						type: t[e]
					} : u
				}
				var f = new Uint8Array(a),
					e = f[0],
					g = m(a, 1);
				return v && "blob" === c && (g = new v([g])), {
					type: t[e],
					data: g
				}
			}, b.decodeBase64Packet = function (a, b) {
				var c = t[a.charAt(0)];
				if (!j) return {
					type: c,
					data: {
						base64: !0,
						data: a.substr(1)
					}
				};
				var d = j.decode(a.substr(1));
				return "blob" === b && v && (d = new v([d])), {
					type: c,
					data: d
				}
			}, b.encodePayload = function (a, c, d) {
				function e(a) {
					return a.length + ":" + a
				}

				function f(a, d) {
					b.encodePacket(a, !!g && c, !0, function (a) {
						d(null, e(a))
					})
				}
				"function" == typeof c && (d = c, c = null);
				var g = l(a);
				return c && g ? v && !r ? b.encodePayloadAsBlob(a, d) : b.encodePayloadAsArrayBuffer(a, d) : a.length ? void i(a, f, function (a, b) {
					return d(b.join(""))
				}) : d("0:")
			}, b.decodePayload = function (a, c, d) {
				if ("string" != typeof a) return b.decodePayloadAsBinary(a, c, d);
				"function" == typeof c && (d = c, c = null);
				var e;
				if ("" == a) return d(u, 0, 1);
				for (var f, g, h = "", i = 0, j = a.length; i < j; i++) {
					var k = a.charAt(i);
					if (":" != k) h += k;
					else {
						if ("" == h || h != (f = Number(h))) return d(u, 0, 1);
						if (g = a.substr(i + 1, f), h != g.length) return d(u, 0, 1);
						if (g.length) {
							if (e = b.decodePacket(g, c, !0), u.type == e.type && u.data == e.data) return d(u, 0, 1);
							var l = d(e, i + f, j);
							if (!1 === l) return
						}
						i += f, h = ""
					}
				}
				return "" != h ? d(u, 0, 1) : void 0
			}, b.encodePayloadAsArrayBuffer = function (a, c) {
				function d(a, c) {
					b.encodePacket(a, !0, !0, function (a) {
						return c(null, a)
					})
				}
				return a.length ? void i(a, d, function (a, b) {
					var d = b.reduce(function (a, b) {
							var c;
							return c = "string" == typeof b ? b.length : b.byteLength, a + c.toString().length + c + 2
						}, 0),
						e = new Uint8Array(d),
						f = 0;
					return b.forEach(function (a) {
						var b = "string" == typeof a,
							c = a;
						if (b) {
							for (var d = new Uint8Array(a.length), g = 0; g < a.length; g++) d[g] = a.charCodeAt(g);
							c = d.buffer
						}
						b ? e[f++] = 0 : e[f++] = 1;
						for (var h = c.byteLength.toString(), g = 0; g < h.length; g++) e[f++] = parseInt(h[g]);
						e[f++] = 255;
						for (var d = new Uint8Array(c), g = 0; g < d.length; g++) e[f++] = d[g]
					}), c(e.buffer)
				}) : c(new ArrayBuffer(0))
			}, b.encodePayloadAsBlob = function (a, c) {
				function d(a, c) {
					b.encodePacket(a, !0, !0, function (a) {
						var b = new Uint8Array(1);
						if (b[0] = 1, "string" == typeof a) {
							for (var d = new Uint8Array(a.length), e = 0; e < a.length; e++) d[e] = a.charCodeAt(e);
							a = d.buffer, b[0] = 0
						}
						for (var f = a instanceof ArrayBuffer ? a.byteLength : a.size, g = f.toString(), h = new Uint8Array(g.length + 1), e = 0; e < g.length; e++) h[e] = parseInt(g[e]);
						if (h[g.length] = 255, v) {
							var i = new v([b.buffer, h.buffer, a]);
							c(null, i)
						}
					})
				}
				i(a, d, function (a, b) {
					return c(new v(b))
				})
			}, b.decodePayloadAsBinary = function (a, c, d) {
				"function" == typeof c && (d = c, c = null);
				for (var e = a, f = [], g = !1; e.byteLength > 0;) {
					for (var h = new Uint8Array(e), i = 0 === h[0], j = "", k = 1; 255 != h[k]; k++) {
						if (j.length > 310) {
							g = !0;
							break
						}
						j += h[k]
					}
					if (g) return d(u, 0, 1);
					e = m(e, 2 + j.length), j = parseInt(j);
					var l = m(e, 0, j);
					if (i) try {
						l = String.fromCharCode.apply(null, new Uint8Array(l))
					} catch (a) {
						var n = new Uint8Array(l);
						l = "";
						for (var k = 0; k < n.length; k++) l += String.fromCharCode(n[k])
					}
					f.push(l), e = m(e, j)
				}
				var o = f.length;
				f.forEach(function (a, e) {
					d(b.decodePacket(a, c, !0), e, o)
				})
			}
		}).call(b, function () {
			return this
		}())
	}, function (a, b) {
		a.exports = Object.keys || function (a) {
			var b = [],
				c = Object.prototype.hasOwnProperty;
			for (var d in a) c.call(a, d) && b.push(d);
			return b
		}
	}, function (a, b, c) {
		(function (b) {
			function d(a) {
				function c(a) {
					if (!a) return !1;
					if (b.Buffer && b.Buffer.isBuffer && b.Buffer.isBuffer(a) || b.ArrayBuffer && a instanceof ArrayBuffer || b.Blob && a instanceof Blob || b.File && a instanceof File) return !0;
					if (e(a)) {
						for (var d = 0; d < a.length; d++)
							if (c(a[d])) return !0
					} else if (a && "object" == typeof a) {
						a.toJSON && "function" == typeof a.toJSON && (a = a.toJSON());
						for (var f in a)
							if (Object.prototype.hasOwnProperty.call(a, f) && c(a[f])) return !0
					}
					return !1
				}
				return c(a)
			}
			var e = c(15);
			a.exports = d
		}).call(b, function () {
			return this
		}())
	}, function (a, b) {
		a.exports = function (a, b, c) {
			var d = a.byteLength;
			if (b = b || 0, c = c || d, a.slice) return a.slice(b, c);
			if (b < 0 && (b += d), c < 0 && (c += d), c > d && (c = d), b >= d || b >= c || 0 === d) return new ArrayBuffer(0);
			for (var e = new Uint8Array(a), f = new Uint8Array(c - b), g = b, h = 0; g < c; g++, h++) f[h] = e[g];
			return f.buffer
		}
	}, function (a, b) {
		function c(a, b, c) {
			function e(a, d) {
				if (e.count <= 0) throw new Error("after called too many times");
				--e.count, a ? (f = !0, b(a), b = c) : 0 !== e.count || f || b(null, d)
			}
			var f = !1;
			return c = c || d, e.count = a, 0 === a ? b() : e
		}

		function d() {}
		a.exports = c
	}, function (a, b, c) {
		var d;
		(function (a, e) {
			! function (f) {
				function g(a) {
					for (var b, c, d = [], e = 0, f = a.length; e < f;) b = a.charCodeAt(e++), b >= 55296 && b <= 56319 && e < f ? (c = a.charCodeAt(e++), 56320 == (64512 & c) ? d.push(((1023 & b) << 10) + (1023 & c) + 65536) : (d.push(b), e--)) : d.push(b);
					return d
				}

				function h(a) {
					for (var b, c = a.length, d = -1, e = ""; ++d < c;) b = a[d], b > 65535 && (b -= 65536, e += t(b >>> 10 & 1023 | 55296), b = 56320 | 1023 & b), e += t(b);
					return e
				}

				function i(a, b) {
					return t(a >> b & 63 | 128)
				}

				function j(a) {
					if (0 == (4294967168 & a)) return t(a);
					var b = "";
					return 0 == (4294965248 & a) ? b = t(a >> 6 & 31 | 192) : 0 == (4294901760 & a) ? (b = t(a >> 12 & 15 | 224), b += i(a, 6)) : 0 == (4292870144 & a) && (b = t(a >> 18 & 7 | 240), b += i(a, 12), b += i(a, 6)), b += t(63 & a | 128)
				}

				function k(a) {
					for (var b, c = g(a), d = c.length, e = -1, f = ""; ++e < d;) b = c[e], f += j(b);
					return f
				}

				function l() {
					if (s >= r) throw Error("Invalid byte index");
					var a = 255 & q[s];
					if (s++, 128 == (192 & a)) return 63 & a;
					throw Error("Invalid continuation byte")
				}

				function m() {
					var a, b, c, d, e;
					if (s > r) throw Error("Invalid byte index");
					if (s == r) return !1;
					if (a = 255 & q[s], s++, 0 == (128 & a)) return a;
					if (192 == (224 & a)) {
						var b = l();
						if (e = (31 & a) << 6 | b, e >= 128) return e;
						throw Error("Invalid continuation byte")
					}
					if (224 == (240 & a)) {
						if (b = l(), c = l(), e = (15 & a) << 12 | b << 6 | c, e >= 2048) return e;
						throw Error("Invalid continuation byte")
					}
					if (240 == (248 & a) && (b = l(), c = l(), d = l(), e = (15 & a) << 18 | b << 12 | c << 6 | d, e >= 65536 && e <= 1114111)) return e;
					throw Error("Invalid WTF-8 detected")
				}

				function n(a) {
					q = g(a), r = q.length, s = 0;
					for (var b, c = [];
						(b = m()) !== !1;) c.push(b);
					return h(c)
				}
				var o = "object" == typeof b && b,
					p = ("object" == typeof a && a && a.exports == o && a, "object" == typeof e && e);
				p.global !== p && p.window !== p || (f = p);
				var q, r, s, t = String.fromCharCode,
					u = {
						version: "1.0.0",
						encode: k,
						decode: n
					};
				d = function () {
					return u
				}.call(b, c, b, a), !(void 0 !== d && (a.exports = d))
			}(this)
		}).call(b, c(12)(a), function () {
			return this
		}())
	}, function (a, b) {
		! function () {
			"use strict";
			for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", c = new Uint8Array(256), d = 0; d < a.length; d++) c[a.charCodeAt(d)] = d;
			b.encode = function (b) {
				var c, d = new Uint8Array(b),
					e = d.length,
					f = "";
				for (c = 0; c < e; c += 3) f += a[d[c] >> 2], f += a[(3 & d[c]) << 4 | d[c + 1] >> 4], f += a[(15 & d[c + 1]) << 2 | d[c + 2] >> 6], f += a[63 & d[c + 2]];
				return e % 3 === 2 ? f = f.substring(0, f.length - 1) + "=" : e % 3 === 1 && (f = f.substring(0, f.length - 2) + "=="), f
			}, b.decode = function (a) {
				var b, d, e, f, g, h = .75 * a.length,
					i = a.length,
					j = 0;
				"=" === a[a.length - 1] && (h--, "=" === a[a.length - 2] && h--);
				var k = new ArrayBuffer(h),
					l = new Uint8Array(k);
				for (b = 0; b < i; b += 4) d = c[a.charCodeAt(b)], e = c[a.charCodeAt(b + 1)], f = c[a.charCodeAt(b + 2)], g = c[a.charCodeAt(b + 3)], l[j++] = d << 2 | e >> 4, l[j++] = (15 & e) << 4 | f >> 2, l[j++] = (3 & f) << 6 | 63 & g;
				return k
			}
		}()
	}, function (a, b) {
		(function (b) {
			function c(a) {
				for (var b = 0; b < a.length; b++) {
					var c = a[b];
					if (c.buffer instanceof ArrayBuffer) {
						var d = c.buffer;
						if (c.byteLength !== d.byteLength) {
							var e = new Uint8Array(c.byteLength);
							e.set(new Uint8Array(d, c.byteOffset, c.byteLength)), d = e.buffer
						}
						a[b] = d
					}
				}
			}

			function d(a, b) {
				b = b || {};
				var d = new f;
				c(a);
				for (var e = 0; e < a.length; e++) d.append(a[e]);
				return b.type ? d.getBlob(b.type) : d.getBlob()
			}

			function e(a, b) {
				return c(a), new Blob(a, b || {})
			}
			var f = b.BlobBuilder || b.WebKitBlobBuilder || b.MSBlobBuilder || b.MozBlobBuilder,
				g = function () {
					try {
						var a = new Blob(["hi"]);
						return 2 === a.size
					} catch (a) {
						return !1
					}
				}(),
				h = g && function () {
					try {
						var a = new Blob([new Uint8Array([1, 2])]);
						return 2 === a.size
					} catch (a) {
						return !1
					}
				}(),
				i = f && f.prototype.append && f.prototype.getBlob;
			a.exports = function () {
				return g ? h ? b.Blob : e : i ? d : void 0
			}()
		}).call(b, function () {
			return this
		}())
	}, function (a, b, c) {
		function d(a) {
			if (a) return e(a)
		}

		function e(a) {
			for (var b in d.prototype) a[b] = d.prototype[b];
			return a
		}
		a.exports = d, d.prototype.on = d.prototype.addEventListener = function (a, b) {
			return this._callbacks = this._callbacks || {}, (this._callbacks["$" + a] = this._callbacks["$" + a] || []).push(b), this
		}, d.prototype.once = function (a, b) {
			function c() {
				this.off(a, c), b.apply(this, arguments)
			}
			return c.fn = b, this.on(a, c), this
		}, d.prototype.off = d.prototype.removeListener = d.prototype.removeAllListeners = d.prototype.removeEventListener = function (a, b) {
			if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this;
			var c = this._callbacks["$" + a];
			if (!c) return this;
			if (1 == arguments.length) return delete this._callbacks["$" + a], this;
			for (var d, e = 0; e < c.length; e++)
				if (d = c[e], d === b || d.fn === b) {
					c.splice(e, 1);
					break
				}
			return this
		}, d.prototype.emit = function (a) {
			this._callbacks = this._callbacks || {};
			var b = [].slice.call(arguments, 1),
				c = this._callbacks["$" + a];
			if (c) {
				c = c.slice(0);
				for (var d = 0, e = c.length; d < e; ++d) c[d].apply(this, b)
			}
			return this
		}, d.prototype.listeners = function (a) {
			return this._callbacks = this._callbacks || {}, this._callbacks["$" + a] || []
		}, d.prototype.hasListeners = function (a) {
			return !!this.listeners(a).length
		}
	}, function (a, b) {
		b.encode = function (a) {
			var b = "";
			for (var c in a) a.hasOwnProperty(c) && (b.length && (b += "&"), b += encodeURIComponent(c) + "=" + encodeURIComponent(a[c]));
			return b
		}, b.decode = function (a) {
			for (var b = {}, c = a.split("&"), d = 0, e = c.length; d < e; d++) {
				var f = c[d].split("=");
				b[decodeURIComponent(f[0])] = decodeURIComponent(f[1])
			}
			return b
		}
	}, function (a, b) {
		a.exports = function (a, b) {
			var c = function () {};
			c.prototype = b.prototype, a.prototype = new c, a.prototype.constructor = a
		}
	}, function (a, b) {
		"use strict";

		function c(a) {
			var b = "";
			do b = g[a % h] + b, a = Math.floor(a / h); while (a > 0);
			return b
		}

		function d(a) {
			var b = 0;
			for (k = 0; k < a.length; k++) b = b * h + i[a.charAt(k)];
			return b
		}

		function e() {
			var a = c(+new Date);
			return a !== f ? (j = 0, f = a) : a + "." + c(j++)
		}
		for (var f, g = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), h = 64, i = {}, j = 0, k = 0; k < h; k++) i[g[k]] = k;
		e.encode = c, e.decode = d, a.exports = e
	}, function (a, b, c) {
		(function (b) {
			function d() {}

			function e(a) {
				f.call(this, a), this.query = this.query || {}, h || (b.___eio || (b.___eio = []), h = b.___eio), this.index = h.length;
				var c = this;
				h.push(function (a) {
					c.onData(a)
				}), this.query.j = this.index, b.document && b.addEventListener && b.addEventListener("beforeunload", function () {
					c.script && (c.script.onerror = d)
				}, !1)
			}
			var f = c(25),
				g = c(37);
			a.exports = e;
			var h, i = /\n/g,
				j = /\\n/g;
			g(e, f), e.prototype.supportsBinary = !1, e.prototype.doClose = function () {
				this.script && (this.script.parentNode.removeChild(this.script), this.script = null), this.form && (this.form.parentNode.removeChild(this.form), this.form = null, this.iframe = null), f.prototype.doClose.call(this)
			}, e.prototype.doPoll = function () {
				var a = this,
					b = document.createElement("script");
				this.script && (this.script.parentNode.removeChild(this.script), this.script = null), b.async = !0, b.src = this.uri(), b.onerror = function (b) {
					a.onError("jsonp poll error", b)
				};
				var c = document.getElementsByTagName("script")[0];
				c ? c.parentNode.insertBefore(b, c) : (document.head || document.body).appendChild(b), this.script = b;
				var d = "undefined" != typeof navigator && /gecko/i.test(navigator.userAgent);
				d && setTimeout(function () {
					var a = document.createElement("iframe");
					document.body.appendChild(a), document.body.removeChild(a)
				}, 100)
			}, e.prototype.doWrite = function (a, b) {
				function c() {
					d(), b()
				}

				function d() {
					if (e.iframe) try {
						e.form.removeChild(e.iframe)
					} catch (a) {
						e.onError("jsonp polling iframe removal error", a)
					}
					try {
						var a = '<iframe src="javascript:0" name="' + e.iframeId + '">';
						f = document.createElement(a)
					} catch (a) {
						f = document.createElement("iframe"), f.name = e.iframeId, f.src = "javascript:0"
					}
					f.id = e.iframeId, e.form.appendChild(f), e.iframe = f
				}
				var e = this;
				if (!this.form) {
					var f, g = document.createElement("form"),
						h = document.createElement("textarea"),
						k = this.iframeId = "eio_iframe_" + this.index;
					g.className = "socketio", g.style.position = "absolute", g.style.top = "-1000px", g.style.left = "-1000px", g.target = k, g.method = "POST", g.setAttribute("accept-charset", "utf-8"), h.name = "d", g.appendChild(h), document.body.appendChild(g), this.form = g, this.area = h
				}
				this.form.action = this.uri(), d(), a = a.replace(j, "\\\n"), this.area.value = a.replace(i, "\\n");
				try {
					this.form.submit()
				} catch (a) {}
				this.iframe.attachEvent ? this.iframe.onreadystatechange = function () {
					"complete" === e.iframe.readyState && c()
				} : this.iframe.onload = c
			}
		}).call(b, function () {
			return this
		}())
	}, function (a, b, c) {
		(function (b) {
			function d(a) {
				var b = a && a.forceBase64;
				b && (this.supportsBinary = !1), this.perMessageDeflate = a.perMessageDeflate, this.usingBrowserWebSocket = l && !a.forceNode, this.usingBrowserWebSocket || (m = e), f.call(this, a)
			}
			var e, f = c(26),
				g = c(27),
				h = c(36),
				i = c(37),
				j = c(38),
				k = c(3)("engine.io-client:websocket"),
				l = b.WebSocket || b.MozWebSocket;
			if ("undefined" == typeof window) try {
				e = c(41)
			} catch (a) {}
			var m = l;
			m || "undefined" != typeof window || (m = e), a.exports = d, i(d, f), d.prototype.name = "websocket", d.prototype.supportsBinary = !0, d.prototype.doOpen = function () {
				if (this.check()) {
					var a = this.uri(),
						b = void 0,
						c = {
							agent: this.agent,
							perMessageDeflate: this.perMessageDeflate
						};
					c.pfx = this.pfx, c.key = this.key, c.passphrase = this.passphrase, c.cert = this.cert, c.ca = this.ca, c.ciphers = this.ciphers, c.rejectUnauthorized = this.rejectUnauthorized, this.extraHeaders && (c.headers = this.extraHeaders), this.localAddress && (c.localAddress = this.localAddress);
					try {
						this.ws = this.usingBrowserWebSocket ? new m(a) : new m(a, b, c)
					} catch (a) {
						return this.emit("error", a)
					}
					void 0 === this.ws.binaryType && (this.supportsBinary = !1), this.ws.supports && this.ws.supports.binary ? (this.supportsBinary = !0, this.ws.binaryType = "nodebuffer") : this.ws.binaryType = "arraybuffer", this.addEventListeners()
				}
			}, d.prototype.addEventListeners = function () {
				var a = this;
				this.ws.onopen = function () {
					a.onOpen()
				}, this.ws.onclose = function () {
					a.onClose()
				}, this.ws.onmessage = function (b) {
					a.onData(b.data)
				}, this.ws.onerror = function (b) {
					a.onError("websocket error", b)
				}
			}, d.prototype.write = function (a) {
				function c() {
					d.emit("flush"), setTimeout(function () {
						d.writable = !0, d.emit("drain")
					}, 0)
				}
				var d = this;
				this.writable = !1;
				for (var e = a.length, f = 0, h = e; f < h; f++) ! function (a) {
					g.encodePacket(a, d.supportsBinary, function (f) {
						if (!d.usingBrowserWebSocket) {
							var g = {};
							if (a.options && (g.compress = a.options.compress), d.perMessageDeflate) {
								var h = "string" == typeof f ? b.Buffer.byteLength(f) : f.length;
								h < d.perMessageDeflate.threshold && (g.compress = !1)
							}
						}
						try {
							d.usingBrowserWebSocket ? d.ws.send(f) : d.ws.send(f, g)
						} catch (a) {
							k("websocket closed before onclose event")
						}--e || c()
					})
				}(a[f])
			}, d.prototype.onClose = function () {
				f.prototype.onClose.call(this)
			}, d.prototype.doClose = function () {
				"undefined" != typeof this.ws && this.ws.close()
			}, d.prototype.uri = function () {
				var a = this.query || {},
					b = this.secure ? "wss" : "ws",
					c = "";
				this.port && ("wss" === b && 443 !== Number(this.port) || "ws" === b && 80 !== Number(this.port)) && (c = ":" + this.port), this.timestampRequests && (a[this.timestampParam] = j()), this.supportsBinary || (a.b64 = 1), a = h.encode(a), a.length && (a = "?" + a);
				var d = this.hostname.indexOf(":") !== -1;
				return b + "://" + (d ? "[" + this.hostname + "]" : this.hostname) + c + this.path + a
			}, d.prototype.check = function () {
				return !(!m || "__initialize" in m && this.name === d.prototype.name)
			}
		}).call(b, function () {
			return this
		}())
	}, function (a, b) {}, function (a, b) {
		var c = [].indexOf;
		a.exports = function (a, b) {
			if (c) return a.indexOf(b);
			for (var d = 0; d < a.length; ++d)
				if (a[d] === b) return d;
			return -1
		}
	}, function (a, b) {
		(function (b) {
			var c = /^[\],:{}\s]*$/,
				d = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,
				e = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
				f = /(?:^|:|,)(?:\s*\[)+/g,
				g = /^\s+/,
				h = /\s+$/;
			a.exports = function (a) {
				return "string" == typeof a && a ? (a = a.replace(g, "").replace(h, ""), b.JSON && JSON.parse ? JSON.parse(a) : c.test(a.replace(d, "@").replace(e, "]").replace(f, "")) ? new Function("return " + a)() : void 0) : null
			}
		}).call(b, function () {
			return this
		}())
	}, function (a, b, c) {
		"use strict";

		function d(a, b, c) {
			this.io = a, this.nsp = b, this.json = this, this.ids = 0, this.acks = {}, this.receiveBuffer = [], this.sendBuffer = [], this.connected = !1, this.disconnected = !0, c && c.query && (this.query = c.query), this.io.autoConnect && this.open()
		}
		var e = c(7),
			f = c(35),
			g = c(45),
			h = c(46),
			i = c(47),
			j = c(3)("socket.io-client:socket"),
			k = c(29);
		a.exports = b = d;
		var l = {
				connect: 1,
				connect_error: 1,
				connect_timeout: 1,
				connecting: 1,
				disconnect: 1,
				error: 1,
				reconnect: 1,
				reconnect_attempt: 1,
				reconnect_failed: 1,
				reconnect_error: 1,
				reconnecting: 1,
				ping: 1,
				pong: 1
			},
			m = f.prototype.emit;
		f(d.prototype), d.prototype.subEvents = function () {
			if (!this.subs) {
				var a = this.io;
				this.subs = [h(a, "open", i(this, "onopen")), h(a, "packet", i(this, "onpacket")), h(a, "close", i(this, "onclose"))]
			}
		}, d.prototype.open = d.prototype.connect = function () {
			return this.connected ? this : (this.subEvents(), this.io.open(), "open" === this.io.readyState && this.onopen(), this.emit("connecting"), this)
		}, d.prototype.send = function () {
			var a = g(arguments);
			return a.unshift("message"), this.emit.apply(this, a), this
		}, d.prototype.emit = function (a) {
			if (l.hasOwnProperty(a)) return m.apply(this, arguments), this;
			var b = g(arguments),
				c = e.EVENT;
			k(b) && (c = e.BINARY_EVENT);
			var d = {
				type: c,
				data: b
			};
			return d.options = {}, d.options.compress = !this.flags || !1 !== this.flags.compress, "function" == typeof b[b.length - 1] && (j("emitting packet with ack id %d", this.ids), this.acks[this.ids] = b.pop(), d.id = this.ids++), this.connected ? this.packet(d) : this.sendBuffer.push(d), delete this.flags, this
		}, d.prototype.packet = function (a) {
			a.nsp = this.nsp, this.io.packet(a)
		}, d.prototype.onopen = function () {
			j("transport is open - connecting"), "/" !== this.nsp && (this.query ? this.packet({
				type: e.CONNECT,
				query: this.query
			}) : this.packet({
				type: e.CONNECT
			}))
		}, d.prototype.onclose = function (a) {
			j("close (%s)", a), this.connected = !1, this.disconnected = !0, delete this.id, this.emit("disconnect", a)
		}, d.prototype.onpacket = function (a) {
			if (a.nsp === this.nsp) switch (a.type) {
				case e.CONNECT:
					this.onconnect();
					break;
				case e.EVENT:
					this.onevent(a);
					break;
				case e.BINARY_EVENT:
					this.onevent(a);
					break;
				case e.ACK:
					this.onack(a);
					break;
				case e.BINARY_ACK:
					this.onack(a);
					break;
				case e.DISCONNECT:
					this.ondisconnect();
					break;
				case e.ERROR:
					this.emit("error", a.data)
			}
		}, d.prototype.onevent = function (a) {
			var b = a.data || [];
			j("emitting event %j", b), null != a.id && (j("attaching ack callback to event"), b.push(this.ack(a.id))), this.connected ? m.apply(this, b) : this.receiveBuffer.push(b)
		}, d.prototype.ack = function (a) {
			var b = this,
				c = !1;
			return function () {
				if (!c) {
					c = !0;
					var d = g(arguments);
					j("sending ack %j", d);
					var f = k(d) ? e.BINARY_ACK : e.ACK;
					b.packet({
						type: f,
						id: a,
						data: d
					})
				}
			}
		}, d.prototype.onack = function (a) {
			var b = this.acks[a.id];
			"function" == typeof b ? (j("calling ack %s with %j", a.id, a.data), b.apply(this, a.data), delete this.acks[a.id]) : j("bad ack %s", a.id)
		}, d.prototype.onconnect = function () {
			this.connected = !0, this.disconnected = !1, this.emit("connect"), this.emitBuffered()
		}, d.prototype.emitBuffered = function () {
			var a;
			for (a = 0; a < this.receiveBuffer.length; a++) m.apply(this, this.receiveBuffer[a]);
			for (this.receiveBuffer = [], a = 0; a < this.sendBuffer.length; a++) this.packet(this.sendBuffer[a]);
			this.sendBuffer = []
		}, d.prototype.ondisconnect = function () {
			j("server disconnect (%s)", this.nsp), this.destroy(), this.onclose("io server disconnect")
		}, d.prototype.destroy = function () {
			if (this.subs) {
				for (var a = 0; a < this.subs.length; a++) this.subs[a].destroy();
				this.subs = null
			}
			this.io.destroy(this)
		}, d.prototype.close = d.prototype.disconnect = function () {
			return this.connected && (j("performing disconnect (%s)", this.nsp), this.packet({
				type: e.DISCONNECT
			})), this.destroy(), this.connected && this.onclose("io client disconnect"), this
		}, d.prototype.compress = function (a) {
			return this.flags = this.flags || {}, this.flags.compress = a, this
		}
	}, function (a, b) {
		function c(a, b) {
			var c = [];
			b = b || 0;
			for (var d = b || 0; d < a.length; d++) c[d - b] = a[d];
			return c
		}
		a.exports = c
	}, function (a, b) {
		"use strict";

		function c(a, b, c) {
			return a.on(b, c), {
				destroy: function () {
					a.removeListener(b, c)
				}
			}
		}
		a.exports = c
	}, function (a, b) {
		var c = [].slice;
		a.exports = function (a, b) {
			if ("string" == typeof b && (b = a[b]), "function" != typeof b) throw new Error("bind() requires a function");
			var d = c.call(arguments, 2);
			return function () {
				return b.apply(a, d.concat(c.call(arguments)))
			}
		}
	}, function (a, b) {
		function c(a) {
			a = a || {}, this.ms = a.min || 100, this.max = a.max || 1e4, this.factor = a.factor || 2, this.jitter = a.jitter > 0 && a.jitter <= 1 ? a.jitter : 0, this.attempts = 0
		}
		a.exports = c, c.prototype.duration = function () {
			var a = this.ms * Math.pow(this.factor, this.attempts++);
			if (this.jitter) {
				var b = Math.random(),
					c = Math.floor(b * this.jitter * a);
				a = 0 == (1 & Math.floor(10 * b)) ? a - c : a + c
			}
			return 0 | Math.min(a, this.max)
		}, c.prototype.reset = function () {
			this.attempts = 0
		}, c.prototype.setMin = function (a) {
			this.ms = a
		}, c.prototype.setMax = function (a) {
			this.max = a
		}, c.prototype.setJitter = function (a) {
			this.jitter = a
		}
	}])
}), ! function (a) {
	"function" == typeof define && define.amd ? define(["jquery"], a) : a("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function (a) {
	var b, c, d, e, f, g, h = "Close",
		i = "BeforeClose",
		j = "AfterClose",
		k = "BeforeAppend",
		l = "MarkupParse",
		m = "Open",
		n = "Change",
		o = "mfp",
		p = "." + o,
		q = "mfp-ready",
		r = "mfp-removing",
		s = "mfp-prevent-close",
		t = function () {},
		u = !!window.jQuery,
		v = a(window),
		w = function (a, c) {
			b.ev.on(o + a + p, c)
		},
		x = function (b, c, d, e) {
			var f = document.createElement("div");
			return f.className = "mfp-" + b, d && (f.innerHTML = d), e ? c && c.appendChild(f) : (f = a(f), c && f.appendTo(c)), f
		},
		y = function (c, d) {
			b.ev.triggerHandler(o + c, d), b.st.callbacks && (c = c.charAt(0).toLowerCase() + c.slice(1), b.st.callbacks[c] && b.st.callbacks[c].apply(b, a.isArray(d) ? d : [d]))
		},
		z = function (c) {
			return c === g && b.currTemplate.closeBtn || (b.currTemplate.closeBtn = a(b.st.closeMarkup.replace("%title%", b.st.tClose)), g = c), b.currTemplate.closeBtn
		},
		A = function () {
			a.magnificPopup.instance || (b = new t, b.init(), a.magnificPopup.instance = b)
		},
		B = function () {
			var a = document.createElement("p").style,
				b = ["ms", "O", "Moz", "Webkit"];
			if (void 0 !== a.transition) return !0;
			for (; b.length;)
				if (b.pop() + "Transition" in a) return !0;
			return !1
		};
	t.prototype = {
		constructor: t,
		init: function () {
			var c = navigator.appVersion;
			b.isIE7 = -1 !== c.indexOf("MSIE 7."), b.isIE8 = -1 !== c.indexOf("MSIE 8."), b.isLowIE = b.isIE7 || b.isIE8, b.isAndroid = /android/gi.test(c), b.isIOS = /iphone|ipad|ipod/gi.test(c), b.supportsTransition = B(), b.probablyMobile = b.isAndroid || b.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), d = a(document), b.popupsCache = {}
		},
		open: function (c) {
			var e;
			if (c.isObj === !1) {
				b.items = c.items.toArray(), b.index = 0;
				var g, h = c.items;
				for (e = 0; e < h.length; e++)
					if (g = h[e], g.parsed && (g = g.el[0]), g === c.el[0]) {
						b.index = e;
						break
					}
			} else b.items = a.isArray(c.items) ? c.items : [c.items], b.index = c.index || 0;
			if (b.isOpen) return void b.updateItemHTML();
			b.types = [], f = "", c.mainEl && c.mainEl.length ? b.ev = c.mainEl.eq(0) : b.ev = d, c.key ? (b.popupsCache[c.key] || (b.popupsCache[c.key] = {}), b.currTemplate = b.popupsCache[c.key]) : b.currTemplate = {}, b.st = a.extend(!0, {}, a.magnificPopup.defaults, c), b.fixedContentPos = "auto" === b.st.fixedContentPos ? !b.probablyMobile : b.st.fixedContentPos, b.st.modal && (b.st.closeOnContentClick = !1, b.st.closeOnBgClick = !1, b.st.showCloseBtn = !1, b.st.enableEscapeKey = !1), b.bgOverlay || (b.bgOverlay = x("bg").on("click" + p, function () {
				b.close()
			}), b.wrap = x("wrap").attr("tabindex", -1).on("click" + p, function (a) {
				b._checkIfClose(a.target) && b.close();
			}), b.container = x("container", b.wrap)), b.contentContainer = x("content"), b.st.preloader && (b.preloader = x("preloader", b.container, b.st.tLoading));
			var i = a.magnificPopup.modules;
			for (e = 0; e < i.length; e++) {
				var j = i[e];
				j = j.charAt(0).toUpperCase() + j.slice(1), b["init" + j].call(b)
			}
			y("BeforeOpen"), b.st.showCloseBtn && (b.st.closeBtnInside ? (w(l, function (a, b, c, d) {
				c.close_replaceWith = z(d.type)
			}), f += " mfp-close-btn-in") : b.wrap.append(z())), b.st.alignTop && (f += " mfp-align-top"), b.fixedContentPos ? b.wrap.css({
				overflow: b.st.overflowY,
				overflowX: "hidden",
				overflowY: b.st.overflowY
			}) : b.wrap.css({
				top: v.scrollTop(),
				position: "absolute"
			}), (b.st.fixedBgPos === !1 || "auto" === b.st.fixedBgPos && !b.fixedContentPos) && b.bgOverlay.css({
				height: d.height(),
				position: "absolute"
			}), b.st.enableEscapeKey && d.on("keyup" + p, function (a) {
				27 === a.keyCode && b.close()
			}), v.on("resize" + p, function () {
				b.updateSize()
			}), b.st.closeOnContentClick || (f += " mfp-auto-cursor"), f && b.wrap.addClass(f);
			var k = b.wH = v.height(),
				n = {};
			if (b.fixedContentPos && b._hasScrollBar(k)) {
				var o = b._getScrollbarSize();
				o && (n.marginRight = o)
			}
			b.fixedContentPos && (b.isIE7 ? a("body, html").css("overflow", "hidden") : n.overflow = "hidden");
			var r = b.st.mainClass;
			return b.isIE7 && (r += " mfp-ie7"), r && b._addClassToMFP(r), b.updateItemHTML(), y("BuildControls"), a("html").css(n), b.bgOverlay.add(b.wrap).prependTo(b.st.prependTo || a(document.body)), b._lastFocusedEl = document.activeElement, setTimeout(function () {
				b.content ? (b._addClassToMFP(q), b._setFocus()) : b.bgOverlay.addClass(q), d.on("focusin" + p, b._onFocusIn)
			}, 16), b.isOpen = !0, b.updateSize(k), y(m), c
		},
		close: function () {
			b.isOpen && (y(i), b.isOpen = !1, b.st.removalDelay && !b.isLowIE && b.supportsTransition ? (b._addClassToMFP(r), setTimeout(function () {
				b._close()
			}, b.st.removalDelay)) : b._close())
		},
		_close: function () {
			y(h);
			var c = r + " " + q + " ";
			if (b.bgOverlay.detach(), b.wrap.detach(), b.container.empty(), b.st.mainClass && (c += b.st.mainClass + " "), b._removeClassFromMFP(c), b.fixedContentPos) {
				var e = {
					marginRight: ""
				};
				b.isIE7 ? a("body, html").css("overflow", "") : e.overflow = "", a("html").css(e)
			}
			d.off("keyup" + p + " focusin" + p), b.ev.off(p), b.wrap.attr("class", "mfp-wrap").removeAttr("style"), b.bgOverlay.attr("class", "mfp-bg"), b.container.attr("class", "mfp-container"), !b.st.showCloseBtn || b.st.closeBtnInside && b.currTemplate[b.currItem.type] !== !0 || b.currTemplate.closeBtn && b.currTemplate.closeBtn.detach(), b._lastFocusedEl && a(b._lastFocusedEl).focus(), b.currItem = null, b.content = null, b.currTemplate = null, b.prevHeight = 0, y(j)
		},
		updateSize: function (a) {
			if (b.isIOS) {
				var c = document.documentElement.clientWidth / window.innerWidth,
					d = window.innerHeight * c;
				b.wrap.css("height", d), b.wH = d
			} else b.wH = a || v.height();
			b.fixedContentPos || b.wrap.css("height", b.wH), y("Resize")
		},
		updateItemHTML: function () {
			var c = b.items[b.index];
			b.contentContainer.detach(), b.content && b.content.detach(), c.parsed || (c = b.parseEl(b.index));
			var d = c.type;
			if (y("BeforeChange", [b.currItem ? b.currItem.type : "", d]), b.currItem = c, !b.currTemplate[d]) {
				var f = !!b.st[d] && b.st[d].markup;
				y("FirstMarkupParse", f), f ? b.currTemplate[d] = a(f) : b.currTemplate[d] = !0
			}
			e && e !== c.type && b.container.removeClass("mfp-" + e + "-holder");
			var g = b["get" + d.charAt(0).toUpperCase() + d.slice(1)](c, b.currTemplate[d]);
			b.appendContent(g, d), c.preloaded = !0, y(n, c), e = c.type, b.container.prepend(b.contentContainer), y("AfterChange")
		},
		appendContent: function (a, c) {
			b.content = a, a ? b.st.showCloseBtn && b.st.closeBtnInside && b.currTemplate[c] === !0 ? b.content.find(".mfp-close").length || b.content.append(z()) : b.content = a : b.content = "", y(k), b.container.addClass("mfp-" + c + "-holder"), b.contentContainer.append(b.content)
		},
		parseEl: function (c) {
			var d, e = b.items[c];
			if (e.tagName ? e = {
					el: a(e)
				} : (d = e.type, e = {
					data: e,
					src: e.src
				}), e.el) {
				for (var f = b.types, g = 0; g < f.length; g++)
					if (e.el.hasClass("mfp-" + f[g])) {
						d = f[g];
						break
					}
				e.src = e.el.attr("data-mfp-src"), e.src || (e.src = e.el.attr("href"))
			}
			return e.type = d || b.st.type || "inline", e.index = c, e.parsed = !0, b.items[c] = e, y("ElementParse", e), b.items[c]
		},
		addGroup: function (a, c) {
			var d = function (d) {
				d.mfpEl = this, b._openClick(d, a, c)
			};
			c || (c = {});
			var e = "click.magnificPopup";
			c.mainEl = a, c.items ? (c.isObj = !0, a.off(e).on(e, d)) : (c.isObj = !1, c.delegate ? a.off(e).on(e, c.delegate, d) : (c.items = a, a.off(e).on(e, d)))
		},
		_openClick: function (c, d, e) {
			var f = void 0 !== e.midClick ? e.midClick : a.magnificPopup.defaults.midClick;
			if (f || !(2 === c.which || c.ctrlKey || c.metaKey || c.altKey || c.shiftKey)) {
				var g = void 0 !== e.disableOn ? e.disableOn : a.magnificPopup.defaults.disableOn;
				if (g)
					if (a.isFunction(g)) {
						if (!g.call(b)) return !0
					} else if (v.width() < g) return !0;
				c.type && (c.preventDefault(), b.isOpen && c.stopPropagation()), e.el = a(c.mfpEl), e.delegate && (e.items = d.find(e.delegate)), b.open(e)
			}
		},
		updateStatus: function (a, d) {
			if (b.preloader) {
				c !== a && b.container.removeClass("mfp-s-" + c), d || "loading" !== a || (d = b.st.tLoading);
				var e = {
					status: a,
					text: d
				};
				y("UpdateStatus", e), a = e.status, d = e.text, b.preloader.html(d), b.preloader.find("a").on("click", function (a) {
					a.stopImmediatePropagation()
				}), b.container.addClass("mfp-s-" + a), c = a
			}
		},
		_checkIfClose: function (c) {
			if (!a(c).hasClass(s)) {
				var d = b.st.closeOnContentClick,
					e = b.st.closeOnBgClick;
				if (d && e) return !0;
				if (!b.content || a(c).hasClass("mfp-close") || b.preloader && c === b.preloader[0]) return !0;
				if (c === b.content[0] || a.contains(b.content[0], c)) {
					if (d) return !0
				} else if (e && a.contains(document, c)) return !0;
				return !1
			}
		},
		_addClassToMFP: function (a) {
			b.bgOverlay.addClass(a), b.wrap.addClass(a)
		},
		_removeClassFromMFP: function (a) {
			this.bgOverlay.removeClass(a), b.wrap.removeClass(a)
		},
		_hasScrollBar: function (a) {
			return (b.isIE7 ? d.height() : document.body.scrollHeight) > (a || v.height())
		},
		_setFocus: function () {
			(b.st.focus ? b.content.find(b.st.focus).eq(0) : b.wrap).focus()
		},
		_onFocusIn: function (c) {
			return c.target === b.wrap[0] || a.contains(b.wrap[0], c.target) ? void 0 : (b._setFocus(), !1)
		},
		_parseMarkup: function (b, c, d) {
			var e;
			d.data && (c = a.extend(d.data, c)), y(l, [b, c, d]), a.each(c, function (a, c) {
				if (void 0 === c || c === !1) return !0;
				if (e = a.split("_"), e.length > 1) {
					var d = b.find(p + "-" + e[0]);
					if (d.length > 0) {
						var f = e[1];
						"replaceWith" === f ? d[0] !== c[0] && d.replaceWith(c) : "img" === f ? d.is("img") ? d.attr("src", c) : d.replaceWith('<img src="' + c + '" class="' + d.attr("class") + '" />') : d.attr(e[1], c)
					}
				} else b.find(p + "-" + a).html(c)
			})
		},
		_getScrollbarSize: function () {
			if (void 0 === b.scrollbarSize) {
				var a = document.createElement("div");
				a.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(a), b.scrollbarSize = a.offsetWidth - a.clientWidth, document.body.removeChild(a)
			}
			return b.scrollbarSize
		}
	}, a.magnificPopup = {
		instance: null,
		proto: t.prototype,
		modules: [],
		open: function (b, c) {
			return A(), b = b ? a.extend(!0, {}, b) : {}, b.isObj = !0, b.index = c || 0, this.instance.open(b)
		},
		close: function () {
			return a.magnificPopup.instance && a.magnificPopup.instance.close()
		},
		registerModule: function (b, c) {
			c.options && (a.magnificPopup.defaults[b] = c.options), a.extend(this.proto, c.proto), this.modules.push(b)
		},
		defaults: {
			disableOn: 0,
			key: null,
			midClick: !1,
			mainClass: "",
			preloader: !0,
			focus: "",
			closeOnContentClick: !1,
			closeOnBgClick: !0,
			closeBtnInside: !0,
			showCloseBtn: !0,
			enableEscapeKey: !0,
			modal: !1,
			alignTop: !1,
			removalDelay: 0,
			prependTo: null,
			fixedContentPos: "auto",
			fixedBgPos: "auto",
			overflowY: "auto",
			closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
			tClose: "Close (Esc)",
			tLoading: "Loading..."
		}
	}, a.fn.magnificPopup = function (c) {
		A();
		var d = a(this);
		if ("string" == typeof c)
			if ("open" === c) {
				var e, f = u ? d.data("magnificPopup") : d[0].magnificPopup,
					g = parseInt(arguments[1], 10) || 0;
				f.items ? e = f.items[g] : (e = d, f.delegate && (e = e.find(f.delegate)), e = e.eq(g)), b._openClick({
					mfpEl: e
				}, d, f)
			} else b.isOpen && b[c].apply(b, Array.prototype.slice.call(arguments, 1));
		else c = a.extend(!0, {}, c), u ? d.data("magnificPopup", c) : d[0].magnificPopup = c, b.addGroup(d, c);
		return d
	};
	var C, D, E, F = "inline",
		G = function () {
			E && (D.after(E.addClass(C)).detach(), E = null)
		};
	a.magnificPopup.registerModule(F, {
		options: {
			hiddenClass: "hide",
			markup: "",
			tNotFound: "Content not found"
		},
		proto: {
			initInline: function () {
				b.types.push(F), w(h + "." + F, function () {
					G()
				})
			},
			getInline: function (c, d) {
				if (G(), c.src) {
					var e = b.st.inline,
						f = a(c.src);
					if (f.length) {
						var g = f[0].parentNode;
						g && g.tagName && (D || (C = e.hiddenClass, D = x(C), C = "mfp-" + C), E = f.after(D).detach().removeClass(C)), b.updateStatus("ready")
					} else b.updateStatus("error", e.tNotFound), f = a("<div>");
					return c.inlineElement = f, f
				}
				return b.updateStatus("ready"), b._parseMarkup(d, {}, c), d
			}
		}
	});
	var H, I = "ajax",
		J = function () {
			H && a(document.body).removeClass(H)
		},
		K = function () {
			J(), b.req && b.req.abort()
		};
	a.magnificPopup.registerModule(I, {
		options: {
			settings: null,
			cursor: "mfp-ajax-cur",
			tError: '<a href="%url%">The content</a> could not be loaded.'
		},
		proto: {
			initAjax: function () {
				b.types.push(I), H = b.st.ajax.cursor, w(h + "." + I, K), w("BeforeChange." + I, K)
			},
			getAjax: function (c) {
				H && a(document.body).addClass(H), b.updateStatus("loading");
				var d = a.extend({
					url: c.src,
					success: function (d, e, f) {
						var g = {
							data: d,
							xhr: f
						};
						y("ParseAjax", g), b.appendContent(a(g.data), I), c.finished = !0, J(), b._setFocus(), setTimeout(function () {
							b.wrap.addClass(q)
						}, 16), b.updateStatus("ready"), y("AjaxContentAdded")
					},
					error: function () {
						J(), c.finished = c.loadError = !0, b.updateStatus("error", b.st.ajax.tError.replace("%url%", c.src))
					}
				}, b.st.ajax.settings);
				return b.req = a.ajax(d), ""
			}
		}
	});
	var L, M = function (c) {
		if (c.data && void 0 !== c.data.title) return c.data.title;
		var d = b.st.image.titleSrc;
		if (d) {
			if (a.isFunction(d)) return d.call(b, c);
			if (c.el) return c.el.attr(d) || ""
		}
		return ""
	};
	a.magnificPopup.registerModule("image", {
		options: {
			markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
			cursor: "mfp-zoom-out-cur",
			titleSrc: "title",
			verticalFit: !0,
			tError: '<a href="%url%">The image</a> could not be loaded.'
		},
		proto: {
			initImage: function () {
				var c = b.st.image,
					d = ".image";
				b.types.push("image"), w(m + d, function () {
					"image" === b.currItem.type && c.cursor && a(document.body).addClass(c.cursor)
				}), w(h + d, function () {
					c.cursor && a(document.body).removeClass(c.cursor), v.off("resize" + p)
				}), w("Resize" + d, b.resizeImage), b.isLowIE && w("AfterChange", b.resizeImage)
			},
			resizeImage: function () {
				var a = b.currItem;
				if (a && a.img && b.st.image.verticalFit) {
					var c = 0;
					b.isLowIE && (c = parseInt(a.img.css("padding-top"), 10) + parseInt(a.img.css("padding-bottom"), 10)), a.img.css("max-height", b.wH - c)
				}
			},
			_onImageHasSize: function (a) {
				a.img && (a.hasSize = !0, L && clearInterval(L), a.isCheckingImgSize = !1, y("ImageHasSize", a), a.imgHidden && (b.content && b.content.removeClass("mfp-loading"), a.imgHidden = !1))
			},
			findImageSize: function (a) {
				var c = 0,
					d = a.img[0],
					e = function (f) {
						L && clearInterval(L), L = setInterval(function () {
							return d.naturalWidth > 0 ? void b._onImageHasSize(a) : (c > 200 && clearInterval(L), c++, void(3 === c ? e(10) : 40 === c ? e(50) : 100 === c && e(500)))
						}, f)
					};
				e(1)
			},
			getImage: function (c, d) {
				var e = 0,
					f = function () {
						c && (c.img[0].complete ? (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("ready")), c.hasSize = !0, c.loaded = !0, y("ImageLoadComplete")) : (e++, 200 > e ? setTimeout(f, 100) : g()))
					},
					g = function () {
						c && (c.img.off(".mfploader"), c === b.currItem && (b._onImageHasSize(c), b.updateStatus("error", h.tError.replace("%url%", c.src))), c.hasSize = !0, c.loaded = !0, c.loadError = !0)
					},
					h = b.st.image,
					i = d.find(".mfp-img");
				if (i.length) {
					var j = document.createElement("img");
					j.className = "mfp-img", c.el && c.el.find("img").length && (j.alt = c.el.find("img").attr("alt")), c.img = a(j).on("load.mfploader", f).on("error.mfploader", g), j.src = c.src, i.is("img") && (c.img = c.img.clone()), j = c.img[0], j.naturalWidth > 0 ? c.hasSize = !0 : j.width || (c.hasSize = !1)
				}
				return b._parseMarkup(d, {
					title: M(c),
					img_replaceWith: c.img
				}, c), b.resizeImage(), c.hasSize ? (L && clearInterval(L), c.loadError ? (d.addClass("mfp-loading"), b.updateStatus("error", h.tError.replace("%url%", c.src))) : (d.removeClass("mfp-loading"), b.updateStatus("ready")), d) : (b.updateStatus("loading"), c.loading = !0, c.hasSize || (c.imgHidden = !0, d.addClass("mfp-loading"), b.findImageSize(c)), d)
			}
		}
	});
	var N, O = function () {
		return void 0 === N && (N = void 0 !== document.createElement("p").style.MozTransform), N
	};
	a.magnificPopup.registerModule("zoom", {
		options: {
			enabled: !1,
			easing: "ease-in-out",
			duration: 300,
			opener: function (a) {
				return a.is("img") ? a : a.find("img")
			}
		},
		proto: {
			initZoom: function () {
				var a, c = b.st.zoom,
					d = ".zoom";
				if (c.enabled && b.supportsTransition) {
					var e, f, g = c.duration,
						j = function (a) {
							var b = a.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
								d = "all " + c.duration / 1e3 + "s " + c.easing,
								e = {
									position: "fixed",
									zIndex: 9999,
									left: 0,
									top: 0,
									"-webkit-backface-visibility": "hidden"
								},
								f = "transition";
							return e["-webkit-" + f] = e["-moz-" + f] = e["-o-" + f] = e[f] = d, b.css(e), b
						},
						k = function () {
							b.content.css("visibility", "visible")
						};
					w("BuildControls" + d, function () {
						if (b._allowZoom()) {
							if (clearTimeout(e), b.content.css("visibility", "hidden"), a = b._getItemToZoom(), !a) return void k();
							f = j(a), f.css(b._getOffset()), b.wrap.append(f), e = setTimeout(function () {
								f.css(b._getOffset(!0)), e = setTimeout(function () {
									k(), setTimeout(function () {
										f.remove(), a = f = null, y("ZoomAnimationEnded")
									}, 16)
								}, g)
							}, 16)
						}
					}), w(i + d, function () {
						if (b._allowZoom()) {
							if (clearTimeout(e), b.st.removalDelay = g, !a) {
								if (a = b._getItemToZoom(), !a) return;
								f = j(a)
							}
							f.css(b._getOffset(!0)), b.wrap.append(f), b.content.css("visibility", "hidden"), setTimeout(function () {
								f.css(b._getOffset())
							}, 16)
						}
					}), w(h + d, function () {
						b._allowZoom() && (k(), f && f.remove(), a = null)
					})
				}
			},
			_allowZoom: function () {
				return "image" === b.currItem.type
			},
			_getItemToZoom: function () {
				return !!b.currItem.hasSize && b.currItem.img
			},
			_getOffset: function (c) {
				var d;
				d = c ? b.currItem.img : b.st.zoom.opener(b.currItem.el || b.currItem);
				var e = d.offset(),
					f = parseInt(d.css("padding-top"), 10),
					g = parseInt(d.css("padding-bottom"), 10);
				e.top -= a(window).scrollTop() - f;
				var h = {
					width: d.width(),
					height: (u ? d.innerHeight() : d[0].offsetHeight) - g - f
				};
				return O() ? h["-moz-transform"] = h.transform = "translate(" + e.left + "px," + e.top + "px)" : (h.left = e.left, h.top = e.top), h
			}
		}
	});
	var P = "iframe",
		Q = "//about:blank",
		R = function (a) {
			if (b.currTemplate[P]) {
				var c = b.currTemplate[P].find("iframe");
				c.length && (a || (c[0].src = Q), b.isIE8 && c.css("display", a ? "block" : "none"))
			}
		};
	a.magnificPopup.registerModule(P, {
		options: {
			markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
			srcAction: "iframe_src",
			patterns: {
				youtube: {
					index: "youtube.com",
					id: "v=",
					src: "//www.youtube.com/embed/%id%?autoplay=1"
				},
				vimeo: {
					index: "vimeo.com/",
					id: "/",
					src: "//player.vimeo.com/video/%id%?autoplay=1"
				},
				gmaps: {
					index: "//maps.google.",
					src: "%id%&output=embed"
				}
			}
		},
		proto: {
			initIframe: function () {
				b.types.push(P), w("BeforeChange", function (a, b, c) {
					b !== c && (b === P ? R() : c === P && R(!0))
				}), w(h + "." + P, function () {
					R()
				})
			},
			getIframe: function (c, d) {
				var e = c.src,
					f = b.st.iframe;
				a.each(f.patterns, function () {
					return e.indexOf(this.index) > -1 ? (this.id && (e = "string" == typeof this.id ? e.substr(e.lastIndexOf(this.id) + this.id.length, e.length) : this.id.call(this, e)), e = this.src.replace("%id%", e), !1) : void 0
				});
				var g = {};
				return f.srcAction && (g[f.srcAction] = e), b._parseMarkup(d, g, c), b.updateStatus("ready"), d
			}
		}
	});
	var S = function (a) {
			var c = b.items.length;
			return a > c - 1 ? a - c : 0 > a ? c + a : a
		},
		T = function (a, b, c) {
			return a.replace(/%curr%/gi, b + 1).replace(/%total%/gi, c)
		};
	a.magnificPopup.registerModule("gallery", {
		options: {
			enabled: !1,
			arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
			preload: [0, 2],
			navigateByImgClick: !0,
			arrows: !0,
			tPrev: "Previous (Left arrow key)",
			tNext: "Next (Right arrow key)",
			tCounter: "%curr% of %total%"
		},
		proto: {
			initGallery: function () {
				var c = b.st.gallery,
					e = ".mfp-gallery",
					g = Boolean(a.fn.mfpFastClick);
				return b.direction = !0, !(!c || !c.enabled) && (f += " mfp-gallery", w(m + e, function () {
					c.navigateByImgClick && b.wrap.on("click" + e, ".mfp-img", function () {
						return b.items.length > 1 ? (b.next(), !1) : void 0
					}), d.on("keydown" + e, function (a) {
						37 === a.keyCode ? b.prev() : 39 === a.keyCode && b.next()
					})
				}), w("UpdateStatus" + e, function (a, c) {
					c.text && (c.text = T(c.text, b.currItem.index, b.items.length))
				}), w(l + e, function (a, d, e, f) {
					var g = b.items.length;
					e.counter = g > 1 ? T(c.tCounter, f.index, g) : ""
				}), w("BuildControls" + e, function () {
					if (b.items.length > 1 && c.arrows && !b.arrowLeft) {
						var d = c.arrowMarkup,
							e = b.arrowLeft = a(d.replace(/%title%/gi, c.tPrev).replace(/%dir%/gi, "left")).addClass(s),
							f = b.arrowRight = a(d.replace(/%title%/gi, c.tNext).replace(/%dir%/gi, "right")).addClass(s),
							h = g ? "mfpFastClick" : "click";
						e[h](function () {
							b.prev()
						}), f[h](function () {
							b.next()
						}), b.isIE7 && (x("b", e[0], !1, !0), x("a", e[0], !1, !0), x("b", f[0], !1, !0), x("a", f[0], !1, !0)), b.container.append(e.add(f))
					}
				}), w(n + e, function () {
					b._preloadTimeout && clearTimeout(b._preloadTimeout), b._preloadTimeout = setTimeout(function () {
						b.preloadNearbyImages(), b._preloadTimeout = null
					}, 16)
				}), void w(h + e, function () {
					d.off(e), b.wrap.off("click" + e), b.arrowLeft && g && b.arrowLeft.add(b.arrowRight).destroyMfpFastClick(), b.arrowRight = b.arrowLeft = null
				}))
			},
			next: function () {
				b.direction = !0, b.index = S(b.index + 1), b.updateItemHTML()
			},
			prev: function () {
				b.direction = !1, b.index = S(b.index - 1), b.updateItemHTML()
			},
			goTo: function (a) {
				b.direction = a >= b.index, b.index = a, b.updateItemHTML()
			},
			preloadNearbyImages: function () {
				var a, c = b.st.gallery.preload,
					d = Math.min(c[0], b.items.length),
					e = Math.min(c[1], b.items.length);
				for (a = 1; a <= (b.direction ? e : d); a++) b._preloadItem(b.index + a);
				for (a = 1; a <= (b.direction ? d : e); a++) b._preloadItem(b.index - a)
			},
			_preloadItem: function (c) {
				if (c = S(c), !b.items[c].preloaded) {
					var d = b.items[c];
					d.parsed || (d = b.parseEl(c)), y("LazyLoad", d), "image" === d.type && (d.img = a('<img class="mfp-img" />').on("load.mfploader", function () {
						d.hasSize = !0
					}).on("error.mfploader", function () {
						d.hasSize = !0, d.loadError = !0, y("LazyLoadError", d)
					}).attr("src", d.src)), d.preloaded = !0
				}
			}
		}
	});
	var U = "retina";
	a.magnificPopup.registerModule(U, {
			options: {
				replaceSrc: function (a) {
					return a.src.replace(/\.\w+$/, function (a) {
						return "@2x" + a
					})
				},
				ratio: 1
			},
			proto: {
				initRetina: function () {
					if (window.devicePixelRatio > 1) {
						var a = b.st.retina,
							c = a.ratio;
						c = isNaN(c) ? c() : c, c > 1 && (w("ImageHasSize." + U, function (a, b) {
							b.img.css({
								"max-width": b.img[0].naturalWidth / c,
								width: "100%"
							})
						}), w("ElementParse." + U, function (b, d) {
							d.src = a.replaceSrc(d, c)
						}))
					}
				}
			}
		}),
		function () {
			var b = 1e3,
				c = "ontouchstart" in window,
				d = function () {
					v.off("touchmove" + f + " touchend" + f)
				},
				e = "mfpFastClick",
				f = "." + e;
			a.fn.mfpFastClick = function (e) {
				return a(this).each(function () {
					var g, h = a(this);
					if (c) {
						var i, j, k, l, m, n;
						h.on("touchstart" + f, function (a) {
							l = !1, n = 1, m = a.originalEvent ? a.originalEvent.touches[0] : a.touches[0], j = m.clientX, k = m.clientY, v.on("touchmove" + f, function (a) {
								m = a.originalEvent ? a.originalEvent.touches : a.touches, n = m.length, m = m[0], (Math.abs(m.clientX - j) > 10 || Math.abs(m.clientY - k) > 10) && (l = !0, d())
							}).on("touchend" + f, function (a) {
								d(), l || n > 1 || (g = !0, a.preventDefault(), clearTimeout(i), i = setTimeout(function () {
									g = !1
								}, b), e())
							})
						})
					}
					h.on("click" + f, function () {
						g || e()
					})
				})
			}, a.fn.destroyMfpFastClick = function () {
				a(this).off("touchstart" + f + " click" + f), c && v.off("touchmove" + f + " touchend" + f)
			}
		}(), A()
}), ! function (a) {
	"use strict";
	"function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function (a) {
	"use strict";
	var b = window.Slick || {};
	b = function () {
		function b(b, d) {
			var e, f = this;
			f.defaults = {
				accessibility: !0,
				adaptiveHeight: !1,
				appendArrows: a(b),
				appendDots: a(b),
				arrows: !0,
				asNavFor: null,
				prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
				nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
				autoplay: !1,
				autoplaySpeed: 3e3,
				centerMode: !1,
				centerPadding: "50px",
				cssEase: "ease",
				customPaging: function (b, c) {
					return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c + 1)
				},
				dots: !1,
				dotsClass: "slick-dots",
				draggable: !0,
				easing: "linear",
				edgeFriction: .35,
				fade: !1,
				focusOnSelect: !1,
				infinite: !0,
				initialSlide: 0,
				lazyLoad: "ondemand",
				mobileFirst: !1,
				pauseOnHover: !0,
				pauseOnFocus: !0,
				pauseOnDotsHover: !1,
				respondTo: "window",
				responsive: null,
				rows: 1,
				rtl: !1,
				slide: "",
				slidesPerRow: 1,
				slidesToShow: 1,
				slidesToScroll: 1,
				speed: 500,
				swipe: !0,
				swipeToSlide: !1,
				touchMove: !0,
				touchThreshold: 5,
				useCSS: !0,
				useTransform: !0,
				variableWidth: !1,
				vertical: !1,
				verticalSwiping: !1,
				waitForAnimate: !0,
				zIndex: 1e3
			}, f.initials = {
				animating: !1,
				dragging: !1,
				autoPlayTimer: null,
				currentDirection: 0,
				currentLeft: null,
				currentSlide: 0,
				direction: 1,
				$dots: null,
				listWidth: null,
				listHeight: null,
				loadIndex: 0,
				$nextArrow: null,
				$prevArrow: null,
				slideCount: null,
				slideWidth: null,
				$slideTrack: null,
				$slides: null,
				sliding: !1,
				slideOffset: 0,
				swipeLeft: null,
				$list: null,
				touchObject: {},
				transformsEnabled: !1,
				unslicked: !1
			}, a.extend(f, f.initials), f.activeBreakpoint = null, f.animType = null, f.animProp = null, f.breakpoints = [], f.breakpointSettings = [], f.cssTransitions = !1, f.focussed = !1, f.interrupted = !1, f.hidden = "hidden", f.paused = !0, f.positionProp = null, f.respondTo = null, f.rowCount = 1, f.shouldClick = !0, f.$slider = a(b), f.$slidesCache = null, f.transformType = null, f.transitionType = null, f.visibilityChange = "visibilitychange", f.windowWidth = 0, f.windowTimer = null, e = a(b).data("slick") || {}, f.options = a.extend({}, f.defaults, d, e), f.currentSlide = f.options.initialSlide, f.originalSettings = f.options, "undefined" != typeof document.mozHidden ? (f.hidden = "mozHidden", f.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (f.hidden = "webkitHidden", f.visibilityChange = "webkitvisibilitychange"), f.autoPlay = a.proxy(f.autoPlay, f), f.autoPlayClear = a.proxy(f.autoPlayClear, f), f.autoPlayIterator = a.proxy(f.autoPlayIterator, f), f.changeSlide = a.proxy(f.changeSlide, f), f.clickHandler = a.proxy(f.clickHandler, f), f.selectHandler = a.proxy(f.selectHandler, f), f.setPosition = a.proxy(f.setPosition, f), f.swipeHandler = a.proxy(f.swipeHandler, f), f.dragHandler = a.proxy(f.dragHandler, f), f.keyHandler = a.proxy(f.keyHandler, f), f.instanceUid = c++, f.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, f.registerBreakpoints(), f.init(!0)
		}
		var c = 0;
		return b
	}(), b.prototype.activateADA = function () {
		var a = this;
		a.$slideTrack.find(".slick-active").attr({
			"aria-hidden": "false"
		}).find("a, input, button, select").attr({
			tabindex: "0"
		})
	}, b.prototype.addSlide = b.prototype.slickAdd = function (b, c, d) {
		var e = this;
		if ("boolean" == typeof c) d = c, c = null;
		else if (0 > c || c >= e.slideCount) return !1;
		e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function (b, c) {
			a(c).attr("data-slick-index", b)
		}), e.$slidesCache = e.$slides, e.reinit()
	}, b.prototype.animateHeight = function () {
		var a = this;
		if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
			var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
			a.$list.animate({
				height: b
			}, a.options.speed)
		}
	}, b.prototype.animateSlide = function (b, c) {
		var d = {},
			e = this;
		e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({
			left: b
		}, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({
			top: b
		}, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({
			animStart: e.currentLeft
		}).animate({
			animStart: b
		}, {
			duration: e.options.speed,
			easing: e.options.easing,
			step: function (a) {
				a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d))
			},
			complete: function () {
				c && c.call()
			}
		})) : (e.applyTransition(), b = Math.ceil(b), e.options.vertical === !1 ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function () {
			e.disableTransition(), c.call()
		}, e.options.speed))
	}, b.prototype.getNavTarget = function () {
		var b = this,
			c = b.options.asNavFor;
		return c && null !== c && (c = a(c).not(b.$slider)), c
	}, b.prototype.asNavFor = function (b) {
		var c = this,
			d = c.getNavTarget();
		null !== d && "object" == typeof d && d.each(function () {
			var c = a(this).slick("getSlick");
			c.unslicked || c.slideHandler(b, !0)
		})
	}, b.prototype.applyTransition = function (a) {
		var b = this,
			c = {};
		b.options.fade === !1 ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
	}, b.prototype.autoPlay = function () {
		var a = this;
		a.autoPlayClear(), a.slideCount > a.options.slidesToShow && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
	}, b.prototype.autoPlayClear = function () {
		var a = this;
		a.autoPlayTimer && clearInterval(a.autoPlayTimer)
	}, b.prototype.autoPlayIterator = function () {
		var a = this,
			b = a.currentSlide + a.options.slidesToScroll;
		a.paused || a.interrupted || a.focussed || (a.options.infinite === !1 && (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1 ? a.direction = 0 : 0 === a.direction && (b = a.currentSlide - a.options.slidesToScroll, a.currentSlide - 1 === 0 && (a.direction = 1))), a.slideHandler(b))
	}, b.prototype.buildArrows = function () {
		var b = this;
		b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({
			"aria-disabled": "true",
			tabindex: "-1"
		}))
	}, b.prototype.buildDots = function () {
		var b, c, d = this;
		if (d.options.dots === !0 && d.slideCount > d.options.slidesToShow) {
			for (d.$slider.addClass("slick-dotted"), c = a("<ul />").addClass(d.options.dotsClass), b = 0; b <= d.getDotCount(); b += 1) c.append(a("<li />").append(d.options.customPaging.call(this, d, b)));
			d.$dots = c.appendTo(d.options.appendDots), d.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
		}
	}, b.prototype.buildOut = function () {
		var b = this;
		b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function (b, c) {
			a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "")
		}), b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable")
	}, b.prototype.buildRows = function () {
		var a, b, c, d, e, f, g, h = this;
		if (d = document.createDocumentFragment(), f = h.$slider.children(), h.options.rows > 1) {
			for (g = h.options.slidesPerRow * h.options.rows, e = Math.ceil(f.length / g), a = 0; e > a; a++) {
				var i = document.createElement("div");
				for (b = 0; b < h.options.rows; b++) {
					var j = document.createElement("div");
					for (c = 0; c < h.options.slidesPerRow; c++) {
						var k = a * g + (b * h.options.slidesPerRow + c);
						f.get(k) && j.appendChild(f.get(k))
					}
					i.appendChild(j)
				}
				d.appendChild(i)
			}
			h.$slider.empty().append(d), h.$slider.children().children().children().css({
				width: 100 / h.options.slidesPerRow + "%",
				display: "inline-block"
			})
		}
	}, b.prototype.checkResponsive = function (b, c) {
		var d, e, f, g = this,
			h = !1,
			i = g.$slider.width(),
			j = window.innerWidth || a(window).width();
		if ("window" === g.respondTo ? f = j : "slider" === g.respondTo ? f = i : "min" === g.respondTo && (f = Math.min(j, i)), g.options.responsive && g.options.responsive.length && null !== g.options.responsive) {
			e = null;
			for (d in g.breakpoints) g.breakpoints.hasOwnProperty(d) && (g.originalSettings.mobileFirst === !1 ? f < g.breakpoints[d] && (e = g.breakpoints[d]) : f > g.breakpoints[d] && (e = g.breakpoints[d]));
			null !== e ? null !== g.activeBreakpoint ? (e !== g.activeBreakpoint || c) && (g.activeBreakpoint = e, "unslick" === g.breakpointSettings[e] ? g.unslick(e) : (g.options = a.extend({}, g.originalSettings, g.breakpointSettings[e]), b === !0 && (g.currentSlide = g.options.initialSlide), g.refresh(b)), h = e) : (g.activeBreakpoint = e, "unslick" === g.breakpointSettings[e] ? g.unslick(e) : (g.options = a.extend({}, g.originalSettings, g.breakpointSettings[e]), b === !0 && (g.currentSlide = g.options.initialSlide), g.refresh(b)), h = e) : null !== g.activeBreakpoint && (g.activeBreakpoint = null, g.options = g.originalSettings, b === !0 && (g.currentSlide = g.options.initialSlide), g.refresh(b), h = e), b || h === !1 || g.$slider.trigger("breakpoint", [g, h])
		}
	}, b.prototype.changeSlide = function (b, c) {
		var d, e, f, g = this,
			h = a(b.currentTarget);
		switch (h.is("a") && b.preventDefault(), h.is("li") || (h = h.closest("li")), f = g.slideCount % g.options.slidesToScroll !== 0, d = f ? 0 : (g.slideCount - g.currentSlide) % g.options.slidesToScroll, b.data.message) {
			case "previous":
				e = 0 === d ? g.options.slidesToScroll : g.options.slidesToShow - d, g.slideCount > g.options.slidesToShow && g.slideHandler(g.currentSlide - e, !1, c);
				break;
			case "next":
				e = 0 === d ? g.options.slidesToScroll : d, g.slideCount > g.options.slidesToShow && g.slideHandler(g.currentSlide + e, !1, c);
				break;
			case "index":
				var i = 0 === b.data.index ? 0 : b.data.index || h.index() * g.options.slidesToScroll;
				g.slideHandler(g.checkNavigable(i), !1, c), h.children().trigger("focus");
				break;
			default:
				return
		}
	}, b.prototype.checkNavigable = function (a) {
		var b, c, d = this;
		if (b = d.getNavigableIndexes(), c = 0, a > b[b.length - 1]) a = b[b.length - 1];
		else
			for (var e in b) {
				if (a < b[e]) {
					a = c;
					break
				}
				c = b[e]
			}
		return a
	}, b.prototype.cleanUpEvents = function () {
		var b = this;
		b.options.dots && null !== b.$dots && a("li", b.$dots).off("click.slick", b.changeSlide).off("mouseenter.slick", a.proxy(b.interrupt, b, !0)).off("mouseleave.slick", a.proxy(b.interrupt, b, !1)), b.$slider.off("focus.slick blur.slick"), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.cleanUpSlideEvents(), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition)
	}, b.prototype.cleanUpSlideEvents = function () {
		var b = this;
		b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1))
	}, b.prototype.cleanUpRows = function () {
		var a, b = this;
		b.options.rows > 1 && (a = b.$slides.children().children(), a.removeAttr("style"), b.$slider.empty().append(a))
	}, b.prototype.clickHandler = function (a) {
		var b = this;
		b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault())
	}, b.prototype.destroy = function (b) {
		var c = this;
		c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
			a(this).attr("style", a(this).data("originalStyling"))
		}), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.$slider.removeClass("slick-dotted"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c])
	}, b.prototype.disableTransition = function (a) {
		var b = this,
			c = {};
		c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
	}, b.prototype.fadeSlide = function (a, b) {
		var c = this;
		c.cssTransitions === !1 ? (c.$slides.eq(a).css({
			zIndex: c.options.zIndex
		}), c.$slides.eq(a).animate({
			opacity: 1
		}, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({
			opacity: 1,
			zIndex: c.options.zIndex
		}), b && setTimeout(function () {
			c.disableTransition(a), b.call()
		}, c.options.speed))
	}, b.prototype.fadeSlideOut = function (a) {
		var b = this;
		b.cssTransitions === !1 ? b.$slides.eq(a).animate({
			opacity: 0,
			zIndex: b.options.zIndex - 2
		}, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({
			opacity: 0,
			zIndex: b.options.zIndex - 2
		}))
	}, b.prototype.filterSlides = b.prototype.slickFilter = function (a) {
		var b = this;
		null !== a && (b.$slidesCache = b.$slides, b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit())
	}, b.prototype.focusHandler = function () {
		var b = this;
		b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function (c) {
			c.stopImmediatePropagation();
			var d = a(this);
			setTimeout(function () {
				b.options.pauseOnFocus && (b.focussed = d.is(":focus"), b.autoPlay())
			}, 0)
		})
	}, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function () {
		var a = this;
		return a.currentSlide
	}, b.prototype.getDotCount = function () {
		var a = this,
			b = 0,
			c = 0,
			d = 0;
		if (a.options.infinite === !0)
			for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
		else if (a.options.centerMode === !0) d = a.slideCount;
		else if (a.options.asNavFor)
			for (; b < a.slideCount;) ++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
		else d = 1 + Math.ceil((a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll);
		return d - 1
	}, b.prototype.getLeft = function (a) {
		var b, c, d, e = this,
			f = 0;
		return e.slideOffset = 0, c = e.$slides.first().outerHeight(!0), e.options.infinite === !0 ? (e.slideCount > e.options.slidesToShow && (e.slideOffset = e.slideWidth * e.options.slidesToShow * -1, f = c * e.options.slidesToShow * -1), e.slideCount % e.options.slidesToScroll !== 0 && a + e.options.slidesToScroll > e.slideCount && e.slideCount > e.options.slidesToShow && (a > e.slideCount ? (e.slideOffset = (e.options.slidesToShow - (a - e.slideCount)) * e.slideWidth * -1, f = (e.options.slidesToShow - (a - e.slideCount)) * c * -1) : (e.slideOffset = e.slideCount % e.options.slidesToScroll * e.slideWidth * -1, f = e.slideCount % e.options.slidesToScroll * c * -1))) : a + e.options.slidesToShow > e.slideCount && (e.slideOffset = (a + e.options.slidesToShow - e.slideCount) * e.slideWidth, f = (a + e.options.slidesToShow - e.slideCount) * c), e.slideCount <= e.options.slidesToShow && (e.slideOffset = 0, f = 0), e.options.centerMode === !0 && e.options.infinite === !0 ? e.slideOffset += e.slideWidth * Math.floor(e.options.slidesToShow / 2) - e.slideWidth : e.options.centerMode === !0 && (e.slideOffset = 0, e.slideOffset += e.slideWidth * Math.floor(e.options.slidesToShow / 2)), b = e.options.vertical === !1 ? a * e.slideWidth * -1 + e.slideOffset : a * c * -1 + f, e.options.variableWidth === !0 && (d = e.slideCount <= e.options.slidesToShow || e.options.infinite === !1 ? e.$slideTrack.children(".slick-slide").eq(a) : e.$slideTrack.children(".slick-slide").eq(a + e.options.slidesToShow), b = e.options.rtl === !0 ? d[0] ? -1 * (e.$slideTrack.width() - d[0].offsetLeft - d.width()) : 0 : d[0] ? -1 * d[0].offsetLeft : 0, e.options.centerMode === !0 && (d = e.slideCount <= e.options.slidesToShow || e.options.infinite === !1 ? e.$slideTrack.children(".slick-slide").eq(a) : e.$slideTrack.children(".slick-slide").eq(a + e.options.slidesToShow + 1), b = e.options.rtl === !0 ? d[0] ? -1 * (e.$slideTrack.width() - d[0].offsetLeft - d.width()) : 0 : d[0] ? -1 * d[0].offsetLeft : 0, b += (e.$list.width() - d.outerWidth()) / 2)), b
	}, b.prototype.getOption = b.prototype.slickGetOption = function (a) {
		var b = this;
		return b.options[a]
	}, b.prototype.getNavigableIndexes = function () {
		var a, b = this,
			c = 0,
			d = 0,
			e = [];
		for (b.options.infinite === !1 ? a = b.slideCount : (c = -1 * b.options.slidesToScroll, d = -1 * b.options.slidesToScroll, a = 2 * b.slideCount); a > c;) e.push(c), c = d + b.options.slidesToScroll, d += b.options.slidesToScroll <= b.options.slidesToShow ? b.options.slidesToScroll : b.options.slidesToShow;
		return e
	}, b.prototype.getSlick = function () {
		return this
	}, b.prototype.getSlideCount = function () {
		var b, c, d, e = this;
		return d = e.options.centerMode === !0 ? e.slideWidth * Math.floor(e.options.slidesToShow / 2) : 0, e.options.swipeToSlide === !0 ? (e.$slideTrack.find(".slick-slide").each(function (b, f) {
			return f.offsetLeft - d + a(f).outerWidth() / 2 > -1 * e.swipeLeft ? (c = f, !1) : void 0
		}), b = Math.abs(a(c).attr("data-slick-index") - e.currentSlide) || 1) : e.options.slidesToScroll
	}, b.prototype.goTo = b.prototype.slickGoTo = function (a, b) {
		var c = this;
		c.changeSlide({
			data: {
				message: "index",
				index: parseInt(a)
			}
		}, b)
	}, b.prototype.init = function (b) {
		var c = this;
		a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots(), c.checkResponsive(!0), c.focusHandler()), b && c.$slider.trigger("init", [c]), c.options.accessibility === !0 && c.initADA(), c.options.autoplay && (c.paused = !1, c.autoPlay())
	}, b.prototype.initADA = function () {
		var b = this;
		b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({
			"aria-hidden": "true",
			tabindex: "-1"
		}).find("a, input, button, select").attr({
			tabindex: "-1"
		}), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function (c) {
			a(this).attr({
				role: "option",
				"aria-describedby": "slick-slide" + b.instanceUid + c
			})
		}), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function (c) {
			a(this).attr({
				role: "presentation",
				"aria-selected": "false",
				"aria-controls": "navigation" + b.instanceUid + c,
				id: "slick-slide" + b.instanceUid + c
			})
		}).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b.activateADA()
	}, b.prototype.initArrowEvents = function () {
		var a = this;
		a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.off("click.slick").on("click.slick", {
			message: "previous"
		}, a.changeSlide), a.$nextArrow.off("click.slick").on("click.slick", {
			message: "next"
		}, a.changeSlide))
	}, b.prototype.initDotEvents = function () {
		var b = this;
		b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {
			message: "index"
		}, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.interrupt, b, !0)).on("mouseleave.slick", a.proxy(b.interrupt, b, !1))
	}, b.prototype.initSlideEvents = function () {
		var b = this;
		b.options.pauseOnHover && (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)))
	}, b.prototype.initializeEvents = function () {
		var b = this;
		b.initArrowEvents(), b.initDotEvents(), b.initSlideEvents(), b.$list.on("touchstart.slick mousedown.slick", {
			action: "start"
		}, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {
			action: "move"
		}, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {
			action: "end"
		}, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {
			action: "end"
		}, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)
	}, b.prototype.initUI = function () {
		var a = this;
		a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show()
	}, b.prototype.keyHandler = function (a) {
		var b = this;
		a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({
			data: {
				message: b.options.rtl === !0 ? "next" : "previous"
			}
		}) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({
			data: {
				message: b.options.rtl === !0 ? "previous" : "next"
			}
		}))
	}, b.prototype.lazyLoad = function () {
		function b(b) {
			a("img[data-lazy]", b).each(function () {
				var b = a(this),
					c = a(this).attr("data-lazy"),
					d = document.createElement("img");
				d.onload = function () {
					b.animate({
						opacity: 0
					}, 100, function () {
						b.attr("src", c).animate({
							opacity: 1
						}, 200, function () {
							b.removeAttr("data-lazy").removeClass("slick-loading")
						}), g.$slider.trigger("lazyLoaded", [g, b, c])
					})
				}, d.onerror = function () {
					b.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), g.$slider.trigger("lazyLoadError", [g, b, c])
				}, d.src = c
			})
		}
		var c, d, e, f, g = this;
		g.options.centerMode === !0 ? g.options.infinite === !0 ? (e = g.currentSlide + (g.options.slidesToShow / 2 + 1), f = e + g.options.slidesToShow + 2) : (e = Math.max(0, g.currentSlide - (g.options.slidesToShow / 2 + 1)), f = 2 + (g.options.slidesToShow / 2 + 1) + g.currentSlide) : (e = g.options.infinite ? g.options.slidesToShow + g.currentSlide : g.currentSlide, f = Math.ceil(e + g.options.slidesToShow), g.options.fade === !0 && (e > 0 && e--, f <= g.slideCount && f++)), c = g.$slider.find(".slick-slide").slice(e, f), b(c), g.slideCount <= g.options.slidesToShow ? (d = g.$slider.find(".slick-slide"), b(d)) : g.currentSlide >= g.slideCount - g.options.slidesToShow ? (d = g.$slider.find(".slick-cloned").slice(0, g.options.slidesToShow), b(d)) : 0 === g.currentSlide && (d = g.$slider.find(".slick-cloned").slice(-1 * g.options.slidesToShow), b(d))
	}, b.prototype.loadSlider = function () {
		var a = this;
		a.setPosition(), a.$slideTrack.css({
			opacity: 1
		}), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
	}, b.prototype.next = b.prototype.slickNext = function () {
		var a = this;
		a.changeSlide({
			data: {
				message: "next"
			}
		})
	}, b.prototype.orientationChange = function () {
		var a = this;
		a.checkResponsive(), a.setPosition()
	}, b.prototype.pause = b.prototype.slickPause = function () {
		var a = this;
		a.autoPlayClear(), a.paused = !0
	}, b.prototype.play = b.prototype.slickPlay = function () {
		var a = this;
		a.autoPlay(), a.options.autoplay = !0, a.paused = !1, a.focussed = !1, a.interrupted = !1
	}, b.prototype.postSlide = function (a) {
		var b = this;
		b.unslicked || (b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay && b.autoPlay(), b.options.accessibility === !0 && b.initADA())
	}, b.prototype.prev = b.prototype.slickPrev = function () {
		var a = this;
		a.changeSlide({
			data: {
				message: "previous"
			}
		})
	}, b.prototype.preventDefault = function (a) {
		a.preventDefault()
	}, b.prototype.progressiveLazyLoad = function (b) {
		b = b || 1;
		var c, d, e, f = this,
			g = a("img[data-lazy]", f.$slider);
		g.length ? (c = g.first(), d = c.attr("data-lazy"), e = document.createElement("img"), e.onload = function () {
			c.attr("src", d).removeAttr("data-lazy").removeClass("slick-loading"), f.options.adaptiveHeight === !0 && f.setPosition(), f.$slider.trigger("lazyLoaded", [f, c, d]), f.progressiveLazyLoad()
		}, e.onerror = function () {
			3 > b ? setTimeout(function () {
				f.progressiveLazyLoad(b + 1)
			}, 500) : (c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), f.$slider.trigger("lazyLoadError", [f, c, d]), f.progressiveLazyLoad())
		}, e.src = d) : f.$slider.trigger("allImagesLoaded", [f])
	}, b.prototype.refresh = function (b) {
		var c, d, e = this;
		d = e.slideCount - e.options.slidesToShow, !e.options.infinite && e.currentSlide > d && (e.currentSlide = d), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), c = e.currentSlide, e.destroy(!0), a.extend(e, e.initials, {
			currentSlide: c
		}), e.init(), b || e.changeSlide({
			data: {
				message: "index",
				index: c
			}
		}, !1)
	}, b.prototype.registerBreakpoints = function () {
		var b, c, d, e = this,
			f = e.options.responsive || null;
		if ("array" === a.type(f) && f.length) {
			e.respondTo = e.options.respondTo || "window";
			for (b in f)
				if (d = e.breakpoints.length - 1, c = f[b].breakpoint, f.hasOwnProperty(b)) {
					for (; d >= 0;) e.breakpoints[d] && e.breakpoints[d] === c && e.breakpoints.splice(d, 1), d--;
					e.breakpoints.push(c), e.breakpointSettings[c] = f[b].settings
				}
			e.breakpoints.sort(function (a, b) {
				return e.options.mobileFirst ? a - b : b - a
			})
		}
	}, b.prototype.reinit = function () {
		var b = this;
		b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.cleanUpSlideEvents(), b.initSlideEvents(), b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.setPosition(), b.focusHandler(), b.paused = !b.options.autoplay, b.autoPlay(), b.$slider.trigger("reInit", [b])
	}, b.prototype.resize = function () {
		var b = this;
		a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function () {
			b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition()
		}, 50))
	}, b.prototype.removeSlide = b.prototype.slickRemove = function (a, b, c) {
		var d = this;
		return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, !(d.slideCount < 1 || 0 > a || a > d.slideCount - 1) && (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit())
	}, b.prototype.setCSS = function (a) {
		var b, c, d = this,
			e = {};
		d.options.rtl === !0 && (a = -a), b = "left" == d.positionProp ? Math.ceil(a) + "px" : "0px", c = "top" == d.positionProp ? Math.ceil(a) + "px" : "0px", e[d.positionProp] = a, d.transformsEnabled === !1 ? d.$slideTrack.css(e) : (e = {}, d.cssTransitions === !1 ? (e[d.animType] = "translate(" + b + ", " + c + ")", d.$slideTrack.css(e)) : (e[d.animType] = "translate3d(" + b + ", " + c + ", 0px)", d.$slideTrack.css(e)))
	}, b.prototype.setDimensions = function () {
		var a = this;
		a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({
			padding: "0px " + a.options.centerPadding
		}) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({
			padding: a.options.centerPadding + " 0px"
		})), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
		var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
		a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b)
	}, b.prototype.setFade = function () {
		var b, c = this;
		c.$slides.each(function (d, e) {
			b = c.slideWidth * d * -1, c.options.rtl === !0 ? a(e).css({
				position: "relative",
				right: b,
				top: 0,
				zIndex: c.options.zIndex - 2,
				opacity: 0
			}) : a(e).css({
				position: "relative",
				left: b,
				top: 0,
				zIndex: c.options.zIndex - 2,
				opacity: 0
			})
		}), c.$slides.eq(c.currentSlide).css({
			zIndex: c.options.zIndex - 1,
			opacity: 1
		})
	}, b.prototype.setHeight = function () {
		var a = this;
		if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
			var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
			a.$list.css("height", b)
		}
	}, b.prototype.setOption = b.prototype.slickSetOption = function () {
		var b, c, d, e, f, g = this,
			h = !1;
		if ("object" === a.type(arguments[0]) ? (d = arguments[0], h = arguments[1], f = "multiple") : "string" === a.type(arguments[0]) && (d = arguments[0], e = arguments[1], h = arguments[2], "responsive" === arguments[0] && "array" === a.type(arguments[1]) ? f = "responsive" : "undefined" != typeof arguments[1] && (f = "single")), "single" === f) g.options[d] = e;
		else if ("multiple" === f) a.each(d, function (a, b) {
			g.options[a] = b
		});
		else if ("responsive" === f)
			for (c in e)
				if ("array" !== a.type(g.options.responsive)) g.options.responsive = [e[c]];
				else {
					for (b = g.options.responsive.length - 1; b >= 0;) g.options.responsive[b].breakpoint === e[c].breakpoint && g.options.responsive.splice(b, 1), b--;
					g.options.responsive.push(e[c])
				}
		h && (g.unload(), g.reinit())
	}, b.prototype.setPosition = function () {
		var a = this;
		a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a])
	}, b.prototype.setProps = function () {
		var a = this,
			b = document.body.style;
		a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1
	}, b.prototype.setSlideClasses = function (a) {
		var b, c, d, e, f = this;
		c = f.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), f.$slides.eq(a).addClass("slick-current"), f.options.centerMode === !0 ? (b = Math.floor(f.options.slidesToShow / 2), f.options.infinite === !0 && (a >= b && a <= f.slideCount - 1 - b ? f.$slides.slice(a - b, a + b + 1).addClass("slick-active").attr("aria-hidden", "false") : (d = f.options.slidesToShow + a, c.slice(d - b + 1, d + b + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? c.eq(c.length - 1 - f.options.slidesToShow).addClass("slick-center") : a === f.slideCount - 1 && c.eq(f.options.slidesToShow).addClass("slick-center")), f.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= f.slideCount - f.options.slidesToShow ? f.$slides.slice(a, a + f.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : c.length <= f.options.slidesToShow ? c.addClass("slick-active").attr("aria-hidden", "false") : (e = f.slideCount % f.options.slidesToShow, d = f.options.infinite === !0 ? f.options.slidesToShow + a : a, f.options.slidesToShow == f.options.slidesToScroll && f.slideCount - a < f.options.slidesToShow ? c.slice(d - (f.options.slidesToShow - e), d + e).addClass("slick-active").attr("aria-hidden", "false") : c.slice(d, d + f.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === f.options.lazyLoad && f.lazyLoad()
	}, b.prototype.setupInfinite = function () {
		var b, c, d, e = this;
		if (e.options.fade === !0 && (e.options.centerMode = !1), e.options.infinite === !0 && e.options.fade === !1 && (c = null, e.slideCount > e.options.slidesToShow)) {
			for (d = e.options.centerMode === !0 ? e.options.slidesToShow + 1 : e.options.slidesToShow, b = e.slideCount; b > e.slideCount - d; b -= 1) c = b - 1, a(e.$slides[c]).clone(!0).attr("id", "").attr("data-slick-index", c - e.slideCount).prependTo(e.$slideTrack).addClass("slick-cloned");
			for (b = 0; d > b; b += 1) c = b, a(e.$slides[c]).clone(!0).attr("id", "").attr("data-slick-index", c + e.slideCount).appendTo(e.$slideTrack).addClass("slick-cloned");
			e.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
				a(this).attr("id", "")
			})
		}
	}, b.prototype.interrupt = function (a) {
		var b = this;
		a || b.autoPlay(), b.interrupted = a
	}, b.prototype.selectHandler = function (b) {
		var c = this,
			d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
			e = parseInt(d.attr("data-slick-index"));
		return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e)
	}, b.prototype.slideHandler = function (a, b, c) {
		var d, e, f, g, h, i = null,
			j = this;
		return b = b || !1, j.animating === !0 && j.options.waitForAnimate === !0 || j.options.fade === !0 && j.currentSlide === a || j.slideCount <= j.options.slidesToShow ? void 0 : (b === !1 && j.asNavFor(a), d = a, i = j.getLeft(d), g = j.getLeft(j.currentSlide), j.currentLeft = null === j.swipeLeft ? g : j.swipeLeft, j.options.infinite === !1 && j.options.centerMode === !1 && (0 > a || a > j.getDotCount() * j.options.slidesToScroll) ? void(j.options.fade === !1 && (d = j.currentSlide, c !== !0 ? j.animateSlide(g, function () {
			j.postSlide(d)
		}) : j.postSlide(d))) : j.options.infinite === !1 && j.options.centerMode === !0 && (0 > a || a > j.slideCount - j.options.slidesToScroll) ? void(j.options.fade === !1 && (d = j.currentSlide, c !== !0 ? j.animateSlide(g, function () {
			j.postSlide(d)
		}) : j.postSlide(d))) : (j.options.autoplay && clearInterval(j.autoPlayTimer), e = 0 > d ? j.slideCount % j.options.slidesToScroll !== 0 ? j.slideCount - j.slideCount % j.options.slidesToScroll : j.slideCount + d : d >= j.slideCount ? j.slideCount % j.options.slidesToScroll !== 0 ? 0 : d - j.slideCount : d, j.animating = !0, j.$slider.trigger("beforeChange", [j, j.currentSlide, e]), f = j.currentSlide, j.currentSlide = e, j.setSlideClasses(j.currentSlide), j.options.asNavFor && (h = j.getNavTarget(), h = h.slick("getSlick"), h.slideCount <= h.options.slidesToShow && h.setSlideClasses(j.currentSlide)), j.updateDots(), j.updateArrows(), j.options.fade === !0 ? (c !== !0 ? (j.fadeSlideOut(f), j.fadeSlide(e, function () {
			j.postSlide(e)
		})) : j.postSlide(e), void j.animateHeight()) : void(c !== !0 ? j.animateSlide(i, function () {
			j.postSlide(e)
		}) : j.postSlide(e))))
	}, b.prototype.startLoad = function () {
		var a = this;
		a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading")
	}, b.prototype.swipeDirection = function () {
		var a, b, c, d, e = this;
		return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "down" : "up" : "vertical"
	}, b.prototype.swipeEnd = function (a) {
		var b, c, d = this;
		if (d.dragging = !1, d.interrupted = !1, d.shouldClick = !(d.touchObject.swipeLength > 10), void 0 === d.touchObject.curX) return !1;
		if (d.touchObject.edgeHit === !0 && d.$slider.trigger("edge", [d, d.swipeDirection()]), d.touchObject.swipeLength >= d.touchObject.minSwipe) {
			switch (c = d.swipeDirection()) {
				case "left":
				case "down":
					b = d.options.swipeToSlide ? d.checkNavigable(d.currentSlide + d.getSlideCount()) : d.currentSlide + d.getSlideCount(), d.currentDirection = 0;
					break;
				case "right":
				case "up":
					b = d.options.swipeToSlide ? d.checkNavigable(d.currentSlide - d.getSlideCount()) : d.currentSlide - d.getSlideCount(), d.currentDirection = 1
			}
			"vertical" != c && (d.slideHandler(b), d.touchObject = {}, d.$slider.trigger("swipe", [d, c]))
		} else d.touchObject.startX !== d.touchObject.curX && (d.slideHandler(d.currentSlide), d.touchObject = {})
	}, b.prototype.swipeHandler = function (a) {
		var b = this;
		if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse"))) switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {
			case "start":
				b.swipeStart(a);
				break;
			case "move":
				b.swipeMove(a);
				break;
			case "end":
				b.swipeEnd(a)
		}
	}, b.prototype.swipeMove = function (a) {
		var b, c, d, e, f, g = this;
		return f = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !(!g.dragging || f && 1 !== f.length) && (b = g.getLeft(g.currentSlide), g.touchObject.curX = void 0 !== f ? f[0].pageX : a.clientX, g.touchObject.curY = void 0 !== f ? f[0].pageY : a.clientY, g.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(g.touchObject.curX - g.touchObject.startX, 2))), g.options.verticalSwiping === !0 && (g.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(g.touchObject.curY - g.touchObject.startY, 2)))), c = g.swipeDirection(), "vertical" !== c ? (void 0 !== a.originalEvent && g.touchObject.swipeLength > 4 && a.preventDefault(), e = (g.options.rtl === !1 ? 1 : -1) * (g.touchObject.curX > g.touchObject.startX ? 1 : -1), g.options.verticalSwiping === !0 && (e = g.touchObject.curY > g.touchObject.startY ? 1 : -1), d = g.touchObject.swipeLength, g.touchObject.edgeHit = !1, g.options.infinite === !1 && (0 === g.currentSlide && "right" === c || g.currentSlide >= g.getDotCount() && "left" === c) && (d = g.touchObject.swipeLength * g.options.edgeFriction, g.touchObject.edgeHit = !0), g.options.vertical === !1 ? g.swipeLeft = b + d * e : g.swipeLeft = b + d * (g.$list.height() / g.listWidth) * e, g.options.verticalSwiping === !0 && (g.swipeLeft = b + d * e), g.options.fade !== !0 && g.options.touchMove !== !1 && (g.animating === !0 ? (g.swipeLeft = null, !1) : void g.setCSS(g.swipeLeft))) : void 0)
	}, b.prototype.swipeStart = function (a) {
		var b, c = this;
		return c.interrupted = !0, 1 !== c.touchObject.fingerCount || c.slideCount <= c.options.slidesToShow ? (c.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (b = a.originalEvent.touches[0]), c.touchObject.startX = c.touchObject.curX = void 0 !== b ? b.pageX : a.clientX, c.touchObject.startY = c.touchObject.curY = void 0 !== b ? b.pageY : a.clientY, void(c.dragging = !0))
	}, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function () {
		var a = this;
		null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit())
	}, b.prototype.unload = function () {
		var b = this;
		a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
	}, b.prototype.unslick = function (a) {
		var b = this;
		b.$slider.trigger("unslick", [b, a]), b.destroy()
	}, b.prototype.updateArrows = function () {
		var a, b = this;
		a = Math.floor(b.options.slidesToShow / 2), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && !b.options.infinite && (b.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), b.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === b.currentSlide ? (b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), b.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : b.currentSlide >= b.slideCount - b.options.slidesToShow && b.options.centerMode === !1 ? (b.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), b.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : b.currentSlide >= b.slideCount - 1 && b.options.centerMode === !0 && (b.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), b.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
	}, b.prototype.updateDots = function () {
		var a = this;
		null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
	}, b.prototype.visibility = function () {
		var a = this;
		a.options.autoplay && (document[a.hidden] ? a.interrupted = !0 : a.interrupted = !1)
	}, a.fn.slick = function () {
		var a, c, d = this,
			e = arguments[0],
			f = Array.prototype.slice.call(arguments, 1),
			g = d.length;
		for (a = 0; g > a; a++)
			if ("object" == typeof e || "undefined" == typeof e ? d[a].slick = new b(d[a], e) : c = d[a].slick[e].apply(d[a].slick, f), "undefined" != typeof c) return c;
		return d
	}
});
var EasyAutocomplete = function (a) {
		return a.Configuration = function (a) {
			function b() {
				if ("xml" === a.dataType && (a.getValue || (a.getValue = function (a) {
						return $(a).text()
					}), a.list || (a.list = {}), a.list.sort || (a.list.sort = {}), a.list.sort.method = function (b, c) {
						return b = a.getValue(b), c = a.getValue(c), b < c ? -1 : b > c ? 1 : 0
					}, a.list.match || (a.list.match = {}), a.list.match.method = function (b, c) {
						return b = a.getValue(b), c = a.getValue(c), b === c
					}), void 0 !== a.categories && a.categories instanceof Array) {
					for (var b = [], c = 0, d = a.categories.length; c < d; c += 1) {
						var e = a.categories[c];
						for (var f in h.categories[0]) void 0 === e[f] && (e[f] = h.categories[0][f]);
						b.push(e)
					}
					a.categories = b
				}
			}

			function c() {
				function b(a, c) {
					var d = a || {};
					for (var e in a) void 0 !== c[e] && null !== c[e] && ("object" != typeof c[e] || c[e] instanceof Array ? d[e] = c[e] : b(a[e], c[e]));
					return void 0 !== c.data && null !== c.data && "object" == typeof c.data && (d.data = c.data), d
				}
				h = b(h, a)
			}

			function d() {
				if ("list-required" !== h.url && "function" != typeof h.url) {
					var b = h.url;
					h.url = function () {
						return b
					}
				}
				if (void 0 !== h.ajaxSettings.url && "function" != typeof h.ajaxSettings.url) {
					var b = h.ajaxSettings.url;
					h.ajaxSettings.url = function () {
						return b
					}
				}
				if ("string" == typeof h.listLocation) {
					var c = h.listLocation;
					"XML" === h.dataType.toUpperCase() ? h.listLocation = function (a) {
						return $(a).find(c)
					} : h.listLocation = function (a) {
						return a[c]
					}
				}
				if ("string" == typeof h.getValue) {
					var d = h.getValue;
					h.getValue = function (a) {
						return a[d]
					}
				}
				void 0 !== a.categories && (h.categoriesAssigned = !0)
			}

			function e() {
				void 0 !== a.ajaxSettings && "object" == typeof a.ajaxSettings ? h.ajaxSettings = a.ajaxSettings : h.ajaxSettings = {}
			}

			function f(a) {
				return void 0 !== h[a] && null !== h[a]
			}

			function g(a, b) {
				function c(b, e) {
					for (var f in e) void 0 === b[f] && a.log("Property '" + f + "' does not exist in EasyAutocomplete options API."), "object" != typeof b[f] || d(f) || c(b[f], e[f])
				}

				function d(a) {
					var b = ["ajaxSettings", "template"];
					return Array.prototype.contains = function (a) {
						for (var b = this.length; b--;)
							if (this[b] === a) return !0;
						return !1
					}, b.contains(a)
				}
				c(h, b)
			}
			var h = {
				data: "list-required",
				url: "list-required",
				dataType: "json",
				listLocation: function (a) {
					return a
				},
				xmlElementName: "",
				getValue: function (a) {
					return a
				},
				autocompleteOff: !0,
				placeholder: !1,
				ajaxCallback: function () {},
				matchResponseProperty: !1,
				list: {
					sort: {
						enabled: !1,
						method: function (a, b) {
							return a = h.getValue(a), b = h.getValue(b), a < b ? -1 : a > b ? 1 : 0
						}
					},
					maxNumberOfElements: 6,
					hideOnEmptyPhrase: !0,
					match: {
						enabled: !1,
						caseSensitive: !1,
						method: function (a, b) {
							return a = h.getValue(a), b = h.getValue(b), a === b
						}
					},
					showAnimation: {
						type: "normal",
						time: 400,
						callback: function () {}
					},
					hideAnimation: {
						type: "normal",
						time: 400,
						callback: function () {}
					},
					onClickEvent: function () {},
					onSelectItemEvent: function () {},
					onLoadEvent: function () {},
					onChooseEvent: function () {},
					onKeyEnterEvent: function () {},
					onMouseOverEvent: function () {},
					onMouseOutEvent: function () {},
					onShowListEvent: function () {},
					onHideListEvent: function () {}
				},
				highlightPhrase: !0,
				theme: "",
				cssClasses: "",
				minCharNumber: 0,
				requestDelay: 0,
				adjustWidth: !0,
				ajaxSettings: {},
				preparePostData: function (a, b) {
					return a
				},
				loggerEnabled: !0,
				template: "",
				categoriesAssigned: !1,
				categories: [{
					maxNumberOfElements: 4
				}]
			};
			this.get = function (a) {
				return h[a]
			}, this.equals = function (a, b) {
				return !(!f(a) || h[a] !== b)
			}, this.checkDataUrlProperties = function () {
				return "list-required" !== h.url || "list-required" !== h.data
			}, this.checkRequiredProperties = function () {
				for (var a in h)
					if ("required" === h[a]) return logger.error("Option " + a + " must be defined"), !1;
				return !0
			}, this.printPropertiesThatDoesntExist = function (a, b) {
				g(a, b)
			}, b(), c(), h.loggerEnabled === !0 && g(console, a), e(), d()
		}, a
	}(EasyAutocomplete || {}),
	EasyAutocomplete = function (a) {
		return a.Logger = function () {
			this.error = function (a) {
				console.log("ERROR: " + a)
			}, this.warning = function (a) {
				console.log("WARNING: " + a)
			}
		}, a
	}(EasyAutocomplete || {}),
	EasyAutocomplete = function (a) {
		return a.Constans = function () {
			var a = {
				CONTAINER_CLASS: "easy-autocomplete-container",
				CONTAINER_ID: "eac-container-",
				WRAPPER_CSS_CLASS: "easy-autocomplete"
			};
			this.getValue = function (b) {
				return a[b]
			}
		}, a
	}(EasyAutocomplete || {}),
	EasyAutocomplete = function (a) {
		return a.ListBuilderService = function (a, b) {
			function c(b, c) {
				function d() {
					var d, e = {};
					return void 0 !== b.xmlElementName && (e.xmlElementName = b.xmlElementName), void 0 !== b.listLocation ? d = b.listLocation : void 0 !== a.get("listLocation") && (d = a.get("listLocation")), void 0 !== d ? "string" == typeof d ? e.data = $(c).find(d) : "function" == typeof d && (e.data = d(c)) : e.data = c, e
				}

				function e() {
					var a = {};
					return void 0 !== b.listLocation ? "string" == typeof b.listLocation ? a.data = c[b.listLocation] : "function" == typeof b.listLocation && (a.data = b.listLocation(c)) : a.data = c, a
				}
				var f = {};
				if (f = "XML" === a.get("dataType").toUpperCase() ? d() : e(), void 0 !== b.header && (f.header = b.header), void 0 !== b.maxNumberOfElements && (f.maxNumberOfElements = b.maxNumberOfElements), void 0 !== a.get("list").maxNumberOfElements && (f.maxListSize = a.get("list").maxNumberOfElements), void 0 !== b.getValue)
					if ("string" == typeof b.getValue) {
						var g = b.getValue;
						f.getValue = function (a) {
							return a[g]
						}
					} else "function" == typeof b.getValue && (f.getValue = b.getValue);
				else f.getValue = a.get("getValue");
				return f
			}

			function d(b) {
				var c = [];
				return void 0 === b.xmlElementName && (b.xmlElementName = a.get("xmlElementName")), $(b.data).find(b.xmlElementName).each(function () {
					c.push(this)
				}), c
			}
			this.init = function (b) {
				var c = [],
					d = {};
				return d.data = a.get("listLocation")(b), d.getValue = a.get("getValue"), d.maxListSize = a.get("list").maxNumberOfElements, c.push(d), c
			}, this.updateCategories = function (b, d) {
				if (a.get("categoriesAssigned")) {
					b = [];
					for (var e = 0; e < a.get("categories").length; e += 1) {
						var f = c(a.get("categories")[e], d);
						b.push(f)
					}
				}
				return b
			}, this.convertXml = function (b) {
				if ("XML" === a.get("dataType").toUpperCase())
					for (var c = 0; c < b.length; c += 1) b[c].data = d(b[c]);
				return b
			}, this.processData = function (c, d) {
				for (var e = 0, f = c.length; e < f; e += 1) c[e].data = b(a, c[e], d);
				return c
			}, this.checkIfDataExists = function (a) {
				for (var b = 0, c = a.length; b < c; b += 1)
					if (void 0 !== a[b].data && a[b].data instanceof Array && a[b].data.length > 0) return !0;
				return !1
			}
		}, a
	}(EasyAutocomplete || {}),
	EasyAutocomplete = function (a) {
		return a.proccess = function (a, b, c) {
			function d(b, c) {
				var d = [],
					e = "";
				if (a.get("list").match.enabled)
					for (var f = 0, g = b.length; f < g; f += 1) e = a.get("getValue")(b[f]), a.get("list").match.caseSensitive || ("string" == typeof e && (e = e.toLowerCase()), c = c.toLowerCase()), e.search(c) > -1 && d.push(b[f]);
				else d = b;
				return d
			}

			function e(a) {
				return void 0 !== b.maxNumberOfElements && a.length > b.maxNumberOfElements && (a = a.slice(0, b.maxNumberOfElements)), a
			}

			function f(b) {
				return a.get("list").sort.enabled && b.sort(a.get("list").sort.method), b
			}
			var g = b.data,
				h = c;
			return g = d(g, h), g = e(g), g = f(g)
		}, a
	}(EasyAutocomplete || {}),
	EasyAutocomplete = function (a) {
		return a.Template = function (a) {
			var b = {
					basic: {
						type: "basic",
						method: function (a) {
							return a
						},
						cssClass: ""
					},
					description: {
						type: "description",
						fields: {
							description: "description"
						},
						method: function (a) {
							return a + " - description"
						},
						cssClass: "eac-description"
					},
					iconLeft: {
						type: "iconLeft",
						fields: {
							icon: ""
						},
						method: function (a) {
							return a
						},
						cssClass: "eac-icon-left"
					},
					iconRight: {
						type: "iconRight",
						fields: {
							iconSrc: ""
						},
						method: function (a) {
							return a
						},
						cssClass: "eac-icon-right"
					},
					links: {
						type: "links",
						fields: {
							link: ""
						},
						method: function (a) {
							return a
						},
						cssClass: ""
					},
					custom: {
						type: "custom",
						method: function () {},
						cssClass: ""
					}
				},
				c = function (a) {
					var c, d = a.fields;
					return "description" === a.type ? (c = b.description.method, "string" == typeof d.description ? c = function (a, b) {
						return a + " - <span>" + b[d.description] + "</span>"
					} : "function" == typeof d.description && (c = function (a, b) {
						return a + " - <span>" + d.description(b) + "</span>"
					}), c) : "iconRight" === a.type ? ("string" == typeof d.iconSrc ? c = function (a, b) {
						return a + "<img class='eac-icon' src='" + b[d.iconSrc] + "' />"
					} : "function" == typeof d.iconSrc && (c = function (a, b) {
						return a + "<img class='eac-icon' src='" + d.iconSrc(b) + "' />"
					}), c) : "iconLeft" === a.type ? ("string" == typeof d.iconSrc ? c = function (a, b) {
						return "<img class='eac-icon' src='" + b[d.iconSrc] + "' />" + a
					} : "function" == typeof d.iconSrc && (c = function (a, b) {
						return "<img class='eac-icon' src='" + d.iconSrc(b) + "' />" + a
					}), c) : "links" === a.type ? ("string" == typeof d.link ? c = function (a, b) {
						return "<a href='" + b[d.link] + "' >" + a + "</a>"
					} : "function" == typeof d.link && (c = function (a, b) {
						return "<a href='" + d.link(b) + "' >" + a + "</a>"
					}), c) : "custom" === a.type ? a.method : b.basic.method
				},
				d = function (a) {
					return a && a.type && a.type && b[a.type] ? c(a) : b.basic.method
				},
				e = function (a) {
					var c = function () {
						return ""
					};
					return a && a.type && a.type && b[a.type] ? function () {
						var c = b[a.type].cssClass;
						return function () {
							return c
						}
					}() : c
				};
			this.getTemplateClass = e(a), this.build = d(a)
		}, a
	}(EasyAutocomplete || {}),
	EasyAutocomplete = function (a) {
		return a.main = function (b, c) {
			function d() {
				return 0 === t.length ? void p.error("Input field doesn't exist.") : o.checkDataUrlProperties() ? o.checkRequiredProperties() ? (e(), void g()) : void p.error("Will not work without mentioned properties.") : void p.error("One of options variables 'data' or 'url' must be defined.")
			}

			function e() {
				function a() {
					var a = $("<div>"),
						c = n.getValue("WRAPPER_CSS_CLASS");
					o.get("theme") && "" !== o.get("theme") && (c += " eac-" + o.get("theme")), o.get("cssClasses") && "" !== o.get("cssClasses") && (c += " " + o.get("cssClasses")), "" !== q.getTemplateClass() && (c += " " + q.getTemplateClass()), a.addClass(c), t.wrap(a), o.get("adjustWidth") === !0 && b()
				}

				function b() {
					var a = t.outerWidth();
					t.parent().css("width", a)
				}

				function c() {
					t.unwrap()
				}

				function d() {
					var a = $("<div>").addClass(n.getValue("CONTAINER_CLASS"));
					a.attr("id", f()).prepend($("<ul>")),
						function () {
							a.on("show.eac", function () {
								switch (o.get("list").showAnimation.type) {
									case "slide":
										var b = o.get("list").showAnimation.time,
											c = o.get("list").showAnimation.callback;
										a.find("ul").slideDown(b, c);
										break;
									case "fade":
										var b = o.get("list").showAnimation.time,
											c = o.get("list").showAnimation.callback;
										a.find("ul").fadeIn(b), c;
										break;
									default:
										a.find("ul").show()
								}
								o.get("list").onShowListEvent()
							}).on("hide.eac", function () {
								switch (o.get("list").hideAnimation.type) {
									case "slide":
										var b = o.get("list").hideAnimation.time,
											c = o.get("list").hideAnimation.callback;
										a.find("ul").slideUp(b, c);
										break;
									case "fade":
										var b = o.get("list").hideAnimation.time,
											c = o.get("list").hideAnimation.callback;
										a.find("ul").fadeOut(b, c);
										break;
									default:
										a.find("ul").hide()
								}
								o.get("list").onHideListEvent()
							}).on("selectElement.eac", function () {
								a.find("ul li").removeClass("selected"), a.find("ul li").eq(w).addClass("selected"), o.get("list").onSelectItemEvent()
							}).on("loadElements.eac", function (b, c, d) {
								var e = "",
									f = a.find("ul");
								f.empty().detach(), v = [];
								for (var h = 0, i = 0, k = c.length; i < k; i += 1) {
									var l = c[i].data;
									if (0 !== l.length) {
										void 0 !== c[i].header && c[i].header.length > 0 && f.append("<div class='eac-category' >" + c[i].header + "</div>");
										for (var m = 0, n = l.length; m < n && h < c[i].maxListSize; m += 1) e = $("<li><div class='eac-item'></div></li>"),
											function () {
												var a = m,
													b = h,
													f = c[i].getValue(l[a]);
												e.find(" > div").on("click", function () {
													t.val(f).trigger("change"), w = b, j(b), o.get("list").onClickEvent(), o.get("list").onChooseEvent()
												}).mouseover(function () {
													w = b, j(b), o.get("list").onMouseOverEvent()
												}).mouseout(function () {
													o.get("list").onMouseOutEvent()
												}).html(q.build(g(f, d), l[a]))
											}(), f.append(e), v.push(l[m]), h += 1
									}
								}
								a.append(f), o.get("list").onLoadEvent()
							})
						}(), t.after(a)
				}

				function e() {
					t.next("." + n.getValue("CONTAINER_CLASS")).remove()
				}

				function g(a, b) {
					return o.get("highlightPhrase") && "" !== b ? i(a, b) : a
				}

				function h(a) {
					return a.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&")
				}

				function i(a, b) {
					var c = h(b);
					return (a + "").replace(new RegExp("(" + c + ")", "gi"), "<b>$1</b>")
				}
				t.parent().hasClass(n.getValue("WRAPPER_CSS_CLASS")) && (e(), c()), a(), d(), u = $("#" + f()), o.get("placeholder") && t.attr("placeholder", o.get("placeholder"))
			}

			function f() {
				var a = t.attr("id");
				return a = n.getValue("CONTAINER_ID") + a
			}

			function g() {
				function a() {
					s("autocompleteOff", !0) && g(), b(), c(), d(), e(), f()
				}

				function b() {
					t.off("keyup").keyup(function (a) {
						function b(a) {
							function b() {
								var a = {},
									b = o.get("ajaxSettings") || {};
								for (var c in b) a[c] = b[c];
								return a
							}

							function c(a, b) {
								return o.get("matchResponseProperty") === !1 || ("string" == typeof o.get("matchResponseProperty") ? b[o.get("matchResponseProperty")] === a : "function" != typeof o.get("matchResponseProperty") || o.get("matchResponseProperty")(b) === a)
							}
							if (!(a.length < o.get("minCharNumber"))) {
								if ("list-required" !== o.get("data")) {
									var d = o.get("data"),
										e = r.init(d);
									e = r.updateCategories(e, d), e = r.processData(e, a), k(e, a), t.parent().find("li").length > 0 ? h() : i()
								}
								var f = b();
								void 0 !== f.url && "" !== f.url || (f.url = o.get("url")), void 0 !== f.dataType && "" !== f.dataType || (f.dataType = o.get("dataType")), void 0 !== f.url && "list-required" !== f.url && (f.url = f.url(a), f.data = o.get("preparePostData")(f.data, a), $.ajax(f).done(function (b) {
									var d = r.init(b);
									d = r.updateCategories(d, b), d = r.convertXml(d), c(a, b) && (d = r.processData(d, a), k(d, a)), r.checkIfDataExists(d) && t.parent().find("li").length > 0 ? h() : i(), o.get("ajaxCallback")()
								}).fail(function () {
									p.warning("Fail to load response data")
								}).always(function () {}))
							}
						}
						switch (a.keyCode) {
							case 27:
								i(), l();
								break;
							case 38:
								a.preventDefault(), v.length > 0 && w > 0 && (w -= 1, t.val(o.get("getValue")(v[w])), j(w));
								break;
							case 40:
								a.preventDefault(), v.length > 0 && w < v.length - 1 && (w += 1, t.val(o.get("getValue")(v[w])), j(w));
								break;
							default:
								if (a.keyCode > 40 || 8 === a.keyCode) {
									var c = t.val();
									o.get("list").hideOnEmptyPhrase !== !0 || 8 !== a.keyCode || "" !== c ? o.get("requestDelay") > 0 ? (void 0 !== m && clearTimeout(m), m = setTimeout(function () {
										b(c)
									}, o.get("requestDelay"))) : b(c) : i()
								}
						}
					})
				}

				function c() {
					t.on("keydown", function (a) {
						a = a || window.event;
						var b = a.keyCode;
						if (38 === b) return suppressKeypress = !0, !1
					}).keydown(function (a) {
						13 === a.keyCode && w > -1 && (t.val(o.get("getValue")(v[w])), o.get("list").onKeyEnterEvent(), o.get("list").onChooseEvent(), w = -1, i(), a.preventDefault())
					})
				}

				function d() {
					t.off("keypress")
				}

				function e() {
					t.focus(function () {
						"" !== t.val() && v.length > 0 && (w = -1, h())
					})
				}

				function f() {
					t.blur(function () {
						setTimeout(function () {
							w = -1, i()
						}, 250)
					})
				}

				function g() {
					t.attr("autocomplete", "off")
				}
				a()
			}

			function h() {
				u.trigger("show.eac")
			}

			function i() {
				u.trigger("hide.eac")
			}

			function j(a) {
				u.trigger("selectElement.eac", a)
			}

			function k(a, b) {
				u.trigger("loadElements.eac", [a, b])
			}

			function l() {
				t.trigger("blur")
			}
			var m, n = new a.Constans,
				o = new a.Configuration(c),
				p = new a.Logger,
				q = new a.Template(c.template),
				r = new a.ListBuilderService(o, a.proccess),
				s = o.equals,
				t = b,
				u = "",
				v = [],
				w = -1;
			a.consts = n, this.getConstants = function () {
				return n
			}, this.getConfiguration = function () {
				return o
			}, this.getContainer = function () {
				return u
			}, this.getSelectedItemIndex = function () {
				return w
			}, this.getItemData = function (a) {
				return v.length < a || void 0 === v[a] ? -1 : v[a]
			}, this.getSelectedItemData = function () {
				return this.getItemData(w)
			}, this.build = function () {
				e()
			}, this.init = function () {
				d()
			}
		}, a.easyAutocompleteHandles = [], a.inputHasId = function (a) {
			return void 0 !== $(a).attr("id") && $(a).attr("id").length > 0
		}, a.assignRandomId = function (b) {
			var c = "";
			do c = "eac-" + Math.floor(1e4 * Math.random()); while (0 !== $("#" + c).length);
			elementId = a.consts.getValue("CONTAINER_ID") + c, $(b).attr("id", c)
		}, a
	}(EasyAutocomplete || {});
$.fn.easyAutocomplete = function (a) {
		return this.each(function () {
			var b = $(this),
				c = new EasyAutocomplete.main(b, a);
			EasyAutocomplete.inputHasId(b) || EasyAutocomplete.assignRandomId(b), c.init(), EasyAutocomplete.easyAutocompleteHandles[b.attr("id")] = c
		})
	}, $.fn.getSelectedItemIndex = function () {
		var a = $(this).attr("id");
		return void 0 !== a ? EasyAutocomplete.easyAutocompleteHandles[a].getSelectedItemIndex() : -1
	}, $.fn.getItemData = function (a) {
		var b = $(this).attr("id");
		return void 0 !== b && a > -1 ? EasyAutocomplete.easyAutocompleteHandles[b].getItemData(a) : -1
	}, $.fn.getSelectedItemData = function () {
		var a = $(this).attr("id");
		return void 0 !== a ? EasyAutocomplete.easyAutocompleteHandles[a].getSelectedItemData() : -1
	},
	function (a, b) {
		function c(c, d) {
			c = a(c);
			var f = c.is("body"),
				g = c.data("LoadingOverlayCount");
			if (g === b && (g = 0), 0 == g) {
				var h = a("<div>", {
					class: "loadingoverlay",
					css: {
						"background-color": d.color,
						display: "flex",
						"flex-direction": "column",
						"align-items": "center",
						"justify-content": "center",
						"z-index": d.zIndex
					}
				});
				if (d.image && h.css({
						"background-image": "url(" + d.image + ")",
						"background-position": "center center",
						"background-repeat": "no-repeat"
					}), d.fontawesome && a("<div>", {
						class: "loadingoverlay_fontawesome " + d.fontawesome
					}).appendTo(h), d.custom && a(d.custom).appendTo(h), f ? h.css({
						position: "fixed",
						top: 0,
						left: 0,
						width: "100%",
						height: "100%"
					}) : (h.css({
						position: "absolute",
						top: 0,
						left: 0
					}), "static" == c.css("position") && h.css({
						top: c.position().top + parseInt(c.css("margin-top")) + parseInt(c.css("border-top-width")),
						left: c.position().left + parseInt(c.css("margin-left")) + parseInt(c.css("border-left-width"))
					})), e(c, h, d, f), d.resizeInterval > 0) {
					var i = setInterval(function () {
						e(c, h, d, f)
					}, d.resizeInterval);
					c.data("LoadingOverlayResizeIntervalId", i)
				}
				d.fade ? d.fade === !0 ? d.fade = [400, 200] : "string" != typeof d.fade && "number" != typeof d.fade || (d.fade = [d.fade, d.fade]) : d.fade = [0, 0], c.data("LoadingOverlayFadeOutDuration", d.fade[1]), h.hide().appendTo(c).fadeIn(d.fade[0])
			}
			g++, c.data("LoadingOverlayCount", g)
		}

		function d(c, d) {
			c = a(c);
			var e = c.data("LoadingOverlayCount");
			if (e !== b)
				if (e--, d || e <= 0) {
					var f = c.data("LoadingOverlayResizeIntervalId");
					f && clearInterval(f), c.children(".loadingoverlay").fadeOut(c.data("LoadingOverlayFadeOutDuration"), function () {
						a(this).remove()
					}), c.removeData(["LoadingOverlayCount", "LoadingOverlayFadeOutDuration", "LoadingOverlayResizeIntervalId"])
				} else c.data("LoadingOverlayCount", e)
		}

		function e(b, c, d, e) {
			e || c.css({
				width: b.innerWidth(),
				height: b.innerHeight()
			});
			var f = "auto";
			if (d.size && "auto" != d.size) {
				var g = e ? a(window) : b;
				f = Math.min(g.innerWidth(), g.innerHeight()) * parseFloat(d.size) / 100, d.maxSize && f > parseInt(d.maxSize) && (f = parseInt(d.maxSize) + "px"), d.minSize && f < parseInt(d.minSize) && (f = parseInt(d.minSize) + "px")
			}
			c.css("background-size", f), c.children(".loadingoverlay_fontawesome").css("font-size", f)
		}
		var f = {
			color: "rgba(255, 255, 255, 0.8)",
			custom: "",
			fade: !0,
			fontawesome: "",
			image: "/images/_libs_assets/loading.gif",
			maxSize: "100px",
			minSize: "20px",
			resizeInterval: 0,
			size: "50%",
			zIndex: "497"
		};
		a.LoadingOverlaySetup = function (b) {
			a.extend(!0, f, b)
		}, a.LoadingOverlay = function (b, e) {
			switch (b.toLowerCase()) {
				case "show":
					var g = a.extend(!0, {}, f, e);
					c("body", g);
					break;
				case "hide":
					d("body", e)
			}
		}, a.fn.LoadingOverlay = function (b, e) {
			switch (b.toLowerCase()) {
				case "show":
					var g = a.extend(!0, {}, f, e);
					return this.each(function () {
						c(this, g)
					});
				case "hide":
					return this.each(function () {
						d(this, e)
					})
			}
		}
	}(jQuery),
	function (a) {
		"use strict";
		if ("function" == typeof define && define.amd) define(["jquery"], a);
		else if ("object" == typeof exports) a(require("jquery"));
		else {
			if ("undefined" == typeof jQuery) throw "jquery-numerator requires jQuery to be loaded first";
			a(jQuery)
		}
	}(function (a) {
		function b(b, e) {
			this.element = b, this.settings = a.extend({}, d, e), this._defaults = d, this._name = c, this.init()
		}
		var c = "numerator",
			d = {
				easing: "swing",
				duration: 500,
				delimiter: void 0,
				rounding: 0,
				toValue: void 0,
				fromValue: void 0,
				queue: !1,
				onStart: function () {},
				onStep: function () {},
				onProgress: function () {},
				onComplete: function () {}
			};
		b.prototype = {
			init: function () {
				this.parseElement(), this.setValue()
			},
			parseElement: function () {
				var b = a.trim(a(this.element).text());
				this.settings.fromValue = this.settings.fromValue || this.format(b)
			},
			setValue: function () {
				var b = this;
				a({
					value: b.settings.fromValue
				}).animate({
					value: b.settings.toValue
				}, {
					duration: parseInt(b.settings.duration, 10),
					easing: b.settings.easing,
					start: b.settings.onStart,
					step: function (c, d) {
						a(b.element).text(b.format(c)), b.settings.onStep(c, d)
					},
					progress: b.settings.onProgress,
					complete: b.settings.onComplete
				})
			},
			format: function (a) {
				var b = this;
				return a = parseInt(this.settings.rounding) < 1 ? parseInt(a, 10) : parseFloat(a).toFixed(parseInt(this.settings.rounding)), b.settings.delimiter ? this.delimit(a) : a
			},
			delimit: function (a) {
				var b = this;
				if (a = a.toString(), b.settings.rounding && parseInt(b.settings.rounding, 10) > 0) {
					var c = a.substring(a.length - (b.settings.rounding + 1), a.length),
						d = a.substring(0, a.length - (b.settings.rounding + 1));
					return b.addDelimiter(d) + c
				}
				return b.addDelimiter(a)
			},
			addDelimiter: function (a) {
				return a.toString().replace(/\B(?=(\d{3})+(?!\d))/g, this.settings.delimiter)
			}
		}, a.fn[c] = function (d) {
			return this.each(function () {
				a.data(this, "plugin_" + c) && a.data(this, "plugin_" + c, null), a.data(this, "plugin_" + c, new b(this, d))
			})
		}
	}),
	function (a, b) {
		"object" == typeof exports && "undefined" != typeof module ? module.exports = b() : "function" == typeof define && define.amd ? define(b) : a.moment = b()
	}(this, function () {
		"use strict";

		function a() {
			return sd.apply(null, arguments)
		}

		function b(a) {
			sd = a
		}

		function c(a) {
			return a instanceof Array || "[object Array]" === Object.prototype.toString.call(a)
		}

		function d(a) {
			return null != a && "[object Object]" === Object.prototype.toString.call(a)
		}

		function e(a) {
			var b;
			for (b in a) return !1;
			return !0
		}

		function f(a) {
			return void 0 === a
		}

		function g(a) {
			return "number" == typeof a || "[object Number]" === Object.prototype.toString.call(a)
		}

		function h(a) {
			return a instanceof Date || "[object Date]" === Object.prototype.toString.call(a)
		}

		function i(a, b) {
			var c, d = [];
			for (c = 0; c < a.length; ++c) d.push(b(a[c], c));
			return d
		}

		function j(a, b) {
			return Object.prototype.hasOwnProperty.call(a, b)
		}

		function k(a, b) {
			for (var c in b) j(b, c) && (a[c] = b[c]);
			return j(b, "toString") && (a.toString = b.toString), j(b, "valueOf") && (a.valueOf = b.valueOf), a
		}

		function l(a, b, c, d) {
			return sb(a, b, c, d, !0).utc()
		}

		function m() {
			return {
				empty: !1,
				unusedTokens: [],
				unusedInput: [],
				overflow: -2,
				charsLeftOver: 0,
				nullInput: !1,
				invalidMonth: null,
				invalidFormat: !1,
				userInvalidated: !1,
				iso: !1,
				parsedDateParts: [],
				meridiem: null,
				rfc2822: !1,
				weekdayMismatch: !1
			}
		}

		function n(a) {
			return null == a._pf && (a._pf = m()), a._pf
		}

		function o(a) {
			if (null == a._isValid) {
				var b = n(a),
					c = ud.call(b.parsedDateParts, function (a) {
						return null != a
					}),
					d = !isNaN(a._d.getTime()) && b.overflow < 0 && !b.empty && !b.invalidMonth && !b.invalidWeekday && !b.nullInput && !b.invalidFormat && !b.userInvalidated && (!b.meridiem || b.meridiem && c);
				if (a._strict && (d = d && 0 === b.charsLeftOver && 0 === b.unusedTokens.length && void 0 === b.bigHour), null != Object.isFrozen && Object.isFrozen(a)) return d;
				a._isValid = d
			}
			return a._isValid
		}

		function p(a) {
			var b = l(NaN);
			return null != a ? k(n(b), a) : n(b).userInvalidated = !0, b
		}

		function q(a, b) {
			var c, d, e;
			if (f(b._isAMomentObject) || (a._isAMomentObject = b._isAMomentObject), f(b._i) || (a._i = b._i), f(b._f) || (a._f = b._f), f(b._l) || (a._l = b._l), f(b._strict) || (a._strict = b._strict), f(b._tzm) || (a._tzm = b._tzm), f(b._isUTC) || (a._isUTC = b._isUTC), f(b._offset) || (a._offset = b._offset), f(b._pf) || (a._pf = n(b)), f(b._locale) || (a._locale = b._locale), vd.length > 0)
				for (c = 0; c < vd.length; c++) d = vd[c], e = b[d], f(e) || (a[d] = e);
			return a
		}

		function r(b) {
			q(this, b), this._d = new Date(null != b._d ? b._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), wd === !1 && (wd = !0, a.updateOffset(this), wd = !1)
		}

		function s(a) {
			return a instanceof r || null != a && null != a._isAMomentObject
		}

		function t(a) {
			return a < 0 ? Math.ceil(a) || 0 : Math.floor(a)
		}

		function u(a) {
			var b = +a,
				c = 0;
			return 0 !== b && isFinite(b) && (c = t(b)), c
		}

		function v(a, b, c) {
			var d, e = Math.min(a.length, b.length),
				f = Math.abs(a.length - b.length),
				g = 0;
			for (d = 0; d < e; d++)(c && a[d] !== b[d] || !c && u(a[d]) !== u(b[d])) && g++;
			return g + f
		}

		function w(b) {
			a.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + b)
		}

		function x(b, c) {
			var d = !0;
			return k(function () {
				if (null != a.deprecationHandler && a.deprecationHandler(null, b), d) {
					for (var e, f = [], g = 0; g < arguments.length; g++) {
						if (e = "", "object" == typeof arguments[g]) {
							e += "\n[" + g + "] ";
							for (var h in arguments[0]) e += h + ": " + arguments[0][h] + ", ";
							e = e.slice(0, -2)
						} else e = arguments[g];
						f.push(e)
					}
					w(b + "\nArguments: " + Array.prototype.slice.call(f).join("") + "\n" + (new Error).stack), d = !1
				}
				return c.apply(this, arguments)
			}, c)
		}

		function y(b, c) {
			null != a.deprecationHandler && a.deprecationHandler(b, c), xd[b] || (w(c), xd[b] = !0)
		}

		function z(a) {
			return a instanceof Function || "[object Function]" === Object.prototype.toString.call(a)
		}

		function A(a) {
			var b, c;
			for (c in a) b = a[c], z(b) ? this[c] = b : this["_" + c] = b;
			this._config = a, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source)
		}

		function B(a, b) {
			var c, e = k({}, a);
			for (c in b) j(b, c) && (d(a[c]) && d(b[c]) ? (e[c] = {}, k(e[c], a[c]), k(e[c], b[c])) : null != b[c] ? e[c] = b[c] : delete e[c]);
			for (c in a) j(a, c) && !j(b, c) && d(a[c]) && (e[c] = k({}, e[c]));
			return e
		}

		function C(a) {
			null != a && this.set(a)
		}

		function D(a, b, c) {
			var d = this._calendar[a] || this._calendar.sameElse;
			return z(d) ? d.call(b, c) : d
		}

		function E(a) {
			var b = this._longDateFormat[a],
				c = this._longDateFormat[a.toUpperCase()];
			return b || !c ? b : (this._longDateFormat[a] = c.replace(/MMMM|MM|DD|dddd/g, function (a) {
				return a.slice(1)
			}), this._longDateFormat[a])
		}

		function F() {
			return this._invalidDate
		}

		function G(a) {
			return this._ordinal.replace("%d", a)
		}

		function H(a, b, c, d) {
			var e = this._relativeTime[c];
			return z(e) ? e(a, b, c, d) : e.replace(/%d/i, a)
		}

		function I(a, b) {
			var c = this._relativeTime[a > 0 ? "future" : "past"];
			return z(c) ? c(b) : c.replace(/%s/i, b)
		}

		function J(a, b) {
			var c = a.toLowerCase();
			Hd[c] = Hd[c + "s"] = Hd[b] = a
		}

		function K(a) {
			return "string" == typeof a ? Hd[a] || Hd[a.toLowerCase()] : void 0
		}

		function L(a) {
			var b, c, d = {};
			for (c in a) j(a, c) && (b = K(c), b && (d[b] = a[c]));
			return d
		}

		function M(a, b) {
			Id[a] = b
		}

		function N(a) {
			var b = [];
			for (var c in a) b.push({
				unit: c,
				priority: Id[c]
			});
			return b.sort(function (a, b) {
				return a.priority - b.priority
			}), b
		}

		function O(b, c) {
			return function (d) {
				return null != d ? (Q(this, b, d), a.updateOffset(this, c), this) : P(this, b)
			}
		}

		function P(a, b) {
			return a.isValid() ? a._d["get" + (a._isUTC ? "UTC" : "") + b]() : NaN
		}

		function Q(a, b, c) {
			a.isValid() && a._d["set" + (a._isUTC ? "UTC" : "") + b](c)
		}

		function R(a) {
			return a = K(a), z(this[a]) ? this[a]() : this
		}

		function S(a, b) {
			if ("object" == typeof a) {
				a = L(a);
				for (var c = N(a), d = 0; d < c.length; d++) this[c[d].unit](a[c[d].unit])
			} else if (a = K(a), z(this[a])) return this[a](b);
			return this
		}

		function T(a, b, c) {
			var d = "" + Math.abs(a),
				e = b - d.length,
				f = a >= 0;
			return (f ? c ? "+" : "" : "-") + Math.pow(10, Math.max(0, e)).toString().substr(1) + d
		}

		function U(a, b, c, d) {
			var e = d;
			"string" == typeof d && (e = function () {
				return this[d]()
			}), a && (Md[a] = e), b && (Md[b[0]] = function () {
				return T(e.apply(this, arguments), b[1], b[2])
			}), c && (Md[c] = function () {
				return this.localeData().ordinal(e.apply(this, arguments), a)
			})
		}

		function V(a) {
			return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "")
		}

		function W(a) {
			var b, c, d = a.match(Jd);
			for (b = 0, c = d.length; b < c; b++) Md[d[b]] ? d[b] = Md[d[b]] : d[b] = V(d[b]);
			return function (b) {
				var e, f = "";
				for (e = 0; e < c; e++) f += z(d[e]) ? d[e].call(b, a) : d[e];
				return f
			}
		}

		function X(a, b) {
			return a.isValid() ? (b = Y(b, a.localeData()), Ld[b] = Ld[b] || W(b), Ld[b](a)) : a.localeData().invalidDate()
		}

		function Y(a, b) {
			function c(a) {
				return b.longDateFormat(a) || a
			}
			var d = 5;
			for (Kd.lastIndex = 0; d >= 0 && Kd.test(a);) a = a.replace(Kd, c), Kd.lastIndex = 0, d -= 1;
			return a
		}

		function Z(a, b, c) {
			ce[a] = z(b) ? b : function (a, d) {
				return a && c ? c : b
			}
		}

		function $(a, b) {
			return j(ce, a) ? ce[a](b._strict, b._locale) : new RegExp(_(a))
		}

		function _(a) {
			return aa(a.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (a, b, c, d, e) {
				return b || c || d || e
			}))
		}

		function aa(a) {
			return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
		}

		function ba(a, b) {
			var c, d = b;
			for ("string" == typeof a && (a = [a]), g(b) && (d = function (a, c) {
					c[b] = u(a)
				}), c = 0; c < a.length; c++) de[a[c]] = d
		}

		function ca(a, b) {
			ba(a, function (a, c, d, e) {
				d._w = d._w || {}, b(a, d._w, d, e)
			})
		}

		function da(a, b, c) {
			null != b && j(de, a) && de[a](b, c._a, c, a)
		}

		function ea(a, b) {
			return new Date(Date.UTC(a, b + 1, 0)).getUTCDate()
		}

		function fa(a, b) {
			return a ? c(this._months) ? this._months[a.month()] : this._months[(this._months.isFormat || oe).test(b) ? "format" : "standalone"][a.month()] : c(this._months) ? this._months : this._months.standalone
		}

		function ga(a, b) {
			return a ? c(this._monthsShort) ? this._monthsShort[a.month()] : this._monthsShort[oe.test(b) ? "format" : "standalone"][a.month()] : c(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone
		}

		function ha(a, b, c) {
			var d, e, f, g = a.toLocaleLowerCase();
			if (!this._monthsParse)
				for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], d = 0; d < 12; ++d) f = l([2e3, d]), this._shortMonthsParse[d] = this.monthsShort(f, "").toLocaleLowerCase(), this._longMonthsParse[d] = this.months(f, "").toLocaleLowerCase();
			return c ? "MMM" === b ? (e = ne.call(this._shortMonthsParse, g), e !== -1 ? e : null) : (e = ne.call(this._longMonthsParse, g), e !== -1 ? e : null) : "MMM" === b ? (e = ne.call(this._shortMonthsParse, g), e !== -1 ? e : (e = ne.call(this._longMonthsParse, g), e !== -1 ? e : null)) : (e = ne.call(this._longMonthsParse, g), e !== -1 ? e : (e = ne.call(this._shortMonthsParse, g), e !== -1 ? e : null))
		}

		function ia(a, b, c) {
			var d, e, f;
			if (this._monthsParseExact) return ha.call(this, a, b, c);
			for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), d = 0; d < 12; d++) {
				if (e = l([2e3, d]), c && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp("^" + this.months(e, "").replace(".", "") + "$", "i"), this._shortMonthsParse[d] = new RegExp("^" + this.monthsShort(e, "").replace(".", "") + "$", "i")), c || this._monthsParse[d] || (f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, ""), this._monthsParse[d] = new RegExp(f.replace(".", ""), "i")), c && "MMMM" === b && this._longMonthsParse[d].test(a)) return d;
				if (c && "MMM" === b && this._shortMonthsParse[d].test(a)) return d;
				if (!c && this._monthsParse[d].test(a)) return d
			}
		}

		function ja(a, b) {
			var c;
			if (!a.isValid()) return a;
			if ("string" == typeof b)
				if (/^\d+$/.test(b)) b = u(b);
				else if (b = a.localeData().monthsParse(b), !g(b)) return a;
			return c = Math.min(a.date(), ea(a.year(), b)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), a
		}

		function ka(b) {
			return null != b ? (ja(this, b), a.updateOffset(this, !0), this) : P(this, "Month")
		}

		function la() {
			return ea(this.year(), this.month())
		}

		function ma(a) {
			return this._monthsParseExact ? (j(this, "_monthsRegex") || oa.call(this), a ? this._monthsShortStrictRegex : this._monthsShortRegex) : (j(this, "_monthsShortRegex") || (this._monthsShortRegex = re), this._monthsShortStrictRegex && a ? this._monthsShortStrictRegex : this._monthsShortRegex)
		}

		function na(a) {
			return this._monthsParseExact ? (j(this, "_monthsRegex") || oa.call(this), a ? this._monthsStrictRegex : this._monthsRegex) : (j(this, "_monthsRegex") || (this._monthsRegex = se), this._monthsStrictRegex && a ? this._monthsStrictRegex : this._monthsRegex)
		}

		function oa() {
			function a(a, b) {
				return b.length - a.length
			}
			var b, c, d = [],
				e = [],
				f = [];
			for (b = 0; b < 12; b++) c = l([2e3, b]), d.push(this.monthsShort(c, "")), e.push(this.months(c, "")), f.push(this.months(c, "")), f.push(this.monthsShort(c, ""));
			for (d.sort(a), e.sort(a), f.sort(a), b = 0; b < 12; b++) d[b] = aa(d[b]), e[b] = aa(e[b]);
			for (b = 0; b < 24; b++) f[b] = aa(f[b]);
			this._monthsRegex = new RegExp("^(" + f.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + e.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + d.join("|") + ")", "i")
		}

		function pa(a) {
			return qa(a) ? 366 : 365
		}

		function qa(a) {
			return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0
		}

		function ra() {
			return qa(this.year())
		}

		function sa(a, b, c, d, e, f, g) {
			var h = new Date(a, b, c, d, e, f, g);
			return a < 100 && a >= 0 && isFinite(h.getFullYear()) && h.setFullYear(a), h
		}

		function ta(a) {
			var b = new Date(Date.UTC.apply(null, arguments));
			return a < 100 && a >= 0 && isFinite(b.getUTCFullYear()) && b.setUTCFullYear(a), b
		}

		function ua(a, b, c) {
			var d = 7 + b - c,
				e = (7 + ta(a, 0, d).getUTCDay() - b) % 7;
			return -e + d - 1
		}

		function va(a, b, c, d, e) {
			var f, g, h = (7 + c - d) % 7,
				i = ua(a, d, e),
				j = 1 + 7 * (b - 1) + h + i;
			return j <= 0 ? (f = a - 1, g = pa(f) + j) : j > pa(a) ? (f = a + 1, g = j - pa(a)) : (f = a, g = j), {
				year: f,
				dayOfYear: g
			}
		}

		function wa(a, b, c) {
			var d, e, f = ua(a.year(), b, c),
				g = Math.floor((a.dayOfYear() - f - 1) / 7) + 1;
			return g < 1 ? (e = a.year() - 1, d = g + xa(e, b, c)) : g > xa(a.year(), b, c) ? (d = g - xa(a.year(), b, c), e = a.year() + 1) : (e = a.year(), d = g), {
				week: d,
				year: e
			}
		}

		function xa(a, b, c) {
			var d = ua(a, b, c),
				e = ua(a + 1, b, c);
			return (pa(a) - d + e) / 7
		}

		function ya(a) {
			return wa(a, this._week.dow, this._week.doy).week
		}

		function za() {
			return this._week.dow
		}

		function Aa() {
			return this._week.doy
		}

		function Ba(a) {
			var b = this.localeData().week(this);
			return null == a ? b : this.add(7 * (a - b), "d")
		}

		function Ca(a) {
			var b = wa(this, 1, 4).week;
			return null == a ? b : this.add(7 * (a - b), "d")
		}

		function Da(a, b) {
			return "string" != typeof a ? a : isNaN(a) ? (a = b.weekdaysParse(a), "number" == typeof a ? a : null) : parseInt(a, 10)
		}

		function Ea(a, b) {
			return "string" == typeof a ? b.weekdaysParse(a) % 7 || 7 : isNaN(a) ? null : a
		}

		function Fa(a, b) {
			return a ? c(this._weekdays) ? this._weekdays[a.day()] : this._weekdays[this._weekdays.isFormat.test(b) ? "format" : "standalone"][a.day()] : c(this._weekdays) ? this._weekdays : this._weekdays.standalone
		}

		function Ga(a) {
			return a ? this._weekdaysShort[a.day()] : this._weekdaysShort
		}

		function Ha(a) {
			return a ? this._weekdaysMin[a.day()] : this._weekdaysMin
		}

		function Ia(a, b, c) {
			var d, e, f, g = a.toLocaleLowerCase();
			if (!this._weekdaysParse)
				for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], d = 0; d < 7; ++d) f = l([2e3, 1]).day(d), this._minWeekdaysParse[d] = this.weekdaysMin(f, "").toLocaleLowerCase(), this._shortWeekdaysParse[d] = this.weekdaysShort(f, "").toLocaleLowerCase(), this._weekdaysParse[d] = this.weekdays(f, "").toLocaleLowerCase();
			return c ? "dddd" === b ? (e = ne.call(this._weekdaysParse, g), e !== -1 ? e : null) : "ddd" === b ? (e = ne.call(this._shortWeekdaysParse, g), e !== -1 ? e : null) : (e = ne.call(this._minWeekdaysParse, g), e !== -1 ? e : null) : "dddd" === b ? (e = ne.call(this._weekdaysParse, g), e !== -1 ? e : (e = ne.call(this._shortWeekdaysParse, g), e !== -1 ? e : (e = ne.call(this._minWeekdaysParse, g), e !== -1 ? e : null))) : "ddd" === b ? (e = ne.call(this._shortWeekdaysParse, g), e !== -1 ? e : (e = ne.call(this._weekdaysParse, g), e !== -1 ? e : (e = ne.call(this._minWeekdaysParse, g), e !== -1 ? e : null))) : (e = ne.call(this._minWeekdaysParse, g), e !== -1 ? e : (e = ne.call(this._weekdaysParse, g), e !== -1 ? e : (e = ne.call(this._shortWeekdaysParse, g), e !== -1 ? e : null)))
		}

		function Ja(a, b, c) {
			var d, e, f;
			if (this._weekdaysParseExact) return Ia.call(this, a, b, c);
			for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), d = 0; d < 7; d++) {
				if (e = l([2e3, 1]).day(d), c && !this._fullWeekdaysParse[d] && (this._fullWeekdaysParse[d] = new RegExp("^" + this.weekdays(e, "").replace(".", ".?") + "$", "i"), this._shortWeekdaysParse[d] = new RegExp("^" + this.weekdaysShort(e, "").replace(".", ".?") + "$", "i"), this._minWeekdaysParse[d] = new RegExp("^" + this.weekdaysMin(e, "").replace(".", ".?") + "$", "i")), this._weekdaysParse[d] || (f = "^" + this.weekdays(e, "") + "|^" + this.weekdaysShort(e, "") + "|^" + this.weekdaysMin(e, ""), this._weekdaysParse[d] = new RegExp(f.replace(".", ""), "i")), c && "dddd" === b && this._fullWeekdaysParse[d].test(a)) return d;
				if (c && "ddd" === b && this._shortWeekdaysParse[d].test(a)) return d;
				if (c && "dd" === b && this._minWeekdaysParse[d].test(a)) return d;
				if (!c && this._weekdaysParse[d].test(a)) return d
			}
		}

		function Ka(a) {
			if (!this.isValid()) return null != a ? this : NaN;
			var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
			return null != a ? (a = Da(a, this.localeData()), this.add(a - b, "d")) : b
		}

		function La(a) {
			if (!this.isValid()) return null != a ? this : NaN;
			var b = (this.day() + 7 - this.localeData()._week.dow) % 7;
			return null == a ? b : this.add(a - b, "d")
		}

		function Ma(a) {
			if (!this.isValid()) return null != a ? this : NaN;
			if (null != a) {
				var b = Ea(a, this.localeData());
				return this.day(this.day() % 7 ? b : b - 7)
			}
			return this.day() || 7
		}

		function Na(a) {
			return this._weekdaysParseExact ? (j(this, "_weekdaysRegex") || Qa.call(this), a ? this._weekdaysStrictRegex : this._weekdaysRegex) : (j(this, "_weekdaysRegex") || (this._weekdaysRegex = ye), this._weekdaysStrictRegex && a ? this._weekdaysStrictRegex : this._weekdaysRegex)
		}

		function Oa(a) {
			return this._weekdaysParseExact ? (j(this, "_weekdaysRegex") || Qa.call(this), a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (j(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = ze), this._weekdaysShortStrictRegex && a ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex)
		}

		function Pa(a) {
			return this._weekdaysParseExact ? (j(this, "_weekdaysRegex") || Qa.call(this), a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (j(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = Ae), this._weekdaysMinStrictRegex && a ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex)
		}

		function Qa() {
			function a(a, b) {
				return b.length - a.length
			}
			var b, c, d, e, f, g = [],
				h = [],
				i = [],
				j = [];
			for (b = 0; b < 7; b++) c = l([2e3, 1]).day(b), d = this.weekdaysMin(c, ""), e = this.weekdaysShort(c, ""), f = this.weekdays(c, ""), g.push(d), h.push(e), i.push(f), j.push(d), j.push(e), j.push(f);
			for (g.sort(a), h.sort(a), i.sort(a), j.sort(a), b = 0; b < 7; b++) h[b] = aa(h[b]), i[b] = aa(i[b]), j[b] = aa(j[b]);
			this._weekdaysRegex = new RegExp("^(" + j.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + i.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + h.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + g.join("|") + ")", "i")
		}

		function Ra() {
			return this.hours() % 12 || 12
		}

		function Sa() {
			return this.hours() || 24
		}

		function Ta(a, b) {
			U(a, 0, 0, function () {
				return this.localeData().meridiem(this.hours(), this.minutes(), b)
			})
		}

		function Ua(a, b) {
			return b._meridiemParse
		}

		function Va(a) {
			return "p" === (a + "").toLowerCase().charAt(0)
		}

		function Wa(a, b, c) {
			return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM"
		}

		function Xa(a) {
			return a ? a.toLowerCase().replace("_", "-") : a
		}

		function Ya(a) {
			for (var b, c, d, e, f = 0; f < a.length;) {
				for (e = Xa(a[f]).split("-"), b = e.length, c = Xa(a[f + 1]), c = c ? c.split("-") : null; b > 0;) {
					if (d = Za(e.slice(0, b).join("-"))) return d;
					if (c && c.length >= b && v(e, c, !0) >= b - 1) break;
					b--
				}
				f++
			}
			return null
		}

		function Za(a) {
			var b = null;
			if (!Fe[a] && "undefined" != typeof module && module && module.exports) try {
				b = Be._abbr, require("./locale/" + a), $a(b)
			} catch (a) {}
			return Fe[a]
		}

		function $a(a, b) {
			var c;
			return a && (c = f(b) ? bb(a) : _a(a, b), c && (Be = c)), Be._abbr
		}

		function _a(a, b) {
			if (null !== b) {
				var c = Ee;
				if (b.abbr = a, null != Fe[a]) y("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), c = Fe[a]._config;
				else if (null != b.parentLocale) {
					if (null == Fe[b.parentLocale]) return Ge[b.parentLocale] || (Ge[b.parentLocale] = []), Ge[b.parentLocale].push({
						name: a,
						config: b
					}), null;
					c = Fe[b.parentLocale]._config
				}
				return Fe[a] = new C(B(c, b)), Ge[a] && Ge[a].forEach(function (a) {
					_a(a.name, a.config)
				}), $a(a), Fe[a]
			}
			return delete Fe[a], null
		}

		function ab(a, b) {
			if (null != b) {
				var c, d = Ee;
				null != Fe[a] && (d = Fe[a]._config), b = B(d, b), c = new C(b), c.parentLocale = Fe[a], Fe[a] = c, $a(a)
			} else null != Fe[a] && (null != Fe[a].parentLocale ? Fe[a] = Fe[a].parentLocale : null != Fe[a] && delete Fe[a]);
			return Fe[a]
		}

		function bb(a) {
			var b;
			if (a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a) return Be;
			if (!c(a)) {
				if (b = Za(a)) return b;
				a = [a]
			}
			return Ya(a)
		}

		function cb() {
			return Ad(Fe)
		}

		function db(a) {
			var b, c = a._a;
			return c && n(a).overflow === -2 && (b = c[fe] < 0 || c[fe] > 11 ? fe : c[ge] < 1 || c[ge] > ea(c[ee], c[fe]) ? ge : c[he] < 0 || c[he] > 24 || 24 === c[he] && (0 !== c[ie] || 0 !== c[je] || 0 !== c[ke]) ? he : c[ie] < 0 || c[ie] > 59 ? ie : c[je] < 0 || c[je] > 59 ? je : c[ke] < 0 || c[ke] > 999 ? ke : -1, n(a)._overflowDayOfYear && (b < ee || b > ge) && (b = ge), n(a)._overflowWeeks && b === -1 && (b = le), n(a)._overflowWeekday && b === -1 && (b = me), n(a).overflow = b), a
		}

		function eb(a) {
			var b, c, d, e, f, g, h = a._i,
				i = He.exec(h) || Ie.exec(h);
			if (i) {
				for (n(a).iso = !0, b = 0, c = Ke.length; b < c; b++)
					if (Ke[b][1].exec(i[1])) {
						e = Ke[b][0], d = Ke[b][2] !== !1;
						break
					}
				if (null == e) return void(a._isValid = !1);
				if (i[3]) {
					for (b = 0, c = Le.length; b < c; b++)
						if (Le[b][1].exec(i[3])) {
							f = (i[2] || " ") + Le[b][0];
							break
						}
					if (null == f) return void(a._isValid = !1)
				}
				if (!d && null != f) return void(a._isValid = !1);
				if (i[4]) {
					if (!Je.exec(i[4])) return void(a._isValid = !1);
					g = "Z"
				}
				a._f = e + (f || "") + (g || ""), lb(a)
			} else a._isValid = !1
		}

		function fb(a) {
			var b, c, d, e, f, g, h, i, j = {
					" GMT": " +0000",
					" EDT": " -0400",
					" EST": " -0500",
					" CDT": " -0500",
					" CST": " -0600",
					" MDT": " -0600",
					" MST": " -0700",
					" PDT": " -0700",
					" PST": " -0800"
				},
				k = "YXWVUTSRQPONZABCDEFGHIKLM";
			if (b = a._i.replace(/\([^\)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s|\s$/g, ""), c = Ne.exec(b)) {
				if (d = c[1] ? "ddd" + (5 === c[1].length ? ", " : " ") : "", e = "D MMM " + (c[2].length > 10 ? "YYYY " : "YY "), f = "HH:mm" + (c[4] ? ":ss" : ""), c[1]) {
					var l = new Date(c[2]),
						m = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"][l.getDay()];
					if (c[1].substr(0, 3) !== m) return n(a).weekdayMismatch = !0, void(a._isValid = !1)
				}
				switch (c[5].length) {
					case 2:
						0 === i ? h = " +0000" : (i = k.indexOf(c[5][1].toUpperCase()) - 12, h = (i < 0 ? " -" : " +") + ("" + i).replace(/^-?/, "0").match(/..$/)[0] + "00");
						break;
					case 4:
						h = j[c[5]];
						break;
					default:
						h = j[" GMT"]
				}
				c[5] = h, a._i = c.splice(1).join(""), g = " ZZ", a._f = d + e + f + g, lb(a), n(a).rfc2822 = !0
			} else a._isValid = !1
		}

		function gb(b) {
			var c = Me.exec(b._i);
			return null !== c ? void(b._d = new Date(+c[1])) : (eb(b), void(b._isValid === !1 && (delete b._isValid, fb(b), b._isValid === !1 && (delete b._isValid, a.createFromInputFallback(b)))))
		}

		function hb(a, b, c) {
			return null != a ? a : null != b ? b : c
		}

		function ib(b) {
			var c = new Date(a.now());
			return b._useUTC ? [c.getUTCFullYear(), c.getUTCMonth(), c.getUTCDate()] : [c.getFullYear(), c.getMonth(), c.getDate()]
		}

		function jb(a) {
			var b, c, d, e, f = [];
			if (!a._d) {
				for (d = ib(a), a._w && null == a._a[ge] && null == a._a[fe] && kb(a), null != a._dayOfYear && (e = hb(a._a[ee], d[ee]), (a._dayOfYear > pa(e) || 0 === a._dayOfYear) && (n(a)._overflowDayOfYear = !0), c = ta(e, 0, a._dayOfYear), a._a[fe] = c.getUTCMonth(), a._a[ge] = c.getUTCDate()), b = 0; b < 3 && null == a._a[b]; ++b) a._a[b] = f[b] = d[b];
				for (; b < 7; b++) a._a[b] = f[b] = null == a._a[b] ? 2 === b ? 1 : 0 : a._a[b];
				24 === a._a[he] && 0 === a._a[ie] && 0 === a._a[je] && 0 === a._a[ke] && (a._nextDay = !0, a._a[he] = 0), a._d = (a._useUTC ? ta : sa).apply(null, f), null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm), a._nextDay && (a._a[he] = 24)
			}
		}

		function kb(a) {
			var b, c, d, e, f, g, h, i;
			if (b = a._w, null != b.GG || null != b.W || null != b.E) f = 1, g = 4, c = hb(b.GG, a._a[ee], wa(tb(), 1, 4).year), d = hb(b.W, 1), e = hb(b.E, 1), (e < 1 || e > 7) && (i = !0);
			else {
				f = a._locale._week.dow, g = a._locale._week.doy;
				var j = wa(tb(), f, g);
				c = hb(b.gg, a._a[ee], j.year), d = hb(b.w, j.week), null != b.d ? (e = b.d, (e < 0 || e > 6) && (i = !0)) : null != b.e ? (e = b.e + f, (b.e < 0 || b.e > 6) && (i = !0)) : e = f
			}
			d < 1 || d > xa(c, f, g) ? n(a)._overflowWeeks = !0 : null != i ? n(a)._overflowWeekday = !0 : (h = va(c, d, e, f, g), a._a[ee] = h.year, a._dayOfYear = h.dayOfYear)
		}

		function lb(b) {
			if (b._f === a.ISO_8601) return void eb(b);
			if (b._f === a.RFC_2822) return void fb(b);
			b._a = [], n(b).empty = !0;
			var c, d, e, f, g, h = "" + b._i,
				i = h.length,
				j = 0;
			for (e = Y(b._f, b._locale).match(Jd) || [], c = 0; c < e.length; c++) f = e[c], d = (h.match($(f, b)) || [])[0], d && (g = h.substr(0, h.indexOf(d)), g.length > 0 && n(b).unusedInput.push(g), h = h.slice(h.indexOf(d) + d.length), j += d.length), Md[f] ? (d ? n(b).empty = !1 : n(b).unusedTokens.push(f), da(f, d, b)) : b._strict && !d && n(b).unusedTokens.push(f);
			n(b).charsLeftOver = i - j, h.length > 0 && n(b).unusedInput.push(h), b._a[he] <= 12 && n(b).bigHour === !0 && b._a[he] > 0 && (n(b).bigHour = void 0), n(b).parsedDateParts = b._a.slice(0), n(b).meridiem = b._meridiem, b._a[he] = mb(b._locale, b._a[he], b._meridiem), jb(b), db(b)
		}

		function mb(a, b, c) {
			var d;
			return null == c ? b : null != a.meridiemHour ? a.meridiemHour(b, c) : null != a.isPM ? (d = a.isPM(c), d && b < 12 && (b += 12), d || 12 !== b || (b = 0), b) : b
		}

		function nb(a) {
			var b, c, d, e, f;
			if (0 === a._f.length) return n(a).invalidFormat = !0, void(a._d = new Date(NaN));
			for (e = 0; e < a._f.length; e++) f = 0, b = q({}, a), null != a._useUTC && (b._useUTC = a._useUTC), b._f = a._f[e], lb(b), o(b) && (f += n(b).charsLeftOver, f += 10 * n(b).unusedTokens.length, n(b).score = f, (null == d || f < d) && (d = f, c = b));
			k(a, c || b)
		}

		function ob(a) {
			if (!a._d) {
				var b = L(a._i);
				a._a = i([b.year, b.month, b.day || b.date, b.hour, b.minute, b.second, b.millisecond], function (a) {
					return a && parseInt(a, 10)
				}), jb(a)
			}
		}

		function pb(a) {
			var b = new r(db(qb(a)));
			return b._nextDay && (b.add(1, "d"), b._nextDay = void 0), b
		}

		function qb(a) {
			var b = a._i,
				d = a._f;
			return a._locale = a._locale || bb(a._l), null === b || void 0 === d && "" === b ? p({
				nullInput: !0
			}) : ("string" == typeof b && (a._i = b = a._locale.preparse(b)), s(b) ? new r(db(b)) : (h(b) ? a._d = b : c(d) ? nb(a) : d ? lb(a) : rb(a), o(a) || (a._d = null), a))
		}

		function rb(b) {
			var e = b._i;
			f(e) ? b._d = new Date(a.now()) : h(e) ? b._d = new Date(e.valueOf()) : "string" == typeof e ? gb(b) : c(e) ? (b._a = i(e.slice(0), function (a) {
				return parseInt(a, 10)
			}), jb(b)) : d(e) ? ob(b) : g(e) ? b._d = new Date(e) : a.createFromInputFallback(b)
		}

		function sb(a, b, f, g, h) {
			var i = {};
			return f !== !0 && f !== !1 || (g = f, f = void 0), (d(a) && e(a) || c(a) && 0 === a.length) && (a = void 0), i._isAMomentObject = !0, i._useUTC = i._isUTC = h, i._l = f, i._i = a, i._f = b, i._strict = g, pb(i)
		}

		function tb(a, b, c, d) {
			return sb(a, b, c, d, !1)
		}

		function ub(a, b) {
			var d, e;
			if (1 === b.length && c(b[0]) && (b = b[0]), !b.length) return tb();
			for (d = b[0], e = 1; e < b.length; ++e) b[e].isValid() && !b[e][a](d) || (d = b[e]);
			return d
		}

		function vb() {
			var a = [].slice.call(arguments, 0);
			return ub("isBefore", a)
		}

		function wb() {
			var a = [].slice.call(arguments, 0);
			return ub("isAfter", a)
		}

		function xb(a) {
			for (var b in a)
				if (Re.indexOf(b) === -1 || null != a[b] && isNaN(a[b])) return !1;
			for (var c = !1, d = 0; d < Re.length; ++d)
				if (a[Re[d]]) {
					if (c) return !1;
					parseFloat(a[Re[d]]) !== u(a[Re[d]]) && (c = !0)
				}
			return !0
		}

		function yb() {
			return this._isValid
		}

		function zb() {
			return Sb(NaN)
		}

		function Ab(a) {
			var b = L(a),
				c = b.year || 0,
				d = b.quarter || 0,
				e = b.month || 0,
				f = b.week || 0,
				g = b.day || 0,
				h = b.hour || 0,
				i = b.minute || 0,
				j = b.second || 0,
				k = b.millisecond || 0;
			this._isValid = xb(b), this._milliseconds = +k + 1e3 * j + 6e4 * i + 1e3 * h * 60 * 60, this._days = +g + 7 * f, this._months = +e + 3 * d + 12 * c, this._data = {}, this._locale = bb(), this._bubble()
		}

		function Bb(a) {
			return a instanceof Ab
		}

		function Cb(a) {
			return a < 0 ? Math.round(-1 * a) * -1 : Math.round(a)
		}

		function Db(a, b) {
			U(a, 0, 0, function () {
				var a = this.utcOffset(),
					c = "+";
				return a < 0 && (a = -a, c = "-"), c + T(~~(a / 60), 2) + b + T(~~a % 60, 2)
			})
		}

		function Eb(a, b) {
			var c = (b || "").match(a);
			if (null === c) return null;
			var d = c[c.length - 1] || [],
				e = (d + "").match(Se) || ["-", 0, 0],
				f = +(60 * e[1]) + u(e[2]);
			return 0 === f ? 0 : "+" === e[0] ? f : -f
		}

		function Fb(b, c) {
			var d, e;
			return c._isUTC ? (d = c.clone(), e = (s(b) || h(b) ? b.valueOf() : tb(b).valueOf()) - d.valueOf(), d._d.setTime(d._d.valueOf() + e), a.updateOffset(d, !1), d) : tb(b).local()
		}

		function Gb(a) {
			return 15 * -Math.round(a._d.getTimezoneOffset() / 15)
		}

		function Hb(b, c, d) {
			var e, f = this._offset || 0;
			if (!this.isValid()) return null != b ? this : NaN;
			if (null != b) {
				if ("string" == typeof b) {
					if (b = Eb(_d, b), null === b) return this
				} else Math.abs(b) < 16 && !d && (b *= 60);
				return !this._isUTC && c && (e = Gb(this)), this._offset = b, this._isUTC = !0, null != e && this.add(e, "m"), f !== b && (!c || this._changeInProgress ? Xb(this, Sb(b - f, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, a.updateOffset(this, !0), this._changeInProgress = null)), this
			}
			return this._isUTC ? f : Gb(this)
		}

		function Ib(a, b) {
			return null != a ? ("string" != typeof a && (a = -a), this.utcOffset(a, b), this) : -this.utcOffset()
		}

		function Jb(a) {
			return this.utcOffset(0, a)
		}

		function Kb(a) {
			return this._isUTC && (this.utcOffset(0, a), this._isUTC = !1, a && this.subtract(Gb(this), "m")), this
		}

		function Lb() {
			if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
			else if ("string" == typeof this._i) {
				var a = Eb($d, this._i);
				null != a ? this.utcOffset(a) : this.utcOffset(0, !0)
			}
			return this
		}

		function Mb(a) {
			return !!this.isValid() && (a = a ? tb(a).utcOffset() : 0, (this.utcOffset() - a) % 60 === 0)
		}

		function Nb() {
			return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
		}

		function Ob() {
			if (!f(this._isDSTShifted)) return this._isDSTShifted;
			var a = {};
			if (q(a, this), a = qb(a), a._a) {
				var b = a._isUTC ? l(a._a) : tb(a._a);
				this._isDSTShifted = this.isValid() && v(a._a, b.toArray()) > 0
			} else this._isDSTShifted = !1;
			return this._isDSTShifted
		}

		function Pb() {
			return !!this.isValid() && !this._isUTC
		}

		function Qb() {
			return !!this.isValid() && this._isUTC
		}

		function Rb() {
			return !!this.isValid() && (this._isUTC && 0 === this._offset)
		}

		function Sb(a, b) {
			var c, d, e, f = a,
				h = null;
			return Bb(a) ? f = {
				ms: a._milliseconds,
				d: a._days,
				M: a._months
			} : g(a) ? (f = {}, b ? f[b] = a : f.milliseconds = a) : (h = Te.exec(a)) ? (c = "-" === h[1] ? -1 : 1, f = {
				y: 0,
				d: u(h[ge]) * c,
				h: u(h[he]) * c,
				m: u(h[ie]) * c,
				s: u(h[je]) * c,
				ms: u(Cb(1e3 * h[ke])) * c
			}) : (h = Ue.exec(a)) ? (c = "-" === h[1] ? -1 : 1, f = {
				y: Tb(h[2], c),
				M: Tb(h[3], c),
				w: Tb(h[4], c),
				d: Tb(h[5], c),
				h: Tb(h[6], c),
				m: Tb(h[7], c),
				s: Tb(h[8], c)
			}) : null == f ? f = {} : "object" == typeof f && ("from" in f || "to" in f) && (e = Vb(tb(f.from), tb(f.to)), f = {}, f.ms = e.milliseconds, f.M = e.months), d = new Ab(f), Bb(a) && j(a, "_locale") && (d._locale = a._locale), d
		}

		function Tb(a, b) {
			var c = a && parseFloat(a.replace(",", "."));
			return (isNaN(c) ? 0 : c) * b
		}

		function Ub(a, b) {
			var c = {
				milliseconds: 0,
				months: 0
			};
			return c.months = b.month() - a.month() + 12 * (b.year() - a.year()), a.clone().add(c.months, "M").isAfter(b) && --c.months, c.milliseconds = +b - +a.clone().add(c.months, "M"), c
		}

		function Vb(a, b) {
			var c;
			return a.isValid() && b.isValid() ? (b = Fb(b, a), a.isBefore(b) ? c = Ub(a, b) : (c = Ub(b, a), c.milliseconds = -c.milliseconds, c.months = -c.months), c) : {
				milliseconds: 0,
				months: 0
			}
		}

		function Wb(a, b) {
			return function (c, d) {
				var e, f;
				return null === d || isNaN(+d) || (y(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), f = c, c = d, d = f), c = "string" == typeof c ? +c : c, e = Sb(c, d), Xb(this, e, a), this
			}
		}

		function Xb(b, c, d, e) {
			var f = c._milliseconds,
				g = Cb(c._days),
				h = Cb(c._months);
			b.isValid() && (e = null == e || e, f && b._d.setTime(b._d.valueOf() + f * d), g && Q(b, "Date", P(b, "Date") + g * d), h && ja(b, P(b, "Month") + h * d), e && a.updateOffset(b, g || h))
		}

		function Yb(a, b) {
			var c = a.diff(b, "days", !0);
			return c < -6 ? "sameElse" : c < -1 ? "lastWeek" : c < 0 ? "lastDay" : c < 1 ? "sameDay" : c < 2 ? "nextDay" : c < 7 ? "nextWeek" : "sameElse"
		}

		function Zb(b, c) {
			var d = b || tb(),
				e = Fb(d, this).startOf("day"),
				f = a.calendarFormat(this, e) || "sameElse",
				g = c && (z(c[f]) ? c[f].call(this, d) : c[f]);
			return this.format(g || this.localeData().calendar(f, this, tb(d)))
		}

		function $b() {
			return new r(this)
		}

		function _b(a, b) {
			var c = s(a) ? a : tb(a);
			return !(!this.isValid() || !c.isValid()) && (b = K(f(b) ? "millisecond" : b), "millisecond" === b ? this.valueOf() > c.valueOf() : c.valueOf() < this.clone().startOf(b).valueOf())
		}

		function ac(a, b) {
			var c = s(a) ? a : tb(a);
			return !(!this.isValid() || !c.isValid()) && (b = K(f(b) ? "millisecond" : b), "millisecond" === b ? this.valueOf() < c.valueOf() : this.clone().endOf(b).valueOf() < c.valueOf())
		}

		function bc(a, b, c, d) {
			return d = d || "()", ("(" === d[0] ? this.isAfter(a, c) : !this.isBefore(a, c)) && (")" === d[1] ? this.isBefore(b, c) : !this.isAfter(b, c))
		}

		function cc(a, b) {
			var c, d = s(a) ? a : tb(a);
			return !(!this.isValid() || !d.isValid()) && (b = K(b || "millisecond"), "millisecond" === b ? this.valueOf() === d.valueOf() : (c = d.valueOf(), this.clone().startOf(b).valueOf() <= c && c <= this.clone().endOf(b).valueOf()))
		}

		function dc(a, b) {
			return this.isSame(a, b) || this.isAfter(a, b)
		}

		function ec(a, b) {
			return this.isSame(a, b) || this.isBefore(a, b)
		}

		function fc(a, b, c) {
			var d, e, f, g;
			return this.isValid() ? (d = Fb(a, this), d.isValid() ? (e = 6e4 * (d.utcOffset() - this.utcOffset()), b = K(b), "year" === b || "month" === b || "quarter" === b ? (g = gc(this, d), "quarter" === b ? g /= 3 : "year" === b && (g /= 12)) : (f = this - d, g = "second" === b ? f / 1e3 : "minute" === b ? f / 6e4 : "hour" === b ? f / 36e5 : "day" === b ? (f - e) / 864e5 : "week" === b ? (f - e) / 6048e5 : f), c ? g : t(g)) : NaN) : NaN
		}

		function gc(a, b) {
			var c, d, e = 12 * (b.year() - a.year()) + (b.month() - a.month()),
				f = a.clone().add(e, "months");
			return b - f < 0 ? (c = a.clone().add(e - 1, "months"), d = (b - f) / (f - c)) : (c = a.clone().add(e + 1, "months"), d = (b - f) / (c - f)), -(e + d) || 0
		}

		function hc() {
			return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
		}

		function ic() {
			if (!this.isValid()) return null;
			var a = this.clone().utc();
			return a.year() < 0 || a.year() > 9999 ? X(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : z(Date.prototype.toISOString) ? this.toDate().toISOString() : X(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
		}

		function jc() {
			if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)";
			var a = "moment",
				b = "";
			this.isLocal() || (a = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", b = "Z");
			var c = "[" + a + '("]',
				d = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
				e = "-MM-DD[T]HH:mm:ss.SSS",
				f = b + '[")]';
			return this.format(c + d + e + f)
		}

		function kc(b) {
			b || (b = this.isUtc() ? a.defaultFormatUtc : a.defaultFormat);
			var c = X(this, b);
			return this.localeData().postformat(c)
		}

		function lc(a, b) {
			return this.isValid() && (s(a) && a.isValid() || tb(a).isValid()) ? Sb({
				to: this,
				from: a
			}).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
		}

		function mc(a) {
			return this.from(tb(), a)
		}

		function nc(a, b) {
			return this.isValid() && (s(a) && a.isValid() || tb(a).isValid()) ? Sb({
				from: this,
				to: a
			}).locale(this.locale()).humanize(!b) : this.localeData().invalidDate()
		}

		function oc(a) {
			return this.to(tb(), a)
		}

		function pc(a) {
			var b;
			return void 0 === a ? this._locale._abbr : (b = bb(a), null != b && (this._locale = b), this)
		}

		function qc() {
			return this._locale
		}

		function rc(a) {
			switch (a = K(a)) {
				case "year":
					this.month(0);
				case "quarter":
				case "month":
					this.date(1);
				case "week":
				case "isoWeek":
				case "day":
				case "date":
					this.hours(0);
				case "hour":
					this.minutes(0);
				case "minute":
					this.seconds(0);
				case "second":
					this.milliseconds(0)
			}
			return "week" === a && this.weekday(0), "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), this
		}

		function sc(a) {
			return a = K(a), void 0 === a || "millisecond" === a ? this : ("date" === a && (a = "day"), this.startOf(a).add(1, "isoWeek" === a ? "week" : a).subtract(1, "ms"))
		}

		function tc() {
			return this._d.valueOf() - 6e4 * (this._offset || 0)
		}

		function uc() {
			return Math.floor(this.valueOf() / 1e3)
		}

		function vc() {
			return new Date(this.valueOf())
		}

		function wc() {
			var a = this;
			return [a.year(), a.month(), a.date(), a.hour(), a.minute(), a.second(), a.millisecond()]
		}

		function xc() {
			var a = this;
			return {
				years: a.year(),
				months: a.month(),
				date: a.date(),
				hours: a.hours(),
				minutes: a.minutes(),
				seconds: a.seconds(),
				milliseconds: a.milliseconds()
			}
		}

		function yc() {
			return this.isValid() ? this.toISOString() : null
		}

		function zc() {
			return o(this)
		}

		function Ac() {
			return k({}, n(this))
		}

		function Bc() {
			return n(this).overflow
		}

		function Cc() {
			return {
				input: this._i,
				format: this._f,
				locale: this._locale,
				isUTC: this._isUTC,
				strict: this._strict
			}
		}

		function Dc(a, b) {
			U(0, [a, a.length], 0, b)
		}

		function Ec(a) {
			return Ic.call(this, a, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy)
		}

		function Fc(a) {
			return Ic.call(this, a, this.isoWeek(), this.isoWeekday(), 1, 4)
		}

		function Gc() {
			return xa(this.year(), 1, 4)
		}

		function Hc() {
			var a = this.localeData()._week;
			return xa(this.year(), a.dow, a.doy)
		}

		function Ic(a, b, c, d, e) {
			var f;
			return null == a ? wa(this, d, e).year : (f = xa(a, d, e), b > f && (b = f), Jc.call(this, a, b, c, d, e))
		}

		function Jc(a, b, c, d, e) {
			var f = va(a, b, c, d, e),
				g = ta(f.year, 0, f.dayOfYear);
			return this.year(g.getUTCFullYear()), this.month(g.getUTCMonth()), this.date(g.getUTCDate()), this
		}

		function Kc(a) {
			return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3)
		}

		function Lc(a) {
			var b = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
			return null == a ? b : this.add(a - b, "d")
		}

		function Mc(a, b) {
			b[ke] = u(1e3 * ("0." + a))
		}

		function Nc() {
			return this._isUTC ? "UTC" : ""
		}

		function Oc() {
			return this._isUTC ? "Coordinated Universal Time" : ""
		}

		function Pc(a) {
			return tb(1e3 * a)
		}

		function Qc() {
			return tb.apply(null, arguments).parseZone()
		}

		function Rc(a) {
			return a
		}

		function Sc(a, b, c, d) {
			var e = bb(),
				f = l().set(d, b);
			return e[c](f, a)
		}

		function Tc(a, b, c) {
			if (g(a) && (b = a, a = void 0), a = a || "", null != b) return Sc(a, b, c, "month");
			var d, e = [];
			for (d = 0; d < 12; d++) e[d] = Sc(a, d, c, "month");
			return e
		}

		function Uc(a, b, c, d) {
			"boolean" == typeof a ? (g(b) && (c = b, b = void 0), b = b || "") : (b = a, c = b, a = !1, g(b) && (c = b, b = void 0), b = b || "");
			var e = bb(),
				f = a ? e._week.dow : 0;
			if (null != c) return Sc(b, (c + f) % 7, d, "day");
			var h, i = [];
			for (h = 0; h < 7; h++) i[h] = Sc(b, (h + f) % 7, d, "day");
			return i
		}

		function Vc(a, b) {
			return Tc(a, b, "months")
		}

		function Wc(a, b) {
			return Tc(a, b, "monthsShort")
		}

		function Xc(a, b, c) {
			return Uc(a, b, c, "weekdays")
		}

		function Yc(a, b, c) {
			return Uc(a, b, c, "weekdaysShort")
		}

		function Zc(a, b, c) {
			return Uc(a, b, c, "weekdaysMin")
		}

		function $c() {
			var a = this._data;
			return this._milliseconds = df(this._milliseconds), this._days = df(this._days), this._months = df(this._months), a.milliseconds = df(a.milliseconds), a.seconds = df(a.seconds), a.minutes = df(a.minutes), a.hours = df(a.hours), a.months = df(a.months), a.years = df(a.years), this
		}

		function _c(a, b, c, d) {
			var e = Sb(b, c);
			return a._milliseconds += d * e._milliseconds, a._days += d * e._days, a._months += d * e._months, a._bubble()
		}

		function ad(a, b) {
			return _c(this, a, b, 1)
		}

		function bd(a, b) {
			return _c(this, a, b, -1)
		}

		function cd(a) {
			return a < 0 ? Math.floor(a) : Math.ceil(a)
		}

		function dd() {
			var a, b, c, d, e, f = this._milliseconds,
				g = this._days,
				h = this._months,
				i = this._data;
			return f >= 0 && g >= 0 && h >= 0 || f <= 0 && g <= 0 && h <= 0 || (f += 864e5 * cd(fd(h) + g), g = 0, h = 0), i.milliseconds = f % 1e3, a = t(f / 1e3), i.seconds = a % 60, b = t(a / 60), i.minutes = b % 60, c = t(b / 60), i.hours = c % 24, g += t(c / 24), e = t(ed(g)), h += e, g -= cd(fd(e)), d = t(h / 12), h %= 12, i.days = g, i.months = h, i.years = d, this
		}

		function ed(a) {
			return 4800 * a / 146097
		}

		function fd(a) {
			return 146097 * a / 4800
		}

		function gd(a) {
			if (!this.isValid()) return NaN;
			var b, c, d = this._milliseconds;
			if (a = K(a), "month" === a || "year" === a) return b = this._days + d / 864e5, c = this._months + ed(b), "month" === a ? c : c / 12;
			switch (b = this._days + Math.round(fd(this._months)), a) {
				case "week":
					return b / 7 + d / 6048e5;
				case "day":
					return b + d / 864e5;
				case "hour":
					return 24 * b + d / 36e5;
				case "minute":
					return 1440 * b + d / 6e4;
				case "second":
					return 86400 * b + d / 1e3;
				case "millisecond":
					return Math.floor(864e5 * b) + d;
				default:
					throw new Error("Unknown unit " + a)
			}
		}

		function hd() {
			return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * u(this._months / 12) : NaN
		}

		function id(a) {
			return function () {
				return this.as(a)
			}
		}

		function jd(a) {
			return a = K(a), this.isValid() ? this[a + "s"]() : NaN
		}

		function kd(a) {
			return function () {
				return this.isValid() ? this._data[a] : NaN
			}
		}

		function ld() {
			return t(this.days() / 7)
		}

		function md(a, b, c, d, e) {
			return e.relativeTime(b || 1, !!c, a, d)
		}

		function nd(a, b, c) {
			var d = Sb(a).abs(),
				e = uf(d.as("s")),
				f = uf(d.as("m")),
				g = uf(d.as("h")),
				h = uf(d.as("d")),
				i = uf(d.as("M")),
				j = uf(d.as("y")),
				k = e <= vf.ss && ["s", e] || e < vf.s && ["ss", e] || f <= 1 && ["m"] || f < vf.m && ["mm", f] || g <= 1 && ["h"] || g < vf.h && ["hh", g] || h <= 1 && ["d"] || h < vf.d && ["dd", h] || i <= 1 && ["M"] || i < vf.M && ["MM", i] || j <= 1 && ["y"] || ["yy", j];
			return k[2] = b, k[3] = +a > 0, k[4] = c, md.apply(null, k)
		}

		function od(a) {
			return void 0 === a ? uf : "function" == typeof a && (uf = a, !0)
		}

		function pd(a, b) {
			return void 0 !== vf[a] && (void 0 === b ? vf[a] : (vf[a] = b, "s" === a && (vf.ss = b - 1), !0))
		}

		function qd(a) {
			if (!this.isValid()) return this.localeData().invalidDate();
			var b = this.localeData(),
				c = nd(this, !a, b);
			return a && (c = b.pastFuture(+this, c)), b.postformat(c)
		}

		function rd() {
			if (!this.isValid()) return this.localeData().invalidDate();
			var a, b, c, d = wf(this._milliseconds) / 1e3,
				e = wf(this._days),
				f = wf(this._months);
			a = t(d / 60), b = t(a / 60), d %= 60, a %= 60, c = t(f / 12), f %= 12;
			var g = c,
				h = f,
				i = e,
				j = b,
				k = a,
				l = d,
				m = this.asSeconds();
			return m ? (m < 0 ? "-" : "") + "P" + (g ? g + "Y" : "") + (h ? h + "M" : "") + (i ? i + "D" : "") + (j || k || l ? "T" : "") + (j ? j + "H" : "") + (k ? k + "M" : "") + (l ? l + "S" : "") : "P0D"
		}
		var sd, td;
		td = Array.prototype.some ? Array.prototype.some : function (a) {
			for (var b = Object(this), c = b.length >>> 0, d = 0; d < c; d++)
				if (d in b && a.call(this, b[d], d, b)) return !0;
			return !1
		};
		var ud = td,
			vd = a.momentProperties = [],
			wd = !1,
			xd = {};
		a.suppressDeprecationWarnings = !1, a.deprecationHandler = null;
		var yd;
		yd = Object.keys ? Object.keys : function (a) {
			var b, c = [];
			for (b in a) j(a, b) && c.push(b);
			return c
		};
		var zd, Ad = yd,
			Bd = {
				sameDay: "[Today at] LT",
				nextDay: "[Tomorrow at] LT",
				nextWeek: "dddd [at] LT",
				lastDay: "[Yesterday at] LT",
				lastWeek: "[Last] dddd [at] LT",
				sameElse: "L"
			},
			Cd = {
				LTS: "h:mm:ss A",
				LT: "h:mm A",
				L: "MM/DD/YYYY",
				LL: "MMMM D, YYYY",
				LLL: "MMMM D, YYYY h:mm A",
				LLLL: "dddd, MMMM D, YYYY h:mm A"
			},
			Dd = "Invalid date",
			Ed = "%d",
			Fd = /\d{1,2}/,
			Gd = {
				future: "in %s",
				past: "%s ago",
				s: "a few seconds",
				ss: "%d seconds",
				m: "a minute",
				mm: "%d minutes",
				h: "an hour",
				hh: "%d hours",
				d: "a day",
				dd: "%d days",
				M: "a month",
				MM: "%d months",
				y: "a year",
				yy: "%d years"
			},
			Hd = {},
			Id = {},
			Jd = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
			Kd = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
			Ld = {},
			Md = {},
			Nd = /\d/,
			Od = /\d\d/,
			Pd = /\d{3}/,
			Qd = /\d{4}/,
			Rd = /[+-]?\d{6}/,
			Sd = /\d\d?/,
			Td = /\d\d\d\d?/,
			Ud = /\d\d\d\d\d\d?/,
			Vd = /\d{1,3}/,
			Wd = /\d{1,4}/,
			Xd = /[+-]?\d{1,6}/,
			Yd = /\d+/,
			Zd = /[+-]?\d+/,
			$d = /Z|[+-]\d\d:?\d\d/gi,
			_d = /Z|[+-]\d\d(?::?\d\d)?/gi,
			ae = /[+-]?\d+(\.\d{1,3})?/,
			be = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
			ce = {},
			de = {},
			ee = 0,
			fe = 1,
			ge = 2,
			he = 3,
			ie = 4,
			je = 5,
			ke = 6,
			le = 7,
			me = 8;
		zd = Array.prototype.indexOf ? Array.prototype.indexOf : function (a) {
			var b;
			for (b = 0; b < this.length; ++b)
				if (this[b] === a) return b;
			return -1
		};
		var ne = zd;
		U("M", ["MM", 2], "Mo", function () {
			return this.month() + 1
		}), U("MMM", 0, 0, function (a) {
			return this.localeData().monthsShort(this, a)
		}), U("MMMM", 0, 0, function (a) {
			return this.localeData().months(this, a)
		}), J("month", "M"), M("month", 8), Z("M", Sd), Z("MM", Sd, Od), Z("MMM", function (a, b) {
			return b.monthsShortRegex(a)
		}), Z("MMMM", function (a, b) {
			return b.monthsRegex(a)
		}), ba(["M", "MM"], function (a, b) {
			b[fe] = u(a) - 1
		}), ba(["MMM", "MMMM"], function (a, b, c, d) {
			var e = c._locale.monthsParse(a, d, c._strict);
			null != e ? b[fe] = e : n(c).invalidMonth = a
		});
		var oe = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
			pe = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
			qe = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
			re = be,
			se = be;
		U("Y", 0, 0, function () {
			var a = this.year();
			return a <= 9999 ? "" + a : "+" + a
		}), U(0, ["YY", 2], 0, function () {
			return this.year() % 100
		}), U(0, ["YYYY", 4], 0, "year"), U(0, ["YYYYY", 5], 0, "year"), U(0, ["YYYYYY", 6, !0], 0, "year"), J("year", "y"), M("year", 1), Z("Y", Zd), Z("YY", Sd, Od), Z("YYYY", Wd, Qd), Z("YYYYY", Xd, Rd), Z("YYYYYY", Xd, Rd), ba(["YYYYY", "YYYYYY"], ee), ba("YYYY", function (b, c) {
			c[ee] = 2 === b.length ? a.parseTwoDigitYear(b) : u(b)
		}), ba("YY", function (b, c) {
			c[ee] = a.parseTwoDigitYear(b)
		}), ba("Y", function (a, b) {
			b[ee] = parseInt(a, 10)
		}), a.parseTwoDigitYear = function (a) {
			return u(a) + (u(a) > 68 ? 1900 : 2e3)
		};
		var te = O("FullYear", !0);
		U("w", ["ww", 2], "wo", "week"), U("W", ["WW", 2], "Wo", "isoWeek"), J("week", "w"), J("isoWeek", "W"), M("week", 5), M("isoWeek", 5), Z("w", Sd), Z("ww", Sd, Od), Z("W", Sd), Z("WW", Sd, Od), ca(["w", "ww", "W", "WW"], function (a, b, c, d) {
			b[d.substr(0, 1)] = u(a)
		});
		var ue = {
			dow: 0,
			doy: 6
		};
		U("d", 0, "do", "day"), U("dd", 0, 0, function (a) {
			return this.localeData().weekdaysMin(this, a)
		}), U("ddd", 0, 0, function (a) {
			return this.localeData().weekdaysShort(this, a)
		}), U("dddd", 0, 0, function (a) {
			return this.localeData().weekdays(this, a)
		}), U("e", 0, 0, "weekday"), U("E", 0, 0, "isoWeekday"), J("day", "d"), J("weekday", "e"), J("isoWeekday", "E"), M("day", 11), M("weekday", 11), M("isoWeekday", 11), Z("d", Sd), Z("e", Sd), Z("E", Sd), Z("dd", function (a, b) {
			return b.weekdaysMinRegex(a)
		}), Z("ddd", function (a, b) {
			return b.weekdaysShortRegex(a)
		}), Z("dddd", function (a, b) {
			return b.weekdaysRegex(a)
		}), ca(["dd", "ddd", "dddd"], function (a, b, c, d) {
			var e = c._locale.weekdaysParse(a, d, c._strict);
			null != e ? b.d = e : n(c).invalidWeekday = a
		}), ca(["d", "e", "E"], function (a, b, c, d) {
			b[d] = u(a)
		});
		var ve = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
			we = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
			xe = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
			ye = be,
			ze = be,
			Ae = be;
		U("H", ["HH", 2], 0, "hour"), U("h", ["hh", 2], 0, Ra), U("k", ["kk", 2], 0, Sa), U("hmm", 0, 0, function () {
			return "" + Ra.apply(this) + T(this.minutes(), 2)
		}), U("hmmss", 0, 0, function () {
			return "" + Ra.apply(this) + T(this.minutes(), 2) + T(this.seconds(), 2)
		}), U("Hmm", 0, 0, function () {
			return "" + this.hours() + T(this.minutes(), 2)
		}), U("Hmmss", 0, 0, function () {
			return "" + this.hours() + T(this.minutes(), 2) + T(this.seconds(), 2)
		}), Ta("a", !0), Ta("A", !1), J("hour", "h"), M("hour", 13), Z("a", Ua), Z("A", Ua), Z("H", Sd), Z("h", Sd), Z("k", Sd), Z("HH", Sd, Od), Z("hh", Sd, Od), Z("kk", Sd, Od), Z("hmm", Td), Z("hmmss", Ud), Z("Hmm", Td), Z("Hmmss", Ud), ba(["H", "HH"], he), ba(["k", "kk"], function (a, b, c) {
			var d = u(a);
			b[he] = 24 === d ? 0 : d
		}), ba(["a", "A"], function (a, b, c) {
			c._isPm = c._locale.isPM(a), c._meridiem = a
		}), ba(["h", "hh"], function (a, b, c) {
			b[he] = u(a), n(c).bigHour = !0
		}), ba("hmm", function (a, b, c) {
			var d = a.length - 2;
			b[he] = u(a.substr(0, d)), b[ie] = u(a.substr(d)), n(c).bigHour = !0
		}), ba("hmmss", function (a, b, c) {
			var d = a.length - 4,
				e = a.length - 2;
			b[he] = u(a.substr(0, d)), b[ie] = u(a.substr(d, 2)), b[je] = u(a.substr(e)), n(c).bigHour = !0
		}), ba("Hmm", function (a, b, c) {
			var d = a.length - 2;
			b[he] = u(a.substr(0, d)), b[ie] = u(a.substr(d))
		}), ba("Hmmss", function (a, b, c) {
			var d = a.length - 4,
				e = a.length - 2;
			b[he] = u(a.substr(0, d)), b[ie] = u(a.substr(d, 2)), b[je] = u(a.substr(e))
		});
		var Be, Ce = /[ap]\.?m?\.?/i,
			De = O("Hours", !0),
			Ee = {
				calendar: Bd,
				longDateFormat: Cd,
				invalidDate: Dd,
				ordinal: Ed,
				dayOfMonthOrdinalParse: Fd,
				relativeTime: Gd,
				months: pe,
				monthsShort: qe,
				week: ue,
				weekdays: ve,
				weekdaysMin: xe,
				weekdaysShort: we,
				meridiemParse: Ce
			},
			Fe = {},
			Ge = {},
			He = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
			Ie = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
			Je = /Z|[+-]\d\d(?::?\d\d)?/,
			Ke = [
				["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
				["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
				["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
				["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
				["YYYY-DDD", /\d{4}-\d{3}/],
				["YYYY-MM", /\d{4}-\d\d/, !1],
				["YYYYYYMMDD", /[+-]\d{10}/],
				["YYYYMMDD", /\d{8}/],
				["GGGG[W]WWE", /\d{4}W\d{3}/],
				["GGGG[W]WW", /\d{4}W\d{2}/, !1],
				["YYYYDDD", /\d{7}/]
			],
			Le = [
				["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
				["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
				["HH:mm:ss", /\d\d:\d\d:\d\d/],
				["HH:mm", /\d\d:\d\d/],
				["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
				["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
				["HHmmss", /\d\d\d\d\d\d/],
				["HHmm", /\d\d\d\d/],
				["HH", /\d\d/]
			],
			Me = /^\/?Date\((\-?\d+)/i,
			Ne = /^((?:Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d?\d\s(?:Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(?:\d\d)?\d\d\s)(\d\d:\d\d)(\:\d\d)?(\s(?:UT|GMT|[ECMP][SD]T|[A-IK-Za-ik-z]|[+-]\d{4}))$/;
		a.createFromInputFallback = x("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function (a) {
			a._d = new Date(a._i + (a._useUTC ? " UTC" : ""))
		}), a.ISO_8601 = function () {}, a.RFC_2822 = function () {};
		var Oe = x("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
				var a = tb.apply(null, arguments);
				return this.isValid() && a.isValid() ? a < this ? this : a : p()
			}),
			Pe = x("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function () {
				var a = tb.apply(null, arguments);
				return this.isValid() && a.isValid() ? a > this ? this : a : p()
			}),
			Qe = function () {
				return Date.now ? Date.now() : +new Date
			},
			Re = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];
		Db("Z", ":"), Db("ZZ", ""), Z("Z", _d), Z("ZZ", _d), ba(["Z", "ZZ"], function (a, b, c) {
			c._useUTC = !0, c._tzm = Eb(_d, a)
		});
		var Se = /([\+\-]|\d\d)/gi;
		a.updateOffset = function () {};
		var Te = /^(\-)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
			Ue = /^(-)?P(?:(-?[0-9,.]*)Y)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)W)?(?:(-?[0-9,.]*)D)?(?:T(?:(-?[0-9,.]*)H)?(?:(-?[0-9,.]*)M)?(?:(-?[0-9,.]*)S)?)?$/;
		Sb.fn = Ab.prototype, Sb.invalid = zb;
		var Ve = Wb(1, "add"),
			We = Wb(-1, "subtract");
		a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", a.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]";
		var Xe = x("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (a) {
			return void 0 === a ? this.localeData() : this.locale(a)
		});
		U(0, ["gg", 2], 0, function () {
			return this.weekYear() % 100
		}), U(0, ["GG", 2], 0, function () {
			return this.isoWeekYear() % 100
		}), Dc("gggg", "weekYear"), Dc("ggggg", "weekYear"), Dc("GGGG", "isoWeekYear"), Dc("GGGGG", "isoWeekYear"), J("weekYear", "gg"), J("isoWeekYear", "GG"), M("weekYear", 1), M("isoWeekYear", 1), Z("G", Zd), Z("g", Zd), Z("GG", Sd, Od), Z("gg", Sd, Od), Z("GGGG", Wd, Qd), Z("gggg", Wd, Qd), Z("GGGGG", Xd, Rd), Z("ggggg", Xd, Rd), ca(["gggg", "ggggg", "GGGG", "GGGGG"], function (a, b, c, d) {
			b[d.substr(0, 2)] = u(a)
		}), ca(["gg", "GG"], function (b, c, d, e) {
			c[e] = a.parseTwoDigitYear(b)
		}), U("Q", 0, "Qo", "quarter"), J("quarter", "Q"), M("quarter", 7), Z("Q", Nd), ba("Q", function (a, b) {
			b[fe] = 3 * (u(a) - 1)
		}), U("D", ["DD", 2], "Do", "date"), J("date", "D"), M("date", 9), Z("D", Sd), Z("DD", Sd, Od), Z("Do", function (a, b) {
			return a ? b._dayOfMonthOrdinalParse || b._ordinalParse : b._dayOfMonthOrdinalParseLenient
		}), ba(["D", "DD"], ge), ba("Do", function (a, b) {
			b[ge] = u(a.match(Sd)[0], 10)
		});
		var Ye = O("Date", !0);
		U("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), J("dayOfYear", "DDD"), M("dayOfYear", 4), Z("DDD", Vd), Z("DDDD", Pd), ba(["DDD", "DDDD"], function (a, b, c) {
			c._dayOfYear = u(a)
		}), U("m", ["mm", 2], 0, "minute"), J("minute", "m"), M("minute", 14), Z("m", Sd), Z("mm", Sd, Od), ba(["m", "mm"], ie);
		var Ze = O("Minutes", !1);
		U("s", ["ss", 2], 0, "second"), J("second", "s"), M("second", 15), Z("s", Sd), Z("ss", Sd, Od), ba(["s", "ss"], je);
		var $e = O("Seconds", !1);
		U("S", 0, 0, function () {
			return ~~(this.millisecond() / 100)
		}), U(0, ["SS", 2], 0, function () {
			return ~~(this.millisecond() / 10)
		}), U(0, ["SSS", 3], 0, "millisecond"), U(0, ["SSSS", 4], 0, function () {
			return 10 * this.millisecond()
		}), U(0, ["SSSSS", 5], 0, function () {
			return 100 * this.millisecond()
		}), U(0, ["SSSSSS", 6], 0, function () {
			return 1e3 * this.millisecond()
		}), U(0, ["SSSSSSS", 7], 0, function () {
			return 1e4 * this.millisecond()
		}), U(0, ["SSSSSSSS", 8], 0, function () {
			return 1e5 * this.millisecond()
		}), U(0, ["SSSSSSSSS", 9], 0, function () {
			return 1e6 * this.millisecond()
		}), J("millisecond", "ms"), M("millisecond", 16), Z("S", Vd, Nd), Z("SS", Vd, Od), Z("SSS", Vd, Pd);
		var _e;
		for (_e = "SSSS"; _e.length <= 9; _e += "S") Z(_e, Yd);
		for (_e = "S"; _e.length <= 9; _e += "S") ba(_e, Mc);
		var af = O("Milliseconds", !1);
		U("z", 0, 0, "zoneAbbr"), U("zz", 0, 0, "zoneName");
		var bf = r.prototype;
		bf.add = Ve, bf.calendar = Zb, bf.clone = $b, bf.diff = fc, bf.endOf = sc, bf.format = kc, bf.from = lc, bf.fromNow = mc, bf.to = nc, bf.toNow = oc, bf.get = R, bf.invalidAt = Bc, bf.isAfter = _b, bf.isBefore = ac, bf.isBetween = bc, bf.isSame = cc, bf.isSameOrAfter = dc, bf.isSameOrBefore = ec, bf.isValid = zc, bf.lang = Xe, bf.locale = pc, bf.localeData = qc, bf.max = Pe, bf.min = Oe, bf.parsingFlags = Ac, bf.set = S, bf.startOf = rc, bf.subtract = We, bf.toArray = wc, bf.toObject = xc, bf.toDate = vc, bf.toISOString = ic, bf.inspect = jc, bf.toJSON = yc, bf.toString = hc, bf.unix = uc, bf.valueOf = tc, bf.creationData = Cc, bf.year = te, bf.isLeapYear = ra, bf.weekYear = Ec,
			bf.isoWeekYear = Fc, bf.quarter = bf.quarters = Kc, bf.month = ka, bf.daysInMonth = la, bf.week = bf.weeks = Ba, bf.isoWeek = bf.isoWeeks = Ca, bf.weeksInYear = Hc, bf.isoWeeksInYear = Gc, bf.date = Ye, bf.day = bf.days = Ka, bf.weekday = La, bf.isoWeekday = Ma, bf.dayOfYear = Lc, bf.hour = bf.hours = De, bf.minute = bf.minutes = Ze, bf.second = bf.seconds = $e, bf.millisecond = bf.milliseconds = af, bf.utcOffset = Hb, bf.utc = Jb, bf.local = Kb, bf.parseZone = Lb, bf.hasAlignedHourOffset = Mb, bf.isDST = Nb, bf.isLocal = Pb, bf.isUtcOffset = Qb, bf.isUtc = Rb, bf.isUTC = Rb, bf.zoneAbbr = Nc, bf.zoneName = Oc, bf.dates = x("dates accessor is deprecated. Use date instead.", Ye), bf.months = x("months accessor is deprecated. Use month instead", ka), bf.years = x("years accessor is deprecated. Use year instead", te), bf.zone = x("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", Ib), bf.isDSTShifted = x("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", Ob);
		var cf = C.prototype;
		cf.calendar = D, cf.longDateFormat = E, cf.invalidDate = F, cf.ordinal = G, cf.preparse = Rc, cf.postformat = Rc, cf.relativeTime = H, cf.pastFuture = I, cf.set = A, cf.months = fa, cf.monthsShort = ga, cf.monthsParse = ia, cf.monthsRegex = na, cf.monthsShortRegex = ma, cf.week = ya, cf.firstDayOfYear = Aa, cf.firstDayOfWeek = za, cf.weekdays = Fa, cf.weekdaysMin = Ha, cf.weekdaysShort = Ga, cf.weekdaysParse = Ja, cf.weekdaysRegex = Na, cf.weekdaysShortRegex = Oa, cf.weekdaysMinRegex = Pa, cf.isPM = Va, cf.meridiem = Wa, $a("en", {
			dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
			ordinal: function (a) {
				var b = a % 10,
					c = 1 === u(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
				return a + c
			}
		}), a.lang = x("moment.lang is deprecated. Use moment.locale instead.", $a), a.langData = x("moment.langData is deprecated. Use moment.localeData instead.", bb);
		var df = Math.abs,
			ef = id("ms"),
			ff = id("s"),
			gf = id("m"),
			hf = id("h"),
			jf = id("d"),
			kf = id("w"),
			lf = id("M"),
			mf = id("y"),
			nf = kd("milliseconds"),
			of = kd("seconds"),
			pf = kd("minutes"),
			qf = kd("hours"),
			rf = kd("days"),
			sf = kd("months"),
			tf = kd("years"),
			uf = Math.round,
			vf = {
				ss: 44,
				s: 45,
				m: 45,
				h: 22,
				d: 26,
				M: 11
			},
			wf = Math.abs,
			xf = Ab.prototype;
		return xf.isValid = yb, xf.abs = $c, xf.add = ad, xf.subtract = bd, xf.as = gd, xf.asMilliseconds = ef, xf.asSeconds = ff, xf.asMinutes = gf, xf.asHours = hf, xf.asDays = jf, xf.asWeeks = kf, xf.asMonths = lf, xf.asYears = mf, xf.valueOf = hd, xf._bubble = dd, xf.get = jd, xf.milliseconds = nf, xf.seconds = of , xf.minutes = pf, xf.hours = qf, xf.days = rf, xf.weeks = ld, xf.months = sf, xf.years = tf, xf.humanize = qd, xf.toISOString = rd, xf.toString = rd, xf.toJSON = rd, xf.locale = pc, xf.localeData = qc, xf.toIsoString = x("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", rd), xf.lang = Xe, U("X", 0, 0, "unix"), U("x", 0, 0, "valueOf"), Z("x", Zd), Z("X", ae), ba("X", function (a, b, c) {
			c._d = new Date(1e3 * parseFloat(a, 10))
		}), ba("x", function (a, b, c) {
			c._d = new Date(u(a))
		}), a.version = "2.18.1", b(tb), a.fn = bf, a.min = vb, a.max = wb, a.now = Qe, a.utc = l, a.unix = Pc, a.months = Vc, a.isDate = h, a.locale = $a, a.invalid = p, a.duration = Sb, a.isMoment = s, a.weekdays = Xc, a.parseZone = Qc, a.localeData = bb, a.isDuration = Bb, a.monthsShort = Wc, a.weekdaysMin = Zc, a.defineLocale = _a, a.updateLocale = ab, a.locales = cb, a.weekdaysShort = Yc, a.normalizeUnits = K, a.relativeTimeRounding = od, a.relativeTimeThreshold = pd, a.calendarFormat = Yb, a.prototype = bf, a.defineLocale("id", {
			months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"),
			monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"),
			weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"),
			weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"),
			weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"),
			longDateFormat: {
				LT: "HH.mm",
				LTS: "HH.mm.ss",
				L: "DD/MM/YYYY",
				LL: "D MMMM YYYY",
				LLL: "D MMMM YYYY [pukul] HH.mm",
				LLLL: "dddd, D MMMM YYYY [pukul] HH.mm"
			},
			meridiemParse: /pagi|siang|sore|malam/,
			meridiemHour: function (a, b) {
				return 12 === a && (a = 0), "pagi" === b ? a : "siang" === b ? a >= 11 ? a : a + 12 : "sore" === b || "malam" === b ? a + 12 : void 0
			},
			meridiem: function (a, b, c) {
				return a < 11 ? "pagi" : a < 15 ? "siang" : a < 19 ? "sore" : "malam"
			},
			calendar: {
				sameDay: "[Hari ini pukul] LT",
				nextDay: "[Besok pukul] LT",
				nextWeek: "dddd [pukul] LT",
				lastDay: "[Kemarin pukul] LT",
				lastWeek: "dddd [lalu pukul] LT",
				sameElse: "L"
			},
			relativeTime: {
				future: "dalam %s",
				past: "%s yang lalu",
				s: "beberapa detik",
				m: "semenit",
				mm: "%d menit",
				h: "sejam",
				hh: "%d jam",
				d: "sehari",
				dd: "%d hari",
				M: "sebulan",
				MM: "%d bulan",
				y: "setahun",
				yy: "%d tahun"
			},
			week: {
				dow: 1,
				doy: 7
			}
		}), a.locale("id"), a
	}),
	function (a) {
		"function" == typeof define && define.amd ? define(["jquery", "moment"], a) : "object" == typeof exports && "undefined" != typeof module ? module.exports = a(require("jquery"), require("moment")) : a(jQuery, moment)
	}(function (a, b) {
		"use strict";
		a.dateRangePickerLanguages = {
			default: {
				selected: "Selected:",
				day: "Day",
				days: "Days",
				apply: "Close",
				"week-1": "mo",
				"week-2": "tu",
				"week-3": "we",
				"week-4": "th",
				"week-5": "fr",
				"week-6": "sa",
				"week-7": "su",
				"week-number": "W",
				"month-name": ["january", "february", "march", "april", "may", "june", "july", "august", "september", "october", "november", "december"],
				shortcuts: "Shortcuts",
				"custom-values": "Custom Values",
				past: "Past",
				following: "Following",
				previous: "Previous",
				"prev-week": "Week",
				"prev-month": "Month",
				"prev-year": "Year",
				next: "Next",
				"next-week": "Week",
				"next-month": "Month",
				"next-year": "Year",
				"less-than": "Date range should not be more than %d days",
				"more-than": "Date range should not be less than %d days",
				"default-more": "Please select a date range longer than %d days",
				"default-single": "Please select a date",
				"default-less": "Please select a date range less than %d days",
				"default-range": "Please select a date range between %d and %d days",
				"default-default": "Please select a date range",
				time: "Time",
				hour: "Hour",
				minute: "Minute"
			},
			id: {
				selected: "Terpilih:",
				day: "Hari",
				days: "Hari",
				apply: "Tutup",
				"week-1": "s",
				"week-2": "s",
				"week-3": "r",
				"week-4": "k",
				"week-5": "j",
				"week-6": "s",
				"week-7": "m",
				"week-number": "W",
				"month-name": ["januari", "februari", "maret", "april", "mei", "juni", "juli", "agustus", "september", "oktober", "november", "desember"],
				shortcuts: "Pintas",
				"custom-values": "Nilai yang ditentukan",
				past: "Yang Lalu",
				following: "Mengikuti",
				previous: "Sebelumnya",
				"prev-week": "Minggu",
				"prev-month": "Bulan",
				"prev-year": "Tahun",
				next: "Selanjutnya",
				"next-week": "Minggu",
				"next-month": "Bulan",
				"next-year": "Tahun",
				"less-than": "Tanggal harus lebih dari %d hari",
				"more-than": "Tanggal harus kurang dari %d hari",
				"default-more": "Jarak tanggal harus lebih lama dari %d hari",
				"default-single": "Silakan pilih tanggal",
				"default-less": "Jarak rentang tanggal tidak boleh lebih lama dari %d hari",
				"default-range": "Rentang tanggal harus antara %d dan %d hari",
				"default-default": "Silakan pilih rentang tanggal",
				time: "Waktu",
				hour: "Jam",
				minute: "Menit"
			}
		}, a.fn.dateRangePicker = function (c) {
			function d(b, c) {
				return c.contains(b.target) || b.target == c || void 0 != c.childNodes && a.inArray(b.target, c.childNodes) >= 0
			}

			function e() {
				function e(b) {
					var d = a(b).parents("table").hasClass("month2"),
						e = d ? c.month2 : c.month1;
					e = U(e), !c.singleMonth && !c.singleDate && !d && S(e, c.month2) >= 0 || $(e) || (G(e, d ? "month2" : "month1"), P())
				}

				function g(a) {
					var b = U(c.month1),
						d = U(c.month2);
					$(d) || !c.singleDate && S(b, d) >= 0 || (G(b, "month1"), G(d, "month2"), F())
				}

				function h(b) {
					var d = a(b).parents("table").hasClass("month2"),
						e = d ? c.month2 : c.month1;
					e = V(e), d && S(e, c.month1) <= 0 || $(e) || (G(e, d ? "month2" : "month1"), P())
				}

				function i(a) {
					var b = V(c.month1),
						d = V(c.month2);
					$(b) || !c.singleDate && S(d, b) <= 0 || (G(d, "month2"), G(b, "month1"), F())
				}
				var j = this;
				if (a(this).data("date-picker-opened")) return void Q();
				a(this).data("date-picker-opened", !0), ka = X().hide(), ka.append('<div class="date-range-length-tip"></div>'), a(c.container).append(ka), c.inline ? ka.addClass("inline-wrapper") : f(), c.alwaysOpen && ka.find(".apply-btn").hide();
				var l = ia();
				if (ja(l), c.time.enabled)
					if (c.startDate && c.endDate || c.start && c.end) M(b(c.start || c.startDate).toDate(), "time1"), M(b(c.end || c.endDate).toDate(), "time2");
					else {
						var m = c.defaultEndTime ? c.defaultEndTime : l;
						M(l, "time1"), M(m, "time2")
					}
				var n = "";
				n = ha(c.singleDate ? "default-single" : c.minDays && c.maxDays ? "default-range" : c.minDays ? "default-more" : c.maxDays ? "default-less" : "default-default"), ka.find(".default-top").html(n.replace(/\%d/, c.minDays).replace(/\%d/, c.maxDays)), c.singleMonth ? ka.addClass("single-month") : ka.addClass("two-months"), setTimeout(function () {
					k(), na = !0
				}, 0), ka.click(function (a) {
					a.stopPropagation()
				}), a(document).bind("click.datepicker", function (a) {
					d(a, j[0]) || ka.is(":visible") && Q()
				}), ka.find(".next").click(function () {
					c.stickyMonths ? g(this) : e(this)
				}), ka.find(".prev").click(function () {
					c.stickyMonths ? i(this) : h(this)
				}), ka.attr("unselectable", "on").css("user-select", "none").bind("selectstart", function (a) {
					return a.preventDefault(), !1
				}), ka.find(".apply-btn").click(function () {
					Q();
					var b = O(new Date(c.start)) + c.separator + O(new Date(c.end));
					a(j).trigger("datepicker-apply", {
						value: b,
						date1: new Date(c.start),
						date2: new Date(c.end)
					})
				}), ka.find("[custom]").click(function () {
					var b = a(this).attr("custom");
					c.start = !1, c.end = !1, ka.find(".day.checked").removeClass("checked"), c.setValue.call(pa, b), A(), B(!0), F(), c.autoClose && Q()
				}), ka.find("[shortcut]").click(function () {
					var b, d = a(this).attr("shortcut"),
						e = new Date,
						f = !1;
					if (d.indexOf("day") != -1) {
						var g = parseInt(d.split(",", 2)[1], 10);
						f = new Date((new Date).getTime() + 864e5 * g), e = new Date(e.getTime() + 864e5 * (g > 0 ? 1 : -1))
					} else if (d.indexOf("week") != -1) {
						b = d.indexOf("prev,") != -1 ? -1 : 1;
						var h;
						for (h = 1 == b ? "monday" == c.startOfWeek ? 1 : 0 : "monday" == c.startOfWeek ? 0 : 6, e = new Date(e.getTime() - 864e5); e.getDay() != h;) e = new Date(e.getTime() + 864e5 * b);
						f = new Date(e.getTime() + 864e5 * b * 6)
					} else if (d.indexOf("month") != -1) b = d.indexOf("prev,") != -1 ? -1 : 1, f = 1 == b ? U(e) : V(e), f.setDate(1), e = U(f), e.setDate(1), e = new Date(e.getTime() - 864e5);
					else if (d.indexOf("year") != -1) b = d.indexOf("prev,") != -1 ? -1 : 1, f = new Date, f.setFullYear(e.getFullYear() + b), f.setMonth(0), f.setDate(1), e.setFullYear(e.getFullYear() + b), e.setMonth(11), e.setDate(31);
					else if ("custom" == d) {
						var i = a(this).html();
						if (c.customShortcuts && c.customShortcuts.length > 0)
							for (var j = 0; j < c.customShortcuts.length; j++) {
								var k = c.customShortcuts[j];
								if (k.name == i) {
									var l = [];
									if (l = k.dates.call(), l && 2 == l.length && (f = l[0], e = l[1]), l && 1 == l.length) {
										var m = l[0];
										G(m, "month1"), G(U(m), "month2"), P()
									}
									break
								}
							}
					}
					f && e && (D(f, e), A())
				}), ka.find(".time1 input[type=range]").bind("change touchmove", function (b) {
					var c = b.target,
						d = "hour" == c.name ? a(c).val().replace(/^(\d{1})$/, "0$1") : void 0,
						e = "minute" == c.name ? a(c).val().replace(/^(\d{1})$/, "0$1") : void 0;
					o("time1", d, e)
				}), ka.find(".time2 input[type=range]").bind("change touchmove", function (b) {
					var c = b.target,
						d = "hour" == c.name ? a(c).val().replace(/^(\d{1})$/, "0$1") : void 0,
						e = "minute" == c.name ? a(c).val().replace(/^(\d{1})$/, "0$1") : void 0;
					o("time2", d, e)
				})
			}

			function f() {
				if (!c.inline) {
					var b = a(oa).offset();
					if ("relative" == a(c.container).css("position")) {
						var d = a(c.container).offset(),
							e = Math.max(0, b.left + ka.outerWidth() - a("body").width() + 16);
						ka.css({
							top: b.top - d.top + a(oa).outerHeight() + 4,
							left: b.left - d.left - e
						})
					} else b.left < 460 ? ka.css({
						top: b.top + a(oa).outerHeight() + parseInt(a("body").css("border-top") || 0, 10),
						left: b.left
					}) : ka.css({
						top: b.top + a(oa).outerHeight() + parseInt(a("body").css("border-top") || 0, 10),
						left: b.left + a(oa).width() - ka.width() - 16
					})
				}
			}

			function g() {
				return ka
			}

			function h(b) {
				R(), i(), c.customOpenAnimation ? c.customOpenAnimation.call(ka.get(0), function () {
					a(oa).trigger("datepicker-opened", {
						relatedTarget: ka
					})
				}) : ka.slideDown(b, function () {
					a(oa).trigger("datepicker-opened", {
						relatedTarget: ka
					})
				}), a(oa).trigger("datepicker-open", {
					relatedTarget: ka
				}), P(), k(), f()
			}

			function i() {
				var a = c.getValue.call(pa),
					d = a ? a.split(c.separator) : "";
				if (d && (1 == d.length && c.singleDate || d.length >= 2)) {
					var e = c.format;
					e.match(/Do/) && (e = e.replace(/Do/, "D"), d[0] = d[0].replace(/(\d+)(th|nd|st)/, "$1"), d.length >= 2 && (d[1] = d[1].replace(/(\d+)(th|nd|st)/, "$1"))), na = !1, d.length >= 2 ? D(j(d[0], e, b.locale(c.language)), j(d[1], e, b.locale(c.language))) : 1 == d.length && c.singleDate && E(j(d[0], e, b.locale(c.language))), na = !0
				}
			}

			function j(a, c, d) {
				return b(a, c, d).isValid() ? b(a, c, d).toDate() : b().toDate()
			}

			function k() {
				var a = ka.find(".gap").css("margin-left");
				a && (a = parseInt(a));
				var b = ka.find(".month1").width(),
					c = ka.find(".gap").width() + (a ? 2 * a : 0),
					d = ka.find(".month2").width();
				ka.find(".month-wrapper").width(b + c + d + 2)
			}

			function l(a, c) {
				ka.find("." + a + " input[type=range].hour-range").val(b(c).hours()), ka.find("." + a + " input[type=range].minute-range").val(b(c).minutes()), o(a, b(c).format("HH"), b(c).format("mm"))
			}

			function m(a, d) {
				c[a] = parseInt(b(parseInt(d)).startOf("day").add(b(c[a + "Time"]).format("HH"), "h").add(b(c[a + "Time"]).format("mm"), "m").valueOf())
			}

			function n() {
				l("time1", c.start), l("time2", c.end)
			}

			function o(a, d, e) {
				function f(a, b) {
					var f = b.format("HH"),
						g = b.format("mm");
					c[a] = b.startOf("day").add(d || f, "h").add(e || g, "m").valueOf()
				}
				switch (d && ka.find("." + a + " .hour-val").text(d), e && ka.find("." + a + " .minute-val").text(e), a) {
					case "time1":
						c.start && f("start", b(c.start)), f("startTime", b(c.startTime || b().valueOf()));
						break;
					case "time2":
						c.end && f("end", b(c.end)), f("endTime", b(c.endTime || b().valueOf()))
				}
				A(), B(), F()
			}

			function p() {
				c.start = !1, c.end = !1, ka.find(".day.checked").removeClass("checked"), ka.find(".day.last-date-selected").removeClass("last-date-selected"), ka.find(".day.first-date-selected").removeClass("first-date-selected"), c.setValue.call(pa, ""), A(), B(), F()
			}

			function q(a) {
				var d = a;
				return "week-range" === c.batchMode ? d = "monday" === c.startOfWeek ? b(parseInt(a)).startOf("isoweek").valueOf() : b(parseInt(a)).startOf("week").valueOf() : "month-range" === c.batchMode && (d = b(parseInt(a)).startOf("month").valueOf()), d
			}

			function r(a) {
				var d = a;
				return "week-range" === c.batchMode ? d = "monday" === c.startOfWeek ? b(parseInt(a)).endOf("isoweek").valueOf() : b(parseInt(a)).endOf("week").valueOf() : "month-range" === c.batchMode && (d = b(parseInt(a)).endOf("month").valueOf()), d
			}

			function s(d) {
				if (!d.hasClass("invalid")) {
					var e = d.attr("time");
					if (d.addClass("checked"), c.singleDate ? (c.start = e, c.end = !1) : "week" === c.batchMode ? "monday" === c.startOfWeek ? (c.start = b(parseInt(e)).startOf("isoweek").valueOf(), c.end = b(parseInt(e)).endOf("isoweek").valueOf()) : (c.end = b(parseInt(e)).endOf("week").valueOf(), c.start = b(parseInt(e)).startOf("week").valueOf()) : "workweek" === c.batchMode ? (c.start = b(parseInt(e)).day(1).valueOf(), c.end = b(parseInt(e)).day(5).valueOf()) : "weekend" === c.batchMode ? (c.start = b(parseInt(e)).day(6).valueOf(), c.end = b(parseInt(e)).day(7).valueOf()) : "month" === c.batchMode ? (c.start = b(parseInt(e)).startOf("month").valueOf(), c.end = b(parseInt(e)).endOf("month").valueOf()) : c.start && c.end || !c.start && !c.end ? (c.start = q(e), c.end = !1) : c.start && (c.end = r(e), c.time.enabled && m("end", c.end)), c.time.enabled && (c.start && m("start", c.start), c.end && m("end", c.end)), !c.singleDate && c.start && c.end && c.start > c.end) {
						var f = c.end;
						c.end = r(c.start), c.start = q(f), c.time.enabled && c.swapTime && n()
					}
					c.start = parseInt(c.start), c.end = parseInt(c.end), x(), c.start && !c.end && (a(oa).trigger("datepicker-first-date-selected", {
						date1: new Date(c.start)
					}), w(d)), v(e), A(), B(), F(), z()
				}
			}

			function t(a) {
				var d, e, f = parseInt(a.attr("data-start-time"), 10);
				c.startWeek ? (ka.find(".week-number-selected").removeClass("week-number-selected"), d = new Date(f < c.startWeek ? f : c.startWeek), e = new Date(f < c.startWeek ? c.startWeek : f), c.startWeek = !1, c.start = b(d).day("monday" == c.startOfWeek ? 1 : 0).valueOf(), c.end = b(e).day("monday" == c.startOfWeek ? 7 : 6).valueOf()) : (c.startWeek = f, a.addClass("week-number-selected"), d = new Date(f), c.start = b(d).day("monday" == c.startOfWeek ? 1 : 0).valueOf(), c.end = b(d).day("monday" == c.startOfWeek ? 7 : 6).valueOf()), v(), A(), B(), F(), z()
			}

			function u(a) {
				if (a = parseInt(a, 10), c.startDate && T(a, c.startDate) < 0) return !1;
				if (c.endDate && T(a, c.endDate) > 0) return !1;
				if (c.start && !c.end && !c.singleDate) {
					if (c.maxDays > 0 && C(a, c.start) > c.maxDays) return !1;
					if (c.minDays > 0 && C(a, c.start) < c.minDays) return !1;
					if (c.selectForward && a < c.start) return !1;
					if (c.selectBackward && a > c.start) return !1
				}
				return !0
			}

			function v() {
				return ka.find(".day.invalid.tmp").removeClass("tmp invalid").addClass("valid"), c.start && !c.end && ka.find(".day.toMonth.valid").each(function () {
					var b = parseInt(a(this).attr("time"), 10);
					u(b) ? a(this).addClass("valid tmp").removeClass("invalid") : a(this).addClass("invalid tmp").removeClass("valid")
				}), !0
			}

			function w(b) {
				var d = parseInt(b.attr("time")),
					e = "";
				if (b.hasClass("has-tooltip") && b.attr("data-tooltip")) e = '<span style="white-space:nowrap">' + b.attr("data-tooltip") + "</span>";
				else if (!b.hasClass("invalid"))
					if (c.singleDate) ka.find(".day.hovering").removeClass("hovering"), b.addClass("hovering");
					else if (ka.find(".day").each(function () {
						var b = parseInt(a(this).attr("time"));
						c.start, c.end;
						b == d ? a(this).addClass("hovering") : a(this).removeClass("hovering"), c.start && !c.end && (c.start < b && d >= b || c.start > b && d <= b) ? a(this).addClass("hovering") : a(this).removeClass("hovering")
					}), c.start && !c.end) {
					var f = C(d, c.start);
					c.hoveringTooltip && ("function" == typeof c.hoveringTooltip ? e = c.hoveringTooltip(f, c.start, d) : c.hoveringTooltip === !0 && f > 1 && (e = f + " " + ha("days")))
				}
				if (e) {
					var g = b.offset(),
						h = ka.offset(),
						i = g.left - h.left,
						j = g.top - h.top;
					i += b.width() / 2;
					var k = ka.find(".date-range-length-tip"),
						l = k.css({
							visibility: "hidden",
							display: "none"
						}).html(e).width(),
						m = k.height();
					i -= l / 2, j -= m, setTimeout(function () {
						k.css({
							left: i,
							top: j,
							display: "block",
							visibility: "visible"
						})
					}, 10)
				} else ka.find(".date-range-length-tip").hide()
			}

			function x() {
				ka.find(".day.hovering").removeClass("hovering"), ka.find(".date-range-length-tip").hide()
			}

			function y(a) {
				var d = a.val(),
					e = a.attr("name"),
					f = a.parents("table").hasClass("month1") ? "month1" : "month2",
					g = "month1" === f ? "month2" : "month1",
					h = !!c.startDate && b(c.startDate),
					i = !!c.endDate && b(c.endDate),
					j = b(c[f])[e](d);
				h && j.isSameOrBefore(h) && (j = h.add("month2" === f ? 1 : 0, "month")), i && j.isSameOrAfter(i) && (j = i.add(c.singleMonth || "month1" !== f ? 0 : -1, "month")), G(j, f), "month1" === f ? (c.stickyMonths || b(j).isSameOrAfter(c[g], "month")) && G(b(j).add(1, "month"), g) : (c.stickyMonths || b(j).isSameOrBefore(c[g], "month")) && G(b(j).add(-1, "month"), g), P()
			}

			function z() {
				c.singleDate === !0 ? na && c.start && c.autoClose && Q() : na && c.start && c.end && c.autoClose && Q()
			}

			function A() {
				var a = Math.ceil((c.end - c.start) / 864e5) + 1;
				c.singleDate ? c.start && !c.end ? ka.find(".drp_top-bar").removeClass("error").addClass("normal") : ka.find(".drp_top-bar").removeClass("error").removeClass("normal") : c.maxDays && a > c.maxDays ? (c.start = !1, c.end = !1, ka.find(".day").removeClass("checked"), ka.find(".drp_top-bar").removeClass("normal").addClass("error").find(".error-top").html(ha("less-than").replace("%d", c.maxDays))) : c.minDays && a < c.minDays ? (c.start = !1, c.end = !1, ka.find(".day").removeClass("checked"), ka.find(".drp_top-bar").removeClass("normal").addClass("error").find(".error-top").html(ha("more-than").replace("%d", c.minDays))) : c.start || c.end ? ka.find(".drp_top-bar").removeClass("error").addClass("normal") : ka.find(".drp_top-bar").removeClass("error").removeClass("normal"), c.singleDate && c.start && !c.end || !c.singleDate && c.start && c.end ? ka.find(".apply-btn").removeClass("disabled") : ka.find(".apply-btn").addClass("disabled"), c.batchMode && (c.start && c.startDate && T(c.start, c.startDate) < 0 || c.end && c.endDate && T(c.end, c.endDate) > 0) && (c.start = !1, c.end = !1, ka.find(".day").removeClass("checked"))
			}

			function B(b, d) {
				ka.find(".start-day").html("..."), ka.find(".end-day").html("..."), ka.find(".selected-days").hide(), c.start && ka.find(".start-day").html(O(new Date(parseInt(c.start)))), c.end && ka.find(".end-day").html(O(new Date(parseInt(c.end))));
				var e;
				c.start && c.singleDate ? (ka.find(".apply-btn").removeClass("disabled"), e = O(new Date(c.start)), c.setValue.call(pa, e, O(new Date(c.start)), O(new Date(c.end))), na && !d && a(oa).trigger("datepicker-change", {
					value: e,
					date1: new Date(c.start)
				})) : c.start && c.end ? (ka.find(".selected-days").show().find(".selected-days-num").html(C(c.end, c.start)), ka.find(".apply-btn").removeClass("disabled"), e = O(new Date(c.start)) + c.separator + O(new Date(c.end)), c.setValue.call(pa, e, O(new Date(c.start)), O(new Date(c.end))), na && !d && a(oa).trigger("datepicker-change", {
					value: e,
					date1: new Date(c.start),
					date2: new Date(c.end)
				})) : b ? ka.find(".apply-btn").removeClass("disabled") : ka.find(".apply-btn").addClass("disabled")
			}

			function C(a, b) {
				return Math.abs(ca(a) - ca(b)) + 1
			}

			function D(a, b, d) {
				if (a.getTime() > b.getTime()) {
					var e = b;
					b = a, a = e, e = null
				}
				var f = !0;
				return c.startDate && T(a, c.startDate) < 0 && (f = !1), c.endDate && T(b, c.endDate) > 30 && (f = !1), f ? (c.start = a.getTime(), c.end = b.getTime(), c.time.enabled && (l("time1", a), l("time2", b)), (c.stickyMonths || T(a, b) > 0 && 0 === S(a, b)) && (c.lookBehind ? a = V(b) : b = U(a)), c.stickyMonths && c.endDate !== !1 && S(b, c.endDate) > 0 && (a = V(a), b = V(b)), c.stickyMonths || 0 === S(a, b) && (c.lookBehind ? a = V(b) : b = U(a)), G(a, "month1"), G(b, "month2"), P(), A(), B(!1, d), void z()) : (G(c.startDate, "month1"), G(U(c.startDate), "month2"), void P())
			}

			function E(a) {
				var b = !0;
				if (c.startDate && T(a, c.startDate) < 0 && (b = !1), c.endDate && T(a, c.endDate) > 0 && (b = !1), !b) return void G(c.startDate, "month1");
				if (c.start = a.getTime(), c.time.enabled && l("time1", a), G(a, "month1"), c.singleMonth !== !0) {
					var d = U(a);
					G(d, "month2")
				}
				P(), B(), z()
			}

			function F() {
				(c.start || c.end) && (ka.find(".day").each(function () {
					var d = parseInt(a(this).attr("time")),
						e = c.start,
						f = c.end;
					c.time.enabled && (d = b(d).startOf("day").valueOf(), e = b(e || b().valueOf()).startOf("day").valueOf(), f = b(f || b().valueOf()).startOf("day").valueOf()), c.start && c.end && f >= d && e <= d || c.start && !c.end && b(e).format("YYYY-MM-DD") == b(d).format("YYYY-MM-DD") ? a(this).addClass("checked") : a(this).removeClass("checked"), c.start && b(e).format("YYYY-MM-DD") == b(d).format("YYYY-MM-DD") ? a(this).addClass("first-date-selected") : a(this).removeClass("first-date-selected"), c.start && b(e).subtract(1, "day").format("YYYY-MM-DD") == b(d).format("YYYY-MM-DD") ? a(this).addClass("before-first-date-selected") : a(this).removeClass("before-first-date-selected"), c.end && b(f).format("YYYY-MM-DD") == b(d).format("YYYY-MM-DD") ? a(this).addClass("last-date-selected") : a(this).removeClass("last-date-selected"), c.end && b(f).add(1, "day").format("YYYY-MM-DD") == b(d).format("YYYY-MM-DD") ? a(this).addClass("after-last-date-selected") : a(this).removeClass("after-last-date-selected")
				}), ka.find(".week-number").each(function () {
					a(this).attr("data-start-time") == c.startWeek && a(this).addClass("week-number-selected")
				}))
			}

			function G(a, d) {
				a = b(a).toDate();
				var e = H(a, d),
					f = I(a, d);
				ka.find("." + d + " .month-name").html(e + " " + f), ka.find("." + d + " tbody").html(ea(a)), c[d] = a, v(), L()
			}

			function H(a, d) {
				var e, f = !!c.startDate && b(c.startDate).add(c.singleMonth || "month2" !== d ? 0 : 1, "month"),
					g = !!c.endDate && b(c.endDate).add(c.singleMonth || "month1" !== d ? 0 : -1, "month");
				return a = b(a), !c.monthSelect || f && g && f.isSame(g, "month") ? '<div class="month-element">' + N(a.get("month")) + "</div>" : (e = [f && a.isSame(f, "year") ? f.get("month") : 0, g && a.isSame(g, "year") ? g.get("month") : 11], e[0] === e[1] ? '<div class="month-element">' + N(a.get("month")) + "</div>" : K("month", J(e, a.get("month"), function (a) {
					return N(a)
				})))
			}

			function I(a, d) {
				a = b(a);
				var e, f = !!c.startDate && b(c.startDate).add(c.singleMonth || "month2" !== d ? 0 : 1, "month"),
					g = !!c.endDate && b(c.endDate).add(c.singleMonth || "month1" !== d ? 0 : -1, "month"),
					h = a.get("year"),
					i = c.yearSelect && "function" == typeof c.yearSelect;
				return !c.yearSelect || f && g && f.isSame(b(g), "year") ? '<div class="month-element">' + h + "</div>" : (e = i ? c.yearSelect(h) : c.yearSelect.slice(), e = [f ? Math.max(e[0], f.get("year")) : Math.min(e[0], h), g ? Math.min(e[1], g.get("year")) : Math.max(e[1], h)], K("year", J(e, h)))
			}

			function J(a, b, c) {
				var d = [];
				c = c || function (a) {
					return a
				};
				for (var e = a[0]; e <= a[1]; e++) d.push({
					value: e,
					text: c(e),
					isCurrent: e === b
				});
				return d
			}

			function K(a, b) {
				for (var c, d = '<div class="select-wrapper"><select class="' + a + '" name="' + a + '">', e = 0, f = b.length; e < f; e++) d += '<option value="' + b[e].value + '"' + (b[e].isCurrent ? " selected" : "") + ">", d += b[e].text, d += "</option>", b[e].isCurrent && (c = b[e].text);
				return d += "</select>" + c + "</div>"
			}

			function L() {
				ka.find(".day").unbind("click").click(function (b) {
					s(a(this))
				}), ka.find(".day").unbind("mouseenter").mouseenter(function (b) {
					w(a(this))
				}), ka.find(".day").unbind("mouseleave").mouseleave(function (a) {
					ka.find(".date-range-length-tip").hide(), c.singleDate && x()
				}), ka.find(".week-number").unbind("click").click(function (b) {
					t(a(this))
				}), ka.find(".month").unbind("change").change(function (b) {
					y(a(this))
				}), ka.find(".year").unbind("change").change(function (b) {
					y(a(this))
				})
			}

			function M(a, b) {
				ka.find("." + b).append(W()), l(b, a)
			}

			function N(a) {
				return ha("month-name")[a]
			}

			function O(a) {
				return b(a).format(c.format)
			}

			function P() {
				F();
				var a = parseInt(b(c.month1).format("YYYYMM")),
					d = parseInt(b(c.month2).format("YYYYMM")),
					e = Math.abs(a - d),
					f = e > 1 && 89 != e;
				f ? ka.addClass("has-gap").removeClass("no-gap").find(".gap").css("visibility", "visible") : ka.removeClass("has-gap").addClass("no-gap").find(".gap").css("visibility", "hidden");
				var g = ka.find("table.month1").height(),
					h = ka.find("table.month2").height();
				ka.find(".gap").height(Math.max(g, h) + 10)
			}

			function Q() {
				if (!c.alwaysOpen) {
					var b = function () {
						a(oa).data("date-picker-opened", !1), a(oa).trigger("datepicker-closed", {
							relatedTarget: ka
						})
					};
					c.customCloseAnimation ? c.customCloseAnimation.call(ka.get(0), b) : a(ka).slideUp(c.duration, b), a(oa).trigger("datepicker-close", {
						relatedTarget: ka
					})
				}
			}

			function R() {
				G(c.month1, "month1"), G(c.month2, "month2")
			}

			function S(a, c) {
				var d = parseInt(b(a).format("YYYYMM")) - parseInt(b(c).format("YYYYMM"));
				return d > 0 ? 1 : 0 === d ? 0 : -1
			}

			function T(a, c) {
				var d = parseInt(b(a).format("YYYYMMDD")) - parseInt(b(c).format("YYYYMMDD"));
				return d > 0 ? 1 : 0 === d ? 0 : -1
			}

			function U(a) {
				return b(a).add(1, "months").toDate()
			}

			function V(a) {
				return b(a).add(-1, "months").toDate()
			}

			function W() {
				return "<div><span>" + ha("Time") + ': <span class="hour-val">00</span>:<span class="minute-val">00</span></span></div><div class="hour"><label>' + ha("Hour") + ': <input type="range" class="hour-range" name="hour" min="0" max="23"></label></div><div class="minute"><label>' + ha("Minute") + ': <input type="range" class="minute-range" name="minute" min="0" max="59"></label></div>'
			}

			function X() {
				var b = '<div class="date-picker-wrapper';
				c.extraClass && (b += " " + c.extraClass + " "), c.singleDate && (b += " single-date "), c.showShortcuts || (b += " no-shortcuts "), c.showTopbar || (b += " no-topbar "), c.customTopBar && (b += " custom-topbar "), b += '">', c.showTopbar && (b += '<div class="drp_top-bar">', c.customTopBar ? ("function" == typeof c.customTopBar && (c.customTopBar = c.customTopBar()), b += '<div class="custom-top">' + c.customTopBar + "</div>") : (b += '<div class="normal-top"><span style="color:#333"> </span> <b class="start-day">...</b>', c.singleDate || (b += ' <span class="separator-day">' + c.separator + '</span> <b class="end-day">...</b> <div class="selected-days">(<span class="selected-days-num">3</span> ' + ha("days") + ")</div>"), b += "</div>", b += '<div class="error-top">error</div><div class="default-top">default</div>'), b += '<input type="button" class="apply-btn disabled' + Y() + '" value="' + ha("apply") + '" />', b += "</div>");
				var d = c.showWeekNumbers ? 6 : 5,
					e = "&lt;";
				c.customArrowPrevSymbol && (e = c.customArrowPrevSymbol);
				var f = "&gt;";
				if (c.customArrowNextSymbol && (f = c.customArrowNextSymbol), b += '<div class="month-wrapper">   <table class="month1" cellspacing="0" border="0" cellpadding="0">       <thead>           <tr class="caption">               <th style="width:27px;">                   <span class="prev">' + e + '                   </span>               </th>               <th colspan="' + d + '" class="month-name">               </th>               <th style="width:27px;">' + (c.singleDate || !c.stickyMonths ? '<span class="next">' + f + "</span>" : "") + '               </th>           </tr>           <tr class="week-name">' + Z() + "       </thead>       <tbody></tbody>   </table>", aa() && (b += '<div class="gap">' + _() + '</div><table class="month2" cellspacing="0" border="0" cellpadding="0">   <thead>   <tr class="caption">       <th style="width:27px;">' + (c.stickyMonths ? "" : '<span class="prev">' + e + "</span>") + '       </th>       <th colspan="' + d + '" class="month-name">       </th>       <th style="width:27px;">           <span class="next">' + f + '</span>       </th>   </tr>   <tr class="week-name">' + Z() + "   </thead>   <tbody></tbody></table>"), b += '<div style="clear:both;height:0;font-size:0;"></div><div class="time"><div class="time1"></div>', c.singleDate || (b += '<div class="time2"></div>'), b += '</div><div style="clear:both;height:0;font-size:0;"></div></div>', b += '<div class="footer">', c.showShortcuts) {
					b += '<div class="shortcuts"><b>' + ha("shortcuts") + "</b>";
					var g = c.shortcuts;
					if (g) {
						var h;
						if (g["prev-days"] && g["prev-days"].length > 0) {
							b += '&nbsp;<span class="prev-days">' + ha("past");
							for (var i = 0; i < g["prev-days"].length; i++) h = g["prev-days"][i], h += ha(g["prev-days"][i] > 1 ? "days" : "day"), b += ' <a href="javascript:;" shortcut="day,-' + g["prev-days"][i] + '">' + h + "</a>";
							b += "</span>"
						}
						if (g["next-days"] && g["next-days"].length > 0) {
							b += '&nbsp;<span class="next-days">' + ha("following");
							for (var i = 0; i < g["next-days"].length; i++) h = g["next-days"][i], h += ha(g["next-days"][i] > 1 ? "days" : "day"), b += ' <a href="javascript:;" shortcut="day,' + g["next-days"][i] + '">' + h + "</a>";
							b += "</span>"
						}
						if (g.prev && g.prev.length > 0) {
							b += '&nbsp;<span class="prev-buttons">' + ha("previous");
							for (var i = 0; i < g.prev.length; i++) h = ha("prev-" + g.prev[i]), b += ' <a href="javascript:;" shortcut="prev,' + g.prev[i] + '">' + h + "</a>";
							b += "</span>"
						}
						if (g.next && g.next.length > 0) {
							b += '&nbsp;<span class="next-buttons">' + ha("next");
							for (var i = 0; i < g.next.length; i++) h = ha("next-" + g.next[i]), b += ' <a href="javascript:;" shortcut="next,' + g.next[i] + '">' + h + "</a>";
							b += "</span>"
						}
					}
					if (c.customShortcuts)
						for (var i = 0; i < c.customShortcuts.length; i++) {
							var j = c.customShortcuts[i];
							b += '&nbsp;<span class="custom-shortcut"><a href="javascript:;" shortcut="custom">' + j.name + "</a></span>"
						}
					b += "</div>"
				}
				if (c.showCustomValues && (b += '<div class="customValues"><b>' + (c.customValueLabel || ha("custom-values")) + "</b>", c.customValues))
					for (var i = 0; i < c.customValues.length; i++) {
						var k = c.customValues[i];
						b += '&nbsp;<span class="custom-value"><a href="javascript:;" custom="' + k.value + '">' + k.name + "</a></span>"
					}
				return b += "</div></div>", a(b)
			}

			function Y() {
				var a = "";
				return c.autoClose === !0 && (a += " hide"), "" !== c.applyBtnClass && (a += " " + c.applyBtnClass), a
			}

			function Z() {
				var a = c.showWeekNumbers ? "<th>" + ha("week-number") + "</th>" : "";
				return "monday" == c.startOfWeek ? a + "<th>" + ha("week-1") + "</th><th>" + ha("week-2") + "</th><th>" + ha("week-3") + "</th><th>" + ha("week-4") + "</th><th>" + ha("week-5") + "</th><th>" + ha("week-6") + "</th><th>" + ha("week-7") + "</th>" : a + "<th>" + ha("week-7") + "</th><th>" + ha("week-1") + "</th><th>" + ha("week-2") + "</th><th>" + ha("week-3") + "</th><th>" + ha("week-4") + "</th><th>" + ha("week-5") + "</th><th>" + ha("week-6") + "</th>"
			}

			function $(a) {
				return a = b(a), !(!c.startDate || !a.endOf("month").isBefore(c.startDate)) || !(!c.endDate || !a.startOf("month").isAfter(c.endDate))
			}

			function _() {
				for (var a = ['<div class="gap-top-mask"></div><div class="gap-bottom-mask"></div><div class="gap-lines">'], b = 0; b < 20; b++) a.push('<div class="gap-line"><div class="gap-1"></div><div class="gap-2"></div><div class="gap-3"></div></div>');
				return a.push("</div>"), a.join("")
			}

			function aa() {
				return !c.singleMonth
			}

			function ba(b, c, d) {
				var e = a.extend(!0, {}, b);
				a.each(c, function (a, b) {
					var c = b(d);
					for (var f in c) e.hasOwnProperty(f) ? e[f] += c[f] : e[f] = c[f]
				});
				var f = "";
				for (var g in e) e.hasOwnProperty(g) && (f += g + '="' + e[g] + '" ');
				return f
			}

			function ca(a) {
				return Math.floor(da(a) / 864e5)
			}

			function da(a) {
				return b.isMoment(a) && (a = a.toDate().getTime()), "object" == typeof a && a.getTime && (a = a.getTime()), "string" != typeof a || a.match(/\d{13}/) || (a = b(a, c.format).toDate().getTime()), a = parseInt(a, 10) - 60 * (new Date).getTimezoneOffset() * 1e3
			}

			function ea(a) {
				var d = [];
				a.setDate(1);
				var e = (new Date(a.getTime() - 864e5), new Date),
					f = a.getDay();
				0 === f && "monday" === c.startOfWeek && (f = 7);
				var g, h;
				if (f > 0)
					for (var i = f; i > 0; i--) {
						var j = new Date(a.getTime() - 864e5 * i);
						h = u(j.getTime()), c.startDate && T(j, c.startDate) < 0 && (h = !1), c.endDate && T(j, c.endDate) > 0 && (h = !1), d.push({
							date: j,
							type: "lastMonth",
							day: j.getDate(),
							time: j.getTime(),
							valid: h
						})
					}
				for (var k = a.getMonth(), i = 0; i < 40; i++) g = b(a).add(i, "days").toDate(), h = u(g.getTime()), c.startDate && T(g, c.startDate) < 0 && (h = !1), c.endDate && T(g, c.endDate) > 0 && (h = !1), d.push({
					date: g,
					type: g.getMonth() == k ? "toMonth" : "nextMonth",
					day: g.getDate(),
					time: g.getTime(),
					valid: h
				});
				for (var l = [], m = 0; m < 6 && "nextMonth" != d[7 * m].type; m++) {
					l.push("<tr>");
					for (var j = 0; j < 7; j++) {
						var n = "monday" == c.startOfWeek ? j + 1 : j;
						g = d[7 * m + n];
						var o = b(g.time).format("L") == b(e).format("L");
						if (g.extraClass = "", g.tooltip = "", g.valid && c.beforeShowDay && "function" == typeof c.beforeShowDay) {
							var p = c.beforeShowDay(b(g.time).toDate());
							g.valid = p[0], g.extraClass = p[1] || "", g.tooltip = p[2] || "", "" !== g.tooltip && (g.extraClass += " has-tooltip ")
						}
						var q = {
							time: g.time,
							"data-tooltip": g.tooltip,
							class: "day " + g.type + " " + g.extraClass + " " + (g.valid ? "valid" : "invalid") + " " + (o ? "real-today" : "")
						};
						0 === j && c.showWeekNumbers && l.push('<td><div class="week-number" data-start-time="' + g.time + '">' + c.getWeekNumber(g.date) + "</div></td>"), l.push("<td " + ba({}, c.dayTdAttrs, g) + "><div " + ba(q, c.dayDivAttrs, g) + ">" + fa(g.time, g.day) + "</div></td>")
					}
					l.push("</tr>")
				}
				return l.join("")
			}

			function fa(a, b) {
				return c.showDateFilter && "function" == typeof c.showDateFilter ? c.showDateFilter(a, b) : b
			}

			function ga() {
				if ("auto" == c.language) {
					var b = navigator.language ? navigator.language : navigator.browserLanguage;
					return b ? (b = b.toLowerCase(), b in a.dateRangePickerLanguages ? a.dateRangePickerLanguages[b] : a.dateRangePickerLanguages.default) : a.dateRangePickerLanguages.default
				}
				return c.language && c.language in a.dateRangePickerLanguages ? a.dateRangePickerLanguages[c.language] : a.dateRangePickerLanguages.default
			}

			function ha(b) {
				var c = b.toLowerCase(),
					d = b in ma ? ma[b] : c in ma ? ma[c] : null,
					e = a.dateRangePickerLanguages.default;
				return null == d && (d = b in e ? e[b] : c in e ? e[c] : ""), d
			}

			function ia() {
				var a = c.defaultTime ? c.defaultTime : new Date;
				return c.lookBehind ? (c.startDate && S(a, c.startDate) < 0 && (a = U(b(c.startDate).toDate())), c.endDate && S(a, c.endDate) > 0 && (a = b(c.endDate).toDate())) : (c.startDate && S(a, c.startDate) < 0 && (a = b(c.startDate).toDate()), c.endDate && S(U(a), c.endDate) > 0 && (a = V(b(c.endDate).toDate()))), c.singleDate && (c.startDate && S(a, c.startDate) < 0 && (a = b(c.startDate).toDate()), c.endDate && S(a, c.endDate) > 0 && (a = b(c.endDate).toDate())), a
			}

			function ja(a) {
				a || (a = ia()), c.lookBehind ? (G(V(a), "month1"), G(a, "month2")) : (G(a, "month1"), G(U(a), "month2")), c.singleDate && G(a, "month1"), F(), P()
			}
			c || (c = {}), c = a.extend(!0, {
				autoClose: !1,
				format: "YYYY-MM-DD",
				separator: " to ",
				language: "auto",
				startOfWeek: "sunday",
				getValue: function () {
					return a(this).val()
				},
				setValue: function (b) {
					a(this).attr("readonly") || a(this).is(":disabled") || b == a(this).val() || a(this).val(b)
				},
				startDate: !1,
				endDate: !1,
				time: {
					enabled: !1
				},
				minDays: 0,
				maxDays: 0,
				showShortcuts: !1,
				shortcuts: {},
				customShortcuts: [],
				inline: !1,
				container: "body",
				alwaysOpen: !1,
				singleDate: !1,
				lookBehind: !1,
				batchMode: !1,
				duration: 200,
				stickyMonths: !1,
				dayDivAttrs: [],
				dayTdAttrs: [],
				selectForward: !1,
				selectBackward: !1,
				applyBtnClass: "",
				singleMonth: "auto",
				hoveringTooltip: function (a, b, c) {
					return a > 1 ? a + " " + ha("days") : ""
				},
				showTopbar: !0,
				swapTime: !1,
				showWeekNumbers: !1,
				getWeekNumber: function (a) {
					return b(a).format("w")
				},
				customOpenAnimation: null,
				customCloseAnimation: null,
				customArrowPrevSymbol: null,
				customArrowNextSymbol: null,
				monthSelect: !1,
				yearSelect: !1
			}, c), c.start = !1, c.end = !1, c.startWeek = !1, c.isTouchDevice = "ontouchstart" in window || navigator.msMaxTouchPoints, c.isTouchDevice && (c.hoveringTooltip = !1), "auto" == c.singleMonth && (c.singleMonth = a(window).width() < 480), c.singleMonth && (c.stickyMonths = !1), c.showTopbar || (c.autoClose = !0), c.startDate && "string" == typeof c.startDate && (c.startDate = b(c.startDate, c.format).toDate()), c.endDate && "string" == typeof c.endDate && (c.endDate = b(c.endDate, c.format).toDate()), c.yearSelect && "boolean" == typeof c.yearSelect && (c.yearSelect = function (a) {
				return [a - 5, a + 5]
			});
			var ka, la, ma = ga(),
				na = !1,
				oa = this,
				pa = a(oa).get(0);
			return a(this).unbind(".datepicker").bind("click.datepicker", function (a) {
				var b = ka.is(":visible");
				b || h(c.duration)
			}).bind("change.datepicker", function (a) {
				i()
			}).bind("keyup.datepicker", function () {
				try {
					clearTimeout(la)
				} catch (a) {}
				la = setTimeout(function () {
					i()
				}, 2e3)
			}), e.call(this), c.alwaysOpen && h(0), a(this).data("dateRangePicker", {
				setStart: function (a) {
					return "string" == typeof a && (a = b(a, c.format).toDate()), c.end = !1, E(a), this
				},
				setEnd: function (a, d) {
					var e = new Date;
					return e.setTime(c.start), "string" == typeof a && (a = b(a, c.format).toDate()), D(e, a, d), this
				},
				setDateRange: function (a, d, e) {
					"string" == typeof a && "string" == typeof d && (a = b(a, c.format).toDate(), d = b(d, c.format).toDate()), D(a, d, e)
				},
				clear: p,
				close: Q,
				open: h,
				redraw: R,
				getDatePicker: g,
				resetMonthsView: ja,
				destroy: function () {
					a(oa).unbind(".datepicker"), a(oa).data("dateRangePicker", ""), a(oa).data("date-picker-opened", null), ka.remove(), a(window).unbind("resize.datepicker", f), a(document).unbind("click.datepicker", Q)
				}
			}), a(window).bind("resize.datepicker", f), this
		}
	});
var sideNavShowing = !1,
	searchMobileShowing = !1;
$(document).ready(function () {
	var a = $("#header").outerHeight();
	$("#header-bumper").height(a), $("#hamburger-button").click(function () {
		sideNavShowing ? (hideSideNavigation(), sideNavShowing = !1) : (showSideNavigation(), sideNavShowing = !0)
	}), $("#header-search-button").click(function () {
		$("#search-mobile-modal").modal("show")
	}), $("#shadow-layer").click(function () {
		hideSideNavigation(), hideSearchMobile()
	}), $("#cara-jual-beli").click(function () {
		hideSideNavigation(), $("#section-0") && ($("#section-0").css("height", "auto"), $("#section-0").css("visibility", "visible"), $("#section-0").slideDown())
	})
}), $(".modal").on("show.bs.modal", reposition), $(document).ready(function () {});
var isMobile = {
	Windows: function () {
		return /IEMobile/i.test(navigator.userAgent)
	},
	Android: function () {
		return /Android/i.test(navigator.userAgent)
	},
	BlackBerry: function () {
		return /BlackBerry/i.test(navigator.userAgent)
	},
	iOS: function () {
		return /iPhone|iPad|iPod/i.test(navigator.userAgent)
	},
	any: function () {
		return isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Windows()
	}
};
$("form .search-icon").click(function () {
	$(this).parent("form").submit()
}), $(document).ready(function () {
	$(function () {
		$('a[href*=#]:not([href=#]:not([role="tab"])').click(function () {
			smoothScroll(this)
		})
	})
}), $(document).ready(function () {
	if ($("form").length && "daftar-form" != $("form").attr("id")) {
		var a = {
			"margin-bottom": 0
		};
		$('label:not(:has(+select,+input[type="file"],+input[disabled]))').css(a);
		var b = {
				opacity: "1",
				color: "#00a79d"
			},
			c = {
				color: "inherit"
			},
			d = {
				opacity: "1",
				color: "inherit"
			};
		$(".form-control").focusin(function () {
			$(this).parents(".form-group").children("label").css(b)
		}), $(".form-control").focusout(function () {
			$(this).val() ? $(this).parents(".form-group").children("label").css(d) : $(this).parents(".form-group").children("label").css(c)
		})
	}
}), $(document).ready(function () {
	$("#back-to-top").length && $(window).scroll(function () {
		var a = $(window).scrollTop();
		a >= 600 && $("#back-to-top").slideDown()
	})
});
var guideDisplayed = !1,
	buyerDisplayed = !1,
	timerPaused = !1,
	pauseHome = !1;
$("#how-it-works").click(function () {
	guideDisplayed ? ($("#section-0").slideUp(), $(this).css("background", "transparent").css("color", "#fff"), guideDisplayed = !1) : ($("#section-0").slideDown(), $(this).css("background", "#fff").css("color", "#00a79d"), guideDisplayed = !0), ga("send", "event", "Header", "click", "Cara Jual Beli 1")
}), $("#close-wrapper *").click(function () {
	$("#section-0").slideUp(), $("#how-it-works").css("background", "transparent").css("color", "#fff"), guideDisplayed = !1
}), $("#control-seller").click(function () {
	showSeller(), timerPaused = !0
}), $("#control-buyer").click(function () {
	showBuyer(), timerPaused = !0
}), $(document).ready(function () {
	window.setInterval(function () {
		guideDisplayed && !timerPaused && (buyerDisplayed ? showSeller() : showBuyer())
	}, 3e3)
});
var ajaxProduct, ajaxUser, ajaxAll, ajaxPopularLoaded = !1,
	ajaxHistoryLoaded = !1,
	querytemp = "",
	pathname = "sewa" === window.location.pathname.split("/")[1] ? "sewa" : "bekas",
	listingType = getUrlVars().listing || "";
"1" === listingType && (pathname = "sewa");
var getPopularSearch = function (a, b) {
		function c(a) {
			var c = a._data,
				e = $(".suggestion-popular .suggestion-content");
			html = "";
			for (var f = 0; f < c.length; f++) c[f].name && (html += "<div class='one-suggestion'>", html += c[f].name, html += "</div>");
			if (html += "<div class='clearfix'></div>", e.html(html), $(".suggestion-popular").show(), d.length) {
				var g = $(".suggestion-history .suggestion-content");
				htmlHistory = "";
				for (var f = 0; f < d.length; f++) d[f].name && (htmlHistory += "<div class='one-suggestion'>", htmlHistory += d[f].name, htmlHistory += "</div>");
				htmlHistory += "<div class='clearfix'></div>", g.html(htmlHistory), $(".suggestion-history").show(), ajaxHistoryLoaded = !0
			}
			hookSuggestion(b), ajaxPopularLoaded = !0
		}
		$(".suggestion-category").hide(), $(".suggestion-keyword").hide(), $(".suggestion-brands").hide(), $(".suggestion-user").hide();
		var d = JSON.parse(localStorage.getItem("histories")) || [];
		ajaxPopularLoaded ? ($(".suggestion-popular").show(), ajaxHistoryLoaded && $(".suggestion-history").show()) : $.ajax({
			url: "/api/search/top?limit=" + a,
			method: "GET",
			success: c
		})
	},
	getSuggestion = function (a) {
		a == querytemp ? $("#suggestion").fadeIn(121) : (querytemp = a, getSuggestionAll(a))
	},
	insertTopSearch = function (a, b) {
		function c(c) {
			var d = [],
				e = JSON.parse(localStorage.getItem("histories")) || [];
			e.reverse(), e.length && (d = e.filter(function (b) {
				return b.name !== a
			})), d.push({
				name: a
			}), d.reverse(), d.slice(0, 10), localStorage.setItem("histories", JSON.stringify(d)), window.location.href = b
		}
		var d = Cookies.get("token");
		$.ajax({
			url: "/api/search/top",
			method: "POST",
			beforeSend: function (a) {
				a.setRequestHeader("Authorization", "Token " + d)
			},
			data: {
				name: a,
				tag: "jual_sewa",
				platform_sent_from: "web"
			},
			success: c
		})
	},
	hookTopSearch = function () {
		$(".suggestion-category .one-suggestion").click(function () {
			var a = $(this).attr("keyword");
			insertTopSearch(a, $(this).attr("link"))
		}), $(".suggestion-keyword .one-suggestion").click(function () {
			var a = $(this).attr("keyword");
			insertTopSearch(a, $(this).attr("link"))
		}), $(".suggestion-user .one-suggestion").click(function () {
			var a = $(this).attr("keyword");
			insertTopSearch(a, $(this).attr("link"))
		}), $(".suggestion-brands .one-suggestion").click(function () {
			var a = $(this).attr("keyword");
			insertTopSearch(a, $(this).attr("link"))
		})
	},
	spinnerHTML = "<i class='fa fa-circle-o-notch fa-spin'></i>",
	spinnerHTMLPadding = "<div class='loading-wrapper' style='padding: 20px; width: 100%; text-align: center'><i class='fa fa-circle-o-notch fa-spin'></i></div>",
	getSuggestionUser = function (a) {
		function b(a) {
			var b = a._data;
			html = "";
			for (var d = 0; d < b.length; d++)
				if (b[d].username && b[d].fullname && b[d].profile.pict) {
					var e = b[d].profile.pict;
					e.replace("w=225&h=225", "w=30&h=30");
					var f = b[d].username;
					html += "<a class='one-suggestion' href='/" + f + "?ref=suggestion'>", html += "<img class='suggestion-image' src='" + e + "' style='border-radius: 50%'/>", html += "<div class='suggestion-desc'>", html += b[d].username, html += "</div>", html += "<div class='clearfix'></div>", html += "</a>"
				}
			c.html(html)
		}
		a = encodeURIComponent(a), $(".suggestion-category").hide(), $(".suggestion-keyword").hide(), $(".suggestion-brands").hide();
		var c = $(".suggestion-user .suggestion-content");
		c.html(spinnerHTML), $(".suggestion-products .suggestion-label").html("Pengguna"), $(".suggestion-history").hide(), $(".suggestion-popular").hide(), $(".suggestion-user").show(), ajaxUser && ajaxUser.abort(), ajaxUser = $.ajax({
			url: "/api/search/users?name=" + a,
			method: "GET",
			success: b
		})
	},
	getSuggestionAll = function (a) {
		function b(b) {
			var g = b._data.category_suggestion,
				h = b._data.keyword_suggestion,
				i = b._data.brand_suggestion,
				j = b._data.user_suggestion;
			$(".suggestion-category").hide(), $(".suggestion-keyword").hide(), $(".suggestion-user").hide(), $(".suggestion-brands").hide(), g.length && $(".suggestion-category").show(), h.length && $(".suggestion-keyword").show(), j.length && $(".suggestion-user").show(), i.length && $(".suggestion-brands").show(), htmlcategory = "";
			for (var k = 0; k < g.length; k++)
				if (g[k].text) {
					var l = g[k].category_permalink ? g[k].category_permalink : "all";
					htmlcategory += "<a class='one-suggestion' link='/bekas/" + l + "?search=" + g[k].keyword + "&ref=suggestion' keyword='" + g[k].keyword + "'>", htmlcategory += "<div class='suggestion-desc'>", htmlcategory += g[k].text, htmlcategory += "</div>", htmlcategory += "<div class='clearfix'></div>", htmlcategory += "</a>"
				}
			c.html(htmlcategory), htmlkeyword = "";
			for (var k = 0; k < h.length; k++) h[k].text && (htmlkeyword += "<a class='one-suggestion' link='/" + pathname + "/all?search=" + h[k].keyword + "&ref=suggestion' keyword='" + h[k].keyword + "'>", htmlkeyword += "<div class='suggestion-desc'>", htmlkeyword += h[k].text, htmlkeyword += "</div>", htmlkeyword += "<div class='clearfix'></div>", htmlkeyword += "</a>");
			d.html(htmlkeyword), htmlusers = "";
			for (var k = 0; k < j.length && !(k >= 5); k++)
				if (j[k].username && j[k].fullname && j[k].image_url) {
					var m = j[k].image_url;
					m.replace("w=225&h=225", "w=30&h=30");
					var n = j[k].username;
					htmlusers += "<a class='one-suggestion' link='/" + n + "?ref=suggestion' keyword='" + j[k].username + "'>", htmlusers += "<img class='suggestion-image' src='" + m + "' style='border-radius: 50%'/>", htmlusers += "<div class='suggestion-desc'>", htmlusers += j[k].username, htmlusers += "</div>", htmlusers += "<div class='clearfix'></div>", htmlusers += "</a>"
				}
			j.length > 2 && (htmlusers += "<a class='one-suggestion' link='/" + pathname + "/all?search=" + a + "&ref=suggestion&user=1' style='width: 100%; text-align: left'>", htmlusers += "<div class='suggestion-desc'>", htmlusers += "<div class='suggestion-name'>", htmlusers += 'Lihat semua pengguna "<strong>' + a + '</strong>"', htmlusers += "</div>", htmlusers += "</div>", htmlusers += "</a>"), htmlusers += "<div class='clearfix'></div>", e.html(htmlusers), htmlbrands = "";
			for (var k = 0; k < i.length && !(k >= 5); k++) i[k].permalink && i[k].name && (htmlbrands += "<a class='one-suggestion' link='/" + pathname + "/all?search=&brand=" + i[k].permalink + "&ref=suggestion' keyword='" + i[k].name + "'>", htmlbrands += "<div class='suggestion-desc'>", htmlbrands += i[k].name, htmlbrands += "</div>", htmlbrands += "<div class='clearfix'></div>", htmlbrands += "</a>");
			f.html(htmlbrands), hookTopSearch()
		}
		a = encodeURIComponent(a);
		var c = $(".suggestion-category .suggestion-content");
		c.html(spinnerHTML);
		var d = $(".suggestion-keyword .suggestion-content");
		d.html(spinnerHTML);
		var e = $(".suggestion-user .suggestion-content");
		e.html(spinnerHTML);
		var f = $(".suggestion-brands .suggestion-content");
		f.html(spinnerHTML), $(".suggestion-history").hide(), $(".suggestion-popular").hide(), ajaxAll && ajaxAll.abort();
		var g = {
			url: "/api/v3/autocomplete?keyword=" + a,
			method: "GET",
			success: b
		};
		Cookies.get("token") && (g.beforeSend = function (a) {
			a.setRequestHeader("Authorization", "Token " + Cookies.get("token"))
		}), ajaxAll = $.ajax(g)
	},
	typingTimer, doneTypingInterval = 1e3,
	omniSuggest = function (a, b) {
		updateSuggestionWidth();
		var c = a.val().toLowerCase();
		"" !== c ? getSuggestion(c) : getPopularSearch(10, b), b ? $("#suggestion-mobile").fadeIn(121) : $("#suggestion").fadeIn(121)
	};
$("#search-wrapper #search-box").focus(function () {
	omniSuggest($(this), !1)
}), $("#search-mobile #search-box-mobile").focus(function () {
	omniSuggest($(this), !0)
}), $("#search-wrapper #search-box").keyup(function () {
	clearTimeout(typingTimer), typingTimer = setTimeout(omniSuggest($(this)), doneTypingInterval)
}), $("#search-mobile #search-box-mobile").keyup(function () {
	clearTimeout(typingTimer), typingTimer = setTimeout(omniSuggest($(this), !0), doneTypingInterval)
}), $("#search-wrapper #search-box").keydown(function () {
	clearTimeout(typingTimer)
}), $("#search-wrapper #search-box").blur(function () {
	$("#suggestion").hide()
}), $("#search-wrapper #search-box").blur(function () {
	$("#suggestion-mobile").hide()
}), $("#suggestion").on("mousedown", function (a) {
	a.preventDefault(), $("#search-wrapper #search-box").focus()
});
var hookSuggestion = function (a) {
		$(".suggestion-history .one-suggestion").click(function () {
			var a = $(this).text(),
				b = "/" + pathname + "/all?search=" + a;
			insertTopSearch(a, b)
		}), $(".suggestion-popular .one-suggestion").click(function () {
			var a = $(this).text(),
				b = "/" + pathname + "/all?search=" + a;
			insertTopSearch(a, b)
		}), $(".remove-history").click(function () {
			$(".suggestion-history").hide(), localStorage.removeItem("histories"), ajaxHistoryLoaded = !1
		})
	},
	urlWomen = "/bekas/fashion-wanita",
	urlMen = "/bekas/fashion-pria",
	applyWomenSegment = function () {
		var a = window.location.pathname;
		"/" == a[a.length - 1] && (a = a.substr(0, a.length - 2)), a == urlWomen ? document.location.reload(!0) : document.location = urlWomen + "?ref=category&stamp=" + (new Date).getTime()
	},
	applyMenSegment = function () {
		var a = window.location.pathname;
		"/" == a[a.length - 1] && (a = a.substr(0, a.length - 2)), a == urlMen ? document.location.reload(!0) : document.location = urlMen + "?ref=category&stamp=" + (new Date).getTime()
	};
$(".choose-segment-1").click(function () {
	Cookies && Cookies.set("segment", "0"), "man" == $(this).attr("type") ? applyMenSegment() : applyWomenSegment()
}), $(".choose-segment-2").click(function () {
	Cookies && Cookies.set("segment", "1"), "man" == $(this).attr("type") ? applyMenSegment() : applyWomenSegment()
}), $(".choose-segment-3").click(function () {
	Cookies && Cookies.set("segment", "2"), "man" == $(this).attr("type") ? applyMenSegment() : applyWomenSegment()
}), $("#jualbar").tooltip({
	title: "Jual Barang",
	placement: "bottom"
}), $("#sewabar").tooltip({
	title: "Sewakan Barang",
	placement: "bottom"
}), $("#cart").tooltip({
	title: "Cart",
	placement: "bottom"
}), $("#login-button").click(function (a) {
	a.preventDefault(), $("#login-modal").modal("show")
});
var OneSignal_player_id = "";
$("#login-form").submit(function (a) {
	a.preventDefault()
}), $("#login-form").validate({
	rules: {
		username_or_email: {
			minlength: 4
		},
		password: {
			minlength: 6
		}
	},
	submitHandler: function (a) {
		submitLogin($("#login-form")), $("#submit-login-button").text("Loading...")
	}
}), $("#login-form input").change(function () {}), $("#login-form input").focus(function () {}), $("#user-button-options-arrow").click(function () {
	$(this).toggleClass("clicked"), $("#user-button-options").toggle()
}), $("#logout").click(function () {
	logout()
}), $(".logout").click(function () {
	logout()
}), $("#forgot-password-form").submit(function (a) {
	a.preventDefault()
}), $("#forgot-password-form").validate({
	rules: {
		email2: {
			minlength: 4
		}
	},
	submitHandler: function (a) {
		submitForgotPassword(), $("#submit-forgot-password-button").text("Loading...")
	}
}), $(".product-free-ongkir").tooltip({
	title: "Free Ongkir",
	placement: "left"
}), $(".verified-brand").tooltip({
	title: "Verified Brand",
	placement: "top"
});
var getReviews = function (a) {
		function b(a) {
			var b = a._data;
			if (html = "", b.length > 0)
				for (var d = 0; d < b.length; d++) {
					var e = b[d].buyer_pict;
					e = e.replace("w=225&h=225", "w=30&h=30");
					var f = 0;
					html += '<div class="one-review">', html += '<a class="review-image-wrapper" href="/' + b[d].buyer_username + '">', html += '<div class="review-image" style="">', html += '<img src="' + e + '">', html += "</div>", html += "</a>", html += '<div class="review-desc">', html += '<div id="rating-wrapper">';
					for (var g = 1; g <= 5; g++) f < b[d].star ? (html += '<i class="fa fa-heart color-pink"></i>', f++) : html += '<i class="fa fa-heart color-grey"></i>';
					html += '<div class="clearfix">', html += "</div>", html += "</div>", html += '<div class="review-content">', html += b[d].comment, html += "</div>", html += '<a class="review-username" href="/' + b[d].buyer_username + '">', html += b[d].buyer_username, html += "</a>", html += "</div>", html += '<div class="clearfix">', html += "</div>", html += "</div>"
				} else html = "<div style='padding: 20px'>Belum ada Review</div>";
			c.html(html).promise().done(function () {
				$("#modal-footer-wrapper").html(""), reposition2($("#review-modal.modal"))
			})
		}
		var c = $("#review-modal #list-notif-seller");
		ajaxUser = $.ajax({
			url: "/api/user/" + a + "/review",
			method: "GET",
			success: b
		})
	},
	getReviewsSeller = function (a) {
		function b(a) {
			var b = a._data;
			if (html = "", b.length > 0)
				for (var c = 0; c < b.length; c++) {
					var d = b[c].seller_pict;
					d = d.replace("w=225&h=225", "w=30&h=30");
					var f = 0;
					html += '<div class="one-review">', html += '<a class="review-image-wrapper" href="/' + b[c].seller_username + '">', html += '<div class="review-image" style="">', html += '<img src="' + d + '">', html += "</div>", html += "</a>", html += '<div class="review-desc">', html += '<div id="rating-wrapper">';
					for (var g = 1; g <= 5; g++) f < b[c].star ? (html += '<i class="fa fa-heart color-pink"></i>', f++) : html += '<i class="fa fa-heart color-grey"></i>';
					html += '<div class="clearfix">', html += "</div>", html += "</div>", html += '<div class="review-content">', html += b[c].comment, html += "</div>", html += '<a class="review-username" href="/' + b[c].seller_username + '">', html += b[c].seller_username, html += "</a>", html += "</div>", html += '<div class="clearfix">', html += "</div>", html += "</div>"
				} else html = "<div style='padding: 20px'>Belum ada Review</div>";
			e.html(html).promise().done(function () {
				$("#modal-footer-wrapper").html(""), reposition2($("#review-modal.modal"))
			})
		}

		function c(a, b, c) {}
		var d = Cookies.get("token"),
			e = $("#review-modal #list-notif-buyer");
		ajaxUser = $.ajax({
			url: "/api/user/" + a + "/buyer_review",
			method: "GET",
			beforeSend: function (a) {
				a.setRequestHeader("Authorization", "Token " + d)
			},
			success: b,
			error: c
		})
	};
if (updateCartCount(), $(".login-with-fb").click(function () {
		$("#login-form").LoadingOverlay("show", {});
		try {
			FB.login(function (a) {
				if (console.log(a), "connected" == a.status) {
					var b = a.authResponse.accessToken;
					a.authResponse.userID;
					console.log("fb con"), getFBProfile(b)
				} else $("#login-form").LoadingOverlay("hide", {}), console.log("fb not con")
			}, {
				scope: "public_profile,email"
			})
		} catch (a) {
			$("#login-form").LoadingOverlay("hide", {}), console.log("FB Login Failed")
		}
	}), "production" === env) {
	var socket = io(),
		user_id = Cookies.get("user_id");
	socket.emit("register", user_id), socket.on("connect", function (a) {
		console.log("Socket Connected")
	}), socket.on("notification", function (a) {
		if (a) {
			var b = {};
			b.total = a.count_notif, b.tp_notif = a.tp_notif, b.conversation = a.conversation_notif, Cookies.set("notif", b), updateNotifFromCookies()
		}
	})
}
$("#header-notif-button").click(function () {
	Cookies.get("token") ? $("#notif-modal").modal("show") : (Cookies.set("goto", window.location.pathname), $("#login-modal").modal("show"))
}), $("#notif").click(function () {
	Cookies.get("token") ? $("#notif-modal").modal("show") : (Cookies.set("goto", window.location.pathname), $("#login-modal").modal("show"))
});
var getUnreadNotifCountRetry = 3,
	selectedNotifTransaction = [],
	selectedNotifConversation = [],
	isEditNotif = !1;
Cookies.get("notif") ? Cookies.get("token") ? (updateNotifFromCookies(), getUnreadNotifCount()) : Cookies.remove("notif") : getUnreadNotifCount(), $("#notif-modal").on("show.bs.modal", function () {
	getNotifTransaksi(1), getNotifPercakapan(1)
}), $("#edit-notif-btn").click(function (a) {
	isEditNotif = !0, $("#notif-modal .tab-content").css("max-height", "calc(100vh - 155px)"), $("#notif-modal .modal-footer").fadeIn(), $(".one-jualan").children("input").fadeIn(), $(".unread-circle").hide(), $("#dropdown-notif").hide(), hookRemoveNotif()
});
var isHeaderStick = !1,
	headerSize = $("#header-new").outerHeight();
$("#header-new-buffer").css("height", headerSize), updateHeader(), $(window).resize(function () {
	var a = $("#header-new").outerHeight();
	$("#header-new-buffer").css("height", a), window.innerWidth < 768 ? ($("#header-new-buffer").hide(), $("#header-new").css("position", "fixed").css("top", "0"), isHeaderStick = !0) : updateHeader()
}), $(window).scroll(function () {
	updateHeader()
}), $("#header-new").hover(function () {
	isHeaderStick && $("#header-after-top").show()
}, function () {
	isHeaderStick && $("#header-after-top").hide()
}), getUrlVars().token && (console.log("token"), $("#logged-in").hide(), $("#nav-wrapper").prepend('<div id="user-from-token" style="font-weight: 400; position: relative; padding: 0px 10px; margin-left: 10px; width: 184.39px; font-size: 1.3rem; float: right; text-align: center">User from Email</div>'));
var getTemplateProgressBadge = function (a, b) {
	var c = "jualbeli";
	1 == b ? c = "sewa" : 2 == b && (c = "titip"), a >= 30 && a <= 34 && (c = "refund");
	var d = [],
		e = {
			icon: "ban"
		},
		f = {
			icon: "clock-o"
		},
		g = {
			icon: "money"
		},
		h = {
			icon: "truck fa-flip-horizontal"
		},
		i = {
			icon: "gift"
		},
		j = {
			icon: "heart-o"
		},
		k = {
			icon: "undo"
		},
		l = {
			icon: "check"
		},
		m = {
			icon: "times"
		},
		n = {
			icon: "reply"
		},
		o = {
			icon: "handshake-o"
		},
		p = {
			icon: "shopping-bag"
		},
		q = {
			icon: "plane fa-rotate-45"
		};
	"jualbeli" == c ? (d[0] = e, d[1] = f, d[2] = g, d[3] = h, d[4] = i, d[5] = j) : "sewa" == c ? (d[0] = e, d[1] = f, d[2] = g, d[3] = h, d[4] = i, d[5] = n, d[6] = j) : "titip" == c ? (d[0] = e, d[1] = f, d[2] = g, d[3] = p, d[4] = q, d[5] = h, d[6] = i, d[7] = j) : "refund" == c && (d[0] = k, d[1] = k, d[2] = k, d[3] = l);
	var r = 0,
		s = -1;
	if ("titip" == c) switch (a) {
		case -8:
			r = 6, s = 7, d[7] = o;
			break;
		case -6:
			r = 4, s = 5, d[5] = m;
			break;
		case -4:
			r = 4, s = 5, d[5] = m;
			break;
		case -3:
			r = -1, s = 0;
			break;
		case -2:
			r = -1, s = 0;
			break;
		case -1:
			r = -1, s = 0;
			break;
		case 0:
			r = -1;
			break;
		case 1:
			r = 0;
			break;
		case 2:
			r = 1;
			break;
		case 3:
			r = 2;
			break;
		case 4:
			r = 3;
			break;
		case 5:
			r = 4;
			break;
		case 6:
			r = 5;
			break;
		case 7:
			r = 6;
			break;
		case 8:
			r = 7
	} else switch (a) {
		case -6:
			r = 1, s = 2;
			break;
		case -5:
			r = 1, s = 2;
			break;
		case -4:
			r = 2, s = 3;
			break;
		case -3:
			r = 2, s = 3;
			break;
		case -2:
			r = -1, s = 0;
			break;
		case -1:
			r = -1, s = 0;
			break;
		case 0:
			r = -1;
			break;
		case 1:
			r = 0;
			break;
		case 2:
			r = 1;
			break;
		case 3:
			r = 2;
			break;
		case 4:
			r = 3;
			break;
		case 5:
			r = 4;
			break;
		case 6:
			r = 5;
			break;
		case 30:
			r = 0;
			break;
		case 31:
			r = 1;
			break;
		case 32:
			r = 2;
			break;
		case 33:
			r = 3;
			break;
		case 34:
			r = -1, s = 0;
			break;
		case 50:
			r = 4;
			break;
		case 51:
			r = 5;
			break;
		case 52:
			r = 6;
			break;
		case 53:
			r = 6;
			break;
		case 54:
			r = 4, s = 5;
			break;
		case 55:
			r = 5, s = 6, d[6] = o
	}
	var t = "";
	t += '<div class="progress-badge-wrapper progress-badge-wrapper__small">';
	for (var u = 0; u < d.length; u++) t += '<div id="progress-' + a + '" class="progress-badge ' + (u <= r ? "active" : u == s ? "nope" : "") + '">', t += '<i class="fa fa-' + d[u].icon + '"></i>', t += "</div>";
	return t += "</div>"
};
const RentPeriodEnum = Object.freeze({
	PER_HARI: 0,
	PER_MINGGU: 1,
	PER_BULAN: 2
});
var RentPeriodText = {};
RentPeriodText[RentPeriodEnum.PER_HARI] = "hari", RentPeriodText[RentPeriodEnum.PER_MINGGU] = "minggu", RentPeriodText[RentPeriodEnum.PER_BULAN] = "bulan", $("#subscription-form").submit(function (a) {
	a.preventDefault(), "" !== $("#subscription-input").val() && postSubcription($("#subscription-input").val())
}), $("#subscription-button").validate({
	rules: {
		email: {
			email: !0
		}
	}
}), $("#facebook-button").click(function () {
	FB.ui({
		method: "share",
		href: window.location.href
	}, function (a) {
		a && !a.error_message && $("#share-modal").modal("hide")
	})
}), $("#twitter-button").click(function () {
	function a() {
		e.closed && clearInterval(f), e.window && e.window.closed && ($("#share-modal").modal("hide"), clearInterval(f))
	}
	var b = "https://twitter.com/intent/tweet?url=" + window.location.href,
		c = screen.width / 2 - 350,
		d = screen.height / 2 - 225,
		e = window.open(b, "popupWindow", "width=600, height=400,left=" + c + ",top=" + d);
	e.focus();
	var f = setInterval(a, 1)
});
var date_range_picker_conf = {
		format: "dddd, DD MMM YYYY",
		separator: "  -  ",
		language: "id",
		startOfWeek: "monday",
		startDate: moment(),
		minDays: 1,
		inline: !0,
		alwaysOpen: !0,
		singleMonth: "auto",
		selectForward: !0,
		hoveringTooltip: !1,
		customArrowPrevSymbol: '<i class="fa fa-angle-left"></i>',
		customArrowNextSymbol: '<i class="fa fa-angle-right"></i>',
		showTopbar: !1
	},
	currentMarkerPosition = null,
	map = null;