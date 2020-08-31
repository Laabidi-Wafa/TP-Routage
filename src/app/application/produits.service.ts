import { Injectable } from '@angular/core';
import { Produit } from '../application/Produit';
@Injectable({
  providedIn: 'root',
})
export class ProduitsService {
  lesProduits = [
    new Produit(15, 'montre'),
    new Produit(32, 'cartable'),
    new Produit(45, 'cahier'),
    new Produit(96, 'tablier'),
  ];

  constructor() {}

  public getProduitByID(id: number): Produit {
    for (let e of this.lesProduits) {
      if (e.id == id) {
        return e;
      } else return null;
    }
  }
  public addProduit(id: number, libelle: string): boolean {
    var e = this.lesProduits;
    if (this.getProduitByID(id) == null) {
      this.lesProduits.push(new Produit(id, libelle));
      return true;
    }
    return false;
  }
}
