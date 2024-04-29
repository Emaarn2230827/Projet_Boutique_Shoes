import React, { useState } from 'react';
import Image from 'next/image';

export default function PanierCard({ id, nom, image, prix, taille, tailles, totalParTailles }) {
  const tailleIndex = tailles.indexOf(taille);
  const totalParTaille = totalParTailles[tailleIndex];

  const [quantite, setQuantite] = useState(1); 

  const options = [];
  for (let i = 1; i <= totalParTaille; i++) {
    options.push(<option key={i} value={i}>{i}</option>);
  }

  const handleChangeQuantite = (event) => {
    setQuantite(parseInt(event.target.value)); 
  };

  return (
    <div className="col-12 col-lg-4" key={id}>
      <div className="card" style={{ width: '20rem' }}>
        <Image src={image} className="card-img-top" alt="Image de chaussure" width={450} height={350} />
        <div className="card-body">
          <h5 className="card-title">{nom}</h5>
          <p className="card-text">Prix: {prix}$CA</p>
          <p className="card-text">Taille: {taille}</p>
          <p className="card-text">Quantite:
            <select value={quantite} onChange={handleChangeQuantite}>
              {options}
            </select>
          </p>
          <p className="card-text">Total: {prix * quantite}$CA </p> 
          <div className="d-flex justify-content-between align-items-center">
            <button className="btn btn-outline-danger">supprimer</button>
          </div>
        </div>
      </div>
    </div>
  );
}
