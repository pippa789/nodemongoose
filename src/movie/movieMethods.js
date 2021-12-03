const { Mongoose, AggregationCursor } = require("mongoose");
const Movie = require("./movieModels.js");

exports.addMovie = async(movieObj) => {
    try{
        const movie = await new Movie(movieObj)
        await movie.save()
        console.log(`added ${movie.title}`);
        mongoose.connection.close();
    } catch (error){
        console.log(error)
    }
}
exports.listMovies = async(movieObj) => {
    try{
        console.log(await Movie.find({}));
        mongoose.connection.close();
    } catch(error){
        console.log(error)
    }
};
exports.deleteMovie = async(movieObj) =>{
    try{
        console.log(await Movie.deleteOne({}));
        console.log(`you have deleted ${movie.title}`);
        mongoose.connection.close();
    } catch (error){
        console.log(error)
    }
}