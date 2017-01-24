import {TestBed} from '@angular/core/testing'

import {LockerModule} from 'Locker.module'
import {LockerConfig} from 'Locker'


export const initTestBed = (lockerConfig?: LockerConfig) => TestBed
  .configureTestingModule(lockerConfig ? LockerModule.withConfig(lockerConfig) : LockerModule.forRoot())

