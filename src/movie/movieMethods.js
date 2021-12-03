const Movie = require("./movieModels.js");

exports.addMovie = async(movieObj) => {
    try{
        const movie = await new Movie(movieObj)
        await movie.save()
        console.log(`added ${movie.title}`)
    } catch (error){
        console.log(error)
    }
}
// exports.listMovies = async(movieObj) => {
//     try{
//         const allMovies = await Movie.find().toArray();
//         console.log(allMovies)
//     } catch(error){
//         console.log(error)
//     }
// }