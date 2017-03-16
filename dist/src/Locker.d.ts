import { OpaqueToken } from '@angular/core';
import { IStorageSetConfig } from './IStorage';
import { Driver } from './Driver';
import { PollyfillDriver } from './PolyfillDriver';
export declare const LOCKER_USER_CONFIG: OpaqueToken;
export declare const LOCKER_DEFAULT_CONFIG_PROVIDER: {
    provide: OpaqueToken;
    useValue: {
        namespaceSeparator: string;
        defaultDriverType: PollyfillDriver;
        driverNamespace: string;
    };
};
export interface ILockerConfig {
    driverNamespace?: string;
    defaultDriverType?: Driver | Driver[];
    namespaceSeparator?: string;
}
export declare class LockerConfig {
    driverNamespace: string;
    defaultDriverType: Driver | Driver[];
    namespaceSeparator: string;
    constructor(config: ILockerConfig);
}
export declare class Locker {
    lockerConfig: LockerConfig;
    static DRIVERS: {
        LOCAL: PollyfillDriver;
        SESSION: PollyfillDriver;
        MEMORY: PollyfillDriver;
        COOKIE: Driver;
    };
    private driver;
    private namespace;
    private separator;
    constructor(lockerConfig: LockerConfig);
    setNamespace(namespace?: string): void;
    setSeparator(separator?: string): void;
    useDriver(driver: Driver | Driver[]): Locker;
    set(key: any, data: any, config?: IStorageSetConfig): void;
    get(key: any): any;
    has(key: any): boolean;
    remove(key: any): void;
    key(index?: any): string;
    clear(): void;
    private _makeKey(key);
    private _decodeKey(key);
    private _determineDriver(preferredDrivers);
}
