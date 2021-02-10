import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from '../../services/authentication.service';
import { ObjectReferenceCollection } from '../../services/object-reference-collection.service';

@Component({
    selector: "table-custom",
    templateUrl: './table-custom.component.html',
    styleUrls: ['./table-custom.component.scss']
})
export class TableCustom implements OnInit {

    @Input() data: any[] = []; 
    @Input() styleClass: {} = {}; 
    @Input() mode: string = 'normal' ; 
    @Input() layout:string = 'normal' ; 
    error: any = null;

    @Output() itemChange = new EventEmitter<any>();

    constructor(
        public authenticationService: AuthenticationService,
        private objectReferenceCollection: ObjectReferenceCollection,
        ) {

    }

    ngOnInit() {
        if (this.data != undefined && this.data.length == 0) {
            throw new Error("No data");
        }
    }

    ngAfterViewInit() {
    }

    ngOnChanges(changes) {
        
    }
}

