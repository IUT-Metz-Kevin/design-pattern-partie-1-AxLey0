
abstract class Character {
    abstract attack(): void;
}

class Warrior extends Character {
    attack(): void {
        console.log("The Warrior attacks with a sword!");
    }
}

class Mage extends Character {
    attack(): void {
        console.log("The Mage casts a fireball!");
    }
}

class Archer extends Character {
    attack(): void {
        console.log("The Archer shoots an arrow!");
    }
}

class CharacterFactory {
    static createCharacter(type: string): Character {
        switch (type) {
            case "Warrior":
                return new Warrior();
            case "Mage":
                return new Mage();
            case "Archer":
                return new Archer();
            default:
                throw new Error("Unknown character type");
        }
    }
}