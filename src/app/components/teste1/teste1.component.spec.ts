import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Teste1Component } from './teste1.component';

describe('Teste1Component', () => {
  let component: Teste1Component;
  let fixture: ComponentFixture<Teste1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Teste1Component ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Teste1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
