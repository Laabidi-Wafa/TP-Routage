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
  LesFonctions = ['Directeur', 'Ingénieur', 'Secrétaire'];

  getEmployeByMatricule(matricules: number) {
    for (let e of this.lesEmployes) {
      if (e._matricule == matricules) {
        return e;
      }
    }
  }

  public addEmploye(nom: string, fonction: string, expert: boolean) {
    for (let e of this.lesEmployes) {
      var j = e._matricule + 1;
      this.lesEmployes.push(new Employe(j, nom, fonction, expert));
    }
  }
  /*
  getLastMatricule() {
    for (let e in this.lesEmployes) {
      return;
    } 
  }*/
  constructor() {}
}
