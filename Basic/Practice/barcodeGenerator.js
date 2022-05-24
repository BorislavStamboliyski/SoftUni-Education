function barcodeGenerator(input){
    let index = 0;
    let start = Number(input[index]);
    index++;
    let stop = Number(input[index]);
    let barcode = "";
    for (let i = start ; i <= stop; i++){
        let e = i.toString();
        let a = e.charAt(3);
        let b = e.charAt(2);
        let c = e.charAt(1);
        let d = e.charAt(0);
        if (a % 2 !== 0 && b % 2 !== 0 && c % 2 !== 0 && d % 2 !== 0){
            barcode += (i + " ") ;
        }
    }
    console.log(barcode);
}
barcodeGenerator(["1365",
"5877"])
