// ==UserScript==
// @name         No Job Recommendations
// @namespace    https://github.com/wimglenn/userscripts/
// @version      0.1
// @description  Hides the job recommendations spam from stack overflow user profile
// @author       wim: https://stackoverflow.com/users/674039/wim
// @include      https://stackoverflow.com/users/674039/*
// @grant        none
// ==/UserScript==

function removeJobsCrap() {
    "use strict";
    var bs = document.getElementsByClassName("activity-recommendations js-jobs-recommendations row")
    for (var i = bs.length - 1; i >= 0; --i) {
        bs[i].remove();
    }
};

$(document).ready(function() {
  removeJobsCrap();
});
