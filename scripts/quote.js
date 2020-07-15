export const quoteAsHTML = (quoteObj) => {
    return `
    <section class="quote card">
         <div class="quote__text">${quoteObj.text}</div>
         <div class="quote__author">${quoteObj.author}</div>
    </section>
    `
}
        