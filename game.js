const gradeElement = document.getElementById('grade')
const optionsElement = document.getElementById("options")
const btnElement = document.getElementsByClassName("btn")
const TurnElement = document.getElementById("Turn")
const LPleftElement = document.getElementById("LP")
const AttackElement = document.getElementById("Attack")
const DefensesElement = document.getElementById("Defenses")
const FaceElement = document.getElementById("Face")
const fuseElement = document.getElementById("fuse")
const quipElement = document.getElementById("Equip")
const mageElement = document.getElementById("Magic")
const trapElement = document.getElementById("trap")
const CardElement = document.getElementById("Cards")
const ResetElement = document.getElementById("Reset")


var turns = 0
var Attacks = 0
var Defense = 0
var Facedown = 0
var Fusion = 0
var Equip = 0
var Magic = 0
var Traps = 0
var Used = 0
var LifeP = 8000
var score = 101
gradeElement.innerText = "S POW" + " " + score

function startGame(score) {
    if (score >= 90) {
        gradeElement.innerText = "S POW" + " " + score
    }else if (score >= 80 && score < 90) {
        gradeElement.innerText = "A POW" + " " + score
    }else if (score >= 70 && score < 80){
        gradeElement.innerText = "B POW" + " " + score
    }else if (score >= 60 && score < 70){
        gradeElement.innerText = "C POW" + " " + score
    }else if (score >= 50 && score < 60){
        gradeElement.innerText = "D POW" + " " + score
    }else if (score >= 40 && score < 50){
        gradeElement.innerText = "D TEC" + " " + score
    }else if (score >= 30 && score < 40){
        gradeElement.innerText = "C TEC" + " " + score
    }else if (score >= 20 && score < 30){
        gradeElement.innerText = "B TEC" + " " + score
    }else if (score >= 10 && score < 20){
        gradeElement.innerText = "A TEC" + " " + score
    }else{
        gradeElement.innerText = "S TEC" + " " + score
    } 
    console.log(score)
}

function optionsCheck() {
   const button = this;
    var CardsElement = parseInt(CardElement.value)
    var LPElement = parseInt(LPleftElement.value)
    if (button.value == "1") {
    turns = turns + 1;
    Fturns()
    console.log("turns:" + turns + ", Attacks:" + Attacks + ", Defense:" + Defense + ", Facedown:" + Facedown + ", Fusions:" + Fusion + ", Equips:" + Equip + ", Magic:" + Magic + ", Traps:" + Traps + ", score:" + score)
    } else if (button.value == "2") {
    Attacks = Attacks + 1;
    FAttacks()
    console.log("turns:" + turns + ", Attacks:" + Attacks + ", Defense:" + Defense + ", Facedown:" + Facedown + ", Fusions:" + Fusion + ", Equips:" + Equip + ", Magic:" + Magic + ", Traps:" + Traps + ", score:" + score)
    } else if (button.value == "3") {
    Defense = Defense + 1;
    FDefense()
    console.log("turns:" + turns + ", Attacks:" + Attacks + ", Defense:" + Defense + ", Facedown:" + Facedown + ", Fusions:" + Fusion + ", Equips:" + Equip + ", Magic:" + Magic + ", Traps:" + Traps + ", score:" + score)
    } else if (button.value == "4") {
    Facedown = Facedown + 1;
    FFacedown()
    console.log("turns:" + turns + ", Attacks:" + Attacks + ", Defense:" + Defense + ", Facedown:" + Facedown + ", Fusions:" + Fusion + ", Equips:" + Equip + ", Magic:" + Magic + ", Traps:" + Traps + ", score:" + score)
    } else if (button.value == "5") {
    Fusion = Fusion + 1;
    FFusion()
    console.log("turns:" + turns + ", Attacks:" + Attacks + ", Defense:" + Defense + ", Facedown:" + Facedown + ", Fusions:" + Fusion + ", Equips:" + Equip + ", Magic:" + Magic + ", Traps:" + Traps + ", score:" + score)
    } else if (button.value == "6") {
    Equip = Equip + 1;    
    FEquip()
    console.log("turns:" + turns + ", Attacks:" + Attacks + ", Defense:" + Defense + ", Facedown:" + Facedown + ", Fusions:" + Fusion + ", Equips:" + Equip + ", Magic:" + Magic + ", Traps:" + Traps + ", score:" + score)
    } else if (button.value == "7") {
    Magic = Magic + 1;
    FMagic()
    console.log("turns:" + turns + ", Attacks:" + Attacks + ", Defense:" + Defense + ", Facedown:" + Facedown + ", Fusions:" + Fusion + ", Equips:" + Equip + ", Magic:" + Magic + ", Traps:" + Traps + ", score:" + score)
    } else if (button.value == "8") {
    Traps = Traps + 1;
    FTraps()
    console.log("turns:" + turns + ", Attacks:" + Attacks + ", Defense:" + Defense + ", Facedown:" + Facedown + ", Fusions:" + Fusion + ", Equips:" + Equip + ", Magic:" + Magic + ", Traps:" + Traps + ", score:" + score)
    } else if (button.id == "9") {        
        Health(LPElement, LifeP)
        LifeP = LPElement
        console.log("turns:" + turns + ", Attacks:" + Attacks + ", Defense:" + Defense + ", Facedown:" + Facedown + ", Fusions:" + Fusion + ", Equips:" + Equip + ", Magic:" + Magic + ", Traps:" + Traps + ", score:" + score)
    } else if (button.id == "10") {
        Cards(CardsElement, Used)
        Used = 40 - CardsElement
        console.log("turns:" + turns + ", Attacks:" + Attacks + ", Defense:" + Defense + ", Facedown:" + Facedown + ", Fusions:" + Fusion + ", Equips:" + Equip + ", Magic:" + Magic + ", Traps:" + Traps + ", score:" + score)
    } else {
    turns = 0
    Attacks = 0
    Defense = 0
    Facedown = 0
    Fusion = 0
    Equip = 0
    Magic = 0
    Traps = 0
    Used = 0
    LifeP = 8000
    score = 101
    CardsElement = 40
    CardElement.value = ""
    LPleftElement.value = ""
    TurnElement.textContent = "Turns"
    AttackElement.textContent = "Attacks"
    DefensesElement.textContent = "Defense"
    FaceElement.textContent = "FaceDown"
    fuseElement.textContent = "Fusion"
    quipElement.textContent = "Equip"
    mageElement.textContent = "Magic"
    trapElement.textContent = "Traps"
    console.log("turns:" + turns + ", Attacks:" + Attacks + ", Defense:" + Defense + ", Facedown:" + Facedown + ", Fusions:" + Fusion + ", Equips:" + Equip + ", Magic:" + Magic + ", Traps:" + Traps + ", score:" + score)
    }

   startGame(score)
}


  function Fturns() {
        if (turns == 5){
            score = score - 4
        }else if(turns == 9){
            score = score - 8
        }else if(turns == 29){
            score = score -8
        }else if(turns == 33){
            score = score - 4
            TurnsElement.textContent = "MAXED OUT"
        }else{
            score = score
        }
    }

   function FAttacks(){
        if(Attacks == 2){
            score = score - 2
        }else if(Attacks == 4){
            score = score - 2
        }else if(Attacks == 10){
            score = score - 2
        }else if(Attacks == 20){
            score = score - 2
            AttackElement.textContent = "MAXED OUT"
        }else{
            score = score
        }
    }

     function FDefense(){
        if(Defense == 2){
            score = score - 10
        }else if(Defense == 6){
            score = score - 10
        }else if(Defense == 10){
            score = score - 10
        }else if(Defense == 15){
            score = score - 10
            DefensesElement.textContent = "MAXED OUT"
        }else{
            score = score
        }
    }

    function FFacedown(){
        if(Facedown == 1){
            score = score - 2
        }else if(Facedown == 11){
            score = score - 2
        }else if(Facedown == 21){
            score = score - 2
        }else if(Facedown == 31){
            score = score - 2
            FaceElement.textContent = "MAXED OUT"
        }else{
            score = score
        }
    }

    function FFusion(){
        if(Fusion == 1){
            score = score - 4
        }else if(Fusion == 5){
            score = score - 4
        }else if(Fusion == 10){
            score = score - 4
        }else if(Fusion == 15){
            score = score - 4
            fuseElement.textContent = "MAXED OUT"
        }else{
            score = score
        }
    }

   function FEquip(){
        if(Equip == 1){
            score = score - 4
        }else if(Equip == 5){
            score = score - 4
        }else if(Equip == 10){
            score = score - 4
        }else if(Equip == 15){
            score = score - 4
            quipElement.textContent = "MAXED OUT"
        }else{
            score = score
        }
    }

    function FMagic(){
        if(Magic == 1){
            score = score - 6
        }else if(Magic == 4){
            score = score - 4
        }else if(Magic == 7){
            score = score - 4
        }else if(Magic == 10){
            score = score - 4
            mageElement.textContent = "MAXED OUT"
        }else{
            score = score
        }
    }

    function FTraps(){
        if(Traps == 1){
            score = score - 10
        }else if(Traps == 3){
            score = score - 8
        }else if(Traps == 5){
            score = score - 8
        }else if(Traps == 7){
            score = score - 8
            trapElement.textContent = "MAXED OUT"
        }else{
            score = score
        }
    }

   function Health(LPElement, LifeP){
        if (LifeP < LPElement){
            if(LifeP < 100){
                if(LPElement >= 8000){
                    score = score + 13
                }else if(LPElement >= 100 && LPElement < 1000){
                    score = score + 2
                }else if(LPElement >= 1000 && LPElement < 7000){
                    score = score + 7
                }else if(LPElement >= 7000 && LPElement < 8000){
                    score = score + 11
                }else{
                    score = score
                }
                var LifeP = LPElement
            }else if(LifeP >= 100 && LifeP < 1000){
                if(LPElement >= 8000){
                    score = score + 11
                }else if(LPElement >= 1000 && LPElement < 7000){
                    score = score + 5
                }else if(LPElement >= 7000 && LPElement < 8000){
                    score = score + 9
                }else{
                    score = score
                }
                var LifeP = LPElement
            }else if(LifeP >= 1000 && LifeP < 7000){
                if(LPElement >= 8000){
                    score = score + 6
                }else if(LPElement >= 7000 && LPElement < 8000){
                    score = score + 4
                }else{
                    score = score
                }
                var LifeP = LPElement
            }else if(LifeP >= 7000 && LifeP < 8000){
                if(LPElement >= 8000){
                    score = score + 2
                }else{
                    score = score
                }
                var LifeP = LPElement
            }else{
                score = score
                var LifeP = LifeP
            }
            console.log("1")
        }else if (LifeP > LPElement){
            if(LPElement < 100){
                if(LifeP >= 8000){
                    score = score - 13
                }else if(LifeP >= 100 && LifeP < 1000){
                    score = score - 2
                }else if(LifeP >= 1000 && LifeP < 7000){
                    score = score - 7
                }else if(LifeP >= 7000 && LifeP < 8000){
                    score = score - 11
                }else{
                    score = score
                }
                var LifeP = LPElement
            }else if(LPElement >= 100 && LPElement < 1000){
                if(LifeP >= 8000){
                    score = score -11
                }else if(LifeP >= 1000 && LifeP < 7000){
                    score = score -5
                }else if(LifeP >= 7000 && LifeP < 8000){
                    score = score - 9
                }else{
                    score = score
                }
                var LifeP = LPElement
            }else if(LPElement >= 1000 && LPElement < 7000){
                if(LifeP >= 8000){
                    score = score - 6
                }else if(LifeP >= 7000 && LifeP < 8000){
                    score = score - 4
                }else{
                    score = score
                }
                var LifeP = LPElement
            }else if(LPElement >= 7000 && LPElement < 8000){
                if(LifeP >= 8000){
                    score = score - 2
                    console.log(score)
                    console.log(LP)
                    console.log(LPElement)
                }else{
                    score = score
                }
                var LifeP = LPElement
            }else{
                score = score
                var LifeP = LifeP
            }
            console.log("2")
        }
        else{
            console.log(LP)
            console.log("bad")
        }
    }

    function Cards(CardsElement, Used){
        
        if(Used < 9 && CardsElement <= 31 && CardsElement > 27){
            score = score - 3
        }else if(Used < 9 && CardsElement <= 27 && CardsElement > 7){
            score = score - 15
        }else if(Used < 9 && CardsElement <= 7 && CardsElement > 3){
            score = score - 20
        }else if(Used < 9 && CardsElement <= 3){
            score = score - 22
        }else if(Used < 13 && CardsElement <= 27 && CardsElement > 7){
            score = score - 12
        }else if(Used < 13 && CardsElement <= 7 && CardsElement > 3){
            score = score - 17
        }else if(Used < 13 && CardsElement <= 3){
            score = score - 19
        }else if(Used < 33 && CardsElement <= 7 && CardsElement > 3){
            score = score - 5
        }else if(Used < 33 && CardsElement <= 3){
            score = score - 7
        }else if(Used < 37 && CardsElement <= 3){
            score = score - 2
        }else{
            score = score
        }
        }

for (var i = 0 ; i < btnElement.length; i++) {
    btnElement[i].addEventListener('click', optionsCheck)
}
