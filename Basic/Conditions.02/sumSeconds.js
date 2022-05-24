function sumSeconds(input) {
    let firtTime = Number(input[0]);
    let secondTime = Number(input[1]);
    let thirdTime = Number(input[2]);
    let totalTime = firtTime + secondTime + thirdTime;
    let min = Math.floor(totalTime / 60);
    let second = totalTime % 60;
    if (second < 10) {
        console.log(`${min}:0${second}`);
    } else {
        console.log(`${min}:${second}`);
    }
}
   
sumSeconds(["14", "12", "10"]);