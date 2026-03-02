// ==UserScript==
// @name         Hide Hint Button 2
// @namespace    https://github.com/wimglenn/userscripts/
// @version      0.2
// @description  Hides the "Hint" button 2
// @include      https://www.chess.com/puzzles/rated
// @include      https://www.chess.com/daily
// @run-at       document-start
// @grant        none
// @updateURL    https://github.com/wimglenn/userscripts/raw/refs/heads/main/chess.com/no-hints2.user.js
// @downloadURL  https://github.com/wimglenn/userscripts/raw/refs/heads/main/chess.com/no-hints2.user.js
// ==/UserScript==

(function () {
  const addStyle = () => {
    if (!document.getElementById('hide-hint-style')) {
      const style = document.createElement('style');
      style.id = 'hide-hint-style';
      style.textContent = `
        button[data-cy="hint-move-button"] {
          display: none !important;
        }
      `;
      document.documentElement.appendChild(style);
    }
  };

  addStyle();
  new MutationObserver(addStyle).observe(document.documentElement, {
    childList: true,
    subtree: true
  });
})();
