import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitsService } from '../produits.service';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor(
    private router: Router,
    private ProduitsService: ProduitsService
  ) {}
  onAccueil() {
    this.router.navigate(['/accueil']);
  }

  ngOnInit(): void {}
}
