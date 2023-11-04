function movies(data) {

    let movieInfo = [];

    for (let command of data) {
        if (command.includes('addMovie')) {

            let movieName = command.split('addMovie ')[1];
            let movieObj = {name: movieName};
            movieInfo.push(movieObj);

        } else if (command.includes('directedBy')) {

            let [movieName, director] = command.split(' directedBy ');
            let movie = movieInfo.find(movie => movie.name == movieName);

            if (movie) {

                movie['director'] = director;
            }

        }else if (command.includes('onDate')) {

            let [movieName, date] = command.split(' onDate ');
            let movie = movieInfo.find(movie => movie.name == movieName);

            if (movie) {
                
                movie['date'] = date;
            }

        }
    }

    for(let movie of movieInfo) {
        if (movie.name && movie.director && movie.date) {
            let movieAsJSON = JSON.stringify(movie);
            console.log(movieAsJSON);
        }

    }
}

movies(['addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen']);

console.log('=============================================================================================');

movies(['addMovie The Avengers',
    'addMovie Superman',
    'The Avengers directedBy Anthony Russo',
    'The Avengers onDate 30.07.2010',
    'Captain America onDate 30.07.2010',
    'Captain America directedBy Joe Russo']);