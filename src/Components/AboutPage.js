"use strict";
exports.__esModule = true;
require("../styles/about.css");
var AboutPage = /** @class */ (function () {
    function AboutPage() {
    }
    AboutPage.prototype.renderAbout = function () {
        var root = document.querySelector('#root');
        root.innerHTML = " \n    <div class=\"main-about\">\n        <div class=\"aboutContent-photo\">\n            <div class=\"aboutContent\">\n                <div class=\"contentTitle\">\n                team #1\n                </div>\n                <div class=\"contentText\">   \n                For two weeks, our team was working hard to create this site. \n                <br>Here you can find out about new events and book a ticket for them. \n                <br><br>Quick and easy to use.\n                </div>\n\n                <div class=\"btns\">\n                    <button class='btns_more'>Home page</button>\n                </div>\n            </div>\n            <div class=\"photo\">\n                <div id=\"image_01\">\n                    <div id=image_01_hover><p1>OUR</p1></div>\n                    <div id=image_01_hover02><p1><strong>TEAM</strong></p1></div>\n                    <div id=image_01_hover03> </div>\n                </div>\n            </div>\n        </div>\n\n        <div class=\"title-about\">\n            <div class=\"rotating-text\">\n                <p>Our team:</p>\n                <p>\n                <span class=\"word alizarin\">Yana.</span>\n                <span class=\"word wisteria\">Sasha.</span>\n                <span class=\"word peter-river\">Danik.</span>\n                <span class=\"word emerald\">Zhenya.</span>\n                </p>\n            </div>\n        </div>\n\n        <div class=\"members-wrap\">\n            <div class=\"member\">\n                <div class=\"member-photo yana\"></div>\n                <div class=\"member-info\">\n                    <strong class=\"name\">Yana Karcheuskaya</strong><br>\n                    Student, SamSolution worker.\n                </div>\n            </div>\n\n            <div class=\"member\">\n            <div class=\"member-photo sanya\"></div>\n                <div class=\"member-info\">\n                    <strong>Aleksander Sluka</strong><br>\n                    Student, SamSolution worker.\n                </div>\n            </div>\n            <div class=\"member\">\n                <div class=\"member-photo danik\"></div>\n                <div class=\"member-info \">\n                    <strong>Daniil Lebedzev</strong><br>\n                    Student, SamSolution worker.\n                </div>\n            </div>\n            <div class=\"member\">\n                <div class=\"member-photo zhenya\"></div>\n                <div class=\"member-info\">\n                    <strong>Evgeniy Davydovsky</strong><br>\n                    Student, SamSolution worker.\n                </div>\n            </div>\n        </div>\n    </div>\n    \n    <div class=\"side-bar\">\n        <div class=\"photoSide photo1\"></div>\n        <div class=\"photoSide photo2\"></div>\n        <div class=\"photoSide photo3\"></div>\n        <div class=\"photoSide photo4\"></div>\n    </div>\n    ";
        var words = document.querySelectorAll(".word");
        words.forEach(function (word) {
            var letters = word.textContent.split("");
            word.textContent = "";
            letters.forEach(function (letter) {
                var span = document.createElement("span");
                span.textContent = letter;
                span.className = "letter";
                word.append(span);
            });
        });
        var currentWordIndex = 0;
        var maxWordIndex = words.length - 1;
        words[currentWordIndex].style.opacity = "1";
        var rotateText = function () {
            var currentWord = words[currentWordIndex];
            var nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
            // rotate out letters of current word
            Array.from(currentWord.children).forEach(function (letter, i) {
                setTimeout(function () {
                    letter.className = "letter out";
                }, i * 80);
            });
            // reveal and rotate in letters of next word
            nextWord.style.opacity = "1";
            Array.from(nextWord.children).forEach(function (letter, i) {
                letter.className = "letter behind";
                setTimeout(function () {
                    letter.className = "letter in";
                }, 340 + i * 80);
            });
            currentWordIndex =
                currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
        };
        rotateText();
        setInterval(rotateText, 4000);
    };
    return AboutPage;
}());
exports["default"] = AboutPage;
/* alert(document.documentElement.clientWidth); */ 
