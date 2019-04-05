import { Component } from '@angular/core';
import { pizzas } from "./data/pizzas";
import { PizzaService} from './pizza.service';


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent {
  // propriétés
	titre = 'Pizza YOLO';
  menuComplet = pizzas;
  menuVisible = true;
  nom = "";

  constructor(public pizzaService : PizzaService){}
  
  
//Ceci est une propriete qui demande un calcul avant
 

  // méthodes
  voirMenu () {
    this.menuVisible = true;
  }
  // splice permet de supprimer un item à un index en particulier


}
