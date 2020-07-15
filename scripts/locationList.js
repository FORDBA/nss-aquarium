import {useLocation} from "./locationDataProvider.js"
import {locationAsHTML} from "./locations.js"

export const locationList = () => {
    //gets reference to element on the DOM
    const contentElement = document.querySelector(".content--left")

    // collection of fish from FishDataProvider
    const locations = useLocation()

    let locationHTMLRepresentations = ""
    for(const currentLocationObj of locations){
        locationHTMLRepresentations += locationAsHTML(currentLocationObj)
    }

    // updating HTML of DOM element with Fish List HTML
    contentElement.innerHTML += `
        <article class="locations">
            ${locationHTMLRepresentations}
        </article>
    `
}