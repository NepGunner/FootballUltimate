import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DateUtil } from '../../util/date-util';

@Component({
    selector:"evo-calendar",
    templateUrl:"evo-calendar.component.html",
})
export class EvoCalendar {

    _value: string;
    @Output() valueChange = new EventEmitter<string>();
    @Input() dateRange: string = "2000:" + (new Date().getFullYear());

    constructor(){

    }

    @Input()
    public set value(val: string){
        this._value = val;
        this.valueChange.emit(val);
    }

    public get value(): string{
        return this._value;
    }

    convertDateToEvoDateString(dateValue: Date){
        return DateUtil.fromDateToEvoDateString(dateValue);
    }
    
}