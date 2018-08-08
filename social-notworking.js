// ==UserScript==
// @name         Social Notworking
// @namespace    https://github.com/wimglenn/userscripts/
// @version      0.1
// @description  Hides the "Know someone who can answer? Share a link to this question via email, Google+, Twitter, or Facebook." spam from questions
// @author       wim: https://stackoverflow.com/users/674039/wim
// @include      /^https?:\/\/\w*.?(stackexchange.com|stackoverflow.com|serverfault.com|superuser.com|askubuntu.com|stackapps.com|mathoverflow.net)\/questions/.*
// @grant        none
// ==/UserScript==

function removeSocialNetworkingCrap() {
    "use strict";
    var bs = document.getElementsByClassName("bottom-notice bottom-share-links")
    for (var i = bs.length - 1; i >= 0; --i) {
        bs[i].remove();
    }
};

document.ready(function() {
  removeSocialNetworkingCrap();
});
