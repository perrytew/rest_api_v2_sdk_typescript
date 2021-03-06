"use strict";
// tslint:disable
/**
 * UltraCart Rest API V2
 * UltraCart REST API Version 2
 *
 * OpenAPI spec version: 2.0.0
 * Contact: support@ultracart.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Configuration = void 0;
var Configuration = /** @class */ (function () {
    function Configuration(param) {
        if (param === void 0) { param = {}; }
        this.apiVersion = param.apiVersion;
        this.apiKey = param.apiKey;
        this.username = param.username;
        this.password = param.password;
        this.accessToken = param.accessToken;
        this.basePath = param.basePath;
    }
    return Configuration;
}());
exports.Configuration = Configuration;
