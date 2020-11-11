import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { CatFact } from '../models/cat-fact/cat-fact';

@Injectable({
  providedIn: 'root',
})
export class CatFactsService {
  apiUrl = 'https://cat-fact.herokuapp.com';

  constructor(private http: HttpClient) {}

  getCatFact(id: string = '591f98803b90f7150a19c229'): Observable<CatFact> {
    return this.http.get<CatFact>(`${this.apiUrl}/facts/${id}`).pipe(map(
      (data) => new CatFact(data)
    ));
  }

  getCatFacts(): Observable<CatFact[]> {
    return this.http.get<CatFact[]>(
      `${this.apiUrl}/facts/random?animal_type=cat&amount=5`
    ).pipe(map((dataLista) => dataLista.map((data) => new CatFact(data))));
  }
}
