"use client";

import React, { useState, useEffect } from 'react';
import PanierCard from './panierCard';

function PanierList() {
    const [panier, setPanier] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPanier() {
            try {
                const response = await fetch('http://localhost:3000/panier');
                if (!response.ok) {
                    throw new Error('Erreur de réseau ou serveur indisponible');
                }
                
                const json = await response.json();
                setPanier(json);
                setLoading(false);
            } catch (error) {
                console.error('Erreur lors de la récupération des données du serveur:', error);
            }
        }

        fetchPanier();

        const intervalId = setInterval(() => {
            fetchPanier(); // Appel de la fonction fetchPanier chaque 3 secondes
        }, 3000);

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
                ) : panier.length > 0 ? (
                    panier.map(pan => (
                        <PanierCard key={pan.id} id={pan.id} idShoes={pan.idShoes} taille={pan.tailleShoes}  />
                    ))
                ) : (
                    <h1 className="scrolling-text">Panier vide</h1>
                )}
            </div>
        </div>
    );
}

export default PanierList;
