import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from "./app.component";
import { PizzaComponent } from './pizza/pizza.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';

@NgModule({
  declarations: [AppComponent, PizzaComponent, HeaderComponent, HomeComponent, DetailComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
