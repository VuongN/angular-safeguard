declare const sessionStorage, localStorage

import {Injectable, Optional} from '@angular/core'

import {IStorageSetConfig} from './IStorage'
import {Driver} from './Driver'
import {PollyfillDriver} from './PolyfillDriver'
import {MemoryStorage} from './MemoryStorage'
import {CookieStorage} from './CookieStorage'
import {isNil} from './helpers'

export const DRIVERS = {
  LOCAL: new PollyfillDriver(localStorage),
  SESSION: new PollyfillDriver(sessionStorage),
  MEMORY: new PollyfillDriver(new MemoryStorage()),
  COOKIE: new Driver(new CookieStorage())
}

@Injectable()
export class LockerConfig {
  constructor(
    @Optional() public driverNamespace?: string,
    @Optional() public defaultDriverType?: Driver,
    @Optional() public namespaceSeparator?: string
  ) {
    if (isNil(this.driverNamespace))
      this.driverNamespace = ''

    if (isNil(this.defaultDriverType))
      this.defaultDriverType = DRIVERS.SESSION

    if (isNil(this.namespaceSeparator))
      this.namespaceSeparator = ':'
  }
}

@Injectable()
export class Locker {
  public static DRIVERS = DRIVERS

  private driver: Driver
  private namespace: string
  private separator: string

  constructor(public lockerConfig: LockerConfig) {
    if (!lockerConfig)
      lockerConfig = new LockerConfig()

    const {defaultDriverType} = lockerConfig

    this.setNamespace()
    this.setSeparator()

    this.driver = defaultDriverType.isSupported() ? defaultDriverType : DRIVERS.MEMORY
  }

  public setNamespace(namespace: string = this.lockerConfig.driverNamespace) {
    this.namespace = namespace
  }

  public setSeparator(separator: string = this.lockerConfig.namespaceSeparator) {
    this.separator = separator
  }

  public useDriver(driver: Driver) {
    return new Locker({
      defaultDriverType: driver.isSupported() ? driver : DRIVERS.MEMORY,
      driverNamespace: this.namespace,
      namespaceSeparator: this.separator
    })
  }

  public set(key, data, config?: IStorageSetConfig) {
    this.driver.set(this._makeKey(key), data, config)
  }

  public get(key) {
    return this.driver.get(this._makeKey(key))
  }

  public has(key) {
    return this.driver.has(this._makeKey(key))
  }

  public remove(key) {
    this.driver.remove(this._makeKey(key))
  }


  public key(index?) {
    return this._decodeKey(this.driver.key(index))
  }

  public clear() {
    this.driver.clear()
  }

  private _makeKey(key: string): string {
    return this.namespace ? `${this.namespace}${this.separator}${key}` : key
  }

  private _decodeKey(key: string): string {
    if (this.namespace)
      return key.slice(this.namespace.length + this.separator.length)
    else
      return key
  }
}
