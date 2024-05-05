"use server";

export default async function addCommandeShoes(formData, idPanier) {
    
    const quantiteShoes = formData.get('quantiteShoes');
    await fetch('http://localhost:3000/commandeShoes', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            idPanier: idPanier,
            quantiteShoes: quantiteShoes
        })
  
    });
}