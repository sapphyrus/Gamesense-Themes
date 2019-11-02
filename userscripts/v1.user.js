// ==UserScript==
// @name         Custom Gamesense Themes
// @namespace    https://gamesense.pub/forums/*
// @author       Nexxed AnonVodka
// @version      1.0.5
// @match        https://gamesense.pub/forums/*
// ==/UserScript==

// this is where you can edit which theme to use within the repository
// if you want to use the dark.css theme, enter "dark"
// otherwise, use the file name without the css extension (important)
// See available themes here: https://github.com/Nexxed/Gamesense-Themes/tree/master/themes
// to enable the custom usergroup/username colors, set "replaceColors" to true
// to enable the custom username colors for "posted by", set "customPostedByColor" to true
var theme = "dark";
var replaceColors = false;
var customPostedByColor = false;

var colors = {
    adminColor: "#b4e61e",
    modColor: "#fc0",
    defaultColor: "#ffe478",
    memberColor: "#ffe478",
    premiumColor: "#e61515",
    bannedColor: "#ffe478",
    luaModColor: "#58d794",
    comModColor: "#fc0",
};

var hoverColors = {
    adminColor: "#b4e61e",
    modColor: "#fc0",
    defaultColor: "#ffe478",
    memberColor: "#ffe478",
    premiumColor: "#e61515",
    bannedColor: "#ffe478",
    luaModColor: "#58d794",
    comModColor: "#fc0",
};

var postedByColor = "#b4e61e";

(function () {
    // "fix" by-user classes, adding the possibility for styling in the future
    function addCSS(css, isLink) {
        var style = document.createElement(isLink ? 'link' : 'style');
        if (isLink) {
            style.rel = "stylesheet";
            style.href = css;
        }
        else {
            style.innerHTML = css;

        }
        style.type = "text/css";
        document.getElementsByTagName("head")[0].appendChild(style);
    }

    addCSS(`https://rawcdn.githack.com/Nexxed/Gamesense-Themes/fc348c086bb36eb78265772d07ebe9e8e9bff59b/themes/${theme}.css`, true);

    if (replaceColors) {
        for (var i = 0; i < Object.keys(colors).length; i++) {
            if (i == 0 || i == 2 || i == 5 || i == 7 || i == 8) {
                addCSS(`.pun .usergroup-${i + 1} {
                    font-weight: 700;
                    color: ${colors[Object.keys(colors)[i]]} !important;
                }`, false);
                addCSS(`.pun a:hover.usergroup-${i + 1} {
                     font-weight: 700;
                     color: ${hoverColors[Object.keys(hoverColors)[i]]} !important;
                }`, false);
            }
            else {
                addCSS(`.pun .usergroup-${i + 1} {
                    color: ${colors[Object.keys(colors)[i]]} !important;
                }`, false);
                addCSS(`.pun a:hover.usergroup-${i + 1} {
                    color: ${hoverColors[Object.keys(hoverColors)[i]]} !important;
                }`, false);
            }
        }
    }

    if (customPostedByColor) {
        $(".byuser").each(function () {
            var user = $(this).text().split("by ")[1];
            if (user) {
                $(this).html(`by <a id="bisexual-user"></a>`);
                $(this).children("#bisexual-user").text(user);
            }
        });

        addCSS(`#bisexual-user {
            color: ${postedByColor} !important;
            #font-weight: 700;
        }`)
    }
})();
