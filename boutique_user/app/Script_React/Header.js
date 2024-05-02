import Image from "next/image";
import Link from "next/link";
function Header() {
    return (
        <header>
            <div className="container-fluid">
                <nav className="row align-items-center navbar navbar-expand-lg navbar-dark">
                    <p className="col-6 col-lg-2 align-items-left">
                        <Image src="/images/logo.jpg" className="navbar-brand" alt="logo" id="logo" width={115} height={115}/>
                    </p>
                    <button className="col-6 navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="col-6 col-lg-10 align-items-center collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav row align-items-center">
                            <li className="nav-item col-lg-3">
                                <Link href="/" className="nav-link mx-5" >Accueil</Link>
                            </li>
                            <li className="nav-item col-lg-3">
                                <Link className="nav-link mx-5" href="/categorieShoes/homme">Homme</Link>
                            </li>
                            <li className="nav-item col-lg-2">
                                <Link className="nav-link mx-5" href="/categorieShoes/femme">Femme</Link>
                            </li>
                            <li className="nav-item col-lg-2">
                                <Link className="nav-link mx-5" href="/categorieShoes/enfant">Enfant</Link>
                            </li>
                            <li className="nav-item col-lg-2">
                                <Link className="nav-link mx-5" href="/panier">
                                    <Image src="/images/pannier.png" alt="logoPannier" id="logoPannier" width={25} height={25}/>
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
