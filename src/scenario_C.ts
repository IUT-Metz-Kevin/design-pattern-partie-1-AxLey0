interface ControlerActions {
    sauter();
    attaquer();
    interargir();
}

ine

class KeyboardControler implements ControlerActions {
    sauter() {
        console.log("Sauter avec le clavier");
    }
    attaquer() {
        console.log("Attaquer avec le clavier");
    }
    interargir() {
        console.log("Interagir avec le clavier");
    }
}

class XboxControler implements ControlerActions {
    sauter() {
        console.log("Sauter avec A");
    }
    attaquer() {
        console.log("Attaquer avec RB");
    }
    interargir() {
        console.log("Interagir avec X");
    }
}
class PlayStationControler implements ControlerActions {
    sauter() {
        console.log("Sauter avec X");
    }
    attaquer() {
        console.log("Attaquer avec R1");
    }
    interargir() {
        console.log("Interagir avec O");
    }
}