import { IStorage } from './IStorage';
export declare class CookieStorage implements IStorage {
    hasOwnProperty(key: any): boolean;
    getItem(key: any): any;
    setItem(key: any, value: any, config: any): void;
    removeItem(key: any): void;
    clear(): void;
    key(index: any): string;
    readonly length: number;
}
