import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
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
/*
const routes: Routes = [
  { path: 'presentation', component: PresentationComponent },
  { path: 'listesemployes', component: EmployesListComponent },
  { path: 'ajouteremploye', component: AjoutEmployeComponent },
  { path: 'listesemployes/:matricule', component: SelectedEmployeComponent },
  { path: '', redirectTo: 'presentation', pathMatch: 'full' },
  { path: '**', component: ErrorComponent },
];*/

const routes: Routes = [
  { path: 'accueil', component: AccueilComponent },
  { path: 'produits', component: ProduitsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'produits/:id', component: ProduitComponent },
  { path: 'ajoutProduit', component: AddProduitComponent },
  { path: 'plusproduit', component: PlusProduitComponent },
  { path: '', redirectTo: 'accueil', pathMatch: 'full' },
  { path: '**', component: Error404Component },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
