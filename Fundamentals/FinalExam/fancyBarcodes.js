function fancyBarcodes(input) {
    let numberOfBarcodes = Number(input.shift(''));
    let pattern = /(@#{1,})(?<product>[A-Z]{1}[A-Za-z0-9]{4,}[A-Z]{1})\1/;
    let digit = /\d/g;
    let productGroup = '';
    for(let i = 0; i < numberOfBarcodes; i++) {
        if (pattern.test(input[i])) {
            let validDigit = digit.exec(input[i]);
            let validGroup = false
                while(validDigit !== null) {
                    validGroup = true;
                    productGroup += validDigit;
                    validDigit = digit.exec(input[i])
                }
            if (validGroup) {
                console.log(`Product group: ${productGroup}`);
                productGroup= ''
            } else {
                console.log(`Product group: 00`);
            }
        } else {
            console.log(`Invalid barcode`);
        }
    }

}

fancyBarcodes((["3",
"@#FreshFisH@#",
"@###Brea0D@###",
"@##Che4s6E@##"])
)

fancyBarcodes(["6",
"@###Val1d1teM@###",
"@#ValidIteM@#",
"##InvaliDiteM##",
"@InvalidIteM@",
"@#Invalid_IteM@#",
"@#ValiditeM@#"])	
