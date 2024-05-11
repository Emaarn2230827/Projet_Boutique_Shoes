"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <header>
            <div className="container-fluid">
                <nav className="row align-items-center navbar navbar-expand-lg navbar-dark">
                    <p className="col-6 col-lg-3 align-items-left">
                        <Image src="/images/logo.jpg" className="navbar-brand" alt="logo" id="logo" width={115} height={115}/>
                    </p>
                    <button 
                        className="col-6 navbar-toggler" 
                        type="button" 
                        onClick={() => setMenuOpen(!menuOpen)} // Inversion de l'état du menu
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`contenuLambda col-6 col-lg-9 align-items-center collapse navbar-collapse ${menuOpen ? 'show' : ''}`} id="navbarNav ">
                        <ul className="navbar-nav  align-items-center col-lg-12 ">
                            <li className="nav-item col-lg-5">
                                <Link href="/inventaire" className="nav-link mx-5" >Inventaire</Link>
                            </li>
                            <li className="nav-item col-lg-5">
                                <Link className="nav-link mx-5" href="../addArticle">➕Ajouter un article</Link>
                            </li>
                            <li className="nav-item col-lg-2 " >
                                <a className="nav-link mx-5" href="/">
                                    <Image src="/images/logoConnexion.png" alt="logoConnexion" id="logoConnexion" width={70} height={70}/>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        </header>
    );
}

export default Header;
