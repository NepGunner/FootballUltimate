import { Directive } from '@angular/core';
import { BaseComponent } from "./base-component";

@Directive()
export abstract class ListComponent extends BaseComponent {
   

    constructor() {
        super();
    }

    readPropValue(obj, propName) {
        return obj[propName];
    }

    isNullableObject(objects) {
        let _return: boolean = true;
        for (var key in objects) {
            if (Object.prototype.hasOwnProperty.call(objects, key)) {
                var val = objects[key];
                if (val != null && val != 0) {
                    _return = false;
                    break;
                }
                // use val
            }
        }
        return _return;
    }
    

}
