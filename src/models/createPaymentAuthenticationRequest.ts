/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, Schema, string } from '../schema';
import {
  CreateThreeDSecureRequest,
  createThreeDSecureRequestSchema,
} from './createThreeDSecureRequest';

/** The payment authentication request */
export interface CreatePaymentAuthenticationRequest {
  /** The Authentication type */
  type: string;
  /** The 3D-S authentication object */
  threedSecure: CreateThreeDSecureRequest;
}

export const createPaymentAuthenticationRequestSchema: Schema<CreatePaymentAuthenticationRequest> = object(
  {
    type: ['type', string()],
    threedSecure: [
      'threed_secure',
      lazy(() => createThreeDSecureRequestSchema),
    ],
  }
);
