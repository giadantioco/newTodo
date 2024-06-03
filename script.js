import { artists, artistTypes } from "./data/artists.js";
import { boxElGen, boxListGen, buttonGen } from "./modules/components.js";



// filtrando le cards ->
const navEl = document.querySelector('.header')
const boxSectionEl = document.querySelector('.fav-artist')


const renderListForType = () => {

    artistTypes.forEach(type => {
        const btnType = buttonGen(`${type}`) 

        // qui appendo buttonGen fcn
        btnType.addEventListener('click', function () {
            const newArray = artists.filter(artist => artist.type === type)
            console.log(newArray.length ? newArray : 'artista non presente')
            //qui appendo la funzione carte filtrate e passo array
            renderListBox(newArray)
        })
        navEl.append(btnType)
    })
}



const renderListBox = (newArray) => {
    boxSectionEl.innerHTML = '';

    const boxList = boxListGen();

    newArray.forEach( artist => {
        const boxEl = boxElGen(artist)
        boxList.append(boxEl)
    })
    boxSectionEl.append(boxList)
}


// generare tante card quanti sono i DJ nella lista ->

const boxList = boxListGen();

artists.forEach(artist => {
    const boxEl = boxElGen(artist);
    boxList.append(boxEl);
});

boxSectionEl.append(boxList);
    

// for (let i = 0; i <= artists.length -1; i++) {
//     const boxEl = boxElGen(artists[i]);
//     boxList.append(boxEl);
// }


window.onload = boxSectionEl.append(boxList, renderListForType())


