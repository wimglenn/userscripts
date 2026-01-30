// ==UserScript==
// @name         Hide Hint Button
// @namespace    https://github.com/wimglenn/userscripts/
// @version      0.1
// @description  Hides the "Hint" button
// @match        chess.com*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  const hideButton = () => {
    const btn = document.querySelector('button[data-cy="hint-move-button"]');
    if (btn) {
      btn.style.display = 'none';
    }
  };

  // Run immediately
  hideButton();

  // Catch dynamically-rendered cases (React/Vue/etc)
  const observer = new MutationObserver(hideButton);
  observer.observe(document.body, { childList: true, subtree: true });
})();
