import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Teste1Component } from 'src/app/components/teste1/teste1.component';
import { Teste2Component } from 'src/app/components/teste2/teste2.component';

@NgModule({
  declarations: [Teste1Component, Teste2Component],
  imports: [
    CommonModule
  ],
  exports: [Teste1Component, Teste2Component]
})
export class TesteModule { }
