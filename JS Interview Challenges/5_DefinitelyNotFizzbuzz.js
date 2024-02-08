function awardBonuses(){
    let str = " ";
    for(let i=1; i<=100;i++){
        i % 3 == 0 && i % 5 != 0 ? str= "Vacation!" : 
        i % 5 == 0 && i % 3 != 0 ? str= "$100,000 bonus!" :
        i % 5 == 0 && i % 3 == 0 ? str= "JACKPOT! 1 Million and a Yacht!" : str = ":(";
        console.log(i + " - " + str)
    }
    return "end of display, thanks for watching"
}

console.log(awardBonuses());