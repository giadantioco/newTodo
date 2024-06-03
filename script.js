import { artists, artistTypes } from "./data/artists.js";
import { boxElGen, boxListGen, buttonGen, searchBarEl } from "./modules/components.js";

// filtrando le cards ->
const navEl = document.querySelector('.header')
const boxSectionEl = document.querySelector('.fav-artist')

const renderListForType = () => {

    artistTypes.forEach(type => {
        const btnType = buttonGen(type)
        navEl.append(btnType)
        // console.log(type)

        // qui appendo buttonGen fcn
        btnType.addEventListener('click', function () {
            const newArray = artists.filter(artist => artist.type === type)
            console.log(newArray.length ? newArray: 'artista non presente')
            //qui appendo la funzione carte filtrate e passo array
            renderListBox(newArray)
        })
        
        // console.log(btnType)
    })
}

// reset btn
const renderResetBtn = () => {

    const btnReset = buttonGen('Reset')
    navEl.append(btnReset)
    // console.log(btnReset)
    btnReset.addEventListener('click', function () {

        renderListBox(artists)
    })

}

// search bar 

const renderSrcBar = () => {

    const searchBar = searchBarEl()
    navEl.append(searchBar)

    searchBar.addEventListener('input', function() {
        console.log('Search bar input event triggered');
        const searchValue = searchBar.value.toLowerCase()
        console.log('Search value:', searchValue);
        const filteredArtists = artists.filter(artist => artist.name.toLowerCase
        ().includes(searchValue))
        console.log('Filtered artists:', filteredArtists);
        
        renderListBox(filteredArtists)

    })

}


//  cards filtrate ->
const renderListBox = (newArray) => {
    // console.log(newArray)
    boxSectionEl.innerHTML = '';

    const boxList = boxListGen();

    newArray.forEach( artist => {
        const boxEl = boxElGen(artist)
        boxList.append(boxEl)
    })
    boxSectionEl.append(boxList)
    // console.log(boxList)
}

// generare tante card quanti sono i DJ nella lista ->

const boxList = boxListGen();

artists.forEach(artist => {
    const boxEl = boxElGen(artist);
    boxList.append(boxEl);
    
});
boxSectionEl.append(boxList);


window.onload = () => {
    renderListForType(),
    renderResetBtn(),
    renderSrcBar()
}


