import { Pipe, PipeTransform } from "@angular/core";
import { Utilities } from "../util/utilities";

@Pipe({name: 'formatText'})
export class FormatTextPipe implements PipeTransform {

    /**
     * Constructor
     */
    constructor() {
    }

    /**
     * Transform a string that has line break, tab and space to proper html type
     * @param The string passed as value to be formated
     * @returns {String} The Date object
     */
    transform(value: string): string {
        return Utilities.formatText(value);
    }
}

