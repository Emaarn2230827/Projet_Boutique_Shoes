"use server";

    export default async function addShoesPanier(formData, idShoes) {
      
        const tailleShoes = formData.get('tailleShoes');

        await fetch('http://localhost:3000/panier', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                idShoes: idShoes,
                tailleShoes: tailleShoes
            })
      
        });
    }