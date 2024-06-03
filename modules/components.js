/* 

    <div class="box">
        <img class="artist-pic" src="https://picsum.photos/seed/picsum/150/150" alt="img">
        <h3 class="artist-name">Artist name</h3>
    </div>

*/

// const cEl = (element) => {
//     document.createElement(element) -> non capisco perche se assegnata ad elementi di boxelgen non funziona 
// }

// crea singolo elemento
const boxElGen = (obj) => {
    
    console.log(obj)

    const boxContainerEl = document.createElement('div')
    const boxEl = document.createElement('div');
    const imgEl = document.createElement('img');
    const titleEl = document.createElement('h3');

    boxContainerEl.className = 'box-container'
    boxEl.className = 'box';

    imgEl.src = obj.image;
    imgEl.className = 'artist-pic';
    imgEl.alt = obj.name;

    titleEl.className = 'artist-name';
    titleEl.textContent = obj.name;

    boxContainerEl.append(imgEl, titleEl, boxEl);
    return boxContainerEl;
}

// crea lista elementi
const boxListGen = () => {

    const boxContainerEl = document.createElement('div');

    boxContainerEl.className = 'fav-artist';

    return boxContainerEl;

}

// crea bottoni 
const buttonGen = (text, id) => {
    const button = document.createElement('button')
    
    button.textContent = text; 
    button.id = id;

    return button
}

export {
    boxElGen,
    boxListGen,
    buttonGen,
}




