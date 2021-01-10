"use strict"

window.addEventListener("load", Initialise);

//Globale variabelen

function Initialise()
{
    //Inlezen van alle elementen
    //Toevoegen Eventlisteners

    //fetch
    fetch('https://raw.githubusercontent.com/tobiashungwe/CvTobiasHungwe/main/docs/api/pages.json').then(function (resp) {
    return resp.json();
    }).then(function (data) {
    console.log(data);
    FillDivWithPageDisplayBoxes(data)


    });
    
}

//public functions
function FillDivWithPageDisplayBoxes(pages)
{

    
    for(let page in pages)
    {
        console.log(page);
    }
}
