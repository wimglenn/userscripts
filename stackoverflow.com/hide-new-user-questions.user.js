// ==UserScript==
// @name         Hide rep 1 user questions
// @namespace    https://github.com/wimglenn/userscripts/
// @version      0.2
// @description  Improve signal-to-noise ratio of the question feed on stackoverflow.com
// @author       wim: https://stackoverflow.com/users/674039/wim
// @match        stackoverflow.com*
// @match        stackoverflow.com/questions*
// @grant        none
// @updateURL    https://github.com/wimglenn/userscripts/raw/refs/heads/main/adventofcode.com/hide-new-user-questions.user.js
// @downloadURL  https://github.com/wimglenn/userscripts/raw/refs/heads/main/adventofcode.com/hide-new-user-questions.user.js
// ==/UserScript==

(function() {
    'use strict'

    function hide() {
        var things = document.getElementsByClassName("todo-no-class-here")
        var count = 0
        for (var i = 0; i < things.length; i++) {
            var t = things[i]
            if (t.title === "reputation score " && t.textContent === "1") {
                var listEl = t.closest('div[itemprop="itemListElement"]')
                listEl.remove()
                count += 1
            }
        }
        if (count > 0) {
            console.log(`Hid ${count} questions`)
        }
    }
    hide()
    const observer = new MutationObserver(() => hide())
    observer.observe(document.body, {
        childList: true,
        subtree: true
    })
})()
