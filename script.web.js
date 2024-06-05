// ==UserScript==
// @name         Timiy WEB定制化插件
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  定制化各种网页插件
// @author       Timiy
// @match        https://chatgpt.com/*
// @match        https://www.example.com/*
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
    if (currentURL.includes('example.com')) {
        GM_addStyle(`
            #example-element {
                color: red;
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
