// this module creates the list of fish to add to the DOM
import {mostHolyFish, soldierFish, nonHolyFish} from "./FishDataProvider.js"
import {FishAsHTML} from "./Fish.js"


const contentElement = document.querySelector(".content--left")

const addFishToDOM = (theArrayOfFish) => {
    let fishHTMLRepresentations = ""
    for (const currentFishObj of theArrayOfFish) {
        fishHTMLRepresentations += FishAsHTML(currentFishObj)
    }
    contentElement.innerHTML += `
    <article class="fishes">
        ${fishHTMLRepresentations} 
    </article> 
    `
}

export const FishList = () => {
    //gets reference to element on the DOM
    

    const holyFish = mostHolyFish()
    addFishToDOM(holyFish)

    const soldiers = soldierFish()
    addFishToDOM(soldiers)

    const plebs = nonHolyFish()
    addFishToDOM(plebs)
}