export const locationAsHTML = (locationObj) => {
    return `
    <section class="location card">
        <div><img class="location__image image--card" src="${locationObj.image}" /></div>
        <div class="location__name">${locationObj.name}</div>
       <div class="location__link"> <a href=${locationObj.link}>${locationObj.linkCaption}</a>                                        
       <div class="location__description">${locationObj.description}</div>
    </section>
        
    `
}