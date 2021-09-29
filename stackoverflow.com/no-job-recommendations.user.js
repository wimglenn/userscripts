// ==UserScript==
// @name         No Job Recommendations
// @namespace    https://github.com/wimglenn/userscripts/
// @version      0.2
// @description  Hides the job recommendations spam from stack overflow user profile
// @author       wim: https://stackoverflow.com/users/674039/wim
// @include      https://stackoverflow.com/users/674039/*
// @grant        none
// ==/UserScript==

$(".activity-recommendations.js-jobs-recommendations.row").remove()
