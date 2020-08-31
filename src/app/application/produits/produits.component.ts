import { Component, OnInit } from '@angular/core';

import { ProduitsService } from '../produits.service';
import { Produit } from '../Produit';
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css'],
})
export class ProduitsComponent implements OnInit {
  lesProd: Produit[];
  constructor(private ProduitsService: ProduitsService) {}

  ngOnInit() {
    this.lesProd = this.ProduitsService.lesProduits;
  }
}
