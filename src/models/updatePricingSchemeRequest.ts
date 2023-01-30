/**
 * PagarmeApiSDKLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import {
  array,
  lazy,
  number,
  object,
  optional,
  Schema,
  string,
} from '../schema';
import {
  UpdatePriceBracketRequest,
  updatePriceBracketRequestSchema,
} from './updatePriceBracketRequest';

/** Request for updating a pricing scheme */
export interface UpdatePricingSchemeRequest {
  /** Scheme type */
  schemeType: string;
  /** Price brackets */
  priceBrackets: UpdatePriceBracketRequest[];
  /** Price */
  price?: number;
  /** Minimum price */
  minimumPrice?: number;
  /** percentual value used in pricing_scheme Percent */
  percentage?: number;
}

export const updatePricingSchemeRequestSchema: Schema<UpdatePricingSchemeRequest> = object(
  {
    schemeType: ['scheme_type', string()],
    priceBrackets: [
      'price_brackets',
      array(lazy(() => updatePriceBracketRequestSchema)),
    ],
    price: ['price', optional(number())],
    minimumPrice: ['minimum_price', optional(number())],
    percentage: ['percentage', optional(number())],
  }
);
