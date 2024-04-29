"use server";

    export default async function addShoesPannier(formData) {
      
        const nom = formData.get('nom');
        const image = formData.get('image');
        const prix = formData.get('prix');
        const taille = formData.get('taille');
        const quantite = formData.get('quantite');

        await fetch('http://localhost:3000/pannier', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nom: nom,
                image: image,
                prix: prix,
                tailles: taille,
                quantite: quantite
            })
      
        });
    }