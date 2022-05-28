"use strict"

window.addEventListener("load", Initialise);

//Globale variabelen
let incomingPages; 
let navItems;

function Initialise()
{
    //Inlezen van alle elementen
    //Toevoegen Eventlisteners

    //fetch
    fetch('https://raw.githubusercontent.com/tobiashungwe/CvTobiasHungwe/main/docs/api/pages.json').then(function (resp) {
    return resp.json();
    }).then(function (data) {
    console.log(data);
    () => GetIncomingPages(data)

    });
    BindingElements();
    FillNavItems();

    
}

//public functions
function GetIncomingPages(data)
{
    
    for(let pages in data)
    {
        incomingPages = pages;
        
    }
}


function BindingElements() {
    navItems = document.querySelector('#divNavItems');
    
}

function FillNavItems() {
    for (let page in incomingPages)
    {
        
        const pageCard = document.createElement("div");
        const pageHeader = document.createElement("div");
        const pageBody = document.createElement("div");
        const pageImage = document.createElement("img"); 
        const bodyContent = document.createElement("p");
        const bodyTitle = document.createElement("h1");
        
        
        pageImage.src = page.icon;
        bodyContent.textContent = page.content;
        bodyTitle.textContent = page.title;
        
        pageHeader.appendChild(bodyTitle);
        pageBody.appendChild(bodyContent);
        pageCard.appendChild(pageHeader);
        pageCard.appendChild(pageBody);
        navItems.appendChild(pageCard);
        
    }
}