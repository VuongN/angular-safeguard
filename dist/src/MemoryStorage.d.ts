import { IStorage } from './IStorage';
export declare class MemoryStorage implements IStorage {
    hasOwnProperty(key: any): boolean;
    getItem(key: any): any;
    setItem(key: any, value: any, config: any): void;
    removeItem(key: any): void;
    clear(): void;
    key(index: any): any;
    readonly length: number;
}
