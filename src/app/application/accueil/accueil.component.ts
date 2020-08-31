import { Component, OnInit } from '@angular/core';
import { ProduitsService } from '../produits.service';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css'],
})
export class AccueilComponent implements OnInit {
  constructor(private ProduitsService: ProduitsService) {}

  ngOnInit(): void {}
}
