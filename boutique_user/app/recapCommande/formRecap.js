"use client";
import React, { useState, useEffect } from 'react';

export default function FormRecap() {
    const [commande, setCommandes] = useState([]);
    useEffect(() => {
        async function fetchCommande() {
          try {
            const response = await fetch(`http://localhost:3000/commandeShoes/1`);
            const json = await response.json();
            setCommandes(json);
          } catch (error) {
            console.error('Erreur lors de la récupération des données:', error);
          }
        }
    
        fetchCommande();
      }, []);

    return (
        <div className="container-fluid ">
        <br />
        <div className="row">
            <div className="col-7 col-lg-7">
                <h2>Vos coordonnées</h2>
                <h4>Adresse</h4>
                <label htmlFor="numero" className="col-4 col-lg-4">Numero:</label>
                <input type="text" id="numero" name="numero" className="col-8 col-lg-8" />
                <label htmlFor="pays" className="col-4 col-lg-4">Nom rue: </label>
                <input type="text" id="nomRue" name="nomRue" className="col-8 col-lg-8" />
                <label htmlFor="ville" className="col-4 col-lg-4">Ville: </label>
                <input type="text" id="ville" name="ville" className="col-8 col-lg-8" />
                <label htmlFor="pays" className="col-4 col-lg-4">Code postal: </label>
                <input type="text" id="codePostal" name="codePostal" className="col-8 col-lg-8" />
    
             
            </div>
            <div className="col-5 col-lg-5">                        
               <h2 className="col-12 col-lg-12">Recapitulatif de la commande</h2>
               <label htmlFor="article" className="col-12 col-lg-12">Article: {commande.prixTotal}$CA </label>
               <label htmlFor="frais" className="col-12 col-lg-12">Frais de livraison:{commande.frais}$CA </label>
               <label htmlFor="montant" className="col-12 col-lg-12">Montant total </label>
               <button type="submit" className="btn btn-danger btn-sm mt-3" style={{ width: '20%' }} >commander</button>
                    
            </div>
        </div>
    </div>
    )
   
}