const quoteCollection = [
    {
        text: "When you fish for love, bait with your heart, not your brain.",
        author:"Mark Twain",
    },
    
    
]

export const useQuote = () => {
    //.slice() allows you to return a copy of fishCollection
    return quoteCollection.slice()
}

export const addQuote = (quote) => {
    quoteCollection.push(quote)
}