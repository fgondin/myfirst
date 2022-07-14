var limiteInf = 51, limiteSup = 13, suporte;

if (limiteInf > limiteSup){
        suporte = limiteSup;
        limiteSup = limiteInf;
        limiteInf = suporte;
}
while (limiteInf <= limiteSup) {
    if (limiteInf % 2 === 0) {
        console.log (limiteInf);
    }
    limiteInf++;
}
