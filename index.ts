class convertNumberToString {
    constructor() {

    }
    private singleDigits = ["", "jedan", "dva", "tri", "cetiri", "pet", "sest", "sedam", "osam", "devet"];
    private doubleDigits = ["", "deset", "dvadeset", "trideset", "cetrdeset", "pedeset", "sezdeset", "sedamdeset", "osamdeset", "devedeset"];
    private teens = ["deset", "jedanaest", "dvanaest", "trinaest", "cetrnaest", "petnest", "sesnest", "sedamnest", "osamnest", "devetnest"];
    private hundreds = ["", "stotinu", "dvestotine", "stotine", "stotne", "stotina", "stotina", "stotina", "stotina", "stotina"];
    private groups = [
        ["hiljada", "jedna hiljada", "dve hiljade", "hiljade", "hiljade", "hiljada", "hiljada", "hiljada", "hiljada", "hiljada", "hiljada", "hiljada", "hiljada", "hiljada", "hiljada", "hiljada", "hiljada", "hiljada", "hiljada", "hiljada"],
        ["milijardi", "jedna milijarda", "dve milijarde", "milijarde", "milijarde", "milijardi", "milijardi", "milijardi", "milijardi", "milijardi", "milijardi", "milijardi", "milijardi", "milijardi", "milijardi", "milijardi", "milijardi", "milijardi", "milijardi", "milijardi"],
        ["miliona", "milion", "dva miliona", "miliona", "miliona", "miliona", "miliona", "miliona", "miliona", "miliona", "miliona", "miliona", "miliona", "miliona", "miliona", "miliona", "miliona", "miliona", "miliona", "miliona"],
        ["hiljada", "jedna hiljada", "dve hiljade", "hiljade", "hiljade", "hiljada", "hiljada", "hiljada", "hiljada", "hiljada", "hiljada", "hiljada", "hiljada", "hiljada", "hiljada", "hiljada", "hiljada", "hiljada", "hiljada", "hiljada"],
        ["", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", ""]
    ];

    public convertFunction(numberToConvert) {
        if (numberToConvert.toString().length > 15) throw new Error("Number is too big");
        if (typeof numberToConvert !== "number") throw new Error("Please insert number!");

        const initialNumberString = ('000000000000000' + numberToConvert).substr(-15);
        const initialNumberStringsArray = initialNumberString.match(/.{1,3}/g);
        console.log(initialNumberStringsArray)
        let result = "";

        initialNumberStringsArray.forEach((element, elementIndex) => {

            if (Number(initialNumberStringsArray[elementIndex])) {
                var hundred = Math.floor(Number(element) / 100);
                let rest = Number(element) % 100;

                if (Number(element[0]) < 3) {
                    result += `${this.hundreds[hundred]} `;
                } else {
                    result += `${this.singleDigits[element[0]]} ${this.hundreds[hundred]} `;
                }

                if (element[1] === "1") {
                    result += `${this.teens[element[2]]} ${this.groups[elementIndex][rest]} `
                } else if (element[1] === "0") {
                    if (element[2] === "2" || element[2] === "1") {
                        result += elementIndex === 4 ? `${this.singleDigits[element[2]]} ` : `${this.groups[elementIndex][rest]} `
                    } else {
                        result += `${this.singleDigits[element[2]]} ${this.groups[elementIndex][rest]} `
                    }
                } else {
                    if (element[2] === "2") {
                        result += elementIndex === 4 ? `${this.doubleDigits[element[1]]} i ${this.singleDigits[element[2]]} ${this.groups[elementIndex][element[2]]} ` : `${this.doubleDigits[element[1]]} ${this.groups[elementIndex][element[2]]} `
                    } else {
                        result += elementIndex === 4 && element[2] !== "0" ? `${this.doubleDigits[element[1]]} i ${this.singleDigits[element[2]]} ${this.groups[elementIndex][element[2]]} ` : `${this.doubleDigits[element[1]]} ${this.singleDigits[element[2]]} ${this.groups[elementIndex][element[2]]} `
                    }
                }
            }
        })
    }
}

// module.exports = convertNumberToString;
