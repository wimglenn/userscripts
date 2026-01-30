// ==UserScript==
// @name         Hide Hint Button
// @namespace    https://github.com/wimglenn/userscripts/
// @version      0.2
// @description  Hides the "Hint" button
// @include      https://www.chess.com/puzzles/rated
// @grant        none
// @updateURL    https://github.com/wimglenn/userscripts/raw/refs/heads/main/chess.com/no-hints.user.js
// @downloadURL  https://github.com/wimglenn/userscripts/raw/refs/heads/main/chess.com/no-hints.user.js
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
