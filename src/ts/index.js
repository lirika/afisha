// async function getData(url) {
//     // var data;
//     // fetch(url)
//     //     .then(response => response.json())
//     //     .then(categories => console.log(data = categories[0].rock[0].events));
//     let response = await fetch(url);
//     let result = await response.json()
//     let rockEvents = result[0].rock[0].events[0]
//     console.log(rockEvents)
//     renderEvent(rockEvents)
//
// }
//
// function renderEvent(event) {
//     let body = document.querySelector('body')
//     for (let key in event) {
//         if (key === 'img') {
//             body.innerHTML += `<img src=${event[key]}>`
//             break
//         }
//         body.innerHTML += `<li>${key}: ${event[key]}</li>`
//     }
// }
//
//
//
// getData('http://localhost:3000/music')
