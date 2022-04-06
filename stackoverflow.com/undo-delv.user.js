// ==UserScript==
// @name         Retract delete vote link
// @namespace    https://github.com/wimglenn/userscripts/
// @version      0.1
// @description  Updates the delete hyperlink on posts which you have already delvoted for
// @author       wim: https://stackoverflow.com/users/674039/wim
// @include      /^https?:\/\/\w*.?(stackexchange.com|stackoverflow.com|serverfault.com|superuser.com|askubuntu.com|stackapps.com|mathoverflow.net)\/questions/.*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=stackoverflow.com
// @grant        none
// ==/UserScript==

$('button[data-prompt="Retract your vote to delete? You won\'t be able to vote again on this post."]').each(function() {
$(this).text($(this).text().replace("Delete", "Undo-delv"))})
