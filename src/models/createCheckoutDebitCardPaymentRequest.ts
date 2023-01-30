/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import {
  CreatePaymentAuthenticationRequest,
  createPaymentAuthenticationRequestSchema,
} from './createPaymentAuthenticationRequest';

/** Checkout credit card payment request */
export interface CreateCheckoutDebitCardPaymentRequest {
  /** Card invoice text descriptor */
  statementDescriptor?: string;
  /** Creates payment authentication */
  authentication: CreatePaymentAuthenticationRequest;
}

export const createCheckoutDebitCardPaymentRequestSchema: Schema<CreateCheckoutDebitCardPaymentRequest> = object(
  {
    statementDescriptor: ['statement_descriptor', optional(string())],
    authentication: [
      'authentication',
      lazy(() => createPaymentAuthenticationRequestSchema),
    ],
  }
);
