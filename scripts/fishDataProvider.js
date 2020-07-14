const fishCollection = [
    {
        name: "Dory",
        food: "Plankton",
        species: "Blue Tang",
        length: '4 in.',
        location: "Great Barrier Reef",
        image: "./images/bluetang.jpeg"
    },
    {
        name: "Nemo",
        food: "Plankton, Algae",
        species: "Clown Fish",
        length: "5in.",
        location: "Gulf of Mexico",
        image: "./images/nemo.jpeg"
    },
    {
        name: "Bruce",
        food: "Smaller Fish",
        species: "Great White Shark",
        length: "8 ft.",
        location: "Great Barrier Reef",
        image: "./images/shark.jpeg"
    }
]

export const useFish = () => {
    //.slice() allows you to return a copy of fishCollection
    return fishCollection.slice()
}

export const addFish = (fish) => {
    fishCollection.push(fish)
}