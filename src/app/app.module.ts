import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccueilComponent } from './application/accueil/accueil.component';
import { ProduitsComponent } from './application/produits/produits.component';
import { ContactComponent } from './application/contact/contact.component';
import { Error404Component } from './application/error404/error404.component';
import { MenuComponent } from './application/menu/menu.component';
import { MyMenuComponent } from './exercice1/my-menu/my-menu.component';
import { PresentationComponent } from './exercice1/presentation/presentation.component';
import { EmployesListComponent } from './exercice1/employes-list/employes-list.component';
import { SelectedEmployeComponent } from './exercice1/selected-employe/selected-employe.component';
import { AjoutEmployeComponent } from './exercice1/ajout-employe/ajout-employe.component';
import { ErrorComponent } from './exercice1/error/error.component';
import { ProduitComponent } from './application/produit/produit.component';
import { AddProduitComponent } from './application/add-produit/add-produit.component';
import { PlusProduitComponent } from './application/plus-produit/plus-produit.component';

@NgModule({
  declarations: [
    AppComponent,
    AccueilComponent,
    ProduitsComponent,
    ContactComponent,
    Error404Component,
    MenuComponent,
    MyMenuComponent,
    PresentationComponent,
    EmployesListComponent,
    SelectedEmployeComponent,
    AjoutEmployeComponent,
    ErrorComponent,
    ProduitComponent,
    AddProduitComponent,
    PlusProduitComponent,
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
