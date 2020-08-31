import { Component, OnInit } from '@angular/core';
import { ProduitsService } from '../produits.service';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  constructor(private ProduitsService: ProduitsService) {}

  ngOnInit(): void {}
}
