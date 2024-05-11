"use client";

import React, { useState, useEffect } from 'react';
import PanierCard from './panierCard';
function PanierList() {
    const [panier, setPanier] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchPanier() {
          try {

            let panierJson =  JSON.parse(localStorage.getItem('panier')) || [];

            setPanier(panierJson);
            setLoading(false);
          } catch (error) {
            console.error('Erreur lors de la récupération des données du navigateur:', error);
          }
        }
        fetchPanier();
  
        const intervalId = setInterval(fetchPanier, 2000);
    
        return () => {
            clearInterval(intervalId);
        };
    }, []);
    

    return (
        <div className="container-fluid">
            <div className="row align-items-center ">
                {loading ? (
                    <p>Chargement...</p>
                ) : panier.length > 0 ? (
                    panier.map((article, index) => (
                        <PanierCard
                            key={index}
                            id={index} 
                            idShoes={article.idShoes}
                            taille={article.tailleShoes}
                            quantite={article.quantiteShoes}
                        />
                    ))
                ) : (
                    <h1 className="scrolling-text">Panier vide</h1>
                )}
            </div>
        </div>
    );
}

export default PanierList;