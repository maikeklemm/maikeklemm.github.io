

//interface
interface Karten {
    Zahl: number;
    Farbe: string;
    id: string;
    Bild: string
}

//variablen
let gelb1: Karten = {
    Zahl: 1,
    Farbe: "gelb",
    id: "gelb1",
    Bild: "img/gelb1.jpg"
}
let gelb2: Karten = {
    Zahl: 2,
    Farbe: "gelb",
    id: "gelb2",
    Bild: "img/gelb2.jpg"
}
let gelb3: Karten = {
    Zahl: 3,
    Farbe: "gelb",
    id: "gelb3",
    Bild: "img/gelb3.jpg"
}
let gelb4: Karten = {
    Zahl: 4,
    Farbe: "gelb",
    id: "gelb4",
    Bild: "img/gelb4.jpg"
}
let gelb5: Karten = {
    Zahl: 5,
    Farbe: "gelb",
    id: "gelb5",
    Bild: "img/gelb5.jpg"
}
let gelb6: Karten = {
    Zahl: 6,
    Farbe: "gelb",
    id: "gelb6",
    Bild: "img/gelb6.jpg"
}
let gelb7: Karten = {
    Zahl: 7,
    Farbe: "gelb",
    id: "gelb7",
    Bild: "img/gelb7.jpg"
}
let gelb8: Karten = {
    Zahl: 8,
    Farbe: "gelb",
    id: "gelb8",
    Bild: "img/gelb8.jpg"
}
let blau1: Karten = {
    Zahl: 1,
    Farbe: "blau",
    id: "blau1",
    Bild: "img/blau1.jpg"
}
let blau2: Karten = {
    Zahl: 2,
    Farbe: "blau",
    id: "blau2",
    Bild: "img/blau2.jpg"
}
let blau3: Karten = {
    Zahl: 3,
    Farbe: "blau",
    id: "blau3",
    Bild: "img/blau3.jpg"
}
let blau4: Karten = {
    Zahl: 4,
    Farbe: "blau",
    id: "blau4",
    Bild: "img/blau4.jpg"
}
let blau5: Karten = {
    Zahl: 5,
    Farbe: "blau",
    id: "blau5",
    Bild: "img/blau5.jpg"
}
let blau6: Karten = {
    Zahl: 6,
    Farbe: "blau",
    id: "blau6",
    Bild: "img/blau6.jpg"
}
let blau7: Karten = {
    Zahl: 7,
    Farbe: "blau",
    id: "blau7",
    Bild: "img/blau7.jpg"
}
let blau8: Karten = {
    Zahl: 8,
    Farbe: "blau",
    id: "blau8",
    Bild: "img/blau8.jpg"
}
let rot1: Karten = {
    Zahl: 1,
    Farbe: "rot",
    id: "rot1",
    Bild: "img/rot1.jpg"
}
let rot2: Karten = {
    Zahl: 2,
    Farbe: "rot",
    id: "rot2",
    Bild: "img/rot2.jpg"
}
let rot3: Karten = {
    Zahl: 3,
    Farbe: "rot",
    id: "rot3",
    Bild: "img/rot3.jpg"
}
let rot4: Karten = {
    Zahl: 4,
    Farbe: "rot",
    id: "rot4",
    Bild: "img/rot4.jpg"
}
let rot5: Karten = {
    Zahl: 5,
    Farbe: "rot",
    id: "rot5",
    Bild: "img/rot5.jpg"
}
let rot6: Karten = {
    Zahl: 6,
    Farbe: "rot",
    id: "rot6",
    Bild: "img/rot6.jpg"
}
let rot7: Karten = {
    Zahl: 7,
    Farbe: "rot",
    id: "rot7",
    Bild: "img/rot7.jpg"
}
let rot8: Karten = {
    Zahl: 8,
    Farbe: "rot",
    id: "rot8",
    Bild: "img/rot8.jpg"
}
let gruen1: Karten = {
    Zahl: 1,
    Farbe: "gruen",
    id: "gruen1",
    Bild: "img/gruen1.jpg"
}
let gruen2: Karten = {
    Zahl: 2,
    Farbe: "gruen",
    id: "gruen2",
    Bild: "img/gruen2.jpg"
}
let gruen3: Karten = {
    Zahl: 3,
    Farbe: "gruen",
    id: "gruen3",
    Bild: "img/gruen3.jpg"
}
let gruen4: Karten = {
    Zahl: 4,
    Farbe: "gruen",
    id: "gruen4",
    Bild: "img/gruen4.jpg"
}
let gruen5: Karten = {
    Zahl: 5,
    Farbe: "gruen",
    id: "gruen5",
    Bild: "img/gruen5.jpg"
}
let gruen6: Karten = {
    Zahl: 6,
    Farbe: "gruen",
    id: "gruen6",
    Bild: "img/gruen6.jpg"
}
let gruen7: Karten = {
    Zahl: 7,
    Farbe: "gruen",
    id: "gruen7",
    Bild: "img/gruen7.jpg"
}
let gruen8: Karten = {
    Zahl: 8,
    Farbe: "gruen",
    id: "gruen8",
    Bild: "img/gruen8.jpg"
}
let ziehstapelArray: Karten[] = [gelb1, gelb2, gelb3, gelb4, gelb5, gelb5, gelb7, gelb8, rot1, rot2, rot3, rot4, rot5, rot6, rot7, rot8, gruen1, gruen2, gruen3, gruen4, gruen5, gruen6, gruen7, gruen8, blau1, blau2, blau3, blau4, blau5, blau6, blau7, blau8];
let computerArray: Karten[] = [];
let player1Array: Karten[] = [];
let spielflächeArray: Karten[] = [];

// wenn seite geladen wird

window.onload = function (){
    generateZiehstapel();
    document.getElementById("Ziehstapelneu").addEventListener("click", KarteZiehen)  ;
}
//Funktionen


function generateZiehstapel() {                                                 
    let Ziehstapelneu: HTMLImageElement = document.createElement("img");
    Ziehstapelneu.setAttribute("src", "img/ruckseite.jpg")
   
   
   // let Ziehstapelneu: HTMLElement = document.createElement("button");

    Ziehstapelneu.setAttribute("id", "Ziehstapelneu");
    document.getElementById("ziehstapel").appendChild(Ziehstapelneu);

   // document.getElementById ("Ziehstapelneu") .innerHTML = "img/ruckseite.jpg";      








    ziehstapelArray.sort(function (a, b) {                  // mischt den Stapel
        return 0.5 - Math.random()
    })
    austeilen();
}

function austeilen() {
    for (let i: number = 0; i <= 3; i++) {
        console.log("ausgeteilt");
        player1Array.push(ziehstapelArray[0]);      //Verteilung der Karten an spieler
        ziehstapelArray.splice(0, 1);
        computerArray.push(ziehstapelArray[0]);     //Verteilung der Karten an Computer
        ziehstapelArray.splice(0, 1);

    }
    spielflächeArray.push(ziehstapelArray[0]);     //Verteilung einer Karte an Spielfläche
    ziehstapelArray.splice(0, 1);
    console.log("verteilt");
    showKarten();
   
}

function ausspielen(Kartennummer: number) {       
                                                        //wenn spieler karte legen will wird geprüft ob dies möglich ist und dann die karte verschoben
    if(player1Array[Kartennummer].Farbe == spielflächeArray [spielflächeArray.length -1] .Farbe ||
        player1Array[Kartennummer].Zahl == spielflächeArray [spielflächeArray.length -1] .Zahl ) {
            spielflächeArray.push (player1Array[Kartennummer]);
            player1Array.splice (Kartennummer,1);
            console.log("Du hast eine Karte gelegt");
            if(player1Array.length == 0){
                alert("Du hast gewonnen!");
                console.log ("Du hast gewonnen!");
                
            }
            showKarten();
            zugComputer();
        }
      
}


function showKarten() {
    document.getElementById("spieler1").innerHTML = "";                         // Anzeigen der Karten des SPieler1
    for (let i: number = 0; i <= player1Array.length - 1; i++) {
        let neueKarte: HTMLImageElement = document.createElement("img");
        neueKarte.innerHTML="";
        neueKarte.setAttribute("src", player1Array[i].Bild);
        neueKarte.addEventListener('click', function(){ ausspielen(i); },false);

        document.getElementById("spieler1").appendChild(neueKarte);

        console.log("Karten des Spielers werden angzeigt");
    }

    document.getElementById("computer").innerHTML = "";                        // Anzeigen der Karten des Computers
    for (let i: number = 0; i <= computerArray.length - 1; i++) {
        let neueKarte: HTMLImageElement = document.createElement("img");
        neueKarte.setAttribute("src", "img/ruckseite.jpg");
        document.getElementById("computer").appendChild(neueKarte);
        console.log("Karten des Computers werden angezeigt");
    }
                                                                                  // Anzeigen der Karte auf dem spielfeld
        document.getElementById("spielfläche") .innerHTML = "";
        let neueKarte: HTMLImageElement = document.createElement("img");
        neueKarte.setAttribute("src", spielflächeArray[spielflächeArray.length-1].Bild)
        document.getElementById("spielfläche").appendChild(neueKarte);
        console.log("Karte auf der spielfläche wird angezeigt");
    

}

 

function KarteZiehen () {
   if(ziehstapelArray.length>0){ player1Array.push(ziehstapelArray[0]);      //wenn der spieler nicht kann muss er ziehen, wobei er eine karte aus dem stapel bekommt
    ziehstapelArray.splice(0, 1);
    showKarten();
    console.log ("Du hast eine Karte gezogen");
    zugComputer();
    }
}

 function zugComputer(){                                        //der computer geht alle seine karten durch und checkt ob er eine legen kann
    let Kartegespielt : boolean =false;
    for (let i: number = 0; i < computerArray.length ; i++) {
        if(computerArray[i].Farbe == spielflächeArray [spielflächeArray.length -1] .Farbe ||
            computerArray[i].Zahl == spielflächeArray [spielflächeArray.length -1] .Zahl ) {
                spielflächeArray.push (computerArray[i]);
                computerArray.splice (i,1);
                Kartegespielt=true;
                i=100;
                showKarten();
                console.log ("Der Computer hat eine Karte gelegt");
         }
    }
    if (Kartegespielt==false && ziehstapelArray.length>0){                          //wenn der computer keine karte spielen kann muss er eine ziehen
       computerArray.push(ziehstapelArray[0]);      
        ziehstapelArray.splice(0, 1);
        showKarten();
        console.log ("computer hat karte gezogen")
    }
    if(computerArray.length == 0){                  //wenn der computer keine karten mehr hat hat der spieler verloren
        alert("Du hast verloren!");
        console.log ("Du hast verloren!")

    }
 }


