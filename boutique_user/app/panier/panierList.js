"use client";

import React, { useState, useEffect } from 'react';
import PanierCard from './panierCard';
import Link from 'next/link';
import { AddRecapServer } from '../recapCommande/addRecapServer';
import { useRouter } from 'next/navigation';
function PanierList() {
    const [panier, setPanier] = useState([]);
    const [loading, setLoading] = useState(true);
    const [prixTotal, setPrixTotal] = useState(0);
    const router = useRouter();
    useEffect(() => {
        async function fetchPanierAndCalculateTotal() {
          try {
            const response = await fetch('http://localhost:3000/panier');
            if (!response.ok) {
              throw new Error('Erreur de réseau ou serveur indisponible');
            }
            const panierJson = await response.json();
      
            // Récupération des prix des articles du panier
            const prixPromises = panierJson.map(async (pan) => {
              const response2 = await fetch(`http://localhost:3000/chaussures/${pan.idShoes}`);
              const json2 = await response2.json();
              return parseFloat(json2.prix * pan.quantiteShoes);
            });
      
            // Attente de la résolution de toutes les promesses de prix
            const prixArray = await Promise.all(prixPromises);
      
            // Calcul du prix total
            const prixTotal = prixArray.reduce((acc, prix) => acc + prix, 0);
      
            // Mise à jour de l'état du prix total
            setPrixTotal(prixTotal);
      
            // Mise à jour du panier
            setPanier(panierJson);
            setLoading(false);
          } catch (error) {
            console.error('Erreur lors de la récupération des données du serveur:', error);
          }
        }
        fetchPanierAndCalculateTotal();
    
        const intervalId = setInterval(fetchPanierAndCalculateTotal, 2000);
    
        return () => {
            clearInterval(intervalId);
        };
    }, []);
    
    async function AddRecServer(formData) {
        await AddRecapServer(formData);
     
        router.push('../recapCommande');
        
      }

    return (
        <div className="container-fluid">
            <div className="row align-items-center ">
                {loading ? (
                    <p>Chargement...</p>
                ) : panier.length > 0 ? (
                    <>
                        {panier.map(pan => (
                            
                            <PanierCard key={pan.id} id={pan.id} idShoes={pan.idShoes} taille={pan.tailleShoes} quantite={pan.quantiteShoes} />
                        ))}
                        <form action={AddRecServer} align="center">
                            <input type="hidden" id="prixTotal" name="prixTotal" value={prixTotal}/>
                          
                            <button type="submit" className="btn btn-danger btn-sm mt-3" style={{ width: '30%' }} >Passer la commande ({panier.length} article(s))</button>
                        </form>

                    </>

                ) : (
                    <h1 className="scrolling-text">Panier vide</h1>
                )}
            </div>
        </div>
    );
}

export default PanierList;
