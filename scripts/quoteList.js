import {useQuote} from "./quoteDataProvider.js"
import {quoteAsHTML} from "./quote.js"

export const quoteList = () => {
    //gets reference to element on the DOM
    const contentElement = document.querySelector(".content--left")

    // collection of fish from FishDataProvider
    const quotes = useQuote()

    let quoteHTMLRepresentations = ""
    for(const currentQuoteObj of quotes){
        quoteHTMLRepresentations += quoteAsHTML(currentQuoteObj)
    }

    // updating HTML of DOM element with Fish List HTML
    contentElement.innerHTML += `
        <article class="quotes">
            ${quoteHTMLRepresentations}
        </article>
    `
}