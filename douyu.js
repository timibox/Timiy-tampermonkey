// ==UserScript==
// @name         自定义斗鱼样式
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  添加自定义CSS样式到百度首页
// @author       Your Name
// @match        https://www.douyu.com/*
// @grant        GM_addStyle
// ==/UserScript==

(function () {
  "use strict";

  // 使用 GM_addStyle 添加自定义CSS
  GM_addStyle(`
        #js-room-activity {
            display: none;
        }
        .layout-Aside{
            display: none;
        }
        .ChargeTask-closeBg.react-draggable {
          display: none;
        }
        @media screen and (max-width: 1920px) {
        .layout-Player-toolbar {
            display: none;
        }
    }
    `);
})();
