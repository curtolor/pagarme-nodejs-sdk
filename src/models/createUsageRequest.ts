/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';

/** Request for creating a usage */
export interface CreateUsageRequest {
  quantity: number;
  description: string;
  usedAt: string;
  /** Identification code in the client system */
  code?: string;
  /** identification group in the client system */
  group?: string;
  /** Field used in item scheme type 'Percent' */
  amount?: number;
}

export const createUsageRequestSchema: Schema<CreateUsageRequest> = object({
  quantity: ['quantity', number()],
  description: ['description', string()],
  usedAt: ['used_at', string()],
  code: ['code', optional(string())],
  group: ['group', optional(string())],
  amount: ['amount', optional(number())],
});