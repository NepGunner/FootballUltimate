import {Pipe, PipeTransform} from "@angular/core";
import { DateUtil } from "../util/date-util";

@Pipe({name: 'evoDateStringToDate'})
export class EvoDateStringToDatePipe implements PipeTransform {

    /**
     * Constructor
     */
    constructor() {
    }

    /**
     * Transform a date that is passed as string into a date
     * @param value The date passed as string
     * @returns {Date} The Date object
     */
    transform(value: string): Date {
        return DateUtil.fromEvoDateStringToDate(value);
    }
}