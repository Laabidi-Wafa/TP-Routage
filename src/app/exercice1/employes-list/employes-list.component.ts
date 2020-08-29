import { Component, OnInit } from '@angular/core';
import { EmployService } from '../employ.service';
@Component({
  selector: 'app-employes-list',
  templateUrl: './employes-list.component.html',
  styleUrls: ['./employes-list.component.css'],
})
export class EmployesListComponent implements OnInit {
  constructor(private EmployService: EmployService) {}
  lesEmplo: any[];
  ngOnInit() {
    this.lesEmplo = this.EmployService.lesEmployes;
  }
}
