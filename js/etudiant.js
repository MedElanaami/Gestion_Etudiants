import { ENDPOINT } from "./constants.js";
export default class Etudiant {
  constructor(id, nom, prenom, age, note) {
    this.id = id;
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.note = note;
  }

  static allEtudiant = async function () {
    const response = await fetch(ENDPOINT);
    const etudiants = await response.json();
    return etudiants;
  };
}
