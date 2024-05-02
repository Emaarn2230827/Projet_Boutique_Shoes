"use client";
import React, { useState, useEffect } from 'react';
import Header from "@/app/ScriptReact/Header";
import modifShoes from "../modifArticleServer";
import { useRouter } from "next/navigation";

export default function ModifShoesForm({params}) {
  const [chaussure, setChaussure] = useState({});
  const [disponibilite, setDisponibilite] = useState(false);
  const router = useRouter();


  useEffect(() => {
    async function fetchChaussure() {
        try {
           
                 
            const response = await  fetch(`http://localhost:3000/chaussures/${params.id}`);
            const json = await response.json();
            setChaussure(json);
            
        } catch (error) {
            console.error('Erreur lors de la récupération des données:', error);
            
        }
    }

    fetchChaussure();
}, [params.id]);

const handleChange = (event) => {
  const { name, value, type, checked } = event.target;
  const newValue = type === 'checkbox' ? checked : value;
  if (name === 'disponibilite') {
    setDisponibilite(newValue);
  }
  setChaussure({ ...chaussure, [name]: newValue });
};


  async function modifChaussure(formData) {
    await modifShoes(formData);
    router.push('../inventaire');
  }

  return (
    <>
      <Header/>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card border-0 bg-light shadow">
              <div className="card-body p-5">
                <h2 className="card-title text-center mb-4">Modifier la chaussure</h2>
                <form action={modifChaussure}>
                  <div className="form-group">
                  <label htmlFor="nom">Id chaussure </label>
                    <input type="text" className="form-control" id="id" name="id" value={params.id} onChange={handleChange}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="nom">Nom de la chaussure</label>
                    <input type="text" className="form-control" id="nom" name="nom" value={chaussure.nom} onChange={handleChange}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="image">URL de l'image</label>
                    <input type="text" className="form-control" id="image" name="image" value={chaussure.image} onChange={handleChange}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="prix">Prix</label>
                    <input type="number" className="form-control" id="prix" name="prix" value={chaussure.prix} onChange={handleChange}/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="description">Description</label>
                    <textarea className="form-control" id="description" name="description"  value={chaussure.description} onChange={handleChange}></textarea>
                  </div>
                  <div className="form-group">
                    <label htmlFor="disponibilite">Disponibile</label>
                    <input type="checkbox" id="disponibilite" name="disponibilite" checked={disponibilite} onChange={handleChange}/>
                  </div>
                  <button type="submit" className="btn btn-danger btn-block">Update</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
