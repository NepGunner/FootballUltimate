import { Directive } from '@angular/core';
import { DetailComponent } from './detail-component';

@Directive()
export abstract class EditComponent extends DetailComponent{

    constructor() {

        super();
    }
   
}