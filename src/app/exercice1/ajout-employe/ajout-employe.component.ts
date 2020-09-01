import { Component, OnInit } from '@angular/core';
import { EmployService } from '../employ.service';
import { NgForm } from '@angular/forms';
import { Employe } from '../Employe';
@Component({
  selector: 'app-ajout-employe',
  templateUrl: './ajout-employe.component.html',
  styleUrls: ['./ajout-employe.component.css'],
})
export class AjoutEmployeComponent implements OnInit {
  constructor(private EmployService: EmployService) {}
  lesEmployes: Employe[];
  lesFonctions: string[];
  nom: string = 'Mounir Ben Salah';
  matricule: number;
  fonction: string = 'Ingenieur';
  expert: boolean = true;
  submitted: boolean = false;
  message: String;

  onSubmit(f: NgForm) {
    this.submitted = true;
    this.EmployService.addEmploye(this.nom, this.fonction, this.expert);
  }
  lastMatri() {
    this.EmployService.getLastMatricule();
  }

  ngOnInit() {
    this.lesEmployes = this.EmployService.lesEmployes;
    this.lesFonctions = this.EmployService.LesFonctions;
  }
}
