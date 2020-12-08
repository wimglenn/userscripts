// ==UserScript==
// @name         Advent Of Code Leaderboard Star Timestamps
// @namespace    https://github.com/wimglenn/userscripts/
// @version      0.2
// @description  Adds a column for time of last star on private leaderboards when order=stars
// @author       Wim Glenn
// @include      https://adventofcode.com/*/leaderboard/private/view/*order=stars
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // pad the header row so that it still lines up with the starboard
    var header = document.getElementsByClassName("privboard-days")[0]
    var dayPad = document.createElement('span')
    var w = 9
    dayPad.innerHTML = " ".repeat(w)
    header.parentNode.insertBefore(dayPad, header)

    // figure out the most recently unlocked day
    var privboardDays = document.getElementsByClassName("privboard-days")[0]
    for (var i = 0; i < 25; ++i) {
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
        var currentDaySpan = privboardRow.children[currentDay + 1]
        var currentDayClass = currentDaySpan.getAttribute("class")
        var newSpan = document.createElement('span')
        var lastStarTime = starCounts[i].title.split(" ").pop()
        newSpan.innerHTML = lastStarTime.padStart(w - 1, " ") + " "
        if (currentDayClass == "privboard-star-both") {
            // if they've solved the current day's puzzle, emphasize their time
            newSpan.innerHTML = "<em>" + newSpan.innerHTML + "</em>"
        }
        else if (currentDayClass == "privboard-star-firstonly") {
            // if they've solved the first part only, emphasize less strongly
            newSpan.setAttribute("class", "privboard-star-firstonly")
        }
        privboardRow.insertBefore(newSpan, starCounts[i])
    }
})();
