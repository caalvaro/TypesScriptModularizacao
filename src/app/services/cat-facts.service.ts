import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CatFactsService {
  apiUrl = 'https://cat-fact.herokuapp.com';

  constructor(private http: HttpClient) {}

  getCatFact(id: string = '591f98803b90f7150a19c229'): Observable<any> {
    return this.http.get(`${this.apiUrl}/facts/${id}`);
  }

  getCatFacts(): Observable<any> {
    return this.http.get(
      `${this.apiUrl}/facts/random?animal_type=cat&amount=5`
    );
  }
}
