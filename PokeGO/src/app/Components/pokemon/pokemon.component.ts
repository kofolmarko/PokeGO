import { Component, OnInit } from '@angular/core';
import { PokeApiService } from 'src/app/Services/poke-api.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  pokemonList: string[] = [];

  constructor(
    private pokeAPI: PokeApiService
  ) { }

  ngOnInit(): void {
  }

  testLog(): void {
    this.pokeAPI.testLog();
  }

  getAllPokemon(): void {
    this.pokeAPI.getAllPokemon()
      .subscribe((allPokemon) => {
        this.pokemonList = allPokemon.results;
      });
  }

}
