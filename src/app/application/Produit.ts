export class Produit {
  private _id: number;
  private _libelle: string;
  constructor(id: number, libelle: string) {
    this._id = id;
    this._libelle = libelle;
  }
  public get libelle(): string {
    return this._libelle;
  }
  public set libelle(value: string) {
    this._libelle = value;
  }
  public get id(): number {
    return this._id;
  }
  public set id(value: number) {
    this._id = value;
  }
}
