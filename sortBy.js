const getBeers = require('./data')

function main(property) {
    console.log('property:', property)
    if (property === 'abv') {
        const beers = getBeers()
        const sorted = [...beers]
        sorted.sort((left, right) => left.abv - right.abv)
        sorted.forEach((beer) => console.log(`${beer.name}, ${beer.abv}`))
    }
}

main(process.argv[2])

// Usage: node sortBy.js <score|abv>
// Example: node sortBy.js score