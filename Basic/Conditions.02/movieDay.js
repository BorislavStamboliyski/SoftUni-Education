function movieDay(input) {
    let timeForPictures = Number(input[0]);
    let countScenes = Number(input[1]);
    let timePerScene = Number(input[2]);
    let timeForTerrain = timeForPictures * 0.15;
    let totaltime = countScenes * timePerScene + timeForTerrain;
    let diff = Math.abs(totaltime - timeForPictures);
    if (totaltime <= timeForPictures) {
        console.log(`You managed to finish the movie on time! You have ${Math.round(diff)} minutes left!`);
    } else {
        console.log(`Time is up! To complete the movie you need ${Math.round(diff)} minutes.`);
    }
}
movieDay(["60",
"15",
"3"])
