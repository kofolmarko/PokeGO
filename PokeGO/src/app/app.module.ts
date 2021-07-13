import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PokemonComponent } from './components/pokemon/pokemon.component';
import { TypesComponent } from './components/types/types.component';
import { PokemonDataComponent } from './components/pokemon/pokemon-data/pokemon-data.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PokemonComponent,
    TypesComponent,
    PokemonDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
