import React, { useState } from 'react';
import './FicheTechnique.css'; // Créez un fichier CSS séparé pour y mettre le style

const FicheTechnique1 = () => {
  const [values, setValues] = useState({
    champ1: '',
    champ2: '',
    champ3: '',
    champ4: '',
    champ5: '',
    champ6: '',
    champ7:'',
    champ8:'',
    champ9:'',
  });

  const handleInputChange = (fieldName) => (event) => {
    setValues({ ...values, [fieldName]: event.target.value });
  };

  const handleSave = () => {
    // Ajoutez ici la logique pour sauvegarder les informations.
    console.log('Informations sauvegardées:', values);
  };

  return (
    <div className="fiche-technique">
      <h2>Fiche technique</h2>

      <div className="input-group">
        <label htmlFor="champ1">Nom : </label>
        <input
          type="text"
          id="champ1"
          placeholder="Entrez la valeur pour Champ 1"
          value={values.champ1}
          onChange={handleInputChange('champ1')}
        />
      </div>
      <div className="input-group">
        <label htmlFor="champ2">Spécialité : </label>
        <input
          type="text"
          id="champ2"
          placeholder="Entrez la valeur pour Champ 2"
          value={values.champ2}
          onChange={handleInputChange('champ2')}
        />
      </div>
      <div className="input-group">
        <label htmlFor="champ3">Date de travail : </label>
        <input
          type="text"
          id="champ3"
          placeholder="Entrez la valeur pour Champ 3"
          value={values.champ3}
          onChange={handleInputChange('champ3')}
        />
      </div>
      <div className="input-group">
        <label htmlFor="champ4">L'heure : </label>
        <input
          type="text"
          id="champ4"
          placeholder="Entrez la valeur pour Champ 4"
          value={values.champ4}
          onChange={handleInputChange('champ4')}
        />
      </div>
      <div className="input-group">
        <label htmlFor="champ5">Location : </label>
        <input
          type="text"
          id="champ5"
          placeholder="Entrez la valeur pour Champ 5"
          value={values.champ5}
          onChange={handleInputChange('champ5')}
        />
      </div>
      <div className="input-group">
        <label htmlFor="champ6">Langue : </label>
        <input
          type="text"
          id="champ6"
          placeholder="Entrez la valeur pour Champ 6"
          value={values.champ6}
          onChange={handleInputChange('champ6')}
        />
      </div>
      <div className="input-group">
        <label htmlFor="champ7">Email: </label>
        <input
          type="text"
          id="champ7"
          placeholder="Entrez la valeur pour Champ 6"
          value={values.champ7}
          onChange={handleInputChange('champ7')}
        />
      </div>
      <div className="input-group">
        <label htmlFor="champ8">numéro de téléphone: </label>
        <input
          type="text"
          id="champ8"
          placeholder="Entrez la valeur pour Champ 6"
          value={values.champ8}
          onChange={handleInputChange('champ8')}
        />
      </div>
      <div className="input-group">
        <label htmlFor="champ9">Expérience: </label>
        <input
          type="text"
          id="champ9"
          placeholder="Entrez la valeur pour Champ 6"
          value={values.champ9}
          onChange={handleInputChange('champ9')}
        />
      </div>
      <hr />

      <button className="save-button" onClick={handleSave}>
        prendre rendez vouz
      </button>
    </div>
  );
};

export default FicheTechnique1;
