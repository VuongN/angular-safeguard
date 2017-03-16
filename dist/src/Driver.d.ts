import { IStorage, IStorageSetConfig } from './IStorage';
export declare class Driver {
    storage: IStorage;
    constructor(storage: IStorage);
    set(key: string, data: any, config?: IStorageSetConfig): void;
    get(key: string): any;
    has(key: string): boolean;
    remove(key: string): void;
    clear(): void;
    key(index?: number): string;
    isSupported(): boolean;
}
