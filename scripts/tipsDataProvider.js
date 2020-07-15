const tipCollection = [
    {
        text: "Maintain proper pH levels.",
        
    },
    {
        text: "Clean the tank at least once a week.",
        
    },
    {
        text: "Show each individual fish that you care about it.",
        
    }
    
    
]

export const useTip = () => {
    //.slice() allows you to return a copy of fishCollection
    return tipCollection.slice()
}

export const addTip = (tip) => {
    tipCollection.push(tip)
}