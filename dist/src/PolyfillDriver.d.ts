import { Driver } from './Driver';
import { IStorageSetConfig } from './IStorage';
export declare class PollyfillDriver extends Driver {
    set(key: string, data: any, config?: IStorageSetConfig): void;
    get(key: string): any;
    has(key: string): boolean;
    key(index?: number): string;
    private _checkExpiry(key);
}
