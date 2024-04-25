"use client";
import React from 'react';
import Image from 'next/image';

function ShoesDetails({ chaussureId }) {
  const [chaussure, setChaussure] = React.useState({});
  React.useEffect(() => {
    async function fetchChaussure() {
        try {
                   
            const response = await  fetch(`http://localhost:3000/chaussures/${chaussureId}`);
            const json = await response.json();
            setChaussure(json);
            
        } catch (error) {
            console.error('Erreur lors de la récupération des données:', error);
        }
    }

    fetchChaussure();
}, [chaussureId]);
if (chaussure.disponibilite || chaussure.totalEnStock > 0) {
    return (
      <div className="container-fluid">
        <br/>
        <div className="row">
          <div className="col-6 col-lg-6">
            <Image src={chaussure.image} alt={chaussure.nom}  width={280} height={300} />
            <p className="col-8 col-lg-8"><h3>Description</h3> {chaussure.description}</p>
          </div>
          <div className="col-6 col-lg-6">
            <h2 className="col-12 col-lg-12">{chaussure.nom}</h2>
            <p className="col-12 col-lg-12">Prix: {chaussure.prix}$CA</p>
            <label htmlFor="taille" className="col-4 col-lg-4">Sélectionner la taille :</label>
            <select id="taille" className="col-8 col-lg-8" style={{ width: '100px' }} align="left">
              {chaussure.tailles && chaussure.tailles.map((taille, index) => (
                <option key={index} value={taille}>{taille} EU</option>
              ))}
            </select>
            <br/>
            <br/>
            <p className="col-12 col-lg-12">Nombre d'articles disponibles: {chaussure.totalEnStock}</p>     
            <button className="btn btn-outline-danger">Ajouter au panier</button>
            <button className="btn btn-outline-danger">Passer au paiement</button>
          </div>
        </div>          
      </div>
    );
  } else {
    return (
        <div className="container-fluid">
            <br />
            <div className="row">
                <div className="col-lg-12">
                <h1 className="scrolling-text">Cet article n'est actuellement pas disponible.</h1>

                </div>
            </div>
        </div>
    );
  }
  
}

export default ShoesDetails;
