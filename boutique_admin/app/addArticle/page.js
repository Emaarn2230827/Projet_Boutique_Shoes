"use client";
import { useState } from 'react';
import addShoes from './addArticleServer';
import { useRouter } from 'next/navigation';

function AddShoesForm() {
  const router = useRouter();
  async function addChaussure(formData) {
    await addShoes(formData);
    router.push('../inventaire');
  }
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card border-0 bg-light shadow">
            <div className="card-body p-5">
              <h2 className="card-title text-center mb-4">Ajouter une chaussure</h2>
              <form action={addChaussure}>
                <div className="form-group">
                  <label htmlFor="nom">Nom de la chaussure</label>
                  <input type="text" className="form-control" id="nom" name="nom"required />
                </div>
                <div className="form-group">
                  <label htmlFor="image">URL de l'image</label>
                  <input type="text" className="form-control" id="image" name="image"  required />
                </div>
                <div className="form-group">
                  <label htmlFor="prix">Prix</label>
                  <input type="number" className="form-control" id="prix" name="prix"  required />
                </div>
                <div className="form-group">
                  <label htmlFor="description">Description</label>
                  <textarea className="form-control" id="description" name="description"  required></textarea>
                </div>
                <button type="submit" className="btn btn-danger btn-block">Ajouter</button>

              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddShoesForm;
