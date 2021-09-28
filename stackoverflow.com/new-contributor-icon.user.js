// ==UserScript==
// @name         New Contributor
// @namespace    https://github.com/wimglenn/userscripts/
// @version      0.1
// @description  Changes "👋 New contributor" into "💩 New contributor"
// @author       wim: https://stackoverflow.com/users/674039/wim
// @include      /^https?:\/\/\w*.?(stackexchange.com|stackoverflow.com|serverfault.com|superuser.com|askubuntu.com|stackapps.com|mathoverflow.net)\/questions/.*
// @grant        none
// ==/UserScript==

function changeNewContributorIcons() {
    "use strict";
    var bs = document.getElementsByClassName("js-new-contributor-label")
    for (var i = bs.length - 1; i >= 0; --i) {
        const newItem = document.createElement("span")
        newItem.innerHTML = "💩\xa0 New contributor"
        bs[i].parentNode.replaceChild(newItem, bs[i]);
    }
};

$(document).ready(function() {
  changeNewContributorIcons();
});
