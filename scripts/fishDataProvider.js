const fishCollection = [
    {
        name: "Dory",
        food: "Plankton",
        species: "Blue Tang",
        length: 4,
        location: "Great Barrier Reef",
        image: "./images/bluetang.jpeg"
    },
    {
        name: "Nemo",
        food: "Plankton, Algae",
        species: "Clown Fish",
        length: 5,
        location: "Gulf of Mexico",
        image: "./images/nemo.jpeg"
    },
    {
        name: "Bruce",
        food: "Smaller Fish",
        species: "Great White Shark",
        length: 30,
        location: "Great Barrier Reef",
        image: "./images/shark.jpeg"
    }
]

export const useFish = () => {
    //.slice() allows you to return a copy of fishCollection
    return fishCollection.slice()
}

export const mostHolyFish = () => {
    const holyFish =[]

    for(const theFish of fishCollection){
        if(theFish.length % 3 === 0) {
            holyFish.push(theFish)
        }
    }
    return holyFish
}

export const soldierFish = () => {
    const soldiers = []

    for (const theFish of fishCollection) {
        if(theFish.length % 5 === 0 && theFish.length % 3 !== 0) {
            soldiers.push(theFish)
        }
    }
    return soldiers
}
export const nonHolyFish = () => {
    const regularFish = []

    for (const theFish of fishCollection) {
        if(theFish.length % 5 !== 0 && theFish.length % 3 !== 0) {
            regularFish.push(theFish)
        }
    }
    return regularFish
}