function fishtank(input) {
    let length = Number(input[0]);   // duljina akvarium
    let wide = Number(input[1]);      // shirina akvarium
    let height = Number(input[2]);    // Visochina akvrium
    let percent = Number(input[3]);
    let volume = length * wide * height;  // obem na akvarium
    let water = volume / 1000;
    let neededvolume = water - (water * (percent/100));
    console.log(neededvolume);
}
fishtank(["105 ","77 ","89 ","18.5 "])