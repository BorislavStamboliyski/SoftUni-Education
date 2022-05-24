function seriesCalculator(input){
    let name = input[0];
    let seasons = Number(input[1]);
    let episodes = Number(input[2]);
    let timePerEpisode = Number(input[3]);
    let advertisings = timePerEpisode * 0.2;
    let totalTimeEpisode = timePerEpisode + advertisings;
    let bonusTime = seasons * 10;
    let totalTime = Math.floor(seasons * (episodes * totalTimeEpisode) + bonusTime) ;

    console.log(`Total time needed to watch the ${name} series is ${totalTime} minutes.`);

}
seriesCalculator(["Game of Thrones",
"7",
"10",
"50"])	
