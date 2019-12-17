import '../styles/about.css';

export default class AboutPage {
  renderAbout():void {
    const root = document.querySelector('#root') as HTMLDivElement;
    root.innerHTML = ` 
    <div class="main-about">
        <div class="aboutContent-photo">
            <div class="aboutContent">
                <div class="contentTitle">
                team #1
                </div>
                <div class="contentText">   
                For two weeks, our team was working hard to create this site. 
                <br>Here you can find out about new events and book a ticket for them. 
                <br><br>Quick and easy to use.
                </div>

                <div class="btns">
                    <button class='btns_more'>Home page</button>
                </div>
            </div>
            <div class="photo">
                <div id="image_01">
                    <div id=image_01_hover><p1>OUR</p1></div>
                    <div id=image_01_hover02><p1><strong>TEAM</strong></p1></div>
                    <div id=image_01_hover03> </div>
                </div>
            </div>
        </div>

        <div class="title-about">
            <div class="rotating-text">
                <p>Out team:</p>
                <p>
                <span class="word alizarin">Yana.</span>
                <span class="word wisteria">Sasha.</span>
                <span class="word peter-river">Danik.</span>
                <span class="word emerald">Zhenya.</span>
                </p>
            </div>
        </div>

        <div class="members-wrap">
            <div class="member">
                <div class="member-photo"></div>
                <div class="member-info">
                    <strong class="name">Yana Karcheuskaya</strong><br>
                    Student, SamSolution worker.
                </div>
            </div>

            <div class="member">
            <div class="member-photo"></div>
                <div class="member-info">
                    <strong>Aleksander Sluka</strong><br>
                    Student, SamSolution worker.
                </div>
            </div>
            <div class="member">
                <div class="member-photo"></div>
                <div class="member-info">
                    <strong>Daniil Lebedzev</strong><br>
                    Student, SamSolution worker.
                </div>
            </div>
            <div class="member">
                <div class="member-photo"></div>
                <div class="member-info">
                    <strong>Evgeniy Davydovsky</strong><br>
                    Student, SamSolution worker.
                </div>
            </div>
        </div>
    </div>
    
    <div class="side-bar">
        <div class="photoSide photo1"></div>
        <div class="photoSide photo2"></div>
        <div class="photoSide photo3"></div>
        <div class="photoSide photo4"></div>
    </div>
    `;

    let words = document.querySelectorAll(".word");
    words.forEach(word => {
    let letters = word.textContent.split("");
    word.textContent = "";
    letters.forEach(letter => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
    });

    let currentWordIndex = 0;
    let maxWordIndex = words.length - 1;
    (words[currentWordIndex] as HTMLElement).style.opacity = "1";

    let rotateText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord =
        currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];
    // rotate out letters of current word
    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
        letter.className = "letter out";
        }, i * 80);
    });
    // reveal and rotate in letters of next word
    (nextWord as HTMLElement).style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i) => {
        letter.className = "letter behind";
        setTimeout(() => {
        letter.className = "letter in";
        }, 340 + i * 80);
    });
    currentWordIndex =
        currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
    };

    rotateText();
    setInterval(rotateText, 4000);
  }
}

/* alert(document.documentElement.clientWidth); */