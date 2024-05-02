"use client";

import React, { useState, useEffect } from 'react';
import PanierCard from './panierCard';


function PanierList() {
    const [panier, setPanier] = useState([]);

    useEffect(() => {
        async function fetchPanier() {
            try {
                            
                const response = await fetch('http://localhost:3000/panier');
                if (!response.ok) {
                    throw new Error('Erreur de réseau ou serveur indisponible');
                }
                
                const json = await response.json();
                setPanier(json);
              
            } catch (error) {
                console.error('Erreur lors de la récupération des données du serveur:', error);
            }
        }
        fetchPanier();
    }, []);

    return (
        <div className="container-fluid">
            <div className="row align-items-center" >
                {panier.map(pan => (
                    <PanierCard key={pan.id} id={pan.id} idShoes={pan.idShoes} taille={pan.tailleShoes}  />
                ))}
            </div>
        </div>
    );
}

export default PanierList;
