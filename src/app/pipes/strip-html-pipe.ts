import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'striphtml'
})

export class StripHtmlPipe implements PipeTransform {
    transform(value: string): any {
         if ((value === null) || (value === '')) {
            return '';
        } else {
        //return    value.replace(/(<([^>]+)>)/ig,"");
        return value.replace(/(\<p\>(\&nbsp\;|(\s)*)\<\/p\>|\<br(\s\/)?\>)/ig,"");

          //value.replace(/<([^<\/>]*)>([\s]*?|(?R))<\/\1>/ig,"");
        }
        //return value.replace(/<.*?>/g, ''); // replace tags
    }
}