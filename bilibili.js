// ==UserScript==
// @name         BÕ¾ÎÞµ¯Ä»
// @namespace    http://tampermonkey.net/
// @version      0.16
// @description  ×Ô¶¯ÆÁ±ÎËùÓÐbilibiliµ¯Ä»
// @github	 https://www.github.com/arryboom/nodanmu
// @author       arryboom
// @match        *://*.bilibili.com/*
// ==/UserScript==

(function() {
    'use strict';
setTimeout(function(){
	var nodanmu_a=$("div[class='bilibili-player-video-danmaku-switch bui bui-switch']").eq(0).children(".bui-checkbox");
	var nodanmu_b=$("div[class='bilibili-player-video-btn bilibili-player-video-btn-danmaku']").eq(0).attr("data-text");
	var nodanmu_c=$("div[class='bilibili-live-player-video-controller-hide-danmaku-container']");
	console.log(nodanmu_b);
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
	console.log("#####Bilibili_NoDanMu#####");
    },3000);
})();