import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeApiService {

  private apiURL: string = "https://pokeapi.co/api/v2/";

  constructor(
    private http: HttpClient
  ) { }

  testLog(): void {
    console.log("poke-api service works!");
  }

  getAllPokemon(): Observable<any> {
    return this.http.get(`${this.apiURL}pokemon?limit=1118`);
  }

}
