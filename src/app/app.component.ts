import { Component, OnInit } from '@angular/core';
import { pizzas } from "./data/pizzas";
import { PizzaService} from './pizza.service';
import { HttpClient } from '@angular/common/http';
import { map, delay,tap } from "rxjs/operators";


@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
	// proprietes
	pizzas ;
	//constructeur
	constructor(public httpClient: HttpClient){}

	//methodes
	ngOnInit(){
		this.pizzas = this.httpClient
				.get('/assets/pizza.json')
			
				
	}
				
}