    // ==UserScript==
    // @name Custom Gamesense Themes
    // @namespace https://gamesense.pub/forums/*
    // @author Nexxed & AnonVodka
    // @version 1.0.8
    // @match https://gamesense.pub/forums/*
    // @run-at document-start
    // @require http://code.jquery.com/jquery-3.4.1.min.js
    // @require  https://gist.github.com/raw/2625891/waitForKeyElements.js
    // @grant GM_setValue
    // @grant GM_getValue
    // ==/UserScript==

    // this is where you can edit which theme to use within the repository
    // if you want to use the dark.css theme, enter "dark"
    // otherwise, use the file name without the css extension (important)
    // See available themes here: https://github.com/Nexxed/Gamesense-Themes/tree/master/themes

    var defaultColors = {
        "1 normal": "#b4e61e",
        "1 hovered": "#e4ff5e",

        "2 normal": "#fc0",
        "2 hovered": "#ffe478",

        "4 normal": "#60a0dc",
        "4 hovered": "#80d6ff",

        "5 normal": "#e61515",
        "5 hovered": "#ff4545",

        "6 normal": "#60a0dc",
        "6 hovered": "#80d6ff",

        "7 normal": "#58d794",
        "7 hovered": "#98fdc8",

        "8 normal": "#fc0",
        "8 hovered": "#ffe478",

        "9 postedBy": "#d4d4d4"
    }

    function addCSS(css, isLink, extra) {
        var style = document.createElement(isLink ? 'link' : 'style');
        if (isLink) {
            style.rel = "stylesheet";
            style.href = css;
        } else {
            style.innerHTML = css;

        }
        style.type = "text/css";
        style.id = extra;
        document.getElementsByTagName("head")[0].appendChild(style);
    }
    else {
        style.innerHTML = css;

    function addCustomTheme(theme) {
        addCSS(`https://rawcdn.githack.com/Nexxed/Gamesense-Themes/fc348c086bb36eb78265772d07ebe9e8e9bff59b/themes/${theme}.css`, true, "themeURL");
    }

    function removeCustomTheme() {
        $("#themeURL").remove();
    }

    function changeUsergroupCSS(usergroup, type, color) {
        $(`#usergroupCSS-${usergroup}-${type}`).remove();
        if (usergroup == "1" || usergroup == "2" || usergroup == "5" || usergroup == "7" || usergroup == "8") {
            if (type == "hovered") {
                addCSS(`.pun a:hover.usergroup-${usergroup} { font-weight: 700; color: ${color} !important; }`, false, `usergroupCSS-${usergroup}-${type}`);
            } else if (type == "normal") {
                addCSS(`.pun .usergroup-${usergroup} { color: ${color} !important; }`, false, `usergroupCSS-${usergroup}-${type}`);
            }
        } else {
            if (type == "hovered") {
                addCSS(`.pun a:hover.usergroup-${usergroup} { color: ${color} !important; }`, false, `usergroupCSS-${usergroup}-${type}`);
            } else if (type == "normal") {
                addCSS(`.pun .usergroup-${usergroup} { color: ${color} !important; }`, false, `usergroupCSS-${usergroup}-${type}`);
            } else if (type == "postedBy") {
                addCSS(`#bisexual-user { color: ${color} !important; #font-weight: 700; }`, false, `usergroupCSS-${usergroup}-${type}`)
            }
    }
    style.type = "text/css";
    style.id = extra;
    document.getElementsByTagName("head")[0].appendChild(style);
}

function addCustomTheme(theme) {
    addCSS(`https://rawcdn.githack.com/Nexxed/Gamesense-Themes/fc348c086bb36eb78265772d07ebe9e8e9bff59b/themes/${theme}.css`, true, "themeURL");
}
function removeCustomTheme() {
    $("#themeURL").remove();
}

function changeUsergroupCSS(usergroup, type, color) {
    $(`#usergroupCSS-${usergroup}-${type}`).remove();
    if (usergroup == "1" || usergroup == "2" || usergroup == "5" || usergroup == "7" || usergroup == "8") {
        if (type == "hovered") {
            addCSS(`.pun a:hover.usergroup-${usergroup} { font-weight: 700; color: ${color} !important; }`, false, `usergroupCSS-${usergroup}-${type}`);
        }
        else if (type == "normal") {
            addCSS(`.pun .usergroup-${usergroup} { color: ${color} !important; }`, false, `usergroupCSS-${usergroup}-${type}`);
        }
    }
    else {
        if (type == "hovered") {
            addCSS(`.pun a:hover.usergroup-${usergroup} { color: ${color} !important; }`, false, `usergroupCSS-${usergroup}-${type}`);
        }
        else if (type == "normal") {
            addCSS(`.pun .usergroup-${usergroup} { color: ${color} !important; }`, false, `usergroupCSS-${usergroup}-${type}`);
        }
        else if (type== "postedBy") {
            addCSS(`#bisexual-user { color: ${color} !important; #font-weight: 700; }`, false, `usergroupCSS-${usergroup}-${type}`)
        }
    }
}

    async function addPostedByCSS() {
        waitForKeyElements(".byuser", function () {
            $(".byuser").each(function () {
                var user = $(this).text().split("by ")[1];
                if (user) {
                    $(this).html(`by <a id="bisexual-user"></a>`);
                    $(this).children("#bisexual-user").text(user);
                }
            });
        });
    }

    function addSettingsMenu(isIndex) {
        addCSS(`
            .settingsMenu {
                display: none;
                position: fixed;
                z-index: 1;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                overflow: hidden;
                background-color: #020202;
                background-color: rgba(0,0,0,0.4);
                font: 68.75%/1.4545em Verdana, Helvetica, Arial, sans-serif;
            }

            .settingsMenu-content {
                position: relative;
                background-color: #1b1b1b;
                margin: 15% auto;
                border: 1px solid #3e3e3e;
                padding-bottom: 20px;
                width: 45%;
            }

            .settingsMenu-content input {
                background-color: #212122;
                color: #ccc;
                border: 1px solid #3e3e3e;
                font-size: 10px;
                font-family: verdana,helvetica,arial,sans-serif;
                margin-left: 4px;
            }

            .close_settings {
                color: #d4d4d4;
                float: right;
                font-size: 18px;
                font-weight: bold;
            }

            .close_settings:hover,
            .close_settings:focus {
                color: #d0d0d0;
                text-decoration: none;
                cursor: pointer;
            }

            .settingsMenu-header {
                padding: 2px 16px;
                color: white;
            }
            .settingsMenu-header h2 {
                margin-left: 4px;
            }
            .settingsMenu-header input[type=button]  {
                width: 47%;
            }
            .settingsMenu-header .seperator {
                margin-left: 3px;
                margin-top: 3px;
            }

            .settingsMenu-body {
                padding: 2px 16px;
            }

            .settingsMenu-body #settingsTab {
                display: block;
            }
            #settingsTab > input[type=text] {
                width: 50%;
                margin-bottom: 3px;
            }
            #settingsTab > label {
                position: absolute;
                margin-top: 1px;
            }

            .settingsMenu-body #colorsTab {
                display: none;
            }
            #colorsTab > input {
                margin-bottom: 3px;
            }
            #colorsTab > input[type=button] {
                width: 30%;
            }
            #colorsTab > input[type=text] {
                width: 50%;
            }

            .settingsMenu-body input[type=checkbox] {
                position: relative;
                cursor: pointer;
            }
        .settingsMenu-body input[type=checkbox]:before {
                content: '';
                display: block;
                position: absolute;
                width: 10px;
                height: 10px;
                top: 0;
                left: 0;
                border: 1px solid #3e3e3e;
                color: #ccc;
                background-color: #212122;
            }
            .settingsMenu-body input[type=checkbox]:checked:after {
                content: '';
                display: block;
                width: 2px;
                height: 5px;
                border: solid #ccc;
                border-width: 0 2px 2px 0;
                -webkit-transform: rotate(45deg);
                -ms-transform: rotate(45deg);
                transform: rotate(45deg);
                position: absolute;
                top: 2px;
                left: 4px;
            }
            .settingsMenu-body select {
                display: block;
                background-color: #212122;
                color: #ccc;
                border: 1px solid #3e3e3e;
                font-size: 10px;
                font-family: verdana,helvetica,arial,sans-serif;
                margin-left: 4px;
                margin-bottom: 3px;
            }

            .settingsMenu-footer {
                padding: 2px 16px;
                color: white;
            }
        `, false, 'settingsMenuCSS')

        var htmlCode = `
        <div id='settings_menu' class='settingsMenu'>
            <div class='settingsMenu-content'>
                <div class='settingsMenu-header'>
                    <h2>Custom theme settings
                        <span class='close_settings'>&times;</span>
                    </h2>
                    <input type='button' id='settingsBtn' value='Settings'>
                    <input type='button' id='colorsBtn' value='Colors'>
                    <div class='seperator'></div>
                </div>
                <div class='settingsMenu-body'>
                    <div id='settingsTab'>
                        <input type='checkbox' id='toggleCustomTheme'>
                        <label for='toggleCustomTheme'>Change forum theme</label>
                        <br>
                        <input type='checkbox' id='toggleBetterLinks'>
                        <label for='toggleBetterLinks'>Open post links in new tab</label>
                        <select id='customTheme'>
                            <option value='dark'>Dark</option>
                            <option value='dark-blue'>Dark blue</option>
                        </select>
                        <input type='text' id='customCSS' placeholder='https://example.com/stylesheet.css' value=''> Custom css link<br>
                        <input type='text' id='forumMotto' placeholder='A cool motto' value=''> Forum motto<br>
                        <input type='text' id='forumMottoCSS' placeholder='color: #ffffff' value=''> Forum motto css<br>
                        ${isIndex ? `
                        <input type='checkbox' id='showShoutbox'>
                        <label for='showShoutbox'>Show shoutbox</label><br>
                        <input type='text' id='shoutboxSize' placeholder='213' value='213'> Shoutbox size<br>
                        ` : ``}
                    </div>
                    <div id='colorsTab'>
                        <input type='text' id='1 normal' value='#b4e61e'> Admin color<br>
                        <input type='text' id='1 hovered' value='#e4ff5e'> Admin hovered color<br>
                        <input type='text' id='2 normal' value='#fc0'> Mod color<br>
                        <input type='text' id='2 hovered' value='#ffe478'> Mod hovered color<br>
                        <input type='text' id='4 normal' value='#60a0dc'> Member color<br>
                        <input type='text' id='4 hovered' value='#80d6ff'> Member hovered color<br>
                        <input type='text' id='5 normal' value='#e61515'> Premium color<br>
                        <input type='text' id='5 hovered' value='#ff4545'> Premium hovered color<br>
                        <input type='text' id='6 normal' value='#60a0dc'> Banned color<br>
                        <input type='text' id='6 hovered' value='#80d6ff'> Banned hovered color<br>
                        <input type='text' id='7 normal' value='#58d794'> Lua-Mod color<br>
                        <input type='text' id='7 hovered' value='#98fdc8'> Lua-Mod hovered color<br>
                        <input type='text' id='8 normal' value='#fc0'> Com-Mod color<br>
                        <input type='text' id='8 hovered' value='#ffe478'> Com-Mod hovered color<br>
                        <input type='text' id='9 postedBy' value='#d4d4d4'> Posted by color<br>
                        <input type='button' id='saveBtn' value='Save colors'>
                        <input type='button' id='loadBtn' value='Load colors'>
                        <input type='button' id='defaultBtn' value='Reset to default'>
                    </div>
                </div>
            </div>
        </div>`;

        $('body').append(htmlCode)
    }

    (async function () {

        function changeTheme() {
            if (GM_getValue('toggleCustomTheme') == true) {
                removeCustomTheme();
                addCustomTheme(GM_getValue('customTheme'));
            }
        }

        function loadCustomCSS(link) {
            if ($("#customCSSLink"))
                $("#customCSSLink").remove();
            var link = link || GM_getValue("customCSSLink") || "";
            if (link.length > 0)
                addCSS(link, true, "customCSSLink");
        }

        function changeShoutboxSize(size) {
            if ($("#shoutboxSizeCSS"))
                $("#shoutboxSizeCSS").remove();
            var size = size || GM_getValue("shoutboxSize") || "213";
            addCSS(`#shout > div:nth-of-type(1) { height: ${size}px !important; }`, false, "shoutboxSizeCSS")
        }

        function changeShoutbox() {
            $('.blockform')[0].style.display = GM_getValue("showShoutbox") || "";
        }

        function changeForumMotto() {
            var motto = GM_getValue("forumMotto") || "";
            $("#brddesc")[0].innerHTML = motto;
        }

        function addForumMottoCSS(css) {
            if ($("#forummottoCSS"))
                $("#forummottoCSS").remove();
            var css = css || GM_getValue("forumMottoCSS") || "";
            if (css.length > 0)
                addCSS(css, false, "forummottoCSS");
        }

        function betterLinks(a) {
            if(a) {
                $(".blockpost .box .inbox .postbody .postright .postmsg a, div.postsignature.postmsg a").each(function() {
                    // ignore usergroup links
                    for(var i = 0; i < 10; i++)
                        if($(this).hasClass(`usergroup-${i}`)) return;

                    // make them open in a new tab when clicked
                    $(this).attr("target", "_blank");
                })
            } else {
                $(".blockpost .box .inbox .postbody .postright .postmsg a, div.postsignature.postmsg a").each(function() {
                    // ignore usergroup links
                    for(var i = 0; i < 10; i++)
                        if($(this).hasClass(`usergroup-${i}`)) return;

                    // make them open in a new tab when clicked
                    $(this).removeAttr("target");
                })
            }
        }

        changeTheme();
        addPostedByCSS();
        loadCustomCSS();

        while (!document.querySelector("body")) {
            await new Promise(r => setTimeout(r, 0));
        }

        var isIndex = window.location.href.indexOf("index.php") != -1 || window.location.href == "https://gamesense.pub/forums/";
        if ($('.blockform')[0] != undefined && isIndex) {
            changeShoutbox();
        }

        changeForumMotto();
        addForumMottoCSS();

        addSettingsMenu(isIndex);
        while (!document.querySelector("#settings_menu")) {
            addSettingsMenu(isIndex);
            await new Promise(r => setTimeout(r, 0));
        }

        $($($(".pun #brdwelcome ul li")[2]).children()[0]).append(` • <a href="#" id="open_settings">Custom theme settings</a>`)

        function loadUsergroupColors() {
            $("#colorsTab > input[type=text]").each(function (idx, b) {
                var group = $(b)[0].id.split(" ")[0];
                var type = $(b)[0].id.split(" ")[1];
                var settings = JSON.parse(GM_getValue(`usergroup-${group}-${type}`))
                if (settings.id == group) {
                    $(b)[0].value = settings.color
                }
                changeUsergroupCSS(settings.id, type, settings.color)
            });
        }

        var openSettingsMenu = document.getElementById("open_settings");
        var settingsMenu = document.getElementById("settings_menu");
        var closeButton = document.getElementsByClassName("close_settings")[0];

        var settingsBtn = document.getElementById("settingsBtn");
        var colorsBtn = document.getElementById("colorsBtn");
        var settingsTab = document.getElementById("settingsTab");
        var colorsTab = document.getElementById("colorsTab");

        var saveBtn = document.getElementById("saveBtn");
        var loadBtn = document.getElementById("loadBtn");
        var defaultBtn = document.getElementById("defaultBtn");

        var toggleCustomTheme = document.getElementById("toggleCustomTheme");
        var toggleBetterLinks = document.getElementById("toggleBetterLinks");
        var customTheme = document.getElementById("customTheme");
        var customCSS = document.getElementById("customCSS");
        var forumMotto = document.getElementById("forumMotto");
        var forumMottoCSS = document.getElementById("forumMottoCSS");

        openSettingsMenu.onclick = function () {
            settingsMenu.style.display = "block";
        };
        closeButton.onclick = function () {
            settingsMenu.style.display = "none";
        };

        settingsBtn.onclick = function () {
            settingsTab.style.display = "block";
            colorsTab.style.display = "none";
        };
        colorsBtn.onclick = function () {
            colorsTab.style.display = "block";
            settingsTab.style.display = "none";
        };
        toggleCustomTheme.onclick = function () {
            GM_setValue('toggleCustomTheme', toggleCustomTheme.checked);
            if (GM_getValue('toggleCustomTheme') == true) {
                changeTheme();
            } else {
                removeCustomTheme();
            }
        };
        toggleBetterLinks.onclick = function () {
            GM_setValue('toggleBetterLinks', toggleBetterLinks.checked);
            betterLinks(GM_getValue('toggleBetterLinks'));
        };

        customTheme.onchange = function () {
            GM_setValue('customTheme', customTheme.value);
            changeTheme();
        }
        customCSS.onchange = function (s) {
            var link = customCSS.value;
            if (link.length == 0) {
                if ($("#customCSSLink"))
                    $("#customCSSLink").remove();
            } else {
                loadCustomCSS(link);
            }
            GM_setValue("customCSSLink", link)
        }

        forumMotto.onchange = function (s) {
            GM_setValue('forumMotto', forumMotto.value);
            changeForumMotto();
        }
        forumMottoCSS.onchange = function (s) {
            var css = forumMottoCSS.value;
            if (css.length == 0) {
                if ($("#forummottoCSS"))
                    $("#forummottoCSS").remove();
            } else {
                addForumMottoCSS(css);
            }
            GM_setValue("forumMottoCSS", css)
        }

        if (isIndex) {
            var showShoutbox = document.getElementById("showShoutbox");
            var shoutboxSize = document.getElementById("shoutboxSize");

            showShoutbox.onclick = function (s) {
                GM_setValue("showShoutbox", showShoutbox.checked ? "block" : "none")
                changeShoutbox()
            };
            shoutboxSize.onchange = function (s) {
                var size = $(s.target)[0].value;
                if (size.length == 0) {
                    if ($("#shoutboxSizeCSS"))
                        $("#shoutboxSizeCSS").remove();
                } else {
                    changeShoutboxSize(size);
                }
                GM_setValue("shoutboxSize", size)
            };
            shoutboxSize.value = GM_getValue("shoutboxSize");
            showShoutbox.checked = GM_getValue("showShoutbox") == "block" ? true : false;
        }

        $("#colorsTab > input[type=text]").on("change", function (s) {
            var group = $(s.target)[0].id.split(" ")[0];
            var type = $(s.target)[0].id.split(" ")[1];
            var clr = $(s.target)[0].value;
            changeUsergroupCSS(group, type, clr);
        });

        saveBtn.onclick = function () {
            $("#colorsTab > input[type=text]").each(function (idx, b) {
                var group = $(b)[0].id.split(" ")[0];
                var type = $(b)[0].id.split(" ")[1];
                var clr = $(b)[0].value;
                GM_setValue(`usergroup-${group}-${type}`, JSON.stringify({
                    id: group,
                    color: clr
                }))
            });
        }
        loadBtn.onclick = function () {
            loadUsergroupColors()
        }
        defaultBtn.onclick = function () {
            $("#colorsTab > input[type=text]").each(function (idx, b) {
                var group = $(b)[0].id.split(" ")[0];
                var type = $(b)[0].id.split(" ")[1];
                var clr = defaultColors[`${group} ${type}`];
                $(b)[0].value = clr
                changeUsergroupCSS(group, type, clr)
            });
        }

        toggleCustomTheme.checked = GM_getValue('toggleCustomTheme') || false;
        toggleBetterLinks.checked = GM_getValue('toggleBetterLinks') || false;
        customTheme.value = GM_getValue('customTheme') || "";
        customCSS.value = GM_getValue("customCSSLink") || "";
        forumMotto.value = GM_getValue("forumMotto") || "";
        forumMottoCSS.value = GM_getValue("forumMottoCSS") || "";

        betterLinks(toggleBetterLinks.checked);
        loadUsergroupColors()
        changeShoutboxSize();
    })();
async function addPostedByCSS() {
    waitForKeyElements (".byuser", function() {
        $(".byuser").each(function () {
            var user = $(this).text().split("by ")[1];
            if (user) {
                $(this).html(`by <a id="bisexual-user"></a>`);
                $(this).children("#bisexual-user").text(user);
            }
        });
    });
}

function addSettingsMenu() {
    addCSS(`
        .settingsMenu {
            display: none;
            position: fixed;
            z-index: 1;
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            background-color: #020202;
            background-color: rgba(0,0,0,0.4);
            font: 68.75%/1.4545em Verdana, Helvetica, Arial, sans-serif;
        }

        .settingsMenu-content {
            position: relative;
            background-color: #1b1b1b;
            margin: 15% auto;
            border: 1px solid #3e3e3e;
            padding-bottom: 20px;
            width: 45%;
        }

        .settingsMenu-content input {
            background-color: #212122;
            color: #ccc;
            border: 1px solid #3e3e3e;
            font-size: 10px;
            font-family: verdana,helvetica,arial,sans-serif;
            margin-left: 4px;
        }

        .close_settings {
            color: #d4d4d4;
            float: right;
            font-size: 18px;
            font-weight: bold;
        }

        .close_settings:hover,
        .close_settings:focus {
            color: #d0d0d0;
            text-decoration: none;
            cursor: pointer;
        }

        .settingsMenu-header {
            padding: 2px 16px;
            color: white;
        }
        .settingsMenu-header h2 {
            margin-left: 4px;
        }
        .settingsMenu-header input[type=button]  {
            width: 47%;
        }
        .settingsMenu-header .seperator {
            margin-left: 3px;
            margin-top: 3px;
        }

        .settingsMenu-body {
            padding: 2px 16px;
        }

        .settingsMenu-body #settingsTab {
            display: block;
        }
        #settingsTab > input[type=text] {
            width: 50%;
        }
        #settingsTab > label {
            position: absolute;
            margin-top: 1px;
        }

        .settingsMenu-body #colorsTab {
            display: none;
        }
        #colorsTab > input {
            margin-bottom: 2px;
        }
        #colorsTab > input[type=button] {
            width: 30%;
        }
        #colorsTab > input[type=text] {
            width: 50%;
        }

        .settingsMenu-body input[type=checkbox] {
            position: relative;
            cursor: pointer;
        }
       .settingsMenu-body input[type=checkbox]:before {
            content: "";
            display: block;
            position: absolute;
            width: 10px;
            height: 10px;
            top: 0;
            left: 0;
            border: 1px solid #3e3e3e;
            color: #ccc;
            background-color: #212122;
        }
        .settingsMenu-body input[type=checkbox]:checked:after {
            content: "";
            display: block;
            width: 2px;
            height: 5px;
            border: solid #3e3e3e;
            border-width: 0 2px 2px 0;
            -webkit-transform: rotate(45deg);
            -ms-transform: rotate(45deg);
            transform: rotate(45deg);
            position: absolute;
            top: 2px;
            left: 4px;
        }
        .settingsMenu-body select {
            display: block;
            background-color: #212122;
            color: #ccc;
            border: 1px solid #3e3e3e;
            font-size: 10px;
            font-family: verdana,helvetica,arial,sans-serif;
            margin-left: 4px;
            margin-bottom: 3px;
        }

        .settingsMenu-footer {
            padding: 2px 16px;
            color: white;
        }
    `, false, "settingsMenuCSS")

    $("body").append(`
        <div id="settings_menu" class="settingsMenu">
            <div class="settingsMenu-content">
                <div class="settingsMenu-header">
                    <h2>Custom theme settings
                        <span class="close_settings">&times;</span>
                    </h2>
                    <input type="button" id="settingsBtn" value="Settings">
                    <input type="button" id="colorsBtn" value="Colors">
                    <div class="seperator"></div>
                </div>
                <div class="settingsMenu-body">
                    <div id="settingsTab">
                        <input type="checkbox" id="toggleCustomTheme">
                        <label for="toggleCustomTheme">Change forum theme</label>
                        <select id="customTheme">
                            <option value="dark">Dark</option>
                            <option value="dark-blue">Dark blue</option>
                        </select>
                        <input type="text" id="customCSS" placeholder="none"> Custom css link<br>
                    </div>
                    <div id="colorsTab">
                        <input type="text" id="1 normal" value="#b4e61e"> Admin color<br>
                        <input type="text" id="1 hovered" value="#e4ff5e"> Admin hovered color<br>

                        <input type="text" id="2 normal" value="#fc0"> Mod color<br>
                        <input type="text" id="2 hovered" value="#ffe478"> Mod hovered color<br>

                        <input type="text" id="4 normal" value="#60a0dc"> Member color<br>
                        <input type="text" id="4 hovered" value="#80d6ff"> Member hovered color<br>

                        <input type="text" id="5 normal" value="#e61515"> Premium color<br>
                        <input type="text" id="5 hovered" value="#ff4545"> Premium hovered color<br>

                        <input type="text" id="6 normal" value="#60a0dc"> Banned color<br>
                        <input type="text" id="6 hovered" value="#80d6ff"> Banned hovered color<br>

                        <input type="text" id="7 normal" value="#58d794"> Lua-Mod color<br>
                        <input type="text" id="7 hovered" value="#98fdc8"> Lua-Mod hovered color<br>

                        <input type="text" id="8 normal" value="#fc0"> Com-Mod color<br>
                        <input type="text" id="8 hovered" value="#ffe478"> Com-Mod hovered color<br>

                        <input type="text" id="9 postedBy" value="#d4d4d4"> Posted by color<br>

                        <input type="button" id="saveBtn" value="Save colors">
                        <input type="button" id="loadBtn" value="Load colors">
                        <input type="button" id="defaultBtn" value="Reset to default">
                    </div>
                </div>
            </div>
        </div>
    `)
}

(async function () {

    function changeTheme() {
        if (GM_getValue('toggleCustomTheme') == true) {
            removeCustomTheme();
            addCustomTheme(GM_getValue('customTheme'));
        }
    }

    function loadCustomCSS(link) {
        if ($("#customCSSLink"))
            $("#customCSSLink").remove();
        var link = link || GM_getValue("customCSSLink");
        addCSS(link, true, "customCSSLink");
    }

    changeTheme();
    addPostedByCSS();
    loadCustomCSS();

    addSettingsMenu();
    while(!document.querySelector("#settings_menu")) {
        addSettingsMenu();
        await new Promise(r => setTimeout(r, 0));
    }

    $(".pun #brdmenu ul").append(`<input type="button" id="open_settings" name="open_settings" value="Open custom theme settings">`)

    function loadUsergroupColors() {
        $("#colorsTab > input[type=text]").each(function(idx, b) {
            var group =$(b)[0].id.split(" ")[0];
            var type =$(b)[0].id.split(" ")[1];
            var settings = JSON.parse(GM_getValue(`usergroup-${group}-${type}`))
            if (settings.id == group) {
                $(b)[0].value = settings.color
            }
            changeUsergroupCSS(settings.id, type, settings.color)
        });
    }

    var openSettingsMenu = document.getElementById("open_settings");
    var settingsMenu = document.getElementById("settings_menu");
    var closeButton = document.getElementsByClassName("close_settings")[0];

    var settingsBtn = document.getElementById("settingsBtn");
    var colorsBtn = document.getElementById("colorsBtn");
    var settingsTab = document.getElementById("settingsTab");
    var colorsTab = document.getElementById("colorsTab");

    var saveBtn = document.getElementById("saveBtn");
    var loadBtn = document.getElementById("loadBtn");
    var defaultBtn = document.getElementById("defaultBtn");

    var toggleCustomTheme = document.getElementById("toggleCustomTheme");
    var customTheme = document.getElementById("customTheme");
    var customCSS = document.getElementById("customCSS");

    openSettingsMenu.onclick = function () {
        settingsMenu.style.display = "block";
    };
    closeButton.onclick = function () {
        settingsMenu.style.display = "none";
    };

    settingsBtn.onclick = function () {
        settingsTab.style.display = "block";
        colorsTab.style.display = "none";
    };
    colorsBtn.onclick = function () {
        colorsTab.style.display = "block";
        settingsTab.style.display = "none";
    };
    toggleCustomTheme.onclick = function () {
        GM_setValue('toggleCustomTheme', toggleCustomTheme.checked);
        if (GM_getValue('toggleCustomTheme') == true) {
            changeTheme();
        }
        else {
            removeCustomTheme();
        }
    };
    customTheme.onchange = function () {
        GM_setValue('customTheme', customTheme.value);
        changeTheme();
    }
    customCSS.onchange = function(s) {
        var link = $(s.target)[0].value;
        if (link.length == 0) {
            if ($("#customCSSLink"))
                $("#customCSSLink").remove();
        }
        else {
            loadCustomCSS(link);
        }
        GM_setValue("customCSSLink", link)
    }

    $("#colorsTab > input[type=text]").on("change", function(s) {
        var group =$(s.target)[0].id.split(" ")[0];
        var type =$(s.target)[0].id.split(" ")[1];
        var clr =$(s.target)[0].value;
        changeUsergroupCSS(group, type, clr);
    });

    saveBtn.onclick = function() {
        $("#colorsTab > input[type=text]").each(function(idx, b) {
            var group =$(b)[0].id.split(" ")[0];
            var type =$(b)[0].id.split(" ")[1];
            var clr =$(b)[0].value;
            GM_setValue(`usergroup-${group}-${type}`, JSON.stringify({id: group, color: clr}))
        });
    }
    loadBtn.onclick = function() {
        loadUsergroupColors()
    }
    defaultBtn.onclick = function() {
        $("#colorsTab > input[type=text]").each(function(idx, b) {
            var group =$(b)[0].id.split(" ")[0];
            var type =$(b)[0].id.split(" ")[1];
            var clr = defaultColors[`${group} ${type}`];
            $(b)[0].value = clr
            changeUsergroupCSS(group, type, clr)
        });
    }

    toggleCustomTheme.checked = GM_getValue('toggleCustomTheme');
    customTheme.value = GM_getValue('customTheme');
    customCSS.value = GM_getValue("customCSSLink");

    changeTheme();
    loadCustomCSS();
    loadUsergroupColors();
})();
