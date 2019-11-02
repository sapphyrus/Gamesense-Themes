// ==UserScript==
// @name         Custom Gamesense Themes
// @namespace    https://gamesense.pub/forums/*
// @author       Nexxed
// @version      1.0.3
// @match        https://gamesense.pub/forums/*
// ==/UserScript==

// this is where you can edit which theme to use within the repository
// if you want to use the dark.css theme, enter "dark"
// otherwise, use the file name without the css extension (important)
// See available themes here: https://github.com/Nexxed/Gamesense-Themes/tree/master/themes
// to disable the custom usergroup/username colors, set "replaceColors" to false
var theme = "dark";
var replaceColors = false;

var colors = {
    adminColor: "#b4e61e !important",
    modColor: "#fc0 !important",
    defaultColor: "#ffe478 !important",
    memberColor: "#ffe478 !important",
    premiumColor: "#e61515 !important",
    bannedColor: "#ffe478 !important",
    luaModColor: "#58d794 !important",
    comModColor: "#fc0 !important",
};

var hoverColors = {
    adminColor: "#b4e61e !important",
    modColor: "#fc0 !important",
    defaultColor: "#ffe478 !important",
    memberColor: "#ffe478 !important",
    premiumColor: "#e61515 !important",
    bannedColor: "#ffe478 !important",
    luaModColor: "#58d794 !important",
    comModColor: "#fc0 !important",
};


(function () {
    // "fix" by-user classes, adding the possibility for styling in the future
    if (replaceColors) {
        $(".byuser").each(function () {
            var user = $(this).text().split("by ")[1];
            if (user) {
                $(this).html(`by <span id="bisexual-user"></span>`);
                $(this).children("#bisexual-user").text(user);
            }
        })
    }

    function addGlobalStyle(css) {
        var head, style;
        head = document.getElementsByTagName('head')[0];
        if (!head) { return; }
        style = document.createElement('style');
        style.type = 'text/css';
        head.appendChild(style);
    };
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

    addCSS(`https://rawcdn.githack.com/Nexxed/Gamesense-Themes/9cf89320bce7e659ebbf754c55ae991868948595/themes/${theme}.css`, true);

    for (var i = 0; i < Object.keys(colors).length; i++) {
        if (i == 0 || i == 2 || i == 5 || i == 7 || i == 8) {
            addCSS(`.pun .usergroup-${i + 1} { font-weight: 700; color: ${colors[Object.keys(colors)[i]]}; }`, false);
            addCSS(`.pun a:hover.usergroup-${i + 1} { font-weight: 700; color: ${hoverColors[Object.keys(hoverColors)[i]]}; }`, false);
        }
        else {
            addCSS(`.pun .usergroup-${i + 1} { color: ${colors[Object.keys(colors)[i]]}; }`, false);
            addCSS(`.pun a:hover.usergroup-${i + 1} { color: ${hoverColors[Object.keys(hoverColors)[i]]}; }`, false);
        }
    }
})();
