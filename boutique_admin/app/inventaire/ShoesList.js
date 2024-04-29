"use client";

import React, { useState, useEffect } from 'react';
import ShoesCard from './ShoesCard';
function ShoesList() {
    const [Shoes, setShoes] = useState([]);

    useEffect(() => {
        async function fetchShoes() {
            try {

                const response = await fetch('http://localhost:3000/chaussures');
                if (!response.ok) {
                    throw new Error('Erreur de réseau ou serveur indisponible');
                }
                
                const json = await response.json();
                setShoes(json);
            } catch (error) {
                console.error('Erreur lors de la récupération des données du serveur:', error);
            }
        }
        fetchShoes();
    }, []);
    const ShoesNonSupprimes = Shoes.filter(Shoes => Shoes.disponibilite);
    return (
        <div className="row">         
            {ShoesNonSupprimes.map(sh => (
                <ShoesCard key={sh.id} id={sh.id} nom={sh.nom} prix={sh.prix} image={sh.image} />
            ))}

        </div>
    );

}
export default ShoesList;