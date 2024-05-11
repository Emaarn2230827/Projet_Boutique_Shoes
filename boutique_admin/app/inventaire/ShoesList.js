"use client";

import React, { useState, useEffect } from 'react';
import ShoesCard from './ShoesCard';
import { Button } from 'bootstrap';
function ShoesList() {
    const [Shoes, setShoes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchShoes() {
            try {

                const response = await fetch('http://localhost:3000/chaussures');
                if (!response.ok) {
                    throw new Error('Erreur de réseau ou serveur indisponible');
                }
                
                const json = await response.json();
                setShoes(json);
                setLoading(false);
            } catch (error) {
                console.error('Erreur lors de la récupération des données du serveur:', error);
            }
        }
        fetchShoes();
        const intervalId = setInterval(() => {
            fetchShoes(); 
        }, 2000);

        // Nettoyage de l'intervalle lors du démontage du composant
        return () => {
            clearInterval(intervalId);
        };
    }, []);
   
    return (
        <div className="container-fluid">
            <div className="row align-items-center">
                {loading ? (
                    <p>Chargement...</p>
                ) : Shoes.length > 0 ? (
                    Shoes.map(shoe => (
                        
                        <ShoesCard key={shoe.id} id={shoe.id} nom={shoe.nom} prix={shoe.prix} image={shoe.image} disponibilite={shoe.disponibilite} />
                    ))
                ) : (
                    <h1 className="scrolling-text">Aucune chaussure enregistrée</h1>
                    )}
            </div>
        </div>
    );

}
export default ShoesList;