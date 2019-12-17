import React from "react";

class Information extends React.Component {
  state = {};
  render() {
    return (
      <div className="contenu_information">
        <h2>Informations</h2>
        <section className="information">
          <article className="titre_description">
            <div className="titre">
              <p>Modifier le titre du projet</p>
              <input type="text" name="" id="" placeholder="Titre..." />
            </div>
            <div className="description">
              <p>Description du projet</p>
              <textarea
                name=""
                id=""
                rows="13"
                placeholder="Description..."
              ></textarea>
            </div>
          </article>
          <article className="autre">
            <div className="langue_logo">
              <div className="langue">
                <div className="langageFrame">
                  <p>Technologies utilisées</p>
                  <select name="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="fiat">Fiat</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
                <div className="langageFrame">
                  <p>Frameworks et Outils</p>
                  <select name="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="fiat">Fiat</option>
                    <option value="audi">Audi</option>
                  </select>
                </div>
              </div>
              <div className="logo">
                <img src="http://placehold.it/450x700" alt="" />
                <input
                  type="file"
                  name=""
                  id=""
                  accept="image/png, image/jpeg"
                />
              </div>
            </div>
            <div className="valider">
              <button className="btn btn-success w-100 h-100">
                METTRE À JOUR
              </button>
            </div>
          </article>
        </section>
      </div>
    );
  }
}

export default Information;
