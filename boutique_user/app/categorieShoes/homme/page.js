"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import Header from "../../Script_React/Header";
import Footer from "../../Script_React/Footer";
import ShoesCard from "@/app/Script_React/ShoesCard";
import ShoesList from "../../Script_React/ShoesList";


export default function Homme() {
  const [nomShoes, setNomShoes] = useState('');
  const [chaussure, setChaussure] = useState(null);
  const [offcanvasVisible, setOffcanvasVisible] = useState(false); // Nouvel état pour contrôler la visibilité du offcanvas

  useEffect(() => {
    async function fetchResearchChaussures() {
      try {
        const response = await fetch(`http://localhost:3000/chaussures?nom=${nomShoes}`);
        const json = await response.json();
        if (json.length > 0) {
          setChaussure(json[0]); // affiche uniquement la première chaussure trouvée
          setOffcanvasVisible(true); // Ouvrir le offcanvas lorsqu'une chaussure correspondante est trouvée
          setNomShoes('');
        } else {
          setChaussure(null); // Réinitialiser si aucune chaussure n'est trouvée
          alert('Aucune chaussure correspondante n\'a été trouvé');
        }
      } catch (error) {
        console.error('Erreur lors de la recherche des chaussures:', error);
      }
    }

    if (nomShoes !== '') {
      fetchResearchChaussures();
    }
  }, [nomShoes]);

  const handleSearchSubmit = (e) => {
    e.preventDefault(); 
    setNomShoes(e.target.elements.search.value);
  };

  return (
    <main>
      <Header />

      <div className={`offcanvas offcanvas-end ${offcanvasVisible ? 'show' : ''}`} tabIndex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">Resultat de la recherche</h5>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" onClick={() => setOffcanvasVisible(false)}></button>


        </div>
        <div className="offcanvas-body">
        {chaussure && (
            <ShoesCard key={chaussure.id} id={chaussure.id} nom={chaussure.nom} image={chaussure.image} prix={chaussure.prix} disponibilite={chaussure.disponibilite}/>
          )}
        </div>
      </div>

      <br/>
      <form className="d-flex" onSubmit={handleSearchSubmit}>
        <input className="form-control me-2" type="search" name="search" placeholder="Rechercher une chaussure" aria-label="Search" style={{width: 500}} />
        <button className="btn btn-outline-danger" type="submit">Rechercher</button>
      </form>

      <div className="container-fluid">
        <br/>
        <div className="row">
          <figure className="col-12 col-lg-12">
            <Image src="/images/pubH.jpg"  alt="logo"className="banner" width={1960}  height={516} />
          </figure>
        </div>
      </div>

      <ShoesList />
      <Footer />
    </main>
  );
}
