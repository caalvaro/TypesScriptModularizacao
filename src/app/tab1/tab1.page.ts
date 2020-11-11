import { Component } from '@angular/core';
import { CatFact } from '../models/cat-fact/cat-fact';
import { CatFactsService } from '../services/cat-facts.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  randomCatFact: CatFact;
  catFacts: CatFact[];

  constructor(private catFactsService: CatFactsService) {}

  getCatFact(): void {
    this.catFactsService.getCatFact().subscribe((res) => {
      this.randomCatFact = res;
      console.log(this.randomCatFact);
    });
  }

  getCatFacts(): void {
    this.catFactsService.getCatFacts().subscribe((res) => {
      this.catFacts = res;
      console.log(this.catFacts);
    });
  }
}
