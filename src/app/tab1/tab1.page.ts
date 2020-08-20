import { Component } from '@angular/core';
import { CatFactsService } from '../services/cat-facts.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  randomCatFact: any;
  catFacts: any[];

  constructor(private catFactsService: CatFactsService) {}

  getCatFact() {
    this.catFactsService.getCatFact().subscribe((res) => {
      this.randomCatFact = res;
      console.log(this.randomCatFact);
    });
  }

  getCatFacts() {
    this.catFactsService.getCatFacts().subscribe((res) => {
      this.catFacts = res;
      console.log(this.catFacts);
    });
  }
}
