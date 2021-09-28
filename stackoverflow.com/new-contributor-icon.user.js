// ==UserScript==
// @name         New Contributor
// @namespace    https://github.com/wimglenn/userscripts/
// @version      0.1
// @description  Changes the emoji on 'New contributor' labels from WAVING HAND SIGN into PILE OF POO
// @author       wim: https://stackoverflow.com/users/674039/wim
// @include      /^https?:\/\/\w*.?(stackexchange.com|stackoverflow.com|serverfault.com|superuser.com|askubuntu.com|stackapps.com|mathoverflow.net)\/questions/.*
// @grant        none
// ==/UserScript==

function changeNewContributorIcons() {
    "use strict";
    var bs = document.getElementsByClassName("svg-icon iconWave")
    for (var i = bs.length - 1; i >= 0; --i) {
        const newItem = document.createElement("span")
        newItem.innerHTML = "💩\xa0"
        bs[i].parentNode.replaceChild(newItem, bs[i]);
    }
};

$(document).ready(function() {
  changeNewContributorIcons();
});
