// ==UserScript==
// @name         Timiy WEB定制化插件
// @namespace    http://tampermonkey.net/
// @version      1.3
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
                max-width: 90vw;
            }
        `);
    }


    if (currentURL.includes('douyu.com')) {
    GM_addStyle(`
        .ChargeTask-closeBg.react-draggable {
            display: none;
        }
        .layout-Player-announce {
            display: none;
        }
        .layout-Player-rank {
            display: none;
        }
        div#js-room-activity {
            display: none;
        }
        @media screen and (max-width: 1200px) {
            .layout-Player {
                display: flex;
                flex-direction: column;
                min-width: auto!important;
            }
            .layout-Player-main {
                width: 100vw!important;
                height: 710px!important;
                z-index: 2;
                flex: none;
                background: #ff0000;
            }
            .layout-Player-aside {
                width: 100%;
                height: 100%;
            }
        }
    `);
    }


})();
