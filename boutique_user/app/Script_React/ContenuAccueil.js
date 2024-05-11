import React from 'react';


function ContenuAccueil() {

    return (
        <>
            <div className="container-fluid">
                <div className="row align-items-center" >
                    <div className="message-container col-12 col-lg-12">
                        <div className="message">Bienvenue sur Reinold Shoes, la référence en  matière de ventes de chaussures de marque au Canada</div>
                    </div>
                    <p className="contenuAccueil col-12 col-lg-12 "> Les chaussures de toutes les marques à votre disposition et à des prix imbattables!!!</p>
                    <video  controls width="100%" height="370" className="col-12 col-lg-12">
                        <source src="/videos/pub1.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>              
                    <p className="contenuAccueil col-12 col-lg-12 "> Des chaussures à la portée de tout le monde, Homme, Femme et Enfant pour toutes les disciplines sportives!!!</p>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-lg-4">
                    <div className="card" style={{ backgroundImage: 'url("/images/imageAccueil/hommes.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', height: '550px'}}>
                        <div className="card-body">
                            <a href="../categorieShoes/homme" className="btn btn-danger">MAGASINER</a>
                        </div>
                    </div>
                </div>

                    <div className="col-12 col-lg-4">
                        <div className="card" style={{ backgroundImage: 'url("/images/imageAccueil/femmes.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', height: '550px'}}>
                            <div className="card-body">
                                <a href="/page2" className="btn btn-danger">MAGASINER</a>
                            </div>
                        </div>
                    </div>


                    <div className="cardEnd col-12 col-lg-4">
                        <div className="card" style={{ backgroundImage: 'url("/images/imageAccueil/Enfants.jpg")', backgroundSize: 'cover', backgroundPosition: 'center', height: '550px'}}>
                            <div className="card-body">
                                <a href="/page2" className="btn btn-danger">MAGASINER</a>
                            </div>
                        </div>

                </div>
            </div>
        </>

    );
}
export default ContenuAccueil

