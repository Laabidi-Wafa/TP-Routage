import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployService } from '../employ.service';
import { Employe } from '../employe';
@Component({
  selector: 'app-selected-employe',
  templateUrl: './selected-employe.component.html',
  styleUrls: ['./selected-employe.component.css'],
})
export class SelectedEmployeComponent implements OnInit {
  lesEmployes: Employe[];
  selectedEmploye;
  /*va recupérer le detail de l employé*/
  matricule: number;
  constructor(
    private activatedRoute: ActivatedRoute,
    private EmployService: EmployService
  ) {}
  expert: boolean = true;

  ngOnInit() {
    this.matricule = this.activatedRoute.snapshot.params['matricule'];
    this.lesEmployes = this.EmployService.lesEmployes;
    this.selectedEmploye = this.EmployService.getEmployeByMatricule(
      this.matricule
    );
  }
}
