import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Teste2Component } from './teste2.component';

describe('Teste2Component', () => {
  let component: Teste2Component;
  let fixture: ComponentFixture<Teste2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Teste2Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Teste2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
