// ==UserScript==
// @name         fix-backend-ai-logs-encode
// @namespace    https://github.com/llm-sec/portswigger-llm-labs-writeup
// @version      0.1
// @description  修正Backend AI logs页面的中文乱码问题
// @author       CC11001100
// @match        *://*/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // setInterval(() => {
    //     // 获取所有的<pre>标签
    //     const pres = document.querySelectorAll('pre');
    //     pres.forEach(function(pre) {
    //         // 使用textContent替换innerHTML，避免解析为HTML
    //         debugger;
    //         pre.textContent = decodeURIComponent(escape(pre.innerHTML));
    //     });
    // }, 1000);
    setInterval(() => {
        const metaElt = document.querySelector('meta[charset]');
        if (metaElt == null) {
            const htmlMetaElement = document.createElement('meta');
            htmlMetaElement.setAttribute('charset', 'UTF-8');
            document.querySelector('head').append(htmlMetaElement);
        }
    }, 1000);

})();