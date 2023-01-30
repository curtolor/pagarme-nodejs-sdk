/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { nullable, object, Schema, string } from '../schema';

export interface GetWithdrawSourceResponse {
  sourceId: string | null;
  type: string | null;
}

export const getWithdrawSourceResponseSchema: Schema<GetWithdrawSourceResponse> = object(
  {
    sourceId: ['source_id', nullable(string())],
    type: ['type', nullable(string())],
  }
);
