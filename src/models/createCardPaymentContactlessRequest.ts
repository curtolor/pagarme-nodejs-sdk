/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import {
  CreateApplePayRequest,
  createApplePayRequestSchema,
} from './createApplePayRequest';
import {
  CreateEmvDecryptRequest,
  createEmvDecryptRequestSchema,
} from './createEmvDecryptRequest';
import {
  CreateGooglePayRequest,
  createGooglePayRequestSchema,
} from './createGooglePayRequest';

/** The card payment contactless request */
export interface CreateCardPaymentContactlessRequest {
  /** The authentication type */
  type: string;
  /** The ApplePay encrypted request */
  applePay?: CreateApplePayRequest;
  /** The GooglePay encrypted request */
  googlePay?: CreateGooglePayRequest;
  /** The Emv encrypted request */
  emv?: CreateEmvDecryptRequest;
}

export const createCardPaymentContactlessRequestSchema: Schema<CreateCardPaymentContactlessRequest> = object(
  {
    type: ['type', string()],
    applePay: ['apple_pay', optional(lazy(() => createApplePayRequestSchema))],
    googlePay: [
      'google_pay',
      optional(lazy(() => createGooglePayRequestSchema)),
    ],
    emv: ['emv', optional(lazy(() => createEmvDecryptRequestSchema))],
  }
);
