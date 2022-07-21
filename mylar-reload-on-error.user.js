// ==UserScript==
// @name        Mylar - Reload on Error
// @namespace   https://github.com/Sporkyy/
// @match       *://*:8090*
// @run-at      document-idle
// @grant       none
// @version     1.1
// @author      Sporkyy
// @description	Reloads the page if Mylar throws an error
// @noframes
// ==/UserScript==

(() => {
  'use strict';

  const randmm = (min, max) => Math.random() * (max - min) + min;

  const dt = document.title;
  const e = 'Internal Server Error';
  const dl = document.location;
  const ms = randmm(5000, 10000);

  if (dt.includes(e)) setTimeout(() => dl.reload(), ms);
})();
