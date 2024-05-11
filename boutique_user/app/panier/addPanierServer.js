"use client";

export default function addShoesPanier(formData, idShoes) {
    var panier = JSON.parse(localStorage.getItem("panier")) || []; // Si le panier est vide, initialisez-le comme un tableau vide
    var article = {
        idShoes: idShoes,
        tailleShoes: formData.get('tailleShoes'),
        quantiteShoes: formData.get('quantiteShoes')
    };

    panier.push(article); // Ajoutez l'article au panier

    localStorage.setItem("panier", JSON.stringify(panier)); // Enregistrez le panier mis à jour dans localStorage
}
