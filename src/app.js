require("./db/connection")

const yargs = require("yargs");

const { addMovie, listMovies, deleteMovie, updateMovie } = require("./movie/movieMethods.js")

const app = async (args) => {
    switch (process.argv[2]){
        case "add":
            addMovie({ title: args.title, actor: args.actor})
            break;
        case "list":
            listMovies();
            break;
        case "del":
            deleteMovie({title: args.title, actor: args.actor});
            break;
        case "update":
            updateMovie({ title: args.title ,  actor: args.actor});
            break;
        default:
            console.log("Incorrect command")
        break;
    }
};
app(yargs.argv);