function sfsi_update_index() {
    var s = 1;
    SFSI("ul.icn_listing li.custom").each(function() {
        SFSI(this).children("span.custom-txt").html("Custom " + s), s++;
    }), cntt = 1, SFSI("div.cm_lnk").each(function() {
        SFSI(this).find("h2.custom").find("span.sfsiCtxt").html("Custom " + cntt + ":"), 
        cntt++;
    }), cntt = 1, SFSI("div.custom_m").find("div.custom_section").each(function() {
        SFSI(this).find("label").html("Custom " + cntt + ":"), cntt++;
    });
}

function sfsicollapse(s) {
    var i = !0, e = SFSI(s).closest("div.ui-accordion-content").prev("h3.ui-accordion-header"), t = SFSI(s).closest("div.ui-accordion-content").first();
    e.toggleClass("ui-corner-all", i).toggleClass("accordion-header-active ui-state-active ui-corner-top", !i).attr("aria-selected", (!i).toString()), 
    e.children(".ui-icon").toggleClass("ui-icon-triangle-1-e", i).toggleClass("ui-icon-triangle-1-s", !i), 
    t.toggleClass("accordion-content-active", !i), i ? t.slideUp() :t.slideDown();
}

function sfsi_delete_CusIcon(s, i) {
    beForeLoad();
    var e = {
        action:"deleteIcons",
        icon_name:i.attr("name")
    };
    SFSI.ajax({
        url:ajax_object.ajax_url,
        type:"post",
        data:e,
        dataType:"json",
        success:function(e) {
            if ("success" == e.res) {
                showErrorSuc("success", "Saved !", 1);
                var t = e.last_index + 1;
                SFSI("#total_cusotm_icons").val(e.total_up), SFSI(s).closest(".custom").remove(), 
                SFSI("li.custom:last-child").addClass("bdr_btm_non"), SFSI(".custom-links").find("div." + i.attr("name")).remove(), 
                SFSI(".custom_m").find("div." + i.attr("name")).remove(), SFSI(".share_icon_order").children("li." + i.attr("name")).remove(), 
                SFSI("ul.sfsi_sample_icons").children("li." + i.attr("name")).remove();
                var n = e.total_up + 1;
                4 == e.total_up && SFSI(".icn_listing").append('<li id="c' + t + '" class="custom bdr_btm_non"><div class="radio_section tb_4_ck"><span class="checkbox" dynamic_ele="yes" style="background-position: 0px 0px;"></span><input name="sfsiICON_' + t + '_display"  type="checkbox" value="yes" class="styled" style="display:none;" element-type="cusotm-icon" isNew="yes" /></div> <span class="custom-img"><img src="' + SFSI("#plugin_url").val() + 'images/custom.png" id="CImg_' + t + '"  /> </span> <span class="custom custom-txt">Custom' + n + ' </span> <div class="right_info"> <p><span>It depends:</span> Upload a custom icon if you have other accounts/websites you want to link to.</p><div class="inputWrapper"></div></li>');
            } else showErrorSuc("error", "Unkown error , please try again", 1);
            return sfsi_update_index(), update_Sec5Iconorder(), sfsi_update_step1(), sfsi_update_step5(), 
            afterLoad(), "suc";
        }
    });
}

function update_Sec5Iconorder() {
    SFSI("ul.share_icon_order").children("li").each(function() {
        SFSI(this).attr("data-index", SFSI(this).index() + 1);
    });
}

function sfsi_section_Display(s, i) {
    "hide" == i ? (SFSI("." + s + " :input").prop("disabled", !0), SFSI("." + s + " :button").prop("disabled", !0), 
    SFSI("." + s).hide()) :(SFSI("." + s + " :input").removeAttr("disabled", !0), SFSI("." + s + " :button").removeAttr("disabled", !0), 
    SFSI("." + s).show());
}

function sfsi_depened_sections() {
    if ("sfsi" == SFSI("input[name='sfsi_rss_icons']:checked").val()) {
        for (i = 0; 16 > i; i++) {
            var s = i + 1, e = 74 * i;
            SFSI(".row_" + s + "_2").css("background-position", "-588px -" + e + "px");
        }
        var t = SFSI(".icon_img").attr("src"), n = t.replace("email.png", "sf_arow_icn.png");
        SFSI(".icon_img").attr("src", n);
    } else {
        for (SFSI(".row_1_2").css("background-position", "-58px 0"), i = 0; 16 > i; i++) {
            var s = i + 1, e = 74 * i;
            SFSI(".row_" + s + "_2").css("background-position", "-58px -" + e + "px");
        }
        var t = SFSI(".icon_img").attr("src");
        if (t) {
            var n = t.replace("sf_arow_icn.png", "email.png");
            SFSI(".icon_img").attr("src", n);
        }
    }
    SFSI("input[name='sfsi_rss_display']").prop("checked") ? sfsi_section_Display("rss_section", "show") :sfsi_section_Display("rss_section", "hide"), 
    SFSI("input[name='sfsi_email_display']").prop("checked") ? sfsi_section_Display("email_section", "show") :sfsi_section_Display("email_section", "hide"), 
    SFSI("input[name='sfsi_facebook_display']").prop("checked") ? sfsi_section_Display("facebook_section", "show") :sfsi_section_Display("facebook_section", "hide"), 
    SFSI("input[name='sfsi_twitter_display']").prop("checked") ? sfsi_section_Display("twitter_section", "show") :sfsi_section_Display("twitter_section", "hide"), 
    SFSI("input[name='sfsi_google_display']").prop("checked") ? sfsi_section_Display("google_section", "show") :sfsi_section_Display("google_section", "hide"), 
    SFSI("input[name='sfsi_share_display']").prop("checked") ? sfsi_section_Display("share_section", "show") :sfsi_section_Display("share_section", "hide"), 
    SFSI("input[name='sfsi_youtube_display']").prop("checked") ? sfsi_section_Display("youtube_section", "show") :sfsi_section_Display("youtube_section", "hide"), 
    SFSI("input[name='sfsi_pinterest_display']").prop("checked") ? sfsi_section_Display("pinterest_section", "show") :sfsi_section_Display("pinterest_section", "hide"), 
    SFSI("input[name='sfsi_instagram_display']").prop("checked") ? sfsi_section_Display("instagram_section", "show") :sfsi_section_Display("instagram_section", "hide"), 
    SFSI("input[name='sfsi_linkedin_display']").prop("checked") ? sfsi_section_Display("linkedin_section", "show") :sfsi_section_Display("linkedin_section", "hide"), 
    SFSI("input[element-type='cusotm-icon']").prop("checked") ? sfsi_section_Display("custom_section", "show") :sfsi_section_Display("custom_section", "hide");
}

function CustomIConSectionsUpdate() {
    sfsi_section_Display("counter".ele, show);
}

// Upload Custom Skin {Monad}
function sfsi_customskin_upload(s, ref)
{
	var ttl = jQuery(ref).attr("title");
	var i = s, e = {
        action:"UploadSkins",
        custom_imgurl:i
    };
	
	SFSI.ajax({
        url:ajax_object.ajax_url,
        type:"post",
        data:e,
        success:function(msg) {
			 if (msg.res = "success")
			 {
				 var arr = s.split('=');
				 jQuery(ref).prev('.imgskin').attr('src', arr[1]);
				 jQuery(ref).prev('.imgskin').css("display","block");
				 jQuery(ref).text("Update");
				 jQuery(ref).next('.dlt_btn').css("display","block");
			 }
        }
    });
}

// Delete Custom Skin {Monad}
function deleteskin_icon(s)
{
	var iconname = jQuery(s).attr("title");
	var i = iconname, e = {
        action:"DeleteSkin",
        iconname:i
    };
	
	SFSI.ajax({
        url:ajax_object.ajax_url,
        type:"post",
        data:e,
        success:function(msg) {
			 if (msg.res = "success")
			 {
				 SFSI(s).prev("a").text("Upload");
				 SFSI(s).prev("a").prev("img").attr("src",'');
				 SFSI(s).prev("a").prev("img").css("display","none");
				 SFSI(s).css("display","none");
			 }
        }
    });
}

// Save Custom Skin {Monad}
function SFSI_done()
{
	e = { action:"Iamdone" };
	
	SFSI.ajax({
        url:ajax_object.ajax_url,
        type:"post",
        data:e,
        success:function(msg) {
			  jQuery("li.cstomskins_upload").children(".icns_tab_3").html(msg);
			  SFSI("input[name='sfsi_rss_display']").prop("checked") ? sfsi_section_Display("rss_section", "show") :sfsi_section_Display("rss_section", "hide"),SFSI("input[name='sfsi_email_display']").prop("checked") ? sfsi_section_Display("email_section", "show") :sfsi_section_Display("email_section", "hide"),SFSI("input[name='sfsi_facebook_display']").prop("checked") ? sfsi_section_Display("facebook_section", "show") :sfsi_section_Display("facebook_section", "hide"), SFSI("input[name='sfsi_twitter_display']").prop("checked") ? sfsi_section_Display("twitter_section", "show") :sfsi_section_Display("twitter_section", "hide"),SFSI("input[name='sfsi_google_display']").prop("checked") ? sfsi_section_Display("google_section", "show") :sfsi_section_Display("google_section", "hide"), SFSI("input[name='sfsi_share_display']").prop("checked") ? sfsi_section_Display("share_section", "show") :sfsi_section_Display("share_section", "hide"), SFSI("input[name='sfsi_youtube_display']").prop("checked") ? sfsi_section_Display("youtube_section", "show") :sfsi_section_Display("youtube_section", "hide"), SFSI("input[name='sfsi_pinterest_display']").prop("checked") ? sfsi_section_Display("pinterest_section", "show") :sfsi_section_Display("pinterest_section", "hide"), SFSI("input[name='sfsi_instagram_display']").prop("checked") ? sfsi_section_Display("instagram_section", "show") :sfsi_section_Display("instagram_section", "hide"), SFSI("input[name='sfsi_linkedin_display']").prop("checked") ? sfsi_section_Display("linkedin_section", "show") :sfsi_section_Display("linkedin_section", "hide"), SFSI("input[element-type='cusotm-icon']").prop("checked") ? sfsi_section_Display("custom_section", "show") :sfsi_section_Display("custom_section", "hide");
        	  SFSI(".cstmskins-overlay").hide("slow");
			  sfsi_update_step3() && sfsicollapse(this);
		}
    });
}

// Upload Custom Icons {Monad}
function sfsi_newcustomicon_upload(s) {
    var i = s, e = {
        action:"UploadIcons",
        custom_imgurl:i
    };
    SFSI.ajax({
        url:ajax_object.ajax_url,
        type:"post",
        data:e,
        dataType:"json",
        async:!0,
        success:function(s) {
			if(s.res == 'success')
			{
				afterIconSuccess(s);
			}
			else
			{
				SFSI(".upload-overlay").hide("slow");
				SFSI(".uperror").html(s.res);
				showErrorSuc("Error", "Some Error Occured During Upload Custom Icon", 1)
			}
        }
    });
}

function sfsi_update_step1() {
    global_error = 0, beForeLoad(), sfsi_depened_sections();
    var s = !1, i = SFSI("input[name='sfsi_rss_display']:checked").val(), e = SFSI("input[name='sfsi_email_display']:checked").val(), t = SFSI("input[name='sfsi_facebook_display']:checked").val(), n = SFSI("input[name='sfsi_twitter_display']:checked").val(), o = SFSI("input[name='sfsi_google_display']:checked").val(), a = SFSI("input[name='sfsi_share_display']:checked").val(), r = SFSI("input[name='sfsi_youtube_display']:checked").val(), c = SFSI("input[name='sfsi_pinterest_display']:checked").val(), p = SFSI("input[name='sfsi_linkedin_display']:checked").val(), _ = SFSI("input[name='sfsi_instagram_display']:checked").val(), l = SFSI("input[name='sfsi_custom1_display']:checked").val(), S = SFSI("input[name='sfsi_custom2_display']:checked").val(), u = SFSI("input[name='sfsi_custom3_display']:checked").val(), f = SFSI("input[name='sfsi_custom4_display']:checked").val(), d = SFSI("input[name='sfsi_custom5_display']:checked").val(), I = {
        action:"updateSrcn1",
        sfsi_rss_display:i,
        sfsi_email_display:e,
        sfsi_facebook_display:t,
        sfsi_twitter_display:n,
        sfsi_google_display:o,
        sfsi_share_display:a,
        sfsi_youtube_display:r,
        sfsi_pinterest_display:c,
        sfsi_linkedin_display:p,
        sfsi_instagram_display:_,
        sfsi_custom1_display:l,
        sfsi_custom2_display:S,
        sfsi_custom3_display:u,
        sfsi_custom4_display:f,
        sfsi_custom5_display:d
    };
    SFSI.ajax({
        url:ajax_object.ajax_url,
        type:"post",
        data:I,
        async:!0,
        dataType:"json",
        success:function(i) {
            "success" == i ? (showErrorSuc("success", "Saved !", 1), sfsicollapse("#sfsi_save1"), 
            sfsi_make_popBox()) :(global_error = 1, showErrorSuc("error", "Unkown error , please try again", 1), 
            s = !1), afterLoad();
        }
    });
}

function sfsi_update_step2() {
    var s = sfsi_validationStep2();
    if (!s) return global_error = 1, !1;
    beForeLoad();
    var i = 1 == SFSI("input[name='sfsi_rss_url']").prop("disabled") ? "" :SFSI("input[name='sfsi_rss_url']").val(), e = 1 == SFSI("input[name='sfsi_rss_icons']").prop("disabled") ? "" :SFSI("input[name='sfsi_rss_icons']:checked").val(), t = 1 == SFSI("input[name='sfsi_facebookPage_option']").prop("disabled") ? "" :SFSI("input[name='sfsi_facebookPage_option']:checked").val(), n = 1 == SFSI("input[name='sfsi_facebookLike_option']").prop("disabled") ? "" :SFSI("input[name='sfsi_facebookLike_option']:checked").val(), o = 1 == SFSI("input[name='sfsi_facebookShare_option']").prop("disabled") ? "" :SFSI("input[name='sfsi_facebookShare_option']:checked").val(), a = SFSI("input[name='sfsi_facebookPage_url']").val(), r = 1 == SFSI("input[name='sfsi_twitter_followme']").prop("disabled") ? "" :SFSI("input[name='sfsi_twitter_followme']:checked").val(), c = 1 == SFSI("input[name='sfsi_twitter_followUserName']").prop("disabled") ? "" :SFSI("input[name='sfsi_twitter_followUserName']").val(), p = 1 == SFSI("input[name='sfsi_twitter_aboutPage']").prop("disabled") ? "" :SFSI("input[name='sfsi_twitter_aboutPage']:checked").val(), _ = 1 == SFSI("input[name='sfsi_twitter_page']").prop("disabled") ? "" :SFSI("input[name='sfsi_twitter_page']:checked").val(), l = SFSI("input[name='sfsi_twitter_pageURL']").val(), S = SFSI("textarea[name='sfsi_twitter_aboutPageText']").val(), u = 1 == SFSI("input[name='sfsi_google_page']").prop("disabled") ? "" :SFSI("input[name='sfsi_google_page']:checked").val(), f = 1 == SFSI("input[name='sfsi_googleLike_option']").prop("disabled") ? "" :SFSI("input[name='sfsi_googleLike_option']:checked").val(), d = SFSI("input[name='sfsi_google_pageURL']").val(), I = 1 == SFSI("input[name='sfsi_googleShare_option']").prop("disabled") ? "" :SFSI("input[name='sfsi_googleShare_option']:checked").val(), m = 1 == SFSI("input[name='sfsi_youtube_page']").prop("disabled") ? "" :SFSI("input[name='sfsi_youtube_page']:checked").val(), F = 1 == SFSI("input[name='sfsi_youtube_pageUrl']").prop("disabled") ? "" :SFSI("input[name='sfsi_youtube_pageUrl']").val(), h = 1 == SFSI("input[name='sfsi_youtube_follow']").prop("disabled") ? "" :SFSI("input[name='sfsi_youtube_follow']:checked").val(), cls = SFSI("input[name='sfsi_youtubeusernameorid']:checked").val(), v = SFSI("input[name='sfsi_ytube_user']").val(), vchid = SFSI("input[name='sfsi_ytube_chnlid']").val(), g = 1 == SFSI("input[name='sfsi_pinterest_page']").prop("disabled") ? "" :SFSI("input[name='sfsi_pinterest_page']:checked").val(), k = 1 == SFSI("input[name='sfsi_pinterest_pageUrl']").prop("disabled") ? "" :SFSI("input[name='sfsi_pinterest_pageUrl']").val(), y = 1 == SFSI("input[name='sfsi_pinterest_pingBlog']").prop("disabled") ? "" :SFSI("input[name='sfsi_pinterest_pingBlog']:checked").val(), b = 1 == SFSI("input[name='sfsi_instagram_pageUrl']").prop("disabled") ? "" :SFSI("input[name='sfsi_instagram_pageUrl']").val(), w = 1 == SFSI("input[name='sfsi_linkedin_page']").prop("disabled") ? "" :SFSI("input[name='sfsi_linkedin_page']:checked").val(), x = 1 == SFSI("input[name='sfsi_linkedin_pageURL']").prop("disabled") ? "" :SFSI("input[name='sfsi_linkedin_pageURL']").val(), C = 1 == SFSI("input[name='sfsi_linkedin_follow']").prop("disabled") ? "" :SFSI("input[name='sfsi_linkedin_follow']:checked").val(), D = SFSI("input[name='sfsi_linkedin_followCompany']").val(), U = 1 == SFSI("input[name='sfsi_linkedin_SharePage']").prop("disabled") ? "" :SFSI("input[name='sfsi_linkedin_SharePage']:checked").val(), O = SFSI("input[name='sfsi_linkedin_recommendBusines']:checked").val(), T = SFSI("input[name='sfsi_linkedin_recommendProductId']").val(), j = SFSI("input[name='sfsi_linkedin_recommendCompany']").val(), P = {};
    SFSI("input[name='sfsi_CustomIcon_links[]']").each(function() {
        P[SFSI(this).attr("file-id")] = this.value;
    });
	var M = {
        action:"updateSrcn2",
        sfsi_rss_url:i,
        sfsi_rss_icons:e,
        sfsi_facebookPage_option:t,
        sfsi_facebookLike_option:n,
        sfsi_facebookShare_option:o,
        sfsi_facebookPage_url:a,
        sfsi_twitter_followme:r,
        sfsi_twitter_followUserName:c,
        sfsi_twitter_aboutPage:p,
        sfsi_twitter_page:_,
        sfsi_twitter_pageURL:l,
        sfsi_twitter_aboutPageText:S,
        sfsi_google_page:u,
        sfsi_googleLike_option:f,
        sfsi_google_pageURL:d,
        sfsi_googleShare_option:I,
        sfsi_youtube_page:m,
        sfsi_youtube_pageUrl:F,
        sfsi_youtube_follow:h,
		sfsi_youtubeusernameorid:cls,
        sfsi_ytube_user:v,
		sfsi_ytube_chnlid:vchid,
        sfsi_pinterest_page:g,
        sfsi_pinterest_pageUrl:k,
        sfsi_instagram_pageUrl:b,
        sfsi_pinterest_pingBlog:y,
        sfsi_linkedin_page:w,
        sfsi_linkedin_pageURL:x,
        sfsi_linkedin_follow:C,
        sfsi_linkedin_followCompany:D,
        sfsi_linkedin_SharePage:U,
        sfsi_linkedin_recommendBusines:O,
        sfsi_linkedin_recommendCompany:j,
        sfsi_linkedin_recommendProductId:T,
        sfsi_custom_links:P
    };
    SFSI.ajax({
        url:ajax_object.ajax_url,
        type:"post",
        data:M,
        async:!0,
        dataType:"json",
        success:function(s) {
            "success" == s ? (showErrorSuc("success", "Saved !", 2), sfsicollapse("#sfsi_save2"), 
            sfsi_depened_sections()) :(global_error = 1, showErrorSuc("error", "Unkown error , please try again", 2), 
            return_value = !1), afterLoad();
        }
    });
}

function sfsi_update_step3() {
    var s = sfsi_validationStep3();
    if (!s) return global_error = 1, !1;
    beForeLoad();
    var i = SFSI("input[name='sfsi_actvite_theme']:checked").val(), e = SFSI("input[name='sfsi_mouseOver']:checked").val(), t = SFSI("input[name='sfsi_shuffle_icons']:checked").val(), n = SFSI("input[name='sfsi_shuffle_Firstload']:checked").val(), o = SFSI("#sfsi_mouseOver_effect option:selected").val(), a = SFSI("input[name='sfsi_shuffle_interval']:checked").val(), r = SFSI("input[name='sfsi_shuffle_intervalTime']").val(), c = SFSI("input[name='sfsi_specialIcon_animation']:checked").val(), p = SFSI("input[name='sfsi_specialIcon_MouseOver']:checked").val(), _ = SFSI("input[name='sfsi_specialIcon_Firstload']:checked").val(), l = SFSI("#sfsi_specialIcon_Firstload_Icons option:selected").val(), S = SFSI("input[name='sfsi_specialIcon_interval']:checked").val(), u = SFSI("input[name='sfsi_specialIcon_intervalTime']").val(), f = SFSI("#sfsi_specialIcon_intervalIcons option:selected").val(), d = {
        action:"updateSrcn3",
        sfsi_actvite_theme:i,
        sfsi_mouseOver:e,
        sfsi_shuffle_icons:t,
        sfsi_shuffle_Firstload:n,
        sfsi_mouseOver_effect:o,
        sfsi_shuffle_interval:a,
        sfsi_shuffle_intervalTime:r,
        sfsi_specialIcon_animation:c,
        sfsi_specialIcon_MouseOver:p,
        sfsi_specialIcon_Firstload:_,
        sfsi_specialIcon_Firstload_Icons:l,
        sfsi_specialIcon_interval:S,
        sfsi_specialIcon_intervalTime:u,
        sfsi_specialIcon_intervalIcons:f
    };
    SFSI.ajax({
        url:ajax_object.ajax_url,
        type:"post",
        data:d,
        async:!0,
        dataType:"json",
        success:function(s) {
            "success" == s ? (showErrorSuc("success", "Saved !", 3), sfsicollapse("#sfsi_save3")) :(showErrorSuc("error", "Unkown error , please try again", 3), 
            return_value = !1), afterLoad();
        }
    });
}

function sfsi_show_counts() {
    "yes" == SFSI("input[name='sfsi_display_counts']:checked").val() ? (SFSI(".count_sections").slideDown(), 
    sfsi_showPreviewCounts()) :(SFSI(".count_sections").slideUp(), sfsi_showPreviewCounts());
}

function sfsi_showPreviewCounts() {
    var s = 0;
    1 == SFSI("input[name='sfsi_rss_countsDisplay']").prop("checked") ? (SFSI("#sfsi_rss_countsDisplay").css("opacity", 1), 
    s = 1) :SFSI("#sfsi_rss_countsDisplay").css("opacity", 0), 1 == SFSI("input[name='sfsi_email_countsDisplay']").prop("checked") ? (SFSI("#sfsi_email_countsDisplay").css("opacity", 1), 
    s = 1) :SFSI("#sfsi_email_countsDisplay").css("opacity", 0), 1 == SFSI("input[name='sfsi_facebook_countsDisplay']").prop("checked") ? (SFSI("#sfsi_facebook_countsDisplay").css("opacity", 1), 
    s = 1) :SFSI("#sfsi_facebook_countsDisplay").css("opacity", 0), 1 == SFSI("input[name='sfsi_twitter_countsDisplay']").prop("checked") ? (SFSI("#sfsi_twitter_countsDisplay").css("opacity", 1), 
    s = 1) :SFSI("#sfsi_twitter_countsDisplay").css("opacity", 0), 1 == SFSI("input[name='sfsi_google_countsDisplay']").prop("checked") ? (SFSI("#sfsi_google_countsDisplay").css("opacity", 1), 
    s = 1) :SFSI("#sfsi_google_countsDisplay").css("opacity", 0), 1 == SFSI("input[name='sfsi_linkedIn_countsDisplay']").prop("checked") ? (SFSI("#sfsi_linkedIn_countsDisplay").css("opacity", 1), 
    s = 1) :SFSI("#sfsi_linkedIn_countsDisplay").css("opacity", 0), 1 == SFSI("input[name='sfsi_youtube_countsDisplay']").prop("checked") ? (SFSI("#sfsi_youtube_countsDisplay").css("opacity", 1), 
    s = 1) :SFSI("#sfsi_youtube_countsDisplay").css("opacity", 0), 1 == SFSI("input[name='sfsi_pinterest_countsDisplay']").prop("checked") ? (SFSI("#sfsi_pinterest_countsDisplay").css("opacity", 1), 
    s = 1) :SFSI("#sfsi_pinterest_countsDisplay").css("opacity", 0), 1 == SFSI("input[name='sfsi_shares_countsDisplay']").prop("checked") ? (SFSI("#sfsi_shares_countsDisplay").css("opacity", 1), 
    s = 1) :SFSI("#sfsi_shares_countsDisplay").css("opacity", 0), 1 == SFSI("input[name='sfsi_instagram_countsDisplay']").prop("checked") ? (SFSI("#sfsi_instagram_countsDisplay").css("opacity", 1), 
    s = 1) :SFSI("#sfsi_instagram_countsDisplay").css("opacity", 0), 0 == s || "no" == SFSI("input[name='sfsi_display_counts']:checked").val() ? SFSI(".sfsi_Cdisplay").hide() :SFSI(".sfsi_Cdisplay").show();
}

function sfsi_show_OnpostsDisplay() {
   //"yes" == SFSI("input[name='sfsi_show_Onposts']:checked").val() ? SFSI(".PostsSettings_section").slideDown() :SFSI(".PostsSettings_section").slideUp();
}

function sfsi_update_step4() {
    var s = !1, i = sfsi_validationStep4();
    if (!i) return global_error = 1, !1;
    beForeLoad();
    var e = SFSI("input[name='sfsi_display_counts']:checked").val(), t = 1 == SFSI("input[name='sfsi_email_countsDisplay']").prop("disabled") ? "" :SFSI("input[name='sfsi_email_countsDisplay']:checked").val(), n = 1 == SFSI("input[name='sfsi_email_countsFrom']").prop("disabled") ? "" :SFSI("input[name='sfsi_email_countsFrom']:checked").val(), o = SFSI("input[name='sfsi_email_manualCounts']").val(), a = SFSI("input[name='sfsi_google_api_key']").val(), r = 1 == SFSI("input[name='sfsi_rss_countsDisplay']").prop("disabled") ? "" :SFSI("input[name='sfsi_rss_countsDisplay']:checked").val(), c = SFSI("input[name='sfsi_rss_manualCounts']").val(), p = 1 == SFSI("input[name='sfsi_facebook_countsDisplay']").prop("disabled") ? "" :SFSI("input[name='sfsi_facebook_countsDisplay']:checked").val(), _ = 1 == SFSI("input[name='sfsi_facebook_countsFrom']").prop("disabled") ? "" :SFSI("input[name='sfsi_facebook_countsFrom']:checked").val(), l = SFSI("input[name='sfsi_facebook_manualCounts']").val(), S = 1 == SFSI("input[name='sfsi_twitter_countsDisplay']").prop("disabled") ? "" :SFSI("input[name='sfsi_twitter_countsDisplay']:checked").val(), u = 1 == SFSI("input[name='sfsi_twitter_countsFrom']").prop("disabled") ? "" :SFSI("input[name='sfsi_twitter_countsFrom']:checked").val(), f = SFSI("input[name='sfsi_twitter_manualCounts']").val(), d = SFSI("input[name='tw_consumer_key']").val(), I = SFSI("input[name='tw_consumer_secret']").val(), m = SFSI("input[name='tw_oauth_access_token']").val(), F = SFSI("input[name='tw_oauth_access_token_secret']").val(), h = 1 == SFSI("input[name='sfsi_google_countsDisplay']").prop("disabled") ? "" :SFSI("input[name='sfsi_google_countsDisplay']:checked").val(), v = 1 == SFSI("input[name='sfsi_google_countsFrom']").prop("disabled") ? "" :SFSI("input[name='sfsi_google_countsFrom']:checked").val(), g = SFSI("input[name='sfsi_google_manualCounts']").val(), k = 1 == SFSI("input[name='sfsi_linkedIn_countsFrom']").prop("disabled") ? "" :SFSI("input[name='sfsi_linkedIn_countsFrom']:checked").val(), y = SFSI("input[name='sfsi_linkedIn_manualCounts']").val(), b = SFSI("input[name='ln_company']").val(), w = SFSI("input[name='ln_api_key']").val(), x = SFSI("input[name='ln_secret_key']").val(), C = SFSI("input[name='ln_oAuth_user_token']").val(), D = 1 == SFSI("input[name='sfsi_linkedIn_countsDisplay']").prop("disabled") ? "" :SFSI("input[name='sfsi_linkedIn_countsDisplay']:checked").val(), k = 1 == SFSI("input[name='sfsi_linkedIn_countsFrom']").prop("disabled") ? "" :SFSI("input[name='sfsi_linkedIn_countsFrom']:checked").val(), y = SFSI("input[name='sfsi_linkedIn_manualCounts']").val(), U = 1 == SFSI("input[name='sfsi_youtube_countsDisplay']").prop("disabled") ? "" :SFSI("input[name='sfsi_youtube_countsDisplay']:checked").val(), O = 1 == SFSI("input[name='sfsi_youtube_countsFrom']").prop("disabled") ? "" :SFSI("input[name='sfsi_youtube_countsFrom']:checked").val(), T = SFSI("input[name='sfsi_youtube_manualCounts']").val(), j = SFSI("input[name='sfsi_youtube_user']").val(), P = 1 == SFSI("input[name='sfsi_pinterest_countsDisplay']").prop("disabled") ? "" :SFSI("input[name='sfsi_pinterest_countsDisplay']:checked").val(), M = 1 == SFSI("input[name='sfsi_pinterest_countsFrom']").prop("disabled") ? "" :SFSI("input[name='sfsi_pinterest_countsFrom']:checked").val(), L = SFSI("input[name='sfsi_pinterest_manualCounts']").val(), B = SFSI("input[name='sfsi_pinterest_user']").val(), E = SFSI("input[name='sfsi_pinterest_board']").val(), z = 1 == SFSI("input[name='sfsi_instagram_countsDisplay']").prop("disabled") ? "" :SFSI("input[name='sfsi_instagram_countsDisplay']:checked").val(), A = 1 == SFSI("input[name='sfsi_instagram_countsFrom']").prop("disabled") ? "" :SFSI("input[name='sfsi_instagram_countsFrom']:checked").val(), N = SFSI("input[name='sfsi_instagram_manualCounts']").val(), H = SFSI("input[name='sfsi_instagram_User']").val(), R = 1 == SFSI("input[name='sfsi_shares_countsDisplay']").prop("disabled") ? "" :SFSI("input[name='sfsi_shares_countsDisplay']:checked").val(), W = 1 == SFSI("input[name='sfsi_shares_countsFrom']").prop("disabled") ? "" :SFSI("input[name='sfsi_shares_countsFrom']:checked").val(), q = SFSI("input[name='sfsi_shares_manualCounts']").val(), $ = {
        action:"updateSrcn4",
        sfsi_display_counts:e,
        sfsi_email_countsDisplay:t,
        sfsi_email_countsFrom:n,
        sfsi_email_manualCounts:o,
        sfsi_rss_countsDisplay:r,
        sfsi_rss_manualCounts:c,
        sfsi_facebook_countsDisplay:p,
        sfsi_facebook_countsFrom:_,
        sfsi_facebook_manualCounts:l,
        sfsi_twitter_countsDisplay:S,
        sfsi_twitter_countsFrom:u,
        sfsi_twitter_manualCounts:f,
        tw_consumer_key:d,
        tw_consumer_secret:I,
        tw_oauth_access_token:m,
        tw_oauth_access_token_secret:F,
        sfsi_google_countsDisplay:h,
        sfsi_google_countsFrom:v,
        sfsi_google_manualCounts:g,
        sfsi_google_api_key:a,
        sfsi_linkedIn_countsDisplay:D,
        sfsi_linkedIn_countsFrom:k,
        sfsi_linkedIn_manualCounts:y,
        ln_company:b,
        ln_api_key:w,
        ln_secret_key:x,
        ln_oAuth_user_token:C,
        sfsi_youtube_countsDisplay:U,
        sfsi_youtube_countsFrom:O,
        sfsi_youtube_manualCounts:T,
        sfsi_youtube_user:j,
        sfsi_pinterest_countsDisplay:P,
        sfsi_pinterest_countsFrom:M,
        sfsi_pinterest_manualCounts:L,
        sfsi_pinterest_user:B,
        sfsi_pinterest_board:E,
        sfsi_instagram_countsDisplay:z,
        sfsi_instagram_countsFrom:A,
        sfsi_instagram_manualCounts:N,
        sfsi_instagram_User:H,
        sfsi_shares_countsDisplay:R,
        sfsi_shares_countsFrom:W,
        sfsi_shares_manualCounts:q
    };
    return SFSI.ajax({
        url:ajax_object.ajax_url,
        type:"post",
        data:$,
        dataType:"json",
        async:!0,
        success:function(s) {
            "success" == s.res ? (showErrorSuc("success", "Saved !", 4), sfsicollapse("#sfsi_save4"), 
            sfsi_showPreviewCounts()) :(showErrorSuc("error", "Unkown error , please try again", 4), 
            global_error = 1), afterLoad();
        }
    }), s;
}

function sfsi_update_step5() {
	sfsi_update_step3();
    var s = sfsi_validationStep5();
    if (!s) return global_error = 1, !1;
    beForeLoad();
    var i = SFSI("input[name='sfsi_icons_size']").val(), e = SFSI("input[name='sfsi_icons_perRow']").val(), t = SFSI("input[name='sfsi_icons_spacing']").val(), n = SFSI("#sfsi_icons_Alignment").val(), o = SFSI("input[name='sfsi_icons_ClickPageOpen']:checked").val(), a = SFSI("input[name='sfsi_icons_float']:checked").val(), dsb = SFSI("input[name='sfsi_disable_floaticons']:checked").val(), r = SFSI("#sfsi_icons_floatPosition").val(), c = SFSI("input[name='sfsi_icons_stick']:checked").val(), p = SFSI("#sfsi_rssIcon_order").attr("data-index"), _ = SFSI("#sfsi_emailIcon_order").attr("data-index"), l = SFSI("#sfsi_googleIcon_order").attr("data-index"), S = SFSI("#sfsi_facebookIcon_order").attr("data-index"), u = SFSI("#sfsi_twitterIcon_order").attr("data-index"), f = SFSI("#sfsi_youtubeIcon_order").attr("data-index"), d = SFSI("#sfsi_pinterestIcon_order").attr("data-index"), I = SFSI("#sfsi_instagramIcon_order").attr("data-index"), m = SFSI("#sfsi_shareIcon_order").attr("data-index"), F = SFSI("#sfsi_linkedinIcon_order").attr("data-index"), h = new Array();
    SFSI(".custom_iconOrder").each(function()
	{
        h.push({
            order:SFSI(this).attr("data-index"),
            ele:SFSI(this).attr("element-id")
        });
    });
    var v = 1 == SFSI("input[name='sfsi_rss_MouseOverText']").prop("disabled") ? "" :SFSI("input[name='sfsi_rss_MouseOverText']").val(), g = 1 == SFSI("input[name='sfsi_email_MouseOverText']").prop("disabled") ? "" :SFSI("input[name='sfsi_email_MouseOverText']").val(), k = 1 == SFSI("input[name='sfsi_twitter_MouseOverText']").prop("disabled") ? "" :SFSI("input[name='sfsi_twitter_MouseOverText']").val(), y = 1 == SFSI("input[name='sfsi_facebook_MouseOverText']").prop("disabled") ? "" :SFSI("input[name='sfsi_facebook_MouseOverText']").val(), b = 1 == SFSI("input[name='sfsi_google_MouseOverText']").prop("disabled") ? "" :SFSI("input[name='sfsi_google_MouseOverText']").val(), w = 1 == SFSI("input[name='sfsi_linkedIn_MouseOverText']").prop("disabled") ? "" :SFSI("input[name='sfsi_linkedIn_MouseOverText']").val(), x = 1 == SFSI("input[name='sfsi_youtube_MouseOverText']").prop("disabled") ? "" :SFSI("input[name='sfsi_youtube_MouseOverText']").val(), C = 1 == SFSI("input[name='sfsi_pinterest_MouseOverText']").prop("disabled") ? "" :SFSI("input[name='sfsi_pinterest_MouseOverText']").val(), D = 1 == SFSI("input[name='sfsi_instagram_MouseOverText']").prop("disabled") ? "" :SFSI("input[name='sfsi_instagram_MouseOverText']").val(), U = 1 == SFSI("input[name='sfsi_share_MouseOverText']").prop("disabled") ? "" :SFSI("input[name='sfsi_share_MouseOverText']").val(), O = {};
    SFSI("input[name='sfsi_custom_MouseOverTexts[]']").each(function() {
        O[SFSI(this).attr("file-id")] = this.value;
    });
    var T = {
        action:"updateSrcn5",
        sfsi_icons_size:i,
        sfsi_icons_Alignment:n,
        sfsi_icons_perRow:e,
        sfsi_icons_spacing:t,
        sfsi_icons_ClickPageOpen:o,
        sfsi_icons_float:a,
		sfsi_disable_floaticons:dsb,
        sfsi_icons_floatPosition:r,
        sfsi_icons_stick:c,
        sfsi_rss_MouseOverText:v,
        sfsi_email_MouseOverText:g,
        sfsi_twitter_MouseOverText:k,
        sfsi_facebook_MouseOverText:y,
        sfsi_google_MouseOverText:b,
        sfsi_youtube_MouseOverText:x,
        sfsi_linkedIn_MouseOverText:w,
        sfsi_pinterest_MouseOverText:C,
        sfsi_share_MouseOverText:U,
        sfsi_instagram_MouseOverText:D,
        sfsi_custom_MouseOverTexts:O,
        sfsi_rssIcon_order:p,
        sfsi_emailIcon_order:_,
        sfsi_facebookIcon_order:S,
        sfsi_twitterIcon_order:u,
        sfsi_googleIcon_order:l,
        sfsi_youtubeIcon_order:f,
        sfsi_pinterestIcon_order:d,
        sfsi_shareIcon_order:m,
        sfsi_instagramIcon_order:I,
        sfsi_linkedinIcon_order:F,
        sfsi_custom_orders:h
    };
    SFSI.ajax({
        url:ajax_object.ajax_url,
        type:"post",
        data:T,
        dataType:"json",
        async:!0,
        success:function(s) {
			"success" == s ? (showErrorSuc("success", "Saved !", 5), sfsicollapse("#sfsi_save5")) :(global_error = 1, 
            showErrorSuc("error", "Unkown error , please try again", 5)), afterLoad();
        }
    });
}

function sfsi_update_step6() {
    beForeLoad();
    var s = SFSI("input[name='sfsi_show_Onposts']:checked").val(), i = SFSI("input[name='sfsi_textBefor_icons']").val(), e = SFSI("#sfsi_icons_alignment").val(), t = SFSI("#sfsi_icons_DisplayCounts").val(), n = {
        action:"updateSrcn6",
        sfsi_show_Onposts:s,
        sfsi_icons_DisplayCounts:t,
        sfsi_icons_alignment:e,
        sfsi_textBefor_icons:i
    };
    SFSI.ajax({
        url:ajax_object.ajax_url,
        type:"post",
        data:n,
        dataType:"json",
        async:!0,
        success:function(s) {
            "success" == s ? (showErrorSuc("success", "Saved !", 6), sfsicollapse("#sfsi_save6")) :(global_error = 1, 
            showErrorSuc("error", "Unkown error , please try again", 6)), afterLoad();
        }
    });
}

function sfsi_update_step7() {
    var s = sfsi_validationStep7();
    if (!s) return global_error = 1, !1;
    beForeLoad();
    var i = SFSI("input[name='sfsi_popup_text']").val(), e = SFSI("#sfsi_popup_font option:selected").val(), t = (SFSI("#sfsi_popup_fontStyle option:selected").val(), 
    SFSI("input[name='sfsi_popup_fontColor']").val()), n = SFSI("input[name='sfsi_popup_fontSize']").val(), o = SFSI("input[name='sfsi_popup_background_color']").val(), a = SFSI("input[name='sfsi_popup_border_color']").val(), r = SFSI("input[name='sfsi_popup_border_thickness']").val(), c = SFSI("input[name='sfsi_popup_border_shadow']:checked").val(), p = SFSI("input[name='sfsi_Show_popupOn']:checked").val(), _ = [];
    SFSI("#sfsi_Show_popupOn_PageIDs :selected").each(function(s, i) {
        _[s] = SFSI(i).val();
    });
    var l = SFSI("input[name='sfsi_Shown_pop']:checked").val(), S = SFSI("input[name='sfsi_Shown_popupOnceTime']").val(), u = SFSI("#sfsi_Shown_popuplimitPerUserTime").val(), f = {
        action:"updateSrcn7",
        sfsi_popup_text:i,
        sfsi_popup_font:e,
        sfsi_popup_fontColor:t,
        sfsi_popup_fontSize:n,
        sfsi_popup_background_color:o,
        sfsi_popup_border_color:a,
        sfsi_popup_border_thickness:r,
        sfsi_popup_border_shadow:c,
        sfsi_Show_popupOn:p,
        sfsi_Show_popupOn_PageIDs:_,
        sfsi_Shown_pop:l,
        sfsi_Shown_popupOnceTime:S,
        sfsi_Shown_popuplimitPerUserTime:u
    };
    SFSI.ajax({
        url:ajax_object.ajax_url,
        type:"post",
        data:f,
        dataType:"json",
        async:!0,
        success:function(s) {
            "success" == s ? (showErrorSuc("success", "Saved !", 7), sfsicollapse("#sfsi_save7")) :showErrorSuc("error", "Unkown error , please try again", 7), 
            afterLoad();
        }
    });
}

function sfsi_update_step8() {
    var s = sfsi_validationStep7();
	s = true;
    if (!s) return global_error = 1, !1;
    beForeLoad();
	var i = SFSI("input[name='show_via_widget']:checked").val(),
        e = SFSI("input[name='float_on_page']:checked").val(),
        t = SFSI("input[name='float_page_position']:checked").val(),
        n = SFSI("input[name='place_item_manually']:checked").val(),
        o = SFSI("input[name='show_item_onposts']:checked").val(),
        a = SFSI("input[name='display_button_type']:checked").val(),
        r = SFSI("input[name='sfsi_post_icons_size']").val(),
        c = SFSI("input[name='sfsi_post_icons_spacing']").val(),
        p = SFSI("input[name='sfsi_show_Onposts']:checked").val(),
		v = SFSI("input[name='sfsi_textBefor_icons']").val(),
		x = SFSI("#sfsi_icons_alignment").val(),
		z = SFSI("#sfsi_icons_DisplayCounts").val(),
		b = SFSI("input[name='display_before_posts']:checked").val(),
		d = SFSI("input[name='display_after_posts']:checked").val(),
		/*f = SFSI("input[name='display_on_postspage']:checked").val(),
		g = SFSI("input[name='display_on_homepage']:checked").val(),*/
		f = SFSI("input[name='display_before_blogposts']:checked").val(),
		g = SFSI("input[name='display_after_blogposts']:checked").val(),
		
        _ = [];
    /*SFSI("#sfsi_Show_popupOn_PageIDs :selected").each(function(s, i) {
        _[s] = SFSI(i).val()
    });*/
	var f = {
            action: "updateSrcn8",
            show_via_widget: i,
            float_on_page: e,
            float_page_position: t,
            place_item_manually: n,
            show_item_onposts: o,
            display_button_type: a,
            sfsi_post_icons_size: r,
            sfsi_post_icons_spacing: c,
            sfsi_show_Onposts: p,
			sfsi_textBefor_icons: v,
			sfsi_icons_alignment: x,
			sfsi_icons_DisplayCounts: z,
			display_before_posts: b,
			display_after_posts: d,
			/*display_on_postspage: f,
			display_on_homepage: g*/
			display_before_blogposts: f,
			display_after_blogposts: g
        };
    SFSI.ajax({
        url: ajax_object.ajax_url,
        type: "post",
        data: f,
        dataType: "json",
        async: !0,
        success: function(s) {
			"success" == s ? (showErrorSuc("success", "Saved !", 8), sfsicollapse("#sfsi_save8")) : showErrorSuc("error", "Unkown error , please try again", 8), afterLoad()
        }
    })
}

function afterIconSuccess(s) {
    if (s.res = "success") {
		var i = s.key + 1, e = s.element, t = e + 1;
        SFSI("#total_cusotm_icons").val(s.element);
		SFSI(".upload-overlay").hide("slow");
        SFSI(".uperror").html("");
		showErrorSuc("success", "Custom Icon updated successfully", 1);
        d = new Date();
		
		SFSI("li.custom:last-child").removeClass("bdr_btm_non"); 
        SFSI("li.custom:last-child").children("span.custom-img").children("img").attr("src", s.img_path+ "?" + d.getTime());
		SFSI("input[name=sfsiICON_" + s.key + "]").removeAttr("ele-type"); 
        SFSI("input[name=sfsiICON_" + s.key + "]").removeAttr("isnew");
		icons_name = SFSI("li.custom:last-child").find("input.styled").attr("name");
        var n = icons_name.split("_");
		s.key = s.key, s.img_path += "?" + d.getTime(), 5 > e && SFSI(".icn_listing").append('<li id="c' + i + '" class="custom bdr_btm_non"><div class="radio_section tb_4_ck"><span class="checkbox" dynamic_ele="yes" style="background-position: 0px 0px;"></span><input name="sfsiICON_' + i + '"  type="checkbox" value="yes" class="styled" style="display:none;" element-type="cusotm-icon" isNew="yes" /></div> <span class="custom-img"><img src="' + SFSI("#plugin_url").val() + 'images/custom.png" id="CImg_' + i + '"  /> </span> <span class="custom custom-txt">Custom' + t + ' </span> <div class="right_info"> <p><span>It depends:</span> Upload a custom icon if you have other accounts/websites you want to link to.</p><div class="inputWrapper"></div></li>'), 
        SFSI(".custom_section").show(), SFSI(".custom-links").append(' <div class="row  sfsiICON_' + s.key + ' cm_lnk"> <h2 class="custom"> <span class="customstep2-img"> <img   src="' + s.img_path + "?" + d.getTime() + '" style="border-radius:48%" /> </span> <span class="sfsiCtxt">Custom ' + e + '</span> </h2> <div class="inr_cont "><p>Where do you want this icon to link to?</p> <p class="radio_section fb_url custom_section  sfsiICON_' + s.key + '" ><label>Link :</label><input file-id="' + s.key + '" name="sfsi_CustomIcon_links[]" type="text" value="" placeholder="http://" class="add" /></p></div></div>');
        var o = SFSI("div.custom_m").find("div.mouseover_field").length;
        SFSI("div.custom_m").append(0 == o % 2 ? '<div class="clear"> </div> <div class="mouseover_field custom_section sfsiICON_' + s.key + '"><label>Custom ' + e + ':</label><input name="sfsi_custom_MouseOverTexts[]" value="" type="text" file-id="' + s.key + '" /></div>' :'<div class="cHover " ><div class="mouseover_field custom_section sfsiICON_' + s.key + '"><label>Custom ' + e + ':</label><input name="sfsi_custom_MouseOverTexts[]" value="" type="text" file-id="' + s.key + '" /></div>'), 
        SFSI("ul.share_icon_order").append('<li class="custom_iconOrder sfsiICON_' + s.key + '" data-index="" element-id="' + s.key + '" id=""><a href="#" title="Custom Icon" ><img src="' + s.img_path + '" alt="Linked In" class="sfcm"/></a></li>'), 
        SFSI("ul.sfsi_sample_icons").append('<li class="sfsiICON_' + s.key + '" element-id="' + s.key + '" ><div><img src="' + s.img_path + '" alt="Linked In" class="sfcm"/><span class="sfsi_Cdisplay">12k</span></div></li>'), 
        sfsi_update_index(), update_Sec5Iconorder(), sfsi_update_step1(), sfsi_update_step2(), 
        sfsi_update_step5(), SFSI(".upload-overlay").css("pointer-events", "auto"), sfsi_showPreviewCounts(), 
        afterLoad();
    }
}

function beforeIconSubmit(s) {
    if (SFSI(".uperror").html("Uploading....."), window.File && window.FileReader && window.FileList && window.Blob) {
        SFSI(s).val() || SFSI(".uperror").html("File is empty");
        var i = s.files[0].size, e = s.files[0].type;
        switch (e) {
          case "image/png":
          case "image/gif":
          case "image/jpeg":
          case "image/pjpeg":
            break;

          default:
            return SFSI(".uperror").html("Unsupported file"), !1;
        }
        return i > 1048576 ? (SFSI(".uperror").html("Image should be less than 1 MB"), !1) :!0;
    }
    return !0;
}

function bytesToSize(s) {
    var i = [ "Bytes", "KB", "MB", "GB", "TB" ];
    if (0 == s) return "0 Bytes";
    var e = parseInt(Math.floor(Math.log(s) / Math.log(1024)));
    return Math.round(s / Math.pow(1024, e), 2) + " " + i[e];
}

function showErrorSuc(s, i, e) {
    if ("error" == s) var t = "errorMsg"; else var t = "sucMsg";
    return SFSI(".tab" + e + ">." + t).html(i), SFSI(".tab" + e + ">." + t).show(), 
    SFSI(".tab" + e + ">." + t).effect("highlight", {}, 5e3), setTimeout(function() {
        SFSI("." + t).slideUp("slow");
    }, 5e3), !1;
}

function beForeLoad() {
    SFSI(".loader-img").show(), SFSI(".save_button >a").html("Saving..."), SFSI(".save_button >a").css("pointer-events", "none");
}

function afterLoad() {
    SFSI("input").removeClass("inputError"), SFSI(".save_button >a").html("Save"), SFSI(".tab9>div.save_button >a").html("Save All Settings"), 
    SFSI(".save_button >a").css("pointer-events", "auto"), SFSI(".save_button >a").removeAttr("onclick"), 
    SFSI(".loader-img").hide();
}

function sfsi_make_popBox() {
    var s = 0;
    SFSI(".sfsi_sample_icons >li").each(function() {
        "none" != SFSI(this).css("display") && (s = 1);
    }), 0 == s ? SFSI(".sfsi_Popinner").hide() :SFSI(".sfsi_Popinner").show(), "" != SFSI('input[name="sfsi_popup_text"]').val() ? (SFSI(".sfsi_Popinner >h2").html(SFSI('input[name="sfsi_popup_text"]').val()), 
    SFSI(".sfsi_Popinner >h2").show()) :SFSI(".sfsi_Popinner >h2").hide(), SFSI(".sfsi_Popinner").css({
        "border-color":SFSI('input[name="sfsi_popup_border_color"]').val(),
        "border-width":SFSI('input[name="sfsi_popup_border_thickness"]').val(),
        "border-style":"solid"
    }), SFSI(".sfsi_Popinner").css("background-color", SFSI('input[name="sfsi_popup_background_color"]').val()), 
    SFSI(".sfsi_Popinner h2").css("font-family", SFSI("#sfsi_popup_font").val()), SFSI(".sfsi_Popinner h2").css("font-style", SFSI("#sfsi_popup_fontStyle").val()), 
    SFSI(".sfsi_Popinner >h2").css("font-size", parseInt(SFSI('input[name="sfsi_popup_fontSize"]').val())), 
    SFSI(".sfsi_Popinner >h2").css("color", SFSI('input[name="sfsi_popup_fontColor"]').val() + " !important"), 
    "yes" == SFSI('input[name="sfsi_popup_border_shadow"]:checked').val() ? SFSI(".sfsi_Popinner").css("box-shadow", "12px 30px 18px #CCCCCC") :SFSI(".sfsi_Popinner").css("box-shadow", "none");
}

function sfsi_stick_widget(s) {
    0 == initTop.length && (SFSI(".sfsi_widget").each(function(s) {
        initTop[s] = SFSI(this).position().top;
    }), console.log(initTop));
    var i = SFSI(window).scrollTop(), e = [], t = [];
    SFSI(".sfsi_widget").each(function(s) {
        e[s] = SFSI(this).position().top, t[s] = SFSI(this);
    });
    var n = !1;
    for (var o in e) {
        var a = parseInt(o) + 1;
        e[o] < i && e[a] > i && a < e.length ? (SFSI(t[o]).css({
            position:"fixed",
            top:s
        }), SFSI(t[a]).css({
            position:"",
            top:initTop[a]
        }), n = !0) :SFSI(t[o]).css({
            position:"",
            top:initTop[o]
        });
    }
    if (!n) {
        var r = e.length - 1, c = -1;
        e.length > 1 && (c = e.length - 2), initTop[r] < i ? (SFSI(t[r]).css({
            position:"fixed",
            top:s
        }), c >= 0 && SFSI(t[c]).css({
            position:"",
            top:initTop[c]
        })) :(SFSI(t[r]).css({
            position:"",
            top:initTop[r]
        }), c >= 0 && e[c] < i);
    }
}

function sfsi_setCookie(s, i, e) {
    var t = new Date();
    t.setTime(t.getTime() + 1e3 * 60 * 60 * 24 * e);
    var n = "expires=" + t.toGMTString();
    document.cookie = s + "=" + i + "; " + n;
}

function sfsfi_getCookie(s) {
    for (var i = s + "=", e = document.cookie.split(";"), t = 0; t < e.length; t++) {
        var n = e[t].trim();
        if (0 == n.indexOf(i)) return n.substring(i.length, n.length);
    }
    return "";
}

function sfsi_hideFooter() {}

window.onerror = function() {}, SFSI = jQuery.noConflict(), SFSI(window).load(function() {
    SFSI("#sfpageLoad").fadeOut(2e3);
});

var global_error = 0;

SFSI(document).ready(function(s) {
    //changes done {Monad}
	SFSI(".tab_3_icns").on("click", ".cstomskins_upload", function() {
		SFSI(".cstmskins-overlay").show("slow", function() {
            e = 0;
        });
	});
	SFSI("#custmskin_clspop").live("click", function() {
		SFSI_done();
        SFSI(".cstmskins-overlay").hide("slow");
    });
	//changes done {Monad}
	
	function i() {
        SFSI(".uperror").html(""), afterLoad();
        var s = SFSI('input[name="' + SFSI("#upload_id").val() + '"]');
        s.removeAttr("checked");
        var i = SFSI(s).parent().find("span:first");
        return SFSI(i).css("background-position", "0px 0px"), SFSI(".upload-overlay").hide("slow"), 
        !1;
    }
    SFSI("#accordion").accordion({
        collapsible:!0,
        active:!1,
        heightStyle:"content",
        event:"click",
        beforeActivate:function(s, i) {
            if (i.newHeader[0]) var e = i.newHeader, t = e.next(".ui-accordion-content"); else var e = i.oldHeader, t = e.next(".ui-accordion-content");
            var n = "true" == e.attr("aria-selected");
            return e.toggleClass("ui-corner-all", n).toggleClass("accordion-header-active ui-state-active ui-corner-top", !n).attr("aria-selected", (!n).toString()), 
            e.children(".ui-icon").toggleClass("ui-icon-triangle-1-e", n).toggleClass("ui-icon-triangle-1-s", !n), 
            t.toggleClass("accordion-content-active", !n), n ? t.slideUp() :t.slideDown(), !1;
        }
    }), SFSI("#accordion1").accordion({
        collapsible:!0,
        active:!1,
        heightStyle:"content",
        event:"click",
        beforeActivate:function(s, i) {
            if (i.newHeader[0]) var e = i.newHeader, t = e.next(".ui-accordion-content"); else var e = i.oldHeader, t = e.next(".ui-accordion-content");
            var n = "true" == e.attr("aria-selected");
            return e.toggleClass("ui-corner-all", n).toggleClass("accordion-header-active ui-state-active ui-corner-top", !n).attr("aria-selected", (!n).toString()), 
            e.children(".ui-icon").toggleClass("ui-icon-triangle-1-e", n).toggleClass("ui-icon-triangle-1-s", !n), 
            t.toggleClass("accordion-content-active", !n), n ? t.slideUp() :t.slideDown(), !1;
        }
    }), SFSI(".closeSec").on("click", function() {
        var s = !0, i = SFSI(this).closest("div.ui-accordion-content").prev("h3.ui-accordion-header").first(), e = SFSI(this).closest("div.ui-accordion-content").first();
        i.toggleClass("ui-corner-all", s).toggleClass("accordion-header-active ui-state-active ui-corner-top", !s).attr("aria-selected", (!s).toString()), 
        i.children(".ui-icon").toggleClass("ui-icon-triangle-1-e", s).toggleClass("ui-icon-triangle-1-s", !s), 
        e.toggleClass("accordion-content-active", !s), s ? e.slideUp() :e.slideDown();
    }), SFSI(document).click(function(s) {
        var i = SFSI(".sfsi_FrntInner"), e = SFSI(".sfsi_wDiv"), t = SFSI("#at15s");
        i.is(s.target) || 0 !== i.has(s.target).length || e.is(s.target) || 0 !== e.has(s.target).length || t.is(s.target) || 0 !== t.has(s.target).length || i.fadeOut();
    }), SFSI(".sfsi_outr_div").find(".addthis_button").mousemove(function() {
        var s = SFSI(".sfsi_outr_div").find(".addthis_button").offset().top + 10;
        SFSI("#at15s").css({
            top:s + "px",
            left:SFSI(".sfsi_outr_div").find(".addthis_button").offset().left + "px"
        });
    }), SFSI("#sfsifontCloroPicker").ColorPicker({
        color:"#f80000",
        onBeforeShow:function() {
            s(this).ColorPickerSetColor(SFSI("#sfsi_popup_fontColor").val());
        },
        onShow:function(s) {
            return SFSI(s).fadeIn(500), !1;
        },
        onHide:function(s) {
            return SFSI(s).fadeOut(500), sfsi_make_popBox(), !1;
        },
        onChange:function(s, i) {
            SFSI("#sfsi_popup_fontColor").val("#" + i), SFSI("#sfsifontCloroPicker").css("background", "#" + i), 
            sfsi_make_popBox();
        },
        onClick:function(s, i) {
            SFSI("#sfsi_popup_fontColor").val("#" + i), SFSI("#sfsifontCloroPicker").css("background", "#" + i), 
            sfsi_make_popBox();
        }
    }), SFSI("div#sfsiid_linkedin").find(".icon4").find("a").find("img").mouseover(function() {
		SFSI(this).attr("src", ajax_object.plugin_url + "images/visit_icons/linkedIn_hover.svg");
    }), SFSI("div#sfsiid_linkedin").find(".icon4").find("a").find("img").mouseleave(function() {
        SFSI(this).attr("src", ajax_object.plugin_url + "images/visit_icons/linkedIn.svg");
    }), SFSI("div#sfsiid_youtube").find(".icon1").find("a").find("img").mouseover(function() {
        SFSI(this).attr("src", ajax_object.plugin_url + "images/visit_icons/youtube_hover.svg");
    }), SFSI("div#sfsiid_youtube").find(".icon1").find("a").find("img").mouseleave(function() {
        SFSI(this).attr("src", ajax_object.plugin_url + "images/visit_icons/youtube.svg");
    }), SFSI("div#sfsiid_facebook").find(".icon1").find("a").find("img").mouseover(function() {
        SFSI(this).css("opacity", "0.9");
    }), SFSI("div#sfsiid_facebook").find(".icon1").find("a").find("img").mouseleave(function() {
        SFSI(this).css("opacity", "1");
		/*{Monad}*/
    }), SFSI("div#sfsiid_twitter").find(".cstmicon1").find("a").find("img").mouseover(function() {
        SFSI(this).css("opacity", "0.9");
    }), SFSI("div#sfsiid_twitter").find(".cstmicon1").find("a").find("img").mouseleave(function() {
        SFSI(this).css("opacity", "1");
    }), SFSI("#sfsiBackgroundColorPicker").ColorPicker({
        color:"#f80000",
        onBeforeShow:function() {
            s(this).ColorPickerSetColor(SFSI("#sfsi_popup_background_color").val());
        },
        onShow:function(s) {
            return SFSI(s).fadeIn(500), !1;
        },
        onHide:function(s) {
            return SFSI(s).fadeOut(500), !1;
        },
        onChange:function(s, i) {
            SFSI("#sfsi_popup_background_color").val("#" + i), SFSI("#sfsiBackgroundColorPicker").css("background", "#" + i), 
            sfsi_make_popBox();
        },
        onClick:function(s, i) {
            SFSI("#sfsi_popup_background_color").val("#" + i), SFSI("#sfsiBackgroundColorPicker").css("background", "#" + i), 
            sfsi_make_popBox();
        }
    }), SFSI("#sfsiBorderColorPicker").ColorPicker({
        color:"#f80000",
        onBeforeShow:function() {
            s(this).ColorPickerSetColor(SFSI("#sfsi_popup_border_color").val());
        },
        onShow:function(s) {
            return SFSI(s).fadeIn(500), !1;
        },
        onHide:function(s) {
            return SFSI(s).fadeOut(500), !1;
        },
        onChange:function(s, i) {
            SFSI("#sfsi_popup_border_color").val("#" + i), SFSI("#sfsiBorderColorPicker").css("background", "#" + i), 
            sfsi_make_popBox();
        },
        onClick:function(s, i) {
            SFSI("#sfsi_popup_border_color").val("#" + i), SFSI("#sfsiBorderColorPicker").css("background", "#" + i), 
            sfsi_make_popBox();
        }
    }), SFSI("#sfsi_save1").on("click", function() {
        sfsi_update_step1() && sfsicollapse(this);
    }), SFSI("#sfsi_save2").on("click", function() {
        sfsi_update_step2() && sfsicollapse(this);
    }), SFSI("#sfsi_save3").on("click", function() {
        sfsi_update_step3() && sfsicollapse(this);
    }), SFSI("#sfsi_save4").on("click", function() {
        sfsi_update_step4() && sfsicollapse(this);
    }), SFSI("#sfsi_save5").on("click", function() {
        sfsi_update_step5() && sfsicollapse(this);
    }), SFSI("#sfsi_save6").on("click", function() {
        sfsi_update_step6() && sfsicollapse(this);
    }), SFSI("#sfsi_save7").on("click", function() {
        sfsi_update_step7() && sfsicollapse(this);
		}), SFSI("#sfsi_save8").on("click", function() {
        sfsi_update_step8() && sfsicollapse(this);
    }), SFSI("#save_all_settings").on("click", function() {
        return SFSI("#save_all_settings").text("Saving.."), SFSI(".save_button >a").css("pointer-events", "none"), 
        sfsi_update_step1(), 1 == global_error ? (showErrorSuc("error", 'Some Selection error in "Which icons do you want to show on your site?" tab.', 8), 
        global_error = 0, !1) :(sfsi_update_step2(), 1 == global_error ? (showErrorSuc("error", 'Some Selection error in "What do you want the icons to do?" tab.', 8), 
        global_error = 0, !1) :(sfsi_update_step3(), 1 == global_error ? (showErrorSuc("error", 'Some Selection error in "What design & animation do you want to give your icons?" tab.', 8), 
        global_error = 0, !1) :(sfsi_update_step4(), 1 == global_error ? (showErrorSuc("error", 'Some Selection error in "Do you want to display "counts" next to your icons?" tab.', 8), 
        global_error = 0, !1) :(sfsi_update_step5(), 1 == global_error ? (showErrorSuc("error", 'Some Selection error in "Any other wishes for your main icons?" tab.', 8), 
        global_error = 0, !1) :(sfsi_update_step6(), 1 == global_error ? (showErrorSuc("error", 'Some Selection error in "Do you want to display icons at the end of every post?" tab.', 8), 
        global_error = 0, !1) :(sfsi_update_step7(), 1 == global_error ? (showErrorSuc("error", 'Some Selection error in "Do you want to display a pop-up, asking people to subscribe?" tab.', 8),
		global_error = 0, !1) : sfsi_update_step8(), 1 == global_error ? (showErrorSuc("error", 'Some Selection error in "Where shall they be displayed?" tab.', 8), 
        /*global_error = 0, !1) :void (0 == global_error && showErrorSuc("success", 'Saved! Now go to the <a href="widgets.php">widget</a> area and place the widget into your sidebar (if not done already)', 8))))))));*/
    	global_error = 0, !1) :void (0 == global_error && showErrorSuc("success", '', 8))))))));
	}), SFSI(".fileUPInput").live("change", function() {
        beForeLoad(), beforeIconSubmit(this) && (SFSI(".upload-overlay").css("pointer-events", "none"), 
        SFSI("#customIconFrm").ajaxForm({
            dataType:"json",
            success:afterIconSuccess,
            resetForm:!0
        }).submit());
    }), SFSI(".pop-up").on("click", function() {
        ("fbex-s2" == SFSI(this).attr("data-id") || "googlex-s2" == SFSI(this).attr("data-id") || "linkex-s2" == SFSI(this).attr("data-id")) && (SFSI("." + SFSI(this).attr("data-id")).hide(), 
        SFSI("." + SFSI(this).attr("data-id")).css("opacity", "1"), SFSI("." + SFSI(this).attr("data-id")).css("z-index", "1000")), 
        SFSI("." + SFSI(this).attr("data-id")).show("slow");
    }), SFSI("#close_popup").live("click", function() {
        SFSI(".read-overlay").hide("slow");
    });
    var e = 0;
    SFSI(".icn_listing").on("click", ".checkbox", function() {
        if (1 == e) return !1;
        "yes" == SFSI(this).attr("dynamic_ele") && (s = SFSI(this).parent().find("input:checkbox:first"), 
        s.is(":checked") ? SFSI(s).attr("checked", !1) :SFSI(s).attr("checked", !0)), s = SFSI(this).parent().find("input:checkbox:first"), 
        "yes" == SFSI(s).attr("isNew") && ("0px 0px" == SFSI(this).css("background-position") ? (SFSI(s).attr("checked", !0), 
        SFSI(this).css("background-position", "0px -36px")) :(SFSI(s).removeAttr("checked", !0), 
        SFSI(this).css("background-position", "0px 0px")));
        var s = SFSI(this).parent().find("input:checkbox:first");
        if (s.is(":checked") && "cusotm-icon" == s.attr("element-type")) SFSI(".fileUPInput").attr("name", "custom_icons[]"), 
        SFSI(".upload-overlay").show("slow", function() {
            e = 0;
        }), SFSI("#upload_id").val(s.attr("name")); else if (!s.is(":checked") && "cusotm-icon" == s.attr("element-type")) return s.attr("ele-type") ? (SFSI(this).attr("checked", !0), 
        SFSI(this).css("background-position", "0px -36px"), e = 0, !1) :confirm("Are you sure want to delete this Icon..?? ") ? "suc" == sfsi_delete_CusIcon(this, s) ? (s.attr("checked", !1), 
        SFSI(this).css("background-position", "0px 0px"), e = 0, !1) :(e = 0, !1) :(s.attr("checked", !0), 
        SFSI(this).css("background-position", "0px -36px"), e = 0, !1);
    }), SFSI(".icn_listing").on("click", ".checkbox", function() {
        checked = SFSI(this).parent().find("input:checkbox:first"), "sfsi_email_display" != checked.attr("name") || checked.is(":checked") || SFSI(".demail-1").show("slow");
    }), SFSI("#deac_email2").on("click", function() {
        SFSI(".demail-1").hide("slow"), SFSI(".demail-2").show("slow");
    }), SFSI("#deac_email3").on("click", function() {
        SFSI(".demail-2").hide("slow"), SFSI(".demail-3").show("slow");
    }), SFSI(".hideemailpop").on("click", function() {
        SFSI('input[name="sfsi_email_display"]').attr("checked", !0), SFSI('input[name="sfsi_email_display"]').parent().find("span:first").css("background-position", "0px -36px"), 
        SFSI(".demail-1").hide("slow"), SFSI(".demail-2").hide("slow"), SFSI(".demail-3").hide("slow");
    }), SFSI(".hidePop").on("click", function() {
        SFSI(".demail-1").hide("slow"), SFSI(".demail-2").hide("slow"), SFSI(".demail-3").hide("slow");
    }), SFSI(".activate_footer").on("click", function() {
        SFSI(this).text("activating....");
        var s = {
            action:"activateFooter"
        };
        SFSI.ajax({
            url:ajax_object.ajax_url,
            type:"post",
            data:s,
            dataType:"json",
            success:function(s) {
                "success" == s.res && (SFSI(".demail-1").hide("slow"), SFSI(".demail-2").hide("slow"), 
                SFSI(".demail-3").hide("slow"), SFSI(".activate_footer").text("Ok, activate link"));
            }
        });
    }), SFSI(".sfsi_removeFooter").on("click", function() {
        SFSI(this).text("working....");
        var s = {
            action:"removeFooter"
        };
        SFSI.ajax({
            url:ajax_object.ajax_url,
            type:"post",
            data:s,
            dataType:"json",
            success:function(s) {
                "success" == s.res && (SFSI(".sfsi_removeFooter").fadeOut("slow"), SFSI(".sfsi_footerLnk").fadeOut("slow"));
            }
        });
    }), SFSI(".radio").live("click", function() {
        var s = SFSI(this).parent().find("input:radio:first");
        "sfsi_display_counts" == s.attr("name") && sfsi_show_counts();
    }), SFSI("#close_Uploadpopup").on("click", i), SFSI(".radio").live("click", function() {
        var s = SFSI(this).parent().find("input:radio:first");
        "sfsi_show_Onposts" == s.attr("name") && sfsi_show_OnpostsDisplay();
    }), sfsi_show_OnpostsDisplay(), sfsi_depened_sections(), sfsi_show_counts(), sfsi_showPreviewCounts(), 
    SFSI(".share_icon_order").sortable({
        update:function() {
            SFSI(".share_icon_order li").each(function() {
                SFSI(this).attr("data-index", SFSI(this).index() + 1);
            });
        },
        revert:!0
    }), SFSI(".radio").live("click", function() {
        var s = SFSI(this).parent().find("input:radio:first");
        "sfsi_email_countsFrom" == s.attr("name") && (SFSI('input[name="sfsi_email_countsDisplay"]').prop("checked", !0), 
        SFSI('input[name="sfsi_email_countsDisplay"]').parent().find("span.checkbox").attr("style", "background-position:0px -36px;"), 
        "manual" == SFSI("input[name='sfsi_email_countsFrom']:checked").val() ? SFSI("input[name='sfsi_email_manualCounts']").slideDown() :SFSI("input[name='sfsi_email_manualCounts']").slideUp()), 
        "sfsi_facebook_countsFrom" == s.attr("name") && (SFSI('input[name="sfsi_facebook_countsDisplay"]').prop("checked", !0), 
        SFSI('input[name="sfsi_facebook_countsDisplay"]').parent().find("span.checkbox").attr("style", "background-position:0px -36px;"), 
        "manual" == SFSI("input[name='sfsi_facebook_countsFrom']:checked").val() ? SFSI("input[name='sfsi_facebook_manualCounts']").slideDown() :SFSI("input[name='sfsi_facebook_manualCounts']").slideUp()), 
        "sfsi_twitter_countsFrom" == s.attr("name") && (SFSI('input[name="sfsi_twitter_countsDisplay"]').prop("checked", !0), 
        SFSI('input[name="sfsi_twitter_countsDisplay"]').parent().find("span.checkbox").attr("style", "background-position:0px -36px;"), 
        "manual" == SFSI("input[name='sfsi_twitter_countsFrom']:checked").val() ? (SFSI("input[name='sfsi_twitter_manualCounts']").slideDown(), 
        SFSI(".tw_follow_options").slideUp()) :(SFSI("input[name='sfsi_twitter_manualCounts']").slideUp(), 
        SFSI(".tw_follow_options").slideDown())), "sfsi_google_countsFrom" == s.attr("name") && (SFSI('input[name="sfsi_google_countsDisplay"]').prop("checked", !0), 
        SFSI('input[name="sfsi_google_countsDisplay"]').parent().find("span.checkbox").attr("style", "background-position:0px -36px;"), 
        "manual" == SFSI("input[name='sfsi_google_countsFrom']:checked").val() && (SFSI("input[name='sfsi_google_manualCounts']").slideDown(), 
        SFSI(".google_option").slideUp()), "likes" == SFSI("input[name='sfsi_google_countsFrom']:checked").val() && (SFSI("input[name='sfsi_google_manualCounts']").slideUp(), 
        SFSI(".google_option").slideUp()), "follower" == SFSI("input[name='sfsi_google_countsFrom']:checked").val() && (SFSI(".google_option").slideDown(), 
        SFSI("input[name='sfsi_google_manualCounts']").slideUp())), "sfsi_linkedIn_countsFrom" == s.attr("name") && (SFSI('input[name="sfsi_linkedIn_countsDisplay"]').prop("checked", !0), 
        SFSI('input[name="sfsi_linkedIn_countsDisplay"]').parent().find("span.checkbox").attr("style", "background-position:0px -36px;"), 
        "manual" == SFSI("input[name='sfsi_linkedIn_countsFrom']:checked").val() ? (SFSI("input[name='sfsi_linkedIn_manualCounts']").slideDown(), 
        SFSI(".linkedIn_options").slideUp()) :(SFSI("input[name='sfsi_linkedIn_manualCounts']").slideUp(), 
        SFSI(".linkedIn_options").slideDown())), "sfsi_youtube_countsFrom" == s.attr("name") && (SFSI('input[name="sfsi_youtube_countsDisplay"]').prop("checked", !0), 
        SFSI('input[name="sfsi_youtube_countsDisplay"]').parent().find("span.checkbox").attr("style", "background-position:0px -36px;"), 
        "manual" == SFSI("input[name='sfsi_youtube_countsFrom']:checked").val() ? (SFSI("input[name='sfsi_youtube_manualCounts']").slideDown(), 
        SFSI(".youtube_options").slideUp()) :(SFSI("input[name='sfsi_youtube_manualCounts']").slideUp(), 
        SFSI(".youtube_options").slideDown())), "sfsi_pinterest_countsFrom" == s.attr("name") && (SFSI('input[name="sfsi_pinterest_countsDisplay"]').prop("checked", !0), 
        SFSI('input[name="sfsi_pinterest_countsDisplay"]').parent().find("span.checkbox").attr("style", "background-position:0px -36px;"), 
        "manual" == SFSI("input[name='sfsi_pinterest_countsFrom']:checked").val() ? (SFSI("input[name='sfsi_pinterest_manualCounts']").slideDown(), 
        SFSI(".pin_options").slideUp()) :SFSI("input[name='sfsi_pinterest_manualCounts']").slideUp()), 
        "sfsi_instagram_countsFrom" == s.attr("name") && (SFSI('input[name="sfsi_instagram_countsDisplay"]').prop("checked", !0), 
        SFSI('input[name="sfsi_instagram_countsDisplay"]').parent().find("span.checkbox").attr("style", "background-position:0px -36px;"), 
        "manual" == SFSI("input[name='sfsi_instagram_countsFrom']:checked").val() ? (SFSI("input[name='sfsi_instagram_manualCounts']").slideDown(), 
        SFSI(".instagram_userLi").slideUp()) :(SFSI("input[name='sfsi_instagram_manualCounts']").slideUp(), 
        SFSI(".instagram_userLi").slideDown())), "sfsi_shares_countsFrom" == s.attr("name") && (SFSI('input[name="sfsi_shares_countsDisplay"]').prop("checked", !0), 
        SFSI('input[name="sfsi_shares_countsDisplay"]').parent().find("span.checkbox").attr("style", "background-position:0px -36px;"), 
        "manual" == SFSI("input[name='sfsi_shares_countsFrom']:checked").val() ? SFSI("input[name='sfsi_shares_manualCounts']").slideDown() :SFSI("input[name='sfsi_shares_manualCounts']").slideUp());
    }), sfsi_make_popBox(), SFSI('input[name="sfsi_popup_text"] ,input[name="sfsi_popup_background_color"],input[name="sfsi_popup_border_color"],input[name="sfsi_popup_border_thickness"],input[name="sfsi_popup_fontSize"],input[name="sfsi_popup_fontColor"]').on("keyup", sfsi_make_popBox), 
    SFSI('input[name="sfsi_popup_text"] ,input[name="sfsi_popup_background_color"],input[name="sfsi_popup_border_color"],input[name="sfsi_popup_border_thickness"],input[name="sfsi_popup_fontSize"],input[name="sfsi_popup_fontColor"]').on("focus", sfsi_make_popBox), 
    SFSI("#sfsi_popup_font ,#sfsi_popup_fontStyle").on("change", sfsi_make_popBox), 
    SFSI(".radio").live("click", function() {
        var s = SFSI(this).parent().find("input:radio:first");
        "sfsi_popup_border_shadow" == s.attr("name") && sfsi_make_popBox();
    }), /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ? SFSI("img.sfsi_wicon").on("click", function(s) {
        s.stopPropagation();
        var i = SFSI("#sfsi_floater_sec").val();
        SFSI("div.sfsi_wicons").css("z-index", "0"), SFSI(this).parent().parent().parent().siblings("div.sfsi_wicons").find(".inerCnt").find("div.sfsi_tool_tip_2").hide(), 
        SFSI(this).parent().parent().parent().parent().siblings("li").length > 0 && (SFSI(this).parent().parent().parent().parent().siblings("li").find("div.sfsi_tool_tip_2").css("z-index", "0"), 
        SFSI(this).parent().parent().parent().parent().siblings("li").find("div.sfsi_wicons").find(".inerCnt").find("div.sfsi_tool_tip_2").hide()), 
        SFSI(this).parent().parent().parent().css("z-index", "1000000"), SFSI(this).parent().parent().css({
            "z-index":"999"
        }), SFSI(this).attr("effect") && "fade_in" == SFSI(this).attr("effect") && (SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").css({
            opacity:1,
            "z-index":10
        }), SFSI(this).parent().css("opacity", "1")), SFSI(this).attr("effect") && "scale" == SFSI(this).attr("effect") && (SFSI(this).parent().addClass("scale"), 
        SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").css({
            opacity:1,
            "z-index":10
        }), SFSI(this).parent().css("opacity", "1")), SFSI(this).attr("effect") && "combo" == SFSI(this).attr("effect") && (SFSI(this).parent().addClass("scale"), 
        SFSI(this).parent().css("opacity", "1"), SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").css({
            opacity:1,
            "z-index":10
        })), ("top-left" == i || "top-right" == i) && SFSI(this).parent().parent().parent().parent("#sfsi_floater").length > 0 && "sfsi_floater" == SFSI(this).parent().parent().parent().parent().attr("id") ? (SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").addClass("sfsi_plc_btm"), 
        SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").find("span.bot_arow").addClass("top_big_arow"), 
        SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").css({
            opacity:1,
            "z-index":10
        }), SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").show()) :(SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").find("span.bot_arow").removeClass("top_big_arow"), 
        SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").removeClass("sfsi_plc_btm"), 
        SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").css({
            opacity:1,
            "z-index":1e3
        }), SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").show());
    }) :SFSI("img.sfsi_wicon").on("mouseenter", function() {
        var s = SFSI("#sfsi_floater_sec").val();
        SFSI("div.sfsi_wicons").css("z-index", "0"), SFSI(this).parent().parent().parent().siblings("div.sfsi_wicons").find(".inerCnt").find("div.sfsi_tool_tip_2").hide(), 
        SFSI(this).parent().parent().parent().parent().siblings("li").length > 0 && (SFSI(this).parent().parent().parent().parent().siblings("li").find("div.sfsi_tool_tip_2").css("z-index", "0"), 
        SFSI(this).parent().parent().parent().parent().siblings("li").find("div.sfsi_wicons").find(".inerCnt").find("div.sfsi_tool_tip_2").hide()), 
        SFSI(this).parent().parent().parent().css("z-index", "1000000"), SFSI(this).parent().parent().css({
            "z-index":"999"
        }), SFSI(this).attr("effect") && "fade_in" == SFSI(this).attr("effect") && (SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").css({
            opacity:1,
            "z-index":10
        }), SFSI(this).parent().css("opacity", "1")), SFSI(this).attr("effect") && "scale" == SFSI(this).attr("effect") && (SFSI(this).parent().addClass("scale"), 
        SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").css({
            opacity:1,
            "z-index":10
        }), SFSI(this).parent().css("opacity", "1")), SFSI(this).attr("effect") && "combo" == SFSI(this).attr("effect") && (SFSI(this).parent().addClass("scale"), 
        SFSI(this).parent().css("opacity", "1"), SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").css({
            opacity:1,
            "z-index":10
        })), ("top-left" == s || "top-right" == s) && SFSI(this).parent().parent().parent().parent("#sfsi_floater").length > 0 && "sfsi_floater" == SFSI(this).parent().parent().parent().parent().attr("id") ? (SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").addClass("sfsi_plc_btm"), 
        SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").find("span.bot_arow").addClass("top_big_arow"), 
        SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").css({
            opacity:1,
            "z-index":10
        }), SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").show()) :(SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").find("span.bot_arow").removeClass("top_big_arow"), 
        SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").removeClass("sfsi_plc_btm"), 
        SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").css({
            opacity:1,
            "z-index":10
        }), SFSI(this).parentsUntil("div").siblings("div.sfsi_tool_tip_2").show());
    }), SFSI("div.sfsi_wicons").on("mouseleave", function() {
        SFSI(this).children("div.inerCnt").children("a.sficn").attr("effect") && "fade_in" == SFSI(this).children("div.inerCnt").children("a.sficn").attr("effect") && SFSI(this).children("div.inerCnt").find("a.sficn").css("opacity", "0.6"), 
        SFSI(this).children("div.inerCnt").children("a.sficn").attr("effect") && "scale" == SFSI(this).children("div.inerCnt").children("a.sficn").attr("effect") && SFSI(this).children("div.inerCnt").find("a.sficn").removeClass("scale"), 
        SFSI(this).children("div.inerCnt").children("a.sficn").attr("effect") && "combo" == SFSI(this).children("div.inerCnt").children("a.sficn").attr("effect") && (SFSI(this).children("div.inerCnt").find("a.sficn").css("opacity", "0.6"), 
        SFSI(this).children("div.inerCnt").find("a.sficn").removeClass("scale")), "google" == SFSI(this).children("div.inerCnt").find("a.sficn").attr("id") ? SFSI("body").on("click", function() {
            SFSI(this).children(".inerCnt").find("div.sfsi_tool_tip_2").hide();
        }) :(SFSI(this).css({
            "z-index":"0"
        }), SFSI(this).children(".inerCnt").find("div.sfsi_tool_tip_2").hide());
    }), SFSI("body").on("click", function() {
        SFSI(".inerCnt").find("div.sfsi_tool_tip_2").hide();
    }), SFSI(".adminTooltip >a").on("hover", function() {
        SFSI(this).offset().top, SFSI(this).parent("div").find("div.sfsi_tool_tip_2_inr").css("opacity", "1"), 
        SFSI(this).parent("div").find("div.sfsi_tool_tip_2_inr").show();
    }), SFSI(".adminTooltip").on("mouseleave", function() {
        "none" != SFSI(".gpls_tool_bdr").css("display") && 0 != SFSI(".gpls_tool_bdr").css("opacity") ? SFSI(".pop_up_box ").on("click", function() {
            SFSI(this).parent("div").find("div.sfsi_tool_tip_2_inr").css("opacity", "0"), SFSI(this).parent("div").find("div.sfsi_tool_tip_2_inr").hide();
        }) :(SFSI(this).parent("div").find("div.sfsi_tool_tip_2_inr").css("opacity", "0"), 
        SFSI(this).parent("div").find("div.sfsi_tool_tip_2_inr").hide());
    }), SFSI(".expand-area").on("click", function() {
        "Read more" == SFSI(this).text() ? (SFSI(this).siblings("p").children("label").fadeIn("slow"), 
        SFSI(this).text("Collapse")) :(SFSI(this).siblings("p").children("label").fadeOut("slow"), 
        SFSI(this).text("Read more"));
    }), SFSI(".radio").live("click", function()
	{
        var s = SFSI(this).parent().find("input:radio:first");
        "sfsi_icons_float" == s.attr("name") && "yes" == s.val() && (SFSI(".float_options").slideDown("slow"), 
        SFSI('input[name="sfsi_icons_stick"][value="no"]').attr("checked", !0), SFSI('input[name="sfsi_icons_stick"][value="yes"]').removeAttr("checked"), 
        SFSI('input[name="sfsi_icons_stick"][value="no"]').parent().find("span").attr("style", "background-position:0px -41px;"), 
        SFSI('input[name="sfsi_icons_stick"][value="yes"]').parent().find("span").attr("style", "background-position:0px -0px;")), 
        ("sfsi_icons_stick" == s.attr("name") && "yes" == s.val() || "sfsi_icons_float" == s.attr("name") && "no" == s.val()) && (SFSI(".float_options").slideUp("slow"), 
        SFSI('input[name="sfsi_icons_float"][value="no"]').prop("checked", !0), SFSI('input[name="sfsi_icons_float"][value="yes"]').prop("checked", !1), 
        SFSI('input[name="sfsi_icons_float"][value="no"]').parent().find("span.radio").attr("style", "background-position:0px -41px;"), 
        SFSI('input[name="sfsi_icons_float"][value="yes"]').parent().find("span.radio").attr("style", "background-position:0px -0px;"));
    }), SFSI(".sfsi_wDiv").length > 0 && setTimeout(function() {
        var s = parseInt(SFSI(".sfsi_wDiv").height()) + 15 + "px";
        SFSI(".sfsi_holders").each(function() {
            SFSI(this).css("height", s);
        });
    }, 200), SFSI(".checkbox").live("click", function() {
        var s = SFSI(this).parent().find("input:checkbox:first");
        ("sfsi_shuffle_Firstload" == s.attr("name") && "checked" == s.attr("checked") || "sfsi_shuffle_interval" == s.attr("name") && "checked" == s.attr("checked")) && (SFSI('input[name="sfsi_shuffle_icons"]').parent().find("span").css("background-position", "0px -36px"), 
        SFSI('input[name="sfsi_shuffle_icons"]').attr("checked", "checked")), "sfsi_shuffle_icons" == s.attr("name") && "checked" != s.attr("checked") && (SFSI('input[name="sfsi_shuffle_Firstload"]').removeAttr("checked"), 
        SFSI('input[name="sfsi_shuffle_Firstload"]').parent().find("span").css("background-position", "0px 0px"), 
        SFSI('input[name="sfsi_shuffle_interval"]').removeAttr("checked"), SFSI('input[name="sfsi_shuffle_interval"]').parent().find("span").css("background-position", "0px 0px"));
    });
	SFSI(".checkbox").live("click", function()
	{
        var s = SFSI(this).parent().find("input:checkbox:first");
        "float_on_page" == s.attr("name") && "yes" == s.val() && ( 
        SFSI('input[name="sfsi_icons_stick"][value="no"]').attr("checked", !0), SFSI('input[name="sfsi_icons_stick"][value="yes"]').removeAttr("checked"), 
        SFSI('input[name="sfsi_icons_stick"][value="no"]').parent().find("span").attr("style", "background-position:0px -41px;"), 
        SFSI('input[name="sfsi_icons_stick"][value="yes"]').parent().find("span").attr("style", "background-position:0px -0px;"));
    });
	SFSI(".radio").live("click", function()
	{
        var s = SFSI(this).parent().find("input:radio:first");
		var a = SFSI(".cstmfltonpgstck");
		("sfsi_icons_stick" == s.attr("name") && "yes" == s.val()) && (
        SFSI('input[name="float_on_page"][value="no"]').prop("checked", !0), SFSI('input[name="float_on_page"][value="yes"]').prop("checked", !1), 
        SFSI('input[name="float_on_page"][value="no"]').parent().find("span.checkbox").attr("style", "background-position:0px -41px;"), 
        SFSI('input[name="float_on_page"][value="yes"]').parent().find("span.checkbox").attr("style", "background-position:0px -0px;"),
		jQuery(a).children(".checkbox").css("background-position", "0px 0px" ), toggleflotpage(a));
    });
});

//for utube channel name and id
function showhideutube(ref)
{
	var chnlslctn = SFSI(ref).children("input").val();
	if(chnlslctn == "name")
	{
		SFSI(ref).parent(".enough_waffling").next(".cstmutbtxtwpr").children(".cstmutbchnlnmewpr").slideDown();
		SFSI(ref).parent(".enough_waffling").next(".cstmutbtxtwpr").children(".cstmutbchnlidwpr").slideUp();
	}
	else
	{
		SFSI(ref).parent(".enough_waffling").next(".cstmutbtxtwpr").children(".cstmutbchnlidwpr").slideDown();
		SFSI(ref).parent(".enough_waffling").next(".cstmutbtxtwpr").children(".cstmutbchnlnmewpr").slideUp();
	}
}

var initTop = new Array();

function toggleflotpage(ref)
{
	var pos = jQuery(ref).children(".checkbox").css("background-position");
	if(pos == "0px 0px")
	{
		jQuery(ref).next(".right_info").children("p").children(".sub-subtitle").hide();
		jQuery(ref).next(".right_info").children(".tab_3_icns").hide();
	}
	else
	{
		jQuery(ref).next(".right_info").children("p").children(".sub-subtitle").show();
		jQuery(ref).next(".right_info").children(".tab_3_icns").show();
	}
}
function togglbtmsection(show, hide, ref)
{
	jQuery(ref).parent("ul").children("li.clckbltglcls").each(function(index, element)
	{
		jQuery(this).children(".radio").css("background-position", "0px 0px");
		jQuery(this).children(".styled").attr("checked", "false");
	});
	jQuery(ref).children(".radio").css("background-position", "0px -41px");
	jQuery(ref).children(".styled").attr("checked", "true");
	
	jQuery("."+show).show();
	jQuery("."+show).children(".radiodisplaysection").show();
	jQuery("."+hide).hide();
	jQuery("."+hide).children(".radiodisplaysection").hide();
	/*jQuery(ref).parent("ul").children("li").each(function(index, element)
	{
		var pos = jQuery(this).children(".radio").css("background-position");
		if(pos == "0px 0px")
		{
			jQuery(this).children(".radiodisplaysection").hide();
		}
		else
		{
			jQuery(this).children(".radiodisplaysection").show();
		}
    });
	var pos = jQuery(ref).children(".radio").css("background-position");
	if(pos != "0px 0px")
	{
		jQuery(ref).children(".radiodisplaysection").show();
	}
	else
	{
		jQuery(ref).children(".radiodisplaysection").hide();
	}*/
}
function checkforinfoslction(ref)
{
	var pos = jQuery(ref).children(".checkbox").css("background-position");
	if(pos == "0px 0px")
	{
		jQuery(ref).next(".right_info").children("p").children("label").hide();
	}
	else
	{
		jQuery(ref).next(".right_info").children("p").children("label").show();
	}
}