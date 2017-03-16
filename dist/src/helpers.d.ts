import { IStorageSetConfig } from './IStorage';
export interface ExpiryData {
    config?: IStorageSetConfig;
    data: any;
}
export declare const encode: typeof encodeURIComponent;
export declare const decode: typeof decodeURIComponent;
export declare const COOKIE_SEP = "; ";
export declare const isInPast: (date: Date) => boolean;
export declare const isString: (str: string | Date) => boolean;
export declare const toString: (obj: any) => string;
export declare const isNil: (item: any) => boolean;
export declare const isNumber: (item: any) => boolean;
export declare const isExpired: (data: ExpiryData) => boolean;
export declare const is: (ctor: any, value: any) => boolean;
export declare const convertFromJSON: (data: any) => any;
export declare const serializeDataToString: (data: any) => string;
