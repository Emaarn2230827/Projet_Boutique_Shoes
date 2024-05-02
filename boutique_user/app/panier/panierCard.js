"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

export default function PanierCard({ id, idShoes, taille }) {

  const [chaussure, setChaussure] = useState({});
  const [quantite, setQuantite] = useState(1); 
  const [options, setOptions] = useState([]);

  const handleChangeQuantite = (event) => {
    setQuantite(parseInt(event.target.value)); 
  };

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

  useEffect(() => {
    if (chaussure && chaussure.tailles) {
      const index = chaussure.tailles.indexOf(taille);
      const qteShoes = index >= 0 ? chaussure.totalParTailles[index] : 0;
      const newOptions = [];
      for (let i = 1; i <= qteShoes; i++) {
        newOptions.push(<option key={i} value={i}>{i}</option>);
      }
      setOptions(newOptions);
    }
  }, [chaussure, taille]);

  return (
    <div className="col-12 col-lg-4" key={id}>
      <div className="card" style={{ width: '20rem' }}>
        <img src={chaussure.image} className="card-img-top" alt="Image de chaussure" width="450" height="390" />
        <div className="card-body">
          <h5 className="card-title">{chaussure.nom}</h5>
          <p className="card-text">Prix: {chaussure.prix} $CA</p>
          <p className="card-text">Taille: {taille}</p>
          <p className="card-text">Quantité:
            <select value={quantite} onChange={handleChangeQuantite}>
              {options}
            </select>
          </p>
          <p className="card-text">Total: {chaussure.prix * quantite}$CA </p> 
          <div className="d-flex justify-content-between align-items-center">
            <button className="btn btn-outline-danger">supprimer</button>
          </div>
        </div>
      </div>
    </div>
  );
}