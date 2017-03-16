import { PollyfillDriver } from './PolyfillDriver';
import { Driver } from './Driver';
export declare const DRIVERS: {
    LOCAL: PollyfillDriver;
    SESSION: PollyfillDriver;
    MEMORY: PollyfillDriver;
    COOKIE: Driver;
};
