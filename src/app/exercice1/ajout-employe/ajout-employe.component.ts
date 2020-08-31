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
  nom: string = 'Mounir';
  matricule: number;
  fonction: string = 'Ingenieur';
  expert: boolean;
  submitted: boolean = false;
  message: String;

  onSubmit(f: NgForm) {
    this.submitted = true;
    const ajout = this.EmployService.addEmploye(
      this.matricule,
      this.nom,
      this.fonction,
      this.expert
    );
  }

  ngOnInit() {
    this.lesEmployes = this.EmployService.lesEmployes;
  }
}
