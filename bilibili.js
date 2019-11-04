// ==UserScript==
// @name         BÕ¾ÎÞµ¯Ä»
// @name:en      Bilibili_NoDanMu
// @namespace    http://tampermonkey.net/
// @version      0.26
// @description  ×Ô¶¯ÆÁ±ÎËùÓÐbilibiliµ¯Ä»
// @description:en  Auto Block all-All-ALL danmaku on bilibili.
// @require https://cdn.staticfile.org/jquery/2.0.3/jquery.min.js
// @github	 https://www.github.com/arryboom/nodanmu
// @author       arryboom
// @match        *://*.bilibili.com/*
// @run-at document-idle
// ==/UserScript==

(function() {
    'use strict';
    //jQuery.noConflict();
    window.jQuery(function($) {
    var divcount=0;
    var mdivcount=0;
	var tvdivcount=0;
	var onpdeling=false,onmdeling=false,onpcdeling=false,onmcdeling=false,ontvdeling=false;
	var pagemaindiv;
	var pagepdiv;
	var danmubtn1_text;
	var no_danmu=function(){var nodanmu_a=$("div[class='bilibili-player-video-danmaku-switch bui bui-switch']").eq(0).children(".bui-checkbox");
	var nodanmu_b=$("div[class='bilibili-player-video-btn bilibili-player-video-btn-danmaku']").eq(0).attr("data-text");
	var nodanmu_c=$("div[class='bilibili-live-player-video-controller-hide-danmaku-container']");
	if((typeof(nodanmu_b)=="undefined") && (nodanmu_a.size()!=0)){
		danmubtn1_text=$("div[class='bilibili-player-video-danmaku-switch bui bui-switch']").eq(0).children(".choose_danmaku").html();
		if (!(danmubtn1_text=="¿ªÆôµ¯Ä»"))
		{
			nodanmu_a.click();
		}
	}
	else if (nodanmu_b=="´ò¿ªµ¯Ä»"){
		$("i[name='ctlbar_danmuku_close']").click();
	}
	else if(nodanmu_c.size()!=0)
	{
		$("button[data-title='Òþ²Øµ¯Ä»']").click();
	}
	log("#####Bilibili_NoDanMu#####");
    };
setTimeout(function(){
	no_danmu();
    //---------------------
			 if (window.location.host.toLowerCase()=="search.bilibili.com"){
			 //==================================
				clearsearch();
				$("div.all-contain").eq(0).on("DOMNodeInserted DOMNodeRemoved",function(){setTimeout(clearsearch(),2000)});
				}
				else{
         $(window).scroll(function(){
			 //==================================
			 if (!onpdeling){
             if ($("div.spread-module").length!=0&&$("div.spread-module").length!=divcount){
			 onpdeling=true;
             divcount=$("div.spread-module").length;
			 $("div.spread-module").each(function(index, val){
				 if (!($(val).attr("xnodanmu"))){
					$(val).mousemove(function(e){if(!onpcdeling){onpcdeling=true;clearpagedanmu();onpcdeling=false;}});
					$(val).attr("xnodanmu",uuid());
					}
			 });
			 onpdeling=false;
             }}
                 //==================================
				 if (!onmdeling){
				 if ($("div.video-page-card").length!=0&&$("div.video-page-card").length!=mdivcount){
					onmdeling=true;
                 mdivcount=$("div.video-page-card").length;
				 $("div.video-page-card").each(function(index, val){
					if (!($(val).attr("xnodanmu"))){
					$(val).mousemove(function(e){if(!onmcdeling){onmcdeling=true;clearminidanmu();onmcdeling=false;}});
					$(val).attr("xnodanmu",uuid());
					}
				});
				onmdeling=false;
		 };}
				//==================================
				if (!ontvdeling){
				 if ($("div.recom-item").length!=0&&$("div.recom-item").length!=tvdivcount){
					onmdeling=true;
                 tvdivcount=$("div.recom-item").length;
				 $("div.recom-item").each(function(index, val){
					if (!($(val).attr("xnodanmu"))){
					$(val).mousemove(function(e){if(!onmcdeling){onmcdeling=true;clearminidanmu();onmcdeling=false;}});
					$(val).attr("xnodanmu",uuid());
					}
				});
				ontvdeling=false;
		 };}
				//==================================

				//==================================
		 //--------------------
//==================================
});
         $(window).scroll();
		 $(".video-title").eq(0).bind("DOMNodeInserted",function(){setTimeout(function(){no_danmu();tvdivcount=0;mdivcount=0;$(window).scroll();},2000)});
				}
}
    //--------------------
,3000);
//setTimeout(function(){$(window).scroll()},5000);
function clearsearch(){
				 	$("li.video").each(function(index, val){
					if (!($(val).attr("xnodanmu"))){
					$(val).mousemove(function(e){clearminidanmu();});
					$(val).attr("xnodanmu",uuid());
						}})
}
function uuid() {
    var s = [];
    var hexDigits = "0123456789abcdef";
    for (var i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
    }
    s[8] = s[13] = s[18] = s[23] = "-";
    var uuid = s.join("");
    return uuid;
}
    function log(xtext){
    console.log(xtext);
    }
    function clearpagedanmu(){
    $("div").remove(".danmu-module");
    }
    function clearminidanmu(){
    $("div").remove(".van-danmu");
    }
	})})();