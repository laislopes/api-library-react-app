const fs = require("fs")

function getAllFavorites() {
    return JSON.parse( fs.readFileSync("favorites.json") )
}

function deleteFavoriteById(id) {
    const books = JSON.parse( fs.readFileSync("favorites.json") )
    
    const filteredBooks = books.filter( book => book.id !== id)
    fs.writeFileSync("favorites.json", JSON.stringify(filteredBooks))
}

function insertFavorite(id) {
    const books = JSON.parse( fs.readFileSync("books.json") )
    const favorites = JSON.parse( fs.readFileSync("favorites.json") )

    const addedBook = books.find( book => book.id === id)
    fs.writeFileSync("favorites.json", 
        JSON.stringify(!favorites.find(favorite => favorite.id === id) ? 
                                        [...favorites, addedBook] : favorites))
}

module.exports = {
    getAllFavorites,
    deleteFavoriteById,
    insertFavorite
}