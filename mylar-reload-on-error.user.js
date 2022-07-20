// ==UserScript==
// @name        Mylar - Reload on Error
// @namespace   https://github.com/Sporkyy/
// @include     *://*:8090*
// @run-at      document-start
// @grant       none
// @version		  1.0
// @author      Todd Sayre
// @description	Reloads the page if Mylar throws an error
// @noframes
// ==/UserScript==

(() => {
  'use strict';

  document.title.includes('Internal Server Error') &&
    setTimeout(
      () => document.location.reload(),
      Math.trunc(Math.random() * 6 + 5) * 1000,
    );
})();
