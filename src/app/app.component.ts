import { Component } from '@angular/core';
import { pizzas } from "./data/pizzas";

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
  panier = [];
//Ceci est une propriete qui demande un calcul avant
  get total () {
    let total = 0;
    for(let i = 0; i < this.panier.length; i++) {
      total += this.panier[i].prix;
    }
    return total;
    // return this.panier.reduce((acc, cur) => acc + cur.prix, 0);
  }

  // méthodes
  voirMenu () {
    this.menuVisible = true;
  }
  ajouterAuPanier (pizza) {
    this.panier.push(pizza);
  }
  // splice permet de supprimer un item à un index en particulier
  supprimerItem(index) {
    this.panier.splice(index, 1)
  }

}
