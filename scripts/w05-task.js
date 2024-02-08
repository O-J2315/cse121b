/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById("temples");
let templeList = [];

/* async displayTemples Function */
const displayTemples = (listofTemples) => {
    listofTemples.forEach(temple => {
        let articleElement = document.createElement("ar");
        let templeNameElement = document.createElement("h3");
        templeNameElement.textContent = temple.templeName;
        let templeImageElement = document.createElement("img");
        templeImageElement.setAttribute("src", temple.imageUrl);
        templeImageElement.setAttribute("alt", temple.location);

        //Appending the name and the image elemetns to the article element.
        articleElement.appendChild(templeNameElement);
        articleElement.appendChild(templeImageElement);

        //Appending the hole article element to the main variable temples Element globally declared 
        templesElement.appendChild(articleElement);
    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();
    displayTemples(templeList);
}

/* reset Function */
const reset = () => {
    templesElement.innerHTML = "";
}

/* filterTemples Function */
const filterTemples = (temples)=>{
    reset();
    const filter = document.getElementById("filtered").value;
    switch(filter){
        case "utah" :
            displayTemples(temples.filter(temple=>temple.location.includes("Utah")));
            break;
        case "notutah":
            displayTemples(temples.filter(temple=>!temple.location.includes("Utah")));
            break;
        case "older":
            displayTemples(temples.filter(temple=>new Date(temple.dedicated) < new Date(1950, 0, 1)));
            break;
        case "all":
            displayTemples(temples);
            break;
    }
}
getTemples();
/* Event Listener */
document.getElementById("filtered").addEventListener("change", ()=> { filterTemples(templeList) } );