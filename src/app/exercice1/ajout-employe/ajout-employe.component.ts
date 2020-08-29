import { Component, OnInit } from '@angular/core';
import { EmployService } from '../employ.service';
@Component({
  selector: 'app-ajout-employe',
  templateUrl: './ajout-employe.component.html',
  styleUrls: ['./ajout-employe.component.css'],
})
export class AjoutEmployeComponent implements OnInit {
  constructor(private EmployService: EmployService) {}

  ngOnInit() {}
}
