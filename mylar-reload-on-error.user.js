// ==UserScript==
// @name         Mylar - Reload on Error
// @namespace    https://github.com/Sporkyy/
// @version      1.0.1
// @description	 Reloads the page if Mylar throws an error
// @author       Sporkyy
// @match        *://localhost:8090/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// ==/UserScript==

(() => {
  'use strict';

  const randmm = (min, max) => Math.random() * (max - min) + min;

  const w = window;
  const dt = document.title;
  const e = 'Internal Server Error';
  const dl = document.location;
  const ms = randmm(5000, 10000);

  if (dt.includes(e)) w.setTimeout(() => dl.reload(), ms);
})();
