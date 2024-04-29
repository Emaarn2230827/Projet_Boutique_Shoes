
import Header from "@/app/ScriptReact/Header";
import modifShoes from "../modifArticleServer";
export default function ModifShoesForm({params}) {

    return (
      <>
        <Header/>
          <div className="container mt-5">
            <div className="row justify-content-center">
              <div className="col-md-8">
                <div className="card border-0 bg-light shadow">
                  <div className="card-body p-5">
                    <h2 className="card-title text-center mb-4">Modifier la chaussure</h2>
                    <form action={modifShoes}>
                    <div className="form-group" hidden>
                        <input type="text" className="form-control" id="id" name="id" value={params.id}/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="nom">Nom de la chaussure</label>
                        <input type="text" className="form-control" id="nom" name="nom"/>
                      </div>
                      <div className="form-group">
                        <label htmlFor="image">URL de l'image</label>
                        <input type="text" className="form-control" id="image" name="image"  />
                      </div>
                      <div className="form-group">
                        <label htmlFor="prix">Prix</label>
                        <input type="number" className="form-control" id="prix" name="prix"  />
                      </div>
                      <div className="form-group">
                        <label htmlFor="description">Description</label>
                        <textarea className="form-control" id="description" name="description"  ></textarea>
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