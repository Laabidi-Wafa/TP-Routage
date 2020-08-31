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
  submitted: boolean = false;
  message = '';
  /* ************************************* */
  onSubmit(f: NgForm) {
    //  console.log(this.identifiant+ " "+ this.libelle);
    //  console.log("Affichage à partir du formulaire"+f.value['id']+" "+ f.value['lib']);
    this.submitted = true;

    const ajout = this.ProduitsService.addProduit(
      this.identifiant,
      this.libelle
    );
    if (ajout)
      this.message =
        'Votre nouveau produit:' + this.libelle + ' a bien été ajouté';
    else
      this.message = "Le produit d'id " + this.identifiant + ' existe déjà !';
  }

  onAddProd(id: number, libelle: string) {
    this.ProduitsService.addProduit(id, libelle);
  }
  ngOnInit() {
    this.listePr = this.ProduitsService.lesProduits;
  }
}
