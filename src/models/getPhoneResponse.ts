/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, object, optional, Schema, string } from '../schema';

export interface GetPhoneResponse {
  countryCode?: string | null;
  number?: string | null;
  areaCode?: string | null;
}

export const getPhoneResponseSchema: Schema<GetPhoneResponse> = object({
  countryCode: ['country_code', optional(nullable(string()))],
  number: ['number', optional(nullable(string()))],
  areaCode: ['area_code', optional(nullable(string()))],
});