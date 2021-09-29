// ==UserScript==
// @name         New Contributor
// @namespace    https://github.com/wimglenn/userscripts/
// @version      0.2
// @description  Changes the emoji on 'New contributor' labels from WAVING HAND SIGN into PILE OF POO
// @author       wim: https://stackoverflow.com/users/674039/wim
// @include      /^https?:\/\/\w*.?(stackexchange.com|stackoverflow.com|serverfault.com|superuser.com|askubuntu.com|stackapps.com|mathoverflow.net)\/questions/.*
// @grant        none
// ==/UserScript==

$(".svg-icon.iconWave").replaceWith("💩\xa0")
