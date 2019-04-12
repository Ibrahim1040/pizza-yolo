import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from "./app.component";
import { PizzaComponent } from './pizza/pizza.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './routes/home/home.component';
import { DetailComponent } from './routes/detail/detail.component';
import { NotFoundComponent } from './routes/not-found/not-found.component';
import { HttpClient } from 'selenium-webdriver/http';

@NgModule({
  declarations: [AppComponent, PizzaComponent, HeaderComponent, HomeComponent, DetailComponent, NotFoundComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule,HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
