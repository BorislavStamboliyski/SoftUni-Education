function lunchBreak(input) {
    let name = input[0];
    let episode = Number(input[1]);  // vreme za episode
    let rest = Number(input[2]);    // vreme za pochivka
    let timeForWatch = rest - rest / 8 - rest / 4;
    if (timeForWatch >= episode) {
        let timeLeft = Math.ceil(timeForWatch - episode);
        console.log(`You have enough time to watch ${name} and left with ${timeLeft} minutes free time.`);
    } else {
        let timeNeeded = Math.ceil(episode - timeForWatch);
        console.log(`You don't have enough time to watch ${name}, you need ${timeNeeded} more minutes.`);
    }

}
lunchBreak(["Game of Thrones",
"60",
"96"])


