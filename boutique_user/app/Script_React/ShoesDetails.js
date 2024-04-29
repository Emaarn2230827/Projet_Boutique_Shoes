"use client";
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import addShoesPannier from '../pannier/addPannierServer';

function ShoesDetails({ chaussureId }) {
  const [chaussure, setChaussure] = useState({});
  const [selectedTaille, setSelectedTaille] = useState('');
  const [articlesDisponibles, setArticlesDisponibles] = useState(0);

  useEffect(() => {
    async function fetchChaussure() {
      try {
        const response = await fetch(`http://localhost:3000/chaussures/${chaussureId}`);
        const json = await response.json();
        setChaussure(json);
      } catch (error) {
        console.error('Erreur lors de la récupération des données:', error);
      }
    }

    fetchChaussure();
  }, [chaussureId]);

  useEffect(() => {
    if (selectedTaille) {
      const index = chaussure.tailles.indexOf(selectedTaille);
      if (index !== -1) {
        setArticlesDisponibles(chaussure.totalParTailles[index]);
      }
    }
  }, [selectedTaille, chaussure]);

  const handleTailleChange = (event) => {
    setSelectedTaille(event.target.value);
  };

  return (
    <div className="container-fluid">
      <br />
      <div className="row">
        <div className="col-6 col-lg-6">
          <Image src={chaussure.image} alt={chaussure.nom} width={280} height={300} />
          <p className="col-8 col-lg-8"><h3>Description</h3> {chaussure.description}</p>
        </div>
        <div className="col-6 col-lg-6">
          <h2 className="col-12 col-lg-12">{chaussure.nom}</h2>
          <p className="col-12 col-lg-12">Prix: {chaussure.prix}$CA</p>
          <label htmlFor="taille" className="col-4 col-lg-4">Sélectionner la taille :</label>
          <select id="taille" className="col-8 col-lg-8" style={{ width: '160px' }} align="left" onChange={handleTailleChange}>
            <option value="">Choisissez une taille</option>
            {chaussure.tailles && chaussure.tailles.map((taille, index) => (
              <option key={index} value={taille}>{taille} EU</option>
            ))}
          </select>
          <br />
          <br />
          <p className="col-12 col-lg-12">Nombre d'articles disponibles: {articlesDisponibles}</p>
          <button className="btn btn-outline-danger">Ajouter au panier</button>
        </div>
      </div>
    </div>
  );
}

export default ShoesDetails;
