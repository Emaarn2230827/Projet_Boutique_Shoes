"use client";
import React, { useState, useEffect } from 'react';
export default function PanierCard({ id, idShoes, taille, quantite }) {

  const [chaussure, setChaussure] = useState({});


  useEffect(() => {
    async function fetchChaussure() {
        try {
           
                 
            const response = await  fetch(`http://localhost:3000/chaussures/${idShoes}`);
            const json = await response.json();
            setChaussure(json);
            
        } catch (error) {
            console.error('Erreur lors de la récupération des données:', error);
            
        }
    }

    fetchChaussure();
}, [idShoes]);


  const handleSupprimer = () => {
    try {
      let panier = JSON.parse(localStorage.getItem('panier')) || []; // Récupérer le panier depuis le localStorage
      panier.splice(id, 1); // Supprimer l'article à l'index spécifié
      localStorage.setItem('panier', JSON.stringify(panier)); // Mettre à jour le panier dans le localStorage
      // Mettre à jour l'état du panier ou effectuer toute autre action nécessaire
    } catch (error) {
      console.error('Erreur lors de la suppression de l\'article du panier:', error);
    }
  }
  
  return (
    <div className="cardEnd col-12 col-lg-6" key={id}>
    <div className="card" style={{ width: '35rem' }}>
      <div className="row no-gutters">
        <div className="col-md-6">
          <img src={chaussure.image} className="card-img" alt="Image de chaussure" width="450" height="350" />
        </div>
        <div className="col-md-6">
          <div className="card-body">
            <h5 className="card-title">{chaussure.nom}</h5>
            <p className="card-text contenuLambda">Prix: {chaussure.prix} $CA</p>
            <p className="card-text contenuLambda">Taille: {taille}</p>
            <p className="card-text contenuLambda">Quantité: {quantite}</p>
            <div className="d-flex justify-content-between align-items-center">
              <button className="btn btn-outline-danger" onClick={handleSupprimer}>supprimer</button>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <a href={chaussure.lienPaiement} target='_blank'>
                <button className="btn btn-outline-danger" >payer</button>
              </a>        
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  
  );
}
