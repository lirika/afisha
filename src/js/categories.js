let main = document.querySelector('.main');
let menu = document.querySelector('.menu');
let bgr = document.querySelector('.bgr');

let data = [
  {
    name: 'music',
    backgroundImage: 'https://wallpaperscave.ru/images/thumbs/wp-preview/800x500/18/03-30/music-guitar-35325.jpg',
    categories: [{ subname: 'rock' }, { subname: 'classic' }, { subname: 'pop' }],
  },
  {
    name: 'cinema',
    backgroundImage: 'http://media.filmz.ru/photos/full/filmz.ru_f_51571.jpg',
    categories: [{ subname: 'horror' }, { subname: 'comedy' }],
  },
  {
    name: 'art',
    backgroundImage: 'https://i.pinimg.com/originals/a7/94/04/a794047570121ac419ac9c7debe981e7.jpg',
    categories: [{ subname: 'paint' }, { subname: 'architecture' }],
  },
  {
    name: 'sport',
    backgroundImage:
      'https://cdn22.img.ria.ru/images/rsport/113897/03/1138970310_0:0:2615:1624_600x600_80_0_1_3303d47a50ae6f032cd9342de1a12806.jpg',
    categories: [{ subname: 'skiing' }, { subname: 'athletics' }],
  },
  /* {name:"sport", backgroundImage: "https://cdn22.img.ria.ru/images/rsport/113897/03/1138970310_0:0:2615:1624_600x600_80_0_1_3303d47a50ae6f032cd9342de1a12806.jpg", categories: [{subname:"skiing"},{subname:"athletics"}]}, */
];

function fillMenu() {
  let categName;
  let subNames;

  data.forEach(elCategory => {
    categName = elCategory.name;
    subNames = elCategory.categories.map(elSubcategory => elSubcategory.subname);
    backgrImg = elCategory.backgroundImage;

    let htmlStr = `<h1>${categName}</h1>
        <div class="subcategories">`;

    subNames.forEach(elSubcategoryName => {
      htmlStr += `<span>${elSubcategoryName}</span>
                <span>/</span>`;
    });

    htmlStr = htmlStr.slice(0, htmlStr.length - 14);
    htmlStr += `</div>`;

    let div = document.createElement('div');
    div.classList.add('category', categName);
    div.innerHTML = htmlStr;

    menu.append(div);
  });
}

fillMenu();

let parentH1;
let sub;

menu.addEventListener('click', function(event) {
  let el = event.target;

  if (el.tagName != 'H1') return;

  if (parentH1) {
    parentH1.classList.remove('selected');
    sub.setAttribute('style', 'display: none');
  }

  parentH1 = el.parentElement;
  sub = parentH1.lastElementChild;

  let url = data.find(el => el.name == parentH1.className.split(' ')[1]).backgroundImage;

  main.setAttribute(`style`, `background-image: url(${url})`);

  parentH1.classList.add('selected');

  let topBgr = menu.offsetTop + parentH1.offsetTop;
  sub.setAttribute('style', 'display: block');
  bgr.setAttribute(
    'style',
    ` display: inline;
                                top: ${topBgr}px;`,
  );
});
