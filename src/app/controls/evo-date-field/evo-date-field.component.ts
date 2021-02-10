import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DateUtil } from "../../util/date-util";

@Component({
    selector: "evo-date-field",
    templateUrl: './evo-date-field.component.html',
    styleUrls: [ './evo-date-field.component.scss' ]
})
export class EvoDateField {

    @Output() valueChange = new EventEmitter<string>();
    @Input() disabled: boolean = false;
    @Input() dateFormat = "dd-mm-YYYY";
    private _parsedValue: Date = null;

    constructor(){

    }

    @Input()
    get value(): string{
        return DateUtil.fromDateToEvoDateString(this.parsedValue);
    }
    
    set value(val: string){
        this._parsedValue = DateUtil.fromEvoDateStringToDate(val);
    }

    get parsedValue(): Date{
        return this._parsedValue;
    }

    set parsedValue(val: Date){
        this._parsedValue = val;
        this.valueChange.emit(this.value);
    }
}