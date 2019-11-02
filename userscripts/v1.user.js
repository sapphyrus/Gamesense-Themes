// ==UserScript==
// @name         Custom Gamesense Themes
// @namespace    https://gamesense.pub/forums/*
// @author       Nexxed
// @version      1.0.3
// @match        https://gamesense.pub/forums/*
// @run-at       document-start
// @require      http://code.jquery.com/jquery-3.4.1.min.js
// ==/UserScript==

// this is where you can edit which theme to use within the repository
// if you want to use the dark.css theme, enter "dark"
// otherwise, use the file name without the css extension (important)
// See available themes here: https://github.com/Nexxed/Gamesense-Themes/tree/master/themes
var theme = "dark";

(function () {
    // "fix" by-user classes, adding the possibility for styling in the future
    $(".byuser").each(function () {
        var user = $(this).text().split("by ")[1];
        if (user) {
            $(this).html(`by <span id="bisexual-user"></span>`);
            $(this).children("#bisexual-user").text(user);
        }
    })

    // inject the style of the webpage with the one given by the user (or in this case, the repository"s "dark" theme)
    var style = document.createElement("link");
    style.rel = "stylesheet";
    style.type = "text/css";
    //                                                                 this id will be updated and all that
    style.href = `https://rawcdn.githack.com/Nexxed/Gamesense-Themes/9cf89320bce7e659ebbf754c55ae991868948595/themes/${theme}.css`;
    document.getElementsByTagName("head")[0].appendChild(style);
})();