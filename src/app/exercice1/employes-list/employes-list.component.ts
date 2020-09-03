import { Component, OnInit } from '@angular/core';
import { EmployService } from '../employ.service';
import { Employe } from '../employe';
@Component({
  selector: 'app-employes-list',
  templateUrl: './employes-list.component.html',
  styleUrls: ['./employes-list.component.css'],
})
export class EmployesListComponent implements OnInit {
  constructor(private EmployService: EmployService) {}
  lesEmplo: Employe[];
  ngOnInit() {
    this.lesEmplo = this.EmployService.lesEmployes;
  }
}
