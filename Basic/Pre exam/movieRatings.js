function movieRatings(input){
    let index = 0;
    let countMovies = Number(input[index]);
    index++;
    let totalRating = 0;
    let maxRating = 0;
    let movieMaxRate = "";
    let movieMinRate = "";
    let minRating = Number.MAX_SAFE_INTEGER;
    let averageRAte = 0;

    for (let i = 0; i < countMovies; i++) {
        let movieName = input[index];
        index++;
        let rating = Number(input[index]);
        index++;
        if (rating < minRating) {
            minRating = rating;
            movieMinRate = movieName;
        }
        if (rating > maxRating){
            maxRating = rating;
            movieMaxRate = movieName;
        }
        totalRating += rating;
    }
    averageRAte = totalRating / countMovies;
    console.log(`${movieMaxRate} is with highest rating: ${maxRating.toFixed(1)}`);
    console.log(`${movieMinRate} is with lowest rating: ${minRating.toFixed(1)}`);
    console.log(`Average rating: ${averageRAte.toFixed(1)}`)
}
movieRatings(["3", "Interstellar", "8.5", "Dangal", "8.3", "Green Book", "8.2"])
