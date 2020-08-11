// ==UserScript==
// @name		TWITCH-HACKS
// @namespace	TH
// @version		0.0.001
// @author		Siegfried0
// @description TWITCH-HACKS is an userscript to enhance the userexperience on twitch.
// @homepage    https://github.com/Siegfried0/twitch-hacks
// @source      https://github.com/Siegfried0/twitch-hacks
// @icon        https://github.com/Siegfried0/twitch-hacks/raw/master/images/twitch-hacks-low.png
// @icon64      https://github.com/Siegfried0/twitch-hacks/raw/master/images/twitch-hacks-64.png
// @updateURL   https://github.com/Siegfried0/twitch-hacks/raw/master/twitch-hacks.user.js
// @supportURL  https://github.com/Siegfried0/twitch-hacks/issues
// @include     /https://www\.twitch\.tv/*
// @run-at      document-idle
// @grant       none
// ==/UserScript==


// checks for channel specific point boni button and click it if found
let th_checkBoniButton = setInterval(function() {
    if (document.getElementsByClassName("tw-button tw-button--success tw-interactive") != 'undefined' && document.getElementsByClassName("tw-button tw-button--success tw-interactive").length >= 1) {
        document.getElementsByClassName("tw-button tw-button--success tw-interactive")[0].click();
    }
}, 10000); // chek all 10 seconds

