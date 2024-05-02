"use client";

import React from 'react';
import Link from 'next/link';

function ShoesCard({id, nom, image, prix, disponibilite}) {
    const handleDeleteshoes = async (shoesId) => {
        try {
            const response = await fetch(`http://localhost:3000/chaussures/${shoesId}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                },
  
            });

            if (!response.ok) {
                throw new Error('Erreur lors de la modification de la chaussure');
            }

        } catch (error) {
            console.error('Erreur lors de la suppression de la chaussure :', error);
        }
    };
    return (
        <div className="card col-lg-4 col-12" key={id}>
            <img src={image} className="card-img-top" alt={nom}  />
            <div className="card-body">
                <h5 className="card-title">{nom}</h5>
                <p className="card-text">{prix}$CA</p>
                <p className="card-text">
                {disponibilite ? (
                            <span className="text-muted">En stock</span>
                        ) : (
                            <span className="text-muted">En rupture de stock</span>
                        )}
                </p>
                
                <Link href={`../modifArticle/${id}`} className="btn btn-primary">📖</Link> <Link href="/inventaire" className="btn btn-dark" onClick={() => handleDeleteshoes(id)}>🗑️</Link>
            </div>
        </div>
        
    );
}
export default ShoesCard;