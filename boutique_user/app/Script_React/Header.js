"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="container-fluid">
        <nav className="row align-items-center navbar navbar-expand-lg navbar-dark">
          <p className="col-6 col-lg-3 align-items-left">
            <Image src="/images/logo.jpg" className="navbar-brand" alt="logo" id="logo" width={115} height={115} />
          </p>
          <button
            className="col-6 navbar-toggler"
            type="button"
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`col-6 col-lg-9 align-items-center collapse navbar-collapse ${menuOpen ? 'show' : ''}`}
            id="navbarNav"
          >
            <ul className="navbar-nav  align-items-center col-lg-12">
              <li className="nav-item col-lg-2">
                <Link href="/" className="nav-link mx-5 contenuLambda">
                  Accueil
                </Link>
              </li>
              <li className="nav-item col-lg-2">
                <Link href="/categorieShoes/homme" className="nav-link mx-5 contenuLambda">
                  Homme
                </Link>
              </li>
              <li className="nav-item col-lg-2">
                <Link href="/categorieShoes/femme" className="nav-link mx-5 contenuLambda">
                  Femme
                </Link>
              </li>
              <li className="nav-item col-lg-2">
                <Link href="/categorieShoes/enfant" className="nav-link mx-5 contenuLambda">
                  Enfant
                </Link>
              </li>
              <li className="nav-item col-lg-3 " align="right">
                <Link href="/panier" className="nav-link mx-5">
                  <Image src="/images/pannier.png" alt="logoPanier" id="logoPanier" width={25} height={25} />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
