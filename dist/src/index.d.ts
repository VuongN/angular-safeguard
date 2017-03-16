import { Locker, LockerConfig } from './Locker';
import { LockerModule } from './Locker.module';
export * from './Driver';
export * from './PolyfillDriver';
export * from './IStorage';
export * from './Locker.module';
export * from './Locker';
export * from './DriverTypes';
declare var _default: {
    ngModule: typeof LockerModule;
    providers: (typeof LockerConfig | typeof Locker)[];
};
export default _default;
