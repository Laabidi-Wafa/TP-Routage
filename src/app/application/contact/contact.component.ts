import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProduitsService } from '../produits.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent implements OnInit {
  constructor(
    private router: Router,
    private ProduitsService: ProduitsService,
    private formBuilder: FormBuilder
  ) {}

  contactForm: FormGroup;
  /* accesseur nom */
  /*
  public get nom() {
    return this.contactForm.get('nom');
  }*/
  /*
  public get email() {
    return this.contactForm.get('email');
  }
  public get genre() {
    return this.contactForm.get('genre');
  }
  public get region() {
    return this.contactForm.get('region');
  }
  public get newsLetter() {
    return this.contactForm.get('newsLetter');
  }*/

  onAccueil() {
    this.router.navigate(['/accueil']);
  }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      nom: ['Ali Ben salah', [Validators.required, Validators.minLength(8)]],
      email: ['ali@gmail.com', [Validators.required]],
      genre: ['Homme', [Validators.required]],
      region: ['Autre'],
      newsLetter: [true],
    });
  }

  onContacter() {
    /*
    console.log(this.contactForm.value);*/
    console.log(this.contactForm.value['nom']);
    console.log(this.contactForm.value['email']);
    console.log(this.contactForm.value['genre']);
    console.log(this.contactForm.value['region']);
    console.log(this.contactForm.value['newsLetter']);
  }
}
