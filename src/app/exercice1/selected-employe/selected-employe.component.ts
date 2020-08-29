import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployService } from '../employ.service';
@Component({
  selector: 'app-selected-employe',
  templateUrl: './selected-employe.component.html',
  styleUrls: ['./selected-employe.component.css'],
})
export class SelectedEmployeComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private EmployService: EmployService
  ) {}
  matricule: number;
  selectedEmploye(matricule: number) {
    this.EmployService.getEmployeByMatricule(matricule);
  }
  ngOnInit() {
    this.matricule = this.activatedRoute.snapshot.params['matricule'];
  }
}
