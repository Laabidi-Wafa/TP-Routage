import { Injectable } from '@angular/core';
import { Employe } from '../exercice1/employe';
@Injectable({
  providedIn: 'root',
})
export class EmployService {
  lesEmployes = [
    new Employe(12345, 'Mounir Ben Ali', 'Directeur', true),
    new Employe(12587, 'Maha Ben Nasr', 'Ingénieur', false),
    new Employe(85719, 'Alia Moalla', 'Secrétaire', false),
    new Employe(45879, 'Sami Toumi', 'Ingénieur', true),
  ];
  getEmployeByMatricule(matricules: number) {
    var e = this.lesEmployes;
    for (let e of this.lesEmployes) {
      if (e._matricule == matricules) {
        return '<p>' + e._nom, e._fonction, e._matricule + '</p>';
      }
    }
  }
  addEmploye(
    matricule: number,
    nom: String,
    fonction: String,
    expert: boolean
  ) {
    var e = this.lesEmployes;
    e = [new Employe(matricule, nom, fonction, expert)];
  }

  constructor() {}
}
