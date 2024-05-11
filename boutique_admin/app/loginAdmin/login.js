"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

function Login() {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const user = {
      nom: username,
      password: password
    };


    fetch('http://localhost:3000/loginAdmin')
      .then(response => response.json())
      .then(data => {
        const validUser = data.find(item => item.nom === user.nom && item.password === user.password);
        if (validUser) {
          // Rediriger vers une autre page si l'authentification réussit
          router.push('../inventaire');
        } else {
          // Afficher un message d'erreur si l'authentification échoue
          setErrorMessage('Nom d\'utilisateur ou mot de passe incorrect. Veuillez réessayer.');
        }
      })
      .catch(error => console.error('Erreur lors de la récupération des données:', error));
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card border-0 bg-light shadow">
            <div className="card-body p-5">
              <h2 className="card-title text-center mb-4">Login</h2>
              <form onSubmit={handleFormSubmit}>
                <div className="form-group contenuLambda">
                  <label htmlFor="nom">Nom d'utilisateur</label>
                  <input type="text" className="form-control " id="nom" placeholder="Entrez votre nom d'utilisateur" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <br />
                <div className="form-group contenuLambda">
                  <label htmlFor="motDePasse" >Mot de passe</label>
                  <input type="password" className="form-control" id="motDePasse" placeholder="Entrez votre mot de passe" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <br />
                {errorMessage && <p className="text-danger contenuLambda">{errorMessage}</p>}
                <button type="submit" className="btn btn-danger btn-block ">Connexion</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
