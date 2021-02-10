import { EventEmitter, Output, Directive  } from '@angular/core';

@Directive()
export abstract class BaseComponent {

    @Output() actionPerformed2 = new EventEmitter<any>();

    constructor() {

    }
  
     protected  performAction2(nameArg:string)
     {
     };

}
