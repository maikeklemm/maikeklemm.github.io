// Konsolenausgabe
var Konsolenausgabe1 = "Hello";
console.log(Konsolenausgabe1);
// Funktion Alert
window.onload = geladen;
function geladen() {
    alert("Fertig geladen!");
}
// Klasse des Bildes verändern
document.getElementById("zzz").addEventListener("click", c1);
function c1() {
    document.getElementById('zzz')
        .className = "Toast-Bild";
}
//Rechnung ; 'string' und 'number' in function
var x = 1;
var y = 2;
window.onload = l1;
function l1() {
    var x = 1;
    var a = "bla";
    var b = "blo";
    var z = x + y;
    console.log(z);
    var c = a + b;
    console.log(c);
    var m = x + a;
    console.log(m);
}
//Funktion button ändert Text und Variable wird neu vergeben
document.getElementById('b1').addEventListener('click', b1a);
function b1a() {
    document.getElementById('b1').innerHTML = 'yes, pls.';
    var x = 100;
    var z = x + y;
    console.log(z);
}
// neues html element erstellen
document.getElementById("k1").addEventListener("click", k1a);
function k1a() {
    let tesparagraph = document.createElement("p");
    tesparagraph.innerHTML = "bla";
    document.getElementById("k1").appendChild(tesparagraph);
}
//# sourceMappingURL=typescript.js.map