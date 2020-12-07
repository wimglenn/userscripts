// ==UserScript==
// @name         Advent Of Code Leaderboard Star Timestamps
// @namespace    https://github.com/wimglenn/userscripts/
// @version      0.1
// @description  Adds a column for time of last star on private leaderboards when order=stars
// @author       Wim Glenn
// @include      https://adventofcode.com/*/leaderboard/private/view/*order=stars
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    var header = document.getElementsByClassName("privboard-days")[0]
    var dayPad = document.createElement('span')
    var w = 9
    dayPad.innerHTML = " ".repeat(w)
    header.parentNode.insertBefore(dayPad, header)
    var starCounts = document.getElementsByClassName("star-count")
    for (var i = 1; i < starCounts.length; ++i) {
        var newSpan = document.createElement('span')
        // newSpan.setAttribute("class", "privboard-star-firstonly")
        var lastStarTime = starCounts[i].title.split(" ").pop()
        newSpan.innerHTML = lastStarTime.padStart(w - 1, " ") + " "
        starCounts[i].parentNode.insertBefore(newSpan, starCounts[i])
    }
})();
