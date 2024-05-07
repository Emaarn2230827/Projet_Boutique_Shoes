
import Image from "next/image";
import Header from "../../Script_React/Header";
import Footer from "../../Script_React/Footer";
import ShoesList from "../../Script_React/ShoesList";

export default function Homme() {
  return (
    <main>
      <Header />
      <br/>
      <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Rechercher une chaussure" aria-label="Search" style={{width: 500}} />
              <button className="btn btn-outline-danger" type="submit">Rechercher</button>
  
      </form>
      <br/>
      <div className="container-fluid">
        <br/>
        <div className="row">
        <figure className="col-12 col-lg-12">
        <Image src="/images/pubH.jpg"  alt="logo" width={2000} height={516}></Image>
        </figure>
        </div>
      </div>
      <br/>
      <br/>
      <ShoesList />
      <br/>
      <Footer />
    </main>


  );
}
