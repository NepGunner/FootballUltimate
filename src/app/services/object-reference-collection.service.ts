import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class ObjectReferenceCollection implements IKeyedCollection {

    private items: { [index: string]: any[] } = {};

    private static readonly COMBO_LOCAL_STORAGE_KEY = "PDM_COMBO";


    constructor() {

        this.loadComboFromStorage();
        //console.log(this.user)
    }
    public static castJSON<T>(json: any, TCreator: { new (): T; }): T {
        return Object.assign(new TCreator(), json);
    }
    private loadComboFromStorage() {

        let loadedComboString = sessionStorage.getItem(ObjectReferenceCollection.COMBO_LOCAL_STORAGE_KEY);
        if (loadedComboString != null) {
            //console.log("User loaded from local storage");
            let loaded = JSON.parse(loadedComboString);
            this.items = loaded;
            //console.log(`objectreference :  ${JSON.stringify(this.items)}`);

        }
        else {
            console.log("No combo found in local storage");
        }
    }
    public SaveCombo() {
       // console.log(`objectreference :  ${JSON.stringify(this.items)}`);
        sessionStorage.setItem(ObjectReferenceCollection.COMBO_LOCAL_STORAGE_KEY, JSON.stringify(this.items));


    }
    /*
       there will be always one current item of each collection  
    */
    private currentItems: { [index: string]: any } = {};

    private count: number = 0;


    public ContainsKey(key: string): boolean {
        return this.items.hasOwnProperty(key);
    }

    public getPrevious(key: string): any {
        //if (this._selectedRecord != null && this.data != null && this.data.length > 0) {
        if (this.ContainsKey(key) && this.Item(key).length > 0) {
            let i: number = 0;
            for (let item of this.Item(key)) {
                if (item == this.currentItems[key]) {
                    this.currentItems[key] = this.Item(key).length > 0 && (i - 1) >= 0 ? this.Item(key)[i - 1] : this.currentItems[key];
                    return this.Item(key).length > 0 && (i - 1) >= 0 ? this.Item(key)[i - 1] : this.currentItems[key];
                }
                i += 1;
            }

        }
        return this.currentItems[key];
    }

    public getNext(key: string): any {
        if (this.ContainsKey(key) && this.Item(key).length > 0) {
            let i: number = 0;
            for (let item of this.Item(key)) {
                if (item == this.currentItems[key]) {
                    this.currentItems[key] = this.Item(key).length > (i + 1) ? this.Item(key)[i + 1] : this.currentItems[key];
                    return this.Item(key).length > (i + 1) ? this.Item(key)[i + 1] : this.currentItems[key];
                }
                i += 1;
            }

        }
        return this.currentItems[key];
    }
    public Count(): number {
        return this.count;
    }

    public Add(key: string, current: any, value: any) {
        this.items[key] = value;
        //console.log(`itemadded  : ${value.length}  = ${this.items[key].length}`);
        if (current != null) {
            this.currentItems[key] = current;
            this.count++;
        }

    }


    public Remove(key: string): any[] {
        var val = this.items[key];
        delete this.items[key];
        delete this.currentItems[key];
        this.count--;
        return val;
    }

    public Item(key: string): any[] {
        if (this.ContainsKey(key)) {
            //console.log(`stringify : ${JSON.stringify(this.items[key])}`);
            return this.items[key];

        }
        return [];
    }
    public ItemCurrent(key): any {
        return this.currentItems[key];

    }
    public Keys(): string[] {
        var keySet: string[] = [];

        for (var prop in this.items) {
            if (this.items.hasOwnProperty(prop)) {
                keySet.push(prop);
            }
        }

        return keySet;
    }

    public Values(): any[] {
        var values: any[] = [];

        for (var prop in this.items) {
            if (this.items.hasOwnProperty(prop)) {
                values.push(this.items[prop]);
            }
        }

        return values;
    }
}

export interface IKeyedCollection {
    Add(key: string, current: any, value: any[]);
    ContainsKey(key: string): boolean;
    Count(): number;

    Item(key: string): any[];
    ItemCurrent(key: string): any;
    Keys(): string[];
    Remove(key: string): any[];
    Values(): any[];
}
