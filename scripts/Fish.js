export const FishAsHTML = (fishObj) => {
    return `
        <section class="fish card">
            <div><img  class="fish__image image--card" src="${fishObj.image}" /></div>
            <div class="fish__text">
            <div class="fish__name">${fishObj.name}</div>
            <div class="fish__species">${fishObj.species}</div>
            <div class="fish__length">${fishObj.length}</div>
            <div class="fish__location">${fishObj.location}</div>
            <div class="fish__diet">${fishObj.food}</div>
            </div>
        </section>
    `
}