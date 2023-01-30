/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, Schema, string } from '../schema';

/** Fine Request */
export interface CreateFineRequest {
  /** Days */
  days: number;
  /** Type */
  type: string;
  /** Amount */
  amount: number;
}

export const createFineRequestSchema: Schema<CreateFineRequest> = object({
  days: ['days', number()],
  type: ['type', string()],
  amount: ['amount', number()],
});
