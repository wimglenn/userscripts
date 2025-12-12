// ==UserScript==
// @name           Advent Of Code Leaderboard Star Timestamps
// @namespace      https://github.com/wimglenn/userscripts/
// @version        1.0
// @description    Adds a column for time of last star on private leaderboards when order=stars
// @author         Wim Jeantine-Glenn
// @include        https://adventofcode.com/*/leaderboard/private/view/*order=stars
// @grant          none
// @updateURL      https://github.com/wimglenn/userscripts/raw/refs/heads/main/adventofcode.com/leaderboard-star-ts.user.js
// @downloadURL    https://github.com/wimglenn/userscripts/raw/refs/heads/main/adventofcode.com/leaderboard-star-ts.user.js
// ==/UserScript==

(function() {
    'use strict';

    // pad the header row so that it still lines up with the starboard
    var header = document.getElementsByClassName("privboard-days")[0]
    var dayPad = document.createElement('span')
    var w = 9
    dayPad.innerHTML = " ".repeat(w)
    header.parentNode.insertBefore(dayPad, header)

    var year = parseInt(document.URL.match("adventofcode.com/[0-9]{4}/")[0].slice(17, 21))
    var limit = year >= 2025 ? 12 : 25
    // figure out the most recently unlocked day
    var privboardDays = document.getElementsByClassName("privboard-days")[0]
    for (var i = 0; i < limit; ++i) {
        var link = privboardDays.children[i].href
        if ( !link ) {
            break
        }
    }
    var currentDay = i

    // for each user on the leaderboard ...
    var starCounts = document.getElementsByClassName("star-count")
    for (i = 1; i < starCounts.length; ++i) {
        var privboardRow = starCounts[i].parentNode
        if (starCounts[i].textContent === " 0*") {
            // pad rows with 0 starcount so they still align with others
            var newSpan = document.createElement('span')
            newSpan.innerHTML = "".padStart(w, " ")
            privboardRow.insertBefore(newSpan, starCounts[i])
            continue
        }
        var starGlyphs = privboardRow.children[2]
        var day = 0
        var currentDayClass = starGlyphs.getAttribute("class")
        day += starGlyphs.textContent.length
        while (day < currentDay) {
            starGlyphs = starGlyphs.nextSibling
            currentDayClass = starGlyphs.getAttribute("class")
            day += starGlyphs.textContent.length
        }
        var newSpan = document.createElement('span')
        var lastStarTime = starCounts[i].title.split(" ").pop()
        newSpan.innerHTML = lastStarTime.padStart(w - 1, " ") + " "
        if (currentDayClass === "privboard-star-both") {
            // if they've solved the current day's puzzle, emphasize their time
            newSpan.innerHTML = "<em>" + newSpan.innerHTML + "</em>"
        }
        else if (currentDayClass === "privboard-star-firstonly") {
            // if they've solved the first part only, emphasize less strongly
            newSpan.setAttribute("class", "privboard-star-firstonly")
        }
        privboardRow.insertBefore(newSpan, starCounts[i])
    }
})();
