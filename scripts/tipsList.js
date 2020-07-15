import {useTip} from "./tipsDataProvider.js"
import {tipAsHTML} from "./tips.js"

export const tipList = () => {
    //gets reference to element on the DOM
    const contentElement = document.querySelector(".content--right")

    // collection of fish from FishDataProvider
    const tips = useTip()

    let tipHTMLRepresentations = ""
    for(const currentTipObj of tips){
        tipHTMLRepresentations += tipAsHTML(currentTipObj)
    }

    // updating HTML of DOM element with Fish List HTML
    contentElement.innerHTML += `
        <aside class="tips">
        <section class="tipHeader">Helpful Tips:</section>
            ${tipHTMLRepresentations}
        </aside>
    `
}