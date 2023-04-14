/**
 * fonction pour changer aleatoirement de couleur
 * x = nuance de rouge
 * y = nuance de vert
 * z = nuance de bleu
 */
function change() {
    var x = Math.floor(Math.random() * 256);
    var y = Math.floor(Math.random() * 256);
    var z = Math.floor(Math.random() * 256);
    var thergb = "rgb(" + x + "," + y + "," + z + ")";
    document.body.style.background = thergb;
}