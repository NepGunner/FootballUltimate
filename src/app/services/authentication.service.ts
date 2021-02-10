import { Injectable, Output, EventEmitter, OnInit } from '@angular/core';
@Injectable()
export class AuthenticationService implements OnInit{

    @Output() actionChanged = new EventEmitter<any>(); 
   
    constructor(){

    }
      public static castJSON<T>(json: any, TCreator: { new(): T ;} ): T {
        return Object.assign(new TCreator(), json);
    }

    public currentPage:string = '';
    ngOnInit(){
        
    }
    

    
}