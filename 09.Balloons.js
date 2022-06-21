function solution() {
    class Balloon {
        constructor(color, hasWeigth) {
            this.color = color;
            this.hasWeigth = hasWeigth;
        }
    }

    class PartyBalloon extends Balloon {
        constructor(color, hasWeigth, ribbonColor, ribbonLength) {
            super(color, hasWeigth);
            this.ribbonColor = ribbonColor;
            this.ribbonLength = ribbonLength;
            this._ribbon = {
                color: ribbonColor,
                length: ribbonLength
            };
        }

        get ribbon() {
            return this._ribbon;
        }
    }

    class BirthdayBalloon extends PartyBalloon {
        constructor(color, hasWeigth, ribbonColor, ribbonLength, text) {
            super(color, hasWeigth, ribbonColor, ribbonLength);
            this.text = text;
        }

        get text(){
            return this.text;
        }
    }

    return {
        Balloon:Balloon,
        PartyBalloon:PartyBalloon,
        BirthdayBalloon:BirthdayBalloon
    }
}

let classes = solution();
let testBalloon = new classes.Balloon("yellow", 20.5);
let testPartyBalloon = new classes.PartyBalloon("yellow", 20.5, "red", 10.25);
let ribbon = testPartyBalloon.ribbon;
console.log(testBalloon);
console.log(testPartyBalloon);
console.log(ribbon);
