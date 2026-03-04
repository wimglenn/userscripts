// ==UserScript==
// @name         Hide Hint Button 2
// @namespace    https://github.com/wimglenn/userscripts/
// @version      0.3
// @description  Hides the "Hint" button 2
// @include      https://www.chess.com/puzzles/rated
// @include      https://www.chess.com/daily
// @run-at       document-start
// @grant        none
// @updateURL    https://github.com/wimglenn/userscripts/raw/refs/heads/main/chess.com/no-hints2.user.js
// @downloadURL  https://github.com/wimglenn/userscripts/raw/refs/heads/main/chess.com/no-hints2.user.js
// ==/UserScript==

(function () {
  const style = document.createElement('style');
  style.textContent = `
    button[data-cy="hint-move-button"],
    button:has(svg[data-glyph="device-bulb-glow"]) {
      display: none !important;
    }
  `;
  document.documentElement.appendChild(style);
})();
