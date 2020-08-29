export class Employe {
  public _matricule: Number;
  public _nom: String;
  public _fonction: String;
  public _expert: boolean;

  constructor(
    matricule: Number,
    nom: String,
    fonction: String,
    expert: boolean
  ) {
    this._matricule = matricule;
    this._nom = nom;
    this._fonction = fonction;
    this._expert = expert;
  }
}
