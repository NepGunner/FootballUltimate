import { Directive } from '@angular/core';
import { BaseComponent } from './base-component';


@Directive()
export abstract class DetailComponent extends BaseComponent{

    constructor() {
        super();
    }

     
}