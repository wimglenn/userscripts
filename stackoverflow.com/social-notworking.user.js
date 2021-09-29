// ==UserScript==
// @name         Social Notworking
// @namespace    https://github.com/wimglenn/userscripts/
// @version      0.2
// @description  Hides the "Know someone who can answer? Share a link to this question via email, Google+, Twitter, or Facebook." spam from questions
// @author       wim: https://stackoverflow.com/users/674039/wim
// @include      /^https?:\/\/\w*.?(stackexchange.com|stackoverflow.com|serverfault.com|superuser.com|askubuntu.com|stackapps.com|mathoverflow.net)\/questions/.*
// @grant        none
// ==/UserScript==

$(".bottom-notice.bottom-share-links").remove()
