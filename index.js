class Mercedes {

    static isMercedes (car) {
        return car instanceof Mercedes
    }

    static keys (car) {
        const result = [];

        for (let key in car) {
            result[result.length] = key;
        }

        return result;
    }

    constructor (price, color, model, Maxspeed) {
        this.price = price;
        this.color = color;
        this.model = model;
        this.Maxspeed = Maxspeed;

        return this;
    }

    info () {
        console.table(this);
    }

    Logo () {
        console.log(`The best or nothing ${this.price}`);
    }
}

class Cclasee extends Mercedes {
    constructor (price, color, model, Maxspeed, yearofproduction ) {
        super(price, color, model, Maxspeed);

        this.yearofproduction = yearofproduction;

        return this;
    }

    LogoMercedes () {
        console.log(`The best or nothing ${this.price}`);
    }
}

const SClasse = new Mercedes("150000 Euro", "black", "SClasse", 350);
SClasse.info();
SClasse.Logo();

const cclasee = new Cclasee("120000 Euro", "blue", "Cclasee", 300, 2022);
cclasee.info();
cclasee.LogoMercedes();


