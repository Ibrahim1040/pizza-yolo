import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
//constructeur
  constructor(public router: Router) { }

// méthodes
  ngOnInit() {
    setTimeout(a => this.router.navigate(["home"]),5000);
  }

}
