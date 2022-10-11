import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CasosRoutingModule } from './casos-routing.module';
import { CasosComponent } from './casos/casos.component';

@NgModule({
    declarations: [
        CasosComponent
    ],
    imports:[
        CommonModule,
        CasosRoutingModule
    ]
})
export class CasosModule{}
