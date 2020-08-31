import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ProduitsService } from '../produits.service';
import { Produit } from '../Produit';
@Component({
  selector: 'app-add-produit',
  templateUrl: './add-produit.component.html',
  styleUrls: ['./add-produit.component.css'],
})
export class AddProduitComponent implements OnInit {
  listePr: Produit[]; //la liste des produits
  /* ************************************* */
  constructor(private ProduitsService: ProduitsService) {}
  identifiant: number = 12;

  libelle: string = 'PC';
  /* ************************************* */
  onSubmit(f: NgForm) {
    /*premiere methode*/
    console.log('id = ' + this.identifiant + ' libelle = ' + this.libelle);
    /*deuxieme méthode*/
    console.log(
      'l identifiant de produit est egal a  ' +
        f.value['id'] +
        ' et le libelle de produit est egal a ' +
        f.value['lib']
    );
    /* ************************************* */
  }

  onAddProd(id: number, libelle: string) {
    this.ProduitsService.addProduit(id, libelle);
  }
  ngOnInit() {
    this.listePr = this.ProduitsService.lesProduits;
  }
  submitted: boolean = false;
  message: String;
}
