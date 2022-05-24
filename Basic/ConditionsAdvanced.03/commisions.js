function commisions(input) {
    let town = input[0];
    let commision = Number(input[1]);
    let total = 0;
    if (town === "Sofia") {
        if (commision>= 0 && commision <= 500) {
            total = commision * 0.05;
            ;
      } else if (commision > 500 && commision <= 1000) {
            total = commision * 0.07;
            ;
      } else if (commision > 1000 && commision <= 10000) {
            total = commision * 0.08;
            ;
     } else if (commision > 10000) {
         total = commision * 0.12;
         ;
     } else {
          console.log("error"); 
        } 
    }   else if (town === "Varna") {
        if (commision>= 0 && commision <= 500) {
            total = commision * 0.045;
        } else if (commision > 500 && commision <= 1000) {
            total = commision * 0.075;
        } else if (commision > 1000 && commision <= 10000) {
            total = commision * 0.10;
        } else if (commision > 10000) {
            total = commision * 0.13;
        } else {
            console.log("error");
        }
    } else if (town === "Plovdiv") {
        if (commision>= 0 && commision <= 500) {
            total = commision * 0.055;
        } else if (commision > 500 && commision <= 1000) {
            total = commision * 0.08;
        } else if (commision > 1000 && commision <= 10000) {
            total = commision * 0.12;
        } else if (commision > 10000) {
            total = commision * 0.145;
        } else {
        console.log("error");
     }
    } else {
        console.log("error");
    }
    if (total > 0){
    console.log(total.toFixed(2))
    }
}
commisions(["Kaspichan",
"-50"])

