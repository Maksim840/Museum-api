/* tslint:disable */
/* eslint-disable */
/**
 * Museum service
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface Event
 */
export interface Event {
    /**
     * 
     * @type {string}
     * @memberof Event
     */
    id: string;
    /**
     * 
     * @type {string}
     * @memberof Event
     */
    nameOfMuseum?: string;
    /**
     * 
     * @type {string}
     * @memberof Event
     */
    time?: string;
    /**
     * 
     * @type {string}
     * @memberof Event
     */
    rate?: string;
    /**
     * 
     * @type {string}
     * @memberof Event
     */
    location?: string;
}

export function EventFromJSON(json: any): Event {
    return EventFromJSONTyped(json, false);
}

export function EventFromJSONTyped(json: any, ignoreDiscriminator: boolean): Event {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'nameOfMuseum': !exists(json, 'nameOfMuseum') ? undefined : json['nameOfMuseum'],
        'time': !exists(json, 'time') ? undefined : json['time'],
        'rate': !exists(json, 'rate') ? undefined : json['rate'],
        'location': !exists(json, 'location') ? undefined : json['location'],
    };
}

export function EventToJSON(value?: Event | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'nameOfMuseum': value.nameOfMuseum,
        'time': value.time,
        'rate': value.rate,
        'location': value.location,
    };
}


