import DataService from "../services/DataService";
export default class CategoryPage {
    renderCategory(category: Array<object>): void {
        let menu = document.querySelector('.menu') as HTMLDivElement;
        let title: string;

        category.forEach((item,id) => {
            title = item.title;
            const wrapper = document.createElement('div');
           // wrapper.setAttribute('id','category'+id)
            wrapper.classList.add('category', title)
            const h1 = document.createElement('h1');
            h1.innerHTML = title;
            wrapper.appendChild(h1);
            h1.setAttribute('id','title-category'+id)
            const subwrapper = document.createElement( 'div');
            subwrapper.classList.add('subcategories');
            subwrapper.setAttribute('id', 'sub'+id)
            wrapper.appendChild(subwrapper);
            menu.appendChild(wrapper)
        })

        document.querySelectorAll('.category').forEach(div => {
            div.addEventListener('click', async e => {
                if(e.target != 'H1')
                    return;

               const getSub = new DataService()

                const results:Array<object> = await getSub.getSubCategory(e.target.id.slice(13))
                results.forEach(el => {
                   const subCategory = document.querySelector(`.subcategories #sub${el.categoryId}`);
                   let span = document.createElement('span');
                   span.innerHTML = el.title;
                   subCategory.appendChild(span)


                })

            })
        })

    }

    renderSubCategory(category: Array<object>) {



    }
}

// data.forEach(elCategory => {
//     categName = elCategory.name;
//     subNames = elCategory.categories.map(elSubcategory => elSubcategory.subname);
//     backgrImg = elCategory.backgroundImage;
//
//     let htmlStr = `<h1>${categName}</h1>
//         <div class="subcategories">`;
//
//     subNames.forEach(elSubcategoryName => {
//         htmlStr += `<span>${elSubcategoryName}</span>
//                 <span>/</span>`;
//     });
//
//     htmlStr = htmlStr.slice(0, htmlStr.length - 14);
//     htmlStr += `</div>`;
//
//     let div = document.createElement('div');
//     div.classList.add('category', categName);
//     div.innerHTML = htmlStr;
//
//     menu.append(div);
// });
// }
//
// fillMenu();
//
// let parentH1;
// let sub;
//
// menu.addEventListener('click', function(event) {
//     let el = event.target;
//
//     if (el.tagName != 'H1') return;
//
//     if (parentH1) {
//         parentH1.classList.remove('selected');
//         sub.setAttribute('style', 'display: none');
//     }
//
//     parentH1 = el.parentElement;
//     sub = parentH1.lastElementChild;
//
//     let url = data.find(el => el.name == parentH1.className.split(' ')[1]).backgroundImage;
//
//     main.setAttribute(`style`, `background-image: url(${url})`);
//
//     parentH1.classList.add('selected');
//
//     let topBgr = menu.offsetTop + parentH1.offsetTop;
//     sub.setAttribute('style', 'display: block');
//     bgr.setAttribute(
//         'style',
//         ` display: inline;
//                                 top: ${topBgr}px;`,
//     );