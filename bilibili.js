// ==UserScript==
// @name         BÕ¾ÎÞµ¯Ä»
// @namespace    http://tampermonkey.net/
// @require https://cdn.staticfile.org/jquery/2.0.3/jquery.min.js
// @version      0.21
// @description  ×Ô¶¯ÆÁ±ÎËùÓÐbilibiliµ¯Ä»
// @github	 https://www.github.com/arryboom/nodanmu
// @author       arryboom
// @match        *://*.bilibili.com/*
// @run-at document-idle
// ==/UserScript==

(function() {
    'use strict';
	var lasturl;
	var no_danmu=function(){var nodanmu_a=$("div[class='bilibili-player-video-danmaku-switch bui bui-switch']").eq(0).children(".bui-checkbox");
	var nodanmu_b=$("div[class='bilibili-player-video-btn bilibili-player-video-btn-danmaku']").eq(0).attr("data-text");
	var nodanmu_c=$("div[class='bilibili-live-player-video-controller-hide-danmaku-container']");
	//console.log(nodanmu_b);
	if((typeof(nodanmu_b)=="undefined") && (nodanmu_a.size()!=0)){
	nodanmu_a.click();
	}
	else if (nodanmu_b=="´ò¿ªµ¯Ä»"){
		$("i[name='ctlbar_danmuku_close']").click();
	}
	else if(nodanmu_c.size()!=0)
	{
		$("button[data-title='Òþ²Øµ¯Ä»']").click();
	}
    $("div").remove(".danmu-module");
	console.log("#####Bilibili_NoDanMu#####");
	lasturl=document.URL;
    };
setTimeout(function(){
	no_danmu();
},3000);
setInterval(function(){
	var curl=document.URL;
    $("div").remove(".van-danmu");
	if (curl!=lasturl){
		no_danmu();
	}
}, 3000); 
})();