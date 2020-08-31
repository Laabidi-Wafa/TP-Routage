import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProduitsService } from '../produits.service';
@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css'],
})
export class ProduitComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private ProduitsService: ProduitsService
  ) {}
  identifiant: number;
  ngOnInit() {
    this.identifiant = this.activatedRoute.snapshot.params['id'];
  }
}
