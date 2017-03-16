import { IStorageSetConfig } from './IStorage';
export declare class Cookie {
    static getAll(): Object;
    static get(key: any): any;
    static set(key: any, value: any, config?: IStorageSetConfig): void;
    static remove(key: any): void;
}
