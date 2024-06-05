// ==UserScript==
// @name         Timiy WEB定制化插件
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  定制化各种网页插件
// @author       Timiy
// @match        https://chatgpt.com/*
// @match        https://www.douyu.com/*
// @match        https://www.anotherwebsite.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function () {
    "use strict";

    // 获取当前页面的 URL
    var currentURL = window.location.href;

    // CHATGPT自定义样式
    if (currentURL.includes('chatgpt.com')) {
        GM_addStyle(`
            .mx-auto {
                max-width: 98%;
            }
        `);
    }

    // example.com 样式
    if (currentURL.includes('douyu.com')) {
        GM_addStyle(`
            .ChargeTask-closeBg.react-draggable {
                display: none; //播放器左侧广告
            }
            .layout-Player-rank {
                display: none; //屏蔽排行榜
            }
        `);
    }

    // anotherwebsite.com 样式
    if (currentURL.includes('anotherwebsite.com')) {
        GM_addStyle(`
            .another-element {
                background-color: blue;
            }
        `);
    }
})();
