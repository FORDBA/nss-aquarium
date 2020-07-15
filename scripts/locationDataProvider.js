const locationCollection = [
    {
        image: "./images/barrier-reef.jpeg",
        name:"Great Barrier Reef",
        link: "https://greatbarrierreef.org/",
        linkCaption: 'Great Barrier Reef Information',
        description: "One of Australia’s most remarkable natural gifts, the Great Barrier Reef is blessed with the breathtaking beauty of the world’s largest coral reef. The reef contains an abundance of marine life and comprises of over 3000 individual reef systems and coral cays and literally hundreds of picturesque tropical islands with some of the worlds most beautiful sun-soaked, golden beaches.",
        
    },
    {
        image: "./images/gulfofmexico.jpg",
        name: "Gulf of Mexico",
        link: "https://en.wikipedia.org/wiki/Gulf_of_Mexico/",
        linkCaption: 'Gulf of Mexico Information',
        description: "An ocean basin and a marginal sea of the Atlantic Ocean, largely surrounded by the North American continent.",
        
    }
    
]

export const useLocation = () => {
    //.slice() allows you to return a copy of fishCollection
    return locationCollection.slice()
}

export const addLocation = (location) => {
    locationCollection.push(location)
}