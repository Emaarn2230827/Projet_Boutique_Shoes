"use server";

    export default async function addShoesPanier(formData, idShoes) {
      
        const tailleShoes = formData.get('tailleShoes');
        const quantiteShoes = formData.get('quantiteShoes');


        await fetch('http://localhost:3000/panier', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                idShoes: idShoes,
                idRecap: "1",
                tailleShoes: tailleShoes,
                quantiteShoes: quantiteShoes
            })
      
        });
    }