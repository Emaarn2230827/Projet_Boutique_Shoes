"use client";
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

function ShoesCard({ id, nom, image, prix, disponibilite }) {
    return (
        <div className="col-12 col-lg-4" key={id}>
            <div className="card" style={{ width: '20rem' }}>            
                <Image src={image} className="card-img-top" alt="Image de chaussure" width={450} height={350} />              
                <div className="card-body">
                    <h5 className="card-title">{nom}</h5>
                    <p className="card-text">Prix: {prix}$</p>
                    <div className="d-flex justify-content-between align-items-center">
                    <Link href={`BlogPost/${id}`} className="blog">
                        <button className="btn btn-outline-primary">Voir plus</button>
                    </Link>
                        {disponibilite ? (
                            <span className="text-muted">En stock</span>
                        ) : (
                            <span className="text-muted">En rupture de stock</span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ShoesCard;
