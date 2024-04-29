"use client";

import React from 'react';
import Link from 'next/link';

function ShoesCard({id, nom, image, prix}) {
    const handleDeleteshoes = async (shoesId) => {
        try {
            const response = await fetch(`http://localhost:3000/chaussures/${shoesId}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ disponibilite: false }),
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
                <Link href={`../modifArticle/${id}`} className="btn btn-primary">📖</Link> <Link href="/inventaire" className="btn btn-dark" onClick={() => handleDeleteshoes(id)}>🗑️</Link>
            </div>
        </div>
        
    );
}
export default ShoesCard;