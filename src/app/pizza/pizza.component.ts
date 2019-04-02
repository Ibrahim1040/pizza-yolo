import { Component,Input} from '@angular/core';
import { PizzaService } from './../pizza.service'

@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css']
})
export class PizzaComponent {
// Ceci est la manierer de donner des datas via le html
	@Input()
	item;

	 constructor(public pizzaService: PizzaService){}

	  ajouterAuPanier (pizza) {
    this.pizzaService.panier.push(pizza);
  }

}
