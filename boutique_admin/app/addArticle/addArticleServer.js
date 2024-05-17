"use server";

    export default async function addShoes(formData) {
      
        const nom = formData.get('nom');
        const getFilePathImage = (file) => {
            if(file){
                const fileName = file.name;
                const filePath = `/images/shoesH/${fileName}`;
                return filePath;
            } else {
                return '';
            }
        }
        const image = getFilePathImage(formData.get('image'));
        const prix = formData.get('prix');
        const description = formData.get('description');
        const lien = formData.get('lien');

        await fetch('http://localhost:3000/chaussures', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nom: nom,
                image: image,
                prix: prix,
                totalEnStock: 56,
                tailles: ["38","39", "40", "41", "42", "43", "44"],
                totalParTailles: [5,5,8,8,10,10,10],
                disponibilite: true,
                description: description,
                lienPaiement: lien
            })
      
        });
    }