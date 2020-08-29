import { Component, OnInit } from '@angular/core';
import { EmployService } from '../employ.service';
@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css'],
})
export class PresentationComponent implements OnInit {
  lesEmpolys: any[];
  constructor(private EmployService: EmployService) {}

  ngOnInit() {
    this.lesEmpolys = this.EmployService.lesEmployes;
  }
  onget(matricule: number) {
    this.EmployService.getEmployeByMatricule(matricule);
  }
}
