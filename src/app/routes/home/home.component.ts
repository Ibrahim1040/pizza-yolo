import { Component, OnInit} from '@angular/core';
import { pizzas } from 'src/app/data/pizzas';
import { PizzaService } from 'src/app/pizza.service';
import { HttpClient } from '@angular/common/http';
import { Pizza } from 'src/app/class/pizza';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  // propriétés

  menuComplet;
  menuVisible = true;
  totalPizza;


  constructor(public pizzaService : PizzaService, public httpClient: HttpClient){}
  
  
//Ceci est une propriete qui demande un calcul avant
ngOnInit(){
this.httpClient.get('/assets/pizza.json').subscribe((data: any) => {
  const pizzas = [];
  data.forEach(element => {
    pizzas.push(
              new Pizza(
                  element.id,
                  element.nom,
                  element.ingredients,
                  element.image,
                  element.prix
      )
    );
  });
  this.menuComplet = pizzas;
  });
}

  // méthodes
  voirMenu () {
    this.menuVisible = true;
  }
 
  // splice permet de supprimer un item à un index en particulier


}
