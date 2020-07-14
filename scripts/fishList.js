// this module creates the list of fish to add to the DOM
import {useFish} from "./FishDataProvider.js"
import {FishAsHTML} from "./Fish.js"

export const FishList = () => {
    //gets reference to element on the DOM
    const contentElement = document.querySelector(".content--left")

    // collection of fish from FishDataProvider
    const fishes = useFish()

    let fishHTMLRepresentations = ""
    for(const currentFishObj of fishes){
        fishHTMLRepresentations += FishAsHTML(currentFishObj)
    }

    // updating HTML of DOM element with Fish List HTML
    contentElement.innerHTML += `
        <article class="fishes">
            ${fishHTMLRepresentations}
        </article>
    `
}