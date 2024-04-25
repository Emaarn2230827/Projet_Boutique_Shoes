"use client";

import React, { useState, useEffect } from 'react';
import ShoesCard from './ShoesCard';

function ShoesList() {
    const [chaussures, setChaussures] = useState([]);

    useEffect(() => {
        async function fetchChaussures() {
            try {
                            
                // Récupère les chaussures à partir du serveur
                const response = await fetch('http://localhost:3000/chaussures');
                if (!response.ok) {
                    throw new Error('Erreur de réseau ou serveur indisponible');
                }
                
                const json = await response.json();
                setChaussures(json);
            } catch (error) {
               
            }
        }


        fetchChaussures();
    }, []);

    return (
        <div className="container-fluid">
            <div className="row align-items-center" >
                {chaussures.map(ch => (
                    <ShoesCard key={ch.id} id={ch.id} nom={ch.nom} image={ch.image} prix={ch.prix} disponibilite={ch.disponibilite}/>
                ))}
            </div>
        </div>
    );
}

export default ShoesList;
