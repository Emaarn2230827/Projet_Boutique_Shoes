import Image from "next/image";


export default function Home() {
  return (
    <main>
      <div className="container mt-5">
            <div className="row justify-content-center">
              <div className="col-md-6">
                <div className="card border-0 bg-light shadow">
                  <div className="card-body p-5">
                    <h2 className="card-title text-center mb-4">Connexion</h2>
                    <form>
                      <div className="form-group">
                        <label htmlFor="nom">Nom d'utilisateur</label>
                        <input type="text" className="form-control" id="nom" placeholder="Entrez votre nom d'utilisateur" />
                      </div>
                      <div className="form-group">
                        <label htmlFor="motDePasse">Mot de passe</label>
                        <input type="password" className="form-control" id="motDePasse" placeholder="Entrez votre mot de passe" />
                      </div>
                      <button type="submit" className="btn btn-danger btn-block">Connexion</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
    </main>
  );
}
