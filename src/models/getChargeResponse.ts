/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  discriminatedGetTransactionResponseSchema,
} from '../models/discriminatedSchemas';
import {
  dict,
  lazy,
  nullable,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  GetCustomerResponse,
  getCustomerResponseSchema,
} from './getCustomerResponse';
import {
  GetInvoiceResponse,
  getInvoiceResponseSchema,
} from './getInvoiceResponse';
import { GetOrderResponse, getOrderResponseSchema } from './getOrderResponse';
import { GetTransactionResponse } from './getTransactionResponse';

/** Response object for getting a charge */
export interface GetChargeResponse {
  id: string | null;
  code: string | null;
  gatewayId: string | null;
  amount: number | null;
  status: string | null;
  currency: string | null;
  paymentMethod: string | null;
  dueAt: string | null;
  createdAt: string | null;
  updatedAt: string | null;
  lastTransaction: GetTransactionResponse;
  invoice?: GetInvoiceResponse | null;
  order?: GetOrderResponse | null;
  customer?: GetCustomerResponse | null;
  metadata: Record<string, string> | null;
  paidAt?: string | null;
  canceledAt?: string | null;
  /** Canceled Amount */
  canceledAmount: number | null;
  /** Paid amount */
  paidAmount: number | null;
  /** interest and fine paid */
  interestAndFinePaid?: number | null;
  /** Defines whether the card has been used one or more times. */
  recurrencyCycle?: string | null;
}

export const getChargeResponseSchema: Schema<GetChargeResponse> = object({
  id: ['id', nullable(string())],
  code: ['code', nullable(string())],
  gatewayId: ['gateway_id', nullable(string())],
  amount: ['amount', nullable(number())],
  status: ['status', nullable(string())],
  currency: ['currency', nullable(string())],
  paymentMethod: ['payment_method', nullable(string())],
  dueAt: ['due_at', nullable(string())],
  createdAt: ['created_at', nullable(string())],
  updatedAt: ['updated_at', nullable(string())],
  lastTransaction: [
    'last_transaction',
    lazy(() => discriminatedGetTransactionResponseSchema),
  ],
  invoice: [
    'invoice',
    optional(nullable(lazy(() => getInvoiceResponseSchema))),
  ],
  order: ['order', optional(nullable(lazy(() => getOrderResponseSchema)))],
  customer: [
    'customer',
    optional(nullable(lazy(() => getCustomerResponseSchema))),
  ],
  metadata: ['metadata', nullable(dict(string()))],
  paidAt: ['paid_at', optional(nullable(string()))],
  canceledAt: ['canceled_at', optional(nullable(string()))],
  canceledAmount: ['canceled_amount', nullable(number())],
  paidAmount: ['paid_amount', nullable(number())],
  interestAndFinePaid: ['interest_and_fine_paid', optional(nullable(number()))],
  recurrencyCycle: ['recurrency_cycle', optional(nullable(string()))],
});
