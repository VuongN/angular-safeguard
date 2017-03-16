(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core"], factory);
	else if(typeof exports === 'object')
		exports["angular-safeguard"] = factory(require("@angular/core"));
	else
		root["angular-safeguard"] = factory(root["@angular/core"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_6__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 10);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__DriverTypes__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__helpers__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LOCKER_USER_CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return LOCKER_DEFAULT_CONFIG_PROVIDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return LockerConfig; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Locker; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var LOCKER_USER_CONFIG = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["OpaqueToken"]('LOCKER_USER_CONFIG');
var LOCKER_DEFAULT_CONFIG_PROVIDER = {
    provide: LOCKER_USER_CONFIG,
    useValue: {
        namespaceSeparator: ':',
        defaultDriverType: __WEBPACK_IMPORTED_MODULE_1__DriverTypes__["a" /* DRIVERS */].SESSION,
        driverNamespace: ''
    }
};
var LockerConfig = (function () {
    function LockerConfig(config) {
        this.driverNamespace = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__helpers__["g" /* isNil */])(config.driverNamespace) ? '' : config.driverNamespace;
        this.defaultDriverType = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__helpers__["g" /* isNil */])(config.defaultDriverType) ? __WEBPACK_IMPORTED_MODULE_1__DriverTypes__["a" /* DRIVERS */].SESSION : config.defaultDriverType;
        this.namespaceSeparator = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__helpers__["g" /* isNil */])(config.namespaceSeparator) ? ':' : config.namespaceSeparator;
    }
    return LockerConfig;
}());
LockerConfig = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])(LOCKER_USER_CONFIG)),
    __metadata("design:paramtypes", [Object])
], LockerConfig);

var Locker = Locker_1 = (function () {
    function Locker(lockerConfig) {
        this.lockerConfig = lockerConfig;
        var defaultDriverType = lockerConfig.defaultDriverType;
        this.setNamespace();
        this.setSeparator();
        this.driver = this._determineDriver(defaultDriverType);
    }
    Locker.prototype.setNamespace = function (namespace) {
        if (namespace === void 0) { namespace = this.lockerConfig.driverNamespace; }
        this.namespace = namespace;
    };
    Locker.prototype.setSeparator = function (separator) {
        if (separator === void 0) { separator = this.lockerConfig.namespaceSeparator; }
        this.separator = separator;
    };
    Locker.prototype.useDriver = function (driver) {
        return new Locker_1({
            defaultDriverType: this._determineDriver(driver),
            driverNamespace: this.namespace,
            namespaceSeparator: this.separator
        });
    };
    Locker.prototype.set = function (key, data, config) {
        this.driver.set(this._makeKey(key), data, config);
    };
    Locker.prototype.get = function (key) {
        return this.driver.get(this._makeKey(key));
    };
    Locker.prototype.has = function (key) {
        return this.driver.has(this._makeKey(key));
    };
    Locker.prototype.remove = function (key) {
        this.driver.remove(this._makeKey(key));
    };
    Locker.prototype.key = function (index) {
        return this._decodeKey(this.driver.key(index));
    };
    Locker.prototype.clear = function () {
        this.driver.clear();
    };
    Locker.prototype._makeKey = function (key) {
        return this.namespace ? "" + this.namespace + this.separator + key : key;
    };
    Locker.prototype._decodeKey = function (key) {
        if (this.namespace)
            return key.slice(this.namespace.length + this.separator.length);
        else
            return key;
    };
    Locker.prototype._determineDriver = function (preferredDrivers) {
        if (Array.isArray(preferredDrivers))
            return preferredDrivers
                .find(function (driver) { return driver.isSupported(); }) || __WEBPACK_IMPORTED_MODULE_1__DriverTypes__["a" /* DRIVERS */].MEMORY;
        else if (preferredDrivers)
            return preferredDrivers.isSupported() ? preferredDrivers : __WEBPACK_IMPORTED_MODULE_1__DriverTypes__["a" /* DRIVERS */].MEMORY;
        else
            return __WEBPACK_IMPORTED_MODULE_1__DriverTypes__["a" /* DRIVERS */].MEMORY;
    };
    return Locker;
}());
Locker.DRIVERS = __WEBPACK_IMPORTED_MODULE_1__DriverTypes__["a" /* DRIVERS */];
Locker = Locker_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [LockerConfig])
], Locker);

var Locker_1;


/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return encode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return decode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return COOKIE_SEP; });
/* unused harmony export isInPast */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return isString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return toString; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return isNil; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return isNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return isExpired; });
/* unused harmony export is */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return convertFromJSON; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return serializeDataToString; });
// Convenience
var encode = encodeURIComponent;
var decode = decodeURIComponent;
var COOKIE_SEP = '; ';
var isInPast = function (date) { return date <= new Date(); };
var isString = function (str) { return typeof str === 'string'; };
var toString = function (obj) { return typeof obj.toUTCString === 'function' ? obj.toUTCString() : obj.toString(); };
var isNil = function (item) { return item === undefined || item === null; };
var isNumber = function (item) { return typeof item === 'number'; };
var isExpired = function (data) {
    if (!data.config)
        return false;
    var expires = data.config.expires;
    if (!expires)
        return false;
    return isInPast(expires instanceof Date ? expires : new Date(expires));
};
var is = function (ctor, value) { return value &&
    value.constructor === ctor ||
    value instanceof ctor; };
var convertFromJSON = function (data) {
    if (typeof data !== 'string') {
        return data;
    }
    else {
        try {
            return JSON.parse(data);
        }
        catch (e) {
            return data;
        }
    }
};
var serializeDataToString = function (data) { return typeof data === 'object' ? JSON.stringify(data) : data.toString(); };


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Driver; });

var LOCKER_TEST_KEY = 'LOCKER_TEST_KEY';
var Driver = (function () {
    function Driver(storage) {
        this.storage = storage;
    }
    Driver.prototype.set = function (key, data, config) {
        this.storage.setItem(key, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__["h" /* serializeDataToString */])(data), config);
    };
    Driver.prototype.get = function (key) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__["i" /* convertFromJSON */])(this.storage.getItem(key));
    };
    Driver.prototype.has = function (key) {
        return this.storage.hasOwnProperty(key);
    };
    Driver.prototype.remove = function (key) {
        this.storage.removeItem(key);
    };
    Driver.prototype.clear = function () {
        this.storage.clear();
    };
    Driver.prototype.key = function (index) {
        if (index === void 0) { index = 0; }
        return this.storage.key(index);
    };
    Driver.prototype.isSupported = function () {
        try {
            this.storage.setItem(LOCKER_TEST_KEY, LOCKER_TEST_KEY);
            this.storage.getItem(LOCKER_TEST_KEY);
            this.storage.removeItem(LOCKER_TEST_KEY);
        }
        catch (e) {
            if (false)
                console.error(e);
            return false;
        }
        return true;
    };
    return Driver;
}());



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__angular_core__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Locker__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LockerModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LockerModule = LockerModule_1 = (function () {
    function LockerModule() {
    }
    LockerModule.withConfig = function (userConfig) {
        var config = {
            provide: __WEBPACK_IMPORTED_MODULE_1__Locker__["a" /* LOCKER_USER_CONFIG */],
            useValue: userConfig
        };
        return {
            ngModule: LockerModule_1,
            providers: [__WEBPACK_IMPORTED_MODULE_1__Locker__["d" /* Locker */], __WEBPACK_IMPORTED_MODULE_1__Locker__["c" /* LockerConfig */], config]
        };
    };
    return LockerModule;
}());
LockerModule = LockerModule_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        providers: [
            __WEBPACK_IMPORTED_MODULE_1__Locker__["d" /* Locker */],
            __WEBPACK_IMPORTED_MODULE_1__Locker__["c" /* LockerConfig */],
            __WEBPACK_IMPORTED_MODULE_1__Locker__["b" /* LOCKER_DEFAULT_CONFIG_PROVIDER */]
        ]
    })
], LockerModule);

var LockerModule_1;


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__PolyfillDriver__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Driver__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__MemoryStorage__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__CookieStorage__ = __webpack_require__(8);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DRIVERS; });




var DRIVERS = {
    LOCAL: new __WEBPACK_IMPORTED_MODULE_0__PolyfillDriver__["a" /* PollyfillDriver */](localStorage),
    SESSION: new __WEBPACK_IMPORTED_MODULE_0__PolyfillDriver__["a" /* PollyfillDriver */](sessionStorage),
    MEMORY: new __WEBPACK_IMPORTED_MODULE_0__PolyfillDriver__["a" /* PollyfillDriver */](new __WEBPACK_IMPORTED_MODULE_2__MemoryStorage__["a" /* MemoryStorage */]()),
    COOKIE: new __WEBPACK_IMPORTED_MODULE_1__Driver__["a" /* Driver */](new __WEBPACK_IMPORTED_MODULE_3__CookieStorage__["a" /* CookieStorage */]())
};


/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Driver__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__helpers__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PollyfillDriver; });
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};


// This driver is a special driver to handle expiry and other options (similar to cookies)
var PollyfillDriver = (function (_super) {
    __extends(PollyfillDriver, _super);
    function PollyfillDriver() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PollyfillDriver.prototype.set = function (key, data, config) {
        this.storage.setItem(key, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__helpers__["h" /* serializeDataToString */])({ data: data, config: config }));
    };
    PollyfillDriver.prototype.get = function (key) {
        this._checkExpiry(key);
        var data = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__helpers__["i" /* convertFromJSON */])(this.storage.getItem(key));
        return (data && Reflect.has(data, 'data')) ? data.data : data;
    };
    PollyfillDriver.prototype.has = function (key) {
        this._checkExpiry(key);
        return this.storage.hasOwnProperty(key);
    };
    PollyfillDriver.prototype.key = function (index) {
        if (index === void 0) { index = 0; }
        var key = this.storage.key(index);
        this._checkExpiry(key);
        return this.storage.key(index);
    };
    PollyfillDriver.prototype._checkExpiry = function (key) {
        var data = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__helpers__["i" /* convertFromJSON */])(this.storage.getItem(key));
        if (data && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__helpers__["j" /* isExpired */])(data))
            this.remove(key);
    };
    return PollyfillDriver;
}(__WEBPACK_IMPORTED_MODULE_0__Driver__["a" /* Driver */]));



/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers__ = __webpack_require__(1);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Cookie; });

var DEFAULT_CONFIG = {};
var Cookie = (function () {
    function Cookie() {
    }
    Cookie.getAll = function () {
        return document.cookie
            .split(__WEBPACK_IMPORTED_MODULE_0__helpers__["a" /* COOKIE_SEP */])
            .filter(function (value) { return !!value; })
            .map(function (items) { return items.split('='); })
            .reduce(function (res, _a) {
            var key = _a[0], value = _a[1];
            return (res[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__["b" /* decode */])(key)] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__["b" /* decode */])(value), res);
        }, {});
    };
    Cookie.get = function (key) {
        return this.getAll()[key];
    };
    Cookie.set = function (key, value, config) {
        if (config === void 0) { config = DEFAULT_CONFIG; }
        var secure = config.secure, maxAge = config.maxAge, domain = config.domain, path = config.path, expires = config.expires;
        var cookie = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__["c" /* encode */])(key) + "=" + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__["c" /* encode */])(value);
        if (secure)
            cookie += ';secure';
        if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__["d" /* isNumber */])(maxAge) && !isNaN(maxAge))
            cookie += ";max-age=" + maxAge;
        if (domain)
            cookie += ";domain=" + domain;
        if (path)
            cookie += ";path=" + path;
        if (expires)
            cookie += ";expires=" + (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__["e" /* isString */])(expires) ? expires : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__helpers__["f" /* toString */])(expires));
        document.cookie = cookie;
    };
    Cookie.remove = function (key) {
        this.set(key, this.get(key), { maxAge: 0 });
    };
    return Cookie;
}());



/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Cookie__ = __webpack_require__(7);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CookieStorage; });

var CookieStorage = (function () {
    function CookieStorage() {
    }
    CookieStorage.prototype.hasOwnProperty = function (key) {
        return __WEBPACK_IMPORTED_MODULE_0__Cookie__["a" /* Cookie */].get(key);
    };
    CookieStorage.prototype.getItem = function (key) {
        return __WEBPACK_IMPORTED_MODULE_0__Cookie__["a" /* Cookie */].get(key);
    };
    CookieStorage.prototype.setItem = function (key, value, config) {
        __WEBPACK_IMPORTED_MODULE_0__Cookie__["a" /* Cookie */].set(key, value, config);
    };
    CookieStorage.prototype.removeItem = function (key) {
        __WEBPACK_IMPORTED_MODULE_0__Cookie__["a" /* Cookie */].remove(key);
    };
    CookieStorage.prototype.clear = function () {
        Object.keys(__WEBPACK_IMPORTED_MODULE_0__Cookie__["a" /* Cookie */].getAll())
            .forEach(function (key) { return __WEBPACK_IMPORTED_MODULE_0__Cookie__["a" /* Cookie */].remove(key); });
    };
    CookieStorage.prototype.key = function (index) {
        var cookies = Object.keys(__WEBPACK_IMPORTED_MODULE_0__Cookie__["a" /* Cookie */].getAll());
        return cookies[index];
    };
    Object.defineProperty(CookieStorage.prototype, "length", {
        get: function () {
            return Object.keys(__WEBPACK_IMPORTED_MODULE_0__Cookie__["a" /* Cookie */].getAll()).length;
        },
        enumerable: true,
        configurable: true
    });
    return CookieStorage;
}());



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemoryStorage; });
var _cache = new Map();
var getKeys = function () { return Array.from(_cache.keys()); };
var MemoryStorage = (function () {
    function MemoryStorage() {
    }
    MemoryStorage.prototype.hasOwnProperty = function (key) {
        return _cache.has(key);
    };
    MemoryStorage.prototype.getItem = function (key) {
        return _cache.get(key);
    };
    MemoryStorage.prototype.setItem = function (key, value, config) {
        _cache.set(key, value);
    };
    MemoryStorage.prototype.removeItem = function (key) {
        _cache.delete(key);
    };
    MemoryStorage.prototype.clear = function () {
        _cache.clear();
    };
    MemoryStorage.prototype.key = function (index) {
        return getKeys()[index];
    };
    Object.defineProperty(MemoryStorage.prototype, "length", {
        get: function () {
            return getKeys().length;
        },
        enumerable: true,
        configurable: true
    });
    return MemoryStorage;
}());



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Locker__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Locker_module__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Driver__ = __webpack_require__(2);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Driver", function() { return __WEBPACK_IMPORTED_MODULE_2__Driver__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__PolyfillDriver__ = __webpack_require__(5);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "PollyfillDriver", function() { return __WEBPACK_IMPORTED_MODULE_3__PolyfillDriver__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "LockerModule", function() { return __WEBPACK_IMPORTED_MODULE_1__Locker_module__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "LOCKER_USER_CONFIG", function() { return __WEBPACK_IMPORTED_MODULE_0__Locker__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "LOCKER_DEFAULT_CONFIG_PROVIDER", function() { return __WEBPACK_IMPORTED_MODULE_0__Locker__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "LockerConfig", function() { return __WEBPACK_IMPORTED_MODULE_0__Locker__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Locker", function() { return __WEBPACK_IMPORTED_MODULE_0__Locker__["d"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__DriverTypes__ = __webpack_require__(4);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DRIVERS", function() { return __WEBPACK_IMPORTED_MODULE_4__DriverTypes__["a"]; });







// angular-cli
/* harmony default export */ __webpack_exports__["default"] = {
    ngModule: __WEBPACK_IMPORTED_MODULE_1__Locker_module__["a" /* LockerModule */],
    providers: [__WEBPACK_IMPORTED_MODULE_0__Locker__["c" /* LockerConfig */], __WEBPACK_IMPORTED_MODULE_0__Locker__["d" /* Locker */]]
};


/***/ })
/******/ ]);
});
//# sourceMappingURL=locker.js.map