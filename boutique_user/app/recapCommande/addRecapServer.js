"use server";

export async function AddRecapServer(formData) {

    const prixTotal = formData.get('prixTotal');

    await fetch('http://localhost:3000/commande/1', {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            prixTotal: parseFloat(prixTotal),
            frais: 10
        })
  
    });
}