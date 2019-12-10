// class Data {
//     public url: string
//     constructor(url: string) {
//         this.url = url
//     }
//
//     public async getData() {
//         const response = await fetch(this.url);
//         return  await response.json();
//     }
// }
//
// const getRockMusicEvents:Data = new Data('http://localhost:3000/music');
// getRockMusicEvents.getData().then(data => renderItem(data[0].rock[0].events[0]));
//
// const getClassicMusicEvents: Data = new Data('http://localhost:3000/music');
// getClassicMusicEvents.getData().then(data => renderItem(data[0].rock[0].events[1]))
//
//
// function renderItem(data:object):void {
//     const element: HTMLElement = document.querySelector('body') as HTMLElement
//     for (const key in data) {
//         if (key !== 'img') {
//             element.innerHTML += `<li>${key}: ${data[key]}</li>`
//         } else {
//             element.innerHTML += `<img src=${data[key]}>`
//             break
//         }
//     }
// }
//
//
//
