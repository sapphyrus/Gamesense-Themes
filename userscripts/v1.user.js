// ==UserScript==
// @name         Custom Gamesense Themes
// @namespace    https://gamesense.pub/forums/*
// @author       Nexxed
// @version      1.0.0
// @match        https://gamesense.pub/forums/*
// ==/UserScript==

// this is where you can edit which theme to use within the repository
// if you want to use the dark.css theme, enter "dark"
// otherwise, use the file name without the css extension (important)
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
    style.href = `https://rawcdn.githack.com/Nexxed/Gamesense-Themes/ded6f4d4ffc85cc0946d26ec9b9491b2027bbe4c/themes/${theme}.css`;
    document.getElementsByTagName("head")[0].appendChild(style);
})();