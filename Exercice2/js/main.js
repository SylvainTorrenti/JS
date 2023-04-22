let source = "./image/leona_high_noon___lol_wallpaper_by_editsbyjadewolf_df5axfg-pre.jpg";// Création d'une variable qui stocke le chemin d'acces à l'image
// Fonction pour changer l'image

function chargeImage() {
    let image = document.getElementsByTagName("IMG")[0]; // Récupére l'element HTML "IMG". Avec getElementsByTagName ça stocke les elements "IMG" dans un tableau même si il n'y a qu'un element donc pour selectionner l'element il faut selectionner l'element dans le tableau (ici [0] signifie que, dans le tableau où sont stockés les elements "IMG", nous selectionons le 1er element (indice 0)).

    image.setAttribute("src", source);// remplacement de l'attribut "source" de l'element "IMG" par la variable créée en amont. 
}