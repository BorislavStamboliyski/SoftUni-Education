function building(input) {
    let index = 0;
    let floors = Number(input[index]);
    index++;
    let spaces = Number(input[index]);
    index++;
    for (let i = floors; i >= 1; i--) {
        let allFloors = "";
        for (let j = 0; j < spaces; j++) {
            if (i === floors) {
                allFloors = allFloors + `L${i}${j} `;
            } 
            if (i % 2 === 0 && i !== floors ){
                allFloors = allFloors + `O${i}${j} `;
            } 
            if (i % 2 !== 0 && i !== floors) {
                allFloors = allFloors + `A${i}${j} `;
            }
        } 
    console.log(allFloors);
    }
}
building(["4", "4"])