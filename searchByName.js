const getBeers = require('./data')

function main(keyword) {
    console.log('keyword:', keyword)
    // Tip: string.prototype.includes()
    const beers = getBeers();
    const searchResults = beers.filter((beer) => beer.name.includes(keyword))
    searchResults.forEach((beer) => console.log(beer.name))
}

main(process.argv[2])

// Usage: node searchByName.js <keyword>
// Example: node searchByName.js Rabbit