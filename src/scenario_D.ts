interface Beverage {
    getDescription(): string;
    getCost(): number;
}

class Coffee implements Beverage {
    getDescription(): string {
    }

    getCost(): number {
    }
}


abstract class BeverageOption implements Beverage {
    protected beverage: Beverage;

    abstract getDescription(): string;
    abstract getCost(): number;
}

class Milk extends BeverageOption {
    getDescription(): string {
    }

    getCost(): number {
    }
}

class CoconutMilk extends BeverageOption {
    getDescription(): string {
    }

    getCost(): number {
    }
}

class WhippedCream extends BeverageOption {
    getDescription(): string {
    }

    getCost(): number {

    }
}

class VanillaFlavor extends BeverageOption {
    getDescription(): string {
    }

    getCost(): number {
    }
}

class Sugar extends BeverageOption {
    getDescription(): string {
    }

    getCost(): number {
    }
}