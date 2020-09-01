import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  Validators,
  FormBuilder,
  FormControl,
} from '@angular/forms';
import { ProduitsService } from '../produits.service';
import { Produit } from '../Produit';
@Component({
  selector: 'app-plus-produit',
  templateUrl: './plus-produit.component.html',
  styleUrls: ['./plus-produit.component.css'],
})
export class PlusProduitComponent implements OnInit {
  lesProduits: Produit[];
  constructor(private ProduitsService: ProduitsService) {}

  productForm: FormGroup = new FormGroup({
    id: new FormControl('', Validators.required),
    libelle: new FormControl('', [
      Validators.required,
      Validators.pattern('[A-Z][a-zA-Z]+'),
    ]),
  });
  public get idProduit() {
    return this.productForm.get('id');
  }
  public get libelleProduit() {
    return this.productForm.get('libelle');
  }
  submitted: boolean = false;
  message = '';
  onSubmitForm() {
    this.submitted = true;

    const ajout = this.ProduitsService.addProduit(
      this.productForm.value['id'],
      this.productForm.value['libelle']
    );
    if (ajout)
      (this.message =
        'Votre nouveau produit:' + this.productForm.value['libelle']),
        +' a bien été ajouté';
    else
      (this.message = "Le produit d'id " + this.productForm.value['id']),
        +' existe déjà !';
  }
  ngOnInit() {
    this.lesProduits = this.ProduitsService.lesProduits;
  }
}
