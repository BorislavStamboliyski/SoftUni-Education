function pcStore(input) {
    // cenite sa v dolari 1 = 1.57
    let priceCPU = Number(input[0]);
    let priceVGA = Number(input[1]);
    let priceRAM = Number(input[2]);
    let countRAM = Number(input[3]);
    let discount = Number(input[4]);
    let total = 0;
    let priceRams = 0;
    let priceCPULeva =0;
    let priceVGALeva = 0;
    let priceRAMLeva = 0;
    priceCPULeva = priceCPU * 1.57;
    priceVGALeva = priceVGA * 1.57;
    priceRAMLeva = priceRAM * 1.57;
    priceRams = priceRAMLeva * countRAM;
  
    total = (priceCPULeva - priceCPULeva * discount) + (priceVGALeva - priceVGALeva * discount) + priceRams;
    
    console.log(`Money needed - ${total.toFixed(2)} leva.`);
}
pcStore(["1200",
"850",
"120",
"4",
"0.1"])
